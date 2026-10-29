# Review & Reputation Watcher — Deployment Status

**Status:** DEPLOYED to VPS quantum-server (`/home/ubuntu/opportunityradar/seowatch/review_watcher.py`)
**Cost model:** Zero third-party API cost (no Google Places key needed)
**Delivery:** Telegram drafts → operator copy/pastes into Google manually

---

## Why no Google Places API key

Google does **not** offer a free API for reading Google Business Profile reviews. The Places API requires a paid billing account. Instead of scraping (ToS violation) or asking you to pay Google, this version uses **manual intake**:

1. Client gets Google's "New review" email notification
2. You (or the client) paste the review text into `reviews_inbox.json` via `review_watcher.py add`
3. Script drafts a reply via Groq (free tier), sends to Telegram
4. You copy/paste the draft into Google manually
5. Mark as posted with `review_watcher.py posted <review_id>`

This is legitimate, free, and sustainable.

---

## Commands (run on VPS or locally)

```
# Add a new review to the inbox (interactive)
python3 review_watcher.py add

# Draft replies for everything in the inbox, send to Telegram
python3 review_watcher.py check

# Mark a review as manually posted to Google (prevents re-drafting)
python3 review_watcher.py posted <review_id>
```

---

## Cron (installed on VPS)

Daily at 03:00 UTC (06:00 EAT) — checks `reviews_inbox.json` for new entries:

```
0 3 * * * cd /home/ubuntu/opportunityradar && /usr/bin/docker compose run --rm --no-deps -v /home/ubuntu/opportunityradar/seowatch:/app/seowatch -v /home/ubuntu/opportunityradar/.env:/run/secrets/or_env:ro scrapers python /app/seowatch/review_watcher.py check >> /home/ubuntu/opportunityradar/logs/reviewwatcher.log 2>&1
```

---

## Files deployed to VPS

| File | Location |
|------|----------|
| review_watcher.py | `/home/ubuntu/opportunityradar/seowatch/review_watcher.py` |
| proposal_deck.py | `/home/ubuntu/opportunityradar/seowatch/proposal_deck.py` |
| clients.json | `/home/ubuntu/opportunityradar/seowatch/clients.json` |
| history.db | `/home/ubuntu/opportunityradar/seowatch/history.db` |
| reviews_inbox.json | created on first `add` run |
| Logs | `/home/ubuntu/opportunityradar/logs/reviewwatcher.log` |

---

## What you tell clients

"We don't auto-post to Google (that would violate Google's terms). Instead: when you get a new review, forward it to us. We draft a professional reply within the day, send it to you on Telegram, and you paste it into Google. UGX 80,000/month."

This is honest, legitimate, and costs you nothing in third-party APIs.
