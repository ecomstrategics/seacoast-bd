import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { CrossSellBlock, type CrossSellItem } from "@/components/CrossSellBlock";
import { StormLifecycle } from "@/components/StormLifecycle";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, serviceSchema } from "@/components/Schema";
import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { ContainerCard } from "@/components/ContainerCard";
import { getSolutionBySlug, solutions } from "@/data/solutions";
import { getServicesByPillar } from "@/data/services";
import { containers } from "@/data/containers";
import { projects } from "@/data/projects";
import { seoDescription, seoTitle } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getSolutionBySlug(slug as "protect" | "improve" | "expand");
  if (!pillar) return {};
  return {
    title: seoTitle(`${pillar.title}: ${pillar.tagline}`),
    description: seoDescription(pillar.heroSub),
  };
}

// ─── Per-pillar cross-sell items (strategy §6.2) ───────────────────────────────
const pillarCrossSell: Record<string, CrossSellItem[]> = {
  protect: [
    { title: "Container-Based Structures", href: "/containers/storm-shelters", blurb: "Ask about site-specific engineering, anchoring, permits, and occupancy requirements for an emergency-use structure.", icon: "🛡️" },
    { title: "Roofing", href: "/services/roofing", blurb: "Repair or replace shingle, tile, metal, and flat-roof systems as part of a broader exterior plan.", icon: "🏠" },
    { title: "Siding", href: "/services/siding", blurb: "Repair or replace siding and coordinate the work with roofing, trim, windows, and doors.", icon: "🧱" },
  ],
  improve: [
    { title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "Review shutters, boards, and storm activation needs while planning other exterior work.", icon: "🛡️" },
    { title: "Room Additions", href: "/services/room-additions", blurb: "Plan an addition and the related roofing, siding, and exterior tie-ins under one agreed scope.", icon: "➕" },
    { title: "Container Guest Spaces", href: "/containers/guest-houses", blurb: "Compare a container-based guest space with a traditional addition after reviewing the site, permitting, schedule, and budget.", icon: "🏡" },
  ],
  expand: [
    { title: "Roofing", href: "/services/roofing", blurb: "Coordinate the roof on a new structure with the existing property and approved design.", icon: "🏠" },
    { title: "Siding", href: "/services/siding", blurb: "Review siding and exterior-finish options for the addition or container-based structure.", icon: "🧱" },
    { title: "Storm Preparedness", href: "/services/storm-preparedness", blurb: "Include new structures and openings when reviewing your property's storm-preparation plan.", icon: "🛡️" },
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
  protect: "bg-orange-deep",
  improve: "bg-navy",
  expand: "bg-copper",
};

export default async function SolutionPillarPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as "protect" | "improve" | "expand";
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
          <p className="eyebrow mt-4 text-orange/80">{pillar.tagline}</p>
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

      {/* Hero image */}
      <div className="container py-8">
        {slug === "protect" && (
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image src="/images/solutions/protect-hero.webp" alt="Representative view of a crew installing storm panels on a Southwest Florida home" fill className="object-cover" sizes="100vw" />
          </div>
        )}
        {slug === "improve" && (
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image src="/images/solutions/improve-hero.webp" alt="Representative view of roofing, siding, and gutter work on a Southwest Florida home" fill className="object-cover" sizes="100vw" />
          </div>
        )}
        {slug === "expand" && (
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image src="/images/solutions/expand-hero.webp" alt="Representative container-based guest-space design in a Southwest Florida yard" fill className="object-cover" sizes="100vw" />
          </div>
        )}
      </div>

      {/* Services in this pillar */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Services to consider</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
            {slug === "protect" && "Plan before, during, and after a storm."}
            {slug === "improve" && "Exterior work planned as one scope."}
            {slug === "expand" && "Ways to add usable space."}
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            {slug === "protect" && "Plan shutters and boards before the season, check service availability when weather approaches, and arrange damage assessment and repairs afterward."}
            {slug === "improve" && "Roofing, siding, gutters, windows, and exterior repairs can be reviewed together and organized under one proposal."}
            {slug === "expand" && "Compare container-based spaces, pool enclosures, and room additions after reviewing the site, intended use, permitting, and budget."}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillarServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      {/* Expand pillar: container products */}
      {slug === "expand" && (
        <section className="section dark-band bg-navy-deep">
          <div className="container">
            <p className="eyebrow">Container builds</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Container options planned around your property</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Explore storage, guest-space, office, and emergency-use concepts. Site access, engineering,
              zoning, permits, utilities, and the final scope determine what can be built.
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
      <section className={`section dark-band ${slug === "protect" ? "bg-navy" : slug === "expand" ? "bg-navy" : "bg-navy-deep"}`}>
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">
                {slug === "protect" && "Plan before and after storms"}
                {slug === "improve" && "Coordinated exterior work"}
                {slug === "expand" && "Why containers"}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                {slug === "protect" && "Prepare before the forecast turns urgent."}
                {slug === "improve" && "Plan connected exterior work together."}
                {slug === "expand" && "Start with the site, use, and permit path."}
              </h2>
              <p className="mt-4 text-text-secondary">
                {slug === "protect" &&
                  "Early planning gives you time to measure openings, label shutters or boards, check stored materials, and put activation terms in writing before a storm approaches."}
                {slug === "improve" &&
                  "Roofing, siding, gutters, fascia, windows, and doors meet at shared edges. Reviewing them together can reduce handoffs and make responsibilities, sequencing, allowances, and exclusions clearer in the proposal."}
                {slug === "expand" &&
                  "Container-based rooms and offices can be configured with insulation, utilities, siding, and roofing. Site access, zoning, engineering, permits, price, and schedule determine whether they are a fit for your property."}
              </p>
              <Link href="/contact" className={`mt-6 inline-block rounded-full ${accentBg[slug]} px-6 py-3 font-bold text-white hover:opacity-90`}>
                {pillar.ctaLabel}
              </Link>
            </div>
            <div>
              {slug === "protect" && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/images/solutions/protect-secondary.webp" alt="Representative post-storm roof assessment with aerial documentation" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
                </div>
              )}
              {slug === "improve" && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/images/solutions/improve-secondary.webp" alt="Representative Southwest Florida exterior with updated roofing and siding" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
                </div>
              )}
              {slug === "expand" && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src="/images/solutions/expand-secondary.webp" alt="Representative interior layout for a finished container-based guest space" fill className="object-cover" sizes="(min-width: 1024px) 1200px, 100vw" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="section dark-band bg-navy-deep">
          <div className="container">
            <p className="eyebrow">Project examples</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
              Recent {slug === "protect" ? "storm and roofing" : slug === "improve" ? "exterior" : "expansion"} projects
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-orange hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      <CrossSellBlock
        heading="Related services"
        items={crossSell}
      />

      <CTASection
        variant={slug === "protect" ? "orange" : slug === "improve" ? "navy" : "orange"}
        heading={slug === "protect" ? "Ready to review your storm plan?" : slug === "improve" ? "Ready to discuss your exterior project?" : "Ready to explore additional space?"}
        subtext={slug === "protect" ? "Tell us about the property, existing shutters or boards, and the help you need before or after a storm." : slug === "improve" ? "Share the property address and work you are considering. We will recommend the right inspection or site visit." : "Tell us how you want to use the space. We will review the site, project type, and next steps."}
        buttonLabel={pillar.ctaLabel}
      />
    </>
  );
}
