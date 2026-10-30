# NileSites Subtle Polish (Approach A) — Design Plan

**Goal:** Same identity (navy #0a1628 + blue/amber gradient, Playfair + DM Sans, framer-motion), pro execution.
**Scope:** Appearance only. No logic, copy, pricing, claims, canonicals, privacy/terms, or client-site changes.

## What changes

1. **globals.css** — richer palette vars, subtle noise texture background, refined glow/card-hover utilities, smoother transitions.
2. **page.tsx (Home)** — hero: deeper gradient depth, bolder headline, refined stat cards (border + soft glow), service cards: hover lift + elevated art.
3. **CTASection.tsx** — button glow refinement, cleaner particle fade.
4. **Header.tsx** — subtle header blur refinement, nav hover state polish.
5. **Footer.tsx** — subtle row separation, contact card depth.
6. **ServiceArt.tsx** — slight depth on SVG fills/strokes.
7. **AgentsPage.tsx** — agent card hover already good; minor border glow refinement.
8. **ChatBot.tsx** — panel shadow/depth refinement.

## What stays identical
- All copy, prices, claims, metadata, titles, SEO, routes, chat logic.
- No code logic changes anywhere.

## Verification
- `npx next build` green, lint 0 errors.
- Gate grep (banned terms) = zero matches.
- Titles remain unique across all 14 routes.
- Deploy preview → production, record IDs.
