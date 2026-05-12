import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBar } from "@/components/TrustBar";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Seacoast Building & Design | Southwest Florida's Full-Service Contractor",
  description: "Roofing, exterior renovations, storm repair, and enclosures across Southwest Florida. 40+ years of video-documented craftsmanship. Licensed & Insured. (941) 500-5431",
};

export default function Home() {
  return <>
    <section className="bg-navy py-24 text-white"><div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="eyebrow">Southwest Florida contractor</p><h1 className="mt-4 font-heading text-5xl font-bold leading-tight md:text-6xl">Built for storms. Designed for the coast.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Seacoast Building & Design handles roofing, exterior renovations, storm repairs, enclosures, and additions for residential, commercial, and multi-family properties.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">Get a Free Quote</Link><Link href="/our-work" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white hover:bg-white hover:text-navy">View Our Work</Link></div></div><div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-soft"><p className="font-heading text-2xl font-bold">Full-service project support</p><p className="mt-4 text-white/75">From first inspection through final walkthrough, our team coordinates trades, documentation, materials, and communication so your project keeps moving.</p></div></div></section>
    <TrustBar />
    <section className="section"><div className="container"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="eyebrow">Featured projects</p><h2 className="mt-2 font-heading text-4xl font-bold text-navy">Recent work in the field</h2></div><Link href="/our-work" className="hidden font-bold text-teal sm:block">See all projects →</Link></div><div className="grid gap-6 md:grid-cols-3">{projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>
    <section className="section bg-cool-gray"><div className="container"><p className="eyebrow">Services</p><h2 className="mt-2 font-heading text-4xl font-bold text-navy">One team for the exterior envelope</h2><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>
    <CTASection variant="navy" />
  </>;
}
