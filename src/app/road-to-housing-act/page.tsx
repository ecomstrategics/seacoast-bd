import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, faqSchema, localBusinessSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

const pageTitle = "21st Century ROAD to Housing Act: Florida Guide";
const pageDescription =
  "What H.R. 6644 means for build-to-rent, renovate-to-rent, 55+ housing, adaptive reuse, affordable housing, and residential construction in Southwest Florida.";
const pageUrl = "https://seacoastbd.com/road-to-housing-act";
const finalActUrl =
  "https://www.govinfo.gov/content/pkg/BILLS-119hr6644enr/html/BILLS-119hr6644enr.htm";
const enactmentSourceUrl =
  "https://www.banking.senate.gov/newsroom/minority/warren-statement-on-bipartisan-housing-bill-becoming-law-without-trump-signature";
const sectionBySectionUrl =
  "https://www.banking.senate.gov/imo/media/doc/section-by-section_for_the_21st_century_road_to_housing_act.pdf";
const leeCountyHousingUrl = "https://www.leegov.com/hurricane/storm/housing";

export const metadata: Metadata = {
  title: seoTitle(pageTitle),
  description: pageDescription,
  alternates: { canonical: "/road-to-housing-act" },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The 21st Century ROAD to Housing Act: A Florida Investor and Developer Guide",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
    publishedTime: "2026-06-28",
    modifiedTime: "2026-07-14",
    authors: ["Seacoast Building & Design"],
    tags: [
      "H.R. 6644",
      "21st Century ROAD to Housing Act",
      "Florida housing investors",
      "build-to-rent",
      "renovate-to-rent",
      "affordable housing",
      "adaptive reuse",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 21st Century ROAD to Housing Act: Florida Guide",
    description: pageDescription,
  },
};

const faqs = [
  {
    question: "What is the 21st Century ROAD to Housing Act?",
    answer:
      "H.R. 6644, the 21st Century ROAD to Housing Act, is a broad federal housing-supply and program-reform law. It became law on July 11, 2026, without the President's signature. Section 1001 addresses certain single-family-home purchases by large institutional investors, while other sections address affordable housing, rehabilitation, adaptive reuse, manufactured and modular housing, financing, and disaster recovery.",
  },
  {
    question: "Who does Section 1001 restrict?",
    answer:
      "Section 1001 applies to a defined covered for-profit entity with direct or indirect investment control of at least 350 qualifying one- or two-unit single-family homes, subject to the statute's definitions and exclusions. Manufactured homes are excluded from the single-family-home definition.",
  },
  {
    question: "When do the Section 1001 purchase restrictions begin?",
    answer:
      "The purchase restriction and civil-penalty provisions take effect on January 7, 2027, which is 180 days after the Act became law. The statute schedules those provisions to expire 15 years after that effective date.",
  },
  {
    question: "Does the ROAD to Housing Act ban build-to-rent?",
    answer:
      "No. Section 1001 expressly lists a qualifying build-to-rent pathway, but the statutory conditions matter. An investor should have legal counsel evaluate its ownership structure, project facts, and the final enacted text before relying on an exception.",
  },
  {
    question: "What qualifies as renovate-to-rent under Section 1001?",
    answer:
      "The statutory pathway involves a home that does not meet structural or core-system elements of applicable local building codes and improvements totaling at least 15 percent of the purchase price. That is only a summary; counsel should evaluate a specific property and scope.",
  },
  {
    question: "Does the Act provide grants directly to investors or contractors?",
    answer:
      "It does not create a general, automatic pool of unrestricted money for private investors or contractors. Several programs depend on future appropriations, agency rules, competitive awards, or participation through eligible state, local, Tribal, or nonprofit administrators.",
  },
  {
    question: "Does the Act apply to projects in Florida?",
    answer:
      "It is a federal law, so its federal provisions apply nationwide. Whether a particular Florida project can participate in a housing program depends on the section, funding availability, agency rules, local administration, and project-specific eligibility.",
  },
  {
    question: "What can Seacoast evaluate?",
    answer:
      "Seacoast can review construction scope, plans, constructability, schedule, site conditions, documentation needs, and budget assumptions. Current priorities are build-to-rent, major rehabilitation, and select additions. Seacoast does not determine whether an investor, transaction, or project qualifies for a statutory exception, grant, tax treatment, or financing program.",
  },
];

const section1001Paths = [
  {
    title: "New homes intended for sale",
    body: "The statute includes an excepted-purchase pathway for certain newly constructed, renovated, or rental-conversion homes that are for sale by the investor and are not rented as residences pending sale.",
  },
  {
    title: "Build-to-rent communities",
    body: "A qualifying program may purchase or construct newly built single-family homes and retain them as rental properties. The final statutory conditions and ownership facts still matter.",
  },
  {
    title: "Substantial renovate-to-rent work",
    body: "The pathway requires both a qualifying structural or core-system code deficiency and improvements totaling at least 15% of the home's purchase price.",
  },
  {
    title: "Qualifying 55+ communities",
    body: "Certain newly constructed, renovated, or converted homes may qualify when the community satisfies the statute's operating requirements and HUD visitability standards.",
  },
];

const opportunityAreas = [
  {
    section: "Section 1001",
    title: "New housing supply and rental communities",
    body: "Build-to-rent, newly constructed for-sale housing, substantial renovate-to-rent work, and qualifying 55+ communities are the clearest investor-facing construction pathways.",
    status: "Purchase restrictions begin January 7, 2027",
  },
  {
    section: "Sections 201 and 204",
    title: "Opportunity Zones and affordable construction",
    body: "The Act allows added weight for certain HUD housing grants benefiting qualified Opportunity Zones and makes affordable-housing construction an eligible CDBG activity within statutory limits.",
    status: "Program, funding, and administrator rules apply",
  },
  {
    section: "Section 202",
    title: "Whole-home repair",
    body: "A pilot can support habitability, safety, resilience, weatherization, efficiency, common-area, and structural work for eligible homeowners and qualifying small landlords.",
    status: "Subject to appropriations and administration through eligible implementing organizations",
  },
  {
    section: "Section 210",
    title: "Adaptive reuse through RESIDE",
    body: "The authorized pilot focuses on converting qualifying vacant and abandoned commercial or industrial buildings into attainable housing, including rehabilitation and site work.",
    status: "Grants to HOME participating jurisdictions; future appropriations required",
  },
  {
    section: "Sections 301–304",
    title: "Manufactured and modular housing",
    body: "The law includes production, financing, code, and preservation provisions that may expand housing-delivery options as agencies implement them.",
    status: "Implementation varies by provision",
  },
  {
    section: "Sections 211 and 501",
    title: "Multifamily financing and HOME reform",
    body: "Higher statutory FHA multifamily loan limits and HOME program reforms may support more housing activity, but neither guarantees financing or approval for a project.",
    status: "Underwriting and program requirements still apply",
  },
  {
    section: "Section 504",
    title: "Disaster recovery and resilience",
    body: "A new CDBG-DR framework is intended to make future housing and infrastructure recovery more consistent, including restoration and mitigation after catastrophic major disasters.",
    status: "HUD rulemaking and future appropriations required",
  },
];

const projectChecklist = [
  "Identify the product type: for-sale, build-to-rent, substantial rehabilitation, 55+, affordable or multifamily, adaptive reuse, or modular.",
  "Confirm who can receive or administer the relevant benefit; many programs run through public or nonprofit partners rather than directly to an investor.",
  "Separate enacted law from future funding: verify appropriations, agency rules, notices of funding opportunity, and local program requirements.",
  "Have legal, tax, financing, and grant advisers confirm eligibility before the construction team relies on a statutory pathway.",
  "Give Seacoast the property, plans, estimated construction value, project stage, target schedule, unit count when known, and documentation requirements for a construction-fit review.",
];

export default function RoadToHousingActPage() {
  const lastUpdated = "2026-07-14";
  const datePublished = "2026-06-28";

  return (
    <>
      <SchemaScript
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            headline: "The 21st Century ROAD to Housing Act: A Florida Investor and Developer Guide",
            description: pageDescription,
            datePublished,
            dateModified: lastUpdated,
            author: { "@id": "https://seacoastbd.com/#organization" },
            publisher: { "@id": "https://seacoastbd.com/#organization" },
            image: `${pageUrl}/opengraph-image`,
            mainEntityOfPage: pageUrl,
            identifier: "H.R. 6644",
            about: [
              "21st Century ROAD to Housing Act",
              "H.R. 6644",
              "Florida housing development",
              "Build-to-rent construction",
              "Affordable housing construction",
            ],
            keywords:
              "21st Century ROAD to Housing Act, H.R. 6644, Florida housing investors, build-to-rent, renovate-to-rent, affordable housing, adaptive reuse",
            citation: [finalActUrl, enactmentSourceUrl, sectionBySectionUrl],
            isBasedOn: {
              "@type": "Legislation",
              name: "21st Century ROAD to Housing Act",
              legislationIdentifier: "H.R. 6644",
              url: finalActUrl,
              legislationDate: "2026-07-11",
            },
          },
          faqSchema(faqs),
          localBusinessSchema(),
        ]}
      />

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "ROAD to Housing Act" },
            ]}
          />
          <p className="eyebrow text-orange/80">H.R. 6644 · Federal housing-policy update</p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl">
            The 21st Century ROAD to Housing Act: a Florida investor and developer guide
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
            H.R. 6644 became law on July 11, 2026, without the President&apos;s signature. Here is what housing investors and developers should know about Section 1001, build-to-rent, substantial rehabilitation, affordable housing, adaptive reuse, and the implementation work still ahead.
          </p>
          <p className="mt-4 text-sm text-white/55">
            Last updated July 13, 2026. General construction information only; not legal, tax, grant, financing, or investment advice.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={finalActUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">
              Read the final enrolled text
            </a>
            <a href={enactmentSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">
              Confirm the enactment status
            </a>
            <a href={sectionBySectionUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">
              Read the official section guide
            </a>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-5xl">
          <p className="eyebrow">Status as of July 14, 2026</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">The facts to start with</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Legislation", value: "H.R. 6644" },
              { label: "Became law", value: "July 11, 2026" },
              { label: "Section 1001 threshold", value: "350 qualifying homes" },
              { label: "Purchase rules begin", value: "January 7, 2027" },
            ].map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">{fact.label}</p>
                <p className="mt-3 font-heading text-xl font-bold text-navy">{fact.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-text-secondary">
            H.R. 6644 became law through the constitutional ten-day process without a presidential signature. At the time of this July 13 update, GovInfo identifies the enacted measure as H.R. 6644; this page will use that identifier until an official Public Law number is published.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-5xl">
          <p className="eyebrow">Section 1001</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What changes for large institutional investors</h2>
          <p className="mt-4 text-text-secondary">
            Section 1001 generally restricts future purchases of qualifying one- or two-unit single-family homes by a defined covered for-profit entity with direct or indirect investment control of at least 350 such homes. Manufactured homes are excluded from that definition, and qualifying excepted purchases made after enactment are treated separately under the statute.
          </p>
          <p className="mt-4 text-text-secondary">
            The law does not force a covered investor to sell homes acquired before enactment. The purchase restriction and civil-penalty provisions begin January 7, 2027, and are scheduled to expire 15 years later. A violation may carry a civil penalty of up to $1 million per violation or three times the purchase price, whichever is greater.
          </p>
          <p className="mt-4 text-sm leading-6 text-text-secondary/80">
            These are statutory highlights, not a transaction-level conclusion. Read{" "}
            <a href={finalActUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">
              Section 1001 in the final enrolled text
            </a>{" "}
            and ask legal counsel to evaluate the investor, ownership structure, property, and proposed transaction.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-5xl">
          <p className="eyebrow">Construction paths the law keeps open</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Where project teams may still build and improve housing</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Section 1001 contains several excepted-purchase pathways. Each has conditions, so these examples are a starting point for project diligence—not a promise of eligibility.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {section1001Paths.map((path) => (
              <div key={path.title} className="rounded-2xl bg-white p-6 shadow-soft">
                <h3 className="font-heading text-lg font-bold text-navy">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{path.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">Beyond Section 1001</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Housing and construction opportunities to watch</h2>
          <p className="mt-4 max-w-4xl text-text-secondary">
            H.R. 6644 is much broader than the institutional-purchase provision. These sections may create or strengthen project opportunities, but their funding, recipients, timelines, and implementation requirements are not all the same.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {opportunityAreas.map((area) => (
              <article key={area.section} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">{area.section}</p>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{area.body}</p>
                <p className="mt-4 border-t border-navy/10 pt-4 text-xs font-semibold text-navy">{area.status}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid max-w-5xl gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">An important distinction</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy">What the Act does not do</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
              <li className="flex gap-3"><span className="font-bold text-orange" aria-hidden>—</span> It does not create a general investor tax credit or rebate.</li>
              <li className="flex gap-3"><span className="font-bold text-orange" aria-hidden>—</span> It does not make every grant or pilot immediately funded and open for applications.</li>
              <li className="flex gap-3"><span className="font-bold text-orange" aria-hidden>—</span> It does not guarantee that a property, investor, transaction, or construction scope qualifies.</li>
              <li className="flex gap-3"><span className="font-bold text-orange" aria-hidden>—</span> It does not replace local zoning, permitting, procurement, accessibility, environmental, labor, or program requirements.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <p className="font-heading text-xl font-bold text-navy">Seacoast&apos;s role</p>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              Seacoast can help a project team evaluate plans, scope, constructability, site conditions, schedule, budget assumptions, and construction documentation. The investor&apos;s counsel, lender, tax adviser, grant administrator, and applicable government agency remain responsible for legal and program conclusions.
            </p>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              Seacoast is currently prioritizing build-to-rent and major rehabilitation, with select additions where applicable. Projects around $20,000 or more are generally the best fit, and contracts of $100,000 or more can be evaluated throughout Florida. Investors should involve Seacoast at least two months before the desired start when possible.
            </p>
            <Link
              href="/capital-partners?source=road-act#inquire"
              className="mt-6 inline-flex rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper"
            >
              Request a Project Review
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-5xl">
          <p className="eyebrow">A practical Florida checklist</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">Before underwriting a ROAD Act-related project</h2>
          <ol className="mt-8 space-y-4">
            {projectChecklist.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-deep font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 text-text-secondary">{item}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-2xl border border-orange/20 bg-white p-6">
            <h3 className="font-heading text-lg font-bold text-navy">Why local implementation matters in Southwest Florida</h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Lee County already administers federal disaster-recovery housing activity following Hurricane Ian. That existing funding predates H.R. 6644 and should not be described as ROAD Act money, but it illustrates why investors should watch local housing notices, procurement channels, and administrator requirements alongside federal implementation.
            </p>
            <a href={leeCountyHousingUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-semibold text-orange hover:underline">
              Review Lee County&apos;s housing-recovery information →
            </a>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-navy">Frequently asked questions</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-navy">Official sources</h2>
          <p className="mt-4 text-text-secondary">
            This page is based on the enacted bill and official congressional materials. Program availability and agency guidance can change after publication.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={finalActUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">
                GovInfo: final enrolled text of H.R. 6644
              </a>
            </li>
            <li>
              <a href={enactmentSourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">
                U.S. Senate Banking Committee: enactment without presidential signature
              </a>
            </li>
            <li>
              <a href={sectionBySectionUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange hover:underline">
                U.S. Senate Banking Committee: final section-by-section guide
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy">Bring Seacoast the project—not a legal conclusion</h2>
          <p className="mt-4 text-text-secondary">
            Share the location, product type, estimated construction value, stage, plans, target schedule, unit count when known, and construction questions your team needs to evaluate.
          </p>
          <Link
            href="/capital-partners?source=road-act#inquire"
            className="mt-6 inline-block rounded-full bg-orange-deep px-6 py-3 font-bold text-white hover:bg-copper"
          >
            Request a Project Review
          </Link>
        </div>
      </section>
    </>
  );
}
