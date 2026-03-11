"use client";

import { useEffect } from "react";

type ContactPageClientProps = {
  contactEmail: string;
  tallyUrl?: string;
};

function buildTallyEmbedUrl(input?: string) {
  if (!input) {
    return "";
  }

  try {
    const url = new URL(input);

    url.searchParams.set("alignLeft", "1");
    url.searchParams.set("hideTitle", "1");
    url.searchParams.set("transparentBackground", "1");
    url.searchParams.set("dynamicHeight", "1");

    return url.toString();
  } catch {
    return input;
  }
}

export default function ContactPageClient({ contactEmail, tallyUrl }: ContactPageClientProps) {
  const embedUrl = buildTallyEmbedUrl(tallyUrl);

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
            Send a quick message about licensing, corrections, partnership ideas,
            technical issues, or general feedback related to Zen Jigsaw Master Online.
          </p>

          {embedUrl ? (
            <>
              <iframe
                id="tally-iframe"
                src={embedUrl}
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
                The embedded form is configured to show only your Name, Email, and
                Message fields. Prefer email instead?{" "}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            </>
          ) : (
            <>
              <p>
                The contact form is not configured yet. Add your Tally form URL to
                <code> NEXT_PUBLIC_TALLY_CONTACT_FORM_URL </code>
                in Vercel to enable submissions on this page.
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
