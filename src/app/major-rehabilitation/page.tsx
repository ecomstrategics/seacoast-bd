import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, faqSchema, serviceSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

const pageDescription =
  "Plan a Florida major rehabilitation project with Seacoast. Review multi-trade scopes and completed Tara Golf Club and Hurricane Ian restoration examples.";

export const metadata: Metadata = {
  title: seoTitle("Major Rehabilitation Contractor for Florida Properties"),
  description: pageDescription,
  alternates: { canonical: "/major-rehabilitation" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://seacoastbd.com/major-rehabilitation",
    title: "Major Rehabilitation for Florida Properties",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Capital Partners", href: "/capital-partners" },
  { label: "Major Rehabilitation" },
];

const rehabQuestions = [
  {
    title: "What is known about the existing conditions?",
    body: "Start with current photos, plans, reports, prior repairs, visible deterioration, storm history when relevant, and the systems or areas already known to need work.",
  },
  {
    title: "Which scopes have to move together?",
    body: "Identify where structural, roofing, exterior, interior, electrical, plumbing, HVAC, finish, or site work depends on another trade or design decision.",
  },
  {
    title: "How will people and buildings stay operational?",
    body: "For occupied or multi-building properties, discuss access, safety boundaries, sequencing, temporary conditions, resident or tenant communication, and turnover priorities.",
  },
  {
    title: "Which decisions are not final yet?",
    body: "Separate confirmed scope from allowances, further investigation, owner selections, design revisions, permitting requirements, and conditions that may change after work is opened.",
  },
];

const taraScope = [
  "Stucco, masonry, and painting",
  "Flat roofing with tapered insulation",
  "Major framing repairs to roof rafters",
  "Rotten fascia-board replacement and custom metal fascia",
  "Soffit, gutters, and standing-seam metal roofing",
  "Roof windows, solar vents, and HVAC work",
];

const ianScope = [
  "Drywall, insulation, tile, and hardwood flooring",
  "Kitchen and bathroom counters and shower tile",
  "Framing for islands, pillars, closets, and workbenches",
  "Trim, paint, electrical, plumbing, cabinets, and doors",
  "Exterior paint, gutters, soffit, roofing, pavers, and screen lanais",
];

const intakeItems = [
  "Property address, type, current use, and occupancy conditions",
  "The problem to solve and the outcome the owner needs",
  "Photos, plans, reports, inspections, and available repair history",
  "Known structural, roofing, exterior, interior, or building-system scope",
  "Estimated construction value, target timing, and phasing constraints",
  "Owner, board, property-management, design, or insurer documentation requirements",
];

const faqs = [
  {
    question: "What does Seacoast mean by major rehabilitation?",
    answer:
      "Seacoast uses major rehabilitation for coordinated construction that can cross several building areas or trades rather than a single isolated repair. The exact scope can involve residential, commercial, condominium, HOA, community, or investor-owned property and is defined for the specific project.",
  },
  {
    question: "Can Seacoast review an occupied or phased rehabilitation project?",
    answer:
      "Yes. Seacoast can review occupied and phased work. Access, safety, temporary conditions, communication, sequencing, permits, material availability, and crew requirements must be planned for the specific property before a schedule is confirmed.",
  },
  {
    question: "What completed rehabilitation experience is available to review?",
    answer:
      "The public portfolio includes Tara Golf Club, where Seacoast coordinated structural, roofing, exterior, and HVAC work across three buildings, and Hurricane Ian storm-surge restoration across three private residences and the Coco Bay Amenities Center.",
  },
  {
    question: "Can Seacoast handle a storm-related rehabilitation scope and the insurance claim?",
    answer:
      "Seacoast can document visible conditions, define construction scope, prepare a construction estimate, and perform agreed work. Seacoast does not determine coverage or negotiate an insurance claim or settlement for the property owner.",
  },
  {
    question: "What project size is generally the best fit?",
    answer:
      "Projects with construction values around $20,000 or more are generally the best fit. Seacoast reviews the property, scope, location, schedule, phasing, and current availability before confirming whether an opportunity can move forward.",
  },
  {
    question: "Can Seacoast review major rehabilitation work elsewhere in Florida?",
    answer:
      "Seacoast's regular service area includes Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties. Contracts of $100,000 or more can be evaluated elsewhere in Florida, with travel, scope, schedule, and operational fit confirmed for each project.",
  },
];

export default function MajorRehabilitationPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Major Rehabilitation for Florida Properties",
            description: pageDescription,
            url: "/major-rehabilitation",
            serviceType: "Major Property Rehabilitation",
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
          <p className="eyebrow text-orange/80">Residential, commercial, community, and investor-owned properties</p>
          <h1 className="mt-3 max-w-5xl font-heading text-4xl font-bold leading-tight md:text-6xl">
            Major rehabilitation that brings the full property scope into view
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
            When structural conditions, roofing, exteriors, interiors, and building systems overlap, the first job is to understand how the work connects. Seacoast can review coordinated rehabilitation for a single property, an occupied community, or a multi-building program.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/capital-partners#inquire"
              className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper"
            >
              Request a Rehabilitation Review
            </Link>
            <Link
              href="#completed-work"
              className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy"
            >
              Review Completed Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">A coordinated construction problem</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Major rehabilitation is more than a longer repair list.
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-text-secondary">
            Seacoast uses the term for projects where several areas, trades, buildings, or phases need to be reviewed as one construction program. The final scope depends on the actual property, available design, permitting requirements, and what the team learns about existing conditions.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {rehabQuestions.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-7 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="completed-work" className="section dark-band bg-navy scroll-mt-24">
        <div className="container max-w-6xl">
          <p className="eyebrow">Completed multi-building work</p>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                Tara Golf Club multi-building rehabilitation
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                Seacoast worked on three buildings at the same time during the rainy season. Settlement-related conditions required major framing repairs to roof rafters, while the broader program combined structural, roofing, exterior, and mechanical work.
              </p>
              <p className="mt-4 leading-7 text-text-secondary">
                The project shows the value of reviewing deteriorated conditions, weather exposure, trade sequencing, and work across multiple active buildings as one coordinated scope.
              </p>
              <Link
                href="/our-work/tara-golf-club-multi-building-rehabilitation"
                className="mt-6 inline-flex font-bold text-orange hover:underline"
              >
                Read the Tara Golf Club case study →
              </Link>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-navy">Verified project scope</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {taraScope.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-text-secondary">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
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
          <p className="eyebrow">Storm-surge restoration</p>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-soft lg:order-1">
              <h3 className="font-heading text-2xl font-bold text-navy">Verified restoration scope</h3>
              <ul className="mt-6 space-y-4">
                {ianScope.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-text-secondary">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-2">
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                Hurricane Ian storm-surge restoration
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                Seacoast restored three private residences and the Coco Bay Amenities Center after storm surge affected materials and systems up to four feet high. The work involved removing damaged materials, cleaning affected areas, and rebuilding interior and exterior components under coordinated scopes.
              </p>
              <p className="mt-4 leading-7 text-text-secondary">
                This was construction and restoration work. Insurance coverage decisions and claim negotiation remain the responsibility of the owner, insurer, and appropriately licensed advisers.
              </p>
              <Link
                href="/our-work/hurricane-ian-storm-surge-restoration"
                className="mt-6 inline-flex font-bold text-orange hover:underline"
              >
                Read the Hurricane Ian restoration case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="eyebrow">Start the review</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Bring the existing conditions with you.</h2>
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
            <p className="eyebrow text-orange">Related Seacoast resources</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Review the parts of the scope in more detail.</h2>
            <div className="mt-6 space-y-5">
              <Link href="/services/exterior-renovations" className="block rounded-2xl bg-white p-5 shadow-sm hover:shadow-soft">
                <span className="font-heading text-lg font-bold text-navy">Exterior renovations</span>
                <span className="mt-2 block text-sm leading-6 text-text-secondary">Roofing, siding, trim, paint, and structural exterior work coordinated around the property.</span>
              </Link>
              <Link href="/services/storm-damage-repair" className="block rounded-2xl bg-white p-5 shadow-sm hover:shadow-soft">
                <span className="font-heading text-lg font-bold text-navy">Storm damage repair</span>
                <span className="mt-2 block text-sm leading-6 text-text-secondary">Visible-condition documentation, construction estimating, stabilization discussion, and agreed repair work.</span>
              </Link>
              <Link href="/understanding-floridas-building-codes" className="block rounded-2xl bg-white p-5 shadow-sm hover:shadow-soft">
                <span className="font-heading text-lg font-bold text-navy">Florida building-code planning</span>
                <span className="mt-2 block text-sm leading-6 text-text-secondary">Understand the statewide code, local permit review, product approval, and project-specific design roles.</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <p className="eyebrow">Major rehabilitation questions</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What owners and capital partners ask first</h2>
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
        heading="Does the property need more than an isolated repair?"
        subtext="Send the address, current conditions, available plans or reports, known scope, estimated construction value, and desired timing. Clear Dayland will review the project fit and practical next steps."
        buttonLabel="Request a Rehabilitation Review"
        buttonHref="/capital-partners#inquire"
      />
    </>
  );
}
