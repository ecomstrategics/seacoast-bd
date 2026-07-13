import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, articles, and resources about roofing, storm prep, exterior renovations, and building codes for Southwest Florida property owners.",
  robots: { index: false, follow: true },
};

const articles = [
  { title: "How to Evaluate Storm Damage After a Hurricane", category: "Storm Prep", description: "What to look for on your roof, soffits, gutters, and enclosures after a major storm event in Southwest Florida." },
  { title: "Florida Roofing Code: What Homeowners Need to Know", category: "Building Codes", description: "An overview of Florida Building Code requirements for residential roof replacements and the permit process." },
  { title: "Metal vs. Tile vs. Shingle: Choosing the Right Roof for SW Florida", category: "Roofing Guide", description: "The tradeoffs between common roofing systems in Florida: durability, cost, insurance impact, and aesthetics." },
  { title: "What to Expect During a Roof Replacement", category: "Project Guide", description: "A timeline of a typical residential roof replacement from inspection to final walkthrough." },
  { title: "How Seamless Gutters Protect Your Home", category: "Gutters", description: "Why properly sized, correctly pitched gutters matter more in Florida than most markets." },
  { title: "Pool Enclosure Repair After Storm Damage", category: "Enclosures", description: "What options exist after a screen enclosure is damaged by wind, falling debris, or a hurricane." },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <p className="eyebrow">Knowledge base</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Resources for Florida property owners</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Practical guides on roofing, storm prep, building codes, and exterior renovations, written for Southwest Florida homeowners and property managers.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
              <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">{article.category}</span>
              <h2 className="mt-4 font-heading text-xl font-bold text-navy leading-snug">{article.title}</h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{article.description}</p>
              <p className="mt-5 text-sm font-semibold text-orange">Coming soon →</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection variant="navy" heading="Have a specific question about your property?" subtext="Request a no-pressure quote and ask us directly. We've seen most scenarios across six Southwest Florida counties." buttonLabel="Contact Us" />
    </>
  );
}
