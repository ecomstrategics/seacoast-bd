export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  videoId?: string;
  serviceType: string;
  location?: string;
  description: string;
  propertyType?: string;
  completedOn?: string;
  completionLabel?: string;
  challenge?: string;
  approach?: string;
  scope?: string[];
  photos?: ProjectPhoto[];
};

// Top-level filter buckets derived from the granular serviceType.
export function getCategory(serviceType: string): string {
  if (/solar/i.test(serviceType)) return "Solar";
  if (/enclosure/i.test(serviceType)) return "Enclosures";
  if (/siding/i.test(serviceType)) return "Siding";
  if (/gutter|fascia|soffit/i.test(serviceType)) return "Gutters & Trim";
  if (/exterior structure|carport/i.test(serviceType)) return "Exterior Structures";
  if (/rehabilitation|restoration/i.test(serviceType)) return "Rehabilitation";
  if (/commercial buildout/i.test(serviceType)) return "Commercial Construction";
  if (/roof/i.test(serviceType)) return "Roofing";
  return "Other";
}

// Sub-buckets within Roofing for finer browsing. Returns null for non-roofing.
export function getRoofingSubcategory(serviceType: string): string | null {
  if (getCategory(serviceType) !== "Roofing") return null;
  if (/commercial/i.test(serviceType)) return "Commercial";
  if (/multi-family/i.test(serviceType)) return "Multi-Family";
  if (/metal/i.test(serviceType)) return "Metal";
  if (/tile/i.test(serviceType)) return "Tile";
  if (/slate/i.test(serviceType)) return "Slate";
  return "Standard";
}

export const projects: Project[] = [
  {
    slug: "avion-woods-roof-replacement",
    title: "Avion Woods Roof Replacement",
    videoId: "SqRQm1Z1ArI",
    serviceType: "Roofing - Multi-Family",
    location: "Naples, FL",
    description: "Seacoast replaced the roofs at the Avion Woods condominium community in Naples with a Roser stone-coated steel system and coordinated gutter work. Completed December 2023.",
    propertyType: "Condominium community",
    completedOn: "2023-12-06",
    scope: ["Roser stone-coated steel roofing", "Coordinated gutter work"],
  },
  {
    slug: "mels-diner-pvc-roof",
    title: "Mel's Diner PVC Roof Installation",
    videoId: "hVgpGjuIjnU",
    serviceType: "Roofing - Commercial",
    location: "Fort Myers, FL",
    description: "Seacoast installed PVC roofing and applied a flat-roof coating at Mel's Diner in Fort Myers. Completed October 2025.",
    propertyType: "Commercial restaurant property",
    completedOn: "2025-10-21",
    scope: ["PVC roofing installation", "Flat-roof coating"],
  },
  { slug: "cinnamon-cove-villas-repairs", title: "Cinnamon Cove Villas III Roof Repairs", videoId: "MI8yMXo__rE", serviceType: "Roofing - Multi-Family", location: "Fort Myers, FL", description: "Project video showing roof repairs across multiple buildings at Cinnamon Cove Villas III in Fort Myers." },
  {
    slug: "cummins-court-tpo-flat-roof",
    title: "Cummins Court TPO Flat Roof Install",
    videoId: "15-IOnnfVQk",
    serviceType: "Roofing - Commercial",
    location: "Fort Myers, FL",
    description: "Seacoast completed TPO flat-roof installation and gutter work at a commercial property on Cummins Court in Fort Myers. Completed March 2024.",
    propertyType: "Commercial property",
    completedOn: "2024-03-20",
    scope: ["TPO flat-roof installation", "Gutter work"],
  },
  { slug: "standing-seam-copper-roof", title: "Copper-Color Standing Seam Metal Roof", videoId: "cPrH0gBbI1E", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Project video featuring a standing-seam metal roof with a copper-color finish." },
  {
    slug: "cinnamon-cove-shuffleboard-project",
    title: "Cinnamon Cove Shuffleboard Project",
    videoId: "aEUvKk13NJM",
    serviceType: "Community Recreation Project",
    location: "Fort Myers, FL",
    description: "Seacoast completed a project for the Cinnamon Cove master board community focused on its shuffleboard amenity in Fort Myers. Completed March 2026.",
    propertyType: "Master community recreation amenity",
    completedOn: "2026-03-03",
    photos: [
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-01.webp",
        alt: "Completed covered shuffleboard courts at Cinnamon Cove in Fort Myers",
        caption: "Completed covered shuffleboard courts at Cinnamon Cove.",
        width: 1900,
        height: 878,
      },
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-02.webp",
        alt: "Covered seating beside the Cinnamon Cove shuffleboard courts",
        caption: "Covered seating beside the community shuffleboard courts.",
        width: 1900,
        height: 878,
      },
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-03.webp",
        alt: "Cinnamon Cove shuffleboard courts and covered seating beside the lake",
        caption: "Shuffleboard courts and covered seating overlooking the lake.",
        width: 1900,
        height: 878,
      },
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-04.webp",
        alt: "Covered seating structure during the Cinnamon Cove shuffleboard project",
        caption: "Covered seating structure during the shuffleboard project.",
        width: 1900,
        height: 878,
      },
    ],
  },
  {
    slug: "cinnamon-cove-terrace-condos",
    title: "Cinnamon Cove Terrace Condo II Improvements",
    videoId: "88qGW2x-tLg",
    serviceType: "Roofing - Multi-Family",
    location: "Fort Myers, FL",
    description: "Seacoast completed coordinated roofing and exterior improvements at Cinnamon Cove Terrace Condo II in Fort Myers.",
    propertyType: "Condominium community",
    scope: [
      "Roofing",
      "Soffit, fascia, and gutters",
      "Stucco repairs and painting",
      "Electrical work",
    ],
  },
  { slug: "naples-olympia-tpo-flat-roof", title: "Olympia Court TPO Flat Roof in Naples", videoId: "8OSkAJKjdKc", serviceType: "Roofing - Commercial", location: "Naples, FL", description: "Project video showing a TPO flat-roof installation at Olympia Court in Naples." },
  {
    slug: "gordons-fine-furniture-tpo",
    title: "Gordon's Fine Furniture TPO Flat Roof",
    videoId: "0XUt-bTCxd4",
    serviceType: "Roofing - Commercial",
    location: "Fort Myers, FL",
    description: "Seacoast installed commercial TPO roofing with ISO insulation board at Gordon's Fine Furniture in Fort Myers. Roofing work was completed in February 2024.",
    propertyType: "Commercial retail property",
    completedOn: "2024-02-05",
    completionLabel: "Roofing completed",
    scope: ["TPO roofing", "ISO insulation board"],
  },
  { slug: "sea-tropic-lane-roser-cleo", title: "Sea Tropic Lane Roser Cleo Roof", videoId: "5pFKtExmXb0", serviceType: "Roofing", location: "Southwest Florida", description: "Project video showing a Roser Cleo roof installation on Sea Tropic Lane." },
  { slug: "galvalum-r-panel-roofing", title: "Galvalume R-Panel Building Roof", videoId: "D1X-e9CCuAI", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Project video showing a Galvalume R-panel metal roof installation on a commercial building." },
  { slug: "tpo-roofing-single-ply", title: "Commercial TPO Single-Ply Roof", videoId: "a7KivugMQtY", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: "Project video showing single-ply TPO membrane installation on a commercial flat roof." },
  { slug: "stone-coated-steel-flat-panel", title: "Stone-Coated Steel Flat-Panel Roof", videoId: "Tb4sGtzdvvI", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Project video showing installation of a flat-profile stone-coated steel roof." },
  {
    slug: "cinnamon-cove-carports-lockers",
    title: "Cinnamon Cove Carports & Storage Lockers",
    videoId: "gbe7uAXk5hY",
    serviceType: "Exterior Structures",
    location: "Fort Myers, FL",
    description: "Seacoast built and repaired carports, framed storage lockers, and finished the structures with Hardie lap siding at Cinnamon Cove in Fort Myers.",
    propertyType: "Condominium community",
    scope: [
      "Carport construction and repair",
      "Framed storage lockers",
      "Hardie lap siding",
    ],
  },
  { slug: "mission-gold-steel-roser-cleo", title: "Mission Gold Roser Cleo Steel Roof", videoId: "FR2V9tjwY7E", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Project video showing a Roser Cleo steel roof in a Mission Gold finish." },
  { slug: "tpo-single-ply-flat-roofing", title: "White TPO Single-Ply Flat Roof", videoId: "aFSU9e7gYCc", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: "Project video showing white TPO single-ply roofing on a commercial flat roof." },
  { slug: "concrete-roof-s-tile", title: "Concrete S-Tile Roof Installation", videoId: "vGsMiqEfXlA", serviceType: "Roofing - Tile", location: "Southwest Florida", description: "Project video showing a concrete S-tile roof installation." },
  { slug: "westlake-villa-900-tile", title: "Westlake Villa 900 Tile Roof", videoId: "eiL9U_OJXb4", serviceType: "Roofing - Tile", location: "Southwest Florida", description: "Project video showing a Villa 900 flat concrete tile roof installation at Westlake." },
  { slug: "hardie-board-batten-siding", title: "Hardie Board & Batten Siding", videoId: "COFCUUuC9f4", serviceType: "Siding", location: "Southwest Florida", description: "Project video showing James Hardie board-and-batten siding installation." },
  { slug: "gannons-tpo-roofing-solar", title: "Gannon's TPO Roofing Project", videoId: "SqvikEx7pOI", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: "A Seacoast project video showing TPO flat-roof work at the Gannon property." },
  { slug: "saxony-900-slate-roof-lanai", title: "Saxony 900 Roof & Lanai", videoId: "2HXcoaQvivE", serviceType: "Roofing + Enclosures", location: "Southwest Florida", description: "Project video showing a Saxony 900 roof installation alongside a lanai screen enclosure." },
  { slug: "saxony-900-slate-roof", title: "Saxony 900 Roof Installation", videoId: "1Vp0npdfC3c", serviceType: "Roofing - Tile", location: "Southwest Florida", description: "Project video showing a Saxony 900 roof installation." },
  {
    slug: "nautical-bowls-florida-commercial-buildout",
    title: "Nautical Bowls Florida Commercial Buildout",
    serviceType: "Commercial Buildout",
    description: "Seacoast completed the first Nautical Bowls location built in Florida, coordinating a full commercial buildout during COVID-era material and shipping disruptions.",
    propertyType: "Commercial restaurant buildout",
    challenge: "Seven of 41 key materials were unavailable during the project, shipping delays affected sequencing, and 16 changes to the original plans extended the permitting process.",
    approach: "Seacoast coordinated the changing plans and trade sequence while moving the buildout through demolition, foundation work, interior construction, building systems, finishes, and final completion.",
    scope: [
      "Demolition and foundation work",
      "Metal-stud framing, drywall, and trim",
      "Electrical, plumbing, HVAC, and sprinklers",
      "Murals, flooring, and painting",
    ],
  },
  {
    slug: "tara-golf-club-multi-building-rehabilitation",
    title: "Tara Golf Club Multi-Building Rehabilitation",
    serviceType: "Commercial Rehabilitation",
    description: "Seacoast coordinated rehabilitation work across three Tara Golf Club buildings at the same time, combining structural, roofing, exterior, and mechanical scopes.",
    propertyType: "Golf club community",
    challenge: "The work moved forward during the rainy season while settlement-related conditions required major framing repairs to roof rafters across an active, multi-building property.",
    approach: "Seacoast phased multiple trades across the three buildings, addressed concealed and deteriorated conditions, and coordinated roofing, exterior, structural, and HVAC work as one rehabilitation program.",
    scope: [
      "Stucco, masonry, and painting",
      "Flat roofing with tapered insulation",
      "Roof-rafter framing repairs",
      "Rotten fascia-board replacement and custom metal fascia",
      "Soffit and gutters",
      "Standing-seam metal roofing with roof windows and solar vents",
      "HVAC work",
    ],
  },
  {
    slug: "hurricane-ian-storm-surge-restoration",
    title: "Hurricane Ian Storm-Surge Restoration",
    serviceType: "Storm Restoration",
    description: "Seacoast restored three private residences and the Coco Bay Amenities Center after Hurricane Ian storm-surge damage affected interior and exterior building systems.",
    propertyType: "Residential homes and community amenities center",
    challenge: "Storm surge affected materials and systems up to four feet high, requiring coordinated mitigation and rebuilding across several occupied-property types.",
    approach: "Seacoast removed damaged materials, cleaned affected areas, and rebuilt interior finishes, building systems, exterior components, and outdoor living areas under coordinated scopes.",
    scope: [
      "Drywall, insulation, tile, and hardwood flooring",
      "Kitchen and bathroom counters and shower tile",
      "Framing for islands, pillars, closets, and workbenches",
      "Trim, painting, electrical, plumbing, cabinets, and doors",
      "Exterior painting, gutters, soffit, and roofing",
      "Pavers and screen lanais",
    ],
  },
  {
    slug: "heritage-pointe-carports",
    title: "Heritage Pointe Carports",
    videoId: "wTlF4lH7FEw",
    serviceType: "Exterior Structures",
    location: "Fort Myers, FL",
    description: "A phased, multi-building carport replacement at Heritage Pointe in Fort Myers. The Building 3 phase shown here was completed in November 2024.",
    propertyType: "Multi-family community",
    completedOn: "2024-11-05",
    completionLabel: "Building 3 phase completed",
    scope: ["Carport replacement", "Phased work across multiple buildings"],
    photos: [
      {
        src: "/images/projects/heritage-pointe-carports/completed-carport-01.webp",
        alt: "Completed white metal carport structure at Heritage Pointe in Fort Myers",
        caption: "Completed carport structure from a Heritage Pointe building phase.",
        width: 1425,
        height: 1900,
      },
      {
        src: "/images/projects/heritage-pointe-carports/completed-carport-03.webp",
        alt: "Heritage Pointe carport roof and framing nearing completion beside a residential building",
        caption: "Carport roof and framing nearing completion during the Building 3 phase.",
        width: 1425,
        height: 1900,
      },
      {
        src: "/images/projects/heritage-pointe-carports/installation-progress-01.webp",
        alt: "Steel carport roof panels and framing during installation at Heritage Pointe",
        caption: "Steel carport roof panels and framing during installation.",
        width: 1425,
        height: 1900,
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const serviceTypes = Array.from(new Set(projects.map((project) => project.serviceType))).sort();

// Categories ordered with the most common first; "All" is handled in the UI.
export const categories = Array.from(
  new Set(projects.map((project) => getCategory(project.serviceType)))
).sort((a, b) => {
  const order = ["Roofing", "Rehabilitation", "Commercial Construction", "Siding", "Exterior Structures", "Gutters & Trim", "Enclosures", "Solar", "Other"];
  return order.indexOf(a) - order.indexOf(b);
});

// Roofing sub-buckets present in the data, ordered for the secondary filter row.
export const roofingSubcategories = Array.from(
  new Set(
    projects
      .map((project) => getRoofingSubcategory(project.serviceType))
      .filter((sub): sub is string => sub !== null)
  )
).sort((a, b) => {
  const order = ["Commercial", "Metal", "Tile", "Slate", "Multi-Family", "Standard"];
  return order.indexOf(a) - order.indexOf(b);
});
