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
import { seoDescription, seoTitle } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return serviceAreaCities.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = serviceAreaCities.find((c) => c.slug === params.slug);
  if (!city) return {};
  return {
    title: seoTitle(`Contractor in ${city.name}, ${city.county}`),
    description: seoDescription(`Ask Seacoast about roofing, siding, storm repair, and exterior work in ${city.name}, ${city.county}. Share the property address to confirm service.`),
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
      description: `Ask Seacoast about roofing, siding, storm repair, exterior work, and container-based projects in ${city.name}, ${city.county}. Service is confirmed by address and scope.`,
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
            Roofing &amp; Exterior Contractor in {city.name}, Florida
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{city.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper transition"
            >
              Request a Quote in {city.name}
            </Link>
            <a
              href="tel:+19415005431"
              className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy transition"
            >
              (941) 500-5431
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-white/10 bg-navy-deep py-5">
        <div className="container grid gap-3 text-center font-heading font-bold text-white sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white/5 px-4 py-3">Florida Certified Contractor</div>
          <div className="rounded-xl bg-white/5 px-4 py-3">Residential &amp; Commercial</div>
          <div className="rounded-xl bg-white/5 px-4 py-3">Service Confirmed by Address</div>
          <div className="rounded-xl bg-white/5 px-4 py-3">Written Project Scope</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Ask about service in {city.name}</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Common services for {city.name} properties</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Tell us what you need done and we will confirm the right Seacoast service, availability,
            and next step for your address.
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
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">See Seacoast projects near {city.name}</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Browse project videos and, where available, field photos from Seacoast&apos;s portfolio.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-orange hover:underline">
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
              <p className="eyebrow text-orange">Container options in {city.name}</p>
              <h2 className="mt-2 font-heading text-4xl font-bold">Storage, workspace, and guest-space concepts for {city.county}</h2>
              <p className="mt-4 text-white/75 leading-7">
                Container-based projects can include delivery, site preparation, utilities, and finishes.
                Feasibility, engineering, access, and permitting depend on the address and intended use.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/containers/guest-houses" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper transition">Container Guest Houses</Link>
                <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy transition">Browse All Builds</Link>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/service-area/generic-guest-house.webp" alt="Representative container-based guest-space design in a Southwest Florida setting" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
              </div>
              <p className="mt-3 text-xs text-white/60">Illustrative image — not a Seacoast project photo.</p>
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
                Fill out the form or call us directly. Include the property address, property type, and
                work you are considering so we can confirm coverage and the right next step.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-orange">Phone:</span>
                  <a href="tel:+19415005431" className="font-semibold text-charcoal hover:text-orange transition">(941) 500-5431</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-orange">Service area:</span>
                  <span className="text-text-secondary">{city.county} and surrounding areas</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/images/service-area/generic-neighborhood.webp" alt="Representative Southwest Florida neighborhood" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
                </div>
                <p className="mt-3 text-xs text-text-secondary">Illustrative image — not a Seacoast project photo.</p>
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
        heading={`Planning work in ${city.name}?`}
        subtext="Share the address and project scope so we can confirm service, scheduling, and the right next step."
        buttonLabel="Tell Us About Your Project"
      />
    </>
  );
}
