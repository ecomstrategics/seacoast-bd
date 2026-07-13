import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: { absolute: "Seacoast Building & Design | SW Florida Contractor" },
  description: "Roofing, storm repair, exterior renovations, and property improvements across six Florida Gulf Coast counties. Florida-certified contractor. (941) 500-5431",
};

const pillarBlurbs: Record<string, string> = {
  protect: "Plan before storm season, get help when damage happens, and document the work clearly. One team coordinates the next step across six counties.",
  improve: "Roofing, siding, windows, gutters, and full exterior renovations. One contractor handles the trades so your project keeps moving.",
  expand: "Container guest houses, offices, pool enclosures, and room additions planned around your property, intended use, and local permitting requirements.",
};

export default function Home() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      <SchemaScript schema={localBusinessSchema()} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy py-14 md:py-24 text-white">
        <Image
          src="/images/home-hero-waterfront-condo-roof.webp"
          alt="Aerial view of a large waterfront Southwest Florida condo building with a new white reflective roof installed by Seacoast Building & Design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" aria-hidden />
        <div className="container relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Southwest Florida contractor</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Roofing, storm repair, and exterior projects—handled by one local team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Seacoast coordinates roofing, exterior renovations, storm work, and additions for homes, businesses, and communities across six Florida Gulf Coast counties.
            </p>
            <p className="mt-5 font-heading text-xl font-bold tracking-widest text-orange uppercase">
              Protect. Improve. Expand.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper transition">Request a Quote</Link>
              <Link href="/our-work" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy transition">View Our Work</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-soft">
            <p className="font-heading text-2xl font-bold">One team for your property.</p>
            <p className="mt-4 text-white/75">Tell us what needs attention. We will help you understand the scope, coordinate the right trades, and keep the work moving from the first visit through the final walkthrough.</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-heading text-3xl font-bold text-orange">2</p>
                <p className="mt-1 text-sm text-white/65">Florida Licenses</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-orange">6</p>
                <p className="mt-1 text-sm text-white/65">Counties Served</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-orange">{projects.length}</p>
                <p className="mt-1 text-sm text-white/65">Project Examples</p>
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
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Start with what your property needs now</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Prepare for storms, improve the exterior, or add useful space. Seacoast can coordinate related work so you are not left managing several contractors on your own.</p>
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

      {/* Featured Projects */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">See how Seacoast approaches real projects</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">Browse project videos and photos from roofing, gutter, siding, and carport work across the region.</p>
            </div>
            <Link href="/our-work" className="hidden font-bold text-orange sm:block whitespace-nowrap">See all projects &rarr;</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/our-work" className="font-bold text-orange">See all projects &rarr;</Link>
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
              Ask about financing options through Hearth when you request a quote. Available offers, payments, rates, and timing depend on the participating lender and applicant approval.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/financing" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">Explore Financing</Link>
              <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy">Ask With Your Quote</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Review available options in one place",
              "Compare estimated payments and terms",
              "Choose whether to continue with a lender",
              "Final approval comes from the lender",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                <span className="text-xl text-success" aria-hidden>✓</span>
                <p className="mt-3 font-heading font-bold text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Container Section */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Container builds</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Custom container spaces, planned for your property</h2>
              <p className="mt-3 max-w-2xl text-text-secondary">Purpose-built container spaces for storage, guest use, offices, and storm planning, designed around the property and local permitting requirements.</p>
            </div>
            <Link href="/containers" className="hidden font-bold text-orange sm:block whitespace-nowrap">Browse all builds &rarr;</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {containers.map((container) => (
              <ContainerCard key={container.slug} container={container} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/containers" className="font-bold text-orange">Browse all container builds &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Why Seacoast */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <p className="eyebrow text-orange">Why Seacoast</p>
          <h2 className="mt-2 font-heading text-4xl font-bold">Why property owners choose Seacoast</h2>
          <p className="mt-4 max-w-2xl text-white/70">See our Florida contractor licenses, completed work, and project photos and videos before you decide.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-orange">See Our Work</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Many completed projects include photos or video, so you can see the scope and finished work for yourself.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-orange">Storm Help From One Team</p>
              <p className="mt-3 text-sm leading-6 text-white/70">One team can help with readiness planning, damage documentation, emergency stabilization, and repairs authorized in the signed construction scope.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-orange">Container Project Planning</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Seacoast can evaluate container sourcing, delivery, build-out, and site-integration needs. Feasibility, permits, and final responsibilities are confirmed for each property.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-orange">Licensed and Insured</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Florida Certified General Contractor CGC1509237 and Roofing Contractor CCC1332648. Proof of insurance is available for your project.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-orange">Photos That Show the Details</p>
              <p className="mt-3 text-sm leading-6 text-white/70">We document visible damage and completed work with photos and video that can support your conversations with an insurer.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-bold text-orange">Financing Available</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Ask about financing through Hearth. Participating lenders set eligibility, rates, terms, and funding timing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Band */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Southwest Florida, county by county</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Seacoast serves homes, businesses, and communities in six counties along Florida&apos;s Gulf Coast, from Hillsborough to Collier.</p>
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
                  className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-orange hover:bg-orange-deep hover:text-white"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link href="/service-area" className="inline-block rounded-full bg-navy px-6 py-3 text-center font-bold text-white transition hover:bg-orange-deep">View All Service Areas</Link>
          </div>
        </div>
      </section>

      {/* Development resources */}
      <section className="bg-navy py-10 text-white">
        <div className="container">
          <div className="grid gap-7 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="eyebrow text-orange">For developers and capital partners</p>
              <h2 className="mt-2 font-heading text-3xl font-bold">Planning a residential development program?</h2>
              <p className="mt-3 max-w-3xl leading-7 text-white/75">
                If your team is evaluating new housing, build-to-rent, substantial rehabilitation, adaptive reuse, or another housing opportunity, see how Seacoast approaches project diligence and review the current federal housing-law overview.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
              <Link href="/capital-partners" className="rounded-full bg-orange-deep px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-copper">Capital Partners</Link>
              <Link href="/road-to-housing-act" className="rounded-full border border-white/25 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-navy">H.R. 6644 Guide</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Ready to protect, improve, or expand your property?"
        subtext="Tell us what you are planning or what needs attention. We will help you understand the right next step."
        buttonLabel="Request a Quote"
      />
    </>
  );
}
