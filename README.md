# davidpears-site

One-page portfolio for David Pears — CTO at NaviSavi.

Next.js 16 (App Router), TypeScript, Tailwind v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `content/site.ts` — **all copy and data**. Editing the site should almost never mean editing JSX.
- `components/` — one component per section, composed in `app/page.tsx`.
- `components/ClusterField.tsx` — the hero canvas.
- `app/globals.css` — design tokens in `@theme`, plus the few classes too fiddly for utilities.

## The design

Committed single-theme dark — a night-map / colour-grading look, painted explicitly rather than swapping on `prefers-color-scheme`.

- **Ground** `#0A0F16`, panels `#111823` / `#161F2B`, graticule `#1E2A38`
- **Type** warm sand `#EDE7DC`, not white
- **Data colours** signal pink `#FF0080` (clusters, primary action), aqua `#2AEFE0` (single points), amber `#F0B429` (CV, and unfinished slots)
- **Typefaces** Archivo at expanded width for display, Instrument Sans for body, Chivo Mono for labels and coordinates

The hero canvas buckets ~145 deterministic points into grid cells and draws one counted bubble per bucket, with cell size driven by a slow breathing zoom, so groups merge and split. Same grouping idea as the supercluster layer behind NaviSavi's map search. Reduced-motion holds one composed frame instead.

## Still to do

Anything unfinished renders as a visible amber **Slot** rather than a silent placeholder:

- [ ] **CV PDF** — drop it at `public/cv/david-pears-cv.pdf`. The old site linked to read.cv, which shut down on 16 May 2025, so that link is dead.
- [x] **Screen grabs** — real captures of the three live sites, in `public/images/work/`. Regenerate with `node tools/screenshots.mjs` (drives the installed Chrome via puppeteer-core; declines cookie banners and hides promo overlays so captures show the product, not the campaign).
- [x] **App screens** — a real iOS app capture sits in `public/images/work/app-home.png`, background knocked out. More screens (map, video detail, booking) would make it a gallery.
- [ ] **Craft clips** — three tiles waiting on short loops.
- [ ] **Fanbased** — the one roster row still pending; it has a repo but is not on the CV.
- [ ] **Email address** — `links` in `content/site.ts` has a placeholder; decide which address this site uses.
- [ ] **Deploy** — domain is `davidpears.com` (bought 11 Sep 2026) and is already wired into `metadataBase`, `robots.ts`, `sitemap.ts` and the OG card. Still needs a host and DNS. `davidpearsconsulting.com` is the old Webador site and should stay up until this one is live.

## Testimonials

The three quotes in `content/site.ts` are verbatim from the old site and attributed to named people — Ryan Bromley, Sally Bunnell, Ryan Anglem. They read like opening sentences; if fuller versions exist, paste them in. Do not paraphrase them.
