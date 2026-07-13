import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SchemaScript, faqSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about Seacoast services, licenses, estimates, project documentation, service areas, storm preparation, financing, and container builds.",
};

const faqs = [
  {
    question: "What services does Seacoast Building & Design provide?",
    answer: "Seacoast provides roofing, siding, gutters, windows and doors, exterior renovations, storm preparation and repair, pool enclosures, room additions, metal buildings, solar services, and custom container builds for residential, commercial, and multi-family properties.",
  },
  {
    question: "Where does Seacoast work?",
    answer: "Seacoast serves Southwest Florida, including Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier counties. City-specific service pages cover Fort Myers, Sarasota, Naples, Cape Coral, Bonita Springs, Bradenton, Venice, and Punta Gorda.",
  },
  {
    question: "Is Seacoast licensed and insured?",
    answer: "Yes. Seacoast lists Florida Certified General Contractor license CGC1509237 and Florida Certified Roofing Contractor license CCC1332648 and carries insurance for its contracting work.",
  },
  {
    question: "How do I request an estimate?",
    answer: "Use the online quote form or call (941) 500-5431. After you share the property, service, and project details, the team follows up within one business day to discuss the work and arrange an on-site assessment.",
  },
  {
    question: "Does Seacoast handle commercial and multi-family projects?",
    answer: "Yes. Seacoast works on residential, commercial, multi-family, HOA, and property-management projects. The project portfolio includes documented commercial roofing and coordinated work across occupied multi-building communities.",
  },
  {
    question: "Can I see completed Seacoast projects?",
    answer: "Yes. The Our Work portfolio includes videos and project summaries for completed roofing, siding, gutter, enclosure, exterior-structure, and related work. Filters help narrow the portfolio by service and roofing type.",
  },
  {
    question: "What storm services are available?",
    answer: "Seacoast offers pre-season inspections, storm-readiness memberships, boarding and shuttering, emergency stabilization, damage documentation, and repair. Availability and response times depend on conditions, access, and when the request is made.",
  },
  {
    question: "Does a shipping container project require a permit?",
    answer: "Requirements depend on the county, municipality, parcel, and intended use. Habitable structures generally require permits, while storage rules vary. Seacoast advises clients to confirm zoning and permitting before purchasing or placing a container.",
  },
  {
    question: "Does Seacoast offer financing?",
    answer: "Financing options are available for eligible projects. Visit the financing page or ask the team during your quote conversation to review current programs, estimated payments, and the application process.",
  },
];

export default function FAQPage() {
  return (
    <>
      <SchemaScript schema={faqSchema(faqs)} />
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <p className="eyebrow">Frequently asked questions</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold">Answers about working with Seacoast</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Start with the most common questions about services, coverage, estimates, storm work, and container projects. For property-specific guidance, contact the team directly.</p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-4xl space-y-5">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
              <h2 className="font-heading text-2xl font-bold text-navy">{item.question}</h2>
              <p className="mt-3 leading-7 text-text-secondary">{item.answer}</p>
            </article>
          ))}
          <p className="pt-4 text-text-secondary">Need details for a specific service? <Link href="/services" className="font-semibold text-orange-deep underline">Browse all services</Link> or <Link href="/contact" className="font-semibold text-orange-deep underline">request a quote</Link>.</p>
        </div>
      </section>

      <CTASection variant="navy" heading="Still have a question?" subtext="Tell us about your property and the Seacoast team will help you identify the right next step." buttonLabel="Contact Seacoast" />
    </>
  );
}
