import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, serviceSchema } from "@/components/Schema";
import { seoDescription, seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Finished Container Mini-Home Example"),
  description: seoDescription(
    "Tour a finished container mini-home example with a kitchenette, bathroom, glass doors, and tandem-axle trailer. Ask Seacoast about current availability and pricing.",
  ),
};

const highlights = [
  {
    icon: "🚚",
    title: "Built on a trailer",
    body: "The unit sits on a tandem-axle trailer. Transport, registration, towing, placement, foundation, and allowable use must be confirmed for the destination.",
  },
  {
    icon: "🏠",
    title: "Finished interior",
    body: "The photographed example includes an insulated interior, wood-look flooring, a kitchenette, private bathroom, and glass entry doors.",
  },
  {
    icon: "🛠️",
    title: "Options to discuss",
    body: "Deck, solar, siding, foundation, utility, and site-work options can be discussed for a current unit or a custom build.",
  },
];

const gallery = [
  { src: "/images/containers/prebuilt/prebuilt-exterior-side.webp", alt: "Charcoal-painted container mini-home example on a tandem-axle trailer with glass doors", caption: "Charcoal exterior with full-glass entry doors on a tandem-axle trailer." },
  { src: "/images/containers/prebuilt/prebuilt-exterior-rear.webp", alt: "Rear view of a container mini-home example with rooftop steel frame and exterior water heater", caption: "Rear view showing the rooftop frame and exterior water-heater equipment." },
  { src: "/images/containers/prebuilt/prebuilt-entry.webp", alt: "Glass entry doors in a reclaimed-wood accent wall on a container mini-home example", caption: "Glass entry doors set into a reclaimed-wood accent wall." },
  { src: "/images/containers/prebuilt/prebuilt-interior-hall.webp", alt: "Interior hallway of a finished container mini-home example", caption: "Finished interior with wood-look flooring and light walls." },
  { src: "/images/containers/prebuilt/prebuilt-kitchenette.webp", alt: "Kitchenette inside a finished container mini-home example", caption: "Kitchenette with butcher-block counter, backsplash, and cooktop." },
  { src: "/images/containers/prebuilt/prebuilt-interior-wall.webp", alt: "Reclaimed-wood accent wall inside a container mini-home example", caption: "Reclaimed-wood accent band and an interior pass-through opening." },
  { src: "/images/containers/prebuilt/prebuilt-bathroom.webp", alt: "Private bathroom inside a finished container mini-home example", caption: "Private bathroom with corrugated-metal walls and pebble-look flooring." },
  { src: "/images/containers/prebuilt/prebuilt-exterior-transport.webp", alt: "Container mini-home example on its trailer behind a transport truck", caption: "The unit shown on its trailer for transport." },
];

const visibleFeatures = [
  "Container shell mounted on a tandem-axle trailer",
  "Full-glass entry doors and additional windows",
  "Finished interior walls and wood-look flooring",
  "Kitchenette with butcher-block counter, backsplash, and cooktop",
  "Private bathroom",
  "Reclaimed-wood accents",
  "Rooftop steel frame and exterior water-heater equipment",
];

const possibleAddOns = [
  { name: "Deck and stairs", body: "Discuss a code-compliant exterior landing, stairs, guards, and site connection for the proposed placement." },
  { name: "Solar and battery", body: "System design depends on the electrical loads, roof or rack space, utility connection, equipment, and backup goals." },
  { name: "Exterior siding", body: "Explore siding, trim, coatings, and heat-control details around the final design." },
  { name: "Foundation and site work", body: "Foundation, anchoring, drainage, utility, and access requirements are specific to the parcel and intended use." },
];

export default function PrebuiltContainersPage() {
  const description = "A photo tour of a finished container mini-home example. Contact Seacoast to confirm current inventory, pricing, transport, placement, and allowable use.";

  return (
    <>
      <SchemaScript
        schema={serviceSchema({
          name: "Finished Container Mini-Home Planning",
          description,
          url: "/containers/prebuilt",
          serviceType: "Container planning and build-out",
        })}
      />

      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Containers", href: "/containers" }, { label: "Finished Example" }]} />
          <p className="eyebrow mt-4">Photo tour</p>
          <h1 className="mt-3 max-w-3xl font-heading text-5xl font-bold leading-tight">See a finished container mini-home example.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Walk through an actual finished unit with a kitchenette, private bathroom, glass doors, and tandem-axle trailer. Use it as a starting point for a conversation about current availability or a custom build.
          </p>
          <p className="mt-5 max-w-2xl rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-6 text-white/75">
            Inventory and pricing can change. Contact Seacoast to confirm whether this unit is available and to review transport, utilities, placement, permits, and allowable use for your property.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact?service=prebuilt-containers" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">Ask About Current Options</Link>
            <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy">View Custom Container Builds</Link>
          </div>
        </div>
      </section>

      <div className="bg-navy pb-16">
        <div className="container">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video">
            <Image src="/images/containers/prebuilt/prebuilt-exterior-side.webp" alt="Finished charcoal container mini-home example on a tandem-axle trailer" fill priority className="object-cover" sizes="100vw" />
          </div>
        </div>
      </div>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">A closer look</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">A compact space with a finished interior</h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            This photographed example shows how a steel shell can be finished into a bright, compact room. The final use of any container structure depends on zoning, engineered plans, permits, inspections, utility connections, transportation requirements, and the approved placement.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-container-steel/20 bg-white p-6 shadow-soft">
                <div className="text-3xl" aria-hidden>{item.icon}</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Photos from the unit</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Inside and out</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">These are photos of the finished example shown on this page.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <figcaption className="p-4 text-sm text-text-secondary">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl">
          <p className="eyebrow">What the photos show</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Features visible in this example</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {visibleFeatures.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-success">✓</span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-text-secondary">A current written proposal should confirm condition, equipment operation, roadworthiness, included personal property, warranties, and every item included in a sale or custom build.</p>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Options to discuss</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Plan the property connection</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Availability and pricing depend on the site, approved design, products, labor, and final scope.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {possibleAddOns.map((item) => (
              <div key={item.name} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="rounded-2xl border-2 border-orange bg-white p-8 shadow-soft">
            <p className="eyebrow text-orange-deep">Before you commit</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Confirm the address, transport, and allowable use.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
              A finished interior does not by itself make a unit approved for residential occupancy. Review zoning, HOA terms, floodplain, access, trailer and transport requirements, foundation, utilities, engineered plans, permits, and inspections for the destination property.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Want to ask about this example?"
        subtext="Send the property address and tell us how you would use the space. We can discuss current inventory, custom options, and the requirements to check next."
        buttonLabel="Ask About Current Options"
      />
    </>
  );
}
