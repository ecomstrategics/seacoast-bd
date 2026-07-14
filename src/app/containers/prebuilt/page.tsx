import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { SchemaScript, faqSchema, productSchema } from "@/components/Schema";
import { seoDescription, seoTitle } from "@/lib/seo";

const listingPath = "/containers/prebuilt";
const listingDescription =
  "See real exterior and interior photos of Seacoast's available 20-foot mobile container in Southwest Florida. Last published at $35,000; confirm current sale details.";

export const metadata: Metadata = {
  title: seoTitle("20-Foot Mobile Container for Sale"),
  description: seoDescription(listingDescription),
  alternates: { canonical: listingPath },
  openGraph: {
    title: "Available 20-Foot Mobile Container | Seacoast",
    description: listingDescription,
    url: listingPath,
    type: "website",
    images: [
      {
        url: "/images/containers/prebuilt/20ft-mobile-container-social.webp",
        width: 1200,
        height: 630,
        alt: "Actual 20-foot mobile container mounted on a tandem-axle trailer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Available 20-Foot Mobile Container | Seacoast",
    description: listingDescription,
    images: ["/images/containers/prebuilt/20ft-mobile-container-social.webp"],
  },
};

const quickFacts = [
  { label: "Container size", value: "20 feet" },
  { label: "Last published price", value: "$35,000" },
  { label: "Current status", value: "Available" },
];

const interiorGallery = [
  {
    src: "/images/containers/prebuilt/20ft-mobile-container-kitchenette.webp",
    alt: "Interior of the 20-foot mobile container showing a butcher-block kitchenette, stone backsplash, cooktop, and black-framed windows",
    caption: "Kitchenette with butcher-block counter, stone backsplash, cooktop, and natural light from two windows.",
  },
  {
    src: "/images/containers/prebuilt/20ft-mobile-container-glass-door-room.webp",
    alt: "Bright finished room inside the 20-foot mobile container with wood-look flooring, an interior pass-through window, and glass double doors",
    caption: "Bright interior room with wood-look flooring, a pass-through window, and glass double doors.",
  },
  {
    src: "/images/containers/prebuilt/20ft-mobile-container-flex-room.webp",
    alt: "Flex room inside the 20-foot mobile container with wood-look flooring, reclaimed-wood accent trim, and a black-framed glass door",
    caption: "Separate flex room with a glass door, wood-look flooring, and reclaimed-wood accent trim.",
  },
  {
    src: "/images/containers/prebuilt/20ft-mobile-container-wet-bath.webp",
    alt: "Compact wet bath inside the 20-foot mobile container with black fixtures, corrugated wall panels, and pebble-look shower flooring",
    caption: "Compact wet bath with black fixtures, corrugated wall panels, and pebble-look shower flooring.",
  },
];

const exteriorGallery = [
  {
    src: "/images/containers/prebuilt/prebuilt-exterior-rear.webp",
    alt: "Three-quarter exterior view of the actual 20-foot mobile container with glass doors and rooftop steel frame",
    caption: "Three-quarter view showing the glass doors, rooftop frame, and exterior equipment.",
  },
  {
    src: "/images/containers/prebuilt/prebuilt-entry.webp",
    alt: "Open shipping-container doors framing glass entry doors and a reclaimed-wood accent wall",
    caption: "Original cargo doors open around the glass entry doors and reclaimed-wood accent wall.",
  },
  {
    src: "/images/containers/prebuilt/prebuilt-exterior-transport.webp",
    alt: "Actual 20-foot container unit shown mounted on its tandem-axle trailer near a transport truck",
    caption: "The actual unit shown on its trailer. Towing and transport arrangements must be confirmed separately.",
  },
];

const visibleFeatures = [
  "20-foot steel container shell",
  "Tandem-axle trailer beneath the unit",
  "Black-framed glass double doors and additional windows",
  "White interior walls and wood-look flooring",
  "Kitchenette with butcher-block counter, stone backsplash, and cooktop",
  "Compact wet bath with sink, toilet, corrugated wall panels, and floor drain",
  "Black-framed interior pass-through window",
  "Reclaimed-wood accent details",
  "Rooftop steel frame and exterior water-heater equipment",
];

const confirmationItems = [
  "Current availability, price, payment terms, and everything included in the sale",
  "Present finish condition, equipment operation, warranties, and any remaining work",
  "Trailer title, registration, brakes, axle and tire condition, roadworthiness, and towing requirements",
  "Delivery distance, route, permits, lifting or placement equipment, and transport cost",
  "Zoning, HOA terms, floodplain requirements, utilities, engineering, permits, inspections, and lawful use at the destination",
];

const possibleAddOns = [
  {
    name: "Deck and steps",
    body: "Plan a code-compliant landing, stairs, guards, and connection to the approved placement area.",
  },
  {
    name: "Solar and battery",
    body: "System design and price depend on the intended loads, available mounting space, equipment, and utility plan.",
  },
  {
    name: "Exterior siding",
    body: "Discuss siding, trim, coatings, and heat-control details for the desired exterior finish.",
  },
  {
    name: "Foundation and site work",
    body: "Foundation, anchoring, drainage, access, and utility work are specific to the parcel and intended use.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Is this exact 20-foot container currently available?",
    answer:
      "It is listed as available as of July 2026. Inventory can change, so contact Seacoast before traveling or making plans to confirm the unit is still available, the current price, and the sale terms.",
  },
  {
    question: "What did the $35,000 listing show?",
    answer:
      "The last published listing showed the container shell, tandem-axle trailer, glass doors and windows, interior finishes, kitchenette, wet bath, accent details, rooftop frame, and exterior equipment. A current written sale agreement must confirm the current price and identify every included item, its condition, and any remaining work.",
  },
  {
    question: "Is the trailer ready to tow on public roads?",
    answer:
      "Do not assume roadworthiness from the photos. Trailer ownership, title, registration, brakes, axles, tires, lighting, weight, towing equipment, route requirements, and transport responsibility must be inspected and confirmed before movement.",
  },
  {
    question: "Can I use this container as a home or guest house?",
    answer:
      "A finished interior does not automatically make a container approved for residential occupancy. The answer depends on the destination property, intended use, zoning, HOA terms, floodplain, engineering, foundation, utilities, permits, inspections, and life-safety requirements.",
  },
  {
    question: "Is delivery included in the listed price?",
    answer:
      "Delivery is not represented as included unless a current written agreement says so. Distance, route, access, towing or lifting equipment, placement, foundation, and site conditions all affect the transport scope and cost.",
  },
];

export default function PrebuiltContainersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          productSchema({
            name: "20-Foot Mobile Container",
            description: listingDescription,
            url: listingPath,
            image: [
              "/images/containers/prebuilt/prebuilt-exterior-side.webp",
              "/images/containers/prebuilt/20ft-mobile-container-kitchenette.webp",
            ],
          }),
          faqSchema(faqs),
        ]}
      />

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Containers", href: "/containers" },
              { label: "20-Foot Mobile Container" },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Available container inventory</p>
              <div className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                Available — last confirmed July 2026
              </div>
              <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl">
                20-Foot Mobile Container for Sale
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                This is the actual unit shown in the photos: a built-out 20-foot container mounted on a tandem-axle trailer, with glass doors and windows, a kitchenette, a compact wet bath, and two flexible interior areas.
              </p>
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm font-bold uppercase tracking-widest text-white/70">Last published asking price</p>
                <p className="mt-2 font-heading text-4xl font-bold text-orange">$35,000</p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Confirm the current price, availability, included equipment, sale terms, and transport arrangements with Seacoast before making plans.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?service=prebuilt-containers"
                  className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper"
                >
                  Ask About This Unit
                </Link>
                <a
                  href="tel:+19415005431"
                  className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy"
                >
                  Call (941) 500-5431
                </a>
              </div>
            </div>

            <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/containers/prebuilt/prebuilt-exterior-side.webp"
                  alt="Actual charcoal 20-foot mobile container mounted on a tandem-axle trailer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>
              <figcaption className="px-2 pb-1 pt-3 text-sm font-semibold text-white/80">Actual available unit shown</figcaption>
            </figure>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt className="text-xs font-bold uppercase tracking-widest text-white/60">{fact.label}</dt>
                <dd className="mt-2 font-heading text-2xl font-bold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">New interior photos</p>
          <h2 className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy">Step inside the actual unit</h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            These additional views show the kitchenette, glass-door room, flex room, and wet bath. The photos document visible condition; a walkthrough and written agreement should confirm finish details, operation, and anything included in the sale.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {interiorGallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="p-4 text-sm leading-6 text-text-secondary">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Exterior and entry</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">See the shell, trailer, and access points</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exteriorGallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="p-5 text-sm leading-6 text-text-secondary">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-soft md:p-8">
            <p className="eyebrow">Visible in the photos</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Features shown on this unit</h2>
            <ul className="mt-6 space-y-3">
              {visibleFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-success" aria-hidden>✓</span>
                  <span className="leading-7 text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-orange bg-white p-7 shadow-soft md:p-8">
            <p className="eyebrow text-orange-deep">Confirm before purchase</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Put the condition and transport details in writing</h2>
            <ul className="mt-6 space-y-3">
              {confirmationItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-orange-deep" aria-hidden>•</span>
                  <span className="leading-7 text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-text-secondary">
              A finished interior does not by itself establish roadworthiness or approval for residential occupancy.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Optional scopes</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Plan the site and finish around your property</h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            Deck, power, exterior finish, foundation, delivery, placement, and utility work are separate unless the written agreement includes them.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {possibleAddOns.map((item) => (
              <div key={item.name} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mb-8 mt-2 font-heading text-4xl font-bold text-navy">20-Foot Mobile Container FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Want to see whether this unit fits your property?"
        subtext="Send the destination address and intended use. Seacoast can confirm current availability, sale details, transport questions, and the next property checks."
        buttonLabel="Ask About This Unit"
        buttonHref="/contact?service=prebuilt-containers"
      />
    </>
  );
}
