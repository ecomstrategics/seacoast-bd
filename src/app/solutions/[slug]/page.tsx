import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { CrossSellBlock, type CrossSellItem } from "@/components/CrossSellBlock";
import { StormLifecycle } from "@/components/StormLifecycle";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, serviceSchema } from "@/components/Schema";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ServiceCard } from "@/components/ServiceCard";
import { ContainerCard } from "@/components/ContainerCard";
import { getSolutionBySlug, solutions } from "@/data/solutions";
import { getServicesByPillar } from "@/data/services";
import { containers } from "@/data/containers";
import { projects } from "@/data/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const pillar = getSolutionBySlug(params.slug as "protect" | "improve" | "expand");
  if (!pillar) return {};
  return {
    title: `${pillar.heroHeading} | Seacoast Building & Design`,
    description: pillar.heroSub,
  };
}

// ─── Per-pillar cross-sell items (strategy §6.2) ───────────────────────────────
const pillarCrossSell: Record<string, CrossSellItem[]> = {
  protect: [
    { title: "Container Storm Shelters", href: "/containers/storm-shelters", blurb: "A Cat-5-rated container shelter gives your family a safe structure on-site. No evacuation required.", icon: "🛡️" },
    { title: "Roofing", href: "/services/roofing", blurb: "A hurricane-rated roof is the first line of storm defense. Seacoast installs and replaces every roofing system in Southwest Florida.", icon: "🏠" },
    { title: "Siding", href: "/services/siding", blurb: "Impact-resistant siding keeps water and debris out when winds strip lesser cladding off neighboring homes.", icon: "🧱" },
  ],
  improve: [
    { title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "Every exterior improvement pairs with a storm preparedness plan to protect your investment during hurricane season.", icon: "🛡️" },
    { title: "Room Additions", href: "/services/room-additions", blurb: "Expand the footprint while the crew is already on-site. Seacoast handles additions and exterior work in one project.", icon: "➕" },
    { title: "Container Guest Houses", href: "/containers/guest-houses", blurb: "Add a finished guest house faster and for less than traditional construction. The siding and roofing match your main home.", icon: "🏡" },
  ],
  expand: [
    { title: "Roofing", href: "/services/roofing", blurb: "Match your container or addition roof to the main house. Seacoast handles the roofing on both structures.", icon: "🏠" },
    { title: "Siding", href: "/services/siding", blurb: "Hardie board, stucco, or vinyl: match the finish on your expansion to the existing home so it looks built-in.", icon: "🧱" },
    { title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "New structures need to be in the storm plan. Seacoast adds your container or addition to your preparedness coverage.", icon: "🛡️" },
  ],
};

// ─── Per-pillar related project keywords ──────────────────────────────────────
const pillarProjectKeywords: Record<string, string[]> = {
  protect: ["storm", "hurricane", "roofing", "roof"],
  improve: ["roofing", "roof", "siding", "hardie", "gutters", "fascia", "exterior"],
  expand: ["enclosure", "lanai", "carport", "addition", "pool"],
};

// ─── Accent classes per pillar ────────────────────────────────────────────────
const accentBg: Record<string, string> = {
  protect: "bg-teal",
  improve: "bg-navy",
  expand: "bg-copper",
};

export default function SolutionPillarPage({ params }: Props) {
  const slug = params.slug as "protect" | "improve" | "expand";
  const pillar = getSolutionBySlug(slug);
  if (!pillar) notFound();

  const pillarServices = getServicesByPillar(slug);
  const keywords = pillarProjectKeywords[slug] ?? [slug];
  const relatedProjects = projects
    .filter((p) => keywords.some((kw) => p.serviceType.toLowerCase().includes(kw)))
    .slice(0, 4);

  const crossSell = pillarCrossSell[slug] ?? [];

  return (
    <>
      <SchemaScript
        schema={serviceSchema({
          name: `${pillar.title}: ${pillar.tagline}`,
          description: pillar.heroSub,
          url: `/solutions/${slug}`,
          serviceType: pillar.tagline,
          areaServed: ["Southwest Florida"],
        })}
      />

      {/* Hero */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: pillar.title },
            ]}
          />
          <p className="eyebrow mt-4 text-teal/80">{pillar.tagline}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">{pillar.heroHeading}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{pillar.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className={`rounded-full ${accentBg[slug]} px-6 py-3 font-bold text-white hover:opacity-90`}>
              {pillar.ctaLabel}
            </Link>
            <Link href="/services" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy">
              Browse All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Hero image placeholder */}
      <div className="container py-8">
        {slug === "protect" && <ImagePlaceholder label="Seacoast crew preparing a Southwest Florida home for hurricane season. Shutters and boarding installed on a coastal property" ratio="16/9" tone="navy" />}
        {slug === "improve" && <ImagePlaceholder label="Seacoast exterior renovation in progress. New roofing, siding, and gutters on a Southwest Florida residential property." ratio="16/9" tone="navy" />}
        {slug === "expand" && <ImagePlaceholder label="Finished container guest house with Hardie siding and custom roof, matching the main residence in Southwest Florida" ratio="16/9" tone="warm" />}
      </div>

      {/* Services in this pillar */}
      <section className="section bg-warm-white">
        <div className="container">
          <p className="eyebrow">Services included</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
            {slug === "protect" && "Every stage of storm protection."}
            {slug === "improve" && "Every exterior trade, one contractor."}
            {slug === "expand" && "More space. More value. Less time."}
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            {slug === "protect" && "From locking in your prep plan before the season to navigating the insurance claim after, Seacoast handles the full storm lifecycle."}
            {slug === "improve" && "Roofing, siding, gutters, windows, and exterior renovations scoped and completed together, without three separate contractor relationships."}
            {slug === "expand" && "Container builds, pool enclosures, and room additions that add real finished space to your property, built by the same crews who do the roofing and siding."}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillarServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      {/* Expand pillar: container products */}
      {slug === "expand" && (
        <section className="section bg-cool-gray">
          <div className="container">
            <p className="eyebrow">Container builds</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Custom containers, built for Florida living.</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Storage, guest houses, offices, and storm shelters. SWFL Containers builds and finishes
              shipping containers to match your home, your hurricane plan, and your budget.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {containers.map((container) => <ContainerCard key={container.slug} container={container} />)}
            </div>
            <div className="mt-8">
              <Link href="/containers" className="font-bold text-copper hover:underline">Browse all container builds →</Link>
            </div>
          </div>
        </section>
      )}

      {/* Protect pillar: StormLifecycle module */}
      {slug === "protect" && <StormLifecycle />}

      {/* Pillar narrative / why section */}
      <section className={`section ${slug === "protect" ? "bg-warm-white" : slug === "expand" ? "bg-warm-white" : "bg-cool-gray"}`}>
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">
                {slug === "protect" && "Year-round protection"}
                {slug === "improve" && "The Seacoast difference"}
                {slug === "expand" && "Why containers"}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                {slug === "protect" && "Storm season doesn't end in November."}
                {slug === "improve" && "40+ years. Every exterior trade. Six counties."}
                {slug === "expand" && "Real buildings. Faster timelines. One contractor."}
              </h2>
              <p className="mt-4 text-text-secondary">
                {slug === "protect" &&
                  "Seacoast's protect pillar is built around the reality that hurricane preparedness is a year-round discipline in Southwest Florida. The most protected properties are the ones that locked in their boarding contracts and shutter systems before June 1, not the ones scrambling when the cone appears on the radar."}
                {slug === "improve" &&
                  "Most Southwest Florida homeowners end up coordinating a roofer, a siding crew, and a gutter company separately for what is actually one connected project. Seacoast handles every exterior trade in a single scope, single schedule, and single contract, backed by 40 years of documented Southwest Florida project work behind it."}
                {slug === "expand" &&
                  "Container guest houses and offices deliver finished, permitted, livable space in a fraction of the time and cost of traditional construction. Because they're built on-site by the same licensed crews who do Seacoast's roofing and siding work, the finish quality and code compliance match a traditionally built structure. The exterior can be sided and roofed to be indistinguishable from one."}
              </p>
              <Link href="/contact" className={`mt-6 inline-block rounded-full ${accentBg[slug]} px-6 py-3 font-bold text-white hover:opacity-90`}>
                {pillar.ctaLabel}
              </Link>
            </div>
            <div>
              {slug === "protect" && <ImagePlaceholder label="Southwest Florida property after hurricane. Seacoast storm damage assessment in progress, drone visible overhead." ratio="4/3" tone="navy" />}
              {slug === "improve" && <ImagePlaceholder label="Before and after exterior renovation. New roofing and Hardie siding on a Southwest Florida home." ratio="4/3" tone="warm" />}
              {slug === "expand" && <ImagePlaceholder label="Finished container guest house interior. Drywall, mini-split, kitchenette, and hardwood floor matching main residence style." ratio="4/3" tone="warm" />}
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-cool-gray">
          <div className="container">
            <p className="eyebrow">In the field</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              Recent {slug === "protect" ? "storm and roofing" : slug === "improve" ? "exterior" : "expansion"} projects
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-teal hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      <CrossSellBlock
        heading={`What pairs with ${pillar.title.toLowerCase()}`}
        items={crossSell}
      />

      <CTASection
        variant={slug === "protect" ? "teal" : slug === "improve" ? "navy" : "teal"}
        heading={slug === "protect" ? "Ready to lock in your storm preparedness plan?" : slug === "improve" ? "Ready to start your exterior project?" : "Ready to add space to your property?"}
        subtext={slug === "protect" ? "Seacoast serves six Southwest Florida counties with emergency boarding crews and priority response contracts." : slug === "improve" ? "Request a free quote from Seacoast. We scope and complete every exterior trade in a single project cycle." : "Container guest houses, offices, pool enclosures, and room additions. All from one Southwest Florida contractor."}
        buttonLabel={pillar.ctaLabel}
      />
    </>
  );
}
