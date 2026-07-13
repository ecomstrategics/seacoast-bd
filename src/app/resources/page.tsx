import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, articles, and resources about roofing, storm prep, exterior renovations, and building codes for Southwest Florida property owners.",
  robots: { index: false, follow: true },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <p className="eyebrow">Project planning help</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Practical answers for Florida properties</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            We are preparing guides about roofs, storm damage, exterior work, and Florida permitting. Until then, browse completed projects or start with the questions Seacoast hears most often.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-6 md:grid-cols-2">
          <Link href="/our-work" className="rounded-2xl border border-navy/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
            <p className="eyebrow">Project examples</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-navy">See completed work</h2>
            <p className="mt-3 leading-7 text-text-secondary">Review project scopes, materials, photos, and videos from roofing and exterior work across the region.</p>
            <span className="mt-5 inline-flex font-semibold text-orange">Browse projects →</span>
          </Link>
          <Link href="/faq" className="rounded-2xl border border-navy/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-navy">Know what to expect</h2>
            <p className="mt-3 leading-7 text-text-secondary">Start with straightforward answers about services, estimates, storm work, financing, and container projects.</p>
            <span className="mt-5 inline-flex font-semibold text-orange">Read the FAQ →</span>
          </Link>
        </div>
      </section>

      <CTASection variant="navy" heading="Have a question about your property now?" subtext="Tell us what you are seeing or planning. We will help you decide whether an inspection, repair, or estimate makes sense." buttonLabel="Ask About Your Property" />
    </>
  );
}
