export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
};

export const services: Service[] = [
  { slug: "roofing", name: "Professional Roofing", shortDescription: "Roof repair, replacement, storm restoration, metal, tile, shingle, and flat roofing systems.", icon: "🏠" },
  { slug: "gutters-fascia-soffits", name: "Gutters, Fascia & Soffits", shortDescription: "Exterior water management and trim systems built for Southwest Florida weather.", icon: "🌧️" },
  { slug: "siding", name: "Siding Services", shortDescription: "Durable siding installation and repair that improves protection and curb appeal.", icon: "🧱" },
  { slug: "windows-and-doors", name: "Windows & Doors", shortDescription: "Efficient, impact-ready window and door upgrades for homes and commercial properties.", icon: "🚪" },
  { slug: "exterior-renovations", name: "Exterior Renovations", shortDescription: "Complete exterior transformations, repairs, and structural improvements.", icon: "🛠️" },
  { slug: "pool-enclosures-lanais", name: "Pool Enclosures & Lanais", shortDescription: "Screen enclosures, lanais, and outdoor living structures designed for Florida lifestyles.", icon: "🌴" },
  { slug: "room-additions", name: "Room Additions", shortDescription: "Thoughtful additions that create more usable space without compromising the property.", icon: "➕" },
  { slug: "storm-damage-repair", name: "Storm Damage Repair", shortDescription: "Responsive inspection, documentation, and repairs after wind, rain, and hurricane damage.", icon: "⛈️" },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
