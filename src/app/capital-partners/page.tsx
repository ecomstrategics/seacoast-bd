import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CapitalPartnerForm } from "@/components/CapitalPartnerForm";
import { SchemaScript, serviceSchema, faqSchema, personSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Florida Build-to-Rent & Capital Partnerships"),
  description:
    "Florida build-to-rent and new-construction partnerships for institutional capital, including BTR communities, 55+ housing, and land-to-delivery programs.",
};

const offerings = [
  {
    eyebrow: "Build-to-rent",
    title: "Build-to-rent communities at scale",
    body: "Funds that still want single-family exposure now have to reach it through new construction. As a build-to-rent construction partner across Florida's growth markets, Seacoast delivers SFR new construction with the crews, licensing, and capacity to take a community from site work to certificate of occupancy on a fund's timeline.",
    points: [
      "Single-family and BTR new construction, an excepted category under the pending statute",
      "Per-door and community-scale pricing built for institutional underwriting",
      "Merchant and fee-build structures for community-scale volume, not a one-off job",
    ],
  },
  {
    eyebrow: "Senior housing",
    title: "55+ and active-adult communities",
    body: "New, renovated, and converted senior housing is its own excepted category, and Southwest Florida is one of the strongest 55+ markets in the country. Seacoast runs a dedicated active-adult and 55+ build vertical that lines up the legislation, the demographics, and our footprint at the same time.",
    points: [
      "Ground-up 55+ and active-adult communities, plus conversions of existing stock",
      "Built for the SW Florida retirement and seasonal market",
      "A compliant single-family path that fits long-hold institutional capital",
    ],
  },
  {
    eyebrow: "Land to delivery",
    title: "From dirt to delivery, one chain",
    body: "Seacoast pairs new-construction capability with RealTree, its affiliated land-acquisition operator. RealTree sources parcels, Seacoast builds compliant new product on them, and we deliver to individual homebuyers or to build-to-rent capital. One accountable chain from raw land to finished, occupied home.",
    points: [
      "Land sourcing through RealTree, including tax-deed and distressed parcels",
      "Compliant new construction on acquired land",
      "Exit to individual buyers or to institutional BTR capital",
    ],
  },
];

const trackRecord = [
  { metric: "[CONFIRM]", label: "Homes & units delivered" },
  { metric: "[CONFIRM]", label: "Total project dollar volume" },
  { metric: "40+", label: "Years building in SW Florida" },
  { metric: "100%", label: "Projects documented on video" },
];

const submarkets = [
  {
    name: "Fort Myers & Cape Coral",
    body: "Lee County is one of the fastest-growing metros in the country, with sustained in-migration and a deep buyer and renter base for new single-family and BTR product.",
  },
  {
    name: "Naples & Collier County",
    body: "A premium retirement and seasonal market with strong 55+ and active-adult demand and limited new single-family supply.",
  },
  {
    name: "North Port-Sarasota-Bradenton",
    body: "One of Florida's top in-migration corridors, anchoring BTR and for-sale single-family absorption across the I-75 growth belt.",
  },
  {
    name: "Statewide programs",
    body: "Anchored in Southwest Florida and licensed to build across the state, Seacoast can extend a single relationship into a multi-market program.",
  },
];

const whySeacoast = [
  {
    heading: "40+ years of execution",
    body: "Four decades of Southwest Florida construction history, including extensive condo-complex and large-scale renovation work, the closest analog to BTR community delivery. For capital, that track record reads as execution risk taken off the table.",
  },
  {
    heading: "Every project documented on video",
    body: "Each build is filmed from setup to completion. Remote capital partners get verifiable progress and quality evidence at every draw, not just a draw request.",
  },
  {
    heading: "Capacity that scales with the deal",
    body: "Anchored in Southwest Florida and licensed to build across the state, Seacoast staffs to the size of the mandate, from a single community to a multi-market program.",
  },
  {
    heading: "Florida state certified",
    body: "Certified General Contractor CGC1509237 and Certified Roofing Contractor CCC1332648, fully insured on every project.",
  },
];

const faqs = [
  {
    question: "What is the 21st Century ROAD to Housing Act?",
    answer:
      "The 21st Century ROAD to Housing Act is federal legislation that would bar large institutional investors from buying existing single-family homes, while keeping new construction, build-to-rent new construction, and new or converted 55+ senior housing as permitted paths. The practical effect is that institutional housing capital is being pointed toward building rather than buying. The Act is still moving through Congress, so this is a positioning window, not a settled rule. See our full 21st Century ROAD to Housing Act explainer for details.",
  },
  {
    question: "Is Seacoast a build-to-rent builder in Florida?",
    answer:
      "Yes. Seacoast is a build-to-rent (BTR) and new-construction partner for institutional capital across Southwest Florida and statewide. We deliver SFR new construction, build-to-rent communities, and 55+ active-adult housing under merchant and fee-build structures, on institutional timelines and underwriting.",
  },
  {
    question: "Why partner with Seacoast specifically?",
    answer:
      "Seacoast already operates on both sides of the permitted door: new single-family and build-to-rent construction, and new or converted senior housing. With 40+ years of Southwest Florida history, extensive condo-complex and renovation experience comparable to community-scale BTR delivery, and every project documented on video, Seacoast is built to take execution risk off the table for capital partners.",
  },
  {
    question: "What markets does Seacoast build in?",
    answer:
      "Seacoast is anchored in the Southwest Florida growth corridor, including Fort Myers, Cape Coral, Naples, and the North Port-Sarasota-Bradenton metro, and is licensed to build across the state of Florida for multi-market programs.",
  },
  {
    question: "What kinds of capital partners do you work with?",
    answer:
      "Build-to-rent funds, single-family rental (SFR) operators, senior-housing investors, private equity and family offices, and land operators who need a builder in the Southwest Florida growth corridor to deliver compliant new product on a defined timeline.",
  },
];

export default function CapitalPartnersPage() {
  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Build-to-Rent and New Construction for Capital Partners",
            description:
              "Build-to-rent communities, 55+ senior housing, and land-to-delivery new construction for institutional capital across Southwest Florida and statewide.",
            url: "/capital-partners",
            serviceType: "Build-to-Rent and New Residential Construction",
            areaServed: [
              "Fort Myers, FL",
              "Cape Coral, FL",
              "Naples, FL",
              "North Port, FL",
              "Sarasota, FL",
              "Bradenton, FL",
              "Florida",
            ],
          }),
          faqSchema(faqs),
          personSchema(),
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white md:py-28">
        <Image
          src="/images/capital-partners-btr-community-swfl.webp"
          alt="Aerial view of a newly completed single-family build-to-rent community in Southwest Florida, with rows of new homes, curving streets, and a retention lake"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" aria-hidden />
        <div className="container relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Capital Partners" }]} />
          <p className="eyebrow text-orange/80">Capital partners &amp; developers</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
            Build-to-rent and new construction for institutional capital in Florida.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            The 21st Century ROAD to Housing Act would push institutional housing capital off buying existing homes and onto
            new construction, build-to-rent, and 55+ senior housing. That is exactly what Seacoast builds. We are Florida&apos;s
            build-to-rent and new-construction partner, from land to delivery, anchored in the Southwest Florida growth corridor
            and licensed statewide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#inquire" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Request a capacity conversation</Link>
            <Link href="#offerings" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See how we partner</Link>
          </div>
        </div>
      </section>

      {/* The opportunity */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="eyebrow">Why now: the 21st Century ROAD to Housing Act</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">The only legal door is build and renovate.</h2>
            <p className="mt-4 text-text-secondary">
              The 21st Century ROAD to Housing Act, the legislation moving through Congress, would bar large institutional
              investors from acquiring existing single-family homes, with steep penalties for violations. It deliberately
              keeps the door open for newly constructed homes for sale, build-to-rent new construction, and new, renovated,
              or converted 55+ senior housing.
            </p>
            <p className="mt-4 text-text-secondary">
              The net effect is that billions in institutional housing capital is being redirected from buying existing
              homes to building new ones. That capital now needs builders in growth markets. Seacoast is positioned to be
              one of them in Southwest Florida.
            </p>
            <p className="mt-4 text-sm text-text-secondary/80">
              The bill is still in the legislative process and is not yet final. We help partners get positioned ahead of it
              rather than react to it.{" "}
              <Link href="/road-to-housing-act" className="font-semibold text-orange hover:underline">
                Read the full 21st Century ROAD to Housing Act explainer.
              </Link>
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="font-heading text-xl font-bold text-navy">Permitted construction paths</p>
            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Newly constructed single-family homes for sale</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Build-to-rent new construction</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> New, renovated, or converted 55+ senior housing</li>
            </ul>
            <p className="mt-6 font-heading font-bold text-navy">Seacoast builds all three.</p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container">
          <p className="eyebrow">How we partner</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Three ways capital works with Seacoast.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offerings.map((o) => (
              <div key={o.title} className="flex flex-col rounded-2xl bg-white p-7 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">{o.eyebrow}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy">{o.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{o.body}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-text-secondary">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record / underwriting proof */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow text-orange">Track record</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">Underwriting starts with the builder.</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Capital underwrites schedule certainty and cost certainty before it underwrites a market. Seacoast brings four
            decades of delivery, deep condo-complex and renovation experience comparable to community-scale build-to-rent,
            and build-to-rent projects already underway.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trackRecord.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="font-heading text-3xl font-bold text-orange">{item.metric}</p>
                <p className="mt-2 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-lg font-bold text-white">How we engage</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Contract structures built around schedule and cost certainty: [CONFIRM: GMP / cost-plus / fee build / design-build]</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Documented, milestone-based draws with photo and video verification at each stage</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Bonding and insurance: [CONFIRM: bonding capacity / single + aggregate limits]</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-orange" aria-hidden>✓</span> Warranty: [CONFIRM: warranty terms]</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-lg font-bold text-white">Capability deck</p>
              <p className="mt-3 text-sm text-white/75">
                Request the Seacoast build-to-rent capability deck: delivery history, capacity, contract structures, and
                target submarkets, sized for institutional underwriting.
              </p>
              <Link href="#inquire" className="mt-5 inline-block rounded-full bg-orange-deep px-5 py-2.5 text-sm font-bold text-white hover:bg-copper">
                Request the capability deck
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Penalty-safe */}
      <section className="section dark-band bg-navy-deep">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Compliance</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Penalty-safe by design.</h2>
            <p className="mt-4 text-text-secondary">
              The Act carries steep penalties for buying existing single-family homes, up to $1 million per home or three
              times the purchase price. Every home Seacoast delivers is new construction or qualifying renovation, which sits
              inside the Act&apos;s permitted categories.
            </p>
            <p className="mt-4 text-text-secondary">
              Partners get single-family exposure without the acquisition penalty risk. We build the product the statute
              allows, in the markets where the demand is.
            </p>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="font-heading text-xl font-bold text-navy">Single-family exposure, on the right side of the law</p>
            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> New-construction product, not existing-home acquisition</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> Build-to-rent and for-sale single-family in permitted categories</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> 55+ and active-adult housing, separately permitted</li>
              <li className="flex gap-3"><span className="text-success" aria-hidden>✓</span> No $1M-per-home acquisition penalty exposure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Target submarkets */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Target markets</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Where the migration is.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Southwest Florida&apos;s highest-growth corridors combine sustained in-migration with one of the country&apos;s
            strongest retirement and seasonal demographics, the right place to deploy build-driven housing capital.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {submarkets.map((m) => (
              <div key={m.name} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-heading text-lg font-bold text-navy">{m.name}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Seacoast */}
      <section className="section dark-band bg-navy-deep text-white">
        <div className="container">
          <p className="eyebrow text-orange">Why Seacoast</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">Built for capital that cannot afford surprises.</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Institutional capital underwrites execution risk before it underwrites a market. Seacoast is built to take that risk off the table.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whySeacoast.map((item) => (
              <div key={item.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-heading text-xl font-bold text-orange">{item.heading}</p>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60">Anchored in Southwest Florida. Licensed to build across the state.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What capital partners ask first.</h2>
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

      {/* Inquiry form */}
      <section id="inquire" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="eyebrow text-orange/80">Get in touch</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Get positioned before the capital arrives.</h2>
            <p className="mt-4 text-text-secondary">
              Tell us the mandate: market, product type, volume, and timeline. We will walk you through how Seacoast can
              deliver compliant new construction, send the capability deck, and show where we fit in your plan.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="eyebrow">Phone</p>
                <a href="tel:+19415005431" className="mt-1 block font-heading text-2xl font-bold text-navy hover:text-orange">(941) 500-5431</a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a href="mailto:sales@seacoastbd.com" className="mt-1 block font-heading text-xl font-bold text-navy hover:text-orange">sales@seacoastbd.com</a>
              </div>
            </div>
          </div>
          <CapitalPartnerForm />
        </div>
      </section>
    </>
  );
}
