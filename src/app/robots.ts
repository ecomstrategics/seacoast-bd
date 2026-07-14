import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow conventional search engines and unlisted public crawlers.
      { userAgent: "*", allow: "/" },
      // OpenAI separates search discovery, user-requested visits, and model-training crawl.
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      // Keep the broad Common Crawl corpus crawler blocked.
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://seacoastbd.com/sitemap.xml",
  };
}
