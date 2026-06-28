import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CapitalPartnerForm } from "@/components/CapitalPartnerForm";
import { SchemaScript, serviceSchema, faqSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Capital Partners & Build-to-Rent | Seacoast Building & Design",
  description:
    "The 21st Century ROAD to Housing Act is pointing institutional capital toward new construction. Seacoast is Florida's build-to-rent and new-construction partner, from land to delivery.",
};

const offerings = [
  {
    eyebrow: "Build-to-rent",
    title: "Build-to-rent communities at scale",
    body: "Funds that still want single-family exposure now have to reach it through new construction. Seacoast delivers build-to-rent product across Florida's growth markets, with the crews, licensing, and capacity to take a community from site work to certificate of occupancy on a fund's timeline.",
    points: [
      "Single-family and BTR new construction, an excepted category under the pending statute",
      "Per-door and community-scale pricing built for institutional underwriting",
      "Capacity for community-scale volume, not a one-off job",
    ],
  },
  {
    eyebrow: "Senior housing",
    title: "55+ senior housing, new and converted",
    body: "New, renovated, and converted senior housing is its own excepted category, and Southwest Florida is one of the strongest 55+ markets in the country. Seacoast runs a dedicated 55+ build vertical that lines up the legislation, the demographics, and our footprint at the same time.",
    points: [
      "Ground-up 55+ communities and conversions of existing stock",
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

const whySeacoast = [
  {
    heading: "40+ years of execution",
    body: "Four decades of Southwest Florida construction history. For capital, that track record reads as execution risk taken off the table.",
  },
  {
    heading: "Every project documented on video",
    body: "Each build is filmed from setup to completion. Remote capital partners get verifiable progress and quality evidence, not just a draw request.",
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
      "The 21st Century ROAD to Housing Act is federal legislation that would bar large institutional investors from buying existing single-family homes, while keeping new construction, build-to-rent new construction, and new or converted 55+ senior housing as permitted paths. The practical effect is that institutional housing capital is being pointed toward building rather than buying. The Act is still moving through Congress, so this is a positioning window, not a settled rule.",
  },
  {
    question: "Why partner with Seacoast specifically?",
    answer:
      "Seacoast already operates on both sides of the permitted door: new single-family and build-to-rent construction, and new or converted senior housing. It is anchored in Southwest Florida, licensed to build statewide, with 40+ years of history and every project documented on video.",
  },
  {
    question: "What kinds of capital partners do you work with?",
    answer:
      "Build-to-rent funds, single-family rental operators, senior-housing investors, and land operators who need a builder in the Southwest Florida growth corridor to deliver compliant new product on a defined timeline.",
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
              "Build-to-rent communities, 55+ senior housing, and land-to-delivery new construction for institutional capital across Southwest Florida.",
            url: "/capital-partners",
            serviceType: "Build-to-Rent and New Residential Construction",
          }),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Capital Partners" }]} />
          <p className="eyebrow text-orange/80">Capital partners &amp; developers</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
            New housing law is pointing capital at new construction.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            The 21st Century ROAD to Housing Act would push institutional housing capital off buying existing homes and onto
            new construction, build-to-rent, and 55+ senior housing. That is exactly what Seacoast builds. We are
            Florida&apos;s new-construction and build-to-rent partner, from land to delivery, anchored in the Southwest Florida growth corridor.
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
              rather than react to it.
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

      {/* Why Seacoast */}
      <section className="section dark-band bg-navy text-white">
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
      <section className="section dark-band bg-navy-deep">
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
      <section id="inquire" className="section dark-band bg-navy scroll-mt-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="eyebrow text-orange/80">Get in touch</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Get positioned before the capital arrives.</h2>
            <p className="mt-4 text-text-secondary">
              Tell us the mandate: market, product type, volume, and timeline. We will walk you through how Seacoast can
              deliver compliant new construction and where we fit in your plan.
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
