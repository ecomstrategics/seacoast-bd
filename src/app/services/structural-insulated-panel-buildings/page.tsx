import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import {
  SchemaScript,
  faqSchema,
  serviceSchema,
} from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

const pagePath = "/services/structural-insulated-panel-buildings";
const pageUrl = `https://seacoastbd.com${pagePath}`;
const partnerUrl = "https://saferoomdesigns.com/";
const pageDescription =
  "Explore steel-frame structural insulated panel homes and buildings with Seacoast and Safe Room Designs for site-specific projects in Southwest Florida.";

export const metadata: Metadata = {
  title: seoTitle("Steel-Frame SIP Homes & Buildings in Southwest Florida"),
  description: pageDescription,
  alternates: { canonical: pagePath },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Custom SIP Homes and Buildings for Southwest Florida",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Seacoast Building & Design structural insulated panel building services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom SIP Homes and Buildings for Southwest Florida",
    description: pageDescription,
    images: ["/images/og-default.jpg"],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Custom Buildings", href: "/custom-buildings" },
  { label: "Structural Insulated Panel Buildings" },
];

const projectTypes = [
  {
    title: "Custom homes",
    body: "Explore a detached home with a conventional floor-plan goal, planned around the property, household needs, utilities, finish level, and local requirements.",
    fit: "Owners beginning with land, a plan, or a clear space program",
  },
  {
    title: "Guest houses and detached living space",
    body: "Evaluate guest houses, studios, and accessory dwelling units where the site, zoning, utilities, and local rules support the intended use.",
    fit: "Properties that need living or working space separate from the main home",
  },
  {
    title: "Offices and workshops",
    body: "Plan a purpose-built office, studio, workshop, or operational space without limiting the design to a shipping-container footprint.",
    fit: "Residential or business properties with a defined use and space need",
  },
  {
    title: "Selected commercial and repeat-plan projects",
    body: "Discuss light-commercial buildings and repeated residential concepts after reviewing occupancy, scale, site conditions, design responsibilities, and delivery fit.",
    fit: "Owners and developers who can define the use, location, and project stage",
  },
];

const systemParts = [
  {
    number: "01",
    title: "Panel enclosure",
    body: "A conventional SIP has an insulating core bonded between two structural facings. The exact facings, core, thicknesses, frame, and connections for a Seacoast project are identified in its design documents.",
  },
  {
    number: "02",
    title: "Complete structural path",
    body: "Foundation, wall system, roof, openings, framing, fasteners, and connections must work together. Engineering addresses the complete building rather than treating one panel as the whole solution.",
  },
  {
    number: "03",
    title: "Openings and building services",
    body: "Windows, doors, electrical, plumbing, ventilation, and HVAC are coordinated with the selected assembly so penetrations and service routes are planned before construction.",
  },
  {
    number: "04",
    title: "Property-specific criteria",
    body: "The intended use, site, jurisdiction, flood context, design criteria, utilities, access, and finish scope shape the engineered and permitted project.",
  },
];

const projectRoles = [
  {
    name: "Seacoast Building & Design",
    label: "Local project and construction path",
    body: "Seacoast starts with the property and intended use, helps define project fit and construction scope, and coordinates the responsibilities included in its written proposal. Site work, logistics, construction, permits, and closeout roles are confirmed project by project.",
  },
  {
    name: "Safe Room Designs",
    label: "Panel-system collaboration",
    body: "Seacoast is working with Safe Room Designs to evaluate steel-frame insulated-panel concepts and supporting system information. The selected product, supply, design, manufacturing, and support roles are defined in the project documents before work proceeds.",
  },
  {
    name: "Project professionals and authorities",
    label: "Site-specific design and review",
    body: "The responsible architect, engineers, specialty professionals, manufacturers, inspectors, and permitting authority review the parts assigned to them. Signed plans, calculations, product information, and official decisions control the permitted project.",
  },
];

const projectSteps = [
  {
    step: "01",
    title: "Start with the property and use",
    body: "Share the address, intended use, approximate size, plans or inspiration, utilities, desired timing, and what you need the building to accomplish.",
  },
  {
    step: "02",
    title: "Compare the construction paths",
    body: "Seacoast reviews whether a SIP building, container building, metal building, or conventional approach appears to fit the goal and the information available.",
  },
  {
    step: "03",
    title: "Develop the site-specific design",
    body: "The project team defines the exact assembly, floor plan, structure, foundation, roof, openings, building services, site interfaces, and design responsibilities.",
  },
  {
    step: "04",
    title: "Complete engineering and permitting",
    body: "Applicable product, evaluation, and test documentation is gathered with the project plans for review by the responsible professionals and permitting authority.",
  },
  {
    step: "05",
    title: "Confirm scope and build",
    body: "Before construction, the written scope confirms pricing, schedule, fabrication, site work, installation, inspections, exclusions, warranties, and closeout responsibilities.",
  },
];

const floridaReviewItems = [
  {
    title: "Property and allowed use",
    items: [
      "Zoning, setbacks, density, and intended occupancy",
      "Flood zone, elevation, drainage, soils, and foundation conditions",
      "Site access, delivery, staging, utilities, and wastewater service",
    ],
  },
  {
    title: "Complete building design",
    items: [
      "Applicable wind, exposure, opening, roof, and connection criteria",
      "Energy, moisture, ventilation, fire, termite, and durability details",
      "Accessibility, egress, mechanical, electrical, and plumbing requirements",
    ],
  },
  {
    title: "Documents and official review",
    items: [
      "Exact system components, installation information, and limitations",
      "Site-specific architecture, engineering, calculations, and specifications",
      "Applicable evaluations, permits, inspections, and closeout records",
    ],
  },
];

const buildingOptions = [
  {
    title: "Steel-frame SIP building",
    fit: "A new detached home or building with a flexible, conventional floor-plan goal.",
    questions: "Exact assembly, engineering, foundation, openings, utilities, delivery, and permit path.",
    href: pagePath,
    linkLabel: "You are viewing this option",
  },
  {
    title: "Custom container building",
    fit: "A compact workspace, storage building, guest space, or reuse-led shell.",
    questions: "Container condition, dimensions, transport, openings, foundation, zoning, and finish scope.",
    href: "/containers",
    linkLabel: "Explore container buildings",
  },
  {
    title: "Metal building or pole barn",
    fit: "A workshop, utility, agricultural, storage, or selected commercial building.",
    questions: "Structural system, spans, enclosure and insulation type, occupancy, site work, and design criteria.",
    href: "/services/metal-buildings",
    linkLabel: "Explore metal buildings",
  },
  {
    title: "Conventional building or addition",
    fit: "A familiar construction path or space that must connect directly to an existing building.",
    questions: "Existing-condition tie-ins, setbacks, roof and envelope continuity, access, and occupied-site work.",
    href: "/services/room-additions",
    linkLabel: "Explore room additions",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What are structural insulated panels?",
    answer:
      "Structural insulated panels, or SIPs, are factory-made building panels with an insulating core bonded between two structural facings. The exact facings, core, thicknesses, framing, connections, and allowed uses vary by system and must be defined for the project.",
  },
  {
    question: "How is a SIP building different from a shipping-container build?",
    answer:
      "A SIP building begins with a panelized building system and can be planned around a conventional floor-plan goal. A container build begins with an existing steel shipping-container shell, so its dimensions, condition, openings, transport, and reuse strategy shape the project. Either option still requires a property and permitting review.",
  },
  {
    question: "What types of SIP projects can Seacoast evaluate?",
    answer:
      "Seacoast can discuss custom homes, guest houses, accessory dwelling units where locally allowed, detached offices and workshops, and selected light-commercial or repeat-plan concepts. Site, occupancy, size, design, logistics, and current project fit are reviewed before Seacoast commits to a scope.",
  },
  {
    question: "Can a SIP building be permitted in Southwest Florida?",
    answer:
      "A SIP building can be evaluated for a Southwest Florida property, but permitability is site- and project-specific. The complete design must address zoning, use, flood and foundation conditions, structural criteria, openings, energy and building systems, the exact panel assembly, and the documents required by the permitting authority.",
  },
  {
    question: "How are Florida wind and flood requirements handled?",
    answer:
      "The responsible design professionals establish the criteria for the actual property and design the complete load path, foundation, connections, walls, roof, and openings accordingly. Flood zone, elevation, drainage, exposure, and other site conditions are addressed in the project plans and permitting process.",
  },
  {
    question: "Does the Safe Room Designs name make every building a certified safe room?",
    answer:
      "No. A partner or product name is not a building certification. Any project intended to meet separate safe-room or storm-shelter criteria would require an expressly defined scope, applicable design criteria, supporting documentation, and project-specific professional and official review.",
  },
  {
    question: "Who handles design, engineering, permitting, supply, and construction?",
    answer:
      "The responsibility split is confirmed in the written project documents. Seacoast leads the initial property and construction-fit conversation; Safe Room Designs supports the panel-system collaboration; and the assigned architect, engineers, manufacturers, specialty trades, inspectors, and permitting authority handle the work and decisions within their respective scopes.",
  },
  {
    question: "What affects the cost and timeline of a SIP building?",
    answer:
      "Cost and timing depend on the property, building size and use, design stage, exact system, engineering and permit path, foundation and site work, utilities, openings, finishes, fabrication, delivery, trade availability, inspections, and owner decisions. Seacoast confirms pricing and schedule only after enough of those variables are defined.",
  },
];

const sipServiceSchema = {
  ...serviceSchema({
    name: "Structural Insulated Panel Homes and Buildings",
    description: pageDescription,
    url: pagePath,
    serviceType: "Site-Specific Structural Insulated Panel Building Project Review and Construction",
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
};

const sipWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Custom SIP Homes and Buildings for Southwest Florida",
  description: pageDescription,
  inLanguage: "en-US",
  dateModified: "2026-08-04",
  isPartOf: { "@id": "https://seacoastbd.com/#website" },
  about: { "@id": `${pageUrl}#service` },
  mentions: {
    "@type": "Organization",
    name: "Safe Room Designs",
    url: partnerUrl,
  },
};

export default function StructuralInsulatedPanelBuildingsPage() {
  return (
    <>
      <SchemaScript
        schema={[
          sipWebPageSchema,
          sipServiceSchema,
          faqSchema(faqs),
        ]}
      />

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(225,90,43,0.24),transparent_36%)]"
          aria-hidden="true"
        />
        <div className="container relative max-w-6xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="eyebrow text-orange/80">Steel-frame SIP construction</p>
              <h1 className="mt-3 max-w-5xl font-heading text-4xl font-bold leading-tight md:text-6xl">
                Custom SIP homes and buildings for Southwest Florida
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
                Seacoast is working with Safe Room Designs to evaluate structural insulated panel systems for custom homes, guest houses, offices, workshops, and selected commercial projects. Each project is planned around the property, intended use, design, engineering, and permit path.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?service=structural-insulated-panel-buildings"
                  className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper"
                >
                  Discuss a SIP Project
                </Link>
                <Link
                  href="/custom-buildings"
                  className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy"
                >
                  Compare Building Options
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm" aria-label="SIP project starting point">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
                Start with the project
              </p>
              <p className="mt-3 font-heading text-2xl font-bold">One coordinated feasibility conversation</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-white">Property</dt>
                  <dd className="mt-1 text-white/70">Location, use, site conditions, access, and utilities</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Building</dt>
                  <dd className="mt-1 text-white/70">Space needs, plans, system, finishes, and building services</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Project path</dt>
                  <dd className="mt-1 text-white/70">Design, engineering, permitting, scope, and construction</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="eyebrow">The short answer</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                What is a structural insulated panel building?
              </h2>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-soft md:p-9">
              <p className="text-lg leading-8 text-text-secondary">
                <strong className="text-navy">Structural insulated panels, or SIPs, are factory-made building panels with an insulating core bonded between two structural facings.</strong>{" "}
                Seacoast and Safe Room Designs are using that panelized approach as the starting point for site-specific building conversations in Southwest Florida. The exact assembly, engineering, documentation, and permitted use are confirmed for each project.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
                <a
                  href="https://www.sips.org/what-are-sips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:underline"
                >
                  SIP definition from SIPA <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:underline"
                >
                  Visit Safe Room Designs <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <p className="eyebrow">Project types</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            More freedom than a container footprint, with a defined project path
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-text-secondary">
            The right building starts with what the space must do. Seacoast reviews the use, property, design stage, and delivery fit before recommending a construction path.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectTypes.map((project) => (
              <article key={project.title} className="rounded-2xl bg-white p-7 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-navy">{project.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{project.body}</p>
                <p className="mt-5 border-t border-navy/10 pt-4 text-sm leading-6 text-text-secondary">
                  <strong className="text-navy">Often worth discussing for:</strong> {project.fit}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">How the system becomes a building</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                A panel is one part of a complete project.
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                Panelized construction can move enclosure work into a more planned process. It still depends on a coordinated structure, openings, building services, site work, and project-specific design.
              </p>

              <figure className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
                <div
                  className="grid min-h-40 grid-cols-[0.32fr_1fr_0.32fr] gap-2"
                  role="img"
                  aria-label="Conceptual cross-section of a generic structural insulated panel with an insulating core between two structural facings"
                >
                  <div className="flex items-center justify-center rounded-lg border border-white/25 bg-white/15 p-2">
                    <span className="-rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-white/80">
                      Facing
                    </span>
                  </div>
                  <div className="flex items-center justify-center rounded-lg border border-orange/40 bg-orange/15 p-4 text-center">
                    <span className="font-heading text-lg font-bold text-white">Insulating core</span>
                  </div>
                  <div className="flex items-center justify-center rounded-lg border border-white/25 bg-white/15 p-2">
                    <span className="rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-white/80">
                      Facing
                    </span>
                  </div>
                </div>
                <figcaption className="mt-4 text-xs leading-5 text-white/60">
                  Generic SIP anatomy, shown for explanation only. Project documents define the selected system, components, frame, connections, and interfaces.
                </figcaption>
              </figure>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2">
              {systemParts.map((part) => (
                <li key={part.number} className="rounded-2xl bg-white p-6 shadow-soft">
                  <p className="font-heading text-3xl font-bold text-orange">{part.number}</p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-navy">{part.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{part.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <p className="eyebrow">Working together</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Clear roles turn a building concept into a workable project.
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-text-secondary">
            The exact responsibility split depends on the selected system and contract. This is the working framework; the written scope identifies who is responsible for each deliverable on the actual project.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectRoles.map((role) => (
              <article key={role.name} className="rounded-2xl bg-white p-7 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange">{role.label}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy">{role.name}</h3>
                <p className="mt-4 text-sm leading-6 text-text-secondary">{role.body}</p>
              </article>
            ))}
          </div>
          <aside className="mt-6 rounded-2xl border border-orange/35 bg-orange/10 p-6" aria-label="Project responsibility note">
            <p className="font-heading text-lg font-bold text-navy">The proposal is the responsibility map.</p>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Before work begins, it should identify design, engineering, system supply, transportation, site work, utilities, installation, permitting, inspections, warranties, owner-provided items, and exclusions.
            </p>
          </aside>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">From idea to construction</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Make the important decisions in the order they become knowable.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {projectSteps.map((item) => (
              <li key={item.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-heading text-3xl font-bold text-orange">{item.step}</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
            <div>
              <p className="eyebrow">Florida project context</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                The site and complete building determine the permit path.
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                Seacoast begins with the property, use, and available documents. The responsible project team then develops and reviews the exact design and system information through engineering and permitting.
              </p>
              <Link
                href="/understanding-floridas-building-codes"
                className="mt-6 inline-flex font-bold text-orange hover:underline"
              >
                Read Seacoast&apos;s Florida code planning guide →
              </Link>
            </div>
            <div className="grid gap-5">
              {floridaReviewItems.map((group) => (
                <article key={group.title} className="rounded-2xl bg-white p-6 shadow-soft">
                  <h3 className="font-heading text-xl font-bold text-navy">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-text-secondary">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
            <p className="font-heading text-xl font-bold text-navy">A product description is not a permit decision.</p>
            <p className="mt-3 max-w-4xl leading-7 text-text-secondary">
              The exact assembly, performance criteria, evaluation or product documentation, design limitations, and official acceptance are addressed for the real property and building. Project plans, written approvals, issued permits, and completed inspections control over general website language.
            </p>
            <a
              href="https://www.floridabuilding.org/c/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex font-bold text-orange hover:underline"
            >
              Visit Florida Building Code Online <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Compare the building paths</p>
              <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
                Choose around the outcome, not a construction buzzword.
              </h2>
              <p className="mt-4 max-w-4xl leading-7 text-text-secondary">
                No system is the automatic answer for every property. These starting points help frame a more useful first conversation.
              </p>
            </div>
            <Link
              href="/custom-buildings"
              className="inline-flex shrink-0 rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper"
            >
              Use the Custom Buildings Guide
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {buildingOptions.map((option) => (
              <article key={option.title} className="rounded-2xl bg-white p-7 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-navy">{option.title}</h3>
                <dl className="mt-5 space-y-4 text-sm leading-6">
                  <div>
                    <dt className="font-bold text-navy">Often fits</dt>
                    <dd className="mt-1 text-text-secondary">{option.fit}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-navy">Questions to resolve</dt>
                    <dd className="mt-1 text-text-secondary">{option.questions}</dd>
                  </div>
                </dl>
                {option.href === pagePath ? (
                  <p className="mt-5 text-sm font-bold text-orange" aria-current="page">
                    {option.linkLabel}
                  </p>
                ) : (
                  <Link href={option.href} className="mt-5 inline-flex font-bold text-orange hover:underline">
                    {option.linkLabel} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <p className="eyebrow">Clear evidence boundaries</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Know what this page establishes and what the project must confirm.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-7 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange">At the first conversation</p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-navy">Define the opportunity.</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
                {[
                  "The property, intended use, approximate size, and project stage",
                  "Whether panelized construction appears worth evaluating against other paths",
                  "The information and professional input needed for the next decision",
                  "The preliminary Seacoast and Safe Room Designs collaboration path",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-orange/35 bg-orange/10 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange">During design and permitting</p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-navy">Confirm the buildable project.</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
                {[
                  "The exact assembly, components, suppliers, installation details, and limitations",
                  "Site-specific architecture, engineering, performance criteria, and permit documents",
                  "Applicable evaluations, supporting reports, official review, and inspection path",
                  "Final roles, scope, price, schedule, logistics, exclusions, and warranties",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="eyebrow">SIP building FAQ</p>
            <h2 className="mb-8 mt-2 font-heading text-4xl font-bold text-navy">
              Questions to ask before choosing the system
            </h2>
            <FAQAccordion items={faqs} />
          </div>
          <aside className="h-fit rounded-2xl bg-white p-7 shadow-soft lg:sticky lg:top-28">
            <p className="eyebrow">Useful for the first review</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy">Bring what you already know.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
              {[
                "Property address or target Southwest Florida area",
                "Intended use, approximate square footage, and room needs",
                "Survey, plans, sketches, inspiration, or site photos",
                "Utility, flood, access, HOA, or jurisdiction information you have",
                "Desired timing, project stage, and broad budget context",
                "The decision you want the first conversation to help make",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact?service=structural-insulated-panel-buildings"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper"
            >
              Discuss a SIP Project
            </Link>
          </aside>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Have a SIP home or building in mind?"
        subtext="Share the property, intended use, approximate size, project stage, and any plans you have. Seacoast will help you compare the path and identify the practical next step."
        buttonLabel="Discuss a SIP Project"
        buttonHref="/contact?service=structural-insulated-panel-buildings"
      />
    </>
  );
}
