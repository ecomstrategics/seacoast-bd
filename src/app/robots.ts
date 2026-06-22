import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all search engines and AI search/answer crawlers
      { userAgent: "*", allow: "/" },
      // Allow GPTBot so ChatGPT and related answer engines can access the site
      { userAgent: "GPTBot", allow: "/" },
      // Block training-only crawlers (not search)
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://seacoastbd.com/sitemap.xml",
  };
}
