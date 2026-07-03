import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { SchemaScript, personSchema, chandraSchema } from "@/components/Schema";
import { serviceArea } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About",
  description: "40+ years of Southwest Florida contracting. Licensed, insured, and video-documented. Learn more about Seacoast Building & Design.",
};

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={personSchema()} />
      <SchemaScript schema={chandraSchema()} />
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
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
              Every project we complete is documented on video, and our library of project videos keeps growing. This level of transparency is rare in contracting. We believe it&apos;s the most honest way to show what we can do.
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
          <p className="eyebrow">On the ground in Southwest Florida</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Real crews. Real jobsites.</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Commercial, residential, and public works across the SW Florida corridor. Here is a look at our team and our signs in the field.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-navy/10 shadow-soft">
              <div className="relative aspect-[3/2]">
                <Image src="/images/about/seacoast-jobsite-sign.webp" alt="Seacoast Building & Design jobsite sign on a Southwest Florida golf course listing roofing, gutters, solar, and renovation services with the company license numbers" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <figcaption className="bg-white px-5 py-4 text-sm text-text-secondary">Our jobsite signs go up across the region, from residential roofs to commercial and public works projects.</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-navy/10 shadow-soft">
              <div className="relative aspect-[3/2]">
                <Image src="/images/about/seacoast-crew-vinyl-fence.webp" alt="Seacoast crew installing a new white vinyl privacy fence to replace a storm-damaged wood fence in Southwest Florida" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <figcaption className="bg-white px-5 py-4 text-sm text-text-secondary">Our crew replacing a storm-damaged fence. The same team handles the full exterior envelope on every job.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Meet the owners of Seacoast Building &amp; Design</h2>
          <h3 className="mt-10 font-heading text-2xl font-bold text-navy">Clear Dayland, Owner</h3>
          <div className="mt-6 grid gap-12 md:grid-cols-[2fr_3fr] md:items-start">
            <div>
              <figure className="overflow-hidden rounded-2xl border border-navy/10 shadow-soft">
                <div className="relative aspect-[4/5]">
                  <Image src="/images/about/clear-dayland.webp" alt="Clear Dayland, owner of Seacoast Building & Design, a Florida Certified General Contractor and Certified Roofing Contractor, wearing a Seacoast Building & Design shirt" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" priority />
                </div>
              </figure>
              <div className="mt-6 rounded-2xl border border-navy/10 bg-white px-6 py-5">
                <p className="font-heading font-bold text-navy">Credentials</p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li>Florida Certified General Contractor</li>
                  <li>Florida Certified Roofing Contractor</li>
                  <li>OSHA-certified jobsite safety</li>
                  <li>A+ rated with the Better Business Bureau</li>
                  <li>5-star Google review rating</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="leading-8 text-text-secondary">
                Clear Dayland is the owner of Seacoast Building &amp; Design and a Florida Certified General Contractor and Certified Roofing Contractor with more than 30 years of hands-on experience. He has spent three decades building and improving high-value residential and commercial properties across the State of Florida.
              </p>
              <p className="mt-5 leading-8 text-text-secondary">
                Clear has worked every tier of the trade, from apprentice and builder to roofer, sales and production manager, insurance adjuster, and finally owner of his own company. That full-stack experience is why he stays personally involved at every level of a project, from the first inspection to the final result.
              </p>
              <p className="mt-5 leading-8 text-text-secondary">
                His commitment to homeowners and businesses shows in the standards he holds the company to: OSHA-certified safety practices, an A+ rating with the Better Business Bureau, and 5-star Google reviews that reflect the quality and value clients see in his work.
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-navy">What Clear specializes in</p>
                <ul className="mt-3 grid gap-2 text-text-secondary sm:grid-cols-2">
                  <li>Storm readiness programs for homeowners and communities</li>
                  <li>Shipping and Connex container build-outs for homes, offices, and micro-green gardens, including buying, moving, and renting</li>
                  <li>Residential and commercial roofing</li>
                  <li>Radiant barrier roof underlayment</li>
                  <li>Land and property investment</li>
                  <li>General contracting across all trades: doors, drywall, gutters, lanais, painting, remodeling, siding, and windows</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 className="mt-16 font-heading text-2xl font-bold text-navy">Chandra Dayland, Co-Owner</h3>
          <div className="mt-6 grid gap-12 md:grid-cols-[2fr_3fr] md:items-start">
            <div>
              <figure className="overflow-hidden rounded-2xl border border-navy/10 shadow-soft">
                <div className="relative aspect-[4/5]">
                  <Image src="/images/about/chandra-dayland.webp" alt="Chandra Dayland, co-owner of Seacoast Building & Design, wearing a Seacoast Building & Design polo shirt" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                </div>
              </figure>
              <div className="mt-6 rounded-2xl border border-navy/10 bg-white px-6 py-5">
                <p className="font-heading font-bold text-navy">Background</p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li>20+ years immersed in construction operations</li>
                  <li>Former aviation professional</li>
                  <li>Operations, finance, and analytics lead</li>
                  <li>Co-owner, Seacoast Building &amp; Design</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="leading-8 text-text-secondary">
                Chandra Dayland is co-owner of Seacoast Building &amp; Design and the operational backbone of the company. Her career began in aviation, spanning piloting, ground control, and aircraft dispatching, where uncompromising attention to detail, strict safety standards, and complex logistics were part of the job every day.
              </p>
              <p className="mt-5 leading-8 text-text-secondary">
                Over the past two decades, Chandra immersed herself in the construction industry alongside her husband, Clear, learning the trade through hands-on observation and direct experience. She carried the same analytical, safety-first discipline from aviation into residential and commercial building, holding every project to exact specifications and top-tier quality standards.
              </p>
              <p className="mt-5 leading-8 text-text-secondary">
                Today she leads the operational side of the business: communications, employee training, accounting, analytics, management, and sales. Her all-in-one approach helped expand Seacoast Building &amp; Design into multiple divisions, giving homeowners and businesses a true full-service experience under one roof. A dedicated wife and mother of two, Chandra knows firsthand how much a home means to a family, and she brings that perspective to every client&apos;s project and long-term investment.
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-navy">What Chandra leads</p>
                <ul className="mt-3 grid gap-2 text-text-secondary sm:grid-cols-2">
                  <li>Operations, accounting, and analytics</li>
                  <li>Employee training and team management</li>
                  <li>Client communications and sales</li>
                  <li>Restoration and structural upgrades and repairs</li>
                  <li>Shipping container homes, offices, and material storage rentals</li>
                  <li>Micro-green growing systems for families, businesses, and restaurants</li>
                  <li>Land and property sourcing for investment and living</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-navy/10 bg-white px-8 py-7">
            <p className="eyebrow">A family business</p>
            <p className="mt-3 leading-8 text-text-secondary">
              Clear and his wife Chandra are the visionary owners behind Seacoast Building &amp; Design, serving as the operational anchors for the company in the State of Florida. Together they have built a stellar reputation as a trusted Certified General Contractor and Roofing Contractor team.
            </p>
            <p className="mt-4 leading-8 text-text-secondary">
              Mentoring the next generation is a priority for Clear, and both of his sons are following in his footsteps. Donovan is a Journeyman Electrician, and Cazwyn works as a Storm Restoration Consultant, helping homeowners and business owners recover after a storm.
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
          <h2 className="mt-3 font-heading text-4xl font-bold text-navy">Decades of completed work, documented on video.</h2>
          <p className="mt-5 text-lg text-text-secondary">
            We don&apos;t just tell you we do good work. We show you every project, documented on video, with real results you can evaluate before you sign anything.
          </p>
          <div className="mt-8">
            <Link href="/our-work" className="rounded-full bg-orange-deep px-8 py-4 text-center font-bold text-white hover:bg-copper">Browse Project Videos</Link>
          </div>
        </div>
      </section>

      <CTASection variant="navy" heading="Ready to work with Seacoast?" subtext="Request a no-pressure quote. We'll schedule a walkthrough and give you a straight answer about your project." />
    </>
  );
}
