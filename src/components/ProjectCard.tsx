import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/our-work/${project.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/10 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-video overflow-hidden bg-navy">
        <Image
          src={`https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg`}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-85 transition group-hover:scale-105"
        />
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-xl text-teal shadow-soft">▶</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-teal/10 px-3 py-1 text-teal">{project.serviceType}</span>
          <span className="rounded-full bg-cool-gray px-3 py-1 text-text-secondary">{project.location}</span>
        </div>
        <h3 className="mt-4 font-heading text-lg font-bold text-navy">{project.title}</h3>
      </div>
    </Link>
  );
}
