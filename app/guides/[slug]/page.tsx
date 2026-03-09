import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GameFrame } from "@/components/game-frame";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, getGuideBySlug, guidePages, siteConfig } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return guidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: absoluteUrl(`/guides/${guide.slug}`),
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      image: absoluteUrl("/opengraph-image"),
      author: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
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
        {
          "@type": "ListItem",
          position: 2,
          name: guide.title,
          item: absoluteUrl(`/guides/${guide.slug}`),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faq.map((item) => ({
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
    <main className="guide-page">
      <JsonLd data={schema} />

      <section className="shell guide-hero">
        <div className="plain-card">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>{guide.title}</span>
          </div>
          <p className="plain-kicker">Guide page</p>
          <h1>{guide.title}</h1>
          <p>{guide.hero}</p>
          <div className="tag-list">
            {guide.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section play-grid play-grid--hero play-grid--guide">
        <GameFrame src={siteConfig.game.embedUrl} title={siteConfig.game.title} />

        <aside className="sticky-stack">
          <div className="guide-note">
            <p className="eyebrow">Guide focus</p>
            <h2>{guide.hero}</h2>
            <p>{guide.intro}</p>
            <Link className="primary-link" href="/">
              Back to the main game page
            </Link>
          </div>

          <div className="guide-note">
            <p className="eyebrow">More support pages</p>
            <h2>Keep the internal links working</h2>
            <div className="guide-links">
              {siteConfig.quickLinks
                .filter((link) => !link.href.endsWith(guide.slug))
                .map((link) => (
                  <Link className="key-link" href={link.href} key={link.href}>
                    <strong>{link.label}</strong>
                    <p>{link.note}</p>
                  </Link>
                ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="shell section guide-layout">
        {guide.sections.map((section) => (
          <article className="guide-panel" key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="shell section">
        <div className="section-heading">
          <p className="eyebrow">Guide FAQ</p>
          <h2>Extra answers for this search intent</h2>
        </div>
        <div className="faq-list">
          {guide.faq.map((item) => (
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
