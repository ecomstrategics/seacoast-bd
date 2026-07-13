import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("Compare Shipping Containers, Sheds, Storage & Additions"),
  description:
    "Compare container projects with rented storage, sheds, RVs, and traditional additions by ownership, site needs, customization, permitting, and intended use.",
};

const comparisonRows = [
  {
    factor: "Where the space is",
    container: "On your property, if placement is allowed and access works",
    storage: "At an off-site facility",
    shed: "On your property, subject to local and HOA rules",
    addition: "Permanently connected to the existing building",
  },
  {
    factor: "Ownership",
    container: "Usually purchased and owned",
    storage: "Usually rented with an ongoing monthly charge",
    shed: "Usually purchased and owned",
    addition: "Part of the real property",
  },
  {
    factor: "Customization",
    container: "Doors, insulation, power, HVAC, plumbing, and finishes can be scoped",
    storage: "Limited to the rented unit and facility rules",
    shed: "Depends on the product and local requirements",
    addition: "Designed around the house and intended occupancy",
  },
  {
    factor: "Site work",
    container: "Delivery access, base or foundation, drainage, and utility planning",
    storage: "No work at your property",
    shed: "Placement area, anchoring, drainage, and sometimes a foundation",
    addition: "Foundation, structural tie-in, utilities, drainage, and finish work",
  },
  {
    factor: "Permitting and zoning",
    container: "Varies by parcel, duration, foundation, utilities, and use",
    storage: "Facility handles its own property approvals",
    shed: "Varies by size, location, utilities, and local rules",
    addition: "Plans, permits, inspections, and occupancy requirements generally apply",
  },
  {
    factor: "Best starting question",
    container: "Can this address support the intended container use?",
    storage: "How often do I need access, and for how long?",
    shed: "Will a standard product fit the items and site?",
    addition: "Do I need permanently integrated living or working space?",
  },
];

export default function ContainerComparisonPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Containers", href: "/containers" }, { label: "Compare" }]} />
          <p className="eyebrow mt-4">Compare the practical details</p>
          <h1 className="mt-2 max-w-4xl font-heading text-5xl font-bold leading-tight">Container, shed, rented storage, or addition?</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            The right answer depends on what you need the space to do, where it can go, how long you need it, and what the property allows. Use this comparison to narrow the conversation—not as a substitute for a site review.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact?service=containers" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">Ask About Your Property</Link>
            <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">See Container Options</Link>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">Side-by-side</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">What changes from one option to another</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">These are general planning differences. Product, parcel, municipality, HOA, design, and intended use can change the requirements.</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-navy/10 bg-white shadow-sm">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="p-4 font-heading text-base">Factor</th>
                  <th className="p-4 font-heading text-base">Container</th>
                  <th className="p-4 font-heading text-base">Rented storage</th>
                  <th className="p-4 font-heading text-base">Shed</th>
                  <th className="p-4 font-heading text-base">Traditional addition</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="border-b border-navy/10 align-top last:border-0">
                    <th className="bg-cool-gray/40 p-4 font-semibold text-navy">{row.factor}</th>
                    <td className="p-4 leading-6 text-text-secondary">{row.container}</td>
                    <td className="p-4 leading-6 text-text-secondary">{row.storage}</td>
                    <td className="p-4 leading-6 text-text-secondary">{row.shed}</td>
                    <td className="p-4 leading-6 text-text-secondary">{row.addition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <p className="eyebrow">A container may fit when</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">You want configurable space on the property.</h2>
              <ul className="mt-6 space-y-4 text-text-secondary">
                {[
                  "The site has workable delivery and placement access.",
                  "Zoning, HOA, floodplain, and building requirements can be satisfied.",
                  "The shell dimensions work for the intended storage, office, workshop, or approved guest-space layout.",
                  "You want to define doors, insulation, utilities, security, and finishes in one scope.",
                ].map((item) => <li key={item} className="flex gap-3"><span className="font-bold text-success">✓</span><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <p className="eyebrow">Another option may fit better when</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">The site or use points in a different direction.</h2>
              <ul className="mt-6 space-y-4 text-text-secondary">
                {[
                  "You need short-term storage and do not need it at the property.",
                  "Access, setbacks, HOA rules, or zoning prevent container placement.",
                  "A standard shed meets the need with less customization.",
                  "The space must be permanently integrated with the home, making a traditional addition more appropriate.",
                ].map((item) => <li key={item} className="flex gap-3"><span className="font-bold text-orange">→</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <p className="eyebrow">A useful first conversation</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Bring the address, the intended use, and a few site photos.</h2>
          <p className="mt-4 leading-7 text-text-secondary">
            Seacoast can help you identify the access, site, permit, utility, and finish questions that affect a container project. If a shed, off-site rental, or traditional addition is the better fit, the early review should make that clear before you spend money on a shell.
          </p>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Still weighing the options?"
        subtext="Tell us what you need the space to do and where it would go. We will help you identify the most practical next step."
        buttonLabel="Discuss the Property"
      />
    </>
  );
}
