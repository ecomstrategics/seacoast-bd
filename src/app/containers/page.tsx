import type { Metadata } from "next";
import Link from "next/link";
import { ContainerCard } from "@/components/ContainerCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CrossSellBlock } from "@/components/CrossSellBlock";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, localBusinessSchema, faqSchema } from "@/components/Schema";
import Image from "next/image";
import { containers } from "@/data/containers";

export const metadata: Metadata = {
  title: "Custom Containers, Built for Florida Living",
  description:
    "Cat-5-rated storage containers, custom guest houses, offices, workshops, and storm shelters. Seacoast builds and finishes shipping containers to match your home and your hurricane plan.",
};

const landingFaqs = [
  {
    question: "What is a Cat-5-rated container?",
    answer:
      "Standard shipping containers are built from corten steel and engineered for ocean shipping in hurricane-force conditions. With proper anchoring and site prep, they exceed Florida Building Code wind ratings for most residential structures.",
  },
  {
    question: "Do I need a permit for a container on my property?",
    answer:
      "It depends on your county and how the container will be used. For storage only, many SW Florida counties require no permit. For habitable structures like guest houses, permits are required. Seacoast handles the permit process for you.",
  },
  {
    question: "What about zoning for a container home?",
    answer:
      "Zoning and permitting is the most crucial step. Container homes are legal in Florida, but they are not automatically permitted everywhere. You must verify whether your local municipality's building department allows Accessory Dwelling Units (ADUs) and upcycled shipping containers on your parcel. Do not purchase or place anything on your property until we have discussed the project and consulted with your local building and zoning officials.",
  },
  {
    question: "How long does a container last?",
    answer:
      "A properly maintained and finished container can last 50 or more years. The corten steel shell is designed to resist rust and corrosion, and our Florida-appropriate finishes (siding, stucco, sealed coatings) extend that lifespan further.",
  },
  {
    question: "Can a container guest house be financed?",
    answer:
      "Yes. Container builds can be financed through Hearth or traditional construction financing. Ask us about options when you request your quote.",
  },
  {
    question: "Will it look like a shipping container when you are done?",
    answer:
      "Only if you want it to. Our standard finishes include Hardie board siding, stucco, metal roofing, custom trim, and paint matched to your home. Most finished guest houses are indistinguishable from stick-built cottages.",
  },
  {
    question: "What does it cost?",
    answer:
      "Storage containers start around $4,000 delivered, with add-ons available. Finished container offices and workshops start around $13,000, 20-foot guest house builds start around $32,000, 40-foot guest house builds start around $50,000, and storm shelters start around $3,500 (they require a foundation). Final pricing varies by site, permitting, configuration, utilities, and finish level.",
  },
];

export default function ContainersLandingPage() {
  const schemaItems = landingFaqs.map((f) => ({ question: f.question, answer: f.answer }));
  return (
    <>
      <SchemaScript schema={[localBusinessSchema(), faqSchema(schemaItems)]} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Containers" }]} />
          <p className="eyebrow mt-4">Seacoast Container Builds</p>
          <h1 className="mt-2 font-heading text-5xl font-bold leading-tight">Custom Containers,<br className="hidden md:block" /> Built for Florida Living.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">Cat-5-rated storage. Custom guest houses. Mobile offices. Storm shelters. We build and finish shipping containers to match your home and your hurricane plan.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#products" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Browse Container Builds</Link>
            <Link href="/contact?service=containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">Configure Your Container</Link>
          </div>
        </div>
      </section>

      {/* Hero visual */}
      <div className="bg-navy pb-16">
        <div className="container">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image src="/images/containers/containers-hero.webp" alt="Finished container guest house with Hardie siding and stucco matching the adjacent home exterior, palm trees, coastal Southwest Florida" fill className="object-cover" sizes="100vw" />
          </div>
        </div>
      </div>

      {/* Why containers */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Why containers</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Built like a fortress. Finished like a home.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-container-steel/20 bg-white p-6 shadow-soft">
              <div className="text-3xl" aria-hidden>🏗️</div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">Built like a fortress</h3>
              <p className="mt-3 text-text-secondary">Cat-5-rated corten steel construction beats stick-built storage and standard sheds for hurricane survival, security, and longevity. These structures were built for ocean shipping in the worst weather on earth.</p>
            </div>
            <div className="rounded-2xl border border-container-steel/20 bg-white p-6 shadow-soft">
              <div className="text-3xl" aria-hidden>📅</div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">Year-round value</h3>
              <p className="mt-3 text-text-secondary">Add a guest house, office, or workshop without the timeline or permitting headache of traditional construction. Weeks, not years. Move in, then start generating rental income or business deductions.</p>
            </div>
            <div className="rounded-2xl border border-container-steel/20 bg-white p-6 shadow-soft">
              <div className="text-3xl" aria-hidden>🏡</div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy">Finished to match your home</h3>
              <p className="mt-3 text-text-secondary">Custom siding, stucco, roofing, mini-splits, full bathrooms, and trim that matches your existing home. Most finished container builds look like a real building, because they are one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section id="products" className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Product line</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Four ways to put containers to work</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Every container build is delivered, finished, and integrated by licensed Florida contractors. Not a drop-and-walk-away operation.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {containers.map((container) => (
              <ContainerCard key={container.slug} container={container} />
            ))}
          </div>
        </div>
      </section>

      {/* Prebuilt options */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="grid gap-8 rounded-2xl border border-container-steel/20 bg-white p-8 shadow-soft md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">Prebuilt options</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Mobile mini-home available now</h2>
              <p className="mt-4 max-w-2xl text-text-secondary">
                A finished container mini-home on a road-ready trailer is ready to view. Move-in finished interior, kitchenette, and bathroom. Base price $35,000 with deck, solar, siding, and foundation add-ons available.
              </p>
            </div>
            <Link href="/containers/prebuilt" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">
              View Prebuilt Options
            </Link>
          </div>
        </div>
      </section>

      {/* The Seacoast difference */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow">The Seacoast difference</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">We don&apos;t just sell containers. We build them.</h2>
          <p className="mt-4 max-w-2xl text-white/75">Most container sellers drop a box in your yard and leave. Seacoast does the whole project: procurement, pad prep, delivery, finish work, permits, and hookups.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { icon: "🎨", title: "Match your home's exterior", body: "Siding, stucco, paint, trim, and roof line selected to blend with your existing property. Your neighbors won't know it's a container." },
              { icon: "⚡", title: "Full hookups included", body: "Electrical, plumbing, HVAC, and RV hookups for off-grid builds. One crew handles it all under one contract." },
              { icon: "📋", title: "Licensed Florida contractors", body: "Every container build is installed by our licensed crew, not a third-party delivery driver. Permitted, inspected, and signed off." },
              { icon: "🔧", title: "Finish work at any level", body: "Basic sealed shell to full luxury interior. We scope to your budget and timeline. No hidden costs after the bid." },
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

      {/* How we build it — real jobsite process */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">How we build it</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">From delivery to finished build</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Real photos from Seacoast container projects. Our crew handles every stage, from the day the container lands on site to the final interior finish.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { step: "1", src: "/images/containers/process/real-delivery.webp", title: "Delivered to your site", body: "We procure the container and deliver it to your pad. A forklift sets a finished office unit into place at a SW Florida jobsite.", alt: "Seacoast crew delivering a finished container office to a Southwest Florida jobsite, a forklift lifting the unit off a flatbed truck under a blue sky" },
              { step: "2", src: "/images/containers/process/real-insulation.webp", title: "Insulated and sealed", body: "Walls and ceiling get rigid foam insulation and an epoxy floor, sealing the steel shell against Florida heat and humidity.", alt: "Interior of a Seacoast container build lined floor to ceiling with rigid foam insulation panels and a sealed epoxy floor" },
              { step: "3", src: "/images/containers/process/real-buildout.webp", title: "Finished out", body: "Our crew frames, panels, wires, and trims the interior to your spec, turning the shell into a finished, livable space.", alt: "Seacoast crew member finishing the plywood-paneled interior of a container build, working from a step ladder during the build-out" },
            ].map((item) => (
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

      {/* Zoning & permitting */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <div className="rounded-2xl border-2 border-orange bg-white p-8 shadow-soft">
            <p className="eyebrow text-orange-deep">Before you buy</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Zoning and permitting is the most crucial step</h2>
            <p className="mt-4 max-w-3xl text-text-secondary">
              Container homes are legal in Florida, but they are not automatically permitted everywhere. You must verify whether your local municipality&apos;s building department allows Accessory Dwelling Units (ADUs) and upcycled shipping containers on your parcel.
            </p>
            <p className="mt-4 max-w-3xl font-semibold text-navy">
              Do not purchase or place anything on your property until we have discussed the project and consulted with your local building and zoning officials. We walk you through this first, so you never sink money into a build your county will not approve.
            </p>
            <div className="mt-6">
              <Link href="/contact?service=containers" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">Start With a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compare teaser */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="eyebrow">Container vs. everything else</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Not sure if a container is right for you?</h2>
              <p className="mt-4 text-text-secondary">We put containers head-to-head against self-storage units, garden sheds, RVs, and traditional additions across every factor that matters: hurricane rating, 10-year cost, build time, mobility, and more. We also tell you honestly when a container is not the right answer.</p>
              <div className="mt-6">
                <Link href="/containers/compare" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">See the Full Comparison</Link>
              </div>
            </div>
            <div className="flex-1 md:max-w-xs">
              <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
                {[
                  { label: "Hurricane rating", a: "Cat 5", b: "Garden Shed: Low" },
                  { label: "Build time", a: "Days to weeks", b: "Traditional: 6-12 months" },
                  { label: "Durability", a: "50+ years", b: "Self-storage: not owned" },
                ].map((row) => (
                  <div key={row.label} className="border-b border-cool-gray py-3 last:border-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">{row.label}</p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-success">Container: {row.a}</span>
                      <span className="text-sm text-text-secondary">{row.b}</span>
                    </div>
                  </div>
                ))}
                <Link href="/containers/compare" className="mt-4 block text-center text-sm font-semibold text-orange hover:underline">Full comparison table →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy mb-8">Container FAQ</h2>
          <FAQAccordion items={landingFaqs} />
        </div>
      </section>

      {/* Cross-sell to main business */}
      <CrossSellBlock
        heading="Container builds pair well with"
        items={[
          { icon: "🏠", title: "Roofing", href: "/services/roofing", blurb: "Match your container's roof line and material to your existing home. One crew, one contract." },
          { icon: "🪟", title: "Siding", href: "/services/siding", blurb: "Hardie board, stucco, or vinyl on your container to match your house exterior down to the paint color." },
          { icon: "🛡️", title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "A storm-rated container shelter paired with a full preparedness plan keeps you protected year-round." },
        ]}
      />

      <CTASection
        variant="orange"
        heading="Ready to get a container quote?"
        subtext="Tell us what you have in mind. We scope it, price it, and build it start to finish."
        buttonLabel="Get a Container Quote"
      />
    </>
  );
}
