export type SolutionPillar = {
  slug: "protect" | "improve" | "expand";
  title: string;
  tagline: string;
  heroHeading: string;
  heroSub: string;
  accent: "teal" | "navy" | "copper";
  serviceslugs: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const solutions: SolutionPillar[] = [
  {
    slug: "protect",
    title: "Protect",
    tagline: "Storm & Resilience",
    heroHeading: "Storm-Proof Your Property Before the Season Starts.",
    heroSub: "From proactive preparedness to emergency response to insurance-backed repair, Seacoast handles every stage of the storm lifecycle across Southwest Florida.",
    accent: "teal",
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
    tagline: "Exteriors & Renovations",
    heroHeading: "Renovate the Exterior. Raise the Value.",
    heroSub: "Roofing, siding, windows, gutters, and full exterior renovations. Seacoast handles the trades so you don't have to coordinate three contractors for one project.",
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
    tagline: "Property Solutions",
    heroHeading: "Add Space Without the Wait.",
    heroSub: "Container guest houses, offices, workshops, pool enclosures, and room additions. Seacoast builds everything outside the main footprint, faster and with one contractor from start to finish.",
    accent: "copper",
    serviceslugs: [
      "pool-enclosures-lanais",
      "room-additions",
    ],
    ctaLabel: "Explore Your Options",
    ctaHref: "/contact",
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
