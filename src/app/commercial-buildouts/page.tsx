import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, faqSchema, serviceSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

const pageDescription =
  "Discuss a Florida commercial buildout with Seacoast and review the verified Nautical Bowls scope, project challenges, planning questions, and project-fit guidance.";

export const metadata: Metadata = {
  title: seoTitle("Commercial Buildout Contractor in Southwest Florida"),
  description: pageDescription,
  alternates: { canonical: "/commercial-buildouts" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://seacoastbd.com/commercial-buildouts",
    title: "Commercial Buildouts in Southwest Florida",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Capital Partners", href: "/capital-partners" },
  { label: "Commercial Buildouts" },
];

const planningAreas = [
  {
    title: "Existing space and project boundary",
    body: "Share the address, current condition, intended use, available site or shell information, and a clear description of what the owner, landlord, or prior contractor is providing.",
  },
  {
    title: "Plans, permits, and open decisions",
    body: "Identify the plan set, design team, permitting stage, revisions still in progress, owner selections, and questions that could affect construction scope or sequence.",
  },
  {
    title: "Trade and system coordination",
    body: "Map how demolition, framing, finishes, electrical, plumbing, HVAC, fire protection, and other required scopes depend on one another for the specific buildout.",
  },
  {
    title: "Schedule and change control",
    body: "Discuss the desired start and opening goals, long-lead concerns, review responsibilities, change documentation, decision timing, and the limits of the current information.",
  },
];

const nauticalScope = [
  "Demolition and foundation work",
  "Metal-stud framing, drywall, and trim",
  "Electrical, plumbing, HVAC, and sprinklers",
  "Murals, flooring, and painting",
];

const fitFacts = [
  {
    title: "Construction value",
    value: "$20K+",
    body: "Projects around $20,000 or more are generally the best fit, subject to the actual commercial scope and logistics.",
  },
  {
    title: "Planning window",
    value: "1-3 months",
    body: "This is the current typical mobilization-planning window, not a guaranteed start date.",
  },
  {
    title: "Regular service area",
    value: "6 counties",
    body: "Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties.",
  },
  {
    title: "Statewide review",
    value: "$100K+",
    body: "Contracts at or above this value can be evaluated elsewhere in Florida, with project-specific confirmation.",
  },
];

const intakeItems = [
  "Property address, current condition, and intended commercial use",
  "Current project stage, available plans, specifications, and reports",
  "Known landlord, owner, association, or site requirements",
  "Estimated construction value and current scope by trade",
  "Desired start, opening goal, and any fixed milestones",
  "Known plan revisions, owner selections, or material concerns",
];

const faqs = [
  {
    question: "What type of commercial buildout can Seacoast review?",
    answer:
      "Seacoast can review a commercial buildout based on the space, intended use, plans, construction value, trade scope, permitting stage, and schedule. Each opportunity is evaluated individually rather than treated as a standard package.",
  },
  {
    question: "What commercial buildout experience is available to review?",
    answer:
      "Seacoast completed the first Nautical Bowls location built in Florida. The verified scope included demolition, foundation work, metal-stud framing, drywall, trim, electrical, plumbing, HVAC, sprinklers, murals, flooring, and painting.",
  },
  {
    question: "How did Seacoast handle changes on the Nautical Bowls project?",
    answer:
      "During COVID-era disruptions, seven of 41 key materials were unavailable, shipping delays affected sequencing, and 16 changes to the original plans extended the permitting process. Seacoast coordinated the changing plans and trade sequence through completion.",
  },
  {
    question: "How early should we discuss a commercial buildout?",
    answer:
      "Seacoast's current typical mobilization-planning window is one to three months. Owners should involve Seacoast early enough to review plans, scope, permits, materials, phasing, and trade dependencies. The actual start is confirmed only after project review.",
  },
  {
    question: "Can Seacoast evaluate a commercial buildout elsewhere in Florida?",
    answer:
      "Seacoast regularly serves six Gulf Coast counties. Contracts of $100,000 or more can be evaluated elsewhere in Florida, with travel, schedule, scope, logistics, and current availability confirmed for the specific opportunity.",
  },
  {
    question: "What should we send for an initial commercial buildout review?",
    answer:
      "Send the address, intended use, current condition, project stage, available plans and specifications, estimated construction value, known trade scope, permitting status, desired start, opening goal, and any unresolved design or material decisions.",
  },
];

export default function CommercialBuildoutsPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Commercial Buildouts in Southwest Florida",
            description: pageDescription,
            url: "/commercial-buildouts",
            serviceType: "Commercial Buildout Construction",
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
        ]}
      />

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container max-w-6xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow text-orange/80">For commercial owners, operators, and capital partners</p>
          <h1 className="mt-3 max-w-5xl font-heading text-4xl font-bold leading-tight md:text-6xl">
            Commercial buildouts planned around the real space and scope
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
            A buildout brings plans, existing conditions, permits, trade dependencies, material decisions, and an operating goal into the same schedule. Seacoast can review those facts early and help define a practical construction path for the opportunity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/capital-partners#inquire"
              className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper"
            >
              Request a Buildout Review
            </Link>
            <Link
              href="#nautical-bowls"
              className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy"
            >
              See Verified Experience
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">Before the schedule is fixed</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Put the construction dependencies on the table early.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            The first review should make it clear what is defined, what is still changing, and which decisions affect several trades or the permit path.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {planningAreas.map((area) => (
              <article key={area.title} className="rounded-2xl bg-white p-7 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-navy">{area.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nautical-bowls" className="section dark-band bg-navy scroll-mt-24">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Completed commercial buildout</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                Florida&apos;s first Nautical Bowls location
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                Seacoast completed the first Nautical Bowls location built in Florida during COVID-era supply and shipping disruptions. Seven of 41 key materials were unavailable, and 16 changes to the original plans extended the permitting process.
              </p>
              <p className="mt-4 leading-7 text-text-secondary">
                Seacoast coordinated the changing plans and trade sequence while the project moved through demolition, foundation work, interior construction, building systems, finishes, and completion.
              </p>
              <Link
                href="/our-work/nautical-bowls-florida-commercial-buildout"
                className="mt-6 inline-flex font-bold text-orange hover:underline"
              >
                Read the Nautical Bowls case study →
              </Link>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-orange/30 bg-orange/10 p-6">
                  <p className="font-heading text-4xl font-bold text-orange">7 of 41</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">Key materials unavailable during the project</p>
                </div>
                <div className="rounded-2xl border border-orange/30 bg-orange/10 p-6">
                  <p className="font-heading text-4xl font-bold text-orange">16</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">Changes to the original plans</p>
                </div>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-navy">Verified project scope</h3>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {nauticalScope.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-text-secondary">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">Current project-fit guidance</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Use these figures to start the conversation, not to assume a commitment.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fitFacts.map((fact) => (
              <article key={fact.title} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">{fact.title}</p>
                <p className="mt-3 font-heading text-3xl font-bold text-navy">{fact.value}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{fact.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm leading-6 text-text-secondary">
            Scope, permitting, design status, materials, travel, phasing, crew requirements, and current availability are confirmed for the specific buildout before a start date or delivery plan is committed.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="eyebrow">What to send</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Give the first review enough context.</h2>
            <ul className="mt-6 space-y-4">
              {intakeItems.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-text-secondary">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-orange/30 bg-orange/10 p-8">
            <p className="eyebrow text-orange">Related planning</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Connect the buildout to the property and permit path.</h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Florida has a statewide building code, while the local authority reviews the actual project documents, issues permits, and inspects the work. The intended use, scope, existing conditions, products, and required professional design all matter to that review.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
              <Link href="/understanding-floridas-building-codes" className="text-orange hover:underline">
                Review Florida code planning →
              </Link>
              <Link href="/commercial-roofing" className="text-orange hover:underline">
                Explore commercial roofing →
              </Link>
              <Link href="/our-work" className="text-orange hover:underline">
                Browse completed projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <p className="eyebrow">Commercial buildout questions</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What owners and operators ask first</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Have a commercial space or plan set to review?"
        subtext="Send the address, intended use, current plans, known trade scope, estimated construction value, permitting stage, and desired timing. Clear Dayland will review the opportunity and practical next steps."
        buttonLabel="Request a Buildout Review"
        buttonHref="/capital-partners#inquire"
      />
    </>
  );
}
