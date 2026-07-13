export type ServiceAreaCity = {
  slug: string;
  name: string;
  county: string;
  intro: string;
  featuredProjectSlugs: string[];
};

export const serviceAreaCities: ServiceAreaCity[] = [
  {
    slug: "fort-myers",
    name: "Fort Myers",
    county: "Lee County",
    intro: "Seacoast's Fort Myers portfolio includes roofing, soffit and fascia, and multi-family work at properties such as Cinnamon Cove and Heritage Pointe. We serve residential, commercial, condominium, and HOA properties across Lee County.",
    featuredProjectSlugs: [
      "mels-diner-pvc-roof",
      "cinnamon-cove-gutters-fascia-soffits",
      "gordons-fine-furniture-tpo",
      "heritage-pointe-carports",
    ],
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    county: "Sarasota County",
    intro: "Seacoast serves Sarasota and surrounding Sarasota County with roofing, exterior, storm-preparation, and property-improvement work. Send the property address and scope so we can confirm availability.",
    featuredProjectSlugs: [],
  },
  {
    slug: "naples",
    name: "Naples",
    county: "Collier County",
    intro: "Seacoast serves Naples and Collier County for roofing and exterior projects. Our Naples portfolio includes the Avion Woods condominium roof replacement.",
    featuredProjectSlugs: ["avion-woods-roof-replacement"],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    county: "Lee County",
    intro: "Seacoast serves Cape Coral and surrounding Lee County with roofing, storm-damage repair, gutters, and exterior work. Share your address and project details so the team can recommend the right next step.",
    featuredProjectSlugs: [],
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    county: "Lee County",
    intro: "Seacoast serves homes, planned communities, and multi-family properties in Bonita Springs. Available scopes include roofing, exterior work, and storm preparation.",
    featuredProjectSlugs: [],
  },
  {
    slug: "bradenton",
    name: "Bradenton",
    county: "Manatee County",
    intro: "Seacoast serves Bradenton and Manatee County for roofing, siding, enclosures, and other exterior projects. Contact the team to confirm scheduling for your property.",
    featuredProjectSlugs: [],
  },
  {
    slug: "venice",
    name: "Venice",
    county: "Sarasota County",
    intro: "Seacoast serves Venice and surrounding Sarasota County with roofing, gutters, windows and doors, and storm-preparation work. You get one point of contact for the scope agreed in your proposal.",
    featuredProjectSlugs: [],
  },
  {
    slug: "punta-gorda",
    name: "Punta Gorda",
    county: "Charlotte County",
    intro: "Seacoast serves Punta Gorda and Charlotte County with roofing, storm-damage repair, and storm-preparation work for homes and commercial properties.",
    featuredProjectSlugs: [],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreaCities.find((c) => c.slug === slug);
}
