import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, localBusinessSchema } from "@/components/Schema";
import { serviceAreaCities } from "@/data/serviceAreas";
import { serviceArea } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Ask about construction across Seacoast's six-county Gulf Coast service area. Contracts of $100,000 or more may be evaluated throughout Florida.",
};

export default function ServiceAreaIndexPage() {
  return (
    <>
      <SchemaScript schema={localBusinessSchema()} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
          <p className="eyebrow">Where we work</p>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-tight md:text-6xl">Roofing and exterior services across Southwest Florida</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Seacoast serves six counties. Send your property address and project type so we can confirm
            coverage, scheduling, and the right next step. Contracts of $100,000 or more can also be evaluated elsewhere in Florida.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper transition">Request a Quote</Link>
            <a href="tel:+19415005431" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy transition">(941) 500-5431</a>
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Coverage area</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Check service in your county</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Project type, location, weather, and crew availability can affect scheduling. Contact us with
            the address and scope to confirm current service.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceArea.map((county) => (
              <div key={county} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <div className="text-2xl mb-3" aria-hidden>📍</div>
                <h3 className="font-heading text-lg font-bold text-navy">{county}</h3>
                <p className="mt-2 text-sm text-text-secondary">Contact us with the address and scope to confirm availability.</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-orange/20 bg-orange/10 p-6 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-navy">Planning a larger project elsewhere in Florida?</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">For contracts of $100,000 or more, Seacoast can evaluate opportunities throughout the state. Travel, schedule, scope, and current capacity are confirmed before commitment.</p>
            </div>
            <Link href="/capital-partners#inquire" className="mt-5 inline-flex shrink-0 rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper md:mt-0">Request a Project Review</Link>
          </div>
        </div>
      </section>

      {/* City Pages */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">City service pages</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Cities we serve</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Each page summarizes common services and gives you a direct way to ask about your property.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreaCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-orange">{city.name}</h3>
                <p className="mt-1 text-sm text-orange font-semibold">{city.county}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary line-clamp-3">{city.intro}</p>
                <span className="mt-4 inline-flex font-semibold text-orange">View city details &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local presence matters */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Plan around the property</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Start with the address and intended work</h2>
              <p className="mt-4 text-text-secondary leading-7">
                Building requirements vary by city, county, property type, flood zone, and wind zone.
                Seacoast reviews the address and scope before quoting so site and permit requirements are
                part of the conversation from the start.
              </p>
              <p className="mt-4 text-text-secondary leading-7">
                Include photos and a short description of the problem when you contact us. We will confirm
                whether the next step is a phone call, inspection, or site visit.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper transition">Request a Local Quote</Link>
                <Link href="/our-work" className="rounded-full border border-navy/20 px-6 py-3 font-bold text-navy hover:bg-navy hover:text-white transition">See Local Projects</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">Storm-related work</p>
                <p className="mt-2 text-sm text-text-secondary">Assessment, temporary stabilization, and repairs after wind and rain damage.</p>
              </div>
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">Property review</p>
                <p className="mt-2 text-sm text-text-secondary">We review the address, property type, and requested work before scheduling.</p>
              </div>
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">Permit coordination</p>
                <p className="mt-2 text-sm text-text-secondary">When permits are required, the proposal identifies Seacoast&apos;s coordination responsibilities.</p>
              </div>
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">Clear scope</p>
                <p className="mt-2 text-sm text-text-secondary">Your proposal identifies included work, exclusions, allowances, and next steps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Not sure if we serve your area?"
        subtext="Call or send the property address, construction value, and scope. We will confirm whether the project fits our regular service area or statewide large-project review."
        buttonLabel="Check Your Area"
      />
    </>
  );
}
