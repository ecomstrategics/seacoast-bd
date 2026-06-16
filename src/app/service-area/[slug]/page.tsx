import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript, localBusinessSchema, serviceSchema } from "@/components/Schema";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { serviceAreaCities } from "@/data/serviceAreas";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return serviceAreaCities.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = serviceAreaCities.find((c) => c.slug === params.slug);
  if (!city) return {};
  return {
    title: `Seacoast Building and Design in ${city.name} | ${city.county}`,
    description: `Seacoast Building and Design serves ${city.name}, ${city.county}. Roofing, siding, storm protection, container builds, and more. Licensed and insured. (941) 500-5431`,
  };
}

export default function ServiceAreaCityPage({ params }: Props) {
  const city = serviceAreaCities.find((c) => c.slug === params.slug);
  if (!city) notFound();

  const featuredProjects = city.featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => p !== undefined);

  const schema = [
    localBusinessSchema(),
    serviceSchema({
      name: `Property Services in ${city.name}`,
      description: `Full-service exterior contractor serving ${city.name}, ${city.county}. Roofing, siding, storm damage repair, storm preparedness, container builds, and more.`,
      url: `/service-area/${city.slug}`,
      areaServed: [city.county],
    }),
  ];

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-area" },
              { label: city.name },
            ]}
          />
          <p className="eyebrow mt-2">{city.county}</p>
          <h1 className="mt-3 font-heading text-5xl font-bold leading-tight md:text-6xl">
            Seacoast in {city.name}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{city.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper transition"
            >
              Get a Free Quote in {city.name}
            </Link>
            <a
              href="tel:+19415005431"
              className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy transition"
            >
              (941) 500-5431
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-white/10 bg-navy-deep py-5">
        <div className="container grid gap-3 text-center font-heading font-bold text-white sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white/5 px-4 py-3">Licensed and Insured</div>
          <div className="rounded-xl bg-white/5 px-4 py-3">40+ Years Experience</div>
          <div className="rounded-xl bg-white/5 px-4 py-3">{city.county} Coverage</div>
          <div className="rounded-xl bg-white/5 px-4 py-3">Financing Available</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Available in {city.name}</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Services we offer in {city.county}</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Seacoast provides the full range of exterior and property services across {city.county}. Same team, same quality, same license from Protect to Improve to Expand.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Local Projects */}
      {featuredProjects.length > 0 && (
        <section className="section dark-band bg-navy-deep">
          <div className="container">
            <p className="eyebrow">Local work</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Projects near {city.name}</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Here is some of our recent work in and around {city.name}. Every project is filmed from setup to completion.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-teal hover:underline">
                See all projects &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Container Callout */}
      <section className="section dark-band bg-navy text-white">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-teal">Container builds in {city.name}</p>
              <h2 className="mt-2 font-heading text-4xl font-bold">Guest houses, offices, and storm shelters for {city.county} properties</h2>
              <p className="mt-4 text-white/75 leading-7">
                Seacoast builds and finishes shipping containers to match your home. Cat-5-rated construction for Southwest Florida conditions. We handle delivery, site prep, utilities, and all finish work in {city.county}.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/containers/guest-houses" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper transition">Container Guest Houses</Link>
                <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy transition">Browse All Builds</Link>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/service-area/generic-guest-house.webp" alt={`Finished container guest house built by Seacoast in ${city.name}, ${city.county}`} fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Quote Form */}
      <section className="section dark-band bg-navy-deep" id="quote">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Get a quote in {city.name}</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Ready to talk through your project?</h2>
              <p className="mt-4 max-w-lg text-text-secondary">
                Fill out the form or call us directly. We serve {city.name} and all of {city.county}. Quote requests are typically followed up within one business day.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-teal">Phone:</span>
                  <a href="tel:+19415005431" className="font-semibold text-charcoal hover:text-teal transition">(941) 500-5431</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-teal">Service area:</span>
                  <span className="text-text-secondary">{city.county} and surrounding areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-teal">Local rep:</span>
                  <span className="text-text-secondary">Ask about our {city.name}-area representative when you submit</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/images/service-area/generic-neighborhood.webp" alt={`Southwest Florida neighborhood in ${city.name}, ${city.county} — Seacoast service area`} fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
                </div>
              </div>
            </div>
            <div>
              <QuoteForm defaultCity={city.name} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading={`Seacoast serves ${city.name} and all of ${city.county}.`}
        subtext="One contractor for roofing, storm protection, containers, and every exterior project on your list. Licensed and insured."
        buttonLabel="Get a Free Quote"
      />
    </>
  );
}
