import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Financing | Seacoast Building & Design",
  description: "Flexible financing options for roofing, exterior renovations, storm repairs, and more. Ask Seacoast Building & Design about payment plans.",
};

const faqs = [
  {
    q: "What types of projects qualify for financing?",
    a: "Most project types qualify — roofing, siding, enclosures, additions, and more. Ask us when you request your quote.",
  },
  {
    q: "Is financing available for commercial projects?",
    a: "Yes. We offer financing options for commercial and multi-family projects as well. Terms vary by project size.",
  },
  {
    q: "Does applying for financing affect my credit score?",
    a: "We work with financing partners that offer pre-qualification with a soft pull. A hard inquiry only occurs when you proceed with a full application.",
  },
  {
    q: "How do I apply?",
    a: "Mention financing when you request your quote. We'll send you the application link and walk you through the options.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">Flexible payment options</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Financing available</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Don&apos;t let budget timing hold up your project. Seacoast Building &amp; Design offers flexible financing options for qualified homeowners and property owners.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="rounded-full bg-teal px-6 py-3 font-bold text-white hover:bg-copper">Ask About Financing</Link>
          </div>
        </div>
      </section>

      <section className="section bg-warm-white">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Low monthly payments</p>
            <p className="mt-3 font-heading text-xl font-bold text-navy">Spread costs over time</p>
            <p className="mt-3 text-text-secondary">Choose a payment schedule that works with your budget and get your project done now.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Quick approval</p>
            <p className="mt-3 font-heading text-xl font-bold text-navy">Fast decisions</p>
            <p className="mt-3 text-text-secondary">Most financing decisions are made quickly so you can move forward without delay.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="eyebrow">Multiple options</p>
            <p className="mt-3 font-heading text-xl font-bold text-navy">Terms that fit your project</p>
            <p className="mt-3 text-text-secondary">We offer a range of financing structures for projects of different sizes and scopes.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy mb-8">Financing FAQ</h2>
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

      <CTASection variant="teal" heading="Ready to get started?" subtext="Request your quote and ask about financing when you submit the form." buttonLabel="Request a Quote" />
    </>
  );
}
