import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Project Financing",
  description:
    "Renovation financing through Hearth for roofing, exterior renovations, storm repairs, additions, containers, and home improvement projects across Southwest Florida.",
};

const benefits = [
  "Loan amounts up to $250,000",
  "Affordable monthly payment options",
  "Funding as fast as 1 to 3 days",
  "No prepayment penalties",
  "No home equity required",
];

const steps = [
  {
    label: "Apply",
    title: "Check options",
    body: "Review personalized loan options without affecting your credit score during pre-qualification.",
  },
  {
    label: "Compare",
    title: "Speak with a consultant",
    body: "Get instant answers online or talk with a loan consultant about the options that fit your project.",
  },
  {
    label: "Verify",
    title: "Provide documents",
    body: "Securely upload basic documents needed for loan verification and final approval.",
  },
  {
    label: "Fund",
    title: "Start the project",
    body: "Most approved loans fund by ACH quickly, so urgent repairs and renovations do not have to wait.",
  },
];

const rateFactors = [
  {
    title: "Creditworthiness",
    body: "Lending partners review credit history and FICO score when deciding what offers and rates are available.",
  },
  {
    title: "Income and employment",
    body: "Income and steady employment help lenders understand whether monthly payments fit the borrower.",
  },
  {
    title: "Debt-to-income ratio",
    body: "Lenders compare monthly debt payments to monthly income. Lower ratios can help improve available terms.",
  },
  {
    title: "Lender criteria",
    body: "Each lending partner has its own underwriting model, specialty, and approval criteria.",
  },
];

const projectTypes = [
  "Roof repair and replacement",
  "Storm damage repair",
  "Exterior renovations",
  "Windows and doors",
  "Siding, gutters, fascia, and soffits",
  "Pool enclosures and lanais",
  "Room additions",
  "Container guest houses, offices, and shelters",
];

const faqs = [
  {
    q: "Does checking financing options affect my credit score?",
    a: "Pre-qualification through Hearth is designed to show options without affecting your credit score. A hard inquiry can occur if you choose to move forward with a full loan application.",
  },
  {
    q: "Why use an unsecured personal loan instead of home equity?",
    a: "Unsecured personal loans can move faster because they do not require home-equity underwriting or appraisal. They can be useful for urgent repairs, storm work, and projects you want to start quickly.",
  },
  {
    q: "Does Seacoast make the loan decision?",
    a: "No. Hearth works with lending partners that review applications and make credit decisions. Seacoast can help you understand how financing fits into the project quote.",
  },
  {
    q: "Can financing be used for commercial or multi-family projects?",
    a: "Ask us during quoting. Many residential home improvement projects are a fit, while commercial or larger multi-family work may require a different financing structure.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">Financing options through Hearth</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Renovation financing</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            Home improvement projects do not always line up neatly with cash on hand. Seacoast Building &amp; Design offers Hearth as a financing option so qualified homeowners can review monthly payment options quickly and move forward with repairs, renovations, and upgrades.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-orange-deep px-6 py-3 font-bold text-white transition hover:bg-copper">Ask About Financing</Link>
            <a href="tel:+19415005431" className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy">(941) 500-5431</a>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Why financing helps</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Start important work without waiting on home equity.</h2>
            <p className="mt-4 text-text-secondary">
              Personal loan options can be a fit for urgent repairs or projects you want to start quickly. Hearth can show personalized payment options within minutes, while home-equity financing often involves longer underwriting and appraisal timelines.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                <span className="text-xl text-success" aria-hidden>✓</span>
                <p className="mt-3 font-heading font-bold text-navy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Four steps from options to funding</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.label} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-deep font-heading text-lg font-bold text-white">{index + 1}</div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-container-steel">{step.label}</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Project fit</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Use financing across Seacoast project types.</h2>
            <p className="mt-4 text-text-secondary">
              Financing can be discussed with most residential project quotes, from storm repairs to larger renovation and expansion work.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectTypes.map((type) => (
                <div key={type} className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm font-semibold text-charcoal shadow-sm">
                  {type}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">What lenders review</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Rates depend on your financial profile.</h2>
            <div className="mt-8 space-y-4">
              {rateFactors.map((factor) => (
                <div key={factor.title} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-navy">{factor.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 mb-8 font-heading text-4xl font-bold text-navy">Financing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="font-heading font-bold text-navy">{item.q}</h3>
                <p className="mt-3 text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow text-orange/80">Important note</p>
            <h2 className="mt-2 font-heading text-3xl font-bold">Hearth is a financing marketplace, not Seacoast&apos;s lender.</h2>
            <p className="mt-4 text-white/75">
              Hearth works with lending partners to show available financing options. Loans are subject to credit approval, and lending partners determine final rates and terms.
            </p>
          </div>
        </div>
      </section>

      <CTASection variant="orange" heading="Want monthly payment options with your quote?" subtext="Tell us what project you are considering and ask about Hearth financing when you request your estimate." buttonLabel="Request a Quote" />
    </>
  );
}
