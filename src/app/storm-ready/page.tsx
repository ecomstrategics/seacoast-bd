import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, serviceSchema, faqSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Storm Ready Programs | Annual Hurricane Prep Memberships | Seacoast Building & Design",
  description:
    "Seacoast Storm Ready Programs turn one-off storm work into an annual membership. Pre-season inspections, wind mitigation reports, priority boarding and shuttering, and first-in-line emergency response across Southwest Florida. Gold and Platinum tiers.",
};

const gold = {
  name: "Gold",
  price: "$899",
  cadence: "per building / year",
  note: "Additional buildings $499 each.",
  features: [
    "Annual pre-season property inspection (roof, fascia, soffits, caulking, shutter hardware), with photos and reports stored in the cloud",
    "Wind mitigation inspection report that can qualify you for insurance premium credits",
    "Shutter and board fitting and cataloging, with gaps identified and quoted",
    "Storm preparation including boarding up, shutter installation, and furniture removal (24 to 48 hour notice)",
    "On-site or off-site storage for outdoor belongings, priced per window and door opening covered",
    "Priority scheduling for boarding and shuttering once a storm is named",
    "On-site within 24 to 48 hours of your initial contact, depending on time of day, site access, and safety conditions",
    "Before-and-after photo documentation for insurance claims",
    "10% member discount on storm repairs",
  ],
};

const platinum = {
  name: "Platinum",
  price: "$1,799",
  cadence: "per year",
  note: "Everything in Gold, plus the items below.",
  features: [
    "First-in-line emergency response, ahead of Gold members (12 to 24 hour notice)",
    "Priority boarding and shuttering included, not just priority booking (12 to 24 hour notice)",
    "Rapid post-storm damage assessment with full insurance documentation and adjuster coordination",
    "Emergency supply and repair services delivery (12 to 24 hour notice)",
    "Annual minor repair allowance (small caulking, fascia, and hardware fixes included)",
    "15% member discount on storm repairs",
  ],
};

const howItWorks = [
  { step: "1", heading: "Enroll before the season", body: "Sign up ahead of hurricane season so your inspection, wind mitigation report, and shutter cataloging are done before the first named storm." },
  { step: "2", heading: "We prep and document", body: "Seacoast inspects, fits and catalogs your boards and shutters, and stores photos and reports in the cloud for you and your insurer." },
  { step: "3", heading: "A storm is named", body: "Members get priority scheduling for boarding and shuttering. Platinum members move to the front of the line with included priority service." },
  { step: "4", heading: "Rapid response after", body: "We document damage, coordinate with your adjuster, and handle repairs, with a member discount on the work." },
];

const faqs = [
  {
    question: "What are Seacoast Storm Ready Programs?",
    answer:
      "Storm Ready Programs are annual hurricane-preparedness memberships from Seacoast Building & Design. Instead of scrambling for one-off storm work, members get pre-season inspections, wind mitigation reports, shutter and board fitting, priority boarding and shuttering, and emergency response, all locked in before the season. Two tiers are available: Gold and Platinum.",
  },
  {
    question: "How much do the programs cost?",
    answer:
      "The Gold program is $899 per building per year, with additional buildings at $499 each. The Platinum program is $1,799 per year and includes everything in Gold plus first-in-line emergency response, included priority boarding and shuttering, post-storm damage assessment, and a 15% repair discount.",
  },
  {
    question: "What is the difference between Gold and Platinum?",
    answer:
      "Gold covers pre-season preparation, wind mitigation, priority scheduling, and a 10% repair discount, with a 24 to 48 hour response window. Platinum adds first-in-line emergency response, included (not just prioritized) boarding and shuttering, rapid post-storm damage assessment with adjuster coordination, an annual minor repair allowance, and a 15% repair discount, on a faster 12 to 24 hour window.",
  },
  {
    question: "Can a wind mitigation report lower my insurance?",
    answer:
      "A wind mitigation inspection documents the storm-resistant features of your property, which many Florida insurers use to apply premium credits. The report is included in both Storm Ready tiers.",
  },
  {
    question: "Do you offer programs for HOAs and communities?",
    answer:
      "Yes. Seacoast offers community and HOA emergency-response agreements that allow us to mobilize quickly after a storm under pre-authorized terms. Contact us to set up a program for your community.",
  },
];

function PlanCard({ plan, featured }: { plan: typeof gold; featured?: boolean }) {
  return (
    <div className={`flex flex-col rounded-3xl p-8 shadow-soft ${featured ? "border-2 border-orange bg-white" : "bg-white"}`}>
      <div className="flex items-baseline justify-between">
        <p className="font-heading text-2xl font-bold text-navy">{plan.name}</p>
        {featured && <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange">Most coverage</span>}
      </div>
      <p className="mt-4">
        <span className="font-heading text-4xl font-bold text-navy">{plan.price}</span>{" "}
        <span className="text-sm text-text-secondary">{plan.cadence}</span>
      </p>
      <p className="mt-2 text-sm font-semibold text-text-secondary">{plan.note}</p>
      <ul className="mt-6 space-y-3 text-sm text-text-secondary">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5"><span className="mt-0.5 shrink-0 text-orange" aria-hidden>✓</span> {f}</li>
        ))}
      </ul>
      <Link href="/contact" className="mt-8 rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">
        Enroll in {plan.name}
      </Link>
    </div>
  );
}

export default function StormReadyPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Storm Ready Programs",
            description:
              "Annual hurricane-preparedness memberships with pre-season inspections, wind mitigation reports, priority boarding and shuttering, and emergency response across Southwest Florida.",
            url: "/storm-ready",
            serviceType: "Hurricane Preparedness Membership",
          }),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Storm Ready Programs" }]} />
          <p className="eyebrow text-orange/80">Annual storm preparedness</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">Storm Ready Programs</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Stop scrambling when a storm is named. Lock in your hurricane prep ahead of the season with one annual membership:
            pre-season inspections, wind mitigation credits, priority boarding and shuttering, and first-in-line emergency
            response across Southwest Florida.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#plans" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">See the plans</Link>
            <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">Talk to us</Link>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="section dark-band bg-navy scroll-mt-24">
        <div className="container">
          <p className="eyebrow">Membership tiers</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Pick your level of coverage.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Both tiers are annual memberships. Pricing is per building, so multi-building owners and communities can scale coverage across the property.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <PlanCard plan={gold} />
            <PlanCard plan={platinum} featured />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Prepared before the storm, covered after.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s) => (
              <div key={s.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-heading text-3xl font-bold text-orange">{s.step}</p>
                <p className="mt-3 font-heading text-lg font-bold text-navy">{s.heading}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOA / community */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">For HOAs and communities</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Pre-authorized emergency response for your community.</h2>
          <p className="mt-4 text-text-secondary">
            Seacoast offers community and HOA emergency-response agreements so we can mobilize immediately after a storm under
            pre-authorized terms, without waiting on board approval at the moment of crisis. That includes a 24/7 emergency
            contact line, an assigned project lead, rapid water mitigation and dry-in, tarping and roof stabilization,
            insurance coordination, and a seamless handoff from mitigation to full repair, all under written authorization.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-orange-deep px-6 py-3 font-bold text-white hover:bg-copper">
            Set up a community program
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Storm Ready Programs FAQ</h2>
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

      <CTASection variant="orange" heading="Get storm ready before the next named storm." subtext="Enroll in a Storm Ready Program or ask us which tier fits your property." buttonLabel="Enroll Now" />
    </>
  );
}
