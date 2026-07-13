import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, videoObjectSchema } from "@/components/Schema";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { getProjectBySlug, projects } from "@/data/projects";
import { seoDescription, seoTitle } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: seoTitle(project.title),
    description: seoDescription(project.description),
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <SchemaScript schema={videoObjectSchema({ name: project.title, description: project.description, videoId: project.videoId })} />
      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="mb-6">
            <Link href="/our-work" className="text-sm font-semibold text-orange hover:underline">&larr; Back to all projects</Link>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-bold mb-4">
            <span className="rounded-full bg-orange/10 px-3 py-1 text-orange">{project.serviceType}</span>
            <span className="rounded-full bg-cool-gray px-3 py-1 text-text-secondary">{project.location}</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-navy md:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-text-secondary">{project.description}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <YouTubeFacade videoId={project.videoId} title={project.title} />
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container grid gap-10 md:grid-cols-3">
          <div className="rounded-2xl border border-navy/10 bg-warm-white p-6">
            <p className="eyebrow">Service Type</p>
            <p className="mt-3 font-heading text-xl font-bold text-navy">{project.serviceType}</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-warm-white p-6">
            <p className="eyebrow">Location</p>
            <p className="mt-3 font-heading text-xl font-bold text-navy">{project.location}</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-warm-white p-6">
            <p className="eyebrow">Documentation</p>
            <p className="mt-3 font-heading text-xl font-bold text-navy">Video documented</p>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Have a similar project?"
        subtext="Tell us about your property and we'll walk you through what a project like this would look like."
        buttonLabel="Get a Free Quote"
      />
    </>
  );
}
