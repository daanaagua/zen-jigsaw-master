import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the site owner for business, takedown, or feedback requests related to the Zen Jigsaw Master landing page.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main className="plain-page">
      <section className="shell plain-hero">
        <div className="plain-card">
          <p className="plain-kicker">Contact</p>
          <h1>Get in touch</h1>
          <p>
            For feedback, licensing questions, brand concerns, or business inquiries,
            use the contact address below. If you deploy this project, replace the
            default placeholder email with your real support inbox before going live.
          </p>
          <p className="center-note">
            Email: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
