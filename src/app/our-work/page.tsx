import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, serviceTypes } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work | Seacoast Building & Design",
  description: "Browse completed roofing, siding, enclosure, and exterior project videos by Seacoast Building & Design across Southwest Florida.",
};

export default function OurWorkPage() { return <section className="section dark-band bg-navy"><div className="container"><p className="eyebrow">Portfolio</p><h1 className="mt-2 font-heading text-5xl font-bold text-navy">Our work</h1><p className="mt-5 max-w-3xl text-lg text-text-secondary">Browse completed roofing, exterior structure, siding, and enclosure projects. Filtering is scaffolded for the next phase.</p><div className="mt-8 flex flex-wrap gap-2"><span className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">All</span>{serviceTypes.map((type) => <span key={type} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-text-secondary ring-1 ring-navy/10">{type}</span>)}</div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>; }
