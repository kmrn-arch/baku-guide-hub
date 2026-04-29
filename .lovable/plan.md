# Baku Tourist App — v1 Rebuild Plan

A clean rebuild of the Baku travel companion. Public tourist info works without login or internet (after first visit). Account-based features (browse places, reviews, favorites) sit behind auth. Real photos wherever possible — every AI/placeholder image gets a visible "REPLACE WITH REAL PHOTO" mark so you can swap them later.

## Visual direction (surprise pick)

**"Caspian Dusk"** — inspired by Baku's seafront at golden hour and the Flame Towers.
- Deep Caspian navy background with warm amber/flame accents
- Soft cream surfaces for content cards
- Editorial typography: a tall display serif for headings, clean sans for body
- Photo-forward layouts (large hero images, generous whitespace)
- Subtle gold dividers, no heavy shadows

If you dislike it after seeing the homepage, we can swap palettes in one pass.

## Site structure

**Public (no login, works offline after first load)**
- `/` — Home: hero, "About Baku" intro, language switcher, top 6 landmark cards, quick links to emergency + transport
- `/about` — About Baku (city intro, history, culture, when to visit)
- `/emergency` — Police, ambulance, fire, tourist police, embassies. Big tap-to-call buttons.
- `/tourist-info` — Top tourist places (read-only cards, no reviews)
- `/transport` — Districts overview + metro lines + main bus routes + offline map (image + downloadable PDF)

**Gated (login required, redirects to `/auth?next=...`)**
- `/browse` — Full place catalog with filters
- `/place/:id` — Place detail with reviews
- `/favorites` — Saved places
- `/profile` — Account settings

**Auth**
- `/auth` — Email + password (Lovable Cloud), with Google sign-in

## Languages

EN, RU, AZ, TR — language switcher in header, persists per user. All public page copy translated. UI strings via a light i18n setup (no heavy library).

## Imagery strategy

1. Use real, openly-licensed Baku photos where I can source them (Wikimedia Commons, Unsplash) for major landmarks: Flame Towers, Heydar Aliyev Center, Old City (Icherisheher), Maiden Tower, Baku Boulevard, Fountains Square, Nizami Street, Heydar Mosque.
2. For places without a confirmed real photo, render a clearly-marked placeholder card with a yellow "📷 REPLACE WITH REAL PHOTO" ribbon and a TODO comment in code listing the place name, so you can drop replacements in later.
3. No AI-generated faux-photos of real landmarks.

## Offline behavior

- Public pages and emergency data hardcoded in source → instant load, available offline once cached by the browser
- Service worker caches public routes, images, and the PDF map
- Downloadable assets: `baku-pocket-guide.pdf` and `baku-metro-map.jpg`
- Migration to Lovable Cloud DB deferred to v2

## Tech notes (for reference)

- TanStack Start + Tailwind, file-based routes under `src/routes/`
- Lovable Cloud for auth (email/password + Google) and later for places/reviews DB
- Auth gate via `_authenticated` pathless layout route with `beforeLoad` redirect to `/auth?next=...`
- i18n: lightweight context + JSON dictionaries per language in `src/i18n/`
- Service worker registered in root for offline caching of public routes
- Custom theme tokens in `src/styles.css` (Caspian navy, flame amber, cream)

## What ships in v1

```text
Public           Auth gate            Account features
─────────        ──────────           ─────────────────
/                /auth?next=...   →   /browse
/about                                /place/:id
/emergency                            /favorites
/tourist-info                         /profile
/transport
  └─ offline map (img + PDF)
```

4-language switcher · Caspian Dusk theme · Real photos with marked TODOs for swaps · Service-worker offline cache.

## Out of scope for v1 (planned for v2 after BMC review)

- Itineraries / day planner
- Admin panel + DB-backed emergency/transport data
- Reviews moderation, ratings aggregation
- Multi-city expansion (Tbilisi, Istanbul, etc.)
- Price guide, "how it works", roadmap sections from the previous build
