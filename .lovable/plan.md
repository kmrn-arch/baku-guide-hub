
# GoLocal v2 — Startup landing site (hybrid with Baku live demo)

## Concept

The site becomes **GoLocal**, a startup marketing/promo site for a smart travel-assistant app. The existing Baku tourist pages stay and are presented as a **"Live Demo — Baku"** so visitors can experience the product, not just read about it. Strong academic/investor presentation feel, fully in EN / RU / AZ / TR.

## Visual direction

Modern startup look, mobile-first, high trust:

- **Primary**: deep trust-blue `#1E3A8A` (oklch ~ navy)
- **Secondary**: clean white / very light slate
- **Accent**: vibrant travel-orange `#F97316` for CTAs, plus a soft mint `#10B981` for "trust/safety" pills
- Big rounded cards, soft shadows, generous whitespace
- Hero gets a subtle world-grid + phone mockup motif (CSS/SVG, no AI imagery)
- Real photos where we already have them (Baku landmarks); for product/app screens we use **device-frame mockups with simple SVG content** (clearly marked `TODO(real-screenshot)` where a real app screen is needed later)
- Fonts: keep Inter for body, switch display to **Sora** (modern startup vibe) — replaces Fraunces

## Site map

Public marketing routes (new):
```
/                  Hero · Problem · Solution snippet · Features highlights · How it works · Trust · Testimonials · Download CTA
/features          Full feature grid + deep-dive blocks
/safety            "No scams. No surprises." trust page
/partners          Become a partner + inquiry form
/pricing           Free vs Premium
/about             About GoLocal (mission, team placeholder, scalability)
/contact           Contact form + email/socials
/download          Stores buttons (Coming Soon) + waitlist email capture
/legal/privacy     Privacy policy (placeholder text)
/legal/terms       Terms (placeholder text)
```

Live demo routes (kept from current site, relabeled in nav as "Live Demo · Baku"):
```
/demo/baku         Demo landing — current home content moved here
/demo/baku/about
/demo/baku/emergency
/demo/baku/transport
/demo/baku/places          (was /tourist-info)
/demo/baku/browse          (auth-gated)
/demo/baku/place/:id       (auth-gated)
/demo/baku/profile         (auth-gated)
/auth                      (kept)
```

Old paths (`/about`, `/emergency`, `/transport`, `/tourist-info`, `/browse`, `/place/:id`, `/profile`) are redirected to the new `/demo/baku/*` equivalents to avoid breaking links.

## Page content blueprints (matching the master prompt)

**Home (`/`)** — sections in order:
1. Hero — headline "Travel Smart. Travel Safe. Travel Local." + 3 CTAs (Download / Get Started / Explore Features). Right side: phone mockup with map UI.
2. Problem strip — 6 icon cards (language, scams, overcharging, getting lost, finding services, unreliable info)
3. Solution band — "Introducing GoLocal" with 4 trust pillars
4. Features preview — 6 most important features as cards, link to `/features`
5. Safety & trust — quote-style block linking to `/safety`
6. How it works — 4 numbered steps (Search → Compare → Choose → Enjoy)
7. Live Demo CTA — big card: "See it in action — try our Baku demo →" links to `/demo/baku`
8. Testimonials — 3 quote cards (clearly marked sample data)
9. Rewards teaser — stars & discounts
10. Download CTA — store buttons (Coming Soon badges) + waitlist email field
11. Footer (already exists, will be expanded)

**Features (`/features`)** — full 12-feature grid grouped into Discover / Navigate / Stay Safe / Save Money.

**Safety (`/safety`)** — verified businesses, transparent pricing, real reviews, data privacy, secure platform — each with explainer block.

**Partners (`/partners`)** — value props for Hotels / Restaurants / Taxis / Tours, then inquiry form (business name, type, contact name, email, phone, city, message). Submits to DB.

**Pricing (`/pricing`)** — Free vs Premium two-card layout, FAQ accordion.

**About (`/about`)** — Mission, story, "Starting in Baku, scaling globally" map graphic, founder placeholder cards.

**Contact (`/contact`)** — form (name, email, subject, message) + email/socials. Submits to DB.

**Download (`/download`)** — App Store / Google Play buttons styled real but with "Coming Soon" ribbon; clicking opens waitlist modal. Waitlist email stored in DB.

## Backend (Lovable Cloud)

Three new tables, all with RLS:

- `partner_inquiries` — id, business_name, business_type, contact_name, email, phone, city, message, created_at
- `contact_messages` — id, name, email, subject, message, created_at
- `waitlist_emails` — id, email (unique), language, source, created_at

RLS approach (since these are public submissions and there's no admin role yet):
- `INSERT` policy: allow anon + authenticated to insert (this is required so the public forms work)
- `SELECT` policy: deny to public/anon; only allow rows owned by an admin role. We'll create a `user_roles` table + `app_role` enum + `has_role()` security-definer function per the user-roles best practice, so when an admin account is added in v2, viewing submissions just works. For now no rows are readable from the client — you'll view submissions via the Cloud DB viewer.

Forms use Zod validation client-side and call `createServerFn` handlers that re-validate and insert through the admin client. This keeps the rate-limit/abuse surface controllable later (we can add per-IP throttling without rewriting forms).

## i18n

All new copy added to `src/i18n/dictionary.ts` in EN / RU / AZ / TR. New key namespaces: `gl.hero.*`, `gl.problem.*`, `gl.solution.*`, `gl.features.*`, `gl.howItWorks.*`, `gl.trust.*`, `gl.testimonials.*`, `gl.rewards.*`, `gl.partners.*`, `gl.pricing.*`, `gl.download.*`, `gl.about.*`, `gl.contact.*`, plus updated `nav.*` and `footer.*`.

Demo (Baku) keys are renamed/prefixed `demo.*` but the existing translations are reused.

## Header / footer changes

- Logo becomes **GoLocal** (compass + pin SVG mark, orange→blue gradient)
- Nav: Features · Safety · Partners · Pricing · About · **Live Demo** · Download (CTA button)
- Footer: 4 columns — Product · Company · Legal · Connect (socials placeholders)

## Files added / changed

New routes (each with own `head()` meta):
- `src/routes/index.tsx` — replaced with GoLocal landing
- `src/routes/features.tsx`, `safety.tsx`, `partners.tsx`, `pricing.tsx`, `download.tsx`, `contact.tsx`
- `src/routes/about.tsx` — replaced (old About moves to demo)
- `src/routes/legal.privacy.tsx`, `src/routes/legal.terms.tsx`
- `src/routes/demo.baku.tsx` (layout with Outlet)
- `src/routes/demo.baku.index.tsx` (current home content)
- `src/routes/demo.baku.about.tsx`, `.emergency.tsx`, `.transport.tsx`, `.places.tsx`
- `src/routes/_authenticated.demo.baku.browse.tsx`, `.place.$placeId.tsx`, `.profile.tsx`
- Redirect routes for old paths

New components:
- `src/components/gl/Hero.tsx`, `PhoneMockup.tsx`, `FeatureCard.tsx`, `StepCard.tsx`, `TestimonialCard.tsx`, `WaitlistForm.tsx`, `PartnerForm.tsx`, `ContactForm.tsx`, `StoreButtons.tsx`, `SectionHeading.tsx`
- Updated `SiteHeader.tsx` and `SiteFooter.tsx`

Server functions:
- `src/server/forms.functions.ts` with `submitWaitlist`, `submitPartnerInquiry`, `submitContactMessage` (Zod-validated, insert via admin client)

Style:
- `src/styles.css` — new color tokens (trust blue + orange + mint), Sora font import, refreshed shadows; old Caspian Dusk vars kept under `.demo` scope so the demo section keeps its current look.

## Out of scope for this v1

- Real app screenshots (mockups marked `TODO(real-screenshot)`)
- Real founder photos / bios (placeholder cards marked)
- Admin dashboard for viewing form submissions (data viewable via Cloud DB tab)
- Email notifications on submission (can add Resend later)
- Service worker / PWA caching upgrade (current Baku demo offline messaging stays as-is)

Approve and I'll build it.
