import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CapitalPartnerForm } from "@/components/CapitalPartnerForm";
import { SchemaScript, serviceSchema, faqSchema, personSchema } from "@/components/Schema";
import { projects } from "@/data/projects";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Southwest Florida Housing Development Project Review"),
  description:
    "Request a project review for Florida build-to-rent, new housing, substantial rehabilitation, adaptive reuse, affordable, multifamily, and active-adult work.",
};

const finalActUrl = "https://www.govinfo.gov/content/pkg/BILLS-119hr6644enr/html/BILLS-119hr6644enr.htm";
const enactmentSourceUrl = "https://www.banking.senate.gov/newsroom/minority/warren-statement-on-bipartisan-housing-bill-becoming-law-without-trump-signature";

const projectTypes = [
  {
    eyebrow: "New housing",
    title: "Build-to-rent and for-sale communities",
    body: "Bring Seacoast a proposed site, plans, product mix, and delivery goals for a ground-up single-family or build-to-rent opportunity. The team will review construction fit before making a commitment.",
    points: [
      "Ground-up single-family, build-to-rent, and for-sale scope review",
      "Early budget and schedule discussion based on available information",
      "Capacity and delivery approach confirmed for the specific project",
    ],
  },
  {
    eyebrow: "Existing homes",
    title: "Substantial rehabilitation and renovate-to-rent",
    body: "For an existing-home program, Seacoast can review observed conditions, code-related construction scope, phasing, budget inputs, and schedule. The capital partner and its counsel remain responsible for determining whether a transaction meets the Act's renovate-to-rent exception.",
    points: [
      "Property-condition and rehabilitation-scope review",
      "Construction planning around occupied or phased work",
      "Documentation needed to support project-specific diligence",
    ],
  },
  {
    eyebrow: "Community housing",
    title: "Affordable, multifamily, and active-adult housing",
    body: "Seacoast welcomes conversations about new construction and renovation for affordable, multifamily, 55+, and active-adult properties. Program, funding, accessibility, and operating requirements should be identified at the start of the review.",
    points: [
      "New construction and renovation scope review",
      "Coordination with owner-selected design and engineering teams",
      "Project requirements confirmed before pricing and scheduling",
    ],
  },
  {
    eyebrow: "Existing buildings",
    title: "Adaptive reuse and residential conversions",
    body: "For a proposed conversion, Seacoast can help evaluate the construction path with the owner's architect, engineers, code professionals, and legal team. Feasibility depends on the building, intended use, zoning, code, utilities, and permitting.",
    points: [
      "Existing-building and intended-use review",
      "Early constructability, phasing, and systems coordination",
      "Scope developed around site-specific professional findings",
    ],
  },
];

const trackRecord = [
  { metric: "CGC1509237", label: "Florida Certified General Contractor" },
  { metric: "CCC1332648", label: "Florida Certified Roofing Contractor" },
  { metric: "6", label: "Florida Gulf Coast counties served" },
  { metric: String(projects.length), label: "Project examples online" },
];

const reportedExperience = [
  {
    category: "Residential work",
    metric: "413 homes",
    value: "$63,566,688",
    label: "in reported project value",
  },
  {
    category: "Community and commercial work",
    metric: "56",
    value: "$48,442,320",
    label: "in reported project value across condo and townhome communities, HOA organizations, and commercial structures",
  },
];

const submarkets = [
  {
    name: "Fort Myers & Cape Coral",
    body: "Lee County includes both infill and community-scale opportunities. Demand, land conditions, permitting, and product fit should be evaluated by submarket.",
  },
  {
    name: "Naples & Collier County",
    body: "Collier County serves retirement, seasonal, and year-round residents, with land and construction constraints that require careful project underwriting.",
  },
  {
    name: "North Port-Sarasota-Bradenton",
    body: "Sarasota and Manatee counties offer a mix of infill and larger residential opportunities along the I-75 corridor.",
  },
  {
    name: "Other Florida markets",
    body: "For work outside Southwest Florida, confirm project location, scope, team availability, and delivery capacity with Seacoast before underwriting the relationship.",
  },
];

const whySeacoast = [
  {
    heading: "Florida contractor credentials",
    body: "Seacoast lists Florida Certified General Contractor license CGC1509237 and Certified Roofing Contractor license CCC1332648.",
  },
  {
    heading: "Project examples you can review",
    body: "The public portfolio includes photos and videos from roofing, exterior, and community projects. Relevant references and scope details can be discussed during diligence.",
  },
  {
    heading: "Opportunity-specific capacity",
    body: "Team availability, geographic reach, schedule, and delivery structure are confirmed for each opportunity before Seacoast makes a commitment.",
  },
  {
    heading: "Concrete diligence conversations",
    body: "Start with the property, plans, scope, schedule, reporting expectations, and documentation your team needs to evaluate fit.",
  },
];

const faqs = [
  {
    question: "What is the 21st Century ROAD to Housing Act?",
    answer:
      "H.R. 6644, the 21st Century ROAD to Housing Act, became law on July 11, 2026, without the President's signature. Section 1001 generally restricts certain future single-family-home purchases by defined large institutional investors, subject to multiple exceptions. The purchase restriction and penalty provisions begin January 7, 2027. See our sourced overview and consult legal counsel for a specific transaction.",
  },
  {
    question: "What project types can Seacoast review?",
    answer:
      "Seacoast can review potential build-to-rent and for-sale housing, substantial rehabilitation and renovate-to-rent work, affordable and multifamily housing, active-adult and 55+ communities, and adaptive-reuse or conversion projects. Share the site, plans, scope, unit count, schedule, and delivery expectations so the team can confirm whether the project is a fit.",
  },
  {
    question: "Does a project type automatically qualify for a ROAD Act exception?",
    answer:
      "No. A construction category or form selection does not establish legal eligibility. Section 1001 has specific definitions, thresholds, conditions, and exceptions. The investor and its legal counsel should determine whether a proposed transaction qualifies; Seacoast can evaluate construction scope and project fit.",
  },
  {
    question: "What should we send for an initial project review?",
    answer:
      "Start with the address or target market, project type, approximate homes or units, current stage, target start, available plans or reports, and the decision you need to make. Seacoast will review the information and identify practical next steps or additional diligence needed.",
  },
  {
    question: "Why partner with Seacoast specifically?",
    answer:
      "Seacoast reports project experience across 413 homes representing $63,566,688 in project value, plus 56 condominium and townhome communities, HOA organizations, and commercial structures representing $48,442,320 in project value. Seacoast also brings Florida general-contractor and roofing-contractor credentials. Project-specific capacity, references, insurance, bonding, delivery structure, and warranty terms should be reviewed during diligence.",
  },
  {
    question: "What markets does Seacoast build in?",
    answer:
      "Seacoast currently serves six counties along Florida's Gulf Coast. For projects elsewhere in Florida, share the location and scope so the team can confirm licensing, availability, and operational fit.",
  },
  {
    question: "What kinds of capital partners do you work with?",
    answer:
      "Seacoast welcomes inquiries from developers and owners, build-to-rent and single-family rental operators, affordable and multifamily housing teams, active-adult and senior-housing teams, public or nonprofit housing organizations, family offices, and other capital partners planning residential construction or rehabilitation. Each opportunity is reviewed individually.",
  },
];

export default function CapitalPartnersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Housing Development and Rehabilitation Project Review",
            description:
              "Construction project review for build-to-rent, new housing, substantial rehabilitation, adaptive reuse, affordable, multifamily, and active-adult opportunities in Florida.",
            url: "/capital-partners",
            serviceType: "Residential Development, Rehabilitation, and Adaptive Reuse Project Review",
            areaServed: [
              "Hillsborough County, FL",
              "Manatee County, FL",
              "Sarasota County, FL",
              "Charlotte County, FL",
              "Lee County, FL",
              "Collier County, FL",
            ],
          }),
          faqSchema(faqs),
          personSchema(),
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white md:py-28">
        <Image
          src="/images/capital-partners-btr-community-swfl.webp"
          alt="Aerial view illustrating a single-family residential community in Florida"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" aria-hidden />
        <div className="container relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Capital Partners" }]} />
          <p className="eyebrow text-orange/80">For developers, owners, and capital partners</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
            Bring us the site, plans, and project goals
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Seacoast reviews potential new housing, build-to-rent, substantial rehabilitation, adaptive reuse, affordable, multifamily, and active-adult work. Start with an address or target market, approximate unit count, current plans, and schedule so the team can evaluate construction fit and next steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#inquire" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Request a Project Review</Link>
            <Link href="#project-types" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See Project Types</Link>
          </div>
        </div>
      </section>

      {/* The opportunity */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="eyebrow">H.R. 6644 is now law</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Plan from the enacted text, not the old bill headlines</h2>
            <p className="mt-4 text-text-secondary">
              H.R. 6644, the 21st Century ROAD to Housing Act, became law on July 11, 2026, without the President&apos;s signature. Section 1001 generally restricts future purchases of covered one- or two-unit homes by defined large institutional investors—generally certain for-profit entities with direct or indirect investment control of at least 350 covered homes. Manufactured homes and specified post-enactment excepted purchases are excluded under the statute. The purchase restriction and penalty provisions begin January 7, 2027.
            </p>
            <p className="mt-4 text-text-secondary">
              Project type alone does not establish an exception. Eligibility depends on the investor, ownership and transaction structure, property, program details, statutory conditions, and any applicable implementing regulations or guidance. Investors should review the enacted text and consult legal counsel before relying on an exception.
            </p>
            <p className="mt-4 text-sm text-text-secondary/80">
              <Link href="/road-to-housing-act" className="font-semibold text-orange hover:underline">
                Read our sourced overview of Section 1001.
              </Link>
              {" "}This summary is general information, not legal advice.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="font-heading text-xl font-bold text-navy">Examples Section 1001 treats as excepted purchases</p>
            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Certain newly constructed, renovated, or rental-conversion homes for sale by the investor and not rented as residences pending sale</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Qualifying build-to-rent programs</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Qualifying renovate-to-rent programs that meet the Act&apos;s rehabilitation and improvement thresholds</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Certain qualifying homeownership programs and 55+ communities</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href={finalActUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">Read the final enrolled text →</a>
              <a href={enactmentSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">Official enactment notice →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Project types */}
      <section id="project-types" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container">
          <p className="eyebrow">Project types</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">What would you like Seacoast to review?</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            These are construction categories, not legal classifications under H.R. 6644. Seacoast will confirm whether the scope, location, schedule, and current capacity are a fit; the capital partner and its counsel should determine statutory eligibility.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectTypes.map((o) => (
              <div key={o.title} className="flex flex-col rounded-2xl bg-white p-7 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">{o.eyebrow}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy">{o.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{o.body}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-text-secondary">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-navy/10 bg-white p-7 shadow-soft md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="font-heading text-2xl font-bold text-navy">Have a site or building in mind?</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">Send the address, project type, approximate homes or units, current plans, stage, and target start. Seacoast will review what you have and identify the next construction questions.</p>
            </div>
            <Link href="#inquire" className="mt-5 inline-flex shrink-0 rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper md:mt-0">Request a Project Review</Link>
          </div>
        </div>
      </section>

      {/* Track record / underwriting proof */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow text-orange">Experience reported by Seacoast</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">Project experience across homes, communities, and commercial properties</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            These figures were supplied by the company. Supporting project records and relevant references can be reviewed with a capital partner during diligence.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {reportedExperience.map((item) => (
              <div key={item.category} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">{item.category}</p>
                <p className="mt-4 font-heading text-4xl font-bold text-white">{item.metric}</p>
                <p className="mt-5 font-heading text-2xl font-bold text-orange">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-12 font-heading text-2xl font-bold text-white">Credentials and public project information</h3>
          <p className="mt-3 max-w-2xl text-white/70">
            Seacoast can also provide contractor-license information, a proposed project team and schedule, and available insurance, bonding, and warranty documentation for the specific opportunity.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trackRecord.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="font-heading text-3xl font-bold text-orange">{item.metric}</p>
                <p className="mt-2 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-lg font-bold text-white">How we engage</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Project structure and pricing approach defined for the specific opportunity</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Schedule, reporting, and draw requirements agreed before work begins</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Insurance and bonding documentation provided when applicable and available</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Warranty terms documented in the project contract</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-lg font-bold text-white">Project information</p>
              <p className="mt-3 text-sm text-white/75">
                Tell us what your team needs for an initial builder review. We will provide the information available for the opportunity and identify any items that require further diligence.
              </p>
              <Link href="#inquire" className="mt-5 inline-block rounded-full bg-orange-deep px-5 py-2.5 text-sm font-bold text-white hover:bg-copper">
                Request Project Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project-specific diligence */}
      <section className="section dark-band bg-navy-deep">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Project-specific diligence</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Confirm legal eligibility and construction fit separately</h2>
            <p className="mt-4 text-text-secondary">
              Seacoast can discuss construction scope, schedule, site conditions, and delivery capacity. A Seacoast project review is not a determination that a transaction qualifies for an exception under H.R. 6644. Each capital partner remains responsible for confirming that its investor status, ownership, transaction structure, property, and program comply with applicable law.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="font-heading text-xl font-bold text-navy">Bring the right team to the table</p>
            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Legal counsel for ownership and transaction questions</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Design and engineering teams for plans and specifications</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Capital and owner teams for underwriting requirements</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Seacoast for construction-scope and delivery review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Target submarkets */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Target markets</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Markets we can discuss with your team</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Each market and site needs its own demand, land, entitlement, infrastructure, insurance, and construction review. These are Florida Gulf Coast markets Seacoast is prepared to evaluate; project-specific experience, references, and capacity are confirmed during diligence.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {submarkets.map((m) => (
              <div key={m.name} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-heading text-lg font-bold text-navy">{m.name}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Seacoast */}
      <section className="section dark-band bg-navy-deep text-white">
        <div className="container">
          <p className="eyebrow text-orange">Why Seacoast</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">A clearer builder-diligence conversation</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            We make the early conversation concrete: location, scope, schedule, reporting expectations, available capacity, and the information your team needs to evaluate fit.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whySeacoast.map((item) => (
              <div key={item.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-heading text-xl font-bold text-orange">{item.heading}</p>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60">Current operating capacity is confirmed for each opportunity.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What capital partners ask first.</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">{f.question}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquire" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="eyebrow text-orange/80">Get in touch</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Request a project review</h2>
            <p className="mt-4 text-text-secondary">
              Share the property or target market, project type, approximate homes or units, current stage, available plans, and target start. Seacoast will review the opportunity and explain what can be confirmed now and what requires further diligence.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="eyebrow">Phone</p>
                <a href="tel:+19415005431" className="mt-1 block font-heading text-2xl font-bold text-navy hover:text-orange">(941) 500-5431</a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a href="mailto:sales@seacoastbd.com" className="mt-1 block font-heading text-xl font-bold text-navy hover:text-orange">sales@seacoastbd.com</a>
              </div>
            </div>
          </div>
          <CapitalPartnerForm />
        </div>
      </section>
    </>
  );
}
