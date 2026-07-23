import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { SchemaScript, faqSchema, serviceSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

const pageUrl = "https://seacoastbd.com/commercial-roofing";
const gafProfileUrl =
  "https://www.gaf.com/en-us/roofing-contractors/commercial/seacoast-building-and-design-lehigh-acres-fl-1154417";
const gafGuaranteesUrl = "https://www.gaf.com/en-us/resources/warranties/commercial-guarantees";
const pageDescription =
  "Commercial roofing for Florida businesses, condos, HOAs, and multifamily properties from a verified GAF GoldElite Commercial Contractor.";

export const metadata: Metadata = {
  title: seoTitle("Commercial Roofing Contractor | GAF GoldElite"),
  description: pageDescription,
  alternates: { canonical: "/commercial-roofing" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Commercial Roofing for Florida Properties",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Seacoast Building & Design commercial roofing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Roofing for Florida Properties",
    description: pageDescription,
    images: ["/images/og-default.jpg"],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Commercial Roofing" },
];

const propertyTypes = [
  {
    title: "Commercial buildings",
    body: "Roof replacement, recover, repair, and coordinated exterior scopes for retail, restaurant, office, industrial, and other commercial properties.",
  },
  {
    title: "Condominium and HOA communities",
    body: "Board, property-management, access, phasing, documentation, and resident-communication needs considered as part of the project review.",
  },
  {
    title: "Multifamily properties",
    body: "Single-building and multi-building roofing opportunities reviewed around occupancy, sequencing, logistics, and the owner’s long-term plan.",
  },
  {
    title: "Larger Florida projects",
    body: "Seacoast can evaluate contracts of $100,000 or more throughout Florida, with travel, scope, schedule, and current capacity confirmed for each opportunity.",
  },
];

const coveragePoints = [
  {
    title: "Material-defect coverage",
    body: "Coverage for qualifying leaks caused by covered GAF roofing-material defects, subject to the issued guarantee.",
  },
  {
    title: "Workmanship coverage",
    body: "Coverage for qualifying leaks caused by covered application workmanship, within the terms of the issued guarantee.",
  },
  {
    title: "Materials and labor",
    body: "Replacement materials and labor can be included when they are required for a repair that the issued guarantee covers.",
  },
  {
    title: "No dollar limit on covered repairs",
    body: "The NDL structure does not place a dollar cap on repairs that are covered. It does not make every roof condition or expense eligible.",
  },
];

const reviewSteps = [
  {
    step: "01",
    title: "Share the property and roof information",
    body: "Start with the address, property type, approximate roof area, current concerns, available plans or reports, desired timing, and any owner or association requirements.",
  },
  {
    step: "02",
    title: "Review conditions and project goals",
    body: "Seacoast reviews access, roof and deck information, drainage, insulation, code and permitting needs, phasing, occupied-property constraints, and the outcome the owner needs.",
  },
  {
    step: "03",
    title: "Align the system and guarantee path",
    body: "The proposed assembly and guarantee objective are evaluated together. GAF requirements and the project-specific documents determine whether a Diamond Pledge™ option is available.",
  },
  {
    step: "04",
    title: "Confirm the written scope",
    body: "The proposal identifies the agreed system, work, assumptions, exclusions, schedule considerations, and available guarantee path before the project moves forward.",
  },
];

const projectExamples = [
  {
    title: "Cummins Court TPO flat roof",
    body: "Commercial TPO flat-roof installation and coordinated gutter work in Fort Myers.",
    href: "/our-work/cummins-court-tpo-flat-roof",
  },
  {
    title: "Gordon’s Fine Furniture TPO roof",
    body: "Commercial TPO roofing with ISO insulation board at a Fort Myers retail property.",
    href: "/our-work/gordons-fine-furniture-tpo",
  },
  {
    title: "Mel’s Diner PVC roof",
    body: "PVC roofing installation and flat-roof coating at a commercial restaurant property.",
    href: "/our-work/mels-diner-pvc-roof",
  },
  {
    title: "Avion Woods roof replacement",
    body: "Roof replacement and coordinated gutter work for a condominium community in Naples.",
    href: "/our-work/avion-woods-roof-replacement",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What is Seacoast’s verified GAF commercial credential?",
    answer:
      "GAF lists Seacoast Building & Design as a GAF GoldElite™ Commercial Contractor under Contractor ID 1154417. The official GAF profile lists asphaltic and single-ply commercial roofing capabilities.",
  },
  {
    question: "What commercial roofing systems can Seacoast review?",
    answer:
      "Seacoast’s official GAF profile lists asphaltic and single-ply capabilities. The appropriate roof assembly still depends on the building, deck, drainage, insulation, design pressures, exposure, code requirements, existing conditions, budget, and owner objectives.",
  },
  {
    question: "What is the Diamond Pledge™ NDL Roof Guarantee?",
    answer:
      "For qualifying GAF commercial roofing systems, Seacoast can offer the Diamond Pledge™ NDL Roof Guarantee for coverage terms up to 25 years. GAF describes qualifying coverage as including covered leaks caused by material defects and workmanship, replacement materials and labor, and no dollar limit on covered repairs. The GAF guarantee issued for the roof controls the actual coverage.",
  },
  {
    question: "Does every Seacoast commercial roof receive a 25-year Diamond Pledge™ guarantee?",
    answer:
      "No. A Diamond Pledge™ guarantee and a 25-year term are not automatic. Eligibility, term, system requirements, inspections, coverage, exclusions, and owner obligations are confirmed for the specific roof and governed by the guarantee GAF issues.",
  },
  {
    question: "What does NDL mean for a commercial roof guarantee?",
    answer:
      "NDL means no dollar limit on repairs that are covered under the issued guarantee. It does not mean unlimited coverage for every leak, roof condition, event, maintenance item, consequential loss, or building expense.",
  },
  {
    question: "How early should an owner or association involve Seacoast?",
    answer:
      "Bring Seacoast into the discussion while the property information, roof conditions, system options, budget, phasing, and guarantee objective can still be reviewed together. Seacoast’s current typical mobilization-planning window is one to three months, but the actual schedule is confirmed for each project.",
  },
  {
    question: "Can Seacoast review a commercial roofing project elsewhere in Florida?",
    answer:
      "Seacoast regularly serves Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties. Contracts of $100,000 or more can be evaluated elsewhere in Florida, with travel, scope, schedule, logistics, and current availability confirmed for the specific project.",
  },
];

export default function CommercialRoofingPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Commercial Roofing for Florida Properties",
            description: pageDescription,
            url: "/commercial-roofing",
            serviceType: "Commercial, Condominium, HOA, and Multifamily Roofing",
            areaServed: [
              "Hillsborough County, FL",
              "Manatee County, FL",
              "Sarasota County, FL",
              "Charlotte County, FL",
              "Lee County, FL",
              "Collier County, FL",
              "Florida",
            ],
          }),
          faqSchema(faqs),
        ]}
      />

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(225,90,43,0.22),transparent_34%)]"
          aria-hidden
        />
        <div className="container relative max-w-6xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="eyebrow text-orange/80">GAF GoldElite™ Commercial Contractor</p>
              <h1 className="mt-3 max-w-5xl font-heading text-4xl font-bold leading-tight md:text-6xl">
                Commercial roofing for properties with more at stake
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
                Seacoast helps commercial owners, condominium and HOA boards, property managers, and multifamily investors plan roofing around the building, the people who use it, and the long-term protection the owner needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?service=roofing"
                  className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper"
                >
                  Request a Commercial Roof Review
                </Link>
                <a
                  href={gafProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy"
                >
                  Verify Seacoast on GAF.com <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">Verified GAF profile</p>
              <p className="mt-3 font-heading text-2xl font-bold">Contractor ID 1154417</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-white">Commercial credential</dt>
                  <dd className="mt-1 text-white/70">GAF GoldElite™ Commercial Contractor</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Listed capabilities</dt>
                  <dd className="mt-1 text-white/70">Asphaltic and single-ply roofing</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">A credential you can check</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                Manufacturer recognition should be easy to verify.
              </h2>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-soft md:p-9">
              <p className="text-lg leading-8 text-text-secondary">
                GAF&apos;s official contractor directory identifies Seacoast Building &amp; Design as a{" "}
                <strong className="text-navy">GAF GoldElite™ Commercial Contractor</strong>. That profile gives property owners and decision-makers a direct, third-party place to confirm the credential, Contractor ID 1154417, and listed commercial roofing capabilities.
              </p>
              <a
                href={gafProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-bold text-orange hover:underline"
              >
                View Seacoast&apos;s official GAF profile <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <p className="eyebrow">Properties Seacoast can review</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Roofing planned around ownership, occupancy, and scale
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-text-secondary">
            The roof is only one part of a commercial project. Access, daily operations, resident or tenant communication, drainage, building conditions, permits, schedule, and documentation all affect the work.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {propertyTypes.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-7 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">For qualifying GAF systems</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                A Diamond Pledge™ guarantee path up to 25 years
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                For qualifying GAF commercial roofing systems, Seacoast can offer the Diamond Pledge™ NDL Roof Guarantee for coverage terms up to 25 years.
              </p>
              <a
                href={gafGuaranteesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex font-bold text-orange hover:underline"
              >
                Compare commercial guarantees on GAF.com <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div>
              <div className="grid gap-5 sm:grid-cols-2">
                {coveragePoints.map((item) => (
                  <article key={item.title} className="rounded-2xl bg-white p-6 shadow-soft">
                    <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
                  </article>
                ))}
              </div>
              <aside className="mt-6 rounded-2xl border border-orange/35 bg-orange/10 p-6" aria-label="Guarantee eligibility information">
                <p className="font-heading text-lg font-bold text-navy">Coverage is confirmed roof by roof.</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  A Diamond Pledge™ guarantee and a 25-year term are not automatic. Eligibility, term, system requirements, inspections, coverage, exclusions, and owner obligations are determined for the specific project and governed only by the GAF guarantee issued for that roof.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow">Asphaltic and single-ply capability</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                Start with the roof—not a one-size-fits-all product.
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                Seacoast&apos;s official GAF profile lists asphaltic and single-ply commercial roofing capabilities. The right assembly still depends on the roof and deck, drainage, insulation, design pressures, exposure, existing conditions, Florida code requirements, project budget, and the owner&apos;s guarantee objective.
              </p>
              <p className="mt-4 leading-7 text-text-secondary">
                Seacoast reviews those factors before presenting a project-specific system and written scope. Manufacturer and design requirements are confirmed through the applicable technical and project documents.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/services/roofing" className="font-bold text-orange hover:underline">
                  Explore all roofing services →
                </Link>
                <Link href="/capital-partners" className="font-bold text-orange hover:underline">
                  Visit Capital Partners →
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-soft">
              <p className="eyebrow">Useful for the first review</p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-navy">Bring what you already know.</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
                {[
                  "Property address, use, occupancy, and decision-makers",
                  "Approximate roof area, age, type, and known concerns",
                  "Photos, plans, reports, core cuts, or prior repair information",
                  "Drainage, insulation, rooftop equipment, and access concerns",
                  "Desired timing, budget range, phasing, and guarantee goal",
                  "Board, lender, insurer, consultant, or owner requirements",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">A clearer path to the proposal</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Bring the roofing contractor in before the decisions are locked.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviewSteps.map((item) => (
              <article key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="font-heading text-3xl font-bold text-orange">{item.step}</p>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <p className="eyebrow">Relevant Seacoast experience</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Review completed commercial and community roofing work
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-text-secondary">
            These examples show Seacoast&apos;s commercial and community roofing experience. For a new project, the proposed GAF system and Diamond Pledge™ eligibility are confirmed roof by roof.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectExamples.map((project) => (
              <article key={project.href} className="rounded-2xl bg-white p-7 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-navy">{project.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{project.body}</p>
                <Link href={project.href} className="mt-5 inline-flex font-bold text-orange hover:underline">
                  View this project →
                </Link>
              </article>
            ))}
          </div>
          <Link href="/our-work" className="mt-8 inline-flex font-bold text-orange hover:underline">
            Browse the full project portfolio →
          </Link>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Commercial roofing FAQ</p>
          <h2 className="mb-8 mt-2 font-heading text-4xl font-bold text-navy">
            Questions owners and boards often ask
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Ready to review your commercial roof?"
        subtext="Share the property address, roof information, project timing, and guarantee goals. Seacoast will help you identify the practical next step."
        buttonLabel="Request a Commercial Roof Review"
        buttonHref="/contact?service=roofing"
      />
    </>
  );
}
