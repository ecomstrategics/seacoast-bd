import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { StormLifecycle } from "@/components/StormLifecycle";
import { CrossSellBlock, type CrossSellItem } from "@/components/CrossSellBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, serviceSchema, faqSchema } from "@/components/Schema";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";

type Props = { params: { slug: string } };

// ─── Rich content map (storm trio) ────────────────────────────────────────────
// All three storm pages override the generic template. emergency-response uses
// variant:"emergency" to trigger the phone-first layout (spec §5.2).
// The other 8 services fall through to the generic template below.

type StormRichContent = {
  variant?: "emergency";
  heroH1: string;
  heroSub: string;
  heroPrimary: string;
  heroSecondary?: string;
  stormLifecycleStage: "before" | "during" | "after";
  crossSellItems: CrossSellItem[];
  faqs: FAQItem[];
};

const stormContent: Record<string, StormRichContent> = {
  "storm-preparedness": {
    heroH1: "Storm Preparedness: Be Ready Before the Storm Hits.",
    heroSub:
      "Don't wait until the cone is on you. Seacoast's storm preparedness program covers boarding, shuttering, supply delivery, and priority emergency response, locked in before hurricane season.",
    heroPrimary: "Get a Preparedness Plan",
    heroSecondary: "See What's Included",
    stormLifecycleStage: "before",
    crossSellItems: [
      {
        title: "Storm Damage Repair",
        href: "/services/storm-damage-repair",
        blurb:
          "If a storm catches you unprepared, Seacoast handles insurance documentation, adjuster coordination, and full repair: roof to gutters to siding.",
        icon: "🔨",
      },
      {
        title: "Container Storm Shelters",
        href: "/containers/storm-shelters",
        blurb:
          "A Cat-5-rated container shelter is the permanent answer for families who need to ride out storms on their property.",
        icon: "🛡️",
      },
      {
        title: "Impact Windows and Doors",
        href: "/services/windows-and-doors",
        blurb:
          "Impact-rated glazing is the longest-lasting layer of storm protection for any Florida home , and it can reduce your wind insurance premium.",
        icon: "🚪",
      },
    ],
    faqs: [
      {
        question: "When should I sign up for storm preparedness?",
        answer:
          "Now. Once a storm is named, boarding contractors are typically booked within 24 to 48 hours. Signing up in the off-season or early spring secures your spot and locks in priority service before demand spikes.",
      },
      {
        question: "Do you offer this for commercial properties and HOAs?",
        answer:
          "Yes. Seacoast works with HOA managers and commercial property owners across Southwest Florida. Contact us for multi-property and community-scale preparedness plans.",
      },
      {
        question: "What if I already have shutters?",
        answer:
          "We inspect and catalog your existing shutters, confirm they still meet current Florida Building Code requirements, and include them in your preparedness plan. We fill gaps where coverage is missing.",
      },
      {
        question: "Does my insurance discount a storm preparedness plan?",
        answer:
          "A wind mitigation inspection, which is part of our pre-season assessment, can qualify your home for Florida wind mitigation credits that reduce your insurance premium. Ask us for details when you schedule.",
      },
      {
        question: "What happens if no storm hits that season?",
        answer:
          "Off-season inspections routinely uncover repair issues: damaged fascia, degraded caulking, weak shutter hardware. You still get a full property assessment and peace of mind for the whole season.",
      },
    ],
  },

  "emergency-response": {
    variant: "emergency",
    heroH1: "Storm Emergency? Call Now.",
    heroSub:
      "Seacoast emergency crews respond across Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties. Boarding, shuttering, supply delivery, and immediate damage stabilization.",
    heroPrimary: "Call Now",
    stormLifecycleStage: "during",
    crossSellItems: [
      {
        title: "Storm Damage Repair",
        href: "/services/storm-damage-repair",
        blurb:
          "Once you're safe, Seacoast handles the insurance claim and the full repair: roof to gutters to siding.",
        icon: "🔨",
      },
      {
        title: "Storm Preparedness",
        href: "/services/storm-preparedness",
        blurb:
          "Lock in priority boarding and shuttering before the next season so you're never scrambling again.",
        icon: "🛡️",
      },
      {
        title: "Container Storm Shelters",
        href: "/containers/storm-shelters",
        blurb:
          "A permanent Cat-5-rated container shelter means you never have to make the evacuation decision under pressure.",
        icon: "🏗️",
      },
    ],
    faqs: [],
  },

  "storm-damage-repair": {
    heroH1: "Storm Damage Repair: We Handle the Claim. You Handle Your Life.",
    heroSub:
      "Insurance documentation, adjuster coordination, scope-of-loss reports, and full repair from roof to gutters to siding. Seacoast manages the process from first assessment to final walkthrough.",
    heroPrimary: "Get a Damage Assessment",
    heroSecondary: "Call (941) 500-5431",
    stormLifecycleStage: "after",
    crossSellItems: [
      {
        title: "Roofing",
        href: "/services/roofing",
        blurb:
          "Once the claim is approved, Seacoast handles the full roof replacement: tile, metal, shingle, or TPO, matched to your original system.",
        icon: "🏠",
      },
      {
        title: "Storm Preparedness",
        href: "/services/storm-preparedness",
        blurb:
          "Don't wait for the next storm. Lock in boarding, shuttering, and priority response before the next hurricane season.",
        icon: "🛡️",
      },
      {
        title: "Emergency Response",
        href: "/services/emergency-response",
        blurb:
          "If a storm is still active, call our emergency line for same-day boarding and immediate damage stabilization.",
        icon: "🚨",
      },
    ],
    faqs: [
      {
        question: "How quickly can you respond after a storm?",
        answer:
          "We prioritize storm response. Contact us right away to get on our assessment schedule. Our teams work across all six Southwest Florida counties and triage by severity.",
      },
      {
        question: "Do you help with insurance documentation?",
        answer:
          "Yes. We provide written assessments, photo documentation, drone footage, and scope-of-loss reports that coordinate directly with your adjuster. Seacoast has navigated hundreds of insurance claims across Southwest Florida.",
      },
      {
        question: "What if my insurance claim is denied?",
        answer:
          "We help document a supplement or appeal with additional evidence. We also work alongside licensed public adjusters and attorneys who specialize in Florida storm claim disputes.",
      },
      {
        question: "Will you work directly with my insurance company?",
        answer:
          "Yes. We communicate with adjusters on your behalf, provide required documentation, and keep the repair scope aligned with the approved claim all the way to final sign-off.",
      },
      {
        question: "Do you handle partial damage or just full replacements?",
        answer:
          "Both. We assess every damaged system: roof, siding, gutters, windows, fascia, soffits. We repair or replace based on what the damage requires and what your claim covers.",
      },
      {
        question: "Do I need multiple contractor bids for my insurance claim?",
        answer:
          "Your policy may require it. We provide a detailed scope and cost estimate that meets your insurer's documentation requirements. Ask us when you schedule your assessment.",
      },
    ],
  },
};

// ─── Generic per-service FAQ data (existing services) ─────────────────────────
const serviceFaqs: Record<string, FAQItem[]> = {
  roofing: [
    { question: "What roofing materials do you work with?", answer: "We install and repair tile, metal (standing seam, R-panel, stone-coated steel), TPO/flat, shingle, and slate-profile systems." },
    { question: "Do you handle storm damage claims?", answer: "Yes. We document damage, coordinate with your insurance adjuster, and manage repairs from inspection to final walkthrough." },
    { question: "How long does a roof replacement take?", answer: "Most residential replacements take 1 to 3 days. Commercial and multi-family projects are scoped individually." },
  ],
  "gutters-fascia-soffits": [
    { question: "What gutter styles do you offer?", answer: "We install seamless K-style and half-round gutters in aluminum and copper, sized for Southwest Florida rainfall." },
    { question: "Can you replace just the fascia or soffits?", answer: "Yes. We can replace individual components or the full system depending on the scope of damage or renovation." },
  ],
  siding: [
    { question: "Do you install Hardie board siding?", answer: "Yes. James Hardie fiber cement products are a primary option for our Southwest Florida clients due to moisture and impact resistance." },
    { question: "Can siding improve energy efficiency?", answer: "New siding combined with proper insulation and moisture barriers can meaningfully reduce energy costs." },
  ],
  "windows-and-doors": [
    { question: "Do you install impact-resistant windows?", answer: "Yes. We install impact-rated windows and doors designed to meet Florida building codes for wind and hurricane protection." },
    { question: "How long does window replacement take?", answer: "Most residential window projects are completed within 1 to 2 days. Custom orders may add lead time." },
  ],
  "exterior-renovations": [
    { question: "What counts as an exterior renovation?", answer: "Anything outside the building envelope: structural repairs, paint, trim, cladding, walkways, lighting, and more." },
    { question: "Do you handle both residential and commercial?", answer: "Yes. Our team works across residential, commercial, and multi-family properties throughout Southwest Florida." },
  ],
  "pool-enclosures-lanais": [
    { question: "Do you build new enclosures or just repair existing ones?", answer: "Both. We design and build new pool enclosures and lanais, and repair or re-screen existing structures." },
    { question: "What happens if a screen enclosure is damaged in a storm?", answer: "We assess structural damage, document it for insurance, and rebuild or repair to current Florida building code." },
  ],
  "room-additions": [
    { question: "Do you handle the full permit process?", answer: "Yes. We manage permitting, inspections, and coordination with local building departments from start to finish." },
    { question: "What types of additions do you build?", answer: "Sunrooms, enclosed patios, garage conversions, carports, and traditional room additions for residential and commercial properties." },
  ],
};

const slugToServiceTypeKeywords: Record<string, string[]> = {
  roofing: ["roofing", "roof"],
  "gutters-fascia-soffits": ["gutters", "fascia", "soffits"],
  siding: ["siding", "hardie"],
  "windows-and-doors": ["window", "door"],
  "exterior-renovations": ["exterior", "renovation"],
  "pool-enclosures-lanais": ["enclosure", "lanai", "pool"],
  "room-additions": ["addition", "carport"],
  "storm-damage-repair": ["storm", "hurricane", "damage", "repair"],
  "storm-preparedness": ["storm", "hurricane"],
  "emergency-response": ["storm", "hurricane"],
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  const rich = stormContent[params.slug];
  return {
    title: `${service.name} | Seacoast Building & Design`,
    description: rich ? rich.heroSub : service.shortDescription,
  };
}

// ─── Emergency Response layout (variant: "emergency") ─────────────────────────
function EmergencyResponseLayout({ content }: { content: StormRichContent }) {
  return (
    <>
      {/* Schema */}
      <SchemaScript
        schema={serviceSchema({
          name: "Emergency Storm Response",
          description: content.heroSub,
          url: "/services/emergency-response",
          serviceType: "Emergency Storm Response",
          areaServed: ["Hillsborough County, FL", "Manatee County, FL", "Sarasota County, FL", "Charlotte County, FL", "Lee County, FL", "Collier County, FL"],
        })}
      />

      {/* Hero — storm-accented, phone-dominant, single screen */}
      <section className="bg-storm py-16 text-white md:py-24">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Emergency Response" }]} />
          <p className="eyebrow mt-2 text-white/70">24 / 7 Emergency Line</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">{content.heroH1}</h1>
          <a
            href="tel:+19415005431"
            className="mt-6 block font-heading text-5xl font-bold leading-none text-white transition hover:opacity-80 md:text-7xl"
            aria-label="Call Seacoast emergency line: (941) 500-5431"
          >
            (941) 500-5431
          </a>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{content.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+19415005431" className="rounded-full bg-white px-6 py-3 font-bold text-storm hover:bg-white/90">Call Now</a>
            <a href="sms:+19415005431" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white hover:text-storm">Text Us</a>
            <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white hover:text-storm">Request Emergency Quote</Link>
          </div>
        </div>
      </section>

      {/* What we can do right now */}
      <section className="section bg-warm-white">
        <div className="container">
          <p className="eyebrow">Right now</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What Seacoast can do today.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: "🪵", heading: "Board and Shutter", body: "Same-day boarding and shutter deployment when capacity allows. Pre-cut, labeled, and ready." },
              { icon: "🪣", heading: "Supply Delivery", body: "Sandbags, tarps, plywood, and generator support delivered directly to your property." },
              { icon: "🔒", heading: "Damage Stabilization", body: "Emergency tarping, water mitigation, and board-up service immediately after the storm passes." },
            ].map((block) => (
              <div key={block.heading} className="rounded-2xl border border-storm/20 bg-white p-6 shadow-soft">
                <div className="text-4xl" aria-hidden>{block.icon}</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{block.heading}</h3>
                <p className="mt-2 text-text-secondary">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area band */}
      <section className="bg-navy py-10 text-white">
        <div className="container">
          <p className="eyebrow text-teal/80">Coverage</p>
          <h2 className="mt-2 font-heading text-2xl font-bold">Six counties. One call.</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Seacoast emergency crews serve Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties.
            If you&apos;re in Southwest Florida, we can get to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Hillsborough", "Manatee", "Sarasota", "Charlotte", "Lee", "Collier"].map((county) => (
              <span key={county} className="rounded-full border border-teal/40 px-4 py-2 text-sm font-semibold text-teal">{county} County</span>
            ))}
          </div>
        </div>
      </section>

      {/* What to do right now — utility checklist */}
      <section className="section bg-cool-gray">
        <div className="container max-w-2xl">
          <p className="eyebrow">Utility content</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">While you wait: five steps to take right now.</h2>
          <ol className="mt-8 space-y-4">
            {[
              "Move vehicles into the garage or away from trees. Falling limbs are the leading source of vehicle damage.",
              "Bring in loose outdoor furniture, pots, and umbrellas. Anything under 50 lbs becomes a projectile at Cat-1 wind speeds.",
              "Document your property with a full phone walkthrough: every room, every side of the house. Send the video to yourself.",
              "Locate your insurance policy and adjuster contact before the storm. After, those documents can be the most important paper in the house.",
              "Fill bathtubs and containers with fresh water. Utilities can be out for days after a direct hit.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-storm text-sm font-bold text-white">{i + 1}</span>
                <p className="text-charcoal">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* After the storm */}
      <section className="section bg-warm-white">
        <div className="container">
          <div className="rounded-2xl bg-navy p-8 text-white md:p-12">
            <p className="eyebrow text-teal/80">After the storm</p>
            <h2 className="mt-2 font-heading text-3xl font-bold">Once you&apos;re safe, we handle the rest.</h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Seacoast&apos;s storm damage repair team handles insurance documentation, adjuster coordination,
              and the full repair: roof to gutters to siding. Hundreds of claims navigated across Southwest Florida.
            </p>
            <Link href="/services/storm-damage-repair" className="mt-6 inline-block rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">
              Learn About Storm Damage Repair →
            </Link>
          </div>
        </div>
      </section>

      <StormLifecycle activeStage="during" />
      <CrossSellBlock heading="Before the next storm" items={content.crossSellItems} />
      <CTASection variant="teal" heading="Need emergency help right now?" subtext="Call (941) 500-5431 or use the form below. We'll get back to you as fast as possible." buttonLabel="Request Emergency Quote" />
    </>
  );
}

// ─── Storm Preparedness rich layout ───────────────────────────────────────────
function StormPrepLayout({ content }: { content: StormRichContent }) {
  const schemas = [
    serviceSchema({
      name: "Storm Preparedness",
      description: content.heroSub,
      url: "/services/storm-preparedness",
      serviceType: "Hurricane Preparedness Service",
      areaServed: ["Southwest Florida"],
    }),
    faqSchema(content.faqs),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Storm Preparedness" }]} />
          <div className="mt-4 text-4xl" aria-hidden>🛡️</div>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">{content.heroH1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{content.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">{content.heroPrimary}</Link>
            {content.heroSecondary && (
              <a href="#whats-included" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy">{content.heroSecondary}</a>
            )}
          </div>
        </div>
      </section>

      {/* Hero image placeholder */}
      <div className="container py-8">
        <ImagePlaceholder label="Seacoast crew installing storm shutters on a coastal Southwest Florida home, stormy sky overhead" ratio="16/9" tone="navy" />
      </div>

      {/* Trust bar */}
      <section className="section bg-warm-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { label: "Licensed and Insured", body: "Every project is performed by licensed contractors with full insurance coverage across Southwest Florida." },
            { label: "40+ Years Experience", body: "Four decades of storm preparedness, damage repair, and exterior projects across six counties." },
            { label: "Financing Available", body: "Flexible financing options available. Ask about payment plans when you request your quote." },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="eyebrow">{card.label}</p>
              <p className="mt-3 text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why prep matters */}
      <section className="section bg-cool-gray">
        <div className="container">
          <p className="eyebrow">The urgency</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Why prep matters before the season starts.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Florida sees named storms every year. Most homeowners scramble to prepare when a storm forms,
            and most boarding contractors are sold out 48 hours before landfall.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: "📋", heading: "Boards run out", body: "Plywood and pre-cut boards disappear from every home improvement store within hours of a storm watch. If you don't have them staged, you won't get them." },
              { icon: "📅", heading: "Contractors get booked", body: "Professional boarding crews book up fast. Clients with prior contracts jump the queue. Walk-in requests during a watch rarely get filled." },
              { icon: "📄", heading: "Insurance gaps compound", body: "Prep failures become claim complications. Damage that could have been mitigated with shutters or tarping often results in reduced or disputed payouts." },
            ].map((card) => (
              <div key={card.heading} className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="text-3xl" aria-hidden>{card.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{card.heading}</h3>
                <p className="mt-2 text-sm text-text-secondary">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="whats-included" className="section bg-warm-white">
        <div className="container">
          <p className="eyebrow">The offer</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What&apos;s included in a Seacoast preparedness plan.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🔍", heading: "Pre-season inspection", body: "Full property walk-through, vulnerability assessment, and written report covering every exposed system." },
              { icon: "🪵", heading: "Custom shutter and board fitting", body: "Pre-cut, pre-labeled boards or installed shutters ready to deploy. No last-minute sizing, no guesswork." },
              { icon: "🚚", heading: "Supply delivery", body: "Sandbags, plywood, tie-downs, and generator support delivered when a storm is named, before the stores are empty." },
              { icon: "📞", heading: "Priority emergency response", body: "Seacoast preparedness clients move to the front of the line when a storm enters the cone of uncertainty." },
              { icon: "🔧", heading: "Post-storm priority", body: "You're first on our damage assessment list after the storm passes. No waiting behind walk-in requests." },
            ].map((item) => (
              <div key={item.heading} className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
                <span className="text-2xl" aria-hidden>{item.icon}</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{item.heading}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-cool-gray">
        <div className="container">
          <p className="eyebrow">The process</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">How it works: four steps, one season.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", heading: "Schedule a pre-season inspection", body: "We walk the full property, assess vulnerability, and produce a written report." },
              { step: "2", heading: "Custom-fit and document", body: "We custom-fit boards or shutters for every opening and photograph the property baseline." },
              { step: "3", heading: "Storm activation", body: "When a storm forms, we execute your prep plan on a priority schedule, before the phone lines fill up." },
              { step: "4", heading: "Post-storm priority queue", body: "You're first in line for damage assessment and repair. No competing with walk-in demand." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal font-heading text-lg font-bold text-white">{item.step}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{item.heading}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan tiers */}
      <section className="section bg-warm-white">
        <div className="container">
          <p className="eyebrow">Plan options</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Choose the right level of coverage.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Pricing is customized to your property. Request a quote and we&apos;ll walk through the right plan for your home or portfolio.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                tier: "Basic Preparedness",
                includes: ["Pre-season inspection", "Custom-fit boards for all openings", "Written vulnerability report", "Post-storm priority queue"],
              },
              {
                tier: "Full Preparedness",
                includes: ["Everything in Basic", "Permanent shutter installation", "Supply delivery on storm activation", "Priority emergency response contract"],
                featured: true,
              },
              {
                tier: "HOA and Multi-Property",
                includes: ["Custom scope for common areas and units", "Community-wide boarding plan", "Dedicated response coordinator", "Volume pricing available"],
              },
            ].map((plan) => (
              <div key={plan.tier} className={`rounded-2xl border p-6 ${plan.featured ? "border-teal bg-teal/5 shadow-soft" : "border-navy/10 bg-white shadow-sm"}`}>
                {plan.featured && <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal">Most popular</p>}
                <h3 className="font-heading text-xl font-bold text-navy">{plan.tier}</h3>
                <ul className="mt-5 space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="mt-0.5 text-success" aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-block rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white hover:bg-copper">
                  Get a Plan Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cool-gray">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 mb-8 font-heading text-3xl font-bold text-navy">Storm Preparedness FAQ</h2>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      <StormLifecycle activeStage="before" />
      <CrossSellBlock heading="What pairs with storm preparedness" items={content.crossSellItems} />
      <CTASection variant="teal" heading="Hurricane season starts June 1. Get prepped now." subtext="Request a preparedness plan quote from Seacoast before the season starts and the boarding crews are booked." buttonLabel="Get a Preparedness Plan" />
    </>
  );
}

// ─── Storm Damage Repair rich layout ──────────────────────────────────────────
function StormDamageRepairLayout({ content }: { content: StormRichContent }) {
  const schemas = [
    serviceSchema({
      name: "Storm Damage Repair",
      description: content.heroSub,
      url: "/services/storm-damage-repair",
      serviceType: "Storm Damage Repair",
      areaServed: ["Southwest Florida"],
    }),
    faqSchema(content.faqs),
  ];

  const relatedProjects = projects
    .filter((p) => ["storm", "hurricane", "damage", "repair", "roofing", "roof"].some((kw) => p.serviceType.toLowerCase().includes(kw)))
    .slice(0, 4);

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Storm Damage Repair" }]} />
          <div className="mt-4 text-4xl" aria-hidden>⛈️</div>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">{content.heroH1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{content.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">{content.heroPrimary}</Link>
            {content.heroSecondary && (
              <a href="tel:+19415005431" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy">
                {content.heroSecondary}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Hero image placeholder */}
      <div className="container py-8">
        <ImagePlaceholder label="Seacoast inspector documenting storm damage on a residential roof. Drone and photo documentation in progress." ratio="16/9" tone="navy" />
      </div>

      {/* Trust bar */}
      <section className="section bg-warm-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { label: "Licensed and Insured", body: "Every repair is performed by licensed contractors with full insurance coverage across Southwest Florida." },
            { label: "Hundreds of Claims Navigated", body: "Seacoast has supported homeowners through hundreds of insurance claims across Southwest Florida: documentation, adjuster coordination, and repairs." },
            { label: "All Six Counties Served", body: "Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier. One call covers the region." },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="eyebrow">{card.label}</p>
              <p className="mt-3 text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* We Handle the Claim */}
      <section className="section bg-cool-gray">
        <div className="container">
          <p className="eyebrow">The process</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">We handle the claim. You handle your life.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            After a storm, most homeowners face two hard jobs at once: managing displacement and managing an insurance claim.
            Seacoast takes the second job off your plate entirely.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", icon: "📸", heading: "Damage documentation", body: "Full photo log, drone footage, and written scope-of-loss assessment. Everything your adjuster needs from day one." },
              { step: "2", icon: "📋", heading: "Adjuster coordination", body: "We communicate directly with your adjuster, provide scope reports, and stay aligned on the approved claim through every revision." },
              { step: "3", icon: "⚖️", heading: "Claim support", body: "If your claim is disputed or denied, we document supplemental evidence and work with licensed public adjusters and attorneys who specialize in Florida storm disputes." },
              { step: "4", icon: "🔨", heading: "Full repair", body: "Once the claim is approved, Seacoast handles the complete repair: roofing, siding, gutters, windows, and every affected system, to final walkthrough." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="text-3xl" aria-hidden>{item.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{item.heading}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record callout */}
      <section className="section bg-navy text-white">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow text-teal/80">Track record</p>
              <h2 className="mt-2 font-heading text-3xl font-bold">
                Hundreds of insurance claims navigated across Southwest Florida.
              </h2>
              <p className="mt-4 text-white/80">
                Seacoast has guided homeowners and property managers through the full insurance repair cycle:
                initial assessment, adjuster review, scope negotiation, and final sign-off.
                We know what adjusters need, what documentation holds up, and what language gets claims approved.
              </p>
              <Link href="/contact" className="mt-6 inline-block rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">
                Get a Damage Assessment
              </Link>
            </div>
            <ImagePlaceholder label="Seacoast completed storm repair. New roof installed after hurricane damage on a residential property in Southwest Florida." ratio="4/3" tone="steel" />
          </div>
        </div>
      </section>

      {/* What if claim is denied */}
      <section className="section bg-warm-white">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="eyebrow">Claims support</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy">What if my claim is denied?</h2>
            <p className="mt-4 text-text-secondary">
              Florida storm claims are frequently disputed or underpaid. If your claim is denied or the payout doesn&apos;t
              cover the full scope of damage, Seacoast can provide additional documentation and work alongside
              licensed public adjusters and attorneys who specialize in Florida storm claim appeals.
              We&apos;ve been through this process many times and know how to build the evidentiary record needed to reopen and win a disputed claim.
            </p>
            <Link href="/contact" className="mt-6 inline-block font-bold text-teal hover:underline">Talk to us about your claim →</Link>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-cool-gray">
          <div className="container">
            <p className="eyebrow">In the field</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Recent repair and roofing projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-teal hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-warm-white">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 mb-8 font-heading text-3xl font-bold text-navy">Storm Damage Repair FAQ</h2>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      <StormLifecycle activeStage="after" />
      <CrossSellBlock heading="What pairs with storm damage repair" items={content.crossSellItems} />
      <CTASection variant="navy" heading="Storm damage? Don't wait on the assessment." subtext="The sooner damage is documented, the stronger your insurance claim. Call or request an assessment now." buttonLabel="Get a Damage Assessment" />
    </>
  );
}

// ─── Generic service layout (all non-storm services) ─────────────────────────
function GenericServiceLayout({ params }: Props) {
  const service = getServiceBySlug(params.slug)!;
  const keywords = slugToServiceTypeKeywords[params.slug] ?? [params.slug.split("-")[0]];
  const relatedProjects = projects
    .filter((p) => keywords.some((kw) => p.serviceType.toLowerCase().includes(kw)))
    .slice(0, 4);
  const faqs = serviceFaqs[params.slug] ?? [];

  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} />
          <div className="mt-4 text-4xl" aria-hidden>{service.icon}</div>
          <h1 className="mt-4 font-heading text-5xl font-bold">{service.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{service.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">Get a Free Quote</Link>
            <Link href="/our-work" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy">See Project Videos</Link>
          </div>
        </div>
      </section>

      <section className="section bg-warm-white">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Licensed and Insured</p>
            <p className="mt-3 text-text-secondary">Every project is performed by licensed contractors with full insurance coverage.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">40+ Years Experience</p>
            <p className="mt-3 text-text-secondary">Four decades of Southwest Florida project work across residential, commercial, and multi-family.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Financing Available</p>
            <p className="mt-3 text-text-secondary">Flexible financing options available. Ask us about payment plans when you request your quote.</p>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section">
          <div className="container">
            <p className="eyebrow">In the field</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Recent {service.name} projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-teal hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section bg-cool-gray">
          <div className="container max-w-3xl">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy mb-8">{service.name} FAQ</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      )}

      <CTASection variant="teal" heading={`Ready to discuss your ${service.name.toLowerCase()} project?`} />
    </>
  );
}

// ─── Page entry point ─────────────────────────────────────────────────────────
export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const rich = stormContent[params.slug];

  // Emergency response: phone-first layout
  if (rich?.variant === "emergency") return <EmergencyResponseLayout content={rich} />;

  // Storm preparedness: full rich layout per strategy §3.1
  if (params.slug === "storm-preparedness" && rich) return <StormPrepLayout content={rich} />;

  // Storm damage repair: insurance-focused rich layout per strategy §3.3
  if (params.slug === "storm-damage-repair" && rich) return <StormDamageRepairLayout content={rich} />;

  // All other services: generic template
  return <GenericServiceLayout params={params} />;
}
