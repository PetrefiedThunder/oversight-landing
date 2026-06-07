# oversight-landing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Deployed on Vercel](https://img.shields.io/badge/host-Vercel-black.svg)](https://vercel.com)

Marketing + docs + status site for [Sentinel](https://pauseapi.app).

Next.js 15 (App Router) + Tailwind. Hosted at `https://pauseapi.app`.

## Routes

| Path | What it is |
|---|---|
| `/` | Marketing landing page |
| `/docs` | SDK documentation (Python + TypeScript, 11 sections, sticky TOC) |
| `/status` | Live service status (probes API + dashboard on every request) |
| `/privacy` | Privacy policy (TCR-compliant SMS language) |
| `/terms` | Terms of service |

Short-link redirects (configured in `next.config.js`):
- `/signup` → `app.pauseapi.app/signup`
- `/login` → `app.pauseapi.app/login`
- `/docs/sdk` → GitHub SDK README
- `/examples` → `github.com/PetrefiedThunder/sentinel-examples`
- `/github` → main SDK repo
- `/pypi` → PyPI page

## Run locally

```bash
git clone https://github.com/PetrefiedThunder/oversight-landing
cd oversight-landing
npm install
npm run dev   # → http://localhost:3000
```

## Deploy

GitHub `main` auto-deploys to Vercel.

## Editing docs

Single source: `app/docs/page.tsx`. Sections are added by editing the `TOC` array and adding a `<Section id="…" title="…">` block. Side-by-side Python + TS code blocks throughout.

## Editing legal pages

`app/privacy/page.tsx` and `app/terms/page.tsx`. The privacy policy contains TCR-required SMS language for Twilio A2P 10DLC campaign approval — see commit `6bdf68d` for the carrier-review-passing version.

## License

MIT — © RegEngine, Inc.
