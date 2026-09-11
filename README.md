# davidpears.com

Personal site for David Pears, co-founder and CTO at NaviSavi.

Next.js 16 (App Router), TypeScript, Tailwind v4. One page, no client-side
routing, no CMS.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run verify   # format, lint and types
```

## How it is put together

Content is separated from presentation. Every piece of copy, every role and
every figure lives in [`content/site.ts`](content/site.ts), so editing the site
almost never means editing a component. Each section is one component in
[`components/`](components), composed in [`app/page.tsx`](app/page.tsx).

Design tokens are defined once in Tailwind's `@theme` block in
[`app/globals.css`](app/globals.css). The few things too fiddly for utility
classes, the type scale and the hero veil, sit alongside them as plain CSS.

## The hero

The hero canvas is not decoration. It plots real coordinates from NaviSavi's
commercial API onto Natural Earth coastlines, then clusters them the way the
product's own map search does: points are bucketed into grid cells, each bucket
draws one bubble at its centroid labelled with its count, and a slow change in
cell size merges and splits those bubbles over a two minute cycle.

Both the coastlines and the API points go through one shared projection in
[`lib/projection.ts`](lib/projection.ts), so the dots land on the right
continents. The land layer is Natural Earth 110m, public domain, simplified to
101 rings and rounded to a tenth of a degree.

If the API is unreachable the canvas falls back to a composed scatter, so the
page never fails because a third party is down.

## Live footage

The strip in the Craft section streams real clips from the NaviSavi catalogue.
Bandwidth is metered, so it is deliberate about spending it:

- a still poster and no `<video>` source until someone presses play
- the HLS player is imported on first play, not on page load
- 360p, which is enough at that size
- one clip at a time, stopping when scrolled out of view or when the tab hides
- playback stops after 25 loops

## API access

Server side only. The key is read from `process.env.NAVISAVI_API_KEY` inside
server components, never with a `NEXT_PUBLIC_` prefix, which would inline it
into the client bundle. Responses are revalidated daily, so a quiet week costs
a handful of requests rather than one per visitor.

Local values go in `.env.local`, which is git-ignored. Production values go in
the host's environment settings. [`.env.example`](.env.example) lists the names
with no values.

## Checks

A pre-commit hook in [`.githooks/`](.githooks) runs, in order:

1. **Secrets.** Blocks staged env files and credentials pasted into source.
   First, because it is the only failure here that a later commit cannot undo.
2. **Prettier.** Formats staged files and re-stages them.
3. **ESLint.** No warnings allowed.
4. **tsc.** Types must pass.

Hooks are per clone, so enable them once:

```bash
git config core.hooksPath .githooks
```

## Screenshots

The product captures in [`public/images/work`](public/images/work) are
hand-trimmed. [`tools/screenshots.mjs`](tools/screenshots.mjs) drives the
installed Chrome through puppeteer-core to regenerate raw versions into
`.screenshots-raw/`, declining cookie banners and hiding promotional overlays
so the captures show the product rather than the campaign running that week.

Replacing an image needs a new filename. Overwriting one in place leaves
`next/image` serving the previously optimised bytes until its cache expires.
