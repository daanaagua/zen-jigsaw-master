import type { MetadataRoute } from "next";

import { absoluteUrl, guidePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return [
    ...staticPages.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
    })),
    ...guidePages.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}
