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
    tagline: "Secure storage, configured for your site.",
    shortDescription: "New and used shipping containers with delivery, placement, door, ventilation, coating, shelving, and electrical options. Site and permit requirements vary.",
    icon: "📦",
  },
  {
    slug: "guest-houses",
    name: "Container Guest Houses",
    tagline: "A compact guest space planned around your property.",
    shortDescription: "Custom container-based guest-space concepts with siding, HVAC, plumbing, and electrical options. Feasibility, permitting, price, and schedule depend on the parcel and final scope.",
    icon: "🏡",
  },
  {
    slug: "offices-workshops",
    name: "Container Offices & Workshops",
    tagline: "A detached workspace configured for how you work.",
    shortDescription: "Container-based offices and workshops with available insulation, climate control, lighting, electrical, doors, and interior finishes.",
    icon: "🏗️",
  },
  {
    slug: "storm-shelters",
    name: "Engineered Container Structures",
    tagline: "Emergency-use design requires site-specific engineering.",
    shortDescription: "Container-based structures that can be evaluated for emergency use. Occupancy and extreme-wind performance require site-specific engineering, permits, and applicable standards.",
    icon: "🛡️",
  },
];

export function getContainerBySlug(slug: string) {
  return containers.find((c) => c.slug === slug);
}
