import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import {
  SchemaScript,
  faqSchema,
  imageLicenseMetadata,
  serviceSchema,
} from "@/components/Schema";
import { seoDescription, seoTitle } from "@/lib/seo";

const canonicalPath = "/custom-buildings/modular-retail-showrooms";
const pageUrl = `https://seacoastbd.com${canonicalPath}`;
const partnerUrl = "https://saferoomdesigns.com/";
const primaryImagePath =
  "/images/custom-buildings/modular-retail/modular-retail-showroom-exterior.webp";
const secondaryImagePath =
  "/images/custom-buildings/modular-retail/modular-retail-showroom-interior.webp";
const pageTitle = "Modular Retail Showrooms in Southwest Florida";
const pageDescription = seoDescription(
  "Explore modular retail showroom concepts with Seacoast, including branded display space, operational access, and a property-specific Florida approval path.",
);

export const metadata: Metadata = {
  title: seoTitle(pageTitle),
  description: pageDescription,
  alternates: { canonical: canonicalPath },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Modular Retail Showrooms for Southwest Florida",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
    images: [
      {
        url: "/images/custom-buildings/modular-retail/modular-retail-showroom-og.jpg",
        width: 1200,
        height: 630,
        alt: "Concept rendering of a glass-front modular golf-cart showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Retail Showrooms for Southwest Florida",
    description: pageDescription,
    images: ["/images/custom-buildings/modular-retail/modular-retail-showroom-og.jpg"],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Custom Buildings", href: "/custom-buildings" },
  { label: "Modular Retail Showrooms" },
];

const conceptFacts = [
  {
    value: "About 818 sq. ft.",
    label: "Partner concept area",
    detail: "The South Beach study illustrates a 37-foot-9-inch by 21-foot-8-inch showroom concept.",
  },
  {
    value: "Display-first frontage",
    label: "Customer-facing layout",
    detail: "A glazed facade keeps merchandise visible while a dedicated entrance organizes customer circulation.",
  },
  {
    value: "Separate rear access",
    label: "Inventory movement",
    detail: "The concept separates the presentation side from a rear roll-up opening and personnel access.",
  },
] as const;

const businessReasons = [
  {
    title: "Open a purpose-built customer space",
    body: "Plan the glazing, signage, lighting, displays, storage, doors, and finishes around the brand instead of accepting a temporary-office look.",
  },
  {
    title: "Coordinate off-site and site work",
    body: "Depending on the design and approval path, module production may overlap with site preparation, utility planning, and other property work. The actual schedule is confirmed project by project.",
  },
  {
    title: "Create a repeatable format",
    body: "A documented prototype can give multi-location operators a consistent starting point for facade, merchandising, security, equipment, and utility planning.",
  },
  {
    title: "Preserve future flexibility",
    body: "A transportable structure may be evaluated for later relocation or redeployment to a compatible, properly permitted site rather than being treated only as a permanent tenant improvement.",
  },
] as const;

const capabilityItems = [
  {
    number: "01",
    title: "Openings matched to the building path",
    body: "For an ISO container-conversion path, partner-supported fabrication can include laser-cut door, window, storefront, service, and larger opening concepts. Applicability to a purpose-built module must be confirmed in the written project scope. Every path requires documented framing, reinforcement, weather detailing, and structural design.",
  },
  {
    number: "02",
    title: "Modular interior wall options",
    body: "Review the exact board, insulation, surface, joint, attachment, and finish system for the intended use. Cleaning methods, moisture exposure, durability, and maintenance should be confirmed from the selected product documentation.",
  },
  {
    number: "03",
    title: "Specialized-use planning",
    body: "Food, lithium-battery, hazardous-material, service, and equipment uses require more than a general wall description. Occupancy, fire protection, ventilation, sanitation, spill control, electrical classification, egress, and local approvals must be addressed for the project.",
  },
] as const;

const projectSteps = [
  {
    step: "01",
    title: "Define the retail operation",
    body: "Share the products, customer flow, inventory movement, staffing, displays, equipment, storage, security, accessibility, utilities, and brand requirements.",
  },
  {
    step: "02",
    title: "Review the property and module path",
    body: "Confirm site control, zoning, parking, access, stormwater, flood conditions, fire access, utilities, delivery route, lifting area, foundation, and whether the design uses a purpose-built module or another steel-shell approach.",
  },
  {
    step: "03",
    title: "Develop the controlling documents",
    body: "The project team defines architecture, structure, envelope, glazing, openings, building services, accessibility, signage, site work, product information, and design responsibilities.",
  },
  {
    step: "04",
    title: "Permit, build, deliver, and commission",
    body: "Pricing and schedule follow the approved scope. Fabrication, site work, transport, setting, connections, inspections, closeout, and any future relocation responsibilities are confirmed in writing.",
  },
] as const;

const faqs: FAQItem[] = [
  {
    question: "Is the South Beach showroom a shipping-container conversion?",
    answer:
      "The supplied concept depicts a purpose-built transportable steel modular showroom and does not establish that the structure is an ISO shipping-container conversion. A project may use a purpose-built module or another steel-shell approach, but the exact structural and wall systems must be confirmed before design, pricing, or permitting.",
  },
  {
    question: "Is a modular retail showroom the same as a SIP building?",
    answer:
      "No. A standalone SIP building begins with a panelized wall and roof system planned around the complete building design. The partner-supplied showroom concept is a transportable steel modular structure. A selected project may use insulated panels or modular wall components, but those details must be identified in the project documents.",
  },
  {
    question: "Can a modular showroom be moved anywhere?",
    answer:
      "No building is automatically mobile anywhere. Potential relocation depends on the module, structural evaluation, transport route, lifting plan, new-site zoning and permits, foundation or tie-downs, utilities, accessibility, inspections, and local approval.",
  },
  {
    question: "Does modular construction eliminate zoning or building permits?",
    answer:
      "No. A modular delivery method can change where and when construction work occurs, but it does not remove zoning, site-plan, accessibility, fire, structural, electrical, mechanical, plumbing, signage, occupancy, or inspection requirements.",
  },
  {
    question: "Can the interior be designed for batteries, food, or hazardous materials?",
    answer:
      "Those uses can be discussed, but no generic board or wall-system description establishes that a building is approved for them. The exact materials, listed assemblies, ventilation, fire protection, sanitation, chemical compatibility, spill control, electrical requirements, occupancy, and authority review must be confirmed for the intended operation.",
  },
  {
    question: "How quickly can a modular retail showroom open?",
    answer:
      "Off-site work may be able to proceed while some site and approval work advances, but there is no universal timeline. Design completion, permitting, module availability, site readiness, utilities, transportation, inspections, and commissioning determine the actual opening date.",
  },
];

const showroomServiceSchema = {
  ...serviceSchema({
    name: "Modular Retail Showroom Planning and Construction",
    description: pageDescription,
    url: canonicalPath,
    serviceType: "Modular commercial showroom planning and construction",
  }),
  "@id": `${pageUrl}#service`,
};

const showroomPageSchema = {
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
  primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
  mentions: {
    "@type": "Organization",
    name: "Safe Room Designs",
    url: partnerUrl,
  },
};

const primaryImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${pageUrl}#primaryimage`,
  contentUrl: `https://seacoastbd.com${primaryImagePath}`,
  url: `https://seacoastbd.com${primaryImagePath}`,
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
  representativeOfPage: true,
};

export default function ModularRetailShowroomsPage() {
  return (
    <>
      <SchemaScript
        schema={[
          showroomPageSchema,
          showroomServiceSchema,
          primaryImageSchema,
          faqSchema(faqs),
        ]}
      />

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbs} />
            <p className="eyebrow mt-4">Commercial modular concepts</p>
            <h1 className="mt-2 max-w-4xl font-heading text-5xl font-bold leading-tight md:text-6xl">
              Modular retail showrooms designed around the brand and the site.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Seacoast can evaluate purpose-built, transportable retail and display spaces with Safe Room
              Designs. Start with the customer experience, inventory flow, property, and approval path, then
              define the exact steel module, openings, wall system, utilities, finishes, and project scope.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?service=modular-retail-showrooms"
                className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper"
              >
                Discuss a Showroom Project
              </Link>
              <Link
                href="/custom-buildings"
                className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy"
              >
                Compare Building Paths
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl border border-white/15 bg-navy-surface shadow-2xl">
            <div className="relative aspect-video">
              <Image
                src={primaryImagePath}
                alt="Concept rendering of a black glass-front modular showroom displaying golf carts"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-white/65">
              South Beach modular retail showroom concept supplied by Safe Room Designs. This is a concept
              rendering, not a completed Seacoast project or a fixed product specification.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep" aria-labelledby="concept-heading">
        <div className="container max-w-6xl">
          <p className="eyebrow">A concrete starting point</p>
          <h2 id="concept-heading" className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            What the South Beach concept is meant to demonstrate
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            The partner study shows how a compact commercial module could combine a high-visibility retail
            facade with practical inventory access. These dimensions and features describe the concept shown;
            they are not universal specifications for every showroom.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {conceptFacts.map((fact) => (
              <article key={fact.label} className="rounded-3xl border border-white/10 bg-navy-surface p-7">
                <p className="font-heading text-2xl font-bold text-white">{fact.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-orange">{fact.label}</p>
                <p className="mt-4 text-sm leading-6 text-white/70">{fact.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy" aria-labelledby="business-case-heading">
        <div className="container grid max-w-6xl gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div>
            <p className="eyebrow">Why operators explore modular retail</p>
            <h2 id="business-case-heading" className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy">
              Treat the showroom as an operating asset, not just a shell.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
              Golf-cart dealers are one example. The same planning logic may fit product showrooms, branded
              retail, demonstration centers, resort or community sales, and other uses that benefit from a
              compact, visible, repeatable customer space.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {businessReasons.map((reason) => (
                <article key={reason.title} className="rounded-2xl border border-white/10 bg-navy-surface p-6">
                  <h3 className="font-heading text-xl font-bold text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{reason.body}</p>
                </article>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-navy-surface shadow-soft">
            <div className="relative aspect-[4/3]">
              <Image
                src={secondaryImagePath}
                alt="Concept rendering of an illuminated glass-front modular retail interior with display shelving"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-white/65">
              Partner-supplied retail concept rendering. Final glazing, lighting, fixtures, accessibility, and
              building systems are defined for the actual project.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep" aria-labelledby="capabilities-heading">
        <div className="container max-w-6xl">
          <p className="eyebrow">Capabilities to evaluate</p>
          <h2 id="capabilities-heading" className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Openings, interior walls, and specialized uses need one coordinated design.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            The new partner information expands the conversation beyond basic container finish work. It also
            makes the exact assembly and intended use more important, because a large cutout or specialized
            occupancy can change the structural, enclosure, fire, ventilation, and approval requirements.
          </p>
          <ol className="mt-10 grid gap-6 lg:grid-cols-3">
            {capabilityItems.map((item) => (
              <li key={item.number} className="rounded-3xl border border-white/10 bg-navy-surface p-7">
                <span className="font-heading text-sm font-bold tracking-[0.18em] text-orange" aria-hidden="true">
                  {item.number}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.body}</p>
              </li>
            ))}
          </ol>
          <aside className="mt-8 rounded-3xl border border-orange/35 bg-orange/10 p-7 md:p-8" aria-labelledby="system-distinction-heading">
            <p className="eyebrow">System distinction</p>
            <h3 id="system-distinction-heading" className="mt-2 font-heading text-2xl font-bold text-white">
              The showroom concept, a shipping-container build, and a standalone SIP building are not
              interchangeable labels.
            </h3>
            <p className="mt-4 max-w-4xl leading-7 text-white/75">
              The South Beach concept depicts a purpose-built steel module. Safe Room Designs also supports
              container fabrication and separate modular wall-system discussions. Seacoast will identify the
              proposed structural and enclosure systems in the project documents instead of assuming that one
              concept establishes the construction method or performance of another.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
              <Link href="/containers" className="text-orange hover:underline">Explore container buildings →</Link>
              <Link href="/services/structural-insulated-panel-buildings" className="text-orange hover:underline">Explore SIP buildings →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section dark-band bg-navy" aria-labelledby="project-path-heading">
        <div className="container max-w-6xl">
          <p className="eyebrow">Southwest Florida project path</p>
          <h2 id="project-path-heading" className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            From retail concept to a permitted, operating location
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            Modular does not mean automatic. The best opportunity is identified by coordinating the business,
            module, property, and approval work from the beginning.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {projectSteps.map((item) => (
              <li key={item.step} className="grid grid-cols-[3rem_1fr] gap-5 rounded-3xl border border-white/10 bg-navy-surface p-7">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-deep font-heading text-sm font-bold text-white"
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep" aria-labelledby="faq-heading">
        <div className="container grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow">Modular showroom FAQ</p>
            <h2 id="faq-heading" className="mt-2 font-heading text-4xl font-bold text-navy">
              Questions to settle before choosing the system
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Clear answers begin with the intended operation and property. Preliminary renderings help define
              the goal; signed plans, specifications, approvals, and the written scope control the project.
            </p>
            <a
              href={partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-bold text-orange hover:underline"
            >
              Visit Safe Room Designs <span className="sr-only">(opens in a new tab)</span>&nbsp;↗
            </a>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Have a modular retail or showroom concept in mind?"
        subtext="Share the property, intended operation, approximate size, customer and inventory flow, equipment, utilities, and any plans or renderings. Seacoast will help identify the right review path."
        buttonLabel="Discuss the Showroom"
        buttonHref="/contact?service=modular-retail-showrooms"
      />
    </>
  );
}
