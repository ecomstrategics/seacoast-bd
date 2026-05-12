export type Project = {
  slug: string;
  title: string;
  videoId: string;
  serviceType: string;
  location: string;
  description: string;
};

const defaultDescription = "A completed Seacoast Building & Design project showcasing practical craftsmanship, durable exterior systems, and jobsite coordination across Southwest Florida.";

export const projects: Project[] = [
  { slug: "avion-woods-roof-replacement", title: "Avion Woods Roof Replacement", videoId: "SqRQm1Z1ArI", serviceType: "Roofing", location: "Southwest Florida", description: defaultDescription },
  { slug: "mels-diner-pvc-roof", title: "Mel's Diner PVC Roof Installation", videoId: "hVgpGjuIjnU", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: defaultDescription },
  { slug: "cinnamon-cove-villas-repairs", title: "Cinnamon Cove Villas III Repairs", videoId: "MI8yMXo__rE", serviceType: "Roofing - Multi-Family", location: "Fort Myers, FL", description: defaultDescription },
  { slug: "cummins-court-tpo-flat-roof", title: "Cummins Court TPO Flat Roof Install", videoId: "15-IOnnfVQk", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: defaultDescription },
  { slug: "standing-seam-copper-roof", title: "Standing Seam Copper Color Roof", videoId: "cPrH0gBbI1E", serviceType: "Roofing - Metal", location: "Southwest Florida", description: defaultDescription },
  { slug: "cinnamon-cove-gutters-fascia-soffits", title: "Cinn. Cove Gutters, Fascia & Soffits", videoId: "aEUvKk13NJM", serviceType: "Gutters/Fascia/Soffits", location: "Fort Myers, FL", description: defaultDescription },
  { slug: "cinnamon-cove-terrace-condos", title: "Cinn. Cove Terrace Condos Roofing", videoId: "88qGW2x-tLg", serviceType: "Roofing - Multi-Family", location: "Fort Myers, FL", description: defaultDescription },
  { slug: "naples-olympia-tpo-flat-roof", title: "Naples Olympia CT TPO Flat Roof", videoId: "8OSkAJKjdKc", serviceType: "Roofing - Commercial", location: "Naples, FL", description: defaultDescription },
  { slug: "gordons-fine-furniture-tpo", title: "Gordon's Fine Furniture TPO Flat Roof", videoId: "0XUt-bTCxd4", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: defaultDescription },
  { slug: "sea-tropic-lane-roser-cleo", title: "Sea Tropic Lane Roser Cleo Roof", videoId: "5pFKtExmXb0", serviceType: "Roofing", location: "Southwest Florida", description: defaultDescription },
  { slug: "galvalum-r-panel-roofing", title: "Galvalum R-Panel Building Roofing", videoId: "D1X-e9CCuAI", serviceType: "Roofing - Metal", location: "Southwest Florida", description: defaultDescription },
  { slug: "tpo-roofing-single-ply", title: "TPO Roofing Single Ply Membrane", videoId: "a7KivugMQtY", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: defaultDescription },
  { slug: "stone-coated-steel-flat-panel", title: "Stone Coated Steel Flat Panel", videoId: "Tb4sGtzdvvI", serviceType: "Roofing - Metal", location: "Southwest Florida", description: defaultDescription },
  { slug: "cinnamon-cove-carports-lockers", title: "Cinnamon Cove Carports & Lockers", videoId: "gbe7uAXk5hY", serviceType: "Exterior Structures", location: "Fort Myers, FL", description: defaultDescription },
  { slug: "mission-gold-steel-roser-cleo", title: "Mission Gold Steel Roser Cleo", videoId: "FR2V9tjwY7E", serviceType: "Roofing - Metal", location: "Southwest Florida", description: defaultDescription },
  { slug: "tpo-single-ply-flat-roofing", title: "TPO Single Ply Flat Roofing", videoId: "aFSU9e7gYCc", serviceType: "Roofing - Commercial", location: "Southwest Florida", description: defaultDescription },
  { slug: "concrete-roof-s-tile", title: "Concrete Roof S-Tile", videoId: "vGsMiqEfXlA", serviceType: "Roofing - Tile", location: "Southwest Florida", description: defaultDescription },
  { slug: "westlake-villa-900-tile", title: "Westlake Villa 900 Tile", videoId: "eiL9U_OJXb4", serviceType: "Roofing - Tile", location: "Southwest Florida", description: defaultDescription },
  { slug: "hardie-board-batten-siding", title: "Hardie Board & Batten Siding", videoId: "COFCUUuC9f4", serviceType: "Siding", location: "Southwest Florida", description: defaultDescription },
  { slug: "gannons-tpo-roofing-solar", title: "Gannon's TPO Roofing & Solar", videoId: "SqvikEx7pOI", serviceType: "Roofing + Solar", location: "Southwest Florida", description: defaultDescription },
  { slug: "saxony-900-slate-roof-lanai", title: "Saxony 900 Slate Roof & Lanai", videoId: "2HXcoaQvivE", serviceType: "Roofing + Enclosures", location: "Southwest Florida", description: defaultDescription },
  { slug: "saxony-900-slate-roof", title: "Saxony 900 Slate Roof", videoId: "1Vp0npdfC3c", serviceType: "Roofing - Slate", location: "Southwest Florida", description: defaultDescription },
  { slug: "heritage-pointe-carports", title: "Heritage Pointe Carports", videoId: "wTlF4lH7FEw", serviceType: "Exterior Structures", location: "Southwest Florida", description: defaultDescription },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const serviceTypes = Array.from(new Set(projects.map((project) => project.serviceType))).sort();
