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
  description: "Learn Seacoast Building & Design's mission and meet the owners of this Florida-certified general and roofing contractor serving homes, businesses, and communities.",
};

const missionPrinciples = [
  {
    heading: "Plan around people and property",
    body: "Consider the property, its occupants, access, protection, and agreed site requirements before work begins.",
  },
  {
    heading: "Coordinate the agreed scope",
    body: "Keep trades, permits, materials, schedule, and project decisions moving through one coordinated process.",
  },
  {
    heading: "Document decisions and progress",
    body: "Organize scope decisions, approvals, progress information, inspections, and closeout around the contract.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={personSchema()} />
      <SchemaScript schema={chandraSchema()} />
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">A family-owned contractor focused on Florida properties</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Clear and Chandra Dayland lead Seacoast Building &amp; Design, coordinating roofing, storm repair, exterior renovations, and additions for residential, commercial, and multi-family properties.
          </p>
        </div>
      </section>

      <TrustBar />

      <section id="mission" className="section scroll-mt-28 bg-navy-deep text-white">
        <div className="container">
          <p className="eyebrow text-orange">Our mission</p>
          <h2 className="mt-3 max-w-4xl font-heading text-4xl font-bold">Protect. Improve. Expand—with clarity at every step.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Our mission is to protect, improve, and expand Florida properties through coordinated construction, clear communication, and disciplined follow-through—from the first scope conversation through the final walkthrough.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-white/70">
            We plan each project around the property, its occupants, the agreed scope, applicable requirements, and the commitments in the signed contract.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {missionPrinciples.map((principle) => (
              <div key={principle.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-xl font-bold text-orange">{principle.heading}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">One team for a coordinated construction scope.</h2>
            <p className="mt-5 leading-8 text-text-secondary">
              Depending on the agreed scope, Seacoast can coordinate buildouts, major rehabilitation, additions, roofing, gutters, fascia, soffits, siding, windows, doors, enclosures, carports, storm repairs, permits, materials, and documentation.
            </p>
            <p className="mt-5 leading-8 text-text-secondary">
              Our project library includes videos and photos from completed work across the region. It gives property owners a practical way to review our experience before starting a conversation.
            </p>
          </div>
          <div>
            <p className="eyebrow">Why Southwest Florida</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Florida weather changes what works.</h2>
            <p className="mt-5 leading-8 text-text-secondary">
              Salt air, intense sun, hurricane exposure, and Florida building codes all shape an exterior project. Our team considers those local conditions when recommending materials, planning the work, and explaining the maintenance a property may need.
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
            Here is a look at Seacoast&apos;s team and active jobsites across residential, commercial, and community projects.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-navy/10 shadow-soft">
              <div className="relative aspect-[3/2]">
                <Image src="/images/about/seacoast-jobsite-sign.webp" alt="Seacoast Building & Design jobsite sign on a Southwest Florida golf course listing roofing, gutters, solar, and renovation services with the company license numbers" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <figcaption className="bg-white px-5 py-4 text-sm text-text-secondary">Our jobsite signs identify the company, services, and Florida contractor licenses behind the work.</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-navy/10 shadow-soft">
              <div className="relative aspect-[3/2]">
                <Image src="/images/about/seacoast-crew-vinyl-fence.webp" alt="Seacoast crew installing a new white vinyl privacy fence to replace a storm-damaged wood fence in Southwest Florida" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <figcaption className="bg-white px-5 py-4 text-sm text-text-secondary">A Seacoast crew replaces a storm-damaged fence as part of an exterior repair project.</figcaption>
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
                  <Image src="/images/about/clear-dayland.webp" alt="Clear Dayland, owner of Seacoast Building & Design, wearing a Seacoast Building & Design shirt" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" priority />
                </div>
              </figure>
              <div className="mt-6 rounded-2xl border border-navy/10 bg-white px-6 py-5">
                <p className="font-heading font-bold text-navy">Seacoast credentials</p>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li>Florida Certified General Contractor license CGC1509237</li>
                  <li>Florida Certified Roofing Contractor license CCC1332648</li>
                  <li>
                    <a
                      href="https://www.gaf.com/en-us/roofing-contractors/commercial/seacoast-building-and-design-lehigh-acres-fl-1154417"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-orange hover:underline"
                    >
                      GAF GoldElite™ Commercial Contractor <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                  <li>Licensed and insured for contracting work</li>
                  <li>Project photo and video library</li>
                </ul>
                <p className="mt-4 text-xs leading-5 text-text-secondary">
                  Florida DBPR lists Richard Warren Spieth as the qualifying licensee for Seacoast&apos;s general-contractor and roofing-contractor credentials.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
                  <a href="https://www.myfloridalicense.com/portalsearches/VerifyLicensee/LicenseDetail?ID=9F07B1C529550789F66A7035331BA130" target="_blank" rel="noreferrer" className="text-orange hover:underline">Verify general-contractor license ↗</a>
                  <a href="https://www.myfloridalicense.com/LicenseDetail.asp?SID=&amp;id=DE0037BC6D66FB5A7FD663DFDCA7E919" target="_blank" rel="noreferrer" className="text-orange hover:underline">Verify roofing license ↗</a>
                </div>
              </div>
            </div>
            <div>
              <p className="leading-8 text-text-secondary">
                Clear Dayland owns Seacoast Building &amp; Design. His experience includes hands-on construction, roofing, production, sales, and storm-related property work.
              </p>
              <p className="mt-5 leading-8 text-text-secondary">
                That broad background helps him evaluate both the work itself and the decisions homeowners, property managers, and commercial clients face. He is involved in project assessment and construction decisions as the scope requires.
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-navy">What Clear specializes in</p>
                <ul className="mt-3 grid gap-2 text-text-secondary sm:grid-cols-2">
                  <li>Storm readiness programs for homeowners and communities</li>
                  <li>Container build-outs for homes, offices, and storage</li>
                  <li>Residential and commercial roofing</li>
                  <li>Commercial buildouts, major rehabilitation, and storm restoration</li>
                  <li>Additions and coordinated exterior renovations</li>
                  <li>Windows, doors, gutters, siding, and lanais</li>
                  <li>Coordinating related trades from inspection to walkthrough</li>
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
                  <li>Construction operations experience</li>
                  <li>Former aviation professional</li>
                  <li>Operations, finance, and analytics lead</li>
                  <li>Co-owner, Seacoast Building &amp; Design</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="leading-8 text-text-secondary">
                Chandra Dayland co-owns Seacoast and leads the systems that keep projects moving: client communication, team training, accounting, analytics, management, and sales. Her aviation background shaped a practical approach to safety, documentation, and complex coordination. She works alongside Clear to keep clients informed and Seacoast&apos;s service teams organized.
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-navy">What Chandra leads</p>
                <ul className="mt-3 grid gap-2 text-text-secondary sm:grid-cols-2">
                  <li>Client communication and project coordination</li>
                  <li>Team training and operations</li>
                  <li>Accounting and analytics</li>
                  <li>Sales and customer support</li>
                  <li>Coordination across Seacoast service divisions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-navy/10 bg-white px-8 py-7">
            <p className="eyebrow">A family business</p>
            <p className="mt-3 leading-8 text-text-secondary">
              Clear and Chandra lead Seacoast together, combining field experience with day-to-day operations. Their sons also work in the trades: Donovan is a journeyman electrician, and Cazwyn works in storm restoration.
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
          <h2 className="mt-3 font-heading text-4xl font-bold text-navy">Review the work before you request a quote</h2>
          <p className="mt-5 text-lg text-text-secondary">
            Browse completed projects to see the property type, scope, materials, and finished work before you start a conversation.
          </p>
          <div className="mt-8">
            <Link href="/our-work" className="rounded-full bg-orange-deep px-8 py-4 text-center font-bold text-white hover:bg-copper">Browse Project Videos</Link>
          </div>
        </div>
      </section>

      <CTASection variant="navy" heading="Ready to talk through your property?" subtext="Share what you are planning or what needs attention. We will review the details and help you understand the next step." />
    </>
  );
}
