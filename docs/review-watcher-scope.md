# Review & Reputation Watcher — Reference Implementation Scope

**Status:** NOT built. No implementation in repo or docs.
**Page claim:** "Review & Reputation Watcher — UGX 80,000/mo add-on — ◆ CUSTOM BUILD, 2–4 weeks."
**Verdict:** Page framing is honest (marked custom build), but it is a from-scratch build for the first paying client. Not shelf-ready.

---

## Core capability (what it must do)

1. **Detect new Google reviews** for a client's Business Profile (compare against `history.db`, only flag unseen review IDs).
2. **Draft a reply** to each new review using Groq LLM (same key already on VPS).
3. **Route draft to operator Telegram** for manual approval — NEVER auto-post (site rule: "Agents draft, humans approve").
4. **Operator posts manually** to Google Business (copy/paste from Telegram).
5. **Log outcome** (posted / skipped / opt-out) in SQLite so the same review isn't re-drafted.

## Consent & safety model (copy seo_watchdog pattern)

- Only monitor clients listed in `clients.json` with `"consent": true` (seo_watchdog already enforces this).
- Read-only: fetch public review data only. No login, no scraping behind auth, no brute force.
- GET-only calls to public endpoints.
- Drafts carry an opt-out line ("Reply STOP to opt out") — matches queue_worker.py convention.

## Technical approach (buildable with existing tools)

| Component | Tool / source | Notes |
|---|---|---|
| Language/runtime | Python 3 + `requests` + `sqlite3` | Same as seo_watchdog.py, queue_worker.py (already on VPS scrapers container) |
| Scheduling | cron + `docker compose run --rm scrapers python ...` | Same bind-mount pattern as seo_watchdog / queue_worker / lead_finder |
| Review data source | Google Places API (API key) OR public Google reviews page fetch | Places API needs a Google Cloud API key (simplest). Public-page scraping is fragile (HTML changes break it) — avoid for v1. |
| Reply drafting | Groq `openai/gpt-oss-120b` | Key already on VPS (`GROQ_API_KEY` in `.env`) |
| Delivery | Telegram Bot API → operator chat | `TELEGRAM_BOT_TOKEN` + `SEOWATCH_CHAT_ID`/`LEAD_DIGEST_CHAT_ID` already on VPS |
| State/history | SQLite `history.db` | Same pattern as seo_watchdog (review_id primary key) |
| Env file | `/run/secrets/or_env` injected via docker compose | Already used by all seowatch scripts |

## What is NOT available yet (must be provisioned before v1)

- **Google Places API key** — not confirmed present in VPS `.env`. Needed to read reviews reliably. Without it, the only option is scraping public review pages (fragile, not recommended).
- **Client onboarding flow** — no UI exists to add a client + Place ID + consent flag. v1 would edit `clients.json` manually (acceptable for build-to-order).

## Reference implementation skeleton (v1, single file `review_watcher.py`)

```python
#!/usr/bin/env python3
"""Review & Reputation Watcher v1 — drafts replies to new Google reviews, never auto-posts.

Modes:
  python review_watcher.py check   scan all consenting clients for new reviews + draft replies
  python review_watcher.py posted  (optional) mark a review_id as manually posted by operator

Runs in scrapers container via bind mount:
  docker compose run --rm ... scrapers python /app/seowatch/review_watcher.py check

Read-only. Only clients with consent:true in clients.json. Drafts go to Telegram for manual approval.
"""
import os, re, json, sqlite3, logging, time
from datetime import datetime, timezone
import requests

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
log = logging.getLogger("reviewwatcher")

BASE = os.path.dirname(os.path.abspath(__file__))
CLIENTS_PATH = os.path.join(BASE, "clients.json")
DB_PATH = os.path.join(BASE, "history.db")
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/126.0 Safari/537.36"

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
TG_TOKEN = ENV.get("TELEGRAM_BOT_TOKEN")
CHAT_ID = ENV.get("SEOWATCH_CHAT_ID") or ENV.get("LEAD_DIGEST_CHAT_ID") or "7935685275"
GROQ_KEY = ENV.get("GROQ_API_KEY")
PLACES_KEY = ENV.get("GOOGLE_PLACES_API_KEY")  # MUST be provisioned

def tg_send(text):
    if not TG_TOKEN:
        print(text); return
    for i in range(0, len(text), 4000):
        requests.post(f"https://api.telegram.org/bot{TG_TOKEN}/sendMessage",
                      json={"chat_id": CHAT_ID, "text": text[i:i+4000]}, timeout=30)

def load_clients():
    with open(CLIENTS_PATH) as f:
        return [c for c in json.load(f) if c.get("consent")]

def db():
    con = sqlite3.connect(DB_PATH)
    con.execute("""CREATE TABLE IF NOT EXISTS reviewed (
        review_id TEXT PRIMARY KEY, client TEXT, author TEXT, rating INTEGER,
        text TEXT, ts INTEGER, status TEXT DEFAULT 'drafted'""")
    con.commit(); return con

def already_done(con, review_id):
    return con.execute("SELECT 1 FROM reviewed WHERE review_id=?", (review_id,)).fetchone() is not None

def mark(con, review_id, client, author, rating, text, status="drafted"):
    con.execute("INSERT OR IGNORE INTO reviewed VALUES (?,?,?,?,?,?,?)",
                (review_id, client, author, rating, text, int(time.time()), status))
    con.commit()

def fetch_reviews(place_id):
    """Return list of {review_id, author, rating, text, time}. Needs PLACES_KEY."""
    if not PLACES_KEY:
        log.error("GOOGLE_PLACES_API_KEY not set — cannot fetch reviews")
        return []
    url = ("https://maps.googleapis.com/maps/api/place/details/json"
           f"?place_id={place_id}&fields=reviews&key={PLACES_KEY}")
    r = requests.get(url, timeout=30)
    if r.status_code != 200:
        log.warning("places API %s for %s", r.status_code, place_id); return []
    data = r.json()
    if data.get("status") != "OK":
        log.warning("places status %s for %s", data.get("status"), place_id); return []
    out = []
    for rv in (data.get("result") or {}).get("reviews", []) or []:
        out.append({
            "review_id": rv.get("author_name", "") + "|" + str(rv.get("time", "")),
            "author": rv.get("author_name", "?"),
            "rating": rv.get("rating", 0),
            "text": rv.get("text", ""),
            "time": rv.get("time", 0),
        })
    return out

def draft_reply(author, rating, text, business_name):
    if not GROQ_KEY:
        return f"Thank you {author} for your {rating}-star review! We appreciate your feedback."
    prompt = (f"Write a short, warm, professional reply to this Google review for {business_name}.\n"
              f"Reviewer: {author} | Rating: {rating}/5 | Review: {text}\n"
              f"Rules: under 60 words, no emojis overload, sign as 'The {business_name} team', "
              f"invite them back. Plain text only.")
    r = requests.post("https://api.groq.com/openai/v1/chat/completions",
        headers={"Authorization": f"Bearer {GROQ_KEY}"},
        json={"model": "openai/gpt-oss-120b", "temperature": 0.4, "max_tokens": 200,
              "messages": [{"role": "user", "content": prompt}]}, timeout=30)
    if r.ok:
        return r.json()["choices"][0]["message"]["content"].strip()
    return f"Thank you {author} for your {rating}-star review!"

def run_once():
    if not TG_TOKEN:
        log.warning("no TELEGRAM_BOT_TOKEN — printing drafts only")
    con = db()
    for client in load_clients():
        place_id = client.get("place_id")
        name = client.get("name", "?")
        if not place_id:
            log.warning("%s has no place_id, skipping", name); continue
        for rv in fetch_reviews(place_id):
            if already_done(con, rv["review_id"]): continue
            reply = draft_reply(rv["author"], rv["rating"], rv["text"], name)
            msg = (f"⭐ New Google review for {name}\n"
                   f"{rv['author']} — {rv['rating']}/5\n{rv['text']}\n\n"
                   f"📝 Draft reply:\n{reply}\n\n"
                   f"Copy/paste this reply to Google manually. (Reply STOP to opt out.)")
            tg_send(msg)
            mark(con, rv["review_id"], name, rv["author"], rv["rating"], rv["text"], "drafted")
            log.info("drafted reply for %s / %s", name, rv["review_id"])
    con.close()

if __name__ == "__main__":
    run_once()
```

## Cron entry (v1)
```
# Review Watcher: scan for new reviews daily 06:00 EAT (03:00 UTC)
0 3 * * * cd /home/ubuntu/opportunityradar && /usr/bin/docker compose run --rm --no-deps -v /home/ubuntu/opportunityradar/seowatch:/app/seowatch -v /home/ubuntu/opportunityradar/.env:/run/secrets/or_env:ro scrapers python /app/seowatch/review_watcher.py check >> /home/ubuntu/opportunityradar/logs/reviewwatcher.log 2>&1
```

## Clients.json additions needed (manual, v1)
Add to existing `clients.json`:
```json
{
  "name": "Client Business",
  "website": "https://client.com",
  "place_id": "ChIJ...",   # Google Place ID (from Google Cloud Console)
  "contact": "client phone",
  "plan": "review-watcher",
  "consent": true
}
```

## Honest limitations to tell the client
- **No auto-post:** replies are drafted only; the operator must copy/paste into Google. (Site rule: agents draft, humans approve.)
- **Needs Google Places API key:** without it, review fetching is unreliable/fragile.
- **One reply per review:** once drafted + logged, it won't re-draft even if operator hasn't posted yet (operator tracks manually).
- **English only** for now (matches Telegram bot scope).

## Build estimate
**2–4 weeks** matches the page claim IF a Google Places API key is provisioned. Without the key, add 1–2 weeks for key setup + testing, or fall back to fragile page scraping (not recommended).

---

**Bottom line:** The Review Watcher claim is achievable but NOT pre-built. It requires a Google Places API key and a new `review_watcher.py` modeled on `seo_watchdog.py`/`queue_worker.py`. Do not sell it as "ready today" — sell it as build-to-order with a 2–4 week build, keyed to Places API provisioning.
