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
    intro: "Fort Myers and Lee County sit inside one of Florida's most active hurricane corridors. Homes here face frequent wind events, storm surge risk, and aging rooflines that are often years past their prime. Seacoast has completed numerous projects across Lee County, including roofing, siding, gutters, and container builds for residential and multi-family properties.",
    featuredProjectSlugs: [
      "cinnamon-cove-villas-repairs",
      "cinnamon-cove-gutters-fascia-soffits",
      "cinnamon-cove-terrace-condos",
      "cinnamon-cove-carports-lockers",
    ],
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    county: "Sarasota County",
    intro: "Sarasota County properties range from barrier island beach homes to inland communities, all facing serious storm exposure. Impact-rated roofing, siding, and windows are high-demand here. Seacoast's Sarasota-area team handles residential, commercial, and multi-family work throughout the county.",
    featuredProjectSlugs: [],
  },
  {
    slug: "naples",
    name: "Naples",
    county: "Collier County",
    intro: "Naples and Collier County combine high property values with some of the most demanding coastal wind ratings in Florida. Seacoast works in Naples on premium roofing systems, exterior renovations, and container builds that meet or exceed FBC requirements for high-wind zones.",
    featuredProjectSlugs: ["naples-olympia-tpo-flat-roof"],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    county: "Lee County",
    intro: "Cape Coral's canal-front lots and dense residential grid see significant storm activity every season. Many homes have post-Ian rooflines that still need restoration work. Seacoast serves Cape Coral for roofing, storm damage repair, gutters, and container storage solutions.",
    featuredProjectSlugs: [],
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    county: "Lee County",
    intro: "Bonita Springs bridges Lee and Collier counties, with a mix of planned communities and waterfront properties. Seacoast provides full exterior services here, including storm prep programs designed for HOA communities and multi-family developments.",
    featuredProjectSlugs: [],
  },
  {
    slug: "bradenton",
    name: "Bradenton",
    county: "Manatee County",
    intro: "Bradenton and Manatee County are in the northern reach of Seacoast's service footprint, with properties that often face aging exterior systems and storm-related wear. Seacoast handles roofing, siding, and enclosure work throughout the area.",
    featuredProjectSlugs: [],
  },
  {
    slug: "venice",
    name: "Venice",
    county: "Sarasota County",
    intro: "Venice's coastal position and retiree-heavy demographics mean properties that need reliable, low-hassle contractor relationships. Seacoast provides one point of contact for roofing, gutters, impact windows, and storm prep across Venice and the surrounding Sarasota County communities.",
    featuredProjectSlugs: [],
  },
  {
    slug: "punta-gorda",
    name: "Punta Gorda",
    county: "Charlotte County",
    intro: "Punta Gorda and Charlotte County have a long memory of hurricane damage and a homeowner base that prioritizes resilience. Seacoast serves the area for storm damage repair, roofing, and storm preparedness programs for both residential and commercial properties.",
    featuredProjectSlugs: [],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreaCities.find((c) => c.slug === slug);
}
