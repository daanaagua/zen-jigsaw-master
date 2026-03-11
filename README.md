# Zen Jigsaw Master Online

Play `Zen Jigsaw Master` online in a calm browser-first layout built for players who want the game immediately, not a noisy portal. This project turns one relaxing jigsaw game into a focused single-game website with a large playable frame, lightweight UI, and search-friendly support pages.

Live site: `https://zenjigsawmaster.com`

## What this site is

Zen Jigsaw Master Online is a focused landing page for a relaxing jigsaw puzzle game. The site is designed around simple player intent:

- play Zen Jigsaw Master online
- use fullscreen mode comfortably
- open the game on mobile
- play with no download
- find a few lightweight tips without leaving the page

Instead of copying a generic HTML5 game portal, the UI uses a calmer editorial style with a larger above-the-fold game area and supporting guide pages.

## Why it is useful

- Large playable game frame for faster access
- Clean single-game layout instead of a crowded arcade directory
- Support pages for fullscreen, mobile, no-download, and tips
- Built-in `robots.txt`, `sitemap.xml`, `llms.txt`, and `ads.txt`
- Ready for Vercel deployment and custom domain setup

## Main pages

- Home: `https://zenjigsawmaster.com/`
- Fullscreen guide: `https://zenjigsawmaster.com/guides/zen-jigsaw-master-fullscreen`
- Mobile guide: `https://zenjigsawmaster.com/guides/zen-jigsaw-master-mobile`
- No download guide: `https://zenjigsawmaster.com/guides/zen-jigsaw-master-no-download`
- Tips guide: `https://zenjigsawmaster.com/guides/zen-jigsaw-master-tips`

## Stack

- Next.js App Router
- React
- TypeScript
- Vercel-ready deployment flow

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Environment variables

Set these values in Vercel before going live:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_TALLY_CONTACT_FORM_URL`

## Notes

- This repository focuses on the website experience and SEO structure around the game.
- The playable game content is embedded from a third-party game source.
- If you fork or reuse the project, update domain, contact details, analytics, and policy pages before launch.
