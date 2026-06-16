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
      { label: "Roofing", href: "/services/roofing" },
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
    label: "Containers",
    href: "/containers",
    dropdown: [
      { label: "All Container Builds", href: "/containers" },
      { label: "Guest Houses", href: "/containers/guest-houses" },
      { label: "Offices & Workshops", href: "/containers/offices-workshops" },
      { label: "Storage Containers", href: "/containers/storage" },
      { label: "Storm Shelters", href: "/containers/storm-shelters" },
      { label: "Compare Options", href: "/containers/compare" },
    ],
  },
  { label: "Financing", href: "/financing" },
  {
    label: "Our Work",
    href: "/our-work",
    dropdown: [
      { label: "Project Portfolio", href: "/our-work" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "About", href: "/about" },
];

export type SolutionsMegaItem = { label: string; href: string };

export const solutionsMega: { protect: SolutionsMegaItem[]; improve: SolutionsMegaItem[]; expand: SolutionsMegaItem[] } = {
  protect: [
    { label: "Roof Certification Inspection", href: "/services/roof-certification-inspection" },
    { label: "Storm Preparedness", href: "/services/storm-preparedness" },
    { label: "Emergency Response", href: "/services/emergency-response" },
    { label: "Storm Damage Repair", href: "/services/storm-damage-repair" },
    { label: "Impact Windows & Doors", href: "/services/windows-and-doors" },
  ],
  improve: [
    { label: "Roofing", href: "/services/roofing" },
    { label: "Siding", href: "/services/siding" },
    { label: "Gutters, Fascia & Soffits", href: "/services/gutters-fascia-soffits" },
    { label: "Windows & Doors", href: "/services/windows-and-doors" },
    { label: "Exterior Renovations", href: "/services/exterior-renovations" },
    { label: "Exterior Cleaning Services", href: "/services/exterior-cleaning-services" },
    { label: "Solar Services", href: "/services/solar-services" },
  ],
  expand: [
    { label: "Container Guest Houses", href: "/containers/guest-houses" },
    { label: "Container Offices & Workshops", href: "/containers/offices-workshops" },
    { label: "Storage Containers", href: "/containers/storage" },
    { label: "Storm Shelters", href: "/containers/storm-shelters" },
    { label: "Pool Enclosures & Lanais", href: "/services/pool-enclosures-lanais" },
    { label: "Room Additions", href: "/services/room-additions" },
  ],
};

export const serviceArea = [
  "Hillsborough County",
  "Manatee County",
  "Sarasota County",
  "Charlotte County",
  "Lee County",
  "Collier County",
];
