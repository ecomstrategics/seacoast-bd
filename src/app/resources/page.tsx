import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Southwest Florida Construction Resources",
  description:
    "Explore Seacoast project examples, property-planning guides, H.R. 6644 and ROAD to Housing Act information, and resources for developers and capital partners.",
  alternates: { canonical: "/resources" },
  robots: { index: true, follow: true },
};

const featuredResources = [
  {
    href: "/road-to-housing-act",
    eyebrow: "Federal housing update",
    title: "H.R. 6644 and the ROAD to Housing Act",
    description:
      "Updated July 2026. Read a sourced guide to Section 1001 and the Act's broader housing-construction provisions, including implementation and funding limitations. This is general information, not legal advice.",
    linkLabel: "Read the ROAD Act explainer",
  },
  {
    href: "/capital-partners",
    eyebrow: "For developers and investors",
    title: "Capital-partner information",
    description:
      "Review Seacoast's reported project experience and learn how the team evaluates new housing, build-to-rent, substantial rehabilitation, adaptive reuse, affordable, multifamily, and active-adult opportunities.",
    linkLabel: "Explore Capital Partners",
  },
];

const planningResources = [
  {
    href: "/our-work",
    eyebrow: "Project examples",
    title: "See completed work",
    description: "Review available project scopes, materials, photos, and videos from roofing, exterior, and community work across the region.",
    linkLabel: "Browse projects",
  },
  {
    href: "/faq",
    eyebrow: "Common questions",
    title: "Know what to expect",
    description: "Start with straightforward answers about services, estimates, storm work, financing, and container projects.",
    linkLabel: "Read the FAQ",
  },
  {
    href: "/storm-ready",
    eyebrow: "Before storm season",
    title: "Plan for your property",
    description: "See what a property-specific storm-preparation plan can cover for a home, business, association, or multi-building property.",
    linkLabel: "Review storm planning",
  },
  {
    href: "/financing",
    eyebrow: "Project financing",
    title: "Understand the available path",
    description: "Learn how financing inquiries through Hearth work and which terms remain subject to participating-lender approval.",
    linkLabel: "View financing information",
  },
];

const resourcesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://seacoastbd.com/resources#page",
  name: "Southwest Florida Construction Resources",
  description:
    "Project examples, property-planning guides, federal housing information, and capital-partner resources from Seacoast Building & Design.",
  url: "https://seacoastbd.com/resources",
  dateModified: "2026-07-13",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [...featuredResources, ...planningResources].map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: resource.title,
      url: `https://seacoastbd.com${resource.href}`,
    })),
  },
};

export default function ResourcesPage() {
  return (
    <>
      <SchemaScript schema={resourcesSchema} />

      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <p className="eyebrow">Project planning help</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-bold">Clear information for Florida property decisions</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Start with completed work and practical answers for your property. Developers and investors can also find Seacoast&apos;s capital-partner information and sourced overview of H.R. 6644.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Housing and development</p>
          <h2 className="mt-2 max-w-3xl font-heading text-4xl font-bold text-navy">Information for teams evaluating residential projects</h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            These resources help developers, owners, and capital partners understand the current federal housing context and start a project-specific conversation with Seacoast.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {featuredResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="rounded-2xl border border-navy/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="eyebrow">{resource.eyebrow}</p>
                <h3 className="mt-3 font-heading text-2xl font-bold text-navy">{resource.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{resource.description}</p>
                <span className="mt-5 inline-flex font-semibold text-orange">{resource.linkLabel} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">For every property</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Plan the next step with better context</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {planningResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="eyebrow">{resource.eyebrow}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy">{resource.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{resource.description}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-orange">{resource.linkLabel} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        heading="Have a question about your property now?"
        subtext="Tell us what you are seeing or planning. We will help you decide whether an inspection, repair, or estimate makes sense."
        buttonLabel="Ask About Your Property"
      />
    </>
  );
}
