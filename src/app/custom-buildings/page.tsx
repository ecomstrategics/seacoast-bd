import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, imageLicenseMetadata, serviceSchema } from "@/components/Schema";
import { seoDescription, seoTitle } from "@/lib/seo";

const canonicalPath = "/custom-buildings";
const pageUrl = `https://seacoastbd.com${canonicalPath}`;
const partnerUrl = "https://saferoomdesigns.com/";
const modularRetailImageUrl =
  "https://seacoastbd.com/images/custom-buildings/modular-retail/modular-retail-showroom-exterior.webp";
const pageTitle = "Custom Buildings in Southwest Florida";
const pageDescription = seoDescription(
  "Compare SIP buildings, modular retail showrooms, custom containers, metal buildings, carports, and room additions, then start a property-specific review with Seacoast.",
);

export const metadata: Metadata = {
  title: seoTitle(pageTitle),
  description: pageDescription,
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: `${pageTitle} | Seacoast`,
    description: pageDescription,
    siteName: "Seacoast Building & Design",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Seacoast Building & Design in Southwest Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | Seacoast`,
    description: pageDescription,
    images: ["/images/og-default.jpg"],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Custom Buildings" },
];

const buildingOptions = [
  {
    name: "SIP buildings",
    fullName: "Structural insulated panel buildings",
    shortLabel: "SIP",
    href: "/services/structural-insulated-panel-buildings",
    path: "Detached enclosed space",
    outcome:
      "Start with the desired floor plan and evaluate a panelized building system for a new home, guest space, office, or selected commercial use.",
    oftenFits:
      "A detached project where a custom enclosed layout matters more than working within a container shell.",
    firstQuestions: [
      "Which exact wall, roof, and framing system will be specified?",
      "What design, engineering, and approval path applies to the site?",
    ],
    accent: "border-orange/50",
    badge: "bg-orange/10 text-orange-deep",
  },
  {
    name: "Container buildings",
    fullName: "Custom container buildings",
    shortLabel: "BOX",
    href: "/containers",
    path: "Compact steel-shell space",
    outcome:
      "Configure storage, workspace, office, or an approved guest-space concept around one or more standardized steel shells.",
    oftenFits:
      "A compact project where container dimensions, delivery, placement, and a reuse-led shell are part of the goal.",
    firstQuestions: [
      "Can the container reach and be placed on the property?",
      "How will openings, foundation, utilities, and finishes be handled?",
    ],
    accent: "border-copper-light/60",
    badge: "bg-copper-light/20 text-navy",
  },
  {
    name: "Metal buildings",
    fullName: "Metal buildings and pole barns",
    shortLabel: "METAL",
    href: "/services/metal-buildings",
    path: "Utility and larger-volume space",
    outcome:
      "Plan a workshop, storage building, pole barn, or selected residential or commercial structure around its actual use and finish level.",
    oftenFits:
      "A detached structure where working clearance, storage volume, access, or utility is a primary design driver.",
    firstQuestions: [
      "Will the building be open, partially enclosed, or conditioned?",
      "What occupancy, structural, envelope, and opening requirements apply?",
    ],
    accent: "border-navy/10",
    badge: "bg-navy/10 text-navy",
  },
  {
    name: "Carports",
    fullName: "Carports and metal roof structures",
    shortLabel: "COVER",
    href: "/services/carports",
    path: "Open-sided coverage",
    outcome:
      "Create covered space for vehicles or equipment with the layout, access, attachment, drainage, and roof structure considered together.",
    oftenFits:
      "A project that needs useful roof coverage without creating a fully enclosed building.",
    firstQuestions: [
      "Should the structure attach to an existing building or stand alone?",
      "How do access, setbacks, drainage, and foundation affect placement?",
    ],
    accent: "border-navy/10",
    badge: "bg-navy/10 text-navy",
  },
  {
    name: "Room additions",
    fullName: "Conventional room additions",
    shortLabel: "ADD",
    href: "/services/room-additions",
    path: "Space connected to the building",
    outcome:
      "Add living or working area that is planned to connect with the existing structure, circulation, utilities, roof, and exterior envelope.",
    oftenFits:
      "A project where direct access from the existing home or building is central to how the new space will function.",
    firstQuestions: [
      "What existing structural and utility conditions affect the tie-in?",
      "How will the roof, floor, drainage, and exterior envelope connect?",
    ],
    accent: "border-navy/10",
    badge: "bg-navy/10 text-navy",
  },
] as const;

const decisionQuestions = [
  {
    number: "01",
    question: "Attached or detached?",
    answer:
      "Choose whether the new space must connect directly to the existing building or can work as a separate structure on the property.",
  },
  {
    number: "02",
    question: "Enclosed, open, or utility-first?",
    answer:
      "A conditioned room, flexible workshop, covered parking area, and compact storage space start with different building paths.",
  },
  {
    number: "03",
    question: "How should the floor plan work?",
    answer:
      "Decide whether the layout should begin with your rooms and circulation or with the dimensions of a particular shell or structural system.",
  },
  {
    number: "04",
    question: "What can the property support?",
    answer:
      "Access, setbacks, utilities, drainage, flood conditions, intended use, and local review can narrow the practical choices early.",
  },
] as const;

const comparisonRows = [
  {
    factor: "Often considered for",
    sip: "Detached homes, guest space, offices, or selected commercial buildings with a custom enclosed layout.",
    container: "Compact storage, work, office, or approved guest-space concepts using a standardized steel shell.",
    metal: "Workshops, storage, pole barns, or selected residential and commercial structures.",
    carport: "Covered vehicle or equipment areas that may be attached or detached.",
    addition: "Living or working space intended to connect directly with an existing building.",
  },
  {
    factor: "Layout starting point",
    sip: "The desired rooms and use, followed by the exact panel, framing, opening, and connection design.",
    container: "One or more container modules and their fixed shell dimensions.",
    metal: "Structural grid, clearances, access, enclosure, and intended finish level.",
    carport: "Vehicle or equipment dimensions, circulation, support locations, and roof coverage.",
    addition: "The existing floor plan, structure, roof, utilities, and circulation.",
  },
  {
    factor: "Relationship to the property",
    sip: "Usually evaluated as a new site-specific building; attachment is a design question.",
    container: "Usually placed as a separate structure, subject to access and approved use.",
    metal: "Commonly detached, with the exact siting and use confirmed for the parcel.",
    carport: "Can be attached or detached depending on the design and property.",
    addition: "Designed to tie into the existing building and become part of it.",
  },
  {
    factor: "Site and delivery focus",
    sip: "Material delivery, foundation, assembly access, weather protection, and trade sequencing.",
    container: "Large-unit transport, turning and lifting access, placement area, and prepared support.",
    metal: "Frame and panel delivery, equipment access, foundation, staging, and assembly sequence.",
    carport: "Placement, post or foundation work, drainage, vehicle access, and attachment conditions.",
    addition: "Occupied-site access, demolition or openings, tie-ins, protection, and trade sequencing.",
  },
  {
    factor: "Key review questions",
    sip: "Exact system documents, design team, foundation, connections, openings, utilities, intended use, and approval path.",
    container: "Shell condition, zoning, transport, foundation, modifications, utilities, intended use, and permits.",
    metal: "Occupancy, structure, enclosure, insulation, openings, utilities, site criteria, and permits.",
    carport: "Attachment, structure, setbacks, access, drainage, foundation, roof system, and permits.",
    addition: "Existing conditions, setbacks, structure, roof and envelope continuity, utilities, occupancy, and permits.",
  },
] as const;

const reviewInputs = [
  "Property address or city and ZIP",
  "How the space needs to be used",
  "Approximate size and whether it should be attached",
  "Site photos, survey, plans, or inspiration if available",
  "Target timing and broad budget context",
] as const;

const customBuildingsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: `${pageTitle} | Seacoast`,
  description: pageDescription,
  inLanguage: "en-US",
  dateModified: "2026-08-06",
  publisher: { "@id": "https://seacoastbd.com/#organization" },
  mainEntity: { "@id": `${pageUrl}#service` },
  associatedMedia: { "@id": `${pageUrl}#modular-retail-image` },
  mentions: {
    "@type": "Organization",
    name: "Safe Room Designs",
    url: partnerUrl,
  },
};

const modularRetailImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${pageUrl}#modular-retail-image`,
  contentUrl: modularRetailImageUrl,
  url: modularRetailImageUrl,
  width: 1600,
  height: 900,
  caption: "Partner-supplied concept rendering of a glass-front modular golf-cart showroom.",
  ...imageLicenseMetadata({
    creatorName: "Safe Room Designs",
    creatorUrl: partnerUrl,
    creatorDescription:
      "Responsible supplying organization; the individual photographer or rendering artist was not identified in the source materials.",
    creditText: "Concept rendering supplied by Safe Room Designs",
    copyrightNotice:
      "Used by Seacoast Building & Design with permission. Copyright remains with the applicable rights holder.",
  }),
};

const buildingOptionsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Custom building options available for project review",
  numberOfItems: buildingOptions.length,
  itemListElement: buildingOptions.map((option, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: option.fullName,
      url: `https://seacoastbd.com${option.href}`,
      provider: { "@id": "https://seacoastbd.com/#organization" },
    },
  })),
};

function BuildingPathDiagram() {
  return (
    <figure className="overflow-hidden rounded-3xl border border-white/15 bg-navy-900/55 p-4 shadow-2xl md:p-6">
      <svg
        viewBox="0 0 720 470"
        role="img"
        aria-labelledby="building-path-title building-path-description"
        className="h-auto w-full"
      >
        <title id="building-path-title">Five custom-building paths for one property goal</title>
        <desc id="building-path-description">
          A conceptual site-plan diagram connects property and intended use to SIP, container, metal building,
          carport, and room-addition options.
        </desc>
        <defs>
          <pattern id="site-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#AFC1F4" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
          <linearGradient id="site-glow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#24407F" />
            <stop offset="1" stopColor="#0E2150" />
          </linearGradient>
        </defs>

        <rect x="1" y="1" width="718" height="468" rx="30" fill="url(#site-glow)" stroke="#AFC1F4" strokeOpacity="0.18" />
        <rect x="1" y="1" width="718" height="468" rx="30" fill="url(#site-grid)" />
        <path
          d="M55 65H665V385L615 425H105L55 385Z"
          fill="none"
          stroke="#AFC1F4"
          strokeOpacity="0.38"
          strokeWidth="2"
          strokeDasharray="8 9"
        />

        <g fill="none" stroke="#AFC1F4" strokeOpacity="0.34" strokeWidth="2">
          <path d="M360 235L185 132" />
          <path d="M360 235L531 127" />
          <path d="M360 235L555 304" />
          <path d="M360 235L357 373" />
          <path d="M360 235L163 302" />
        </g>

        <g>
          <circle cx="360" cy="235" r="79" fill="#E15A2B" fillOpacity="0.13" stroke="#FFA07A" strokeWidth="2" />
          <circle cx="360" cy="235" r="62" fill="#0E2150" stroke="#FFA07A" strokeOpacity="0.7" />
          <text x="360" y="225" textAnchor="middle" fill="#FFA07A" fontSize="13" fontWeight="700" letterSpacing="2">
            START WITH
          </text>
          <text x="360" y="250" textAnchor="middle" fill="#FFFFFF" fontSize="19" fontWeight="700">
            SITE + USE
          </text>
        </g>

        {[
          { x: 105, y: 91, width: 160, code: "SIP", label: "Panelized building" },
          { x: 455, y: 86, width: 168, code: "BOX", label: "Container building" },
          { x: 490, y: 274, width: 164, code: "METAL", label: "Utility building" },
          { x: 278, y: 350, width: 164, code: "ADD", label: "Room addition" },
          { x: 76, y: 270, width: 172, code: "COVER", label: "Carport" },
        ].map((node) => (
          <g key={node.code}>
            <rect
              x={node.x}
              y={node.y}
              width={node.width}
              height="82"
              rx="15"
              fill="#F8F6F2"
              stroke={node.code === "SIP" ? "#FFA07A" : "#AFC1F4"}
              strokeWidth={node.code === "SIP" ? "3" : "2"}
            />
            <text x={node.x + 18} y={node.y + 31} fill="#B83410" fontSize="13" fontWeight="700" letterSpacing="1.5">
              {node.code}
            </text>
            <text x={node.x + 18} y={node.y + 57} fill="#1E3A7A" fontSize="14" fontWeight="700">
              {node.label}
            </text>
          </g>
        ))}

        <g transform="translate(635 35)">
          <path d="M0 18L8 0L16 18" fill="none" stroke="#FFA07A" strokeWidth="2" strokeLinejoin="round" />
          <text x="8" y="33" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.75" fontSize="11" fontWeight="700">
            N
          </text>
        </g>
      </svg>
      <figcaption className="border-t border-white/10 px-2 pt-4 text-sm leading-6 text-white/70">
        One property goal can point to several construction paths. The useful comparison starts before a shell,
        system, or floor plan is selected.
      </figcaption>
    </figure>
  );
}

export default function CustomBuildingsPage() {
  return (
    <>
      <SchemaScript
        schema={[
          customBuildingsPageSchema,
          {
            ...serviceSchema({
              name: "Custom Building Planning and Construction in Southwest Florida",
              description: pageDescription,
              url: canonicalPath,
              serviceType: "Custom Building Planning and Construction",
              areaServed: [
                "Hillsborough County, FL",
                "Manatee County, FL",
                "Sarasota County, FL",
                "Charlotte County, FL",
                "Lee County, FL",
                "Collier County, FL",
              ],
            }),
            "@id": `${pageUrl}#service`,
            provider: { "@id": "https://seacoastbd.com/#organization" },
          },
          buildingOptionsSchema,
          modularRetailImageSchema,
        ]}
      />

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <p className="eyebrow mt-4">Custom buildings for Southwest Florida</p>
            <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-[1.08] md:text-6xl">
              More ways to build the space your property needs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Compare structural insulated panel buildings, custom containers, metal buildings, carports, and
              room additions by the outcome you want. Seacoast starts with the property and intended use, then
              helps narrow the construction path before a scope is defined.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#compare-options"
                className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper"
              >
                Compare Building Options
              </Link>
              <Link
                href="/contact?service=custom-buildings"
                className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy"
              >
                Start With Your Property
              </Link>
            </div>
          </div>
          <BuildingPathDiagram />
        </div>
      </section>

      <section className="dark-band border-y border-white/10 bg-navy-surface py-9" aria-labelledby="quick-answer-heading">
        <div className="container grid max-w-6xl gap-5 md:grid-cols-[0.36fr_1fr] md:items-start">
          <p className="eyebrow">Quick answer</p>
          <div>
            <h2 id="quick-answer-heading" className="font-heading text-2xl font-bold text-navy md:text-3xl">
              Which custom-building option is the best fit?
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-text-secondary">
              Use a SIP path when the goal is a detached enclosed building with a custom floor plan. Consider a
              container when the standardized steel shell is part of the concept, a metal building when utility
              or larger-volume space leads, a carport when open coverage is enough, and a room addition when the
              new space must connect to the existing building. The property, use, design, access, and permit path
              still determine what is practical.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep" aria-labelledby="decision-guide-heading">
        <div className="container max-w-6xl">
          <p className="eyebrow">A four-question decision guide</p>
          <h2 id="decision-guide-heading" className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Define the space before choosing the construction system.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            These questions make the first conversation more useful and can expose a poor fit before time is
            spent developing the wrong concept.
          </p>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {decisionQuestions.map((item) => (
              <li key={item.number} className="rounded-2xl border border-white/10 bg-navy-surface p-6">
                <span className="font-heading text-sm font-bold tracking-[0.18em] text-orange" aria-hidden="true">
                  {item.number}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.answer}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="compare-options" className="section scroll-mt-24 bg-navy" aria-labelledby="options-heading">
        <div className="container max-w-6xl">
          <p className="eyebrow">Five paths to consider</p>
          <h2 id="options-heading" className="mt-2 max-w-4xl font-heading text-4xl font-bold text-white">
            Match the building path to the job the space must do.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/70">
            No option is the universal winner. Each card identifies a likely fit and the questions that should be
            answered before design, pricing, or permitting moves ahead.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {buildingOptions.map((option) => (
              <article
                key={option.name}
                className={`flex h-full flex-col rounded-3xl border-2 bg-white p-7 shadow-soft ${option.accent}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-[0.14em] ${option.badge}`}>
                    {option.shortLabel}
                  </span>
                  <span className="text-right text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {option.path}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-navy">{option.name}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{option.outcome}</p>
                <div className="mt-6 border-t border-navy/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-deep">Often fits</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{option.oftenFits}</p>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-navy">Questions to answer first</p>
                  <ul className="mt-3 space-y-3">
                    {option.firstQuestions.map((question) => (
                      <li key={question} className="flex gap-3 text-sm leading-6 text-text-secondary">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={option.href}
                  className="mt-auto inline-flex pt-7 font-bold text-orange-deep transition hover:text-copper hover:underline"
                  aria-label={`Explore ${option.fullName}`}
                >
                  Explore this path <span aria-hidden="true">&nbsp;→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep" aria-labelledby="comparison-heading">
        <div className="container max-w-6xl">
          <p className="eyebrow">Side-by-side planning view</p>
          <h2 id="comparison-heading" className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            What changes from one building option to another
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            This comparison is a starting point, not a feasibility decision. The parcel, municipality,
            association rules, intended use, design, and selected products can change the project requirements.
          </p>
          <p id="comparison-scroll-instructions" className="mt-6 text-sm leading-6 text-text-secondary min-[1152px]:hidden">
            On narrower screens, swipe or scroll horizontally to compare all five building options.
          </p>
          <div
            className="mt-3 overflow-x-auto overscroll-x-contain rounded-2xl border border-white/10 bg-white shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-orange/40 min-[1152px]:mt-8"
            role="region"
            aria-label="Scrollable comparison of custom building options"
            aria-describedby="comparison-scroll-instructions"
            tabIndex={0}
          >
            <table className="w-full min-w-[1100px] table-fixed border-collapse text-left text-sm min-[1152px]:min-w-0">
              <caption className="sr-only">
                Comparison of structural insulated panel buildings, container buildings, metal buildings,
                carports, and room additions
              </caption>
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="sticky left-0 z-20 w-36 border-r border-white/15 bg-navy p-4 font-heading text-base sm:w-40 min-[1152px]:w-44">
                    Planning factor
                  </th>
                  {buildingOptions.map((option) => (
                    <th key={option.name} scope="col" className="p-4 font-heading text-base">
                      <Link href={option.href} className="hover:text-orange hover:underline">
                        {option.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="border-b border-navy/10 align-top last:border-0">
                    <th scope="row" className="sticky left-0 z-10 border-r border-navy/10 bg-cool-gray p-4 font-semibold text-navy">
                      {row.factor}
                    </th>
                    <td className="p-4 leading-6 text-text-secondary">{row.sip}</td>
                    <td className="p-4 leading-6 text-text-secondary">{row.container}</td>
                    <td className="p-4 leading-6 text-text-secondary">{row.metal}</td>
                    <td className="p-4 leading-6 text-text-secondary">{row.carport}</td>
                    <td className="p-4 leading-6 text-text-secondary">{row.addition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="modular-retail-showrooms" className="section scroll-mt-24 dark-band bg-navy" aria-labelledby="modular-retail-heading">
        <div className="container grid max-w-6xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-navy-surface shadow-soft">
            <div className="relative aspect-video">
              <Image
                src="/images/custom-buildings/modular-retail/modular-retail-showroom-exterior.webp"
                alt="Concept rendering of a black glass-front modular showroom displaying golf carts"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-white/65">
              South Beach modular retail showroom concept supplied by Safe Room Designs. Concept rendering;
              final design, systems, site work, and approvals are project-specific.
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">Featured commercial concept</p>
            <h2 id="modular-retail-heading" className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy">
              A modular showroom can be planned around customers, inventory, and the brand.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-text-secondary">
              The new partner concept illustrates a purpose-built transportable retail space with glazed
              frontage, a dedicated customer entrance, separate personnel access, and rear inventory movement.
              It can be evaluated for dealerships, product showrooms, demonstration centers, resort or
              community retail, and repeat-location programs.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Brand-ready storefront and finishes",
                "Storefront and service-opening planning",
                "Separate customer and service access",
                "Potential relocation to an approved site",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-navy-surface p-4 text-sm leading-6 text-white/75">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/custom-buildings/modular-retail-showrooms"
              className="mt-7 inline-flex font-bold text-orange hover:underline"
            >
              Explore modular retail showrooms →
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-navy" aria-labelledby="sip-partnership-heading">
        <div className="container grid max-w-6xl gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="rounded-3xl border border-orange/35 bg-orange/10 p-7 md:p-10">
            <p className="eyebrow">A new construction path</p>
            <h2 id="sip-partnership-heading" className="mt-2 max-w-3xl font-heading text-4xl font-bold text-white">
              Seacoast is working with Safe Room Designs on SIP and selected modular building opportunities.
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-white/75">
              The collaboration gives owners and developers a local starting point for evaluating two distinct
              paths: steel-frame insulated-panel buildings and selected purpose-built modular concepts. Seacoast
              begins with the property, intended use, and project requirements. The exact system, design roles,
              engineering, approvals, contract scope, pricing, and schedule are confirmed for the individual
              project before construction.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/services/structural-insulated-panel-buildings"
                className="font-bold text-orange hover:underline"
              >
                Explore SIP buildings →
              </Link>
              <Link
                href="/custom-buildings/modular-retail-showrooms"
                className="font-bold text-orange hover:underline"
              >
                Explore modular showrooms →
              </Link>
              <a
                href="https://saferoomdesigns.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-copper-light hover:text-white hover:underline"
              >
                Visit Safe Room Designs <span className="sr-only">(opens in a new tab)</span> ↗
              </a>
            </div>
          </div>
          <div className="grid gap-5">
            <figure className="overflow-hidden rounded-3xl border border-white/10 bg-navy-surface">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sip/steel-frame-sip-home-interior.webp"
                  alt="Finished open-plan living and kitchen area from a Safe Room Designs structural insulated panel project"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-white/65">
                Finished interior from a Safe Room Designs SIP project. Seacoast confirms the project team, system, and scope for each engagement.
              </figcaption>
            </figure>

            <aside className="rounded-3xl border border-white/10 bg-navy-surface p-7 md:p-8" aria-labelledby="not-automatic-heading">
              <p className="eyebrow">Important distinction</p>
              <h2 id="not-automatic-heading" className="mt-2 font-heading text-2xl font-bold text-white">
                A system name does not decide the permitted building.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/70">
                A brand name, panel type, or preliminary concept does not by itself establish the approved use or
                performance of a complete building. Those decisions depend on the exact assembly, site-specific
                design, applicable documents, and official review for the project.
              </p>
              <Link
                href="/understanding-floridas-building-codes"
                className="mt-6 inline-flex font-bold text-orange hover:underline"
              >
                Understand Florida code planning →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep" aria-labelledby="first-review-heading">
        <div className="container grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Make the first review useful</p>
            <h2 id="first-review-heading" className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy">
              Bring the outcome, address, and what you already know.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
              You do not need to select a building system before contacting Seacoast. A short description of how
              the space should function is more useful than guessing at the construction method.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {reviewInputs.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-navy-surface p-4 text-sm leading-6 text-text-secondary">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-soft md:p-9">
            <p className="eyebrow">What happens next</p>
            <ol className="mt-6 space-y-6">
              {[
                {
                  step: "1",
                  title: "Review the property and intended use",
                  body: "Identify the site, access, attached-or-detached goal, size, occupancy, utilities, and available documents.",
                },
                {
                  step: "2",
                  title: "Narrow the practical building paths",
                  body: "Compare likely fit, major unknowns, site constraints, and the information needed to advance a concept.",
                },
                {
                  step: "3",
                  title: "Define design and approval responsibilities",
                  body: "Confirm the selected system, design team, engineering, documents, permitting roles, scope, and next decision point.",
                },
              ].map((item) => (
                <li key={item.step} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-deep font-heading font-bold text-white"
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Not sure which building path fits?"
        subtext="Start with the property and what the space needs to do. Seacoast will help identify the options and questions worth reviewing next."
        buttonLabel="Discuss Your Property"
        buttonHref="/contact?service=custom-buildings"
      />
    </>
  );
}
