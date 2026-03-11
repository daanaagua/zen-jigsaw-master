"use client";

import { useEffect } from "react";

type ContactPageClientProps = {
  contactEmail: string;
  tallyUrl?: string;
};

export default function ContactPageClient({ contactEmail, tallyUrl }: ContactPageClientProps) {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (typeof event.data === "object" && event.data?.event === "Tally.FormHeightChanged") {
        const iframe = document.getElementById("tally-iframe") as HTMLIFrameElement | null;

        if (iframe) {
          iframe.style.height = `${event.data.height}px`;
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main className="plain-page">
      <section className="shell plain-hero">
        <div className="plain-card">
          <p className="plain-kicker">Contact</p>
          <h1>Get in touch</h1>
          <p>
            Use the contact form for feedback, licensing questions, bug reports,
            takedown requests, or business inquiries related to Zen Jigsaw Master
            Online.
          </p>

          {tallyUrl ? (
            <>
              <iframe
                id="tally-iframe"
                src={tallyUrl}
                width="100%"
                height="320"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Contact form"
                style={{
                  border: "none",
                  minHeight: "320px",
                  display: "block",
                  background: "transparent",
                }}
              />
              <p className="center-note">
                Prefer email?{" "}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            </>
          ) : (
            <>
              <p>
                The Tally contact form is not configured yet. Add your form embed URL
                to <code>NEXT_PUBLIC_TALLY_CONTACT_FORM_URL</code> in Vercel to enable
                submissions on this page.
              </p>
              <p className="center-note">
                Current fallback email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
