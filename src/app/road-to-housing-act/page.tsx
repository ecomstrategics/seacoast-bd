import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, faqSchema, localBusinessSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: seoTitle("ROAD to Housing Act: What Section 1001 Says"),
  description:
    "A sourced overview of Section 1001 of the 21st Century ROAD to Housing Act, including covered investors, purchase restrictions, exceptions, penalties, and effective timing.",
};

const finalActUrl = "https://www.govinfo.gov/content/pkg/BILLS-119hr6644enr/html/BILLS-119hr6644enr.htm";
const enactmentSourceUrl = "https://www.crapo.senate.gov/media/newsreleases/crapo-backed-housing-legislation-becomes-law";

const faqs = [
  {
    question: "What is the 21st Century ROAD to Housing Act?",
    answer:
      "The 21st Century ROAD to Housing Act became law in July 2026. It is a broad federal housing package. Section 1001 addresses certain single-family-home purchases by large institutional investors.",
  },
  {
    question: "Who does the Act restrict?",
    answer:
      "Section 1001 applies to defined for-profit entities with direct or indirect investment control of at least 350 single-family homes after enactment, subject to the statute's definitions and exclusions.",
  },
  {
    question: "What is exempt from the Act?",
    answer:
      "The statute lists several exceptions, including qualifying newly constructed homes, build-to-rent programs, certain renovate-to-rent work, qualifying homeownership programs, and qualifying 55+ communities. Review the enacted text and legal counsel for a specific transaction.",
  },
  {
    question: "What are the penalties?",
    answer:
      "A violation may carry a civil penalty of up to $1 million per violation or three times the purchase price, whichever is greater. The purchase restriction and penalty provisions take effect 180 days after enactment.",
  },
  {
    question: "Has the Act become law?",
    answer:
      "Yes. The Act became law in July 2026. Some Section 1001 requirements take effect 180 days after enactment, and implementation guidance may follow.",
  },
  {
    question: "What does the Act mean for institutional housing capital?",
    answer:
      "Covered investors may need to reconsider some acquisition strategies. The impact depends on portfolio size, ownership control, transaction structure, the applicable exception, and implementation guidance.",
  },
];

const exemptions = [
  {
    title: "Newly constructed single-family homes",
    body: "The statute includes an exception for certain newly constructed, renovated, or rental-conversion homes intended for sale rather than rental pending sale.",
  },
  {
    title: "Build-to-rent (BTR) new construction",
    body: "The statute includes qualifying programs in which a covered investor purchases, constructs, or constructs and retains newly built single-family homes as rental properties.",
  },
  {
    title: "Renovate-to-rent",
    body: "The exception requires substantial rehabilitation of homes that do not meet structural or core-system elements of local building codes and improvements totaling at least 15% of the purchase price.",
  },
  {
    title: "55+ and senior housing",
    body: "The statute includes certain newly constructed, renovated, or converted homes operated as part of a 55+ community that also satisfies HUD visitability standards.",
  },
];

export default function RoadToHousingActPage() {
  const lastUpdated = "2026-07-12";
  const datePublished = "2026-06-28";
  return (
    <>
      <SchemaScript
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The 21st Century ROAD to Housing Act: What Section 1001 Says",
            description:
              "A sourced overview of Section 1001 of the 21st Century ROAD to Housing Act, including covered investors, purchase restrictions, exceptions, penalties, and effective timing.",
            datePublished,
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
          <p className="eyebrow text-orange/80">Federal housing-policy update</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">
            The 21st Century ROAD to Housing Act became law
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Signed into law in July 2026, the Act includes a new federal framework for certain single-family-home purchases by large institutional investors. Section 1001 defines covered investors, exceptions, penalties, and a 180-day period before the purchase restrictions take effect.
          </p>
          <p className="mt-4 text-sm text-white/50">Last updated July 12, 2026. General information only; not legal or investment advice.</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={finalActUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">Read the final enrolled text</a>
            <a href={enactmentSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">Read the official enactment announcement</a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">The short version</h2>
          <p className="mt-4 text-text-secondary">
            Section 1001 generally prohibits future single-family-home purchases by covered institutional investors with investment control of at least 350 homes. Homes acquired through defined exceptions are excluded from that threshold after enactment. The law does not require covered investors to sell homes acquired before enactment.
          </p>
          <p className="mt-4 text-text-secondary">
            The purchase restriction and civil-penalty provisions take effect 180 days after enactment and are scheduled to expire 15 years after that effective date. The statute includes multiple exceptions, and their application depends on the facts of a transaction.
          </p>
        </div>
      </section>

      {/* What it restricts */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">What the Act restricts</h2>
          <p className="mt-4 text-text-secondary">
            The law defines a large institutional investor as a covered for-profit entity that, after enactment, has direct or indirect investment control of at least 350 single-family homes, excluding qualifying excepted purchases made after enactment. Subject to the listed exceptions, Section 1001 prohibits those investors from purchasing additional single-family homes.
          </p>
          <p className="mt-4 text-text-secondary">
            A violation may carry a civil penalty of up to $1 million per violation or three times the purchase price, whichever is greater. The final law does not require divestiture of homes purchased before enactment.
          </p>
          <p className="mt-4 text-sm text-text-secondary/80">
            Read Section 1001 in the <a href={finalActUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">final enrolled text</a>. Consult legal counsel about a specific investor or transaction.
          </p>
        </div>
      </section>

      {/* Exemptions */}
      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">What stays open: the exemptions</h2>
          <p className="mt-4 text-text-secondary">
            Section 1001 contains several exceptions. The examples below are highlights, not a complete legal analysis.
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
          <h2 className="font-heading text-3xl font-bold text-navy">What the law may change for housing investors</h2>
          <p className="mt-4 text-text-secondary">
            The law may affect how covered investors evaluate existing-home acquisitions, new construction, build-to-rent programs, substantial rehabilitation, and qualifying 55+ communities. The practical effect will depend on each investor&apos;s portfolio, transaction structure, effective timing, and future implementation guidance.
          </p>
          <p className="mt-4 text-text-secondary">
            For developers considering new residential construction in Florida, Seacoast can discuss construction scope and project fit. Legal and investment conclusions should come from the partner&apos;s own advisers.
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
          <h2 className="font-heading text-3xl font-bold text-navy">Discuss a Florida residential project</h2>
          <p className="mt-4 text-text-secondary">
            Share the location, product type, unit count, schedule, and construction questions your team needs to evaluate.
          </p>
          <Link
            href="/capital-partners"
            className="mt-6 inline-block rounded-full bg-orange-deep px-6 py-3 font-bold text-white hover:bg-copper"
          >
            Discuss a Development Opportunity
          </Link>
        </div>
      </section>
    </>
  );
}
