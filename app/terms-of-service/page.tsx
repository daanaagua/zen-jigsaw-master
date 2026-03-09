import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms for using this Zen Jigsaw Master game page, including acceptable use, embedded content, and third-party ownership.",
  alternates: {
    canonical: absoluteUrl("/terms-of-service"),
  },
};

export default function TermsPage() {
  return (
    <main className="plain-page">
      <section className="shell plain-hero">
        <div className="legal-panel">
          <p className="plain-kicker">Terms of Service</p>
          <h1>Terms of Service</h1>
          <ul className="legal-list">
            <li>
              <strong>Use of the site:</strong> this website is provided for lawful,
              personal, browser-based gameplay and informational use.
            </li>
            <li>
              <strong>Embedded content:</strong> the game itself is delivered through a
              third-party embed source. Ownership, trademarks, and distribution rights
              remain with their respective holders.
            </li>
            <li>
              <strong>No warranty:</strong> the site is offered on an as-is basis. Game
              availability, loading speed, and third-party ad behavior may change
              without notice.
            </li>
            <li>
              <strong>External services:</strong> using the embedded game may also be
              subject to the policies of the third-party provider that serves the frame.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
