import Link from "next/link";

import { legalPages, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">Built for focused browser play</p>
          <h2>{siteConfig.name}</h2>
          <p>
            This site is designed around one calm puzzle experience: fast access,
            clear guidance, and lightweight SEO-friendly content that helps players
            reach the game quickly.
          </p>
        </div>

        <div>
          <h3>Helpful links</h3>
          <ul>
            <li>
              <Link href="/">Play Zen Jigsaw Master online</Link>
            </li>
            <li>
              <Link href="/guides/zen-jigsaw-master-fullscreen">
                Fullscreen guide
              </Link>
            </li>
            <li>
              <Link href="/guides/zen-jigsaw-master-mobile">Mobile guide</Link>
            </li>
            <li>
              <Link href="/guides/zen-jigsaw-master-tips">Puzzle tips</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Trust pages</h3>
          <ul>
            {legalPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href}>{page.label}</Link>
              </li>
            ))}
          </ul>
          <p className="footer-meta">
            Contact: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
