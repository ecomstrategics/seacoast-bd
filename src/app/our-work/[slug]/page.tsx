import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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

  const description = seoDescription(project.description);
  const socialImage = project.photos?.[0] ?? {
    src: "/images/og-default.jpg",
    alt: "Seacoast Building & Design project in Southwest Florida",
    width: 1200,
    height: 630,
  };

  return {
    title: seoTitle(project.title),
    description,
    alternates: { canonical: `/our-work/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description,
      url: `/our-work/${project.slug}`,
      images: [{ url: socialImage.src, width: socialImage.width, height: socialImage.height, alt: socialImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [socialImage.src],
    },
  };
}

function formatProjectDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <SchemaScript schema={videoObjectSchema({ name: project.title, description: project.description, videoId: project.videoId })} />
      <section className="section dark-band bg-navy">
        <div className="container">
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: project.title }]} />
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
        <div className="container">
          <p className="eyebrow">Verified project details</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy md:text-4xl">Project facts and scope</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-navy/10 bg-warm-white p-6">
              <p className="eyebrow">Service Type</p>
              <p className="mt-3 font-heading text-xl font-bold text-navy">{project.serviceType}</p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-warm-white p-6">
              <p className="eyebrow">Location</p>
              <p className="mt-3 font-heading text-xl font-bold text-navy">{project.location}</p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-warm-white p-6">
              <p className="eyebrow">Property Type</p>
              <p className="mt-3 font-heading text-xl font-bold text-navy">{project.propertyType ?? "Southwest Florida property"}</p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-warm-white p-6">
              <p className="eyebrow">{project.completedOn ? project.completionLabel ?? "Completed" : "Documentation"}</p>
              <p className="mt-3 font-heading text-xl font-bold text-navy">
                {project.completedOn ? formatProjectDate(project.completedOn) : "Video documented"}
              </p>
            </div>
          </div>

          {project.scope && project.scope.length > 0 && (
            <div className="mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-navy">Documented scope</h3>
              <ul className="mt-5 grid gap-3 text-text-secondary sm:grid-cols-2">
                {project.scope.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-orange">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {project.photos && project.photos.length > 0 && (
        <section className="section bg-warm-white">
          <div className="container">
            <p className="eyebrow">Approved project photography</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy md:text-4xl">Project gallery</h2>
            <p className="mt-4 max-w-3xl text-text-secondary">Field photos from the documented Seacoast project scope.</p>
            <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
              {project.photos.map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/10">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="p-4 text-sm leading-6 text-text-secondary">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        variant="navy"
        heading="Have a similar project?"
        subtext="Tell us about your property and we'll walk you through what a project like this would look like."
        buttonLabel="Get a Free Quote"
      />
    </>
  );
}
