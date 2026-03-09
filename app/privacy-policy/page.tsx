import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for this Zen Jigsaw Master game site, including browser data, analytics, cookies, and third-party embedded content.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="plain-page">
      <section className="shell plain-hero">
        <div className="legal-panel">
          <p className="plain-kicker">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p>
            This site may use standard website analytics, functional cookies, and
            embedded third-party content to deliver the game experience. If you connect
            analytics, ads, or consent tooling after deployment, update this policy so
            it matches your real setup.
          </p>
          <ul className="legal-list">
            <li>
              <strong>Embedded game:</strong> the playable frame is delivered by a
              third-party game source, which may collect technical information needed to
              render the game and its own advertising stack.
            </li>
            <li>
              <strong>Analytics:</strong> if you enable analytics such as GA4 or
              Plausible, they may store aggregated usage data like page views, device
              type, referral source, and session duration.
            </li>
            <li>
              <strong>Cookies:</strong> cookies may be used for performance,
              personalization, consent, and ad delivery depending on the services you
              enable after deployment.
            </li>
            <li>
              <strong>Your choices:</strong> users can disable cookies in their browser
              settings and avoid using the embedded game if they do not want third-party
              content to load.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
