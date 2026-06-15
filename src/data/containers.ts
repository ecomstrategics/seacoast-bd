export type Container = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  startingPrice?: string;
  startingPriceValue?: string;
};

export const containers: Container[] = [
  {
    slug: "storage",
    name: "Storage Containers",
    tagline: "Storm-rated. Built to last 50 years.",
    shortDescription: "Cat-5-rated steel storage that beats standard sheds and self-storage units for hurricane survival, security, and longevity. Custom delivery, placement, and finish options available.",
    icon: "📦",
    startingPrice: "Starting at $9,500",
    startingPriceValue: "9500",
  },
  {
    slug: "guest-houses",
    name: "Container Guest Houses",
    tagline: "A real guest house, finished to match your home.",
    shortDescription: "Custom-built container guest houses and in-law suites for Florida living. Faster than traditional construction, finished with real siding, HVAC, plumbing, and electrical so it looks like a cottage, not a shipping container.",
    icon: "🏡",
    startingPrice: "20' builds from $32,000",
    startingPriceValue: "32000",
  },
  {
    slug: "offices-workshops",
    name: "Container Offices & Workshops",
    tagline: "Your workspace. Delivered and ready.",
    shortDescription: "Climate-controlled, wired container offices and workshops for business owners, contractors, and remote professionals. Tax-depreciable, mobile, and finished to your spec.",
    icon: "🏗️",
    startingPrice: "Starting at $28,000",
    startingPriceValue: "28000",
  },
  {
    slug: "storm-shelters",
    name: "Container Storm Shelters",
    tagline: "Cat-5-rated. Built for the worst.",
    shortDescription: "When you can't evacuate, you need a structure that can take a direct hit. Our storm-rated container shelters are anchored, ventilated, and built to FEMA-aligned specs for coastal Southwest Florida.",
    icon: "🛡️",
    startingPrice: "Starting at $34,000",
    startingPriceValue: "34000",
  },
];

export function getContainerBySlug(slug: string) {
  return containers.find((c) => c.slug === slug);
}
