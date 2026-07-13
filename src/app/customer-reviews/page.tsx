import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ReviewForm } from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read reviews of Seacoast Building & Design and leave your own. Rate us on Google, the Better Business Bureau, or send your review directly to our team.",
};

const reviewChannels = [
  {
    name: "Google Reviews",
    blurb: "The fastest way to help future neighbors find us. Leave a star rating and a few words about your project.",
    cta: "Review us on Google",
    href: "https://g.page/r/CU959N9AZyKiEAE/review",
    primary: true,
  },
  {
    name: "Better Business Bureau",
    blurb: "Rate Seacoast with stars and post your honest review on our BBB profile.",
    cta: "Review us on the BBB",
    href: "https://tinyurl.com/seacoast-building-design-bbb",
    primary: false,
  },
];

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

export default function CustomerReviewsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Customer Reviews" }]} />
          <p className="eyebrow">Customer reviews</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Customer reviews</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Just finished a project with us? Your honest review helps your neighbors choose a contractor they can trust. Pick an option below, or send your review straight to our team.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Leave a review</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Two quick ways to share your experience</h2>
          <div className="mt-6 max-w-3xl">
            <h3 className="font-heading text-xl font-bold text-navy">Where can I read or leave a Seacoast review?</h3>
            <p className="mt-3 leading-7 text-text-secondary">You can read selected customer stories further down this page, then share your own experience on Google or the Better Business Bureau. If you prefer to contact Seacoast directly, submit the review form and the team will moderate it before publication.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reviewChannels.map((channel) => (
              <div key={channel.name} className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-soft">
                {channel.primary && <p className="eyebrow text-orange-deep">Most helpful</p>}
                <p className="mt-2 font-heading text-xl font-bold text-navy">{channel.name}</p>
                <p className="mt-3 flex-1 leading-7 text-text-secondary">{channel.blurb}</p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-bold transition ${channel.primary ? "bg-orange-deep text-white hover:bg-copper" : "border border-navy/20 text-navy hover:bg-navy hover:text-white"}`}
                >
                  {channel.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-text-secondary">
            Prefer to send it to us directly? <a href="#review-form" className="font-semibold text-orange-deep underline">Use the form below</a> and our team will review and post it.
          </p>
        </div>
      </section>

      <section id="review-form" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container max-w-2xl">
          <p className="eyebrow">Send us your review</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Share your experience with our team</h2>
          <p className="mt-4 text-text-secondary">
            We read every submission and post selected reviews on our site. Reviews are moderated, so it may take a little time to appear.
          </p>
          <div className="mt-8">
            <ReviewForm />
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">What our clients say</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">In their own words</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl text-center">
          <p className="eyebrow">Video proof</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-navy">Don&apos;t just take our word for it</h2>
          <p className="mt-5 text-lg text-text-secondary">
            Watch our documented project videos. Real jobs, real results, no stock footage. This is what 40 years of Southwest Florida contracting looks like.
          </p>
          <div className="mt-8">
            <Link href="/our-work" className="rounded-full bg-orange-deep px-8 py-4 text-center font-bold text-white hover:bg-copper">Browse Project Videos</Link>
          </div>
        </div>
      </section>

      <CTASection variant="navy" heading="Ready to add your own story?" subtext="Request a quote and experience the Seacoast difference firsthand." buttonLabel="Get a Free Quote" />
    </>
  );
}
