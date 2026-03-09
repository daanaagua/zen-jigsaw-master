import Link from "next/link";

import { legalPages, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">ZM</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.brandLine}</small>
          </span>
        </Link>

        <nav className="top-nav" aria-label="Primary">
          <Link href="/#play">Play now</Link>
          <Link href="/#guides">Guides</Link>
          <Link href="/#faq">FAQ</Link>
          {legalPages.slice(0, 2).map((page) => (
            <Link key={page.href} href={page.href}>
              {page.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
