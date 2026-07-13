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
  videoId: string;
  serviceType: string;
  location: string;
  description: string;
  propertyType?: string;
  completedOn?: string;
  completionLabel?: string;
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
    description: "Roof replacement for the Avion Woods condominium community in Naples using a Roser stone-coated steel roofing system, with coordinated gutter work. The project reached completion in December 2023.",
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
    description: "Commercial PVC roofing installation and flat-roof coating for Mel's Diner in Fort Myers. The project reached completion in October 2025.",
    propertyType: "Commercial restaurant property",
    completedOn: "2025-10-21",
    scope: ["PVC roofing installation", "Flat-roof coating"],
  },
  { slug: "cinnamon-cove-villas-repairs", title: "Cinnamon Cove Villas III Repairs", videoId: "MI8yMXo__rE", serviceType: "Roofing - Multi-Family", location: "Fort Myers, FL", description: "Multi-building roof repair project at Cinnamon Cove Villas III in Fort Myers. Coordinated across multiple occupied units with phased scheduling to minimize disruption to residents." },
  {
    slug: "cummins-court-tpo-flat-roof",
    title: "Cummins Court TPO Flat Roof Install",
    videoId: "15-IOnnfVQk",
    serviceType: "Roofing - Commercial",
    location: "Fort Myers, FL",
    description: "Commercial TPO flat-roof and gutter project at Cummins Court in Fort Myers, completed in March 2024.",
    propertyType: "Commercial property",
    completedOn: "2024-03-20",
    scope: ["TPO flat-roof installation", "Gutter work"],
  },
  { slug: "standing-seam-copper-roof", title: "Standing Seam Copper Color Roof", videoId: "cPrH0gBbI1E", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Standing seam metal roof in a copper color finish. Factory-formed panels with concealed fasteners provide a clean architectural look and rated wind resistance for coastal Florida properties." },
  {
    slug: "cinnamon-cove-gutters-fascia-soffits",
    title: "Cinnamon Cove Shuffleboard Soffit & Fascia",
    videoId: "aEUvKk13NJM",
    serviceType: "Fascia & Soffit",
    location: "Fort Myers, FL",
    description: "Vented soffit and fascia installation on the Cinnamon Cove shuffleboard shelter in Fort Myers. The commercial community-amenity project reached completion in March 2026.",
    propertyType: "Community recreation amenity",
    completedOn: "2026-03-03",
    scope: ["Vented soffit installation", "Fascia installation"],
    photos: [
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-01.webp",
        alt: "Completed vented soffit and fascia above the Cinnamon Cove shuffleboard courts in Fort Myers",
        caption: "Completed vented soffit and fascia along the shuffleboard shelter beside the courts.",
        width: 1900,
        height: 878,
      },
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-02.webp",
        alt: "Close view of vented soffit panels beneath the Cinnamon Cove shuffleboard shelter roof",
        caption: "Close view of the dark vented soffit panels and finished fascia at the shelter roofline.",
        width: 1900,
        height: 878,
      },
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-03.webp",
        alt: "Wide view of the Cinnamon Cove shuffleboard shelter soffit installation beside the lake",
        caption: "Continuous soffit coverage along the shuffleboard courts at Cinnamon Cove.",
        width: 1900,
        height: 878,
      },
      {
        src: "/images/projects/cinnamon-cove-shuffleboard/soffit-fascia-04.webp",
        alt: "Cinnamon Cove shuffleboard shelter framing and fascia during installation",
        caption: "Shelter framing and fascia during the phased installation.",
        width: 1900,
        height: 878,
      },
    ],
  },
  { slug: "cinnamon-cove-terrace-condos", title: "Cinn. Cove Terrace Condos Roofing", videoId: "88qGW2x-tLg", serviceType: "Roofing - Multi-Family", location: "Fort Myers, FL", description: "Multi-family roofing project at Cinnamon Cove Terrace Condos in Fort Myers. Full re-roof coordinated across connected condo buildings while maintaining safe access for residents throughout the job." },
  { slug: "naples-olympia-tpo-flat-roof", title: "Naples Olympia CT TPO Flat Roof", videoId: "8OSkAJKjdKc", serviceType: "Roofing - Commercial", location: "Naples, FL", description: "TPO flat roof system installed at Olympia Court in Naples. Fully adhered membrane with reinforced flashing details designed for Collier County wind and rain exposure." },
  {
    slug: "gordons-fine-furniture-tpo",
    title: "Gordon's Fine Furniture TPO Flat Roof",
    videoId: "0XUt-bTCxd4",
    serviceType: "Roofing - Commercial",
    location: "Fort Myers, FL",
    description: "Commercial TPO roofing with ISO insulation board for Gordon's Fine Furniture in Fort Myers. Roofing work was completed in February 2024, and the project closed in March 2024.",
    propertyType: "Commercial retail property",
    completedOn: "2024-03-20",
    completionLabel: "Project closed",
    scope: ["TPO roofing", "ISO insulation board"],
  },
  { slug: "sea-tropic-lane-roser-cleo", title: "Sea Tropic Lane Roser Cleo Roof", videoId: "5pFKtExmXb0", serviceType: "Roofing", location: "Southwest Florida", description: "Residential Roser Cleo profile roof installed on Sea Tropic Lane. This concrete tile system delivers a traditional Florida aesthetic with the impact and wind resistance coastal properties demand." },
  { slug: "galvalum-r-panel-roofing", title: "Galvalum R-Panel Building Roofing", videoId: "D1X-e9CCuAI", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Galvalume R-panel metal roof installation on a commercial building. Exposed-fastener steel panels provide a durable, cost-effective roofing solution for warehouse and industrial structures." },
  { slug: "tpo-roofing-single-ply", title: "TPO Roofing Single Ply Membrane", videoId: "a7KivugMQtY", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: "Single-ply TPO membrane installation on a commercial flat roof. Heat-welded seams and mechanically fastened attachment create a watertight, wind-rated system that reflects UV and reduces cooling costs." },
  { slug: "stone-coated-steel-flat-panel", title: "Stone Coated Steel Flat Panel", videoId: "Tb4sGtzdvvI", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Stone-coated steel flat panel roof system combining the durability of metal with a textured finish that dampens rain noise and resists Florida's salt air, wind, and UV exposure." },
  { slug: "cinnamon-cove-carports-lockers", title: "Cinnamon Cove Carports & Lockers", videoId: "gbe7uAXk5hY", serviceType: "Exterior Structures", location: "Fort Myers, FL", description: "Carport and storage locker structures built at Cinnamon Cove in Fort Myers. Engineered steel framing with new roofing provides covered parking and secure resident storage for the community." },
  { slug: "mission-gold-steel-roser-cleo", title: "Mission Gold Steel Roser Cleo", videoId: "FR2V9tjwY7E", serviceType: "Roofing - Metal", location: "Southwest Florida", description: "Mission Gold steel Roser Cleo metal roof installation. This profile replicates the look of traditional barrel tile using lightweight steel panels rated for high-wind coastal zones." },
  { slug: "tpo-single-ply-flat-roofing", title: "TPO Single Ply Flat Roofing", videoId: "aFSU9e7gYCc", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: "TPO single-ply flat roof system for a commercial building. White reflective membrane reduces interior cooling load while providing long-term weather protection against Southwest Florida storms." },
  { slug: "concrete-roof-s-tile", title: "Concrete Roof S-Tile", videoId: "vGsMiqEfXlA", serviceType: "Roofing - Tile", location: "Southwest Florida", description: "Concrete S-tile roof installation with the barrel-shaped profile common across Southwest Florida. Heavy tile provides natural wind resistance and a decades-long service life in coastal conditions." },
  { slug: "westlake-villa-900-tile", title: "Westlake Villa 900 Tile", videoId: "eiL9U_OJXb4", serviceType: "Roofing - Tile", location: "Southwest Florida", description: "Villa 900 flat concrete tile roof at Westlake. This low-profile tile delivers a clean, modern roofline while meeting Florida Building Code requirements for wind uplift in high-velocity hurricane zones." },
  { slug: "hardie-board-batten-siding", title: "Hardie Board & Batten Siding", videoId: "COFCUUuC9f4", serviceType: "Siding", location: "Southwest Florida", description: "James Hardie board-and-batten fiber cement siding installation. Hardie siding resists rot, termites, and moisture damage while giving the home a clean vertical-line exterior that holds paint for decades." },
  { slug: "gannons-tpo-roofing-solar", title: "Gannon's TPO Roofing & Solar", videoId: "SqvikEx7pOI", serviceType: "Roofing + Solar", location: "Southwest Florida", description: "Combined TPO flat-roof and solar panel work documented in Seacoast's project video. Additional project specifications are being verified before publication." },
  { slug: "saxony-900-slate-roof-lanai", title: "Saxony 900 Slate Roof & Lanai", videoId: "2HXcoaQvivE", serviceType: "Roofing + Enclosures", location: "Southwest Florida", description: "Saxony 900 synthetic slate roof paired with a new lanai screen enclosure. The roof and outdoor living space were built together so flashing, drainage, and structural tie-ins align from the start." },
  { slug: "saxony-900-slate-roof", title: "Saxony 900 Slate Roof", videoId: "1Vp0npdfC3c", serviceType: "Roofing - Slate", location: "Southwest Florida", description: "Saxony 900 synthetic slate roof delivering the look of natural slate at a fraction of the weight. Engineered polymer tiles resist cracking and fading in Florida's UV-heavy, storm-prone climate." },
  {
    slug: "heritage-pointe-carports",
    title: "Heritage Pointe Carports",
    videoId: "wTlF4lH7FEw",
    serviceType: "Exterior Structures",
    location: "Fort Myers, FL",
    description: "Multi-building community carport replacement program at Heritage Pointe in Fort Myers. AccuLynx documents separate phases by building, including a Building 3 phase completed in November 2024.",
    propertyType: "Multi-family community",
    completedOn: "2024-11-05",
    completionLabel: "Documented phase completed",
    scope: ["Carport replacement", "Phased work across multiple buildings"],
    photos: [
      {
        src: "/images/projects/heritage-pointe-carports/completed-carport-01.webp",
        alt: "Completed white metal carport structure at Heritage Pointe in Fort Myers",
        caption: "Completed carport structure from a documented Heritage Pointe building phase.",
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
  const order = ["Roofing", "Siding", "Exterior Structures", "Gutters & Trim", "Enclosures", "Solar", "Other"];
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
