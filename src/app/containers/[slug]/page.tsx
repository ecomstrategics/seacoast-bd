import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { CrossSellBlock, type CrossSellItem } from "@/components/CrossSellBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SpecTable } from "@/components/SpecTable";
import { ComparisonTable } from "@/components/ComparisonTable";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import Image from "next/image";
import { SchemaScript, productSchema, faqSchema } from "@/components/Schema";
import { containers, getContainerBySlug } from "@/data/containers";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return containers.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const container = getContainerBySlug(params.slug);
  if (!container) return {};
  return {
    title: container.name,
    description: container.shortDescription,
  };
}

/* ─────────────────────────────────────────
   PER-SLUG FAQ DATA
───────────────────────────────────────── */
const slugFaqs: Record<string, FAQItem[]> = {
  storage: [
    { question: "What sizes are available?", answer: "We offer 20 ft, 40 ft standard, and 40 ft high-cube containers. We source new (one-trip) and quality-inspected used units depending on your budget and intended use." },
    { question: "Do I need a permit for a storage container?", answer: "For most SW Florida counties, a storage-only container on private residential property does not require a permit. Rules vary by county and HOA. We provide permit guidance as part of every delivery quote." },
    { question: "Can I get a roll-up door instead of cargo doors?", answer: "Yes. Roll-up doors, side man-doors, and combination configurations are all available as upgrades. Great for easy daily access without swinging the full cargo doors." },
    { question: "How is delivery handled?", answer: "We coordinate delivery, crane or tilt-bed offload, site leveling, and pad prep if needed. You do not need a forklift or special equipment on your end." },
    { question: "Will a steel container rust in Florida humidity?", answer: "Corten steel is designed to resist corrosion. For long-term performance in coastal climates, we recommend a paint or sealed coating, which we include in our finish packages." },
  ],
  "guest-houses": [
    { question: "Will it actually look like a shipping container when finished?", answer: "Only if you want it to. With Hardie board siding, stucco, a real roof line, and trim matched to your home, most finished guest houses are indistinguishable from a stick-built cottage. We show you photos before we start." },
    { question: "What is the lead time from order to move-in?", answer: "A fully finished guest house typically runs 12 to 20 weeks from contract to move-in, depending on finish level and permit timelines. Studio configurations are faster; multi-container builds take longer." },
    { question: "Can a container guest house be financed?", answer: "Yes. Container builds qualify for Hearth financing and some construction loan products. We can walk you through options when you request your quote." },
    { question: "Do you handle permitting for habitable containers?", answer: "Yes. We manage the full permit process for every habitable container build, including engineering, county submission, and inspections. We know the process for Sarasota, Lee, Manatee, Charlotte, Collier, and Hillsborough counties." },
    { question: "Can I move the container later?", answer: "Yes. Containers are inherently mobile. Moving one requires plumbing and electrical disconnects, a crane or tilt-bed truck, and re-installation at the new site. We handle all of it." },
    { question: "Does a container guest house add to my property value?", answer: "Habitable containers generally add to property value similarly to a traditional addition. Insurance treatment varies by carrier. We recommend a conversation with your insurer before you start." },
  ],
  "offices-workshops": [
    { question: "Is a container office or workshop tax-deductible for my business?", answer: "Containers used for business purposes are typically depreciable assets. Consult your accountant for your specific situation, but many business clients use container offices for meaningful tax benefits." },
    { question: "How fast can I get a container office up and running?", answer: "A basic climate-controlled container office can be ready in 6 to 10 weeks from order. Finished interior builds with custom layouts take longer. We can scope a fast-track option if timing is critical." },
    { question: "Can it move if my business relocates?", answer: "Yes. One of the core advantages of a container office or workshop is mobility. Disconnect utilities, load it, and reinstall at the new location." },
    { question: "What electrical capacity can you wire in?", answer: "We wire to your spec. Standard builds include a 100-amp panel. Workshop builds often need 200-amp service for heavy equipment. We size it correctly for the work being done inside." },
    { question: "Do you handle permits for commercial container use?", answer: "Yes. Commercial permitting requirements vary by county and use type. We assess your use case, advise on what is required, and handle the submission and inspection process." },
  ],
  "storm-shelters": [
    { question: "What is the wind rating on your shelters?", answer: "Our storm shelter containers are standard corten steel shipping containers with proper anchoring, engineered to withstand Cat-5 wind loads. We provide engineering documentation on request." },
    { question: "Do these meet FEMA shelter specifications?", answer: "Our shelters are designed with FEMA community shelter guidelines as a reference. For certified FEMA-compliant installations, we work with a licensed engineer to meet the specific spec required. Ask us about certified builds." },
    { question: "How long does installation take?", answer: "A complete shelter install, including site prep, anchoring, and finish, typically takes 2 to 4 weeks from delivery depending on site conditions and customization." },
    { question: "Can we actually shelter in it during a storm?", answer: "Yes, that is the point. Shelters include ventilation, backup power hookup, emergency lighting, and a ballistic-rated entry door option. They are built to keep occupants safe during a direct hit." },
    { question: "Do I need a permit for a storm shelter container?", answer: "In most cases, yes, especially for permanent in-ground or anchored installations. We handle the permit process as part of every shelter build." },
  ],
};

/* ─────────────────────────────────────────
   PER-SLUG CROSS-SELL DATA
───────────────────────────────────────── */
const slugCrossSell: Record<string, CrossSellItem[]> = {
  storage: [
    { icon: "🏡", title: "Container Guest Houses", href: "/containers/guest-houses", blurb: "Need more than storage? A finished guest house starts with the same steel shell and adds living, sleeping, and cooking space." },
    { icon: "🏗️", title: "Container Offices & Workshops", href: "/containers/offices-workshops", blurb: "Add electrical, climate control, and a workspace finish to turn a storage container into a productive business asset." },
    { icon: "🛡️", title: "Storm Shelters", href: "/containers/storm-shelters", blurb: "A storm-rated container configured as a shelter rather than storage. Built to keep you safe when you cannot evacuate." },
  ],
  "guest-houses": [
    { icon: "🏗️", title: "Container Offices & Workshops", href: "/containers/offices-workshops", blurb: "Building a guest house? Consider adding a detached office or workshop. Same crew, same build window, one project." },
    { icon: "🏠", title: "Roofing", href: "/services/roofing", blurb: "We match your container's roof material and pitch to your existing home. One contractor for both jobs." },
    { icon: "🪟", title: "Siding", href: "/services/siding", blurb: "Hardie board, stucco, or vinyl siding that matches your house down to the paint color. Seamless curb appeal." },
  ],
  "offices-workshops": [
    { icon: "🏡", title: "Container Guest Houses", href: "/containers/guest-houses", blurb: "Already thinking about a detached workspace? Many clients add a guest house on the same project." },
    { icon: "📦", title: "Storage Containers", href: "/containers/storage", blurb: "Pair your office build with additional secure storage for inventory, equipment, or supplies." },
    { icon: "🏗️", title: "Room Additions", href: "/services/room-additions", blurb: "Need the workspace attached to your main building? We build traditional room additions and enclosed spaces too." },
  ],
  "storm-shelters": [
    { icon: "🛡️", title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "A shelter is only part of a full storm plan. Our preparedness program covers boarding, shuttering, and priority emergency response." },
    { icon: "🔧", title: "Storm Damage Repair", href: "/services/storm-damage-repair", blurb: "After the storm passes, we handle damage assessment, insurance documentation, and full repairs." },
    { icon: "📦", title: "Storage Containers", href: "/containers/storage", blurb: "Storm-rated storage for hurricane supplies, generator fuel, and emergency equipment alongside your shelter." },
  ],
};

function PrebuiltOptionsCallout() {
  return (
    <section className="section dark-band bg-navy">
      <div className="container">
        <div className="grid gap-8 rounded-2xl border border-container-steel/20 bg-white p-8 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Prebuilt options</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Looking for a ready-built mini-home?</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              We have a finished mobile container mini-home available now. Move-in finished interior, kitchenette, and bathroom on a road-ready trailer. Base price $35,000 with add-ons available.
            </p>
          </div>
          <Link href="/containers/prebuilt" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">
            View Prebuilt Options
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PER-SLUG BODY CONTENT
───────────────────────────────────────── */
function StorageContent() {
  return (
    <>
      {/* Sizes & specs */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Sizes and specs</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Pick the right size for the job</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">All containers are corten steel, rated for ocean shipping in hurricane-force conditions. We source new one-trip units and quality-inspected used units.</p>
          <div className="mt-8">
            <SpecTable
              headers={["Size", "Footprint", "Interior Volume", "Best For", "Starting Price"]}
              rows={[
                ["20 ft", "8 ft x 20 ft", "Approx. 1,170 cu ft", "Vehicles, boats, business inventory", "Starting at $3,200 delivered"],
                ["40 ft standard", "8 ft x 40 ft", "Approx. 2,390 cu ft", "Large equipment, multi-use, future conversion", "Starting at $13,500"],
                ["40 ft high-cube", "8 ft x 40 ft x 9'6\"", "Approx. 2,700 cu ft", "Tall equipment, walk-in clearance, HVAC add-ons", "Starting at $15,500"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* Comparison: storage container vs alternatives */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">How it compares</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Storage container vs. the alternatives</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Most homeowners compare containers to self-storage rentals or pre-fab sheds. Here is how they actually stack up.</p>
          <div className="mt-8">
            <ComparisonTable
              columns={["Storage Container", "Self-Storage Unit", "Garden Shed"]}
              rows={[
                { label: "You own it", values: [true, false, true] },
                { label: "Hurricane rating", values: ["Cat 5", "None", "Low"] },
                { label: "10-year cost", values: ["Own outright", "Ongoing rent", "Depreciates"] },
                { label: "Secure (lockable steel)", values: [true, "Shared facility", false] },
                { label: "Can be moved", values: ["Yes (truck/crane)", "N/A", "Limited"] },
                { label: "Customizable interior", values: ["Highly", "No", "Limited"] },
                { label: "Long-term durability", values: ["50+ years", "N/A", "10-20 years"] },
                { label: "Permit required (storage use)", values: ["Usually no", "None", "Sometimes"] },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Upgrade options */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">What is included</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Standard build</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Cat-5 corten steel container shell (new one-trip or inspected used)",
                "Cargo swing doors (front)",
                "Steel floor (hardwood floor optional upgrade)",
                "Sealed and painted exterior",
                "Delivery to your site within SW Florida",
                "Site leveling and basic placement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-success font-bold">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Go further</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Upgrade options</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Roll-up door (instead of or in addition to cargo doors)",
                "Side man-door for easy daily foot access",
                "Vents and louvers for airflow",
                "Full insulation package",
                "Interior shelving and racking systems",
                "Lighting and electrical hookup",
                "Custom exterior paint or siding",
                "Pad and foundation installation",
                "Lock boxes and security hardware",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-orange font-bold">+</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Delivery and placement</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">We handle the hard part</h2>
          <p className="mt-4 text-text-secondary">Storage container delivery is more than dropping a box in your yard. Seacoast coordinates delivery logistics, crane or tilt-bed offload, pad preparation, and site leveling so the container lands level and stays level. We also advise on county permit requirements for your specific parcel so you are not surprised after the fact.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/process-crane-placement.webp" alt="Crane placing a 40-foot shipping container on a residential concrete pad, operator directing from the ground" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/process-finished-storage.webp" alt="Finished 20-foot storage container with roll-up door and custom paint parked next to a residential garage" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GuestHouseContent() {
  return (
    <>
      {/* Before/after slider */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl">
          <p className="eyebrow">See the transformation</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Raw container to finished guest house</h2>
          <p className="mt-4 text-text-secondary">Drag the slider to see the transformation from a standard shipping container to a finished, sided, roofed guest cottage.</p>
          <div className="mt-8">
            <BeforeAfterSlider
              before={{ type: "image", src: "/images/containers/before-after-before.webp", alt: "Raw unpainted 40-foot shipping container on bare ground with cargo doors open — before Seacoast finish work" }}
              after={{ type: "image", src: "/images/containers/before-after-after.webp", alt: "Finished container guest house with Hardie board siding, gabled roof, front porch, and mini-split outdoor unit surrounded by tropical landscaping" }}
            />
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Configurations</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Choose your build</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Every configuration below can be customized. Siding, roofline, interior finish, and appliances are all variables. We scope and price based on your exact spec.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { label: "Studio", container: "20 ft container", sqft: "Approx. 160 sq ft", includes: "Kitchenette, full bathroom, sleeping area, mini-split", icon: "🏠", price: "Starting at $32,000" },
              { label: "One-Bedroom", container: "40 ft container", sqft: "Approx. 320 sq ft", includes: "Separate bedroom, full bathroom, living area, kitchenette", icon: "🛏️", price: "Starting at $50,000" },
              { label: "Two-Bedroom", container: "40 ft + 20 ft joined", sqft: "Approx. 480 sq ft", includes: "Two bedrooms, full bathroom, living and dining area, full kitchen", icon: "🏘️", price: "Starting at $78,000" },
              { label: "Custom Multi-Container", container: "Paired, stacked, or joined", sqft: "Scoped to your site", includes: "Any configuration. Includes structural engineering for joined or stacked builds.", icon: "🔧", price: "Starting at $90,000" },
            ].map((config) => (
              <div key={config.label} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <div className="text-3xl" aria-hidden>{config.icon}</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{config.label}</h3>
                <p className="mt-1 text-sm font-semibold text-container-steel uppercase tracking-wide">{config.container}</p>
                <p className="mt-1 text-sm text-text-secondary">{config.sqft}</p>
                <p className="mt-3 text-sm text-text-secondary"><span className="font-semibold text-charcoal">Standard includes:</span> {config.includes}</p>
                <p className="mt-3 text-sm font-semibold text-orange">{config.price} →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost story */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow">The cost story</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">Faster timeline. More predictable budget.</h2>
          <p className="mt-4 max-w-2xl text-white/75">Traditional additions in Southwest Florida run $250 to $400 per square foot, take 6 to 12 months, and require full permitting with every trade coordinated separately. Container guest houses come in below that range for most configurations and are delivered in 12 to 20 weeks, not 12 to 18 months. We quote a fixed scope so you know the full number before we start. Contact us for current project pricing based on your specific site and finish goals.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact?service=containers-guest-houses" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Get a Guest House Quote</Link>
            <Link href="/financing" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See Financing Options</Link>
          </div>
        </div>
      </section>

      {/* Standard includes vs upgrades */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Standard build includes</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Every guest house comes with</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Cat-5-rated corten steel container shell",
                "Full insulation, framing, and drywall interior",
                "Mini-split HVAC (one zone)",
                "100-amp electrical panel and wiring",
                "Plumbing rough-in and supply lines",
                "Standard bathroom (toilet, sink, walk-in shower)",
                "Standard kitchenette (sink, counter, hookups for appliances)",
                "Two windows and one entry door",
                "Exterior primer and base coat",
                "Delivery, crane placement, and site leveling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-success font-bold">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Go further</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Available upgrades</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Premium siding: Hardie board, stucco, vinyl, or metal",
                "Custom roofline: shed, gable, or mansard profile",
                "Additional windows, French doors, or glass sliders",
                "Full kitchen with appliances (fridge, range, dishwasher)",
                "Multiple HVAC zones for larger configurations",
                "Interior finish levels: basic, mid, or luxury",
                "Luxury bathroom: soaking tub, tile work, double vanity",
                "Porch, deck, or pergola additions",
                "RV hookups for off-grid or mobile placement",
                "Exterior landscaping coordination",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-orange font-bold">+</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Built to match your home</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Finish styles</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Every finish below is available on our guest house builds. The goal is always the same: when you are done, it should look like it belongs there.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/guest-house-hardie-metal.webp" alt="Container guest house with white Hardie board lap siding, covered front porch, and standing-seam metal roof matching the main house" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/guest-house-stucco-tile.webp" alt="Container guest house finished with stucco exterior and terra cotta roof tiles matching a Spanish-style Florida home" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/guest-house-cedar-batten.webp" alt="Container guest house with board-and-batten cedar siding, large picture window, and tropical garden surround" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/guest-house-studio-interior.webp" alt="Interior of finished container studio with open living and sleeping area, kitchenette, plank flooring, and high-contrast trim" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/guest-house-bathroom.webp" alt="Interior bathroom of finished container guest house with walk-in tile shower, floating vanity, and natural light from frosted window" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/guest-house-aerial.webp" alt="Aerial view of container guest house installed behind main house with connected patio and pool area in a Southwest Florida suburban neighborhood" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Permitting */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">Permitting and code</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">We handle the permit process</h2>
          <p className="mt-4 text-text-secondary">Container guest houses are habitable structures under Florida Building Code, which means they require a permit in every SW Florida county. We manage the full process, including structural engineering drawings, county submission, inspection scheduling, and final certificate of occupancy. Most counties in our service area (Sarasota, Lee, Manatee, Charlotte, Collier, and Hillsborough) have a well-established path for this type of build. Permit timelines vary; we factor them into your project schedule from day one.</p>
        </div>
      </section>

      {/* Use cases */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Use cases</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Who builds container guest houses</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "👨‍👩‍👧", label: "In-law suite", body: "Keep family close without living on top of each other. A finished guest house gives aging parents or adult children their own entrance, kitchen, and bathroom." },
              { icon: "✈️", label: "Guest cottage for snowbird season", body: "Out-of-state family visits for weeks at a time. A dedicated guest house means everyone is comfortable and no one is sleeping on the pull-out." },
              { icon: "🏠", label: "Airbnb and short-term rental income", body: "A finished container guest house on your property qualifies as a separate dwelling and can generate rental income on Airbnb or VRBO year-round." },
              { icon: "💻", label: "Home office with separation", body: "Work-from-home professionals who need a real boundary between work and home. Walk out your back door into a proper office." },
              { icon: "🌴", label: "Vacation cabin on a rural lot", body: "Off-grid placement with RV hookups, solar, and a propane system. A full-season cabin at a fraction of traditional build cost." },
              { icon: "🔑", label: "Property value addition", body: "Adding a habitable structure to your lot adds appraised value. Many clients use the rental income to offset or fully cover the build cost over time." },
            ].map((uc) => (
              <div key={uc.label} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                <div className="text-3xl" aria-hidden>{uc.icon}</div>
                <h3 className="mt-3 font-heading font-bold text-navy">{uc.label}</h3>
                <p className="mt-2 text-sm text-text-secondary">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">From concept to move-in</h2>
          <ol className="mt-8 space-y-6">
            {[
              { step: "1", title: "Design consultation", body: "We review your site, goals, and budget. You leave with a clear configuration recommendation, a preliminary scope, and a realistic timeline." },
              { step: "2", title: "Site prep", body: "Pad or foundation installation, utility connections, and permit submission. We coordinate all trades. You get a single point of contact." },
              { step: "3", title: "Container build-out", body: "Containers can be partially built in our facility before delivery, which reduces on-site time and weather exposure. Interior framing, insulation, rough plumbing, and electrical all happen before the crane shows up." },
              { step: "4", title: "Delivery and placement", body: "Crane offload and precise positioning on the prepared pad. Most placements take a few hours once the crane is on-site." },
              { step: "5", title: "Finish work", body: "Siding, roofing, windows, doors, interior finishes, HVAC hookup, plumbing fixtures, and final electrical. This is where the container stops looking like a container." },
              { step: "6", title: "Inspection and move-in", body: "Final county inspection, certificate of occupancy, and your walkthrough. We do not consider a job done until everything is right." },
            ].map((step) => (
              <li key={step.step} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-deep font-heading text-lg font-bold text-white">{step.step}</div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-text-secondary">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function OfficesWorkshopsContent() {
  return (
    <>
      {/* Hero visual */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/office-exterior-suburban.webp" alt="Finished container office exterior with glass entry door, painted metal siding, small sign, and parking area in a Florida suburban setting" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/office-interior.webp" alt="Interior of finished container office with desk, monitor, shelving, mini-split, plank flooring, and recessed lighting" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Use cases</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Who builds container offices and workshops</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🏢", label: "Mobile contractor office", body: "On-site office that moves with the job. Climate-controlled, wired for computers and printers, lockable." },
              { icon: "📸", label: "Photography or creative studio", body: "Controlled environment with custom lighting, soundproofing options, and a professional-feel finish." },
              { icon: "🛒", label: "E-commerce fulfillment", body: "Climate-controlled, organized storage and packing space with a 200-amp panel for conveyors or automated equipment." },
              { icon: "🎙️", label: "Podcast or recording studio", body: "Acoustic insulation package, isolated from main building noise, custom ventilation for equipment." },
              { icon: "🐕", label: "Dog grooming or pet care", body: "Plumbed grooming station, floor drain, HVAC, easy-clean surfaces. Ready for a commercial permit application." },
              { icon: "🔧", label: "Mechanic or woodworking workshop", body: "Heavy-duty 200-amp electrical for tools and lifts. Overhead lighting, roll-up door for vehicle access." },
            ].map((uc) => (
              <div key={uc.label} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                <div className="text-3xl" aria-hidden>{uc.icon}</div>
                <h3 className="mt-3 font-heading font-bold text-navy">{uc.label}</h3>
                <p className="mt-2 text-sm text-text-secondary">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard includes vs upgrades */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Standard build includes</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Every office or workshop comes with</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Cat-5-rated corten steel container shell",
                "Full insulation, framing, and drywall interior",
                "Mini-split HVAC",
                "100-amp electrical panel and outlets",
                "LED overhead lighting",
                "One entry door (commercial-grade lockset)",
                "Two windows",
                "Painted exterior",
                "Delivery and site leveling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-success font-bold">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Go further</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Available upgrades</h2>
            <ul className="mt-6 space-y-3">
              {[
                "200-amp panel for heavy equipment",
                "Roll-up or overhead door for vehicle access",
                "Acoustic insulation for studio builds",
                "Floor drain and utility sink (workshop or grooming)",
                "Epoxy floor coating",
                "Network and data wiring (cat6, fiber)",
                "Security camera and alarm pre-wire",
                "Custom siding to match adjacent building",
                "Covered exterior walkway or awning",
                "Generator hookup and transfer switch",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-orange font-bold">+</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business advantages */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow">Business advantages</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">Three reasons business owners choose containers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: "💸", title: "Tax depreciation", body: "Containers used for business are depreciable assets. Many clients recover a significant portion of the build cost in Year 1 deductions. Consult your accountant for your situation." },
              { icon: "🚛", title: "Fully mobile", body: "If your business moves, the office moves with it. Disconnect utilities, load it on a tilt-bed, and reinstall at the new site. Not possible with a stick-built addition." },
              { icon: "⚡", title: "Fast deployment", body: "A basic climate-controlled office can be ready in 6 to 10 weeks from order. Traditional construction for comparable space often takes six months or more." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl" aria-hidden>{item.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Finished builds</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Container offices and workshops</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/office-40ft-commercial.webp" alt="Exterior of a converted 40-foot container professional office with glass entry door and commercial signage" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/workshop-interior.webp" alt="Container workshop interior with roll-up door open, tool storage wall, and epoxy floor" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/podcast-studio-interior.webp" alt="Container podcast studio interior with acoustic panels, microphone setup, and LED strip lighting" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StormSheltersContent() {
  return (
    <>
      {/* Urgency statement */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">When evacuation is not an option</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">A structure that can take a direct hit</h2>
          <p className="mt-4 text-text-secondary">Coastal Florida families who have ridden out storms know what standard construction does under Cat-4 or Cat-5 conditions. A steel shipping container, properly anchored and configured, is one of the most resilient residential shelter options available. These are not bunkers; they are practical, finished structures that function as guest rooms, storage, or offices until the storm comes and then become your fallback.</p>
          <div className="mt-6">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src="/images/containers/storm-shelter-hero.webp" alt="Anchored container storm shelter with reinforced entry door, ventilation grilles, and exterior signage on a residential property in Southwest Florida" fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Built for the worst</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">What makes these shelters different</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { icon: "🏗️", title: "Cat-5 steel construction", body: "Standard shipping containers are manufactured for ocean transport in hurricane-force conditions. The corten steel walls, floor, and ceiling create a rigid shell that resists wind loads, debris impact, and structural collapse." },
              { icon: "⚓", title: "Engineered anchoring system", body: "A container that blows over is not a shelter. Our anchoring systems are engineered for the specific soil and site conditions at your location, designed to hold under sustained Cat-5 winds." },
              { icon: "💨", title: "Active ventilation", body: "Sealed containers build heat rapidly. Our shelter builds include engineered ventilation designed for occupancy under emergency conditions, with passive backup if power fails." },
              { icon: "🔋", title: "Backup power hookup", body: "Generator transfer switch pre-wired into every shelter build. Bring your generator and maintain lighting, communication, and climate control during and after a storm." },
              { icon: "🚪", title: "Heavy-duty entry door", body: "Standard build includes a heavy commercial steel door with multi-point locking. Ballistic-rated door options are available for maximum debris resistance." },
              { icon: "🆘", title: "Emergency communication pre-wire", body: "Data and antenna conduit run during the build so you can maintain radio, cell booster, or satellite communication from inside the shelter." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                <div className="shrink-0 text-3xl" aria-hidden>{item.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard includes vs upgrades */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Standard build includes</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Every shelter comes with</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Cat-5-rated corten steel container (20 ft or 40 ft)",
                "Engineered anchoring system for your site",
                "Heavy commercial steel entry door with multi-point lock",
                "Active ventilation system (electric with passive backup)",
                "Emergency lighting (battery-backed LED fixtures)",
                "Generator hookup and transfer switch pre-wire",
                "Interior insulation and wall liner",
                "Communication conduit for antenna or satellite",
                "Painted exterior",
                "Delivery and anchor installation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-success font-bold">✓</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Go further</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Available upgrades</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Ballistic-rated entry door (maximum debris resistance)",
                "FEMA-certified engineering documentation",
                "In-ground or partially buried installation",
                "Dual-entry (front and rear escape hatch)",
                "Full HVAC (mini-split for extended occupancy)",
                "Water storage tank and hookup",
                "Food and supply storage shelving",
                "Interior finish: painted walls, flooring, sleeping bench",
                "Multi-container shelter build (larger families or commercial)",
                "Connection to existing home via covered walkway",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-orange font-bold">+</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Storm Lifecycle cross-link */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Full storm plan</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">A shelter is one part of the picture</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">The most prepared homeowners pair a storm shelter with a complete storm preparedness plan: custom boards, priority service contracts, and first-in-line emergency response when a named storm forms.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services/storm-preparedness" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">See Storm Preparedness Services</Link>
            <Link href="/services/storm-damage-repair" className="rounded-full border border-navy/25 px-6 py-3 font-bold text-navy hover:bg-navy hover:text-white">Storm Damage Repair</Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Shelter builds</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">What they look like installed</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/storm-shelter-backyard.webp" alt="20-foot container storm shelter anchored to a concrete pad with reinforced door and ventilation grilles in a residential backyard" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/storm-shelter-interior.webp" alt="Interior of finished storm shelter with emergency lighting, storage shelving, sleeping bench, and ventilation unit" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/containers/storm-shelter-blended.webp" alt="Container storm shelter with exterior painted and landscaped to blend seamlessly with the adjacent residential yard" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export default function ContainerProductPage({ params }: Props) {
  const container = getContainerBySlug(params.slug);
  if (!container) notFound();

  const faqs = slugFaqs[params.slug] ?? [];
  const crossSellItems = slugCrossSell[params.slug] ?? [];
  const schemaData = productSchema({
    name: container.name,
    description: container.shortDescription,
    url: `/containers/${container.slug}`,
    sku: `SWFL-${container.slug.toUpperCase()}`,
    offers: { price: container.startingPriceValue ?? "9500", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  });
  const faqData = faqs.length > 0 ? faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer }))) : null;

  return (
    <>
      <SchemaScript schema={faqData ? [schemaData, faqData] : schemaData} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Containers", href: "/containers" },
              { label: container.name },
            ]}
          />
          <div className="mt-4 text-4xl" aria-hidden>{container.icon}</div>
          <h1 className="mt-4 font-heading text-5xl font-bold">{container.name}</h1>
          <p className="mt-2 text-lg font-semibold text-orange uppercase tracking-wide">{container.tagline}</p>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{container.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/contact?service=containers-${container.slug}`} className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Get a Free Quote</Link>
            <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">← All Containers</Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Licensed and Insured</p>
            <p className="mt-3 text-text-secondary">Every container build is performed by licensed Florida contractors with full insurance coverage.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">40+ Years Experience</p>
            <p className="mt-3 text-text-secondary">Four decades of Southwest Florida project work across residential, commercial, and multi-family properties.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Financing Available</p>
            <p className="mt-3 text-text-secondary">Container builds can be financed through Hearth or traditional construction financing. Ask us for options.</p>
          </div>
        </div>
      </section>

      {/* Per-slug body content */}
      {params.slug === "storage" && <StorageContent />}
      {params.slug === "guest-houses" && <GuestHouseContent />}
      {params.slug === "offices-workshops" && <OfficesWorkshopsContent />}
      {params.slug === "storm-shelters" && <StormSheltersContent />}

      <PrebuiltOptionsCallout />

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section dark-band bg-navy-deep">
          <div className="container max-w-3xl">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy mb-8">{container.name} FAQ</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* Cross-sell */}
      {crossSellItems.length > 0 && (
        <CrossSellBlock heading="What pairs with this" items={crossSellItems} />
      )}

      <CTASection
        variant="orange"
        heading={`Ready to discuss your ${container.name.toLowerCase()} project?`}
        subtext="Request a no-pressure quote from a team that understands Southwest Florida properties."
        buttonLabel="Get a Free Quote"
      />
    </>
  );
}
