import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ContainerCard } from "@/components/ContainerCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SchemaScript, localBusinessSchema } from "@/components/Schema";
import { SolutionsPillar } from "@/components/SolutionsPillar";
import { TrustBar } from "@/components/TrustBar";
import { containers } from "@/data/containers";
import { projects } from "@/data/projects";
import { getServicesByPillar } from "@/data/services";
import { solutions } from "@/data/solutions";
import { serviceArea } from "@/data/navigation";
import { serviceAreaCities } from "@/data/serviceAreas";

export const metadata: Metadata = {
  title: { absolute: "Seacoast Building & Design | Southwest Florida's Property Solutions Company" },
  description: "Protect, improve, and expand your home or property. All from one licensed contractor. 40+ years, 6 counties, every project on video. Licensed and insured. (941) 500-5431",
};

const pillarBlurbs: Record<string, string> = {
  protect: "Year-round storm coverage from prep to emergency response to insurance-backed repair. One team handles the full lifecycle across six counties.",
  improve: "Roofing, siding, windows, gutters, and full exterior renovations. One contractor handles the trades so your project keeps moving.",
  expand: "Container guest houses, offices, pool enclosures, and room additions. Seacoast builds everything outside the main footprint, faster than traditional construction.",
};

export default function Home() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      <SchemaScript schema={localBusinessSchema()} />

      {/* Hero */}
      <section className="bg-navy py-14 md:py-24 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Southwest Florida contractor</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Southwest Florida&apos;s Property Solutions Company.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Protect, improve, and expand your home or property. All from one licensed contractor. 40+ years, 6 counties, every project on video.
            </p>
            <p className="mt-5 font-heading text-xl font-bold tracking-widest text-teal uppercase">
              Protect. Improve. Expand.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper transition">Get a Free Quote</Link>
              <Link href="/our-work" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy transition">View Our Work</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-soft">
            <p className="font-heading text-2xl font-bold">One contractor. Every project.</p>
            <p className="mt-4 text-white/75">From hurricane-rated roofs to custom container guest houses, Seacoast handles roofing, exteriors, storm protection, and property expansion across Southwest Florida.</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-heading text-3xl font-bold text-teal">40+</p>
                <p className="mt-1 text-sm text-white/65">Years in Business</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-teal">6</p>
                <p className="mt-1 text-sm text-white/65">Counties Served</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-teal">100%</p>
                <p className="mt-1 text-sm text-white/65">Video Documented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Three-Pillar Section */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">How we can help</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Everything your property needs, under one roof</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Three pillars. Thirteen services. One contractor who handles them all across Southwest Florida.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutions.map((sol) => {
              const svcList = getServicesByPillar(sol.slug).map((s) => ({
                name: s.name,
                href: `/services/${s.slug}`,
              }));
              return (
                <SolutionsPillar
                  key={sol.slug}
                  pillar={sol.slug}
                  title={sol.title}
                  blurb={pillarBlurbs[sol.slug] ?? sol.heroSub}
                  services={svcList}
                  href={`/solutions/${sol.slug}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Container Section */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Container builds</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Custom containers, built for Florida living</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">Cat-5-rated storage, custom guest houses, offices, and storm shelters. Finished to match your home.</p>
            </div>
            <Link href="/containers" className="hidden font-bold text-teal sm:block whitespace-nowrap">Browse all builds &rarr;</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {containers.map((container) => (
              <ContainerCard key={container.slug} container={container} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/containers" className="font-bold text-teal">Browse all container builds &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Project financing</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Renovation financing through Hearth</h2>
            <p className="mt-4 text-text-secondary">
              See personalized monthly payment options within minutes without affecting your credit score. Hearth financing can help move urgent repairs, roofing, exterior renovations, additions, and container projects forward without waiting on home-equity underwriting.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/financing" className="rounded-full bg-teal px-6 py-3 font-bold text-white transition hover:bg-copper">Explore Financing</Link>
              <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy">Ask With Your Quote</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Loan amounts up to $250,000",
              "Funding as fast as 1 to 3 days",
              "No home equity required",
              "No prepayment penalties",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                <span className="text-xl text-success" aria-hidden>✓</span>
                <p className="mt-3 font-heading font-bold text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Every project on video</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">We document every job from start to finish. See the work, not just the pitch.</p>
            </div>
            <Link href="/our-work" className="hidden font-bold text-teal sm:block whitespace-nowrap">See all projects &rarr;</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/our-work" className="font-bold text-teal">See all projects &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Why Seacoast */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow text-teal">Why Seacoast</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">40 years of receipts. Not just promises.</h2>
          <p className="mt-4 max-w-2xl text-white/70">We don&apos;t just claim quality. We show it on video, document it with photos, and back it with four decades of SW Florida project history.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-teal">Video-Documented Work</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Every project filmed from setup to completion. See exactly how we work before you commit to anything.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-teal">Full Storm Lifecycle</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Storm prep, emergency response, and post-storm repair under one license. No hand-offs, no gaps in coverage.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-teal">Container-Capable</p>
              <p className="mt-3 text-sm leading-6 text-white/70">No other SW Florida contractor builds, delivers, finishes, and integrates container guest houses and shelters into your property.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-teal">Licensed and Insured</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Florida-licensed general contractor. Full insurance coverage on every job in every county we serve.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-teal">Insurance-Savvy</p>
              <p className="mt-3 text-sm leading-6 text-white/70">We have navigated hundreds of storm insurance claims. We know how to document damage and support your claim.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-teal">Financing Available</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Hearth financing for qualified projects. No reason to put off a roof or container build that pays for itself in storm protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Band */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Southwest Florida, county by county</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Seacoast serves six counties and eight cities across the SW Florida corridor, from Hillsborough to Collier.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceArea.map((county) => (
              <div key={county} className="rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm font-semibold text-charcoal shadow-sm">
                {county}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="font-semibold text-navy mb-3">Cities we serve:</p>
            <div className="flex flex-wrap gap-3">
              {serviceAreaCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-area/${city.slug}`}
                  className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-teal hover:bg-teal hover:text-white"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link href="/service-area" className="inline-block rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-teal">View All Service Areas</Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="teal"
        heading="Ready to protect, improve, or expand your property?"
        subtext="Get a no-pressure quote from Southwest Florida's full-service property solutions contractor."
        buttonLabel="Get a Free Quote"
      />
    </>
  );
}
