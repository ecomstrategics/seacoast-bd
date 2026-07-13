import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, productSchema } from "@/components/Schema";
import { seoDescription, seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Mobile Container Mini-Home for Sale"),
  description: seoDescription("A finished container mini-home on a road-ready trailer, available now from Seacoast. Base price $35,000 with deck, solar, siding, and foundation add-ons."),
};

const highlights = [
  { icon: "🚚", title: "Mobile by design", body: "Built on a tandem-axle trailer so the unit can be transported and placed where you need it, then relocated later if your plans change." },
  { icon: "🏠", title: "Move-in finished", body: "Insulated and finished interior with wood-look vinyl plank flooring, a kitchenette, a private bathroom, and full glass entry doors." },
  { icon: "🛠️", title: "Built to expand", body: "Add a deck, solar, exterior siding, or a permanent foundation. The same add-ons are available on our custom container builds." },
];

const gallery = [
  { src: "/images/containers/prebuilt/prebuilt-exterior-side.webp", alt: "Charcoal-painted container mini-home on a tandem-axle trailer with black-framed glass French doors along the side, parked on a grassy Southwest Florida lot", caption: "Charcoal exterior with full-glass French entry doors, mounted on a road-ready trailer." },
  { src: "/images/containers/prebuilt/prebuilt-exterior-rear.webp", alt: "Rear quarter view of the container mini-home showing the rooftop galvanized steel frame and an exterior tankless water heater", caption: "Rooftop steel frame and exterior tankless water heater." },
  { src: "/images/containers/prebuilt/prebuilt-entry.webp", alt: "Container rear doors open to reveal black-framed glass French doors set into a reclaimed-wood accent wall, with solar lights mounted on either side", caption: "Glass entry doors set into a reclaimed-wood accent wall with solar lighting." },
  { src: "/images/containers/prebuilt/prebuilt-interior-hall.webp", alt: "Interior of the container mini-home looking down the hallway toward a full-glass entry door, with gray wood-look vinyl plank flooring and white walls", caption: "Bright interior with wood-look vinyl plank flooring throughout." },
  { src: "/images/containers/prebuilt/prebuilt-kitchenette.webp", alt: "Container mini-home kitchenette with butcher-block countertop, natural stone backsplash, cooktop, dark base cabinet, and a wagon-wheel light fixture", caption: "Kitchenette with butcher-block counter, stone backsplash, and cooktop." },
  { src: "/images/containers/prebuilt/prebuilt-interior-wall.webp", alt: "Interior accent wall with a horizontal reclaimed-wood band and an interior pass-through window framed in black", caption: "Reclaimed-wood accent band and interior pass-through window." },
  { src: "/images/containers/prebuilt/prebuilt-bathroom.webp", alt: "Private bathroom inside the container mini-home with corrugated metal walls, a black toilet, and a pebble-tile floor", caption: "Private bathroom with corrugated metal walls and a pebble-tile floor." },
  { src: "/images/containers/prebuilt/prebuilt-exterior-transport.webp", alt: "Container mini-home loaded on its trailer behind a flatbed truck, ready for transport across Southwest Florida", caption: "Ready for transport and placement anywhere in our service area." },
];

const included = [
  "20 ft Cat-5-rated corten steel container shell",
  "Tandem-axle trailer for transport and placement",
  "Full-glass French entry doors with additional windows",
  "Insulated, finished interior with white walls",
  "Wood-look vinyl plank flooring throughout",
  "Kitchenette with butcher-block counter, stone backsplash, and cooktop",
  "Private bathroom with toilet and finished walls",
  "Reclaimed-wood interior accents",
  "Rooftop steel frame and exterior tankless water heater",
];

const addOns = [
  { name: "Deck with stairs", price: "Starting at $3,750", body: "An exterior deck and stair set for a finished entry and outdoor living space." },
  { name: "Solar", price: "Starting at $11,000", body: "Solar power package for off-grid or grid-supplement operation." },
  { name: "Siding with radiant barrier", price: "Starting at $3,600", body: "Exterior siding with a radiant barrier for a finished look and better heat control in the Florida sun." },
  { name: "Foundation", price: "Starting at $3,000", body: "Permanent foundation work to set the unit in place for long-term, fixed installation." },
];

export default function PrebuiltContainersPage() {
  return (
    <>
      <SchemaScript
        schema={productSchema({
          name: "Mobile Container Mini-Home",
          description: "A finished container mini-home on a road-ready trailer, available now from Seacoast. Base price $35,000 with deck, solar, siding, and foundation add-ons.",
          url: "/containers/prebuilt",
          offers: { price: "35000", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        })}
      />
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Containers", href: "/containers" }, { label: "Prebuilt Options" }]} />
          <p className="eyebrow mt-4">Available now</p>
          <h1 className="mt-3 max-w-3xl font-heading text-5xl font-bold leading-tight">Mobile Container Mini-Home for Sale.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            A finished container mini-home built on a road-ready trailer. Move-in ready inside, mobile by design, and built to grow with add-ons like a deck, solar, siding, and a permanent foundation.
          </p>
          <p className="mt-6 font-heading text-3xl font-bold text-orange">$35,000 base price</p>
          <p className="mt-1 text-sm text-white/70">Built on its own wheels, so it is mobile ready out of the gate. Add-ons available. Final pricing varies by site, transport, and configuration.</p>
          <p className="mt-3 font-semibold text-white">Contact us for more details.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact?service=prebuilt-containers" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">Ask About This Unit</Link>
            <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy">View Custom Container Builds</Link>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="bg-navy pb-16">
        <div className="container">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video">
            <Image src="/images/containers/prebuilt/prebuilt-exterior-side.webp" alt="Charcoal-painted container mini-home on a tandem-axle trailer with full-glass French doors, parked on a grassy Southwest Florida lot" fill priority className="object-cover" sizes="100vw" />
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">The unit</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">A real mini-home, finished and ready to move.</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            This is a finished container mini-home, not a bare shell. The charcoal-painted steel exterior opens through full-glass French doors into a bright, insulated interior with wood-look vinyl plank flooring, a kitchenette, and a private bathroom. Because it sits on a tandem-axle trailer, it can be transported and placed on your property, then relocated later if your needs change.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-container-steel/20 bg-white p-6 shadow-soft">
                <div className="text-3xl" aria-hidden>{h.icon}</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{h.title}</h3>
                <p className="mt-3 text-text-secondary">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Photo tour</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Inside and out</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Real photos of the actual unit. What you see is what you get.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <figcaption className="p-4 text-sm text-text-secondary">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">What is included</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Standard with this unit</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-success font-bold">✓</span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Add-ons</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Make it yours</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">These add-ons are available on this unit and on our custom container builds. Final pricing depends on your site and selections.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy">{a.name}</h3>
                <p className="mt-1 font-semibold text-orange">{a.price}</p>
                <p className="mt-3 text-sm text-text-secondary">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoning reminder */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="rounded-2xl border-2 border-orange bg-white p-8 shadow-soft">
            <p className="eyebrow text-orange-deep">Before you buy</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Check zoning and permitting first</h2>
            <p className="mt-4 max-w-3xl text-text-secondary">
              Container homes are legal in Florida, but they are not automatically permitted everywhere. Verify whether your local municipality&apos;s building department allows Accessory Dwelling Units (ADUs) and upcycled shipping containers on your parcel.
            </p>
            <p className="mt-4 max-w-3xl font-semibold text-navy">
              Do not purchase or place anything on your property until we have discussed the project and consulted with your local building and zoning officials.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Interested in this mini-home?"
        subtext="Reach out and we can walk you through the unit, add-ons, transport, and placement for your property."
        buttonLabel="Contact Seacoast"
      />
    </>
  );
}
