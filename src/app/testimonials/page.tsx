import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Testimonials | Seacoast Building & Design",
  description: "See what homeowners and property owners say about Seacoast Building & Design, Southwest Florida's video-documented contractor.",
};

const testimonials = [
  {
    quote: "They replaced the entire roof after Hurricane Ian and kept us updated the whole way through. We had video documentation before most contractors in the area had even returned our calls.",
    name: "Fort Myers homeowner",
    project: "Post-storm roof replacement",
  },
  {
    quote: "The team managed everything: pulled the permits, coordinated the crew, handled the final inspection. We didn't have to chase anybody.",
    name: "Sarasota property manager",
    project: "Multi-family roofing project",
  },
  {
    quote: "We went with Seacoast because we could actually watch videos of their finished work before signing anything. That's not something most contractors can offer.",
    name: "Naples homeowner",
    project: "Tile roof replacement",
  },
  {
    quote: "Competitive pricing, showed up on time, and cleaned up every day. They also handled the fascia and gutters in the same visit without us having to coordinate separate contractors.",
    name: "Charlotte County homeowner",
    project: "Roof + gutters + fascia",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">What our clients say</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Testimonials</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Seacoast Building &amp; Design has served Southwest Florida for over 40 years. Here&apos;s what homeowners and property managers say about working with us.
          </p>
        </div>
      </section>

      <section className="section bg-warm-white">
        <div className="container grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <div key={i} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-soft">
              <p className="text-lg leading-8 text-text-secondary">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 border-t border-navy/10 pt-5">
                <p className="font-heading font-bold text-navy">{item.name}</p>
                <p className="mt-1 text-sm text-text-secondary">{item.project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-cool-gray">
        <div className="container max-w-3xl text-center">
          <p className="eyebrow">Video proof</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-navy">Don&apos;t just take our word for it</h2>
          <p className="mt-5 text-lg text-text-secondary">
            Watch 24 documented project videos. Real jobs, real results, no stock footage. This is what 40 years of Southwest Florida contracting looks like.
          </p>
          <div className="mt-8">
            <Link href="/our-work" className="rounded-full bg-teal px-8 py-4 font-bold text-white hover:bg-copper">Browse Project Videos</Link>
          </div>
        </div>
      </section>

      <CTASection variant="navy" heading="Ready to add your own story?" subtext="Request a quote and experience the Seacoast difference firsthand." buttonLabel="Get a Free Quote" />
    </>
  );
}
