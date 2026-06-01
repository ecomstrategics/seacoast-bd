import type { Metadata } from "next";
import Link from "next/link";
import { SolutionsPillar } from "@/components/SolutionsPillar";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, serviceSchema } from "@/components/Schema";
import { getServicesByPillar } from "@/data/services";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions: Protect. Improve. Expand. | Seacoast Building & Design",
  description:
    "Every Seacoast service maps to one of three outcomes: protect your property from storms, improve the exterior, or expand with containers and additions. Find the right solution for your project.",
};

export default function SolutionsPage() {
  const pillarBlurbs: Record<string, string> = {
    protect:
      "Storm preparedness, emergency response, storm damage repair, and impact windows. The full lifecycle of storm protection in one contractor.",
    improve:
      "Roofing, siding, gutters, windows, and complete exterior renovations. One contractor. One project. No coordinating three separate trades.",
    expand:
      "Container guest houses, offices, pool enclosures, and room additions. Add real, finished space to your property faster than traditional construction.",
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
          <p className="eyebrow text-teal/80">Solutions</p>
          <h1 className="mt-3 font-heading text-5xl font-bold leading-tight md:text-6xl">
            Protect. Improve. Expand.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Every Seacoast service maps to one outcome: protecting your property from Florida&apos;s weather,
            improving it from the outside in, or expanding it with new structures.
            Find the pillar that matches your project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">Get a Free Quote</Link>
            <Link href="/services" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy">Browse All Services</Link>
          </div>
        </div>
      </section>

      {/* Three-pillar cards */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">What we build</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Three outcomes. Dozens of services.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Southwest Florida properties face a specific set of challenges: hurricane season, coastal humidity, aging exteriors, and the need for more space.
            Each pillar is built around one of those outcomes.
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
          <p className="eyebrow">One contractor</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Why one company for all three.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🔗",
                heading: "Cross-pillar projects are common",
                body: "A storm damage repair almost always touches roofing, gutters, and siding at the same time. A container guest house needs a roof that matches the main house. Seacoast handles all of it.",
              },
              {
                icon: "📋",
                heading: "One estimate. One schedule. One call.",
                body: "Coordinating three separate contractors for one project adds weeks. Seacoast scopes, schedules, and completes every system in a single project cycle.",
              },
              {
                icon: "📹",
                heading: "Every project documented on video",
                body: "40+ years of Southwest Florida project work, documented. Every project has a video walkthrough so you can see exactly what Seacoast delivers.",
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
          <p className="eyebrow">Go deeper</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Explore each pillar.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { slug: "protect", label: "Protect: Storm and Resilience", href: "/solutions/protect", accent: "border-teal", textAccent: "text-teal" },
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

      <CTASection variant="navy" heading="Not sure which pillar fits your project?" subtext="Contact Seacoast for a free consultation. We'll match your project to the right services and give you a clear scope." buttonLabel="Get a Free Quote" />
    </>
  );
}
