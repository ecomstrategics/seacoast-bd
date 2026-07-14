import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, faqSchema, serviceSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

const pageDescription =
  "Plan a Florida build-to-rent construction review with Seacoast. See project-fit, timing, service-area, and early contractor-review information.";

export const metadata: Metadata = {
  title: seoTitle("Florida Build-to-Rent Construction Project Review"),
  description: pageDescription,
  alternates: { canonical: "/build-to-rent-construction" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://seacoastbd.com/build-to-rent-construction",
    title: "Florida Build-to-Rent Construction Project Review",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Capital Partners", href: "/capital-partners" },
  { label: "Build-to-Rent Construction" },
];

const fitFacts = [
  {
    metric: "$20K+",
    title: "Typical best fit",
    body: "Projects with construction values around $20,000 or more are generally the best fit. Every opportunity is still reviewed for scope and logistics.",
  },
  {
    metric: "1 to about 300",
    title: "Flexible unit count",
    body: "Construction value and scope matter more than unit count. Seacoast can evaluate one property through programs of roughly 300 units.",
  },
  {
    metric: "$100K+",
    title: "Statewide review threshold",
    body: "Seacoast's regular work centers on six Gulf Coast counties. Contracts of $100,000 or more can be evaluated elsewhere in Florida.",
  },
  {
    metric: "1-3 months",
    title: "Typical planning window",
    body: "This is Seacoast's current typical mobilization-planning window. A specific start depends on scope, permits, materials, phasing, and crew requirements.",
  },
];

const earlyReviewAreas = [
  {
    title: "Site, product, and plan stage",
    body: "Share the property or target market, available plans, unit or home types, intended use, current approvals, and the decisions that are still open.",
  },
  {
    title: "Scope and product consistency",
    body: "Identify which details repeat across the program and which lots, homes, phases, or site conditions need a different construction response.",
  },
  {
    title: "Phasing and target schedule",
    body: "Discuss the desired start, phase sequence, access, inspections, dependencies, and turnover goals before treating the delivery schedule as fixed.",
  },
  {
    title: "Project controls",
    body: "Put pricing structure, reporting expectations, draw requirements, change management, documentation, and decision responsibilities on the early review agenda.",
  },
];

const reviewSteps = [
  {
    step: "1",
    title: "Send the project snapshot",
    body: "Start with location, project stage, estimated construction value, target schedule, plans, and approximate unit count when known.",
  },
  {
    step: "2",
    title: "Identify missing decisions",
    body: "Seacoast reviews the information available and identifies the construction questions or diligence items needed for a more useful conversation.",
  },
  {
    step: "3",
    title: "Discuss delivery fit",
    body: "The conversation covers scope, location, timing, phasing, documentation, and the practical constraints known at that stage.",
  },
  {
    step: "4",
    title: "Confirm the next step",
    body: "Seacoast confirms whether the opportunity can move into a more detailed review. Availability, schedule, and commercial terms are project-specific.",
  },
];

const intakeItems = [
  "Property address or target Florida market",
  "Current project stage and the decision your team needs to make",
  "Estimated construction value and available budget assumptions",
  "Plans, site information, product mix, and specifications available now",
  "Approximate homes or units and any proposed phase structure",
  "Desired start, turnover goals, reporting needs, and key stakeholders",
];

const faqs = [
  {
    question: "Does Seacoast require a minimum number of build-to-rent units?",
    answer:
      "No fixed unit minimum has been stated. Construction scope and value matter more than unit count. Seacoast can evaluate opportunities ranging from one property to programs of roughly 300 units, with each project reviewed individually.",
  },
  {
    question: "What build-to-rent project size is generally the best fit?",
    answer:
      "Projects with construction values around $20,000 or more are generally the best fit. The location, plans, scope, schedule, logistics, and current availability still need to be reviewed for the specific opportunity.",
  },
  {
    question: "How early should an investor or developer contact Seacoast?",
    answer:
      "Seacoast's current typical mobilization-planning window is one to three months. Investors should involve Seacoast at least two months before the desired start when possible. Permits, materials, phasing, final design, and crew requirements can require more time.",
  },
  {
    question: "Can Seacoast evaluate a build-to-rent project anywhere in Florida?",
    answer:
      "Seacoast regularly serves Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties. Contracts of $100,000 or more can be evaluated elsewhere in Florida, with travel, scope, timing, logistics, and availability confirmed before commitment.",
  },
  {
    question: "What should we send for an initial build-to-rent review?",
    answer:
      "Send the address or target market, estimated construction value, current stage, available plans and site information, product mix, approximate homes or units, desired start, phase plan, and the decision your team needs to make.",
  },
  {
    question: "Does a Seacoast build-to-rent review establish eligibility under the ROAD to Housing Act?",
    answer:
      "No. Seacoast reviews construction scope and project fit. It does not determine whether an investor, purchase, ownership structure, or program satisfies a legal exception or other requirement. The investor and its legal counsel should review the enacted law and project facts separately.",
  },
];

export default function BuildToRentConstructionPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Florida Build-to-Rent Construction Project Review",
            description: pageDescription,
            url: "/build-to-rent-construction",
            serviceType: "Build-to-Rent Construction Project Review",
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
          <p className="eyebrow text-orange/80">For developers, operators, and capital partners</p>
          <h1 className="mt-3 max-w-5xl font-heading text-4xl font-bold leading-tight md:text-6xl">
            Build-to-rent construction review for Florida projects
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
            Bring Seacoast into the conversation while the site, plans, product mix, phasing, and delivery schedule can still be reviewed together. The goal is a clear construction-fit conversation before your team locks assumptions that depend on contractor input.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/capital-partners#inquire"
              className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper"
            >
              Request a Build-to-Rent Review
            </Link>
            <Link
              href="#project-fit"
              className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy"
            >
              Check Project Fit
            </Link>
          </div>
        </div>
      </section>

      <section id="project-fit" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container max-w-6xl">
          <p className="eyebrow">Project fit</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Start with value, scope, location, and timing, not only a unit count.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fitFacts.map((fact) => (
              <article key={fact.title} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-heading text-3xl font-bold text-orange">{fact.metric}</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy">{fact.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{fact.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 rounded-2xl border border-orange/30 bg-orange/10 p-6 text-sm leading-6 text-text-secondary">
            These figures describe current project-fit guidance, not a promise of acceptance, availability, price, or start date. Seacoast confirms those items after reviewing the actual opportunity.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <p className="eyebrow">Why early review matters</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Give the construction questions room to shape the plan.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            A useful early conversation does not require every document to be final. It does require a clear picture of what is known, what repeats across the program, and which assumptions still need to be tested.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {earlyReviewAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{area.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">Initial review path</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">From project snapshot to a practical next step</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviewSteps.map((item) => (
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
        <div className="container grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="eyebrow">What to send</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Make the first review concrete.</h2>
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
            <p className="eyebrow text-orange">Keep legal and construction review separate</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              A project type does not establish legal eligibility.
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Seacoast can discuss build-to-rent construction scope, timing, and delivery fit. It does not provide legal or investment advice and does not determine whether a transaction or program qualifies under the 21st Century ROAD to Housing Act or any other law.
            </p>
            <p className="mt-4 leading-7 text-text-secondary">
              Investors should have their legal and financial advisers evaluate ownership, transaction, funding, and program requirements independently.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
              <Link href="/road-to-housing-act" className="text-orange hover:underline">
                Read the sourced ROAD Act overview →
              </Link>
              <Link href="/understanding-floridas-building-codes" className="text-orange hover:underline">
                Review Florida code planning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <p className="eyebrow">Build-to-rent questions</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What teams ask before a project review</h2>
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
        heading="Have a Florida build-to-rent opportunity to review?"
        subtext="Send the location, estimated construction value, current plans, approximate units, phase approach, and desired start. Clear Dayland will review the construction fit and practical next steps."
        buttonLabel="Request a Project Review"
        buttonHref="/capital-partners#inquire"
      />
    </>
  );
}
