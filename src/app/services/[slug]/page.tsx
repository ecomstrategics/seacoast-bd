import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | Seacoast Building & Design`,
    description: service.shortDescription,
  };
}

const serviceFaqs: Record<string, FAQItem[]> = {
  roofing: [
    { question: "What roofing materials do you work with?", answer: "We install and repair tile, metal (standing seam, R-panel, stone-coated steel), TPO/flat, shingle, and slate-profile systems." },
    { question: "Do you handle storm damage claims?", answer: "Yes. We document damage, coordinate with your insurance adjuster, and manage repairs from inspection to final walkthrough." },
    { question: "How long does a roof replacement take?", answer: "Most residential replacements take 1–3 days. Commercial and multi-family projects are scoped individually." },
  ],
  "gutters-fascia-soffits": [
    { question: "What gutter styles do you offer?", answer: "We install seamless K-style and half-round gutters in aluminum and copper, sized for Southwest Florida rainfall." },
    { question: "Can you replace just the fascia or soffits?", answer: "Yes — we can replace individual components or the full system depending on the scope of damage or renovation." },
  ],
  siding: [
    { question: "Do you install Hardie board siding?", answer: "Yes. James Hardie fiber cement products are a primary option for our Southwest Florida clients due to moisture and impact resistance." },
    { question: "Can siding improve energy efficiency?", answer: "New siding combined with proper insulation and moisture barriers can meaningfully reduce energy costs." },
  ],
  "windows-and-doors": [
    { question: "Do you install impact-resistant windows?", answer: "Yes. We install impact-rated windows and doors designed to meet Florida building codes for wind and hurricane protection." },
    { question: "How long does window replacement take?", answer: "Most residential window projects are completed within 1–2 days. Custom orders may add lead time." },
  ],
  "exterior-renovations": [
    { question: "What counts as an exterior renovation?", answer: "Anything outside the building envelope — structural repairs, paint, trim, cladding, walkways, lighting, and more." },
    { question: "Do you handle both residential and commercial?", answer: "Yes. Our team works across residential, commercial, and multi-family properties throughout Southwest Florida." },
  ],
  "pool-enclosures-lanais": [
    { question: "Do you build new enclosures or just repair existing ones?", answer: "Both. We design and build new pool enclosures and lanais, and repair or re-screen existing structures." },
    { question: "What happens if a screen enclosure is damaged in a storm?", answer: "We assess structural damage, document it for insurance, and rebuild or repair to current Florida building code." },
  ],
  "room-additions": [
    { question: "Do you handle the full permit process?", answer: "Yes. We manage permitting, inspections, and coordination with local building departments from start to finish." },
    { question: "What types of additions do you build?", answer: "Sunrooms, enclosed patios, garage conversions, carports, and traditional room additions for residential and commercial properties." },
  ],
  "storm-damage-repair": [
    { question: "How quickly can you respond after a storm?", answer: "We prioritize storm response. Contact us right away to get on our assessment schedule — we work across all six Southwest Florida counties." },
    { question: "Do you help with insurance documentation?", answer: "Yes. We provide written assessments and coordinate directly with adjusters to support your claim." },
  ],
};

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) =>
    p.serviceType.toLowerCase().includes(params.slug.replace(/-/g, " ").split(" ")[0])
  ).slice(0, 3);

  const faqs = serviceFaqs[params.slug] ?? [];

  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <div className="mb-4">
            <Link href="/services" className="text-sm font-semibold text-teal hover:underline">← All services</Link>
          </div>
          <div className="text-4xl mb-4" aria-hidden>{service.icon}</div>
          <h1 className="font-heading text-5xl font-bold">{service.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{service.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">Get a Free Quote</Link>
            <Link href="/our-work" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy">See Project Videos</Link>
          </div>
        </div>
      </section>

      <section className="section bg-warm-white">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Licensed & Insured</p>
            <p className="mt-3 text-text-secondary">Every project is performed by licensed contractors with full insurance coverage.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">40+ Years Experience</p>
            <p className="mt-3 text-text-secondary">Four decades of Southwest Florida project work across residential, commercial, and multi-family.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Financing Available</p>
            <p className="mt-3 text-text-secondary">Flexible financing options available. Ask us about payment plans when you request your quote.</p>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section">
          <div className="container">
            <p className="eyebrow">In the field</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Recent {service.name} projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="mt-8">
              <Link href="/our-work" className="font-bold text-teal hover:underline">View all project videos →</Link>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section bg-cool-gray">
          <div className="container max-w-3xl">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy mb-8">{service.name} FAQ</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      )}

      <CTASection variant="teal" heading={`Ready to discuss your ${service.name.toLowerCase()} project?`} />
    </>
  );
}
