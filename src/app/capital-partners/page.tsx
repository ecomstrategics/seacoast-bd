import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CapitalPartnerForm } from "@/components/CapitalPartnerForm";
import { SchemaScript, serviceSchema, faqSchema, personSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Florida Build-to-Rent & Major Rehab Project Review"),
  description:
    "Discuss Florida build-to-rent, major rehabilitation, and select addition projects with Seacoast. Statewide review is available for larger contracts.",
  alternates: { canonical: "/capital-partners" },
};

const finalActUrl = "https://www.govinfo.gov/content/pkg/BILLS-119hr6644enr/html/BILLS-119hr6644enr.htm";
const enactmentSourceUrl = "https://www.banking.senate.gov/newsroom/minority/warren-statement-on-bipartisan-housing-bill-becoming-law-without-trump-signature";

const projectTypes = [
  {
    eyebrow: "Primary focus",
    title: "Build-to-rent communities",
    body: "Bring Seacoast the site, plans, product mix, construction value, and delivery goals for a ground-up or phased build-to-rent opportunity.",
    href: "/build-to-rent-construction",
    linkLabel: "Explore build-to-rent construction",
    points: [
      "Ground-up and phased single-family rental construction",
      "Early budget and schedule discussion based on available information",
      "Capacity and delivery approach confirmed for the specific project",
    ],
  },
  {
    eyebrow: "Primary focus",
    title: "Major rehabilitation",
    body: "Seacoast can review coordinated rehabilitation for residential, commercial, condominium, HOA, and investor-owned properties, including occupied and phased work.",
    href: "/major-rehabilitation",
    linkLabel: "Explore major rehabilitation",
    points: [
      "Property-condition, structural, interior, and exterior scope review",
      "Construction planning around occupied or phased work",
      "Storm restoration and multi-trade rehabilitation experience",
    ],
  },
  {
    eyebrow: "Where applicable",
    title: "Additions and property expansion",
    body: "For an addition or expansion, Seacoast can review the existing structure, intended use, plans, site conditions, building systems, exterior tie-ins, and permitting path.",
    href: "/services/room-additions",
    linkLabel: "Explore room additions",
    points: [
      "Residential, commercial, and community-property additions",
      "Coordination with owner-selected design and engineering teams",
      "Roofing, exterior, structural, and systems work coordinated as one scope",
    ],
  },
];

const trackRecord = [
  { metric: "CGC1509237", label: "Florida Certified General Contractor" },
  { metric: "CCC1332648", label: "Florida Certified Roofing Contractor" },
  { metric: "$27M", label: "Bonding capability, subject to project and surety approval" },
  { metric: "$3M", label: "General insurance limit reported by Seacoast; project terms are confirmed separately" },
];

const projectFit = [
  {
    metric: "$20K+",
    title: "Typical best fit",
    body: "Projects with construction values around $20,000 or more are generally the best fit. Scope and logistics are still reviewed individually.",
  },
  {
    metric: "1–300",
    title: "Flexible project scale",
    body: "Construction scope and value matter more than unit count. Seacoast can evaluate one property through programs of roughly 300 units.",
  },
  {
    metric: "$100K+",
    title: "Statewide review",
    body: "The six listed Gulf Coast counties remain the regular service area. Contracts of $100,000 or more can be evaluated throughout Florida.",
  },
  {
    metric: "1–3 months",
    title: "Mobilization planning",
    body: "This is the current typical planning window. Investors should bring Seacoast in at least two months before the desired start when possible.",
  },
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

const highlightedProjects = [
  {
    title: "Cinnamon Cove community improvements",
    body: "Carport construction and repair, framed storage lockers with Hardie lap siding, plus coordinated roofing, soffit, fascia, gutters, stucco repairs, painting, and electrical work.",
    links: [
      { href: "/our-work/cinnamon-cove-carports-lockers", label: "Carports and lockers" },
      { href: "/our-work/cinnamon-cove-terrace-condos", label: "Terrace improvements" },
    ],
  },
  {
    title: "Nautical Bowls commercial buildout",
    body: "Florida's first Nautical Bowls location, completed through COVID-era shortages, shipping delays, 16 plan changes, and a full multi-trade commercial scope.",
    links: [
      { href: "/our-work/nautical-bowls-florida-commercial-buildout", label: "Read the case study" },
      { href: "/commercial-buildouts", label: "Explore commercial buildouts" },
    ],
  },
  {
    title: "Tara Golf Club rehabilitation",
    body: "Simultaneous work across three buildings during rainy-season conditions, including structural framing repairs, roofing, exterior work, and HVAC coordination.",
    links: [
      { href: "/our-work/tara-golf-club-multi-building-rehabilitation", label: "Read the case study" },
      { href: "/major-rehabilitation", label: "Explore major rehabilitation" },
    ],
  },
  {
    title: "Hurricane Ian storm-surge restoration",
    body: "Coordinated interior and exterior restoration for three private residences and the Coco Bay Amenities Center after storm-surge damage.",
    links: [
      { href: "/our-work/hurricane-ian-storm-surge-restoration", label: "Read the case study" },
      { href: "/major-rehabilitation", label: "Explore major rehabilitation" },
    ],
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
    body: "For contracts of $100,000 or more, Seacoast can evaluate opportunities throughout Florida. Travel, schedule, and operational fit are confirmed before commitment.",
  },
];

const whySeacoast = [
  {
    heading: "Florida contractor credentials",
    body: "Seacoast lists Florida Certified General Contractor license CGC1509237 and Certified Roofing Contractor license CCC1332648.",
  },
  {
    heading: "Owner-led review",
    body: "Capital Partner inquiries are assigned to Clear Dayland, Seacoast's owner, so the first conversation can address scope, capacity, schedule, and fit directly.",
  },
  {
    heading: "Current capacity for large and small work",
    body: "Seacoast is currently reviewing both large and small opportunities. Every start date is confirmed after scope, permitting, materials, and crew requirements are understood.",
  },
  {
    heading: "Documented project experience",
    body: "The public portfolio now includes commercial buildout, multi-building rehabilitation, storm-surge restoration, roofing, and community-improvement examples.",
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
      "Seacoast is currently prioritizing build-to-rent and major rehabilitation, with select additions where the property, plans, and scope are a fit. Major rehabilitation can include residential, commercial, condominium, HOA, and investor-owned properties.",
  },
  {
    question: "Does a project type automatically qualify for a ROAD Act exception?",
    answer:
      "No. A construction category or form selection does not establish legal eligibility. Section 1001 has specific definitions, thresholds, conditions, and exceptions. The investor and its legal counsel should determine whether a proposed transaction qualifies; Seacoast can evaluate construction scope and project fit.",
  },
  {
    question: "What should we send for an initial project review?",
    answer:
      "Start with the address or target market, project type, estimated construction value, current stage, target start, available plans or reports, approximate unit count when known, and the decision you need to make. Seacoast will review the information and identify practical next steps or additional diligence needed.",
  },
  {
    question: "What project size is the best fit?",
    answer:
      "Projects with construction values of approximately $20,000 or more are generally the best fit. Unit count matters less than value and scope; Seacoast can evaluate work ranging from one property to programs of roughly 300 units.",
  },
  {
    question: "How early should we involve Seacoast?",
    answer:
      "The current typical mobilization planning window is one to three months for residential, commercial, and condominium work. Investors should involve Seacoast at least two months before the desired start when possible. Permits, materials, phasing, and final scope can require additional time.",
  },
  {
    question: "Why partner with Seacoast specifically?",
    answer:
      "Seacoast reports project experience across 413 homes representing $63,566,688 in project value, plus 56 condominium and townhome communities, HOA organizations, and commercial structures representing $48,442,320 in project value. The company also reports bonding capability up to $27 million, subject to surety approval and project-specific underwriting.",
  },
  {
    question: "What markets does Seacoast build in?",
    answer:
      "Seacoast's regular service area covers six counties along Florida's Gulf Coast. For contracts of $100,000 or more, Seacoast can evaluate opportunities throughout Florida. Travel, schedule, and operational fit are confirmed for each project.",
  },
  {
    question: "Can Seacoast provide bonding and insurance documentation?",
    answer:
      "Yes. Seacoast reports bonding capability up to $27 million and a $3 million general insurance limit. Bonding remains subject to surety and project approval. Proof of insurance, higher project-specific limits, certificate-holder requirements, and insured-party requirements are confirmed with Seacoast and its carrier for the specific contract.",
  },
  {
    question: "What kinds of capital partners do you work with?",
    answer:
      "Seacoast welcomes inquiries from developers and owners, build-to-rent and single-family rental operators, condominium and HOA organizations, commercial property owners, family offices, and other capital partners planning construction or major rehabilitation. Each opportunity is reviewed individually.",
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
              "Construction project review for build-to-rent, major rehabilitation, and select addition opportunities in Florida.",
            url: "/capital-partners",
            serviceType: "Build-to-Rent, Major Rehabilitation, and Addition Project Review",
            areaServed: [
              "Florida",
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
            Bring Seacoast in before the construction schedule is locked
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Seacoast is currently focused on build-to-rent and major rehabilitation, with select additions where they fit the property and plan. Start with the location, estimated construction value, plans, and desired schedule so Clear Dayland can evaluate the opportunity and practical next steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#inquire" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Request a Project Review</Link>
            <Link href="#project-fit" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See Project Fit</Link>
          </div>
        </div>
      </section>

      {/* Project fit */}
      <section id="project-fit" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container">
          <p className="eyebrow">Project fit at a glance</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">Scope and construction value matter more than unit count</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projectFit.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
                <p className="font-heading text-3xl font-bold text-orange">{item.metric}</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-orange/20 bg-orange/10 p-6">
            <p className="font-heading text-xl font-bold text-navy">Current availability</p>
            <p className="mt-2 max-w-4xl leading-7 text-text-secondary">
              Seacoast currently has capacity to review both large and small projects. Final mobilization depends on scope, permitting, material availability, phasing, and crew requirements, so each start date is confirmed for the specific opportunity.
            </p>
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
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Where Seacoast is focusing now</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            These are construction categories, not legal classifications under H.R. 6644. Seacoast will confirm whether the scope, location, schedule, and current capacity are a fit; the capital partner and its counsel should determine statutory eligibility.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <Link href={o.href} className="mt-6 inline-flex text-sm font-bold text-orange hover:underline">
                  {o.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-navy/10 bg-white p-7 shadow-soft md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="font-heading text-2xl font-bold text-navy">Have a site or building in mind?</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">Send the address, project type, estimated construction value, current plans, stage, and target start. Add the approximate homes or units when known. Seacoast will review what you have and identify the next construction questions.</p>
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

          <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-orange">Selected completed work</p>
              <h3 className="mt-2 max-w-3xl font-heading text-3xl font-bold text-white">Projects that show how Seacoast handles complexity</h3>
            </div>
            <Link href="/our-work" className="font-bold text-orange hover:underline">Browse the full portfolio →</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {highlightedProjects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <h4 className="font-heading text-xl font-bold text-white">{project.title}</h4>
                <p className="mt-3 text-sm leading-6 text-white/70">{project.body}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {project.links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-orange hover:underline">{link.label} →</Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <h3 className="mt-16 font-heading text-2xl font-bold text-white">Licensing, bonding, and insurance information</h3>
          <p className="mt-3 max-w-2xl text-white/70">
            Seacoast can provide contractor-license information, a proposed project team and schedule, and available bonding, insurance, and warranty documentation for the specific opportunity.
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
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Bonding capability up to $27 million, subject to surety and project approval</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Proof of insurance and project-specific limit documentation available</li>
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
          <p className="mt-6 max-w-4xl text-xs leading-5 text-white/60">
            Bonding is subject to surety approval and project-specific underwriting. Seacoast reports a $3 million general insurance limit; higher limits, certificate-holder requirements, and insured-party requirements must be confirmed with Seacoast and its carrier for the specific contract.
          </p>
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
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Six-county service for regular work, statewide review for larger contracts</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Seacoast regularly serves Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties. Contracts of $100,000 or more can be evaluated throughout Florida, with travel, schedule, and capacity confirmed for the specific opportunity.
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
            We make the early conversation concrete: location, construction value, scope, schedule, reporting expectations, available capacity, and the information your team needs to evaluate fit.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whySeacoast.map((item) => (
              <div key={item.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-heading text-xl font-bold text-orange">{item.heading}</p>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 rounded-3xl border border-orange/30 bg-white/5 p-7 md:p-9">
            <p className="font-heading text-2xl font-bold leading-9 text-white">
              “If you&apos;re looking for a company or partner that treats your build like it matters the most, try Seacoast. We understand what making a difference is all about.”
            </p>
            <footer className="mt-4 text-sm font-semibold text-orange">Clear Dayland, Owner</footer>
          </blockquote>
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
              Share the property or target market, project type, estimated construction value, current stage, available plans, and target start. Add the approximate homes or units when known. Clear Dayland will review the opportunity and follow up on construction fit and practical next steps.
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
