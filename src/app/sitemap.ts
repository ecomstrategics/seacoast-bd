import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { containers } from "@/data/containers";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { serviceAreaCities } from "@/data/serviceAreas";

const BASE = "https://seacoastbd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/capital-partners`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/road-to-housing-act`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/containers`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/containers/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/our-work`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/financing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/customer-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/service-area`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const containerPages: MetadataRoute.Sitemap = containers.map((c) => ({
    url: `${BASE}/containers/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/our-work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const cityPages: MetadataRoute.Sitemap = serviceAreaCities.map((c) => ({
    url: `${BASE}/service-area/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...containerPages, ...solutionPages, ...projectPages, ...cityPages];
}
