import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContainerCard } from "@/components/ContainerCard";
import { CrossSellBlock } from "@/components/CrossSellBlock";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SchemaScript, faqSchema, localBusinessSchema } from "@/components/Schema";
import { containers } from "@/data/containers";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Shipping Container Storage, Offices & Guest Spaces"),
  description:
    "Explore container-based storage, offices, workshops, and guest-space concepts for Southwest Florida properties. Site review and current estimates from Seacoast.",
};

const landingFaqs = [
  {
    question: "Does a shipping container have a hurricane rating?",
    answer:
      "Not automatically. Wind performance depends on the complete engineered installation, including the foundation, anchoring, openings, doors, and modifications. Ask what engineering and product documentation applies to your proposed design.",
  },
  {
    question: "Do I need a permit for a container on my property?",
    answer:
      "Permit and zoning rules vary by parcel and intended use. Before buying or placing a container, confirm zoning, HOA, floodplain, access, utility, and building requirements for the address.",
  },
  {
    question: "Can a container be used as a guest house or office?",
    answer:
      "It may be possible, depending on the parcel, intended use, design, and local rules. Habitable space generally involves zoning, engineered plans, permits, inspections, utilities, and life-safety requirements. We start by reviewing the address and your goals.",
  },
  {
    question: "How long does a shipping container last?",
    answer:
      "Service life depends on the shell's prior condition, salt exposure, drainage, coatings, modifications, and maintenance. We can review the unit and explain the maintenance considerations for your project; there is no one lifespan that applies to every installation.",
  },
  {
    question: "Can a container project be financed?",
    answer:
      "Financing programs and eligibility change. Ask which options are currently available. Approval, rates, terms, and timing are set by the participating lender.",
  },
  {
    question: "Will a finished build still look like a shipping container?",
    answer:
      "That depends on the design you choose. Available options can include siding, roofing, windows, doors, paint, trim, HVAC, plumbing, and interior finishes, subject to the approved plans and scope.",
  },
  {
    question: "What does a container project cost?",
    answer:
      "Price depends on container condition, delivery access, foundation, permits, utilities, openings, and finishes. Send the property address and intended use for a current written estimate.",
  },
];

const processImages = [
  {
    step: "1",
    src: "/images/containers/process/real-delivery.webp",
    title: "Delivery and placement",
    body: "Access, turning space, lifting equipment, drainage, and the prepared base all affect how a container can be placed.",
    alt: "Representative image of a container being placed from a flatbed truck",
  },
  {
    step: "2",
    src: "/images/containers/process/real-insulation.webp",
    title: "Weather and temperature control",
    body: "Insulation, ventilation, moisture control, coatings, and HVAC are selected for the intended use and site conditions.",
    alt: "Representative image of insulation inside a shipping container build-out",
  },
  {
    step: "3",
    src: "/images/containers/process/real-buildout.webp",
    title: "Interior and exterior finish",
    body: "Openings, electrical work, plumbing, wall finishes, flooring, siding, and trim are defined in the approved scope.",
    alt: "Representative image of interior finish work in a shipping container",
  },
];

export default function ContainersLandingPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema(), faqSchema(landingFaqs)]} />

      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Containers" }]} />
          <p className="eyebrow mt-4">Container-based storage and workspace</p>
          <h1 className="mt-2 max-w-4xl font-heading text-5xl font-bold leading-tight">
            Container options planned around your property.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Explore storage containers, offices, workshops, and guest-space concepts. We help review site access, configuration options, and permitting questions before you commit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#options" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">
              Explore the Options
            </Link>
            <Link href="/contact?service=containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">
              Ask About Your Site
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-navy pb-16">
        <div className="container">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src="/images/containers/containers-hero.webp"
              alt="Representative container-based guest-space design in a Florida setting"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="mt-3 text-sm text-white/60">Representative design image. Final appearance depends on the approved plans and finish selections.</p>
        </div>
      </div>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Start with the property</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">A useful container build starts with a practical site review.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🔒",
                title: "Configure the steel shell",
                body: "Choose doors, ventilation, insulation, electrical work, coatings, and finishes around how the space will be used.",
              },
              {
                icon: "📍",
                title: "Check the site first",
                body: "Delivery access, drainage, foundation, utilities, floodplain requirements, zoning, and HOA rules shape the project.",
              },
              {
                icon: "🏠",
                title: "Select the right finish",
                body: "Available options include siding, roofing, windows, HVAC, plumbing, and interior finishes based on the approved design.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-container-steel/20 bg-white p-6 shadow-soft">
                <div className="text-3xl" aria-hidden>{item.icon}</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="options" className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Available configurations</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Storage, work, and guest-space options</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Seacoast can coordinate delivery, placement, and selected finish work under the agreed scope. Site preparation, utilities, engineering, and permits are priced after review.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {containers.map((container) => <ContainerCard key={container.slug} container={container} />)}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow">A coordinated scope</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">From delivery to finish work</h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Depending on the project, Seacoast can coordinate the container, site preparation, delivery, exterior finish, and utility work. Your proposal identifies inclusions, exclusions, allowances, and change-order terms.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { icon: "🚚", title: "Delivery planning", body: "We review the address, access, placement area, and equipment needed before scheduling delivery." },
              { icon: "📐", title: "Design and site requirements", body: "The intended use determines what zoning, engineering, foundation, utility, and permit work may be needed." },
              { icon: "🎨", title: "Finish selections", body: "Choose exterior and interior options that fit the property, purpose, approved plans, and budget." },
              { icon: "🧾", title: "A written project scope", body: "The proposal explains the work Seacoast will coordinate and the decisions or approvals still needed." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="shrink-0 text-3xl" aria-hidden>{item.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-white/70">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">How the work comes together</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Common delivery and build-out stages</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">These representative images illustrate common stages. Your project plan will reflect the actual site and approved scope.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processImages.map((item) => (
              <figure key={item.step} className="overflow-hidden rounded-2xl border border-container-steel/20 bg-white shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-deep font-heading font-bold text-white shadow-soft" aria-hidden>{item.step}</span>
                </div>
                <figcaption className="p-6">
                  <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="rounded-2xl border-2 border-orange bg-white p-8 shadow-soft">
            <p className="eyebrow text-orange-deep">Before you buy</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Check the parcel before purchasing a container.</h2>
            <p className="mt-4 max-w-3xl text-text-secondary">
              Zoning, building, HOA, floodplain, access, and utility rules vary by property. Send the address and intended use before purchasing a container so feasibility can be checked with the appropriate authorities.
            </p>
            <div className="mt-6">
              <Link href="/contact?service=containers" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">
                Start With Your Address
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="eyebrow">Compare the practical details</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Is a container the right fit?</h2>
            <p className="mt-4 text-text-secondary">
              Compare ownership, delivery, site requirements, customization, and permitting with sheds, rented storage, RVs, and traditional additions. A property review is still required before choosing a direction.
            </p>
          </div>
          <Link href="/containers/compare" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Compare the Options</Link>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mb-8 mt-2 font-heading text-4xl font-bold text-navy">Container planning FAQ</h2>
          <FAQAccordion items={landingFaqs} />
        </div>
      </section>

      <CrossSellBlock
        heading="Related work you may want to plan together"
        items={[
          { icon: "🏠", title: "Roofing", href: "/services/roofing", blurb: "Discuss roofing and drainage details where a new structure meets the rest of the property." },
          { icon: "🧱", title: "Siding", href: "/services/siding", blurb: "Explore siding, trim, and paint options for a more finished exterior." },
          { icon: "⚡", title: "Battery Backup", href: "/services/whole-house-battery-systems", blurb: "Plan backup power around the circuits and equipment the space needs." },
        ]}
      />

      <CTASection
        variant="orange"
        heading="Have a container project in mind?"
        subtext="Send the property address and tell us how you want to use the space. We will help identify the right next step."
        buttonLabel="Tell Us About the Site"
      />
    </>
  );
}
