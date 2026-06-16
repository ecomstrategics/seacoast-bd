import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all search engines and AI search crawlers
      { userAgent: "*", allow: "/" },
      // Block training-only crawlers (not search)
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
    ],
    sitemap: "https://seacoastbd.com/sitemap.xml",
  };
}
