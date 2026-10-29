#!/usr/bin/env python3
"""Review & Reputation Watcher v2 — manual intake, zero third-party API cost.

Google does not offer a free API for reading Google Business Profile reviews
(the Places API requires a paid billing account). This version uses **manual
intake**: you paste new reviews into `reviews_inbox.json` (or forward Google's
review-notification email and paste the text), and the script drafts replies
via Groq, sending them to Telegram for you to copy/paste into Google.

Modes:
  python review_watcher.py check     draft replies for all new inbox entries
  python review_watcher.py posted    mark a review_id as manually posted
  python review_watcher.py add       interactive: add a new review to the inbox

Runs in the scrapers container via bind mount, or directly on the host.

Read-only. Drafts go to Telegram for manual operator approval — never auto-posted.
"""
import json, os, re, sqlite3, logging, time, html as htmlmod, sys
from datetime import datetime

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("reviewwatcher")

BASE = os.path.dirname(os.path.abspath(__file__))
INBOX_PATH = os.path.join(BASE, "reviews_inbox.json")
DB_PATH = os.path.join(BASE, "history.db")
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"

ENV_PATH = os.environ.get("OR_ENV_FILE", "/run/secrets/or_env")


def load_env():
    env = {}
    try:
        with open(ENV_PATH) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip()
    except FileNotFoundError:
        pass
    return env


ENV = load_env()
TG_TOKEN = ENV.get("TELEGRAM_BOT_TOKEN") or os.environ.get("TELEGRAM_BOT_TOKEN")
CHAT_ID = ENV.get("SEOWATCH_CHAT_ID") or ENV.get("QUEUE_CHAT_ID") or "7935685275"
GROQ_KEY = ENV.get("GROQ_API_KEY") or os.environ.get("GROQ_API_KEY")


def tg_send(text):
    if not TG_TOKEN:
        log.error("no TELEGRAM_BOT_TOKEN — printing instead:\n%s", text)
        print(text)
        return
    import requests
    for i in range(0, len(text), 4000):
        chunk = text[i : i + 4000]
        r = requests.post(
            f"https://api.telegram.org/bot{TG_TOKEN}/sendMessage",
            json={"chat_id": CHAT_ID, "text": chunk},
            timeout=30,
        )
        log.info("telegram send -> %s", r.status_code)


def strip_tags(s):
    return htmlmod.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()


def db():
    con = sqlite3.connect(DB_PATH)
    con.execute(
        "CREATE TABLE IF NOT EXISTS reviewed ("
        "review_id TEXT PRIMARY KEY, "
        "client TEXT, author TEXT, rating INTEGER, "
        "text TEXT, ts INTEGER, status TEXT DEFAULT 'drafted')"
    )
    con.commit()
    return con


def already_done(con, review_id):
    return con.execute("SELECT 1 FROM reviewed WHERE review_id=?", (review_id,)).fetchone() is not None


def mark(con, review_id, client, author, rating, text, status="drafted"):
    con.execute(
        "INSERT OR IGNORE INTO reviewed VALUES (?,?,?,?,?,?,?)",
        (review_id, client, author, rating, text, int(time.time()), status),
    )
    con.commit()


def draft_reply(author, rating, text, business_name):
    """Draft a short, warm, professional reply via Groq. Falls back to a template."""
    fallback = (
        f"Thank you {author} for your {rating}-star review, {business_name} team here. "
        f"We appreciate your feedback and hope to serve you again soon."
    )
    if not GROQ_KEY:
        return fallback
    import requests
    prompt = (
        f"Write a short, warm, professional Google review reply for '{business_name}'.\n"
        f"Reviewer: {author}\nRating: {rating}/5 stars\nReview: {text}\n\n"
        f"Rules: under 60 words, simple English, no excessive emojis, sign as 'The {business_name} team', "
        f"invite them back. Plain text only, no markdown."
    )
    try:
        r = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {GROQ_KEY}"},
            json={
                "model": "openai/gpt-oss-120b",
                "temperature": 0.4,
                "max_tokens": 200,
                "messages": [{"role": "user", "content": prompt}],
            },
            timeout=60,
        )
        if r.ok:
            return r.json()["choices"][0]["message"]["content"].strip()
        log.warning("groq reply draft failed: %s %s", r.status_code, r.text[:200])
    except Exception as e:
        log.warning("groq draft exception: %s", e)
    return fallback


def load_inbox():
    if not os.path.exists(INBOX_PATH):
        return []
    with open(INBOX_PATH) as f:
        data = json.load(f)
    return data if isinstance(data, list) else []


def save_inbox(items):
    with open(INBOX_PATH, "w") as f:
        json.dump(items, f, indent=2)


def add_review_interactive():
    """Add a new review to the inbox (manual intake)."""
    client = input("Client/business name: ").strip()
    author = input("Reviewer name: ").strip()
    rating = input("Rating (1-5): ").strip()
    print("Paste the review text (press Enter twice to finish):")
    lines = []
    while True:
        line = input()
        if line == "" and lines and lines[-1] == "":
            break
        lines.append(line)
    text = "\n".join(lines).strip()
    if not text:
        print("Empty review text — not added.")
        return 1
    items = load_inbox()
    import hashlib
    rid = hashlib.sha256(f"{client}|{author}|{text[:80]}".encode()).hexdigest()[:24]
    items.append({
        "review_id": rid,
        "client": client,
        "author": author,
        "rating": int(rating) if rating.isdigit() else 0,
        "text": text,
        "added_at": datetime.utcnow().isoformat() + "Z",
    })
    save_inbox(items)
    print(f"added review {rid} to inbox")
    return 0


def run_check():
    items = load_inbox()
    if not items:
        log.info("inbox empty — nothing to draft")
        return 0
    con = db()
    sent = 0
    remaining = []
    for item in items:
        rid = item["review_id"]
        if already_done(con, rid):
            continue
        reply = draft_reply(item["author"], item["rating"], item["text"], item["client"])
        msg = (
            f"⭐ New Google review for *{item['client']}*\n"
            f"{item['author']} — {item['rating']}/5 ⭐\n"
            f"{item['text']}\n\n"
            f"📝 *Draft reply:*\n{reply}\n\n"
            f"_Copy/paste this into Google manually. Mark posted when done._"
        )
        tg_send(msg)
        mark(con, rid, item["client"], item["author"], item["rating"], item["text"], "drafted")
        sent += 1
        time.sleep(1)
    # keep only not-yet-drafted items in inbox
    drafted_ids = {r[0] for r in con.execute("SELECT review_id FROM reviewed").fetchall()}
    remaining = [i for i in items if i["review_id"] not in drafted_ids]
    save_inbox(remaining)
    con.close()
    log.info("check complete — %d new review(s) drafted, %d remaining in inbox", sent, len(remaining))
    return 0


def run_posted(review_id):
    con = db()
    row = con.execute("SELECT client, author FROM reviewed WHERE review_id=?", (review_id,)).fetchone()
    if not row:
        print(f"review_id {review_id} not found")
        con.close()
        return 1
    con.execute("UPDATE reviewed SET status='posted' WHERE review_id=?", (review_id,))
    con.commit()
    con.close()
    print(f"marked {review_id} ({row[0]} / {row[1]}) as posted")
    return 0


if __name__ == "__main__":
    if len(sys.argv) > 1:
        cmd = sys.argv[1]
        if cmd == "posted":
            if len(sys.argv) < 3:
                print("usage: review_watcher.py posted <review_id>")
                sys.exit(1)
            sys.exit(run_posted(sys.argv[2]))
        if cmd == "add":
            sys.exit(add_review_interactive())
        if cmd == "check":
            sys.exit(run_check())
    print("usage: review_watcher.py check   # draft replies for new inbox entries")
    print("       review_watcher.py add     # add a review to the inbox interactively")
    print("       review_watcher.py posted <review_id>   # mark as manually posted to Google")
    sys.exit(1)
