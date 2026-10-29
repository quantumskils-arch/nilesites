#!/usr/bin/env python3
"""Review & Reputation Watcher v1 — drafts replies to new Google reviews, never auto-posts.

Modes:
  python review_watcher.py check   scan all consenting clients for new reviews + draft replies
  python review_watcher.py posted  mark a review_id as manually posted by operator (interactive)

Runs in the scrapers container via bind mount:
  docker compose run --rm --no-deps -v .../seowatch:/app/seowatch -v .../.env:/run/secrets/or_env:ro \
    scrapers python /app/seowatch/review_watcher.py check

Read-only. Only clients with consent:true AND a place_id in clients.json.
Drafts go to Telegram for manual operator approval — never auto-posted to Google.
"""
import os, re, json, sqlite3, logging, time, html as htmlmod
from datetime import datetime, timezone
import requests

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("reviewwatcher")

BASE = os.path.dirname(os.path.abspath(__file__))
CLIENTS_PATH = os.path.join(BASE, "clients.json")
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
        log.warning("env file not found at %s, using process env only", ENV_PATH)
    return env


ENV = load_env()
TG_TOKEN = ENV.get("TELEGRAM_BOT_TOKEN") or os.environ.get("TELEGRAM_BOT_TOKEN")
CHAT_ID = ENV.get("SEOWATCH_CHAT_ID") or ENV.get("QUEUE_CHAT_ID") or "7935685275"
GROQ_KEY = ENV.get("GROQ_API_KEY") or os.environ.get("GROQ_API_KEY")
PLACES_KEY = ENV.get("GOOGLE_PLACES_API_KEY") or os.environ.get("GOOGLE_PLACES_API_KEY")


def tg_send(text):
    if not TG_TOKEN:
        log.error("no TELEGRAM_BOT_TOKEN — printing instead:\n%s", text)
        print(text)
        return
    for i in range(0, len(text), 4000):
        chunk = text[i : i + 4000]
        r = requests.post(
            f"https://api.telegram.org/bot{TG_TOKEN}/sendMessage",
            json={"chat_id": CHAT_ID, "text": chunk},
            timeout=30,
        )
        log.info("telegram send -> %s", r.status_code)


def load_clients():
    with open(CLIENTS_PATH) as f:
        return [c for c in json.load(f) if c.get("consent") and c.get("place_id")]


def db():
    con = sqlite3.connect(DB_PATH)
    con.execute(
        """CREATE TABLE IF NOT EXISTS reviewed (
        review_id TEXT PRIMARY KEY, client TEXT, author TEXT, rating INTEGER,
        text TEXT, ts INTEGER, status TEXT DEFAULT 'drafted'"""
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


def strip_tags(s):
    return htmlmod.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()


def fetch_reviews(place_id):
    """Return list of {review_id, author, rating, text, time, relative_time}. Needs PLACES_KEY."""
    if not PLACES_KEY:
        log.error("GOOGLE_PLACES_API_KEY not set — cannot fetch reviews")
        return []
    url = (
        "https://maps.googleapis.com/maps/api/place/details/json"
        f"?place_id={place_id}&fields=reviews,name&key={PLACES_KEY}"
    )
    try:
        r = requests.get(url, timeout=30)
    except Exception as e:
        log.warning("places request failed for %s: %s", place_id, e)
        return []
    if r.status_code != 200:
        log.warning("places API %s for %s", r.status_code, place_id)
        return []
    data = r.json()
    if data.get("status") != "OK":
        log.warning("places status %s for %s: %s", data.get("status"), place_id, data.get("error_message"))
        return []
    result = data.get("result") or {}
    biz_name = result.get("name", "?")
    out = []
    for rv in (result.get("reviews") or []) or []:
        author = strip_tags(rv.get("author_name", "?"))
        text = strip_tags(rv.get("text", ""))
        # review_id: Places doesn't return a stable ID; synthesize from author+time+text hash
        import hashlib

        rid = hashlib.sha256(
            f"{place_id}|{author}|{rv.get('time',0)}|{text[:80]}".encode()
        ).hexdigest()[:24]
        out.append(
            {
                "review_id": rid,
                "author": author,
                "rating": rv.get("rating", 0),
                "text": text,
                "time": rv.get("time", 0),
                "relative_time": rv.get("relative_time_description", ""),
                "biz_name": biz_name,
            }
        )
    return out


def draft_reply(author, rating, text, business_name):
    """Draft a short, warm, professional reply via Groq. Falls back to a template."""
    fallback = (
        f"Thank you {author} for your {rating}-star review, {business_name} team here. "
        f"We appreciate your feedback and hope to serve you again soon."
    )
    if not GROQ_KEY:
        return fallback
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


def run_check():
    if not PLACES_KEY:
        log.error("GOOGLE_PLACES_API_KEY is required but not set. Aborting.")
        return 1
    con = db()
    sent = 0
    for client in load_clients():
        place_id = client["place_id"]
        name = client.get("name", "?")
        contact = client.get("contact", "?")
        log.info("checking reviews for %s (%s)", name, place_id)
        try:
            reviews = fetch_reviews(place_id)
        except Exception as e:
            log.warning("fetch failed for %s: %s", name, e)
            continue
        for rv in reviews:
            if already_done(con, rv["review_id"]):
                continue
            reply = draft_reply(rv["author"], rv["rating"], rv["text"], rv["biz_name"])
            msg = (
                f"⭐ New Google review for *{name}*\n"
                f"{rv['author']} — {rv['rating']}/5 ⭐\n"
                f"{rv['relative_time']}\n"
                f"{rv['text']}\n\n"
                f"📝 *Draft reply:*\n{reply}\n\n"
                f"_Copy/paste this into Google manually. Operator: mark posted when done._\n"
                f"(Contact: {contact})"
            )
            tg_send(msg)
            mark(
                con,
                rv["review_id"],
                name,
                rv["author"],
                rv["rating"],
                rv["text"],
                "drafted",
            )
            sent += 1
            time.sleep(1)
    con.close()
    log.info("check complete — %d new review(s) drafted", sent)
    return 0


def run_posted(review_id):
    """Mark a review_id as posted (operator confirms they copied it to Google)."""
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
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == "posted":
        if len(sys.argv) < 3:
            print("usage: review_watcher.py posted <review_id>")
            raise SystemExit(1)
        raise SystemExit(run_posted(sys.argv[2]))
    raise SystemExit(run_check())
