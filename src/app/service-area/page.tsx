import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, localBusinessSchema } from "@/components/Schema";
import { serviceAreaCities } from "@/data/serviceAreas";
import { serviceArea } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Service Areas | Seacoast Building & Design",
  description: "Seacoast Building & Design serves six counties and eight cities across Southwest Florida. Roofing, storm protection, containers, and exterior services. (941) 500-5431",
};

export default function ServiceAreaIndexPage() {
  return (
    <>
      <SchemaScript schema={localBusinessSchema()} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">Where we work</p>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-tight md:text-6xl">Southwest Florida Service Areas</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Seacoast Building and Design serves six counties across the SW Florida corridor. Roofing, storm protection, container builds, and exterior services available in every territory we cover.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper transition">Get a Quote</Link>
            <a href="tel:9415005431" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy transition">(941) 500-5431</a>
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="section bg-warm-white">
        <div className="container">
          <p className="eyebrow">Coverage area</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Six counties, one contractor</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Seacoast is licensed and insured to work across all six Southwest Florida counties. Same team, same quality, same license number in every territory.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceArea.map((county) => (
              <div key={county} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <div className="text-2xl mb-3" aria-hidden>📍</div>
                <h3 className="font-heading text-lg font-bold text-navy">{county}</h3>
                <p className="mt-2 text-sm text-text-secondary">Full exterior and property services available throughout the county.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Pages */}
      <section className="section bg-cool-gray">
        <div className="container">
          <p className="eyebrow">City service pages</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Find your city</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Each city page shows local projects, county-specific storm context, and a direct quote form so your request routes to the right team.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreaCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-teal">{city.name}</h3>
                <p className="mt-1 text-sm text-teal font-semibold">{city.county}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary line-clamp-3">{city.intro}</p>
                <span className="mt-4 inline-flex font-semibold text-teal">View local work &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local presence matters */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Local presence</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">We work where you live</h2>
              <p className="mt-4 text-text-secondary leading-7">
                Southwest Florida is not a monolith. Fort Myers flood zones are different from Sarasota barrier islands. Cape Coral canal lots have different soil and wind exposure than Naples high-end residential. Seacoast has active project history across all these markets, which means we already know the code quirks, permit timelines, and inspector preferences in your county.
              </p>
              <p className="mt-4 text-text-secondary leading-7">
                Our Fort Myers and Sarasota teams include local reps who can meet at your property. Ask for a local rep when you submit your quote request.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper transition">Request a Local Quote</Link>
                <Link href="/our-work" className="rounded-full border border-navy/20 px-6 py-3 font-bold text-navy hover:bg-navy hover:text-white transition">See Local Projects</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">Storm Expertise</p>
                <p className="mt-2 text-sm text-text-secondary">40+ years of hurricane season project history across every SW Florida county.</p>
              </div>
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">Local Reps</p>
                <p className="mt-2 text-sm text-text-secondary">Dedicated sales reps in Fort Myers and Sarasota available for in-person property assessments.</p>
              </div>
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">Permit Fluent</p>
                <p className="mt-2 text-sm text-text-secondary">We manage permits and inspections in all six counties. No learning curve on your dime.</p>
              </div>
              <div className="rounded-2xl bg-cool-gray p-6">
                <p className="font-heading text-lg font-bold text-navy">One License</p>
                <p className="mt-2 text-sm text-text-secondary">Same licensed, insured contractor team wherever you are in the coverage area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Not sure if we serve your area?"
        subtext="Call us or submit a quote request with your city and we will confirm coverage the same day."
        buttonLabel="Check Your Area"
      />
    </>
  );
}
