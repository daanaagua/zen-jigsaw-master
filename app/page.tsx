import Link from "next/link";

import { GameFrame } from "@/components/game-frame";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, homepageFaq, siteConfig } from "@/lib/site";

export default function HomePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: siteConfig.game.title,
      description: siteConfig.description,
      url: absoluteUrl("/"),
      genre: siteConfig.game.genre,
      applicationCategory: "Game",
      operatingSystem: "Any",
      image: absoluteUrl("/opengraph-image"),
      gamePlatform: siteConfig.game.devices,
      playMode: "SinglePlayer",
      isAccessibleForFree: true,
      author: {
        "@type": "Person",
        name: siteConfig.game.developer,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homepageFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="page-main">
      <JsonLd data={schema} />

      <section className="shell shell--game" id="play">
        <GameFrame src={siteConfig.game.embedUrl} title={siteConfig.game.title} />
      </section>

      <section className="shell section hero-grid hero-grid--support hero-grid--triad">
        <div className="hero-copy hero-copy--compact">
          <p className="eyebrow">Calm browser puzzle</p>
          <h1>Zen Jigsaw Master</h1>
          <p>
            Play Zen Jigsaw Master online right away in a layout that puts the game
            first. The page is intentionally compact up top so players land on the
            puzzle immediately instead of scrolling through oversized title blocks.
          </p>
          <div className="hero-badges" aria-label="Core game features">
            {siteConfig.game.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <div className="hero-metrics hero-metrics--compact" aria-label="Quick game facts">
            <span>
              <strong>Main keyword</strong>
              zen jigsaw master
            </span>
            <span>
              <strong>Search intent</strong>
              play online now
            </span>
            <span>
              <strong>Best session</strong>
              five to fifteen minutes
            </span>
          </div>
        </div>

        <div className="guide-note">
          <p className="eyebrow">Player profile</p>
          <h2>Best for quiet breaks</h2>
          <ul className="profile-list">
            {siteConfig.game.profile.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                {item.value}
              </li>
            ))}
          </ul>
        </div>

        <div className="guide-note" id="guides">
          <p className="eyebrow">Intent-driven guides</p>
          <h2>Search paths we cover</h2>
          <div className="guide-links">
            {siteConfig.quickLinks.map((link) => (
              <Link className="key-link" href={link.href} key={link.href}>
                <strong>{link.label}</strong>
                <p>{link.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section hero-grid hero-grid--info">
        <div className="hero-copy hero-copy--compact">
          <p className="eyebrow">Why this landing page exists</p>
          <h2>One game, one intent, no clutter.</h2>
          <p>
            Play Zen Jigsaw Master online in a quieter layout built for puzzle
            lovers who want less portal noise and more room to focus. This page is
            designed around the real search intent: launch the game fast, understand
            how it feels, and find the right way to play on desktop or mobile.
          </p>
          <div className="hero-metrics" aria-label="Quick game facts">
            <span>
              <strong>Best session</strong>
              five to fifteen minutes
            </span>
            <span>
              <strong>Play style</strong>
              single-player calm puzzle
            </span>
            <span>
              <strong>Device fit</strong>
              desktop and mobile browser
            </span>
          </div>
        </div>

        <aside className="hero-aside">
          <p className="eyebrow">Game fit</p>
          <h2>Built around the way this puzzle feels.</h2>
          <ul>
            <li>
              <strong>Fast entry:</strong> the iframe stays above the fold on desktop
              so the page behaves like a real single-game site.
            </li>
            <li>
              <strong>Keyword coverage:</strong> we support long-tail intents such as
              fullscreen play, mobile use, no-download access, and practical tips.
            </li>
            <li>
              <strong>Game fit:</strong> the visual direction uses paper, stone, moss,
              and gallery-like spacing to match the game's peaceful jigsaw mood.
            </li>
          </ul>
        </aside>
      </section>

      <section className="shell section">
        <div className="section-heading">
          <p className="eyebrow">What makes this game work</p>
          <h2>A relaxing jigsaw game needs a different kind of page.</h2>
          <p>
            Zen Jigsaw Master is not built around urgency, score chasing, or battle
            loops. The appeal is slower: you enter a puzzle, read the image, sort the
            shapes, and gradually restore a calm scene. That is why this page avoids
            bright portal styling and leans into a softer editorial layout that feels
            closer to a sketchbook or a museum brochure.
          </p>
        </div>

        <div className="content-grid">
          <article className="content-card">
            <h3>Keyword idea cluster for launch</h3>
            <p>
              Since external tools do not yet show a strong keyword footprint for this
              title, the first content layer should target obvious player intents:
              exact-match play, browser access, fullscreen mode, mobile mode,
              no-download usage, and simple puzzle tips. These are natural extensions
              of the core search query and work well as support pages.
            </p>
            <div className="tag-list">
              {siteConfig.keywordCluster.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </article>

          <article className="content-card">
            <h3>Why the visual style is different</h3>
            <p>
              Game portals often optimize for volume, not mood. Here, the design moves
              in the opposite direction: warm paper backgrounds, moss and clay accents,
              serif display typography, and spacious content blocks. The goal is to let
              the page feel like part of the relaxing experience rather than a wrapper
              around it.
            </p>
            <p>
              That difference matters for SEO too. Searchers who land on a focused,
              trustworthy page are more likely to stay, scroll, and explore the guide
              links, which supports stronger engagement signals for a new single-game
              site.
            </p>
          </article>

          <article className="content-card">
            <h3>How to play Zen Jigsaw Master online</h3>
            <p>
              Start the iframe, let the puzzle load, and use mouse or touch controls to
              drag pieces into place. The game works best when you give yourself a small
              uninterrupted block of time and treat each board as a visual reset instead
              of a speedrun challenge.
            </p>
            <div className="info-strip">
              <span>Browser-first access</span>
              <span>Single-player focus</span>
              <span>Peaceful art direction</span>
            </div>
          </article>

          <article className="content-card">
            <h3>Support pages that expand the site naturally</h3>
            <p>
              The right early expansion is not random blog content. It is a set of pages
              that directly answers how people actually search around the game. That is
              why the first support pages are practical and keyword-shaped: fullscreen,
              mobile, no-download, and tips. Each page keeps the game playable while
              adding distinct text depth and internal links.
            </p>
          </article>
        </div>
      </section>

      <section className="shell section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Quick answers for players and search engines</h2>
        </div>

        <div className="faq-list">
          {homepageFaq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
