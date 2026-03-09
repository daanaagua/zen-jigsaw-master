import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why this Zen Jigsaw Master site exists, how the game page is structured, and what the project is trying to do for puzzle players.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <main className="plain-page">
      <section className="shell plain-hero">
        <div className="plain-card">
          <p className="plain-kicker">About this site</p>
          <h1>{siteConfig.name}</h1>
          <p>
            This project is a dedicated landing page for a calm browser puzzle game.
            Instead of copying a portal layout, the site is designed around one clear
            intent: help players reach Zen Jigsaw Master quickly, understand what kind
            of game it is, and find helpful guidance without distraction.
          </p>
        </div>
      </section>

      <section className="shell plain-grid">
        <article className="plain-card">
          <h2>Editorial direction</h2>
          <p>
            The visual identity is intentionally slower and warmer than a typical arcade
            portal. Paper tones, earthy accents, and spacious typography make the page
            feel aligned with the game's peaceful puzzle rhythm.
          </p>
        </article>

        <article className="plain-card">
          <h2>SEO direction</h2>
          <p>
            The site follows a single-game strategy: one homepage for the exact match
            query and several support pages for adjacent intents like fullscreen play,
            mobile access, no-download usage, and gameplay tips.
          </p>
        </article>
      </section>
    </main>
  );
}
