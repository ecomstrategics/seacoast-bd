export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  pillar?: "protect" | "improve" | "expand";
};

export const services: Service[] = [
  { slug: "roofing", name: "Professional Roofing", shortDescription: "Roof repair, replacement, storm restoration, metal, tile, shingle, and flat roofing systems.", icon: "🏠", pillar: "improve" },
  { slug: "gutters-fascia-soffits", name: "Gutters, Fascia & Soffits", shortDescription: "Exterior water management and trim systems built for Southwest Florida weather.", icon: "🌧️", pillar: "improve" },
  { slug: "siding", name: "Siding Services", shortDescription: "Durable siding installation and repair that improves protection and curb appeal.", icon: "🧱", pillar: "improve" },
  { slug: "windows-and-doors", name: "Windows & Doors", shortDescription: "Efficient, impact-ready window and door upgrades for homes and commercial properties.", icon: "🚪", pillar: "improve" },
  { slug: "exterior-renovations", name: "Exterior Renovations", shortDescription: "Complete exterior transformations, repairs, and structural improvements.", icon: "🛠️", pillar: "improve" },
  { slug: "pool-enclosures-lanais", name: "Pool Enclosures & Lanais", shortDescription: "Screen enclosures, lanais, and outdoor living structures designed for Florida lifestyles.", icon: "🌴", pillar: "expand" },
  { slug: "room-additions", name: "Room Additions", shortDescription: "Thoughtful additions that create more usable space without compromising the property.", icon: "➕", pillar: "expand" },
  { slug: "storm-damage-repair", name: "Storm Damage Repair", shortDescription: "Responsive inspection, documentation, and repairs after wind, rain, and hurricane damage.", icon: "⛈️", pillar: "protect" },
  {
    slug: "storm-preparedness",
    name: "Storm Preparedness",
    shortDescription: "Pre-season inspections, custom shutter and board fitting, supply delivery, and priority emergency response, locked in before hurricane season.",
    icon: "🛡️",
    pillar: "protect",
  },
  {
    slug: "emergency-response",
    name: "Emergency Response",
    shortDescription: "Same-day boarding, shuttering, supply delivery, and immediate damage stabilization when a storm is active or has just passed.",
    icon: "🚨",
    pillar: "protect",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByPillar(pillar: "protect" | "improve" | "expand") {
  return services.filter((s) => s.pillar === pillar);
}
