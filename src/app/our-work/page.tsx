import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WorkFilter } from "@/components/WorkFilter";
import { projects, categories, roofingSubcategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Southwest Florida Project Portfolio",
  description: "Browse Seacoast roofing and exterior project videos, jobsite photos, materials, and completed-work details from across Southwest Florida.",
};

export default function OurWorkPage() {
  return (
    <section className="section dark-band bg-navy">
      <div className="container">
        <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Our Work" }]} />
        <p className="eyebrow">Completed projects</p>
        <h1 className="mt-2 max-w-4xl font-heading text-5xl font-bold text-navy">
          Roofing &amp; Exterior Projects Across Southwest Florida
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-text-secondary">
          See the materials, scope, and finished work behind Seacoast roofing, exterior, structure, and enclosure projects.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-navy">
            See how Seacoast works before you request a quote
          </h2>
          <p className="mt-3 leading-7 text-text-secondary">
            Each page pairs a project video with the facts and jobsite photos available for that job, helping you evaluate relevant experience and workmanship before you call.
          </p>
        </div>
        <WorkFilter projects={projects} categories={categories} roofingSubcategories={roofingSubcategories} />
      </div>
    </section>
  );
}
