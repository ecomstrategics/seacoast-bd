import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SolutionsPillar } from "@/components/SolutionsPillar";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, serviceSchema } from "@/components/Schema";
import { getServicesByPillar } from "@/data/services";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions: Protect. Improve. Expand.",
  description:
    "Protect your property from storms, improve its exterior, or expand with containers and additions. Find the right Seacoast solution for your Florida project.",
};

export default function SolutionsPage() {
  const pillarBlurbs: Record<string, string> = {
    protect:
      "Plan ahead for storms, check emergency-service availability, and arrange assessment and repairs after the weather clears.",
    improve:
      "Coordinate roofing, siding, gutters, windows, and exterior repairs under one agreed scope.",
    expand:
      "Explore container-based rooms and offices, pool enclosures, and room additions based on your site and goals.",
  };

  return (
    <>
      <SchemaScript
        schema={[
          serviceSchema({
            name: "Protect: Storm and Resilience Services",
            description: pillarBlurbs.protect,
            url: "/solutions/protect",
            serviceType: "Hurricane Protection and Storm Services",
          }),
          serviceSchema({
            name: "Improve: Exterior Renovations",
            description: pillarBlurbs.improve,
            url: "/solutions/improve",
            serviceType: "Exterior Renovation and Roofing",
          }),
          serviceSchema({
            name: "Expand: Property Solutions",
            description: pillarBlurbs.expand,
            url: "/solutions/expand",
            serviceType: "Container Builds and Property Expansion",
          }),
        ]}
      />

      {/* Hero */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          <p className="eyebrow text-orange/80">Solutions</p>
          <h1 className="mt-3 font-heading text-5xl font-bold leading-tight md:text-6xl">
            Protect. Improve. Expand.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Start with what you want to do: prepare for storms, update the exterior, or add usable space.
            Choose a goal below or tell us about the property and we will point you to the right service.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Request a Quote</Link>
            <Link href="/services" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">Browse All Services</Link>
          </div>
        </div>
      </section>

      {/* Three-pillar cards */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Project goals</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Choose what you want to accomplish</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Florida projects often overlap: a roof may involve gutters and fascia, while an addition may need
            siding, roofing, and electrical work. Start with the outcome that matters most to you.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {solutions.map((pillar) => {
              const services = getServicesByPillar(pillar.slug).map((s) => ({
                name: s.name,
                href: `/services/${s.slug}`,
              }));
              return (
                <SolutionsPillar
                  key={pillar.slug}
                  pillar={pillar.slug}
                  title={pillar.title}
                  blurb={pillarBlurbs[pillar.slug] ?? pillar.heroSub}
                  services={services}
                  href={`/solutions/${pillar.slug}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* How it fits together */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Coordinated work</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">When project scopes overlap</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🔗",
                heading: "Connected exterior work",
                body: "Roofing, gutters, fascia, siding, and windows meet at the same edges. One coordinated scope can reduce handoffs and scheduling conflicts.",
              },
              {
                icon: "📋",
                heading: "One point of contact",
                body: "Your proposal identifies the included trades, working schedule, allowances, and exclusions so you know who is responsible for each part.",
              },
              {
                icon: "📹",
                heading: "See completed work",
                body: "Browse video walkthroughs and field photos from selected Seacoast roofing, exterior, and community projects.",
              },
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

      {/* Quick links to each pillar */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Service groups</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Explore each project goal</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { slug: "protect", label: "Protect: Storm and Resilience", href: "/solutions/protect", accent: "border-orange", textAccent: "text-orange" },
              { slug: "improve", label: "Improve: Exteriors and Renovations", href: "/solutions/improve", accent: "border-navy", textAccent: "text-navy" },
              { slug: "expand", label: "Expand: Property Solutions", href: "/solutions/expand", accent: "border-copper", textAccent: "text-copper" },
            ].map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className={`group rounded-2xl border-l-4 ${item.accent} bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft`}
              >
                <h3 className={`font-heading text-lg font-bold ${item.textAccent}`}>{item.label}</h3>
                <p className="mt-2 text-sm text-text-secondary">{pillarBlurbs[item.slug]}</p>
                <span className={`mt-4 inline-flex font-semibold ${item.textAccent}`}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="navy" heading="Not sure where to start?" subtext="Describe the property and the problem. We will recommend the right inspection, estimate, or site visit." buttonLabel="Tell Us About Your Project" />
    </>
  );
}
