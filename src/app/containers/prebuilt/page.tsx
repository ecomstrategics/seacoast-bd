import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Prebuilt Container Options",
  description:
    "Prebuilt container mini-home and container building options from Seacoast Building & Design. First mini-home on wheels coming soon.",
};

export default function PrebuiltContainersPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Containers", href: "/containers" }, { label: "Prebuilt Options" }]} />
          <p className="eyebrow mt-4">Prebuilt container options</p>
          <h1 className="mt-3 max-w-3xl font-heading text-5xl font-bold leading-tight">Mini-home on wheels coming soon.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            We&apos;re preparing the first prebuilt container mini-home option. Real photos, dimensions, finish details, and availability will be added here once the unit is ready to show.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact?service=prebuilt-containers" className="rounded-full bg-teal px-6 py-3 font-bold text-white transition hover:bg-copper">Ask About Prebuilt Options</Link>
            <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy">View Custom Container Builds</Link>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">First unit</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">A ready-to-show mini-home, not just a concept.</h2>
            <p className="mt-4 text-text-secondary">
              This page will feature one real mini-home on wheels to start. Once photos are available, we&apos;ll add the gallery, interior layout, build details, pricing, transport notes, and next-step process.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-container-steel/50 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-container-steel">Listing preview</p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-navy">Prebuilt Mini-Home on Wheels</h3>
            <p className="mt-3 text-text-secondary">Photos and specs coming soon.</p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal">
              {["Real unit photos", "Exterior and interior finish details", "Dimensions and transport notes", "Availability and pricing"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-teal" aria-hidden>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        variant="teal"
        heading="Want to be notified when the first prebuilt unit is ready?"
        subtext="Ask about the upcoming mini-home on wheels and we can walk you through timing, photos, and availability."
        buttonLabel="Contact Seacoast"
      />
    </>
  );
}
