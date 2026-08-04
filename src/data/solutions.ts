export type SolutionPillar = {
  slug: "protect" | "improve" | "expand";
  title: string;
  tagline: string;
  heroHeading: string;
  heroSub: string;
  accent: "orange" | "navy" | "copper";
  serviceslugs: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const solutions: SolutionPillar[] = [
  {
    slug: "protect",
    title: "Protect",
    tagline: "Storm Preparation & Repair",
    heroHeading: "Prepare Your Property Before Hurricane Season.",
    heroSub: "Plan ahead for shutters and boarding, check emergency-service availability, and arrange post-storm assessment and repairs with one team.",
    accent: "orange",
    serviceslugs: [
      "storm-preparedness",
      "emergency-response",
      "storm-damage-repair",
      "windows-and-doors",
    ],
    ctaLabel: "Get a Preparedness Plan",
    ctaHref: "/contact",
  },
  {
    slug: "improve",
    title: "Improve",
    tagline: "Roofing & Exterior Work",
    heroHeading: "Repair and Update Your Property's Exterior.",
    heroSub: "Coordinate roofing, siding, windows, gutters, and exterior repairs in one agreed scope.",
    accent: "navy",
    serviceslugs: [
      "roofing",
      "siding",
      "gutters-fascia-soffits",
      "windows-and-doors",
      "exterior-renovations",
    ],
    ctaLabel: "Get a Renovation Quote",
    ctaHref: "/contact",
  },
  {
    slug: "expand",
    title: "Expand",
    tagline: "Additional Space & Structures",
    heroHeading: "Plan the Extra Space Your Property Needs.",
    heroSub: "Compare structural insulated panel buildings, custom container builds, metal structures, pool enclosures, and traditional additions. Feasibility and timing depend on the site, intended use, engineering, permits, and final scope.",
    accent: "copper",
    serviceslugs: [
      "structural-insulated-panel-buildings",
      "metal-buildings",
      "carports",
      "pool-enclosures-lanais",
      "room-additions",
    ],
    ctaLabel: "Explore Your Options",
    ctaHref: "/custom-buildings",
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
