import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, faqSchema, localBusinessSchema } from "@/components/Schema";
import { seoTitle } from "@/lib/seo";

const pageTitle = "Florida Building Code Guide for Property Owners";
const pageDescription =
  "Understand Florida's current building code, local permit review, product approval, and the project details owners and investors should prepare before construction.";
const pageUrl = "https://seacoastbd.com/understanding-floridas-building-codes";
const floridaBuildingCommissionUrl = "https://www.floridabuilding.org/";
const codeResourcesUrl = "https://www.floridabuilding.org/fbc/links_to_code_resources.html";
const productApprovalUrl = "https://www.floridabuilding.org/pr/pr_app_srch.aspx";
const statute55373Url =
  "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.73.html";
const statute55379Url =
  "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.79.html";
const statute55380Url =
  "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.80.html";
const statute553842Url =
  "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.842.html";
const statute5538425Url =
  "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.8425.html";

export const metadata: Metadata = {
  title: seoTitle(pageTitle),
  description: pageDescription,
  alternates: { canonical: "/understanding-floridas-building-codes" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Understanding Florida's Building Codes Before You Start a Project",
    description: pageDescription,
    siteName: "Seacoast Building & Design",
    publishedTime: "2026-07-14",
    modifiedTime: "2026-07-14",
    authors: ["Seacoast Building & Design"],
    tags: [
      "Florida Building Code",
      "Florida building permits",
      "Florida Product Approval",
      "Florida construction planning",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Building Code Guide for Property Owners",
    description: pageDescription,
  },
};

const projectFactors = [
  {
    title: "The local reviewing authority",
    body: "Florida uses a statewide code, but local governments and enforcement districts review plans, issue permits, inspect work, and interpret the code for the projects they regulate.",
  },
  {
    title: "The property and its conditions",
    body: "Location, exposure, flood considerations, wind design, existing construction, occupancy, and the proposed use can change the documents and details a project needs.",
  },
  {
    title: "The exact construction scope",
    body: "A repair, addition, change of use, full rehabilitation, and new building can create very different plan-review and inspection requirements, even at the same address.",
  },
  {
    title: "Required professional design",
    body: "Some work needs signed and sealed plans, calculations, or other documents from a Florida-licensed architect or engineer. The local building official determines what must be submitted.",
  },
];

const permitSteps = [
  {
    step: "1",
    title: "Define the address, use, and scope",
    body: "Start with the property address, current use, intended use, and a clear list of the work being considered. Those facts guide the rest of the review.",
  },
  {
    step: "2",
    title: "Confirm the local submission path",
    body: "Check the city or county application, plan, notice, product-document, and contractor requirements before treating a budget or schedule as final.",
  },
  {
    step: "3",
    title: "Coordinate design and product information",
    body: "Gather drawings, calculations, specifications, Florida Product Approval documents, and existing-condition information that apply to the proposed work.",
  },
  {
    step: "4",
    title: "Submit and answer plan review",
    body: "The local agency reviews the package. If it identifies a code issue or missing information, the project team responds and revises the documents as needed.",
  },
  {
    step: "5",
    title: "Build, inspect, and close out",
    body: "Approved documents guide construction. Required inspections and final closeout still need to be completed with the local authority.",
  },
];

const productApprovalChecks = [
  "Confirm that the approval is current for the code edition being used.",
  "Match the manufacturer, product type, model, and configuration to the item being installed.",
  "Read the approved evaluation and installation documents, not only the FL number.",
  "Check every condition and limitation of use that applies to the project.",
  "Confirm that the proposed installation, attachment, substrate, and site-specific design requirements match the approval.",
  "Include the required documents in the local permit package and follow the local building official's direction.",
];

const projectIntake = [
  "Property address and the city or county that will review the permit",
  "Current property use and the intended use after the work",
  "Plain-language description of the proposed scope",
  "Current photos, plans, surveys, reports, or prior permit information",
  "Product names, model numbers, or FL numbers already being considered",
  "Target timing, construction budget, and any phasing requirements",
];

const faqs = [
  {
    question: "Which Florida Building Code edition is currently in effect?",
    answer:
      "As of this page's July 14, 2026 review, the Florida Building Commission identifies the Florida Building Code, 8th Edition (2023), as the current edition, effective December 31, 2023. Check the Commission's current code resources and supplements before applying the code to a project.",
  },
  {
    question: "Does Florida Product Approval guarantee that a product can be used on my project?",
    answer:
      "No. Statewide product approval documents how a product was evaluated and the conditions under which it may be used. The selected product, configuration, installation, supporting construction, and project-specific design still need to fit those conditions and satisfy local permit review. Product approval is not project approval.",
  },
  {
    question: "Does every repair require a permit?",
    answer:
      "Florida law generally requires a permit for construction, alteration, repair, or demolition, but exemptions and local requirements can depend on the work. Ask the appropriate city or county agency about the exact scope before work begins.",
  },
  {
    question: "What happens if the Florida Building Code changes after I apply for a permit?",
    answer:
      "Florida Statute 553.73 states that the code edition in effect on the permit-application date governs the permitted work for the life of the permit and authorized extensions. Confirm how that rule applies to the specific permit with the local building department.",
  },
  {
    question: "Can Seacoast determine exactly which code provisions apply to my project?",
    answer:
      "Seacoast can help define the construction scope, identify practical documentation needs, and coordinate with the owner, design professionals, and local authority. A licensed architect or engineer provides project-specific professional design where required, and the local building official makes permitting and code-approval decisions.",
  },
];

const officialSources = [
  {
    label: "Florida Building Commission",
    detail: "Current edition notice, Commission information, and state building-code resources.",
    href: floridaBuildingCommissionUrl,
  },
  {
    label: "Florida Building Code resources",
    detail: "Official code-edition links, supplements, errata, and related materials.",
    href: codeResourcesUrl,
  },
  {
    label: "Florida Product Approval search",
    detail: "Search the state's product-approval records by FL number, manufacturer, category, and other criteria.",
    href: productApprovalUrl,
  },
  {
    label: "Florida Statute 553.73",
    detail: "Florida Building Code adoption, local enforcement, amendments, and the code edition tied to a permit application.",
    href: statute55373Url,
  },
  {
    label: "Florida Statutes 553.79 and 553.80",
    detail: "Permits, applications, plan review, inspections, and local enforcement responsibilities.",
    href: statute55379Url,
    secondaryHref: statute55380Url,
    secondaryLabel: "Read section 553.80",
  },
  {
    label: "Florida Statutes 553.842 and 553.8425",
    detail: "Statewide and local product-evaluation and approval requirements.",
    href: statute553842Url,
    secondaryHref: statute5538425Url,
    secondaryLabel: "Read section 553.8425",
  },
];

export default function FloridaBuildingCodeGuidePage() {
  return (
    <>
      <SchemaScript
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            headline: "Understanding Florida's Building Codes Before You Start a Project",
            description: pageDescription,
            datePublished: "2026-07-14",
            dateModified: "2026-07-14",
            author: { "@id": "https://seacoastbd.com/#organization" },
            publisher: { "@id": "https://seacoastbd.com/#organization" },
            mainEntityOfPage: pageUrl,
            about: [
              "Florida Building Code",
              "Florida building permits",
              "Florida Product Approval",
              "Construction planning",
            ],
            keywords:
              "Florida Building Code, Florida building permits, Florida Product Approval, local plan review, Florida construction planning",
            citation: [
              floridaBuildingCommissionUrl,
              codeResourcesUrl,
              productApprovalUrl,
              statute55373Url,
              statute55379Url,
              statute55380Url,
              statute553842Url,
              statute5538425Url,
            ],
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
              { label: "Florida Building Code Guide" },
            ]}
          />
          <p className="eyebrow text-orange/80">Florida project planning</p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-5xl">
            Understanding Florida&apos;s building codes before you start a project
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
            Florida has a statewide building code, but a real project still has to fit its address, scope, design, products, and local permit review. This guide helps property owners and investors organize the right questions before they commit to a construction plan.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-orange/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            8th Edition (2023) · Effective December 31, 2023
          </div>
          <p className="mt-4 text-sm text-white/60">
            Last reviewed July 14, 2026. General construction information only; not legal, architectural, engineering, or permitting advice.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper"
            >
              Discuss Your Project
            </Link>
            <a
              href={codeResourcesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy"
            >
              View Official Code Resources
            </a>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-5xl">
          <p className="eyebrow">The statewide starting point</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            What code is in effect now?
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
              <p className="leading-7 text-text-secondary">
                The Florida Building Commission currently identifies the Florida Building Code, 8th Edition (2023), as the edition in effect. Its effective date was December 31, 2023. Florida Statute 553.73 also says that the code edition in effect when a permit application is filed governs that permitted work for the life of the permit and its authorized extensions.
              </p>
              <p className="mt-4 leading-7 text-text-secondary">
                Code resources can change through a later edition, supplement, errata, or official interpretation. Always check the Commission&apos;s current resources and the local building department before using this page to make a project decision.
              </p>
            </div>
            <div className="rounded-2xl border border-orange/30 bg-orange/10 p-7">
              <p className="eyebrow text-orange-deep">A useful distinction</p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-navy">
                Statewide code does not mean identical project approval.
              </h3>
              <p className="mt-3 leading-7 text-text-secondary">
                The code sets the statewide baseline. The local authority reviews the actual project documents, applies authorized local requirements, conducts inspections, and approves the permitted work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <p className="eyebrow">Why project details matter</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            The same idea can need a different permit path at a different property.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectFactors.map((factor) => (
              <div key={factor.title} className="rounded-2xl bg-white p-7 shadow-soft">
                <h3 className="font-heading text-xl font-bold text-navy">{factor.title}</h3>
                <p className="mt-3 leading-7 text-text-secondary">{factor.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 rounded-2xl border border-navy/10 bg-white p-6 text-sm leading-6 text-text-secondary">
            A code minimum is not a complete project design. Where professional design is required, a Florida-licensed architect or engineer must evaluate the actual property and scope. The local building official decides whether the permit documents and completed work are acceptable.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <p className="eyebrow">A practical permit path</p>
          <h2 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-navy">
            Organize the review before the work reaches the field.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            The exact process comes from the local agency, but most projects benefit from the same early coordination.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {permitSteps.map((item) => (
              <li key={item.step} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="font-heading text-3xl font-bold text-orange">{item.step}</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Florida Product Approval</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-navy">
                An FL number is a starting point, not the whole answer.
              </h2>
              <p className="mt-5 leading-7 text-text-secondary">
                Florida&apos;s statewide system lets owners, designers, contractors, and building officials find products that have been evaluated for use under the Florida Building Code. The approval record includes the documents and limitations that matter for selection and installation.
              </p>
              <p className="mt-4 font-semibold leading-7 text-navy">
                Product approval is not project approval.
              </p>
              <a
                href={productApprovalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-orange-deep px-6 py-3 font-bold text-white hover:bg-copper"
              >
                Search Florida Product Approvals
              </a>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-7 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-navy">What to verify before specifying a product</h3>
              <ul className="mt-6 space-y-4">
                {productApprovalChecks.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-text-secondary">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <p className="eyebrow">Bring the project into focus</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                Information that helps Seacoast start a useful review
              </h2>
              <ul className="mt-6 space-y-4">
                {projectIntake.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-text-secondary">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-orange/30 bg-orange/10 p-8">
              <p className="eyebrow text-orange-deep">Seacoast&apos;s role</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
                Coordinate the construction conversation early.
              </h2>
              <p className="mt-4 leading-7 text-text-secondary">
                Seacoast can review the proposed construction scope, identify practical questions, help collect relevant product and existing-condition information, and coordinate with the owner&apos;s licensed design professionals and local permitting authority.
              </p>
              <p className="mt-4 leading-7 text-text-secondary">
                Seacoast does not replace a required architect, engineer, attorney, or building official. Bringing the team together early can still prevent avoidable redesign, product changes, and schedule surprises.
              </p>
              <Link href="/contact" className="mt-6 inline-flex font-bold text-orange-deep hover:underline">
                Tell us about the property →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-4xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Florida building-code FAQ</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-5xl">
          <p className="eyebrow">Official sources</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy">
            Check the current state and local requirements.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
            This guide is based on the official Florida Building Commission and Florida Legislature sources below. Use the current official materials and the appropriate local building department for a real project.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {officialSources.map((source) => (
              <div key={source.label} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg font-bold text-navy hover:text-orange"
                >
                  {source.label} ↗
                </a>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{source.detail}</p>
                {source.secondaryHref ? (
                  <a
                    href={source.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-orange hover:underline"
                  >
                    {source.secondaryLabel} ↗
                  </a>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-7 text-sm leading-6 text-text-secondary">
            Information can change. Local amendments, policies, application forms, required documents, and interpretations may differ by jurisdiction and project. Nothing on this page is a substitute for an official determination or professional advice for a specific property.
          </p>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Planning a Florida construction or rehabilitation project?"
        subtext="Share the address, intended use, proposed scope, and any plans or product information you already have. Seacoast can help organize the construction conversation and next steps."
        buttonLabel="Discuss Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
