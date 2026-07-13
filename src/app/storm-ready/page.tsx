import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, faqSchema, serviceSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Storm Preparation Plans for Florida Properties"),
  description:
    "Plan shutters, boards, property checks, contacts, and storm-response terms before hurricane season. Property-specific plans from Seacoast in Southwest Florida.",
};

const planItems = [
  {
    title: "Pre-season property review",
    body: "Walk the property, identify vulnerable exterior areas, and decide what should be repaired or prepared before weather approaches.",
  },
  {
    title: "Opening measurements and inventory",
    body: "Measure doors and windows, review existing shutters or panels, and label materials so the right pieces can be found when needed.",
  },
  {
    title: "Written activation terms",
    body: "Define who can authorize work, what Seacoast is expected to do, where materials are stored, and how weather, access, and crew capacity affect service.",
  },
  {
    title: "Post-storm contact plan",
    body: "Keep current contacts for property access, emergency decisions, damage documentation, temporary stabilization, and repair estimates.",
  },
];

const howItWorks = [
  { step: "1", heading: "Start before hurricane season", body: "Share the property address, property type, existing protection, and any recurring concerns." },
  { step: "2", heading: "Review the property", body: "Seacoast can review openings, shutters or panels, exterior conditions, access, and likely preparation needs." },
  { step: "3", heading: "Agree on the plan", body: "Review the included work, pricing, materials, contacts, response timing, and limits together before signing." },
  { step: "4", heading: "Confirm when a storm approaches", body: "Contact Seacoast early. Weather, official restrictions, site access, and crew capacity determine what work can be performed safely." },
];

const faqs = [
  {
    question: "What can a storm-preparation plan include?",
    answer:
      "A property-specific plan can include an exterior review, opening measurements, an inventory of existing shutters or panels, labeling and storage notes, preparation tasks, authorized contacts, and written storm-activation terms.",
  },
  {
    question: "Does a plan guarantee emergency response within a set time?",
    answer:
      "Response timing depends on the service agreement, weather, safety restrictions, site access, materials, and crew availability. We will explain those limits before you sign.",
  },
  {
    question: "Can Seacoast provide a wind-mitigation inspection?",
    answer:
      "Ask whether that inspection is available for your property and who will perform it. Any potential insurance credit is determined by the insurer based on the completed report and its underwriting rules.",
  },
  {
    question: "What happens after a storm?",
    answer:
      "When conditions are safe and access is available, Seacoast can inspect visible damage, take photos, prepare a construction estimate, discuss temporary stabilization, and scope repairs. The property owner remains responsible for filing and negotiating any insurance claim.",
  },
  {
    question: "Can an HOA or condominium community set up a plan?",
    answer:
      "Yes, Seacoast can discuss a property-specific agreement with authorized community representatives. The final agreement should define buildings, access, contacts, scope, authorization limits, pricing, response terms, and exclusions.",
  },
];

export default function StormReadyPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Storm Preparation Planning",
            description: "Property-specific planning for shutters, boards, exterior checks, contacts, activation terms, and post-storm repair needs.",
            url: "/storm-ready",
            serviceType: "Hurricane preparation planning",
          }),
          faqSchema(faqs),
        ]}
      />

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Storm Preparation Plans" }]} />
          <p className="eyebrow text-orange/80">Before hurricane season</p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl">Make the property plan before a storm is on the map.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Review shutters, boards, vulnerable exterior areas, property access, contacts, and response terms while there is still time to make good decisions. Seacoast can help turn those details into a written, property-specific scope.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#plan" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">What to Plan</Link>
            <Link href="/contact?service=storm-preparedness" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">Discuss Your Property</Link>
          </div>
        </div>
      </section>

      <section id="plan" className="section dark-band bg-navy scroll-mt-24">
        <div className="container">
          <p className="eyebrow">Property-specific planning</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Put the important decisions in writing before the forecast turns urgent.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            Materials and crew availability tighten as a storm approaches. Planning early gives everyone time to review the property and put realistic service terms in writing.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {planItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">How the conversation works</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">From property review to written terms</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-heading text-3xl font-bold text-orange">{item.step}</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy">{item.heading}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="eyebrow">For communities</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Give the board and property team a clear playbook.</h2>
            <p className="mt-4 leading-7 text-text-secondary">
              For an HOA, condominium, or multi-building property, the agreement can identify covered buildings, authorized contacts, access, material locations, preparation tasks, spending limits, and the process for approving stabilization or repairs.
            </p>
          </div>
          <div className="rounded-2xl border border-orange/30 bg-orange/10 p-8">
            <p className="eyebrow text-orange-deep">Safety comes first</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Follow local officials and evacuate when ordered.</h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Contractor availability is never a substitute for an evacuation or emergency plan. Know your zone, make arrangements for every household member and pet, and stop exterior preparation when conditions are no longer safe.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <a href="https://www.floridadisaster.org/knowyourzone/" target="_blank" rel="noreferrer" className="text-orange hover:underline">Know Your Zone ↗</a>
              <a href="https://www.ready.gov/hurricanes" target="_blank" rel="noreferrer" className="text-orange hover:underline">Ready.gov hurricane guidance ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Storm preparation FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Plan the work while there is still time."
        subtext="Send the property address, property type, and the protection already on site. Seacoast can help define the next step."
        buttonLabel="Discuss a Storm Plan"
      />
    </>
  );
}
