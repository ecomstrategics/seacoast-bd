import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CapitalPartnerForm } from "@/components/CapitalPartnerForm";
import { SchemaScript, serviceSchema, faqSchema, personSchema } from "@/components/Schema";
import { projects } from "@/data/projects";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Southwest Florida Residential Development Partnerships"),
  description:
    "Discuss Southwest Florida build-to-rent, active-adult, and residential development opportunities with Seacoast Building & Design.",
};

const finalActUrl = "https://www.govinfo.gov/content/pkg/BILLS-119hr6644enr/html/BILLS-119hr6644enr.htm";

const offerings = [
  {
    eyebrow: "Build-to-rent",
    title: "Evaluate a build-to-rent opportunity",
    body: "For a proposed single-family rental community, Seacoast can review the site, plans, scope, schedule, reporting requirements, and delivery structure with the project team. Final capacity, pricing, and contract terms are confirmed during preconstruction.",
    points: [
      "Ground-up single-family and build-to-rent scope review",
      "Budget and schedule development based on plans and site conditions",
      "Delivery approach confirmed for the specific opportunity",
    ],
  },
  {
    eyebrow: "Senior housing",
    title: "55+ and active-adult communities",
    body: "For active-adult and 55+ opportunities, Seacoast can evaluate ground-up construction, renovation, or conversion scope alongside the owner's design, legal, and operating teams.",
    points: [
      "Ground-up, renovation, and conversion scope review",
      "Planning around site conditions and local requirements",
      "Project structure confirmed during diligence and preconstruction",
    ],
  },
  {
    eyebrow: "Preconstruction",
    title: "Coordinate the path from plans to delivery",
    body: "Seacoast can work with the owner's land, design, engineering, and finance teams to evaluate constructability, scope, schedule, and permitting before a build commitment is made.",
    points: [
      "Early constructability and scope review",
      "Coordination with owner-selected design and engineering teams",
      "Clear assumptions before pricing and scheduling are finalized",
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
      "The 21st Century ROAD to Housing Act became law in July 2026. Section 1001 generally restricts certain future single-family-home purchases by defined large institutional investors, subject to multiple exceptions and an effective date 180 days after enactment. See our sourced overview and consult legal counsel for a specific transaction.",
  },
  {
    question: "Can Seacoast evaluate a build-to-rent opportunity?",
    answer:
      "Yes. Share the location, plans, product type, unit count, schedule, and delivery expectations. Seacoast will review the opportunity and confirm whether the scope, geography, and available capacity are a fit.",
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
      "Seacoast welcomes inquiries from developers, build-to-rent and single-family rental operators, active-adult and senior-housing teams, family offices, and other owners planning residential construction in Southwest Florida. Other locations are reviewed individually.",
  },
];

export default function CapitalPartnersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Residential Development Opportunity Review",
            description:
              "Construction opportunity review for build-to-rent, active-adult, and other residential development projects in Southwest Florida.",
            url: "/capital-partners",
            serviceType: "Build-to-Rent and New Residential Construction",
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
          <p className="eyebrow text-orange/80">For developers and housing investors</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
            A Southwest Florida construction partner for residential development
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Seacoast welcomes conversations with developers and investors planning build-to-rent, active-adult, and other residential projects across its six-county service area. We evaluate each opportunity around location, scope, schedule, delivery structure, and available capacity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#inquire" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Discuss a Development Opportunity</Link>
            <Link href="#offerings" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See How We Evaluate a Project</Link>
          </div>
        </div>
      </section>

      {/* The opportunity */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="eyebrow">A new federal framework</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Section 1001 changes certain institutional home purchases</h2>
            <p className="mt-4 text-text-secondary">
              The new law generally restricts future single-family-home purchases by covered institutional investors with investment control of at least 350 homes. It also lists exceptions that include qualifying newly constructed homes, build-to-rent programs, certain renovate-to-rent work, and qualifying 55+ communities. The purchase restriction takes effect 180 days after enactment.
            </p>
            <p className="mt-4 text-text-secondary">
              How the law applies depends on the investor, transaction, property, and final implementing guidance. Investors should review the enacted text and consult legal counsel before relying on an exception.
            </p>
            <p className="mt-4 text-sm text-text-secondary/80">
              <Link href="/road-to-housing-act" className="font-semibold text-orange hover:underline">
                Read our sourced overview of Section 1001.
              </Link>
              {" "}This summary is general information, not legal advice.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="font-heading text-xl font-bold text-navy">Examples listed in the final law</p>
            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Certain newly constructed or renovated homes intended for sale</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Qualifying build-to-rent programs</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Qualifying renovate-to-rent work and 55+ communities</li>
            </ul>
            <a href={finalActUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-semibold text-orange hover:underline">Read the final enrolled text →</a>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container">
          <p className="eyebrow">How we partner</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Three ways capital works with Seacoast.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offerings.map((o) => (
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
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Confirm the legal and delivery structure before you build</h2>
            <p className="mt-4 text-text-secondary">
              Seacoast can discuss construction scope, schedule, site conditions, and delivery capacity. Each capital partner remains responsible for confirming that its ownership and transaction structure complies with applicable law.
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
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Discuss a project or development program</h2>
            <p className="mt-4 text-text-secondary">
              Share the location, product type, expected unit count, schedule, and the information your team needs. Seacoast will review the opportunity and explain what can be confirmed now and what requires further diligence.
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
