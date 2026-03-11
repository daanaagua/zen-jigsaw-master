import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

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
    <ContactPageClient
      contactEmail={siteConfig.contactEmail}
      tallyUrl={siteConfig.tallyContactFormUrl}
    />
  );
}
