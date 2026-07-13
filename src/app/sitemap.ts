import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { containers } from "@/data/containers";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { serviceAreaCities } from "@/data/serviceAreas";

const BASE = "https://seacoastbd.com";
// Update this only when the corresponding page or shared content template changes.
const CURRENT_UPDATE = "2026-07-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/services`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/storm-ready`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/solutions`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/capital-partners`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/road-to-housing-act`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/containers`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/containers/compare`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/containers/prebuilt`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/our-work`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/about`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/contact`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/faq`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/financing`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/customer-reviews`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/service-area`, lastModified: CURRENT_UPDATE },
    { url: `${BASE}/privacy`, lastModified: "2026-06-21" },
    { url: `${BASE}/terms`, lastModified: "2026-06-21" },
    { url: `${BASE}/accessibility`, lastModified: "2026-06-16" },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: CURRENT_UPDATE,
  }));

  const containerPages: MetadataRoute.Sitemap = containers.map((c) => ({
    url: `${BASE}/containers/${c.slug}`,
    lastModified: CURRENT_UPDATE,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: CURRENT_UPDATE,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/our-work/${p.slug}`,
    lastModified: CURRENT_UPDATE,
  }));

  const cityPages: MetadataRoute.Sitemap = serviceAreaCities.map((c) => ({
    url: `${BASE}/service-area/${c.slug}`,
    lastModified: CURRENT_UPDATE,
  }));

  return [...staticPages, ...servicePages, ...containerPages, ...solutionPages, ...projectPages, ...cityPages];
}
