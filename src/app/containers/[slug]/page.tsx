import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CrossSellBlock, type CrossSellItem } from "@/components/CrossSellBlock";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { SchemaScript, faqSchema, serviceSchema } from "@/components/Schema";
import { containers, getContainerBySlug } from "@/data/containers";
import { seoDescription, seoTitle } from "@/lib/seo";

type Props = { params: { slug: string } };

type DetailContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  optionHeading: string;
  options: { title: string; body: string }[];
  planning: { title: string; body: string }[];
  faqs: FAQItem[];
  related: CrossSellItem[];
};

const detailContent: Record<string, DetailContent> = {
  storage: {
    eyebrow: "Container storage",
    h1: "Storage containers configured for your property.",
    intro:
      "Choose the shell, access, ventilation, security, electrical, shelving, and finish options that fit what you need to store. We review delivery access and placement requirements before preparing a quote.",
    image: "/images/containers/process-finished-storage.webp",
    imageAlt: "Representative finished shipping container configured for storage",
    optionHeading: "Storage options to discuss",
    options: [
      { title: "Container size and condition", body: "Discuss standard and high-cube sizes, along with new one-trip or inspected used units when available." },
      { title: "Doors and access", body: "Cargo doors, personnel doors, roll-up doors, ramps, and lock options can be considered around the items being stored." },
      { title: "Ventilation and electrical", body: "The intended contents and site conditions determine whether passive ventilation, powered ventilation, lighting, or outlets make sense." },
      { title: "Interior and exterior finish", body: "Available choices can include shelving, partitions, floor coatings, exterior coatings, siding, and trim." },
    ],
    planning: [
      { title: "Delivery route", body: "Confirm road access, gates, overhead clearance, turning space, and the equipment needed for placement." },
      { title: "Prepared base and drainage", body: "The container needs a stable, level placement area that manages water around the steel shell." },
      { title: "Property rules", body: "Zoning, permits, setbacks, floodplain rules, and HOA requirements vary by address and intended use." },
    ],
    faqs: [
      { question: "What container sizes can I ask about?", answer: "Common options include 20-foot, 40-foot, and 40-foot high-cube containers. Current condition, supply, delivery access, and intended use determine what is appropriate and available." },
      { question: "Does storage-only use require a permit?", answer: "Rules vary by municipality, parcel, duration, foundation, utilities, and use. Share the address before buying a container so local requirements can be checked." },
      { question: "Can you add doors, ventilation, and power?", answer: "Those are common options to discuss. Openings, electrical work, and structural modifications must be defined around the design, site, and any applicable permits or engineering." },
      { question: "How is a container protected from corrosion?", answer: "Condition, drainage, salt exposure, surface preparation, coatings, and maintenance all matter. We can explain the coating and upkeep included in the proposed scope." },
    ],
    related: [
      { icon: "🧼", title: "Exterior Cleaning", href: "/services/exterior-cleaning-services", blurb: "Keep surrounding concrete, siding, and exterior surfaces maintained." },
      { icon: "⚡", title: "Battery Backup", href: "/services/whole-house-battery-systems", blurb: "Discuss backup power around the circuits and equipment you want to support." },
      { icon: "🏗️", title: "Container Offices", href: "/containers/offices-workshops", blurb: "Explore a finished workspace instead of storage-only use." },
    ],
  },
  "guest-houses": {
    eyebrow: "Container-based guest spaces",
    h1: "A compact guest space planned around your property.",
    intro:
      "Explore studio, one-bedroom, or custom container-based layouts with insulation, windows, HVAC, plumbing, electrical work, and exterior finishes. Feasibility starts with the address, intended use, and local rules.",
    image: "/images/containers/guest-house-stucco-tile.webp",
    imageAlt: "Representative container-based guest-space design with a finished exterior",
    optionHeading: "Common layouts to discuss",
    options: [
      { title: "Studio layout", body: "A compact sleeping and living area with bathroom and kitchenette options." },
      { title: "One-bedroom layout", body: "A separate bedroom and living area when the site, design, and container configuration allow." },
      { title: "Connected containers", body: "Larger concepts may combine shells, subject to structural engineering, site access, and permitting." },
      { title: "Exterior finish", body: "Siding, stucco, roofing, doors, windows, paint, and trim can be selected to relate to the main property." },
    ],
    planning: [
      { title: "Confirm allowed use", body: "Zoning, ADU rules, occupancy, setbacks, parking, and HOA restrictions can determine whether the concept is possible." },
      { title: "Plan the utilities", body: "Water, sewer or septic, electrical service, HVAC, and drainage affect both design and cost." },
      { title: "Define the complete scope", body: "Engineering, foundation, delivery, permits, inspections, finishes, and site restoration should be clear in the proposal." },
    ],
    faqs: [
      { question: "Can I use a container as a legal guest house?", answer: "Possibly, but not on every parcel. Local zoning, building rules, utilities, floodplain requirements, HOA rules, and the final engineered design determine whether habitable use can be approved." },
      { question: "Can it include a kitchen and bathroom?", answer: "Kitchenette and bathroom options can be discussed. Plumbing, electrical, ventilation, hot water, wastewater, and inspections must be addressed in the approved plans." },
      { question: "Can it be used as a rental?", answer: "Local zoning, HOA rules, permits, occupancy requirements, and short-term-rental regulations determine whether rental use is allowed. Confirm those requirements before relying on rental income." },
      { question: "How long does a container guest-space project take?", answer: "Timing depends on design, zoning, engineering, product availability, permits, site work, utilities, inspections, and finishes. Seacoast can provide a working schedule after the scope is developed." },
    ],
    related: [
      { icon: "🏠", title: "Room Additions", href: "/services/room-additions", blurb: "Compare a container concept with a conventional addition planned around the existing structure." },
      { icon: "🧱", title: "Siding", href: "/services/siding", blurb: "Coordinate siding and trim selections with the rest of the property." },
      { icon: "🪟", title: "Windows & Doors", href: "/services/windows-and-doors", blurb: "Plan openings, product selections, and exterior details together." },
    ],
  },
  "offices-workshops": {
    eyebrow: "Container offices and workshops",
    h1: "A detached workspace configured around how you work.",
    intro:
      "Plan a container-based office, workshop, studio, or jobsite space with the insulation, climate control, lighting, electrical service, doors, storage, and finishes your work requires.",
    image: "/images/containers/office-exterior-suburban.webp",
    imageAlt: "Representative container-based office with windows and a finished exterior",
    optionHeading: "Workspace options to discuss",
    options: [
      { title: "Office", body: "A quiet, conditioned space for focused work, meetings, or a small team." },
      { title: "Workshop", body: "A layout planned around benches, storage, ventilation, lighting, and the actual equipment load." },
      { title: "Studio", body: "A flexible room for creative work, recording, training, or hobbies with appropriate acoustic and utility planning." },
      { title: "Mobile or fixed placement", body: "The site, intended use, trailer or foundation, utility connections, and local requirements determine the approach." },
    ],
    planning: [
      { title: "List the equipment", body: "Electrical demand, heat, ventilation, clearances, storage, and safe access start with what you will use inside." },
      { title: "Choose the right shell", body: "Size, ceiling height, condition, door locations, and modifications should support the layout rather than constrain it." },
      { title: "Review business and property rules", body: "Zoning, occupancy, home-business rules, permits, HOA terms, and access vary by location." },
    ],
    faqs: [
      { question: "Can the workspace include air conditioning and electricity?", answer: "Yes, those options can be scoped. Equipment loads, panel capacity, insulation, ventilation, and utility connections must be designed around the intended use." },
      { question: "Can I use heavy equipment inside?", answer: "That depends on equipment weight, power demand, ventilation, clearances, floor capacity, access, and code requirements. Provide the equipment specifications before design begins." },
      { question: "Is a container office tax deductible?", answer: "Tax treatment depends on your business and the final asset. Ask your tax professional how a container workspace and its improvements would be treated." },
      { question: "How quickly can an office or workshop be ready?", answer: "Timing depends on container availability, design, site preparation, modifications, utilities, permits, inspections, and finishes. A schedule can be developed after those details are known." },
    ],
    related: [
      { icon: "📦", title: "Storage Containers", href: "/containers/storage", blurb: "Add lockable material or equipment storage on the same site." },
      { icon: "🏗️", title: "Metal Buildings", href: "/services/metal-buildings", blurb: "Compare a container workspace with a larger pole barn or metal-building scope." },
      { icon: "☀️", title: "Solar", href: "/services/solar-services", blurb: "Discuss power generation and battery options around actual site and equipment needs." },
    ],
  },
  "storm-shelters": {
    eyebrow: "Engineered container structures",
    h1: "For storm planning, site-specific engineering comes first.",
    intro:
      "A shipping container is not automatically a hurricane safe room. If a structure is intended for emergency occupancy, the complete design—including foundation, anchoring, openings, ventilation, utilities, and egress—must be evaluated for the site and intended use.",
    image: "/images/containers/storm-shelter-blended.webp",
    imageAlt: "Representative container-based structure integrated into a residential property",
    optionHeading: "Questions the design must answer",
    options: [
      { title: "What standard applies?", body: "The intended occupancy and local requirements determine the codes, criteria, engineering, and documentation needed." },
      { title: "How is it anchored?", body: "Foundation and anchoring design depend on soil, flood conditions, wind criteria, container condition, openings, and site exposure." },
      { title: "How can occupants exit safely?", body: "Doors, emergency egress, ventilation, lighting, communications, and backup power require project-specific planning." },
      { title: "What does the documentation say?", body: "Do not rely on a generic container description. Review the stamped plans, approvals, limitations, and inspection requirements for the proposed assembly." },
    ],
    planning: [
      { title: "Follow public safety instructions", body: "A private structure is not a reason to ignore local evacuation orders or emergency guidance." },
      { title: "Use qualified design professionals", body: "Life-safety claims require project-specific engineering and the documentation required by the authority having jurisdiction." },
      { title: "Keep a complete hurricane plan", body: "Know your evacuation zone, destination, communication plan, supplies, and the needs of every person and pet in the household." },
    ],
    faqs: [
      { question: "Is a shipping container automatically a hurricane safe room?", answer: "No. The full assembly must be designed and documented for its intended use. The shell alone does not establish the performance of the foundation, anchoring, openings, ventilation, egress, or modifications." },
      { question: "Does Seacoast or FEMA certify a container as a safe room?", answer: "FEMA does not certify products. Ask what site-specific engineering, code criteria, permits, inspections, and other documentation apply to the proposed structure." },
      { question: "Can I stay in it instead of evacuating?", answer: "Always follow evacuation orders and instructions from local emergency officials. No private structure should be presented as a substitute for those directions." },
      { question: "What should I bring to the first conversation?", answer: "Share the property address, intended use, number of occupants, site photos, flood and evacuation-zone information if known, and any design or engineering documents already available." },
    ],
    related: [
      { icon: "🌀", title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "Plan shutters, boarding, supplies, and activation terms before weather approaches." },
      { icon: "🔋", title: "Battery Backup", href: "/services/whole-house-battery-systems", blurb: "Size backup power around the circuits and communications equipment you need." },
      { icon: "📦", title: "Storage Containers", href: "/containers/storage", blurb: "Explore a container configured for storage without making a life-safety claim." },
    ],
  },
};

export function generateStaticParams() {
  return containers.map((container) => ({ slug: container.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const container = getContainerBySlug(params.slug);
  const content = detailContent[params.slug];
  if (!container || !content) return {};
  return {
    title: seoTitle(container.name),
    description: seoDescription(content.intro),
  };
}

export default function ContainerDetailPage({ params }: Props) {
  const container = getContainerBySlug(params.slug);
  const content = detailContent[params.slug];
  if (!container || !content) notFound();

  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: container.name,
            description: content.intro,
            url: `/containers/${container.slug}`,
            serviceType: "Container planning and build-out",
          }),
          faqSchema(content.faqs),
        ]}
      />

      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Containers", href: "/containers" }, { label: container.name }]} />
          <p className="eyebrow mt-4">{content.eyebrow}</p>
          <h1 className="mt-2 max-w-4xl font-heading text-5xl font-bold leading-tight">{content.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{content.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/contact?service=${container.slug}`} className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">
              Tell Us About Your Site
            </Link>
            <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">
              See All Container Options
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-navy pb-16">
        <div className="container">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image src={content.image} alt={content.imageAlt} fill priority className="object-cover" sizes="100vw" />
          </div>
        </div>
      </div>

      {container.slug === "storm-shelters" && (
        <section className="border-y border-orange/30 bg-orange/10 py-8">
          <div className="container max-w-4xl">
            <p className="font-heading text-xl font-bold text-navy">Important hurricane-safety note</p>
            <p className="mt-2 leading-7 text-text-secondary">
              Follow evacuation orders and local emergency guidance. FEMA does not certify products, and a shipping container is not a safe room simply because it is made of steel. Extreme-wind occupancy requires a complete, site-specific design and the documentation required by local authorities.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
              <a href="https://www.floridadisaster.org/knowyourzone/" target="_blank" rel="noreferrer" className="text-orange hover:underline">Know Your Zone ↗</a>
              <a href="https://www.fema.gov/emergency-managers/risk-management/building-science/safe-rooms" target="_blank" rel="noreferrer" className="text-orange hover:underline">FEMA safe-room guidance ↗</a>
            </div>
          </div>
        </section>
      )}

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Available options</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">{content.optionHeading}</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">The final proposal should list the exact materials, equipment, finish level, responsibilities, exclusions, and approvals for your project.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.options.map((option) => (
              <div key={option.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{option.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{option.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Before the estimate</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Three things to work through first</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.planning.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-deep font-heading font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mb-8 mt-2 font-heading text-4xl font-bold text-navy">What to know before you decide</h2>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      <CrossSellBlock heading="Related work you may want to plan together" items={content.related} />

      <CTASection
        variant="orange"
        heading={`Is a ${container.name.toLowerCase()} project right for your property?`}
        subtext="Send the address, intended use, site photos, and the options you are considering. We will help you identify the right next step."
        buttonLabel="Start With the Property"
      />
    </>
  );
}
