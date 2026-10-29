2026-10-29 E1 portfolio done (commit e9ba7c6) — relabeled Opportunity Radar + Uganda Job Vault as "Our own products", removed Little Steps Kindergarten & Victory Chapel Church, changed heading to "Selected work, including our own products", cleaned descriptions.
2026-10-29 E2+E3 done (commit 7b15b13)
2026-10-29 E4 home done (commit 872b728)
2026-10-29 E4 services done (commit e45576b)
2026-10-29 E5 ai-agents done (commit ec635c0)
2026-10-29 E6 pricing done (commit 487ce0b)
2026-10-29 E7 rescue done (commit c17ed0f)
2026-10-29 E8 telegram-bot done (commit 2ba64b2)
2026-10-29 E9 locations done (commit e1fafc7)

2026-10-29 WATCHDOG VERIFIED on VPS quantum-server: weekly audit Mon 04:00 UTC (07:00 EAT) + daily ping 05:15 UTC (08:15 EAT) via seo_watchdog.py; files seo_watchdog.py+queue_worker.py+history.db+clients.json (2 consenting clients); /api/check-request returns {"configured":true}. => Watchdog claim VERIFIED running.
2026-10-29 REVIEW WATCHER: NOT built yet — no implementation in repo/docs. Page marks it "◆ CUSTOM BUILD, 2-4 weeks, UGX 80k/mo" (honest framing) but it is a from-scratch build for first client. Reference scope documented below.

2026-10-29 REVIEW WATCHER DEPLOYED to VPS quantum-server:
- Script: /home/ubuntu/opportunityradar/seowatch/review_watcher.py
- Mode: check (drafts replies to new Google reviews via Places API + Groq)
- Delivery: Telegram drafts to operator for manual copy/paste to Google
- Cron: 0 3 * * * (06:00 EAT daily) — installed in ubuntu crontab
- Logs: /home/ubuntu/opportunityradar/logs/reviewwatcher.log
- Requires: GOOGLE_PLACES_API_KEY in /home/ubuntu/opportunityradar/.env (NOT yet provisioned)
- Clients: clients.json updated with place_id fields (empty — needs client Place IDs)
- Syntax: OK

2026-10-29 PROPOSAL DECK DEPLOYED to VPS quantum-server:
- Script: /home/ubuntu/opportunityradar/seowatch/proposal_deck.py
- Modes: build <input.json> [output.pdf] | sample
- Uses fpdf2 + DejaVu fonts (Python 3.8 compatible)
- Output: ./proposals/ directory (3-page branded PDF)
- Deliver: operator sends PDF to client via WhatsApp/Telegram/email
- Tested: sample PDF generated successfully (31KB, 3 pages)
- Syntax: OK

NEXT STEPS (user action required):
1. Provision GOOGLE_PLACES_API_KEY at Google Cloud Console -> Places API, add to .env
2. Add client Place IDs to clients.json (consent:true required)
3. Review Watcher will then auto-draft replies on daily cron

2026-10-29 REVIEW WATCHER v2 (manual intake, NO Google Places API key):
- Rewrote review_watcher.py to use reviews_inbox.json manual intake instead of Places API polling
- Zero third-party API cost — Groq (free tier) for drafting, Telegram for delivery
- Drafts go to Telegram for manual copy/paste to Google (legitimate, no ToS violation)
- Commands: check / add / posted <review_id>
- Cron: 0 3 * * * (06:00 EAT daily) installed on VPS
- Deployed to VPS, syntax OK

2026-10-29 PROPOSAL DECK deployed to VPS:
- /home/ubuntu/opportunityradar/seowatch/proposal_deck.py
- fpdf2 + DejaVu fonts (Python 3.8 compatible)
- Tested: sample PDF generated (31KB, 3 pages)

Both agent scripts committed to main (2246bc2).

2026-10-29 PR #2: remove unfulfillable claims + 3D globe:
- Home page: removed AgentGlobe 3D globe (bad on mobile), removed "registered agency with a team" claim, changed "we handle it all" to "guide you through setup", changed AI agents card from "24/7 watchdogs/radars from 80K" to "watchdog & Telegram bots from 80K"
- Services: GBP changed "verification handled for you" to "guide you through verification"
- Pricing: removed "MoMo payment integration" from Standard plan (no MoMo service)
- AgentsPage: removed "24/7 monitoring"/"around the clock"/"works 24/7" (Watchdog is daily 08:15 EAT + weekly Mon 07:00 EAT)
- chat-knowledge.ts: removed 24/7, 99.9% uptime, MoM integration claims, Little Steps/Victory Chapel portfolio names, Luganda/Swahili, instant replies
- seo.ts: removed WhatsApp bot/mobile money keywords and descriptions
- Build green on preview + production. Deploy script output empty on all 11 pages (pass).
- NOTE: page titles not all unique (pre-existing metadata issue: home/services/pricing/contact/telegram-bot/akiba-ai share default title). Not introduced by this PR.

Production deployed: https://nilesites-czwogrydo-quantumskils-archs-projects.vercel.app (aliased nilesites.vercel.app)
Rollback ID: nilesites-6t77daga2-quantumskils-archs-projects.vercel.app (commit f0b34bc)
