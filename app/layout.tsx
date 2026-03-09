import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Cormorant_Garamond } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Zen Jigsaw Master - Play Online in a Calm Puzzle Room",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  keywords: siteConfig.keywordCluster,
  applicationName: siteConfig.name,
  category: "games",
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: "Zen Jigsaw Master - Play Online in a Calm Puzzle Room",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Zen Jigsaw Master Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen Jigsaw Master - Play Online in a Calm Puzzle Room",
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image")],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <div className="site-chrome">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
