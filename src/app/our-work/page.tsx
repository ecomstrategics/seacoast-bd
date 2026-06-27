import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WorkFilter } from "@/components/WorkFilter";
import { projects, categories, roofingSubcategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Browse completed roofing, siding, enclosure, and exterior project videos by Seacoast Building & Design across Southwest Florida.",
};

export default function OurWorkPage() { return <section className="section dark-band bg-navy"><div className="container"><Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Our Work" }]} /><p className="eyebrow">Portfolio</p><h1 className="mt-2 font-heading text-5xl font-bold text-navy">Our work</h1><p className="mt-5 max-w-3xl text-lg text-text-secondary">Browse completed roofing, exterior structure, siding, and enclosure projects across Southwest Florida.</p><WorkFilter projects={projects} categories={categories} roofingSubcategories={roofingSubcategories} /></div></section>; }
