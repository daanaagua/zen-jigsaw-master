import { absoluteUrl, guidePages, siteConfig } from "@/lib/site";

export function GET() {
  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.brandLine}`,
    "",
    "## Core page",
    `- Home: ${absoluteUrl("/")}`,
    "",
    "## Support guides",
    ...guidePages.map((guide) => `- ${guide.title}: ${absoluteUrl(`/guides/${guide.slug}`)}`),
    "",
    "## Trust pages",
    `- About: ${absoluteUrl("/about")}`,
    `- Contact: ${absoluteUrl("/contact")}`,
    `- Privacy Policy: ${absoluteUrl("/privacy-policy")}`,
    `- Terms of Service: ${absoluteUrl("/terms-of-service")}`,
    "",
    "## Search intent focus",
    ...siteConfig.keywordCluster.map((keyword) => `- ${keyword}`),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
