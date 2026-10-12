export type NavItem =
  | { label: string; href: string; mega?: never; dropdown?: never }
  | { label: string; href: string; mega: "solutions"; dropdown?: never }
  | { label: string; href: string; mega?: never; dropdown: { label: string; href: string }[] };

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    mega: "solutions",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Roof Certification Inspection", href: "/services/roof-certification-inspection" },
      { label: "Thermal Drone Inspections", href: "/services/thermal-drone-inspections" },
      { label: "Roofing", href: "/services/roofing" },
      { label: "Commercial Roofing", href: "/commercial-roofing" },
      { label: "Siding", href: "/services/siding" },
      { label: "Gutters, Fascia & Soffits", href: "/services/gutters-fascia-soffits" },
      { label: "Windows & Doors", href: "/services/windows-and-doors" },
      { label: "Exterior Renovations", href: "/services/exterior-renovations" },
      { label: "Exterior Cleaning Services", href: "/services/exterior-cleaning-services" },
      { label: "Solar Services", href: "/services/solar-services" },
      { label: "Pool Enclosures & Lanais", href: "/services/pool-enclosures-lanais" },
      { label: "Room Additions", href: "/services/room-additions" },
      { label: "Storm Damage Repair", href: "/services/storm-damage-repair" },
      { label: "Storm Preparedness", href: "/services/storm-preparedness" },
      { label: "Emergency Response", href: "/services/emergency-response" },
    ],
  },
  {
    label: "Custom Buildings",
    href: "/custom-buildings",
    dropdown: [
      { label: "SIP Homes & Buildings", href: "/services/structural-insulated-panel-buildings" },
      { label: "Modular Retail Showrooms", href: "/custom-buildings/modular-retail-showrooms" },
      { label: "Container Buildings", href: "/containers" },
      { label: "Available 20' Mobile Container", href: "/containers/prebuilt" },
      { label: "Guest Houses", href: "/containers/guest-houses" },
      { label: "Offices & Workshops", href: "/containers/offices-workshops" },
      { label: "Metal Buildings", href: "/services/metal-buildings" },
    ],
  },
  { label: "Financing", href: "/financing" },
  { label: "Our Work", href: "/our-work" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About Seacoast", href: "/about" },
      { label: "Customer Reviews", href: "/customer-reviews" },
    ],
  },
];

export type SolutionsMegaItem = { label: string; href: string };

export const solutionsMega: { protect: SolutionsMegaItem[]; improve: SolutionsMegaItem[]; expand: SolutionsMegaItem[] } = {
  protect: [
    { label: "Roof Certification Inspection", href: "/services/roof-certification-inspection" },
    { label: "Thermal Drone Inspections", href: "/services/thermal-drone-inspections" },
    { label: "Storm Preparedness", href: "/services/storm-preparedness" },
    { label: "Emergency Response", href: "/services/emergency-response" },
    { label: "Storm Damage Repair", href: "/services/storm-damage-repair" },
    { label: "Impact Windows & Doors", href: "/services/windows-and-doors" },
  ],
  improve: [
    { label: "Roofing", href: "/services/roofing" },
    { label: "Commercial Roofing", href: "/commercial-roofing" },
    { label: "Siding", href: "/services/siding" },
    { label: "Gutters, Fascia & Soffits", href: "/services/gutters-fascia-soffits" },
    { label: "Windows & Doors", href: "/services/windows-and-doors" },
    { label: "Exterior Renovations", href: "/services/exterior-renovations" },
    { label: "Exterior Cleaning Services", href: "/services/exterior-cleaning-services" },
    { label: "Solar Services", href: "/services/solar-services" },
  ],
  expand: [
    { label: "Custom Buildings", href: "/custom-buildings" },
    { label: "SIP Homes & Buildings", href: "/services/structural-insulated-panel-buildings" },
    { label: "Modular Retail Showrooms", href: "/custom-buildings/modular-retail-showrooms" },
    { label: "Container Buildings", href: "/containers" },
    { label: "Metal Buildings & Pole Barns", href: "/services/metal-buildings" },
    { label: "Carports & Metal Roofs", href: "/services/carports" },
    { label: "Pool Enclosures & Lanais", href: "/services/pool-enclosures-lanais" },
    { label: "Room Additions", href: "/services/room-additions" },
  ],
};

export type ServiceAreaRegion = {
  name: string;
  state: "FL" | "AL";
  counties: string[];
};

// Single source for the regular service area. Copy, lists, and schema areaServed all derive from it.
export const serviceAreaRegions: ServiceAreaRegion[] = [
  {
    name: "Southwest Florida",
    state: "FL",
    counties: ["Hillsborough", "Manatee", "Sarasota", "Charlotte", "Lee", "Collier"],
  },
  {
    name: "Northwest Florida",
    state: "FL",
    counties: ["Escambia", "Santa Rosa"],
  },
  {
    name: "South Alabama",
    state: "AL",
    counties: ["Baldwin", "Escambia"],
  },
];

function joinWithAnd(items: string[], separator = ", ") {
  if (items.length <= 2) return items.join(" and ");
  return `${items.slice(0, -1).join(separator)}${separator}and ${items[items.length - 1]}`;
}

export function countyLabel(county: string, state: ServiceAreaRegion["state"]) {
  return `${county} County, ${state}`;
}

// Every label carries its state because Escambia County exists in both Florida and Alabama.
// The labels double as schema.org areaServed values (e.g. "Lee County, FL").
export const serviceArea = serviceAreaRegions.flatMap((region) =>
  region.counties.map((county) => countyLabel(county, region.state)),
);

// "Southwest Florida, Northwest Florida, and South Alabama"
export const serviceAreaRegionNames = joinWithAnd(serviceAreaRegions.map((region) => region.name));

// "Hillsborough, ... and Collier counties in Southwest Florida; Escambia and Santa Rosa counties in Northwest Florida; and ..."
export const serviceAreaSummary = joinWithAnd(
  serviceAreaRegions.map(
    (region) =>
      `${joinWithAnd(region.counties)} ${region.counties.length === 1 ? "County" : "counties"} in ${region.name}`,
  ),
  "; ",
);
