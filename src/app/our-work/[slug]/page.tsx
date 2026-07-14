import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { SchemaScript, videoObjectSchema } from "@/components/Schema";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { getCategory, getProjectBySlug, projects } from "@/data/projects";
import { videoMetadata } from "@/data/videoMetadata";
import { seoDescription, seoTitle } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const categoryDestinations: Record<string, { label: string; href: string; inquiryHref: string }> = {
  Roofing: { label: "Explore roofing services", href: "/services/roofing", inquiryHref: "/contact?service=roofing" },
  Siding: { label: "Explore siding services", href: "/services/siding", inquiryHref: "/contact?service=siding" },
  "Gutters & Trim": { label: "Explore gutter, fascia, and soffit services", href: "/services/gutters-fascia-soffits", inquiryHref: "/contact?service=gutters-fascia-soffits" },
  "Exterior Structures": { label: "Explore carport and structure services", href: "/services/carports", inquiryHref: "/contact?service=carports" },
  Enclosures: { label: "Explore enclosure and lanai services", href: "/services/pool-enclosures-lanais", inquiryHref: "/contact?service=pool-enclosures-lanais" },
  Solar: { label: "Explore solar services", href: "/services/solar-services", inquiryHref: "/contact?service=solar-services" },
  Rehabilitation: { label: "Explore major rehabilitation partnerships", href: "/capital-partners", inquiryHref: "/capital-partners#inquire" },
  "Commercial Construction": { label: "Explore commercial project partnerships", href: "/capital-partners", inquiryHref: "/capital-partners#inquire" },
  Other: { label: "Explore Seacoast services", href: "/services", inquiryHref: "/contact" },
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const description = seoDescription(project.description);
  const socialImage = project.photos?.[0] ?? {
    src: "/images/og-default.jpg",
    alt: "Seacoast Building & Design",
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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const hasSpecificLocation = Boolean(project.location && project.location !== "Southwest Florida");
  const hasPhotos = Boolean(project.photos?.length);
  const overviewIntro = project.videoId && hasPhotos
    ? "Review the project details and work completed, then watch the video and browse the jobsite photos for a closer look."
    : project.videoId
      ? "Review the project details and work completed, then watch the video for a closer look at the job."
      : hasPhotos
        ? "Review the project details, work completed, and jobsite photos available for this project."
        : "Review the verified project summary, the conditions Seacoast worked through, and the completed construction scope.";
  const projectFacts = [
    { label: "Service", value: project.serviceType },
    ...(hasSpecificLocation && project.location ? [{ label: "Location", value: project.location }] : []),
    ...(project.propertyType ? [{ label: "Property", value: project.propertyType }] : []),
    ...(project.completedOn
      ? [{
          label: project.completionLabel ?? "Completed",
          value: formatProjectDate(project.completedOn),
        }]
      : []),
  ];
  const currentVideoMetadata = project.videoId ? videoMetadata[project.videoId] : undefined;
  const projectCategory = getCategory(project.serviceType);
  const categoryDestination = categoryDestinations[projectCategory] ?? categoryDestinations.Other;
  const relatedProjects = projects
    .filter((candidate) => candidate.slug !== project.slug && getCategory(candidate.serviceType) === projectCategory)
    .slice(0, 3);

  return (
    <>
      {project.videoId && (
        <SchemaScript
          schema={videoObjectSchema({
            name: project.title,
            description: project.description,
            videoId: project.videoId,
            uploadDate: currentVideoMetadata?.uploadDate,
            duration: currentVideoMetadata?.duration,
          })}
        />
      )}
      <section className="section dark-band bg-navy">
        <div className="container">
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: project.title }]} />
          <div className="flex flex-wrap gap-2 text-xs font-bold mb-4">
            <span className="rounded-full bg-orange/10 px-3 py-1 text-orange">{project.serviceType}</span>
            {hasSpecificLocation && project.location && (
              <span className="rounded-full bg-cool-gray px-3 py-1 text-text-secondary">{project.location}</span>
            )}
          </div>
          <h1 className="font-heading text-4xl font-bold text-navy md:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-text-secondary">{project.description}</p>
        </div>
      </section>

      {project.videoId && (
        <section className="pb-16">
          <div className="container">
            <YouTubeFacade videoId={project.videoId} title={project.title} />
          </div>
        </section>
      )}

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">See the work</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy md:text-4xl">Project overview</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            {overviewIntro}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-navy/10 bg-warm-white p-6">
                <p className="eyebrow">{fact.label}</p>
                <p className="mt-3 font-heading text-xl font-bold text-navy">{fact.value}</p>
              </div>
            ))}
          </div>

          {(project.challenge || project.approach) && (
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {project.challenge && (
                <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="eyebrow">The challenge</h3>
                  <p className="mt-3 leading-7 text-text-secondary">{project.challenge}</p>
                </article>
              )}
              {project.approach && (
                <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
                  <h3 className="eyebrow">How Seacoast handled it</h3>
                  <p className="mt-3 leading-7 text-text-secondary">{project.approach}</p>
                </article>
              )}
            </div>
          )}

          {project.scope && project.scope.length > 0 && (
            <div className="mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-navy">Work completed</h3>
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
            <p className="eyebrow">Craftsmanship up close</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy md:text-4xl">Photos from the jobsite</h2>
            <p className="mt-4 max-w-3xl text-text-secondary">
              See finished details and installation progress from this Seacoast project.
            </p>
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

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Keep exploring</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
                {relatedProjects.length > 0 ? "Similar Seacoast projects" : "Planning your next project"}
              </h2>
              <p className="mt-4 max-w-2xl text-text-secondary">
                Review the service behind this work, or send Seacoast the property details to discuss a similar scope.
              </p>
            </div>
            <Link href={categoryDestination.href} className="font-bold text-orange hover:underline">
              {categoryDestination.label} &rarr;
            </Link>
          </div>
          {relatedProjects.length > 0 && (
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Planning a similar project?"
        subtext="Tell us what you are working on. Seacoast will review the property, explain practical options, and outline the next steps."
        buttonLabel="Discuss a Similar Project"
        buttonHref={categoryDestination.inquiryHref}
      />
    </>
  );
}
