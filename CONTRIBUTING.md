# Contributing to oversight-landing

## Setup

```bash
git clone https://github.com/PetrefiedThunder/oversight-landing
cd oversight-landing
npm install
npm run dev
```

## What lives here

This is the **marketing + docs + status** site at https://pauseapi.app. Product code lives in:

- `sentinel-api` — backend
- `sentinel-dashboard` — authenticated app at app.pauseapi.app
- `sentinel-sdk` — Python SDK
- `sentinel-sdk-js` — TypeScript SDK
- `sentinel-examples` — runnable code samples

Don't add product features here. Marketing copy, docs, legal pages, and the status page only.

## Pull requests

1. Use `npm run build` to verify no broken pages
2. Keep the page count small — every route is a route someone has to maintain
3. Legal page edits (`/privacy`, `/terms`) require careful review — Twilio A2P 10DLC carrier compliance depends on the privacy policy wording

## Code style

- TypeScript strict
- Tailwind utility classes
- Server Components by default
- No client-side state libraries

## License

MIT — © RegEngine, Inc.
