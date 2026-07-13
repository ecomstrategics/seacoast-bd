import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, faqSchema, localBusinessSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("ROAD to Housing Act: Florida BTR Impact"),
  description:
    "A plain-English look at the ROAD to Housing Act, its proposed new-construction and build-to-rent exemptions, and potential impact on Florida housing capital.",
};

const faqs = [
  {
    question: "What is the 21st Century ROAD to Housing Act?",
    answer:
      "The 21st Century ROAD to Housing Act is federal legislation moving through Congress that would restrict large institutional investors from acquiring existing single-family homes, while keeping new construction, build-to-rent, renovate-to-rent, and 55+ senior housing as permitted paths. Its goal is to push large pools of housing capital toward building and renovating supply rather than buying up existing homes.",
  },
  {
    question: "Who does the Act restrict?",
    answer:
      "As drafted, the restrictions target large institutional investors, generally those holding portfolios at or above a defined threshold (reported around 350 or more single-family homes). It is aimed at large-scale buyers of existing single-family housing, not individual homeowners or small operators.",
  },
  {
    question: "What is exempt from the Act?",
    answer:
      "The Act keeps several paths open: newly constructed single-family homes, build-to-rent (BTR) new construction, renovate-to-rent properties where the investor spends above a defined renovation threshold (reported around 15% of value), new or converted 55+ senior housing, and certain manufactured-housing categories. These exemptions are why institutional capital is being redirected toward building and substantial renovation.",
  },
  {
    question: "What are the penalties?",
    answer:
      "Reported penalties for acquiring prohibited existing single-family homes are steep, up to roughly $1 million per home or three times the purchase price, with disposition requirements (reported around a 7-year window) for portfolios that fall under the restriction. These figures are based on the bill as drafted and could change before enactment.",
  },
  {
    question: "Has the Act become law?",
    answer:
      "Not yet. The Act has advanced through the legislative process (with strong reported votes in both chambers) but still requires final reconciliation and enactment, after which a phase-in period (reported around 180 days) would apply. Until it is signed into law, the specific thresholds, penalties, and timelines may change. This page is a positioning resource, not legal advice.",
  },
  {
    question: "What does the Act mean for institutional housing capital?",
    answer:
      "If enacted, capital that wants single-family exposure would largely have to reach it through new construction, build-to-rent, renovate-to-rent, or 55+ housing. The practical effect is that builders in high-growth markets become the access point for that capital. Seacoast Building & Design is positioned as a build-to-rent and new-construction partner in the Southwest Florida growth corridor.",
  },
];

const exemptions = [
  {
    title: "Newly constructed single-family homes",
    body: "Homes built new for sale sit in a permitted category. Capital gets single-family exposure by creating supply, not absorbing it.",
  },
  {
    title: "Build-to-rent (BTR) new construction",
    body: "Purpose-built rental communities of new single-family product remain open to institutional ownership, the clearest path for SFR rental strategies.",
  },
  {
    title: "Renovate-to-rent",
    body: "Properties where the investor spends above a defined renovation threshold (reported around 15% of value) qualify, rewarding substantial reinvestment over passive acquisition.",
  },
  {
    title: "55+ and senior housing",
    body: "New, renovated, or converted 55+ senior housing is its own permitted category, aligned with strong retirement and active-adult demand in markets like Southwest Florida.",
  },
];

export default function RoadToHousingActPage() {
  const lastUpdated = "2026-06-28";
  return (
    <>
      <SchemaScript
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The 21st Century ROAD to Housing Act, Explained",
            description:
              "A plain-English explainer on the 21st Century ROAD to Housing Act: what it bans, the exemptions for new construction, build-to-rent, renovate-to-rent, and 55+ housing, the penalties, and what it means for institutional housing capital.",
            datePublished: lastUpdated,
            dateModified: lastUpdated,
            author: { "@id": "https://seacoastbd.com/#organization" },
            publisher: { "@id": "https://seacoastbd.com/#organization" },
            mainEntityOfPage: "https://seacoastbd.com/road-to-housing-act",
            about: "21st Century ROAD to Housing Act",
          },
          faqSchema(faqs),
          localBusinessSchema(),
        ]}
      />

      {/* Hero */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Capital Partners", href: "/capital-partners" },
              { label: "ROAD to Housing Act" },
            ]}
          />
          <p className="eyebrow text-orange/80">Resource for capital partners</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">
            The 21st Century ROAD to Housing Act, explained.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A plain-English breakdown of the legislation that is redirecting institutional housing capital from buying
            existing homes to building new ones, and what it means for build-to-rent and new construction in Florida.
          </p>
          <p className="mt-4 text-sm text-white/50">Last updated {lastUpdated}. Positioning resource, not legal advice.</p>
        </div>
      </section>

      {/* Summary */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">The short version</h2>
          <p className="mt-4 text-text-secondary">
            The 21st Century ROAD to Housing Act would bar large institutional investors from buying existing single-family
            homes, with steep penalties, while deliberately keeping new construction, build-to-rent, renovate-to-rent, and
            55+ senior housing open. The intended effect is to channel housing capital into creating and improving supply
            rather than competing with families for the existing stock.
          </p>
          <p className="mt-4 text-text-secondary">
            For institutional capital that still wants single-family exposure, the practical takeaway is simple: the legal
            path runs through building and substantial renovation. That makes builders in high-growth markets the access
            point. Seacoast Building &amp; Design is positioned as a{" "}
            <Link href="/capital-partners" className="font-semibold text-orange hover:underline">
              build-to-rent and new-construction partner
            </Link>{" "}
            in the Southwest Florida growth corridor.
          </p>
        </div>
      </section>

      {/* What it restricts */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">What the Act restricts</h2>
          <p className="mt-4 text-text-secondary">
            The restrictions target large institutional investors, generally those holding single-family portfolios at or
            above a defined threshold (reported around 350 or more homes). The Act focuses on the acquisition of existing
            single-family homes, the part of the market where large buyers compete most directly with individual
            homebuyers. Reported penalties are severe, up to roughly $1 million per home or three times the purchase price,
            with disposition requirements (reported around a 7-year window) for affected portfolios.
          </p>
          <p className="mt-4 text-sm text-text-secondary/80">
            Thresholds, penalty amounts, and timelines reflect the bill as drafted and could change before enactment.
          </p>
        </div>
      </section>

      {/* Exemptions */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">What stays open: the exemptions</h2>
          <p className="mt-4 text-text-secondary">
            The exemptions are the whole story for capital. They define the legal paths to single-family exposure once the
            existing-home door closes.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {exemptions.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-heading text-lg font-bold text-navy">{e.title}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it means */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">What it means for housing capital</h2>
          <p className="mt-4 text-text-secondary">
            If the Act is enacted, billions in institutional housing capital that previously bought existing homes would
            need a new path to single-family exposure. New construction, build-to-rent, renovate-to-rent, and 55+ housing
            are that path, and they all require builders. Funds, single-family rental operators, and family offices will be
            looking for construction partners in the highest-growth markets, on institutional timelines and underwriting.
          </p>
          <p className="mt-4 text-text-secondary">
            Southwest Florida is one of the strongest of those markets, combining sustained in-migration with a deep
            retirement and seasonal demographic. Seacoast builds across the three permitted categories, from land sourcing
            through delivery, and documents every project on video for remote capital partners.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-navy">Frequently asked questions</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">{f.question}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy">Get positioned before the capital arrives.</h2>
          <p className="mt-4 text-text-secondary">
            See how Seacoast partners with build-to-rent funds, SFR operators, and senior-housing investors across Florida.
          </p>
          <Link
            href="/capital-partners"
            className="mt-6 inline-block rounded-full bg-orange-deep px-6 py-3 font-bold text-white hover:bg-copper"
          >
            Explore capital partnerships
          </Link>
        </div>
      </section>
    </>
  );
}
