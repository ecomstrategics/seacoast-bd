export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  pillar?: "protect" | "improve" | "expand";
};

export const services: Service[] = [
  { slug: "roof-certification-inspection", name: "Roof Certification Inspection", shortDescription: "Roof-condition inspections with photos, observed issues, and estimated remaining service life for insurance, sale, or maintenance needs.", icon: "📋", pillar: "protect" },
  { slug: "roofing", name: "Roofing", shortDescription: "Roof repairs and replacements for shingle, tile, metal, and flat-roof systems, including storm-damage work.", icon: "🏠", pillar: "improve" },
  { slug: "gutters-fascia-soffits", name: "Gutters, Fascia & Soffits", shortDescription: "Gutter, fascia, and soffit installation and repair for drainage, ventilation, and finished roof edges.", icon: "🌧️", pillar: "improve" },
  { slug: "siding", name: "Siding Services", shortDescription: "Siding installation and repair for homes, commercial buildings, and multi-family properties.", icon: "🧱", pillar: "improve" },
  { slug: "windows-and-doors", name: "Windows & Doors", shortDescription: "Window and exterior-door replacement, including impact-rated options for Florida properties.", icon: "🚪", pillar: "improve" },
  { slug: "exterior-renovations", name: "Exterior Renovations", shortDescription: "Coordinate roofing, siding, trim, paint, and structural exterior work under one agreed scope.", icon: "🛠️", pillar: "improve" },
  { slug: "exterior-cleaning-services", name: "Exterior Cleaning Services", shortDescription: "Soft washing and pressure cleaning for roofs, siding, concrete, gutters, patios, fences, and solar panels.", icon: "💦", pillar: "improve" },
  { slug: "solar-services", name: "Solar Services", shortDescription: "Solar panels, inverters, battery storage, EV charging, and maintenance options for homes and commercial properties.", icon: "☀️", pillar: "improve" },
  { slug: "solar-panel-cleaning", name: "Solar Panel Cleaning", shortDescription: "One-time and recurring solar-panel cleaning for dirt, salt, pollen, and debris, with the method chosen for the roof and array.", icon: "🧼", pillar: "improve" },
  { slug: "whole-house-battery-systems", name: "Home Battery Backup", shortDescription: "Battery-backup systems sized around the circuits you want to support, with standalone and solar-paired options.", icon: "🔋", pillar: "protect" },
  { slug: "pool-enclosures-lanais", name: "Pool Enclosures & Lanais", shortDescription: "New screen enclosures and lanais, plus repairs and re-screening for existing outdoor structures.", icon: "🌴", pillar: "expand" },
  { slug: "room-additions", name: "Room Additions", shortDescription: "Room additions and enclosed spaces planned around your existing structure, site, and permitting requirements.", icon: "➕", pillar: "expand" },
  { slug: "storm-damage-repair", name: "Storm Damage Repair", shortDescription: "Inspection, documentation, stabilization, and coordinated interior or exterior rehabilitation after wind, rain, or storm-surge damage.", icon: "⛈️", pillar: "protect" },
  {
    slug: "storm-preparedness",
    name: "Storm Preparedness",
    shortDescription: "Pre-season inspections and property-specific plans for shutters, boards, materials, and storm activation. Response terms are confirmed in your agreement.",
    icon: "🛡️",
    pillar: "protect",
  },
  {
    slug: "emergency-response",
    name: "Emergency Response",
    shortDescription: "Emergency boarding, tarping, and damage stabilization when conditions and crew availability allow. Call to confirm service in your area.",
    icon: "🚨",
    pillar: "protect",
  },
  {
    slug: "metal-buildings",
    name: "Metal Buildings & Pole Barns",
    shortDescription: "Pole barns, barndominiums, and metal buildings with insulation and metal-panel roofing options for residential or commercial sites.",
    icon: "🏭",
    pillar: "expand",
  },
  {
    slug: "carports",
    name: "Carports & Metal Roofs",
    shortDescription: "New carport structures and repairs, with insulated-panel and metal-roof options for residential and commercial properties.",
    icon: "🚗",
    pillar: "expand",
  },
  {
    slug: "thermal-drone-inspections",
    name: "Thermal Drone Inspections",
    shortDescription: "Aerial thermal and visible imaging that documents roof-surface temperature patterns and helps prioritize areas for closer inspection. Thermal images alone do not confirm leaks or moisture.",
    icon: "🚁",
    pillar: "protect",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByPillar(pillar: "protect" | "improve" | "expand") {
  return services.filter((s) => s.pillar === pillar);
}
