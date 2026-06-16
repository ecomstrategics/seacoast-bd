import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { serviceArea } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About",
  description: "40+ years of Southwest Florida contracting. Licensed, insured, and video-documented. Learn more about Seacoast Building & Design.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Built on 40+ years of Southwest Florida work</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Seacoast Building &amp; Design is a full-service exterior contractor serving Southwest Florida since the 1980s. We specialize in roofing, storm repair, exterior renovations, and enclosures for residential, commercial, and multi-family properties.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="section dark-band bg-navy">
        <div className="container grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">One team. Full exterior scope.</h2>
            <p className="mt-5 leading-8 text-text-secondary">
              We handle the full exterior envelope: roofing, gutters, fascia, soffits, siding, windows, doors, enclosures, carports, and storm damage repairs. Our team coordinates trades, permitting, materials, and documentation from first inspection to final walkthrough.
            </p>
            <p className="mt-5 leading-8 text-text-secondary">
              Every project we complete is documented on video, with 24 completed project videos and counting. This level of transparency is rare in contracting. We believe it&apos;s the most honest way to show what we can do.
            </p>
          </div>
          <div>
            <p className="eyebrow">Why Southwest Florida</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Coastal properties need coastal expertise.</h2>
            <p className="mt-5 leading-8 text-text-secondary">
              Salt air, intense UV, hurricane exposure, and Florida building codes are a distinct combination. Our team has spent decades working in these conditions. We know which materials hold up, which methods fail, and how to build for durability in this environment.
            </p>
            <p className="mt-5 leading-8 text-text-secondary">
              We&apos;re licensed and insured in Florida, and we serve six counties across the Southwest coast: Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Service area</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">We serve six Southwest Florida counties</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {serviceArea.map((area) => (
              <div key={area} className="rounded-2xl border border-navy/10 bg-white px-6 py-5">
                <p className="font-heading font-bold text-navy">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl text-center">
          <p className="eyebrow">The work speaks</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-navy">24 completed projects. All on video.</h2>
          <p className="mt-5 text-lg text-text-secondary">
            We don&apos;t just tell you we do good work. We show you every project, documented on video, with real results you can evaluate before you sign anything.
          </p>
          <div className="mt-8">
            <Link href="/our-work" className="rounded-full bg-teal px-8 py-4 font-bold text-white hover:bg-copper">Browse Project Videos</Link>
          </div>
        </div>
      </section>

      <CTASection variant="navy" heading="Ready to work with Seacoast?" subtext="Request a no-pressure quote. We'll schedule a walkthrough and give you a straight answer about your project." />
    </>
  );
}
