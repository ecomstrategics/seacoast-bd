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
import Image from "next/image";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";
import { seoDescription, seoTitle } from "@/lib/seo";

type SlugParams = { slug: string };
type Props = { params: Promise<SlugParams> };

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
    heroH1: "Storm Preparation for Southwest Florida Properties",
    heroSub:
      "Plan before a storm approaches. Seacoast can inspect openings, review shutters or boards, and document activation terms for your property.",
    heroPrimary: "Get a Preparedness Plan",
    heroSecondary: "See What's Included",
    stormLifecycleStage: "before",
    crossSellItems: [
      {
        title: "Storm Damage Repair",
        href: "/services/storm-damage-repair",
        blurb:
          "Seacoast can document visible damage, prepare a repair estimate, and complete the agreed roof and exterior repairs.",
        icon: "🔨",
      },
      {
        title: "Engineered Container Structures",
        href: "/containers/storm-shelters",
        blurb:
          "Explore a container-based structure with site-specific engineering, permitting, anchoring, and opening requirements.",
        icon: "🛡️",
      },
      {
        title: "Impact Windows and Doors",
        href: "/services/windows-and-doors",
        blurb:
          "Review impact-rated window and door options for your property. Ask your insurer separately about any policy credits.",
        icon: "🚪",
      },
    ],
    faqs: [
      {
        question: "When should I sign up for storm preparedness?",
        answer:
          "Plan before hurricane season or well before a specific storm approaches. Lead times and storm-response capacity depend on the property, materials, weather, and crew availability.",
      },
      {
        question: "Do you offer this for commercial properties and HOAs?",
        answer:
          "Yes. Seacoast works with HOA managers and commercial property owners across Southwest Florida. Contact us for multi-property and community-scale preparedness plans.",
      },
      {
        question: "What if I already have shutters?",
        answer:
          "We can inventory the shutters, inspect their visible condition and fit, and identify missing or damaged components. Any code or engineering review is confirmed in the written scope.",
      },
      {
        question: "Does my insurance discount a storm preparedness plan?",
        answer:
          "Discounts and documentation requirements are set by your insurer. Ask the carrier whether it needs a separate wind-mitigation inspection and what improvements may qualify for credits.",
      },
      {
        question: "What happens if no storm hits that season?",
        answer:
          "The pre-season review still gives you an inventory of openings, visible shutter or board conditions, and any preparation items included in your written scope.",
      },
    ],
  },

  "emergency-response": {
    variant: "emergency",
    heroH1: "Storm Emergency? Call Now.",
    heroSub:
      "Call to confirm current storm-response availability for boarding, shuttering, temporary protection, and damage stabilization in Southwest Florida.",
    heroPrimary: "Call Now",
    stormLifecycleStage: "during",
    crossSellItems: [
      {
        title: "Storm Damage Repair",
        href: "/services/storm-damage-repair",
        blurb:
          "Once conditions are safe, Seacoast can document visible damage, prepare a repair estimate, and complete agreed repairs.",
        icon: "🔨",
      },
      {
        title: "Storm Preparedness",
        href: "/services/storm-preparedness",
        blurb:
          "Review openings, materials, and activation terms before the next hurricane season.",
        icon: "🛡️",
      },
      {
        title: "Engineered Container Structures",
        href: "/containers/storm-shelters",
        blurb:
          "Explore a container-based structure subject to site-specific engineering, permitting, anchoring, and opening requirements.",
        icon: "🏗️",
      },
    ],
    faqs: [],
  },

  "storm-damage-repair": {
    heroH1: "Storm Damage Repair With a Clear Plan From the Start",
    heroSub:
      "Seacoast photographs visible damage, explains what needs repair, prepares a written estimate, and coordinates the agreed interior, exterior, roofing, or major-rehabilitation scope through the final walkthrough.",
    heroPrimary: "Get a Damage Assessment",
    heroSecondary: "Call (941) 500-5431",
    stormLifecycleStage: "after",
    crossSellItems: [
      {
        title: "Roofing",
        href: "/services/roofing",
        blurb:
          "Seacoast can scope roof repair or replacement using tile, metal, shingle, or low-slope roofing options appropriate to the property.",
        icon: "🏠",
      },
      {
        title: "Storm Preparedness",
        href: "/services/storm-preparedness",
        blurb:
          "Review boarding, shuttering, materials, and activation terms before the next hurricane season.",
        icon: "🛡️",
      },
      {
        title: "Emergency Response",
        href: "/services/emergency-response",
        blurb:
          "Call to confirm current availability for temporary protection or damage stabilization when conditions are safe.",
        icon: "🚨",
      },
      {
        title: "Thermal Drone Inspections",
        href: "/services/thermal-drone-inspections",
        blurb:
          "Use aerial visible and thermal imaging to document roof-surface temperature patterns and prioritize closer inspection areas.",
        icon: "🚁",
      },
    ],
    faqs: [
      {
        question: "How quickly can you respond after a storm?",
        answer:
          "Contact us as soon as it is safe. Scheduling depends on road access, weather, property conditions, crew availability, and the severity of active requests.",
      },
      {
        question: "Do you help with insurance documentation?",
        answer:
          "Yes. Within the contracted scope, we can provide photos, observed-condition notes, and a construction repair estimate. Your insurer decides coverage and claim payment.",
      },
      {
        question: "What if my insurance claim is denied?",
        answer:
          "Seacoast can provide construction documentation and an estimate for the work it proposes. A licensed public adjuster or attorney should advise you on coverage disputes, settlement, supplements, or appeals.",
      },
      {
        question: "Will you work directly with my insurance company?",
        answer:
          "We can explain our construction scope and provide requested repair documentation. The property owner, a licensed public adjuster, or an attorney must handle claim negotiation, coverage, and settlement decisions.",
      },
      {
        question: "Do you handle partial damage or just full replacements?",
        answer:
          "Both. The repair recommendation depends on the observed condition, applicable requirements, and the written scope you approve.",
      },
      {
        question: "Do I need multiple contractor bids for my insurance claim?",
        answer:
          "Requirements vary by policy and insurer. Seacoast can provide its construction scope and estimate; confirm any bidding or claim-submission requirements directly with your insurer.",
      },
    ],
  },
};

// ─── Generic per-service FAQ data (existing services) ─────────────────────────
const serviceFaqs: Record<string, FAQItem[]> = {
  "roof-certification-inspection": [
    { question: "Who needs a roof certification inspection?", answer: "Homeowners buying, selling, renewing insurance, or responding to a carrier request often need documentation of roof age, condition, and estimated remaining useful life." },
    { question: "What does the roof certification report include?", answer: "The requested report can include property details, inspection date, roof photos, visible damage or repair issues, estimated remaining service life, inspected components, notes, and provider information." },
    { question: "How quickly can I get the report?", answer: "Turnaround depends on scheduling, property access, roof conditions, and the documentation requested. We confirm timing when the inspection is booked." },
    { question: "What happens if damage is found?", answer: "The inspection documents roof condition rather than giving a simple pass or fail. If repairs are recommended, Seacoast can provide a separate construction scope and quote." },
  ],
  roofing: [
    { question: "What roofing materials do you work with?", answer: "We install and repair tile, metal (standing seam, R-panel, stone-coated steel), TPO/flat, shingle, and slate-profile systems." },
    { question: "Do you handle storm damage claims?", answer: "We document visible damage, prepare a construction repair estimate, and complete agreed repairs. The property owner, a licensed public adjuster, or an attorney handles claim negotiation and coverage questions." },
    { question: "How long does a roof replacement take?", answer: "Timing depends on roof size and material, permitting, product availability, weather, and site conditions. We provide a project-specific schedule with the written scope." },
    { question: "What is Seacoast's GAF contractor designation?", answer: "Seacoast Building & Design is a GAF GoldElite™ Commercial Contractor. GAF reviews this commercial contractor designation annually. You can confirm Seacoast's current status on its official GAF contractor profile." },
    { question: "Does every GAF commercial roof qualify for the Diamond Pledge™ NDL Roof Guarantee?", answer: "No. For qualifying GAF commercial roofing systems, Seacoast can offer the Diamond Pledge™ NDL Roof Guarantee for terms up to 25 years. Eligibility, term, system requirements, inspections, coverage, and restrictions are confirmed for the specific roof and governed by GAF's applicable guarantee documents." },
  ],
  "gutters-fascia-soffits": [
    { question: "What gutter styles do you offer?", answer: "We install seamless K-style and half-round gutters in aluminum and copper, sized for Southwest Florida rainfall." },
    { question: "Can you replace just the fascia or soffits?", answer: "Yes. We can replace individual components or the full system depending on the scope of damage or renovation." },
  ],
  siding: [
    { question: "Do you install Hardie board siding?", answer: "James Hardie fiber-cement siding is one option. Product selection depends on approved specifications, exposure, and the finish you want for the property." },
    { question: "Can siding improve energy efficiency?", answer: "Siding work can be coordinated with insulation and water-management improvements. Actual energy performance depends on the full wall assembly and building conditions." },
  ],
  "windows-and-doors": [
    { question: "Do you install impact-resistant windows?", answer: "We can quote impact-rated window and door products. Applicable approvals, design pressures, installation details, and permits are confirmed for the property." },
    { question: "How long does window replacement take?", answer: "Timing depends on the number and type of openings, product lead times, permitting, and site conditions. We provide a project-specific schedule with the quote." },
  ],
  "exterior-renovations": [
    { question: "What counts as an exterior renovation?", answer: "Anything outside the building envelope: structural repairs, paint, trim, cladding, walkways, lighting, and more." },
    { question: "Do you handle both residential and commercial?", answer: "Yes. Our team works across residential, commercial, and multi-family properties throughout Southwest Florida." },
  ],
  "exterior-cleaning-services": [
    { question: "What exterior cleaning services do you offer?", answer: "Seacoast handles soft washing, pressure washing, surface cleaning, siding cleaning, roof cleaning, concrete and driveway cleaning, gutter cleaning, patio cleaning, fence cleaning, and solar panel cleaning." },
    { question: "Do you clean both homes and commercial buildings?", answer: "Yes. We clean residential and commercial properties throughout Southwest Florida using the right pressure, cleaning agents, and equipment for each surface." },
    { question: "Why not pressure wash everything at high pressure?", answer: "Some surfaces need low-pressure soft washing to avoid damage. We choose the method based on the material: roofing, siding, brick, concrete, gutters, solar panels, patios, and fencing all require different handling." },
  ],
  "solar-services": [
    { question: "What solar services does Seacoast offer?", answer: "Seacoast's solar team supports solar panel systems, inverters, battery storage, EV charging stations, and solar system maintenance." },
    { question: "Can solar help lower electric bills?", answer: "Solar may offset some grid electricity use. Output and savings depend on system design, utility rules, rates, usage, shading, weather, and equipment performance." },
    { question: "Do you handle EV charging?", answer: "Yes. EV charging can be scoped with solar panels, storage, or a standalone electrical upgrade depending on your vehicle and charging needs." },
  ],
  "pool-enclosures-lanais": [
    { question: "Do you build new enclosures or just repair existing ones?", answer: "Both. We design and build new pool enclosures and lanais, and repair or re-screen existing structures." },
    { question: "What happens if a screen enclosure is damaged in a storm?", answer: "We can assess visible damage, prepare a construction repair estimate, and scope repair or rebuilding subject to permitting and applicable requirements." },
  ],
  "room-additions": [
    { question: "Do you help with permits and inspections?", answer: "Permitting responsibilities depend on the project and jurisdiction. The written proposal identifies the permits and inspections Seacoast will coordinate and anything the owner or design team must provide." },
    { question: "What types of additions do you build?", answer: "Sunrooms, enclosed patios, garage conversions, carports, and traditional room additions for residential and commercial properties." },
  ],
};

const slugToServiceTypeKeywords: Record<string, string[]> = {
  "roof-certification-inspection": ["roofing", "roof"],
  roofing: ["roofing", "roof"],
  "gutters-fascia-soffits": ["gutters", "fascia", "soffits"],
  siding: ["siding", "hardie"],
  "windows-and-doors": ["window", "door"],
  "exterior-renovations": ["exterior", "renovation"],
  "exterior-cleaning-services": ["exterior", "cleaning", "pressure", "wash"],
  "solar-services": ["solar", "energy"],
  "pool-enclosures-lanais": ["enclosure", "lanai", "pool"],
  "room-additions": ["addition", "carport"],
  "storm-damage-repair": ["storm", "hurricane", "damage", "repair"],
  "storm-preparedness": ["storm", "hurricane"],
  "emergency-response": ["storm", "hurricane"],
};

const serviceMetadata: Record<string, { title: string; description: string }> = {
  "roof-certification-inspection": {
    title: "Roof Certification Inspections in Southwest Florida",
    description: "Roof-condition inspections with photos, observed issues, and estimated remaining service life for Florida insurance, sale, and maintenance needs.",
  },
  roofing: {
    title: "Residential & Commercial Roofing in Southwest Florida",
    description: "Roof repair and replacement for shingle, tile, metal, and flat-roof systems across Southwest Florida homes, businesses, condos, and communities.",
  },
  "gutters-fascia-soffits": {
    title: "Gutter, Fascia & Soffit Services in Southwest Florida",
    description: "Gutter, fascia, and soffit installation and repair for Florida homes, commercial buildings, condominiums, and HOA communities.",
  },
  siding: {
    title: "Siding Installation & Repair in Southwest Florida",
    description: "Siding installation and repair, including Hardie siding, for Southwest Florida homes, commercial buildings, and multi-family properties.",
  },
  "windows-and-doors": {
    title: "Impact Windows & Exterior Doors in Southwest Florida",
    description: "Window and exterior-door replacement, including impact-rated options, for homes and commercial properties across Southwest Florida.",
  },
  "exterior-renovations": {
    title: "Exterior Renovation Contractor in Southwest Florida",
    description: "Coordinate roofing, siding, trim, paint, and structural exterior improvements under one construction scope in Southwest Florida.",
  },
  "exterior-cleaning-services": {
    title: "Exterior & Roof Cleaning in Southwest Florida",
    description: "Soft washing and pressure cleaning for roofs, siding, concrete, gutters, patios, fences, and solar panels across Southwest Florida.",
  },
  "solar-services": {
    title: "Solar, Battery & EV Charging Services in Southwest Florida",
    description: "Solar panels, inverters, battery storage, EV charging, and maintenance options for Southwest Florida homes and commercial properties.",
  },
  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning in Southwest Florida",
    description: "One-time and recurring solar-panel cleaning for Florida dirt, salt, pollen, and debris, with methods selected for the roof and array.",
  },
  "whole-house-battery-systems": {
    title: "Home Battery Backup Systems in Southwest Florida",
    description: "Battery-backup systems sized around the circuits you want to support, with standalone and solar-paired options for Florida properties.",
  },
  "pool-enclosures-lanais": {
    title: "Pool Enclosures & Lanais in Southwest Florida",
    description: "New screen enclosures and lanais, plus repair and re-screening for existing outdoor structures across Southwest Florida.",
  },
  "room-additions": {
    title: "Room Additions in Southwest Florida",
    description: "Room additions and enclosed spaces planned around your existing Florida structure, property conditions, and permitting requirements.",
  },
  "storm-damage-repair": {
    title: "Storm Damage Repair in Southwest Florida",
    description: "Inspection, documentation, stabilization, and coordinated interior or exterior rehabilitation after Florida wind, rain, or storm-surge damage.",
  },
  "storm-preparedness": {
    title: "Storm Preparedness for Southwest Florida Properties",
    description: "Pre-season property inspections and plans for shutters, boards, materials, and storm activation across Southwest Florida.",
  },
  "emergency-response": {
    title: "Emergency Storm Response in Southwest Florida",
    description: "Emergency boarding, tarping, and damage stabilization when conditions and crew availability allow. Call Seacoast to confirm local response.",
  },
  "metal-buildings": {
    title: "Metal Buildings & Pole Barns in Southwest Florida",
    description: "Pole barns, barndominiums, and metal buildings with insulation and metal-panel roofing options for residential and commercial sites.",
  },
  carports: {
    title: "Carports & Metal Roof Structures in Southwest Florida",
    description: "New carport structures and repairs with insulated-panel and metal-roof options for Florida homes, businesses, and communities.",
  },
  "thermal-drone-inspections": {
    title: "Thermal Drone Roof Inspections in Southwest Florida",
    description: "Thermal and visible drone imaging documents roof-surface temperature patterns and helps prioritize areas for closer inspection.",
  },
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const tailoredMetadata = serviceMetadata[slug];
  if (tailoredMetadata) return {
    title: seoTitle(tailoredMetadata.title),
    description: seoDescription(tailoredMetadata.description),
  };
  const rich = stormContent[slug];
  return {
    title: seoTitle(service.name),
    description: seoDescription(rich ? rich.heroSub : service.shortDescription),
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
          <p className="eyebrow mt-2 text-white/70">Storm-response availability</p>
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
            <a href="sms:+19415005431" className="rounded-full border border-white/30 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-storm">Text Us</a>
            <Link href="/contact?service=emergency-response" className="rounded-full border border-white/30 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-storm">Request Emergency Quote</Link>
          </div>
        </div>
      </section>

      {/* What we can do right now */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">How we can help</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Call us to see what storm help is available now.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: "🪵", heading: "Board and Shutter", body: "Boarding or shutter deployment based on safe access, available materials, and crew capacity." },
              { icon: "🪣", heading: "Temporary Protection", body: "Available tarps, plywood, and related materials can be scoped for the property when access is safe." },
              { icon: "🔒", heading: "Damage Stabilization", body: "Temporary roof covering or board-up work may be available after conditions are safe enough to inspect the property." },
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
          <p className="eyebrow text-orange/80">Where we can respond</p>
          <h2 className="mt-2 font-heading text-2xl font-bold">Tell us where the property is, and we will confirm whether we can help.</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Seacoast serves properties across Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties.
            Storm-response availability varies with weather, road access, demand, and crew capacity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Hillsborough", "Manatee", "Sarasota", "Charlotte", "Lee", "Collier"].map((county) => (
              <span key={county} className="rounded-full border border-orange/40 px-4 py-2 text-sm font-semibold text-orange">{county} County</span>
            ))}
          </div>
        </div>
      </section>

      {/* What to do right now — utility checklist */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-2xl">
          <p className="eyebrow">Before the storm</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Five practical safety steps.</h2>
          <ol className="mt-8 space-y-4">
            {[
              "Follow instructions from local emergency officials and evacuate when ordered. Contractor services are not a substitute for an evacuation plan.",
              "If it is safe and time allows, bring loose outdoor furniture, pots, and umbrellas inside.",
              "Charge phones and backup batteries, use flashlights instead of candles, and check carbon-monoxide alarms.",
              "Keep identification, insurance information, medications, and other essential documents together in a dry, accessible place.",
              "Store drinking water in clean containers. Water collected in a bathtub should be reserved for washing or flushing, not drinking.",
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
      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="rounded-2xl bg-navy p-8 text-white md:p-12">
            <p className="eyebrow text-orange/80">After the storm</p>
            <h2 className="mt-2 font-heading text-3xl font-bold">Once conditions are safe, start with documentation.</h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Seacoast can document visible damage, prepare a construction repair estimate, and complete the
              agreed roof and exterior work. Your insurer decides coverage and payment.
            </p>
            <Link href="/services/storm-damage-repair" className="mt-6 inline-block rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">
              Learn About Storm Damage Repair →
            </Link>
          </div>
        </div>
      </section>

      <StormLifecycle activeStage="during" />
      <CrossSellBlock heading="Before the next storm" items={content.crossSellItems} />
      <CTASection variant="orange" heading="Need storm-response help?" subtext="Call (941) 500-5431 or use the form to confirm current availability and safe-access conditions." buttonLabel="Request Storm-Response Help" buttonHref="/contact?service=emergency-response" />
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
            <Link href="/contact?service=storm-preparedness" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">{content.heroPrimary}</Link>
            {content.heroSecondary && (
              <a href="#whats-included" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">{content.heroSecondary}</a>
            )}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="container py-8">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image src="/images/services/storm-preparedness-hero.webp" alt="Representative view of storm shutters being installed on a Southwest Florida home" fill className="object-cover" sizes="100vw" />
        </div>
      </div>

      {/* Trust bar */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { label: "Florida Certified Contractor", body: "Seacoast Building & Design is a Florida certified general and roofing contractor." },
            { label: "Residential and Commercial", body: "Preparedness scopes can be reviewed for homes, businesses, associations, and managed properties." },
            { label: "Written Scope", body: "Materials, activation terms, access needs, and response limitations are documented before work begins." },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="eyebrow">{card.label}</p>
              <p className="mt-3 text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why prep matters */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Plan ahead</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Why prep matters before the season starts.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Preparing early creates time to measure openings, inspect existing protection, identify missing materials,
            and agree on what Seacoast will do if a storm approaches.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: "📋", heading: "Measure the openings", body: "Document each opening and the protection already on site before time and access become limited." },
              { icon: "📅", heading: "Inventory materials", body: "Identify missing boards, shutters, fasteners, labels, and storage needs before a storm is nearby." },
              { icon: "📄", heading: "Confirm activation terms", body: "Put the requested work, response limitations, access requirements, and material responsibilities in writing." },
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
      <section id="whats-included" className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Plan details</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What&apos;s included in a Seacoast preparedness plan.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🔍", heading: "Property review", body: "Walk the property, inventory openings, and note visible conditions relevant to the requested preparation work." },
              { icon: "🪵", heading: "Board or shutter scope", body: "Measure and label the openings included in the written scope and identify the materials required." },
              { icon: "🚚", heading: "Material planning", body: "Confirm which materials are stored on site, supplied by the owner, or included by Seacoast." },
              { icon: "📞", heading: "Activation terms", body: "Document how activation is requested and the weather, access, material, and capacity limits that apply." },
              { icon: "🔧", heading: "Post-storm assessment", body: "If included and conditions are safe, schedule an assessment based on current access and crew availability." },
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
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">The process</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">How it works: four steps, one season.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", heading: "Review the property", body: "We inventory the openings and visible conditions included in the requested scope." },
              { step: "2", heading: "Define materials", body: "We identify the boards, shutters, labels, fasteners, and storage responsibilities for the plan." },
              { step: "3", heading: "Confirm activation", body: "The agreement documents how to request service and the conditions that can limit response." },
              { step: "4", heading: "Reassess after the storm", body: "When access is safe, Seacoast can document visible damage and prepare a repair scope." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-deep font-heading text-lg font-bold text-white">{item.step}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{item.heading}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan scope */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Your property, your plan</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">A plan built around the property and the work requested.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Seacoast prepares a written quote after reviewing the openings, existing protection, material needs,
            storage and access conditions, and requested activation work. Your quote will spell out what is included,
            what you provide, and what Seacoast can do when a storm is approaching.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { heading: "Opening inventory", body: "Windows, doors, shutters, boards, and visible gaps included in the review." },
              { heading: "Material responsibilities", body: "Who supplies, stores, transports, installs, and removes each item." },
              { heading: "Activation process", body: "How service is requested and when access, weather, or capacity may prevent work." },
              { heading: "Property-specific price", body: "A quote based on measured quantities, materials, access, and the agreed scope." },
            ].map((item) => (
              <div key={item.heading} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{item.heading}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
          <Link href="/contact?service=storm-preparedness" className="mt-8 inline-block rounded-full bg-orange-deep px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-copper">
            Get a Plan Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 mb-8 font-heading text-3xl font-bold text-navy">Storm Preparedness FAQ</h2>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      <StormLifecycle activeStage="before" />
      <CrossSellBlock heading="Related services" items={content.crossSellItems} />
      <CTASection variant="orange" heading="Plan your property preparation before a storm approaches." subtext="Request a property review and a written preparedness scope from Seacoast." buttonLabel="Get a Preparedness Plan" buttonHref="/contact?service=storm-preparedness" />
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
    .sort((a, b) => Number(!/storm|hurricane/i.test(a.serviceType)) - Number(!/storm|hurricane/i.test(b.serviceType)))
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
            <Link href="/contact?service=storm-damage-repair" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">{content.heroPrimary}</Link>
            {content.heroSecondary && (
              <a href="tel:+19415005431" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">
                {content.heroSecondary}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="container py-8">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image src="/images/services/storm-damage-repair-hero.webp" alt="Representative view of a roof inspection and storm-damage documentation" fill className="object-cover" sizes="100vw" />
        </div>
      </div>

      {/* Trust bar */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { label: "Florida Certified Contractor", body: "Seacoast Building & Design is a Florida certified general and roofing contractor." },
            { label: "Residential, Commercial, and Community", body: "Repair and rehabilitation scopes are available for homes, businesses, associations, amenities, and managed properties." },
            { label: "A Clear Repair Plan", body: "You receive a written explanation of the conditions we saw, the work we recommend, and the proposed price." },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="eyebrow">{card.label}</p>
              <p className="mt-3 text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Damage assessment and repair process */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">The process</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">See what happened, understand the options, and move into repairs.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Seacoast records the visible damage, prepares a construction estimate, explains the proposed work,
            and completes the interior, exterior, roofing, or multi-trade rehabilitation you authorize.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", icon: "📸", heading: "Photograph the damage", body: "Photos and written notes create a clear record of what we can see during the assessment." },
              { step: "2", icon: "📋", heading: "Build the repair estimate", body: "We outline the recommended work and price based on the conditions we observed." },
              { step: "3", icon: "🧾", heading: "Talk through the scope", body: "We explain our construction methods and estimate to you or your insurer while coverage decisions stay with the appropriate claim professionals." },
              { step: "4", icon: "🔨", heading: "Complete the agreed work", body: "Seacoast carries out the authorized repair or rehabilitation scope, subject to permits, materials, weather, and site conditions." },
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
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow text-orange/80">A clear repair record</p>
              <h2 className="mt-2 font-heading text-3xl font-bold">
                Photos and a written estimate for the conversations ahead.
              </h2>
              <p className="mt-4 text-white/80">
                Seacoast can provide photos, observed-condition notes, and its construction estimate for the proposed work.
                Your insurer decides coverage and payment; a licensed public adjuster or attorney can advise you on claim negotiation or disputes.
              </p>
              <Link href="/contact?service=storm-damage-repair" className="mt-6 inline-block rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">
                Get a Damage Assessment
              </Link>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/services/storm-damage-repair-completed.webp" alt="Representative view of a completed residential roof repair in Southwest Florida" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What if claim is denied */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="eyebrow">Coverage questions</p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-navy">What if my claim is denied?</h2>
            <p className="mt-4 text-text-secondary">
              Seacoast can provide construction documentation and an estimate for the work it proposes. We do not negotiate
              insurance coverage or settlement on behalf of the property owner. If you need claim representation or advice about
              a denial, supplement, or appeal, speak with your insurer, a Florida-licensed public adjuster, or an attorney.
            </p>
            <Link href="/contact?service=storm-damage-repair" className="mt-6 inline-block font-bold text-orange hover:underline">Request a construction assessment →</Link>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section dark-band bg-navy-deep">
          <div className="container">
            <p className="eyebrow">Project examples</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Storm restoration, repair, and roofing projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-orange hover:underline">View all project examples →</Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 mb-8 font-heading text-3xl font-bold text-navy">Storm Damage Repair FAQ</h2>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      <StormLifecycle activeStage="after" />
      <CrossSellBlock heading="Related services" items={content.crossSellItems} />
      <CTASection variant="navy" heading="Need a storm-damage construction assessment?" subtext="Start with a clear record of the visible damage and the repairs Seacoast recommends." buttonLabel="Get a Damage Assessment" buttonHref="/contact?service=storm-damage-repair" />
    </>
  );
}

// ─── Generic service layout (all non-storm services) ─────────────────────────
// Cross-sell pairings for the generic (non-storm) services, per strategy §6.2.
const genericCrossSell: Record<string, CrossSellItem[]> = {
  "roof-certification-inspection": [
    { title: "Roofing", href: "/services/roofing", blurb: "If the inspection finds repairs or replacement needs, Seacoast can scope and complete the roof work.", icon: "🏠" },
    { title: "Storm Damage Repair", href: "/services/storm-damage-repair", blurb: "Document visible storm-related roof conditions and get a construction repair estimate.", icon: "⛈️" },
    { title: "Thermal Drone Inspections", href: "/services/thermal-drone-inspections", blurb: "Add aerial visible and thermal imaging when surface-temperature patterns may help prioritize closer inspection areas.", icon: "🚁" },
  ],
  roofing: [
    { title: "Gutters, Fascia & Soffits", href: "/services/gutters-fascia-soffits", blurb: "Finish the roof system with water management built for Southwest Florida rainfall.", icon: "🌧️" },
    { title: "Storm Damage Repair", href: "/services/storm-damage-repair", blurb: "Document visible roof damage and get a construction repair estimate after a storm.", icon: "⛈️" },
    { title: "Thermal Drone Inspections", href: "/services/thermal-drone-inspections", blurb: "Use aerial thermal and visible imaging to help prioritize roof areas for closer review.", icon: "🚁" },
  ],
  "gutters-fascia-soffits": [
    { title: "Roofing", href: "/services/roofing", blurb: "Coordinate roof-edge and water-management work in one construction scope.", icon: "🏠" },
    { title: "Siding", href: "/services/siding", blurb: "Pair new trim and fascia with durable siding for a complete exterior refresh.", icon: "🧱" },
    { title: "Exterior Renovations", href: "/services/exterior-renovations", blurb: "Roll trim and water management into a full exterior renovation.", icon: "🛠️" },
  ],
  siding: [
    { title: "Roofing", href: "/services/roofing", blurb: "Coordinate roofing and siding selections for a unified exterior scope.", icon: "🏠" },
    { title: "Exterior Renovations", href: "/services/exterior-renovations", blurb: "Combine siding with a broader exterior transformation.", icon: "🛠️" },
    { title: "Container Guest Houses", href: "/containers/guest-houses", blurb: "We finish container guest houses with siding that matches your home.", icon: "🏡" },
  ],
  "windows-and-doors": [
    { title: "Roofing", href: "/services/roofing", blurb: "Coordinate window, door, and roofing work under a project-specific scope.", icon: "🏠" },
    { title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "Impact glazing is one layer of a full storm-preparedness plan.", icon: "🛡️" },
    { title: "Storm Damage Repair", href: "/services/storm-damage-repair", blurb: "Window or door damage after a storm? We document and repair it.", icon: "⛈️" },
  ],
  "exterior-renovations": [
    { title: "Roofing", href: "/services/roofing", blurb: "A new roof is often the anchor of a full exterior renovation.", icon: "🏠" },
    { title: "Siding", href: "/services/siding", blurb: "New siding transforms curb appeal alongside other exterior work.", icon: "🧱" },
    { title: "Room Additions", href: "/services/room-additions", blurb: "Review an addition and the related exterior updates as one coordinated project.", icon: "➕" },
  ],
  "exterior-cleaning-services": [
    { title: "Siding", href: "/services/siding", blurb: "Cleaning can restore curb appeal, while damaged or aging siding may need replacement.", icon: "🧱" },
    { title: "Gutters, Fascia & Soffits", href: "/services/gutters-fascia-soffits", blurb: "Pair gutter cleaning with repairs or replacement when the water-management system is failing.", icon: "🌧️" },
    { title: "Solar Panel Cleaning", href: "/services/solar-panel-cleaning", blurb: "Request a one-time or recurring cleaning scope based on array size and roof access.", icon: "🧼" },
  ],
  "solar-services": [
    { title: "Home Battery Backup", href: "/services/whole-house-battery-systems", blurb: "Evaluate battery capacity and the circuits you want available during a grid outage.", icon: "🔋" },
    { title: "Roof Certification Inspection", href: "/services/roof-certification-inspection", blurb: "Confirm roof condition before mounting panels or making a solar investment.", icon: "📋" },
    { title: "Solar Panel Cleaning", href: "/services/solar-panel-cleaning", blurb: "Request a one-time or recurring cleaning scope for the installed array.", icon: "🧼" },
  ],
  "pool-enclosures-lanais": [
    { title: "Exterior Renovations", href: "/services/exterior-renovations", blurb: "Tie outdoor living into a broader exterior upgrade.", icon: "🛠️" },
    { title: "Container Guest Houses", href: "/containers/guest-houses", blurb: "Expand outdoor living with a container guest house finished to match the lanai.", icon: "🏡" },
    { title: "Storm Damage Repair", href: "/services/storm-damage-repair", blurb: "Document visible enclosure damage and get a construction repair estimate.", icon: "⛈️" },
  ],
  "room-additions": [
    { title: "Container Guest Houses", href: "/containers/guest-houses", blurb: "Compare a traditional addition with a site- and permit-dependent container option.", icon: "🏡" },
    { title: "Exterior Renovations", href: "/services/exterior-renovations", blurb: "Match a new addition to the rest of your home's exterior.", icon: "🛠️" },
    { title: "Roofing", href: "/services/roofing", blurb: "Every addition needs a roof that ties into the existing structure.", icon: "🏠" },
  ],
};

// Service-specific hero images used as the hero background for matching services.
// Services without an entry keep the solid-navy hero.
const serviceHeroImages: Record<string, { src: string; alt: string }> = {
  roofing: {
    src: "/images/services/roofing-metal-clubhouse-aerial.webp",
    alt: "Representative aerial view of a Southwest Florida golf clubhouse with a dark standing-seam metal roof",
  },
  "roof-certification-inspection": {
    src: "/images/services/roof-certification-commercial-aerial.webp",
    alt: "Representative aerial inspection view of a commercial building with a white reflective flat roof in Southwest Florida",
  },
  "gutters-fascia-soffits": {
    src: "/images/services/gutters-fascia-tile-roof.webp",
    alt: "Representative view of dark aluminum gutters, fascia, and soffits on a tile-roof Florida home",
  },
  "exterior-renovations": {
    src: "/images/services/exterior-renovation-condo-carports.webp",
    alt: "Representative aerial view of a Southwest Florida condo community with tile roofing and white carport covers",
  },
  "pool-enclosures-lanais": {
    src: "/images/services/pool-enclosure-lanai.webp",
    alt: "Representative screened pool enclosure and lanai at a Southwest Florida home",
  },
  siding: {
    src: "/images/services/siding-hardie-board-batten.webp",
    alt: "Representative board-and-batten fiber-cement siding with a shake-style gable on a Southwest Florida waterfront home",
  },
  "solar-services": {
    src: "/images/services/solar-ave-maria-tile-roof.webp",
    alt: "Representative aerial view of black solar panels on a barrel-tile roof in Southwest Florida",
  },
  "windows-and-doors": {
    src: "/images/services/windows-and-doors-impact-install.webp",
    alt: "Representative installation of a large impact-rated sliding glass door at a stucco Southwest Florida home",
  },
  "exterior-cleaning-services": {
    src: "/images/services/exterior-cleaning-soft-wash.webp",
    alt: "Representative view of a worker soft-washing a stucco exterior and paver driveway in Southwest Florida",
  },
  "room-additions": {
    src: "/images/services/room-additions-sunroom-lanai.webp",
    alt: "Representative finished sunroom and lanai addition matched to a barrel-tile Southwest Florida home",
  },
};

// Specific options/types listed under each service, per Clear's Services Tab notes.
const serviceTypeLists: Record<string, { heading: string; items: string[] }[]> = {
  siding: [
    { heading: "Siding types we install", items: ["Metal siding", "Vinyl siding", "Hardboard siding", "Wood siding", "Synthetic siding"] },
  ],
  "windows-and-doors": [
    { heading: "Window materials", items: ["Aluminum and aluminum-clad", "Vinyl"] },
    { heading: "Window styles", items: ["Picture", "Casement", "Double-hung", "Single-hung", "Sliders"] },
    { heading: "Doors", items: ["French doors", "Entry doors with sidelights", "Exterior doors"] },
  ],
  "gutters-fascia-soffits": [
    { heading: "Fascia and soffit materials", items: ["Aluminum", "Plastic", "Stucco"] },
  ],
  "exterior-renovations": [
    { heading: "Exterior renovation services", items: ["Stucco", "Painting", "Pavers", "Concrete work", "Home additions", "Structural work", "Roof and structural framing"] },
  ],
  "metal-buildings": [
    { heading: "Building types", items: ["Pole barns", "Barndominiums", "Steel and metal structures"] },
    { heading: "Options", items: ["Insulated panels", "Metal panel roofs", "Residential", "Commercial"] },
  ],
  carports: [
    { heading: "What we build", items: ["New carport structures", "Carport repairs"] },
    { heading: "Options", items: ["Insulated panels", "Metal panel roofs", "Residential", "Commercial"] },
  ],
  "thermal-drone-inspections": [
    { heading: "What we inspect", items: ["Roof temperature patterns", "Areas that may warrant further moisture investigation", "Possible insulation or energy-loss patterns", "Visible storm-related conditions"] },
    { heading: "Property types", items: ["Residential", "Commercial"] },
  ],
};

function GenericServiceLayout({ params }: { params: SlugParams }) {
  const service = getServiceBySlug(params.slug)!;
  const heroImage = serviceHeroImages[params.slug];
  const keywords = slugToServiceTypeKeywords[params.slug] ?? [params.slug.split("-")[0]];
  const relatedProjects = projects
    .filter((p) => keywords.some((kw) => p.serviceType.toLowerCase().includes(kw)))
    .slice(0, 4);
  const faqs = serviceFaqs[params.slug] ?? [];
  const crossSell = genericCrossSell[params.slug] ?? [];

  const schemas = [
    serviceSchema({
      name: service.name,
      description: service.shortDescription,
      url: `/services/${params.slug}`,
      serviceType: service.name,
    }),
    ...(faqs.length > 0 ? [faqSchema(faqs)] : []),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white">
        {heroImage && (
          <>
            <Image src={heroImage.src} alt={heroImage.alt} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" aria-hidden />
          </>
        )}
        <div className="container relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} />
          <div className="mt-4 text-4xl" aria-hidden>{service.icon}</div>
          <h1 className="mt-4 font-heading text-5xl font-bold">{service.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{service.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/contact?service=${params.slug}`} className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Request a Quote</Link>
            <Link href="/our-work" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See Project Videos</Link>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">One licensed team</p>
            <p className="mt-3 text-text-secondary">Seacoast Building &amp; Design is a Florida certified general and roofing contractor.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Homes to communities</p>
            <p className="mt-3 text-text-secondary">We work with homeowners, businesses, associations, and multi-family properties.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Know what is included</p>
            <p className="mt-3 text-text-secondary">Your written proposal explains the materials, work, assumptions, and price before the project begins.</p>
          </div>
        </div>
      </section>

      {params.slug === "roofing" && (
        <section className="section dark-band bg-navy-deep">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow">GAF GoldElite™ Commercial Contractor</p>
              <h2 className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy">
                A verified commercial roofing credential
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
                Seacoast Building &amp; Design is a GAF GoldElite™ Commercial Contractor, a designation GAF reviews annually. For qualifying GAF commercial roofing systems, Seacoast can offer the Diamond Pledge™ NDL Roof Guarantee for terms up to 25 years.
              </p>
              <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
                Depending on the qualifying system and applicable guarantee, Diamond Pledge coverage can include material defects, workmanship, replacement materials, and labor for covered leaks, with no dollar limit on covered repairs. System eligibility, term, inspections, coverage, and restrictions are confirmed for each roof.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/commercial-roofing"
                  className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper"
                >
                  Explore Commercial Roofing
                </Link>
                <a
                  href="https://www.gaf.com/en-us/roofing-contractors/commercial/seacoast-building-and-design-lehigh-acres-fl-1154417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-navy/20 px-6 py-3 text-center font-bold text-navy hover:border-orange hover:text-orange"
                >
                  Verify Seacoast on GAF.com <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
            <aside className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
              <p className="font-heading text-xl font-bold text-navy">Start with the building and roof system</p>
              <p className="mt-3 leading-7 text-text-secondary">
                Share the property address, plans or roof information, approximate area, existing conditions, and target schedule. Seacoast can review the construction scope and confirm whether a qualifying GAF system and guarantee path fit the project.
              </p>
              <Link href="/contact?service=roofing" className="mt-6 inline-block font-bold text-orange hover:underline">
                Request a roof review →
              </Link>
            </aside>
          </div>
        </section>
      )}

      {(serviceTypeLists[params.slug]?.length ?? 0) > 0 && (
        <section className="section dark-band bg-navy-deep">
          <div className="container">
            <p className="eyebrow">What we offer</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">{service.name} options</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceTypeLists[params.slug].map((group) => (
                <div key={group.heading} className="rounded-2xl bg-white p-6 shadow-soft">
                  <p className="font-heading text-lg font-bold text-navy">{group.heading}</p>
                  <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section dark-band bg-navy">
          <div className="container">
            <p className="eyebrow">Project examples</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Recent {service.name} projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-orange hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section dark-band bg-navy-deep">
          <div className="container max-w-3xl">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy mb-8">{service.name} FAQ</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      )}

      {crossSell.length > 0 && <CrossSellBlock heading="Related services" items={crossSell} />}

      <CTASection variant="orange" heading="Ready to talk through your project?" subtext="Share the property address and what needs attention. Seacoast will help you understand the next step." buttonHref={`/contact?service=${params.slug}`} />
    </>
  );
}

// ─── Page entry point ─────────────────────────────────────────────────────────
export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) notFound();

  const rich = stormContent[resolvedParams.slug];

  // Emergency response: phone-first layout
  if (rich?.variant === "emergency") return <EmergencyResponseLayout content={rich} />;

  // Storm preparedness: full rich layout per strategy §3.1
  if (resolvedParams.slug === "storm-preparedness" && rich) return <StormPrepLayout content={rich} />;

  // Storm damage repair: insurance-focused rich layout per strategy §3.3
  if (resolvedParams.slug === "storm-damage-repair" && rich) return <StormDamageRepairLayout content={rich} />;

  // Solar panel cleaning: contract-focused rich layout (recurring-revenue offering)
  if (resolvedParams.slug === "solar-panel-cleaning") return <SolarPanelCleaningLayout />;

  // Whole-house battery systems: storm-readiness rich layout
  if (resolvedParams.slug === "whole-house-battery-systems") return <WholeHouseBatteryLayout />;

  // Thermal drone inspections: image-led service layout with interpretation guidance
  if (resolvedParams.slug === "thermal-drone-inspections") return <ThermalDroneInspectionLayout />;

  // All other services: generic template
  return <GenericServiceLayout params={resolvedParams} />;
}

// ─── Thermal Drone Inspections rich layout ───────────────────────────────────
function ThermalDroneInspectionLayout() {
  const faqs: FAQItem[] = [
    {
      question: "Can thermal imaging find a roof leak?",
      answer:
        "Thermal imaging can reveal surface-temperature patterns that may warrant a closer look, but an image alone does not prove that a leak or moisture is present or identify its source. A hands-on inspection, moisture testing, or other follow-up may be needed before repair decisions are made.",
    },
    {
      question: "Does a thermal drone inspection replace a roof certification inspection?",
      answer:
        "No. Thermal imaging is a screening and documentation tool. A roof certification has a different purpose and may require roof-age, condition, visible-issue, and remaining-service-life information. Seacoast can help determine which service fits the request.",
    },
    {
      question: "Why do the weather and time of day matter?",
      answer:
        "Sun exposure, recent rain, wind, outdoor temperature, roof material, rooftop equipment, and reflections can all affect thermal contrast. Seacoast reviews the property and conditions before deciding when the flight is likely to be useful.",
    },
    {
      question: "Can you inspect metal and flat roofs?",
      answer:
        "Seacoast can evaluate thermal drone imaging for metal, low-slope, and other accessible roof systems on residential, commercial, condominium, and multi-family properties. Flight access depends on the property, airspace, weather, and site conditions.",
    },
    {
      question: "What will I receive after the inspection?",
      answer:
        "The written quote confirms the visible and thermal images, observed-area notes, and follow-up guidance included for the property. Any direct inspection, moisture testing, repair estimate, or roof certification is identified separately unless the proposal includes it.",
    },
  ];

  const schemas = [
    serviceSchema({
      name: "Thermal Drone Roof Inspections",
      description:
        "Aerial visible and thermal imaging that documents roof-surface temperature patterns and helps prioritize areas for closer inspection on Southwest Florida properties.",
      url: "/services/thermal-drone-inspections",
      serviceType: "Thermal Drone Roof Inspection",
      areaServed: ["Hillsborough County, FL", "Manatee County, FL", "Sarasota County, FL", "Charlotte County, FL", "Lee County, FL", "Collier County, FL"],
    }),
    faqSchema(faqs),
  ];

  const examples = [
    {
      src: "/images/services/thermal-drone-inspections/thermal-rooftop-equipment.webp",
      alt: "Top-down thermal drone view of rooftop mechanical equipment surrounded by standing-seam metal roof sections",
      title: "Rooftop equipment and surrounding areas",
      body: "Thermal imagery adds context around mechanical equipment, curbs, transitions, and the roof areas around them.",
    },
    {
      src: "/images/services/thermal-drone-inspections/thermal-metal-roof-planes.webp",
      alt: "Thermal aerial view of intersecting standing-seam metal roof planes on a multi-building property",
      title: "Metal roof planes and transitions",
      body: "Aerial coverage can document roof planes, ridges, valleys, penetrations, and other areas that may need a closer review.",
    },
    {
      src: "/images/services/thermal-drone-inspections/thermal-flat-roof-overview.webp",
      alt: "Thermal drone image of a large flat roof and rooftop equipment showing surface-temperature variation",
      title: "Larger flat-roof coverage",
      body: "A broader thermal view can help a property team prioritize where a hands-on inspection or other testing should begin.",
    },
  ];

  const relatedServices: CrossSellItem[] = [
    {
      title: "Roof Certification Inspection",
      href: "/services/roof-certification-inspection",
      blurb: "Request condition, photo, and remaining-service-life documentation when an insurer, buyer, or property plan calls for it.",
      icon: "📋",
    },
    {
      title: "Roofing",
      href: "/services/roofing",
      blurb: "If follow-up confirms a repair or replacement need, Seacoast can prepare a separate construction scope and quote.",
      icon: "🏠",
    },
    {
      title: "Storm Damage Repair",
      href: "/services/storm-damage-repair",
      blurb: "Document visible storm-related conditions and plan the agreed roof, exterior, or rehabilitation work.",
      icon: "⛈️",
    },
  ];

  const trustCards = [
    { label: "Visible and thermal context", body: "Standard aerial photos help orient the thermal view and make follow-up areas easier to discuss." },
    { label: "Homes to larger properties", body: "Seacoast can evaluate residential, commercial, condominium, association, and multi-family roof areas." },
    { label: "Planned around the conditions", body: "Roof material, sun, weather, recent rain, and flight timing all affect the patterns a thermal camera records." },
  ];

  const processSteps = [
    { step: "1", title: "Share the property", body: "Send the address, roof type, property use, and the area or concern you want reviewed." },
    { step: "2", title: "Plan useful conditions", body: "Seacoast considers weather, recent rain, roof material, sun exposure, access, and flight conditions." },
    { step: "3", title: "Capture both views", body: "Visible-light images provide context while thermal images record surface-temperature variation." },
    { step: "4", title: "Decide the next step", body: "The agreed deliverables help prioritize direct inspection, other testing, monitoring, or a separate repair scope." },
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Thermal Drone Inspections" }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="text-4xl" aria-hidden>🚁</div>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">Thermal Drone Roof Inspections in Southwest Florida</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Seacoast provides aerial thermal and visible imaging for accessible residential, commercial, condominium, and multi-family roofs. Temperature patterns can help prioritize areas for closer inspection; they do not, by themselves, confirm moisture, leaks, or insulation defects.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact?service=thermal-drone-inspections" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Request a Thermal Inspection</Link>
                <a href="#flight-images" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See Real Flight Images</a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl bg-white/10 p-2">
                <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/services/thermal-drone-inspections/visible-light-metal-roof-overview.webp"
                    alt="Daylight drone view of a multi-story Florida building with a standing-seam metal roof"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="px-2 pb-1 pt-3 text-sm font-semibold text-white/80">Visible-light roof view</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl bg-white/10 p-2">
                <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/services/thermal-drone-inspections/thermal-metal-roof-overview.webp"
                    alt="Thermal drone view of the same multi-story Florida building with a metal roof shown in orange and purple surface-temperature colors"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="px-2 pb-1 pt-3 text-sm font-semibold text-white/80">Thermal view of the same property</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 md:grid-cols-3">
          {trustCards.map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="eyebrow">{card.label}</p>
              <p className="mt-3 leading-7 text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="flight-images" className="section scroll-mt-24 dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Real thermal roof imaging examples</p>
          <h2 className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy">See the roof from more than one point of view</h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            These real thermal roof images were provided by Seacoast. They show relative surface-temperature variation at the time of capture—not a diagnosis by color alone.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {examples.map((example) => (
              <figure key={example.src} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image src={example.src} alt={example.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <figcaption className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy">{example.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{example.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-orange/20 bg-white p-6 text-sm leading-6 text-text-secondary shadow-sm">
            <strong className="text-navy">How to read these images:</strong> Thermal colors represent relative surface-temperature differences at the time of capture. Weather, sun exposure, roof material, equipment, and reflections can affect the pattern. Findings may need direct inspection or other testing before repair decisions are made.
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">What to expect</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">A flight planned around the property and the question</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-deep text-sm font-bold text-white">{item.step}</span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-text-secondary">
            Drone access and flight availability depend on the property, airspace, weather, site conditions, and applicable flight requirements. The written quote confirms the inspection scope and deliverables.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mb-8 mt-2 font-heading text-4xl font-bold text-navy">Thermal Drone Inspection FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CrossSellBlock heading="Plan the inspection and any follow-up together" items={relatedServices} />
      <CTASection
        variant="navy"
        heading="Have a roof area you want to understand better?"
        subtext="Share the property address, roof type, and what prompted the inspection. Seacoast will help you decide whether thermal imaging is the right next step."
        buttonLabel="Request a Thermal Inspection"
        buttonHref="/contact?service=thermal-drone-inspections"
      />
    </>
  );
}

// ─── Solar Panel Cleaning rich layout ─────────────────────────────────────────
function SolarPanelCleaningLayout() {
  const faqs: FAQItem[] = [
    {
      question: "How often should solar panels be cleaned in Southwest Florida?",
      answer:
        "The right interval depends on the array, roof access, surrounding trees, pollen, salt exposure, bird activity, and the panel manufacturer's care instructions. We can quote a one-time visit or discuss recurring scheduling after reviewing the property.",
    },
    {
      question: "Does cleaning my solar panels actually increase output?",
      answer:
        "Removing debris can improve light exposure when soiling is affecting the array, but the result varies with weather, equipment condition, shading, and system design. Cleaning does not guarantee a particular production increase.",
    },
    {
      question: "Do you offer solar panel cleaning service contracts?",
      answer:
        "Ask about one-time and recurring scheduling. The visit frequency, documentation, access requirements, and other service terms are confirmed in the written quote.",
    },
    {
      question: "How do you clean the panels without damaging them?",
      answer:
        "The cleaning method is selected for the panel manufacturer's instructions, roof material, array condition, and safe access. We avoid abrasive techniques and document any visible concerns found before work begins.",
    },
    {
      question: "What areas do you serve for solar panel cleaning?",
      answer:
        "Ask about solar panel cleaning in Seacoast's six-county service area: Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier. Availability depends on the address, array, access, and current schedule.",
    },
  ];

  const schemas = [
    serviceSchema({
      name: "Solar Panel Cleaning",
      description:
        "Solar panel cleaning for residential and commercial properties in Southwest Florida, with one-time and recurring scheduling options quoted for the site.",
      url: "/services/solar-panel-cleaning",
      serviceType: "Solar Panel Cleaning Service",
      areaServed: ["Hillsborough County, FL", "Manatee County, FL", "Sarasota County, FL", "Charlotte County, FL", "Lee County, FL", "Collier County, FL"],
    }),
    faqSchema(faqs),
  ];

  const planTiers = [
    {
      tier: "One-Time Clean",
      price: "Custom quote",
      cadence: "Single visit",
      includes: ["Site-specific cleaning method", "Visible-condition review", "Roof and array access assessment", "Scope confirmed before work"],
    },
    {
      tier: "Recurring Scheduling",
      price: "Custom quote",
      cadence: "Frequency selected for the property",
      includes: ["Agreed visit frequency", "Site-specific cleaning method", "Access requirements documented", "Service terms in writing"],
    },
    {
      tier: "Commercial & Solar Farm",
      price: "Custom quote",
      cadence: "Site-specific schedule",
      includes: ["Array size and layout review", "Access and safety planning", "Visit frequency by agreement", "Documentation options in the quote"],
    },
  ];

  const relatedProjects = projects
    .filter((p) => ["solar", "energy"].some((kw) => p.serviceType.toLowerCase().includes(kw)))
    .slice(0, 3);

  const crossSell: CrossSellItem[] = [
    { title: "Solar Services", href: "/services/solar-services", blurb: "Review solar panels, inverters, battery storage, or EV charging as a separate project scope.", icon: "☀️" },
    { title: "Exterior Cleaning Services", href: "/services/exterior-cleaning-services", blurb: "Coordinate exterior-surface cleaning where the materials and access are compatible.", icon: "💦" },
    { title: "Roof Certification Inspection", href: "/services/roof-certification-inspection", blurb: "Request a separate roof-condition inspection when documentation is needed.", icon: "📋" },
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white">
        <Image src="/images/services/solar-ave-maria-tile-roof.webp" alt="Representative aerial view of black solar panels on a barrel-tile roof in Southwest Florida" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" aria-hidden />
        <div className="container relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Solar Panel Cleaning" }]} />
          <div className="mt-4 text-4xl" aria-hidden>🧼</div>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">Solar Panel Cleaning for Southwest Florida Homes and Businesses</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Seacoast cleans accessible residential and commercial solar arrays using a method selected for the panels, roof, visible condition, and manufacturer guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact?service=solar-panel-cleaning" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Get a Cleaning Quote</Link>
            <a href="#plans" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See Service Plans</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { label: "Start with the site", body: "We look at the roof, array, visible condition, and safe access before cleaning." },
            { label: "Use the right method", body: "The cleaning approach is chosen for the panel guidance and the surrounding roof surface." },
            { label: "Choose the schedule", body: "Request a one-time visit or ask about recurring service for the property." },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="eyebrow">{card.label}</p>
              <p className="mt-3 text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why cleaning matters */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Why it matters</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Clear away the buildup you can see.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Pollen, dust, salt residue, leaves, and bird debris can collect on solar panels. A cleaning visit addresses accessible buildup and creates an opportunity to note visible conditions that may need separate service.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: "🧼", heading: "Accessible buildup", body: "Remove surface debris included in the quote using a method appropriate to the panel and roof." },
              { icon: "🌴", heading: "Local exposure", body: "Account for pollen, coastal residue, surrounding trees, and bird activity when selecting a schedule." },
              { icon: "🔍", heading: "Visible-condition notes", body: "Identify visible debris, shading, or physical concerns that may warrant separate evaluation." },
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
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">What&apos;s included</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What a cleaning quote can include</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "💧", heading: "Selected cleaning method", body: "The method and materials are chosen for the panel guidance, visible condition, and roof surface." },
              { icon: "🔍", heading: "Visible review", body: "Accessible areas are reviewed for debris, shading, and physical concerns visible during the visit." },
              { icon: "📸", heading: "Photo documentation", body: "When included in the quote, photos document the accessible array before and after cleaning." },
              { icon: "📅", heading: "Scheduling options", body: "Choose a one-time visit or request recurring scheduling with terms confirmed in writing." },
            ].map((item) => (
              <div key={item.heading} className="rounded-2xl bg-white p-6 shadow-soft">
                <div className="text-3xl" aria-hidden>{item.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{item.heading}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan tiers */}
      <section id="plans" className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Service plans</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Choose a one-time visit or recurring schedule</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            We price the visit around the array size, roof type, access, visible condition, and services requested. You will see the scope and price before work begins.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {planTiers.map((plan) => (
              <div key={plan.tier} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{plan.tier}</h3>
                <p className="mt-2 font-heading text-2xl font-bold text-navy">{plan.price}</p>
                <p className="text-sm text-text-secondary">{plan.cadence}</p>
                <ul className="mt-5 space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="mt-0.5 text-success" aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?service=solar-panel-cleaning" className="mt-6 inline-block rounded-full bg-orange-deep px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-copper">
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section dark-band bg-navy">
          <div className="container">
            <p className="eyebrow">Project examples</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Recent solar projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-orange hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 mb-8 font-heading text-3xl font-bold text-navy">Solar Panel Cleaning FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CrossSellBlock heading="Related services" items={crossSell} />
      <CTASection variant="orange" heading="Request a solar panel cleaning quote." subtext="Tell us the property address, approximate array size, roof type, and access conditions." buttonLabel="Get a Cleaning Quote" buttonHref="/contact?service=solar-panel-cleaning" />
    </>
  );
}

// ─── Home Battery Backup rich layout ─────────────────────────────────────────
function WholeHouseBatteryLayout() {
  const faqs: FAQItem[] = [
    {
      question: "What is a whole-house battery backup system?",
      answer:
        "A home battery stores energy that can be assigned to selected circuits during a grid outage. What it can power, how switchover works, and how long it lasts depend on the equipment, system design, battery capacity, and connected loads.",
    },
    {
      question: "Do I need solar panels to install a home battery?",
      answer:
        "Not necessarily. Some systems can be charged from the grid, while compatible solar and battery equipment may be designed to work together. The available configuration depends on the existing electrical and solar equipment, utility requirements, and product specifications.",
    },
    {
      question: "How long will a home battery power my house during an outage?",
      answer:
        "Runtime depends on usable battery capacity, the circuits selected, actual power use, equipment efficiency, weather, and whether a compatible charging source is available. A site assessment and load review are needed before estimating runtime.",
    },
    {
      question: "Why is battery backup a good idea in Southwest Florida?",
      answer:
        "A properly designed battery system can make selected circuits available during some grid outages. It should be planned as one part of a broader emergency plan and does not guarantee uninterrupted power or replace evacuation guidance.",
    },
    {
      question: "What areas do you serve for battery installation?",
      answer:
        "Ask about battery installation in Seacoast's six-county service area: Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier. Availability depends on the address, project scope, and current schedule.",
    },
  ];

  const schemas = [
    serviceSchema({
      name: "Home Battery Backup",
      description:
        "Site-specific home battery backup assessment and installation options for selected circuits or broader backup goals in Southwest Florida.",
      url: "/services/whole-house-battery-systems",
      serviceType: "Home Battery Backup Installation",
      areaServed: ["Hillsborough County, FL", "Manatee County, FL", "Sarasota County, FL", "Charlotte County, FL", "Lee County, FL", "Collier County, FL"],
    }),
    faqSchema(faqs),
  ];

  const systemOptions = [
    {
      tier: "Essential Backup",
      price: "Custom quote",
      cadence: "Selected-circuit assessment",
      includes: ["Load and circuit priorities", "Equipment compatibility review", "Location and access review", "Runtime estimate based on assumptions"],
    },
    {
      tier: "Expanded Backup",
      price: "Custom quote",
      cadence: "Broader load assessment",
      includes: ["Detailed load review", "Battery-capacity options", "Transfer-equipment requirements", "Permit and utility requirements"],
    },
    {
      tier: "Solar + Battery",
      price: "Custom quote",
      cadence: "Compatibility assessment",
      includes: ["Existing solar equipment review", "Compatible charging configuration", "Product-specific operating limits", "Site-specific design and quote"],
    },
  ];

  const relatedProjects = projects
    .filter((p) => ["solar", "energy"].some((kw) => p.serviceType.toLowerCase().includes(kw)))
    .slice(0, 3);

  const crossSell: CrossSellItem[] = [
    { title: "Solar Services", href: "/services/solar-services", blurb: "Review whether the proposed battery equipment is compatible with a new or existing solar system.", icon: "☀️" },
    { title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "Coordinate backup-power goals with a broader property preparation plan.", icon: "🛡️" },
    { title: "Storm Damage Repair", href: "/services/storm-damage-repair", blurb: "Request visible-condition documentation and a construction repair estimate after a storm.", icon: "⛈️" },
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white">
        <div className="container relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Home Battery Backup" }]} />
          <div className="mt-4 text-4xl" aria-hidden>🔋</div>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">Home Battery Backup Options in Southwest Florida</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Seacoast can assess the circuits you want available during an outage and quote a battery configuration based on loads, equipment compatibility, permitting, and site conditions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact?service=whole-house-battery-systems" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Get a Battery Quote</Link>
            <a href="#options" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See System Options</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { label: "Start with priorities", body: "We identify the circuits and equipment you want to keep available during an outage." },
            { label: "Check what works together", body: "Existing electrical and solar equipment is reviewed for product and utility compatibility." },
            { label: "Know what to expect", body: "The quote explains the proposed equipment, loads, assumptions, permits, and operating limits." },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="eyebrow">{card.label}</p>
              <p className="mt-3 text-text-secondary">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why battery backup */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Why it matters</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Plan backup around the circuits that matter most.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Start with the lights, refrigeration, communications, or other circuits you care about most. We use those priorities to discuss capacity, expected runtime, charging, and equipment limits for the property.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: "⚡", heading: "Circuit priorities", body: "Identify which appliances and circuits should be considered in the backup design." },
              { icon: "🔋", heading: "Capacity options", body: "Compare equipment configurations using documented load and runtime assumptions." },
              { icon: "☀️", heading: "Solar compatibility", body: "Review whether compatible solar equipment can be included in the proposed charging design." },
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

      {/* System options */}
      <section id="options" className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">System options</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Backup sized to your home and your priorities.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            We size the proposed system around what you want to keep running and for how long. Broader backup goals need a detailed load and equipment review, and some homes or product combinations may need a different approach. Your quote will confirm the proposed equipment and price.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {systemOptions.map((option) => (
              <div key={option.tier} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{option.tier}</h3>
                <p className="mt-2 font-heading text-2xl font-bold text-navy">{option.price}</p>
                <p className="text-sm text-text-secondary">{option.cadence}</p>
                <ul className="mt-5 space-y-2">
                  {option.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="mt-0.5 text-success" aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?service=whole-house-battery-systems" className="mt-6 inline-block rounded-full bg-orange-deep px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-copper">
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section dark-band bg-navy-deep">
          <div className="container">
            <p className="eyebrow">Project examples</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Recent solar &amp; energy projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-orange hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 mb-8 font-heading text-3xl font-bold text-navy">Home Battery Backup FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CrossSellBlock heading="Related services" items={crossSell} />
      <CTASection variant="orange" heading="Request a site-specific battery assessment." subtext="Tell us which circuits matter most and whether the property has existing solar equipment." buttonLabel="Get a Battery Quote" buttonHref="/contact?service=whole-house-battery-systems" />
    </>
  );
}
