import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ReviewForm } from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read Seacoast Building & Design feedback on Google or the Better Business Bureau, leave a review, or send comments directly to the team.",
};

const reviewChannels = [
  {
    name: "Google Reviews",
    blurb: "See customer feedback in Google Maps, or leave a star rating and a few words about your own project.",
    cta: "Leave a Google review",
    href: "https://g.page/r/CU959N9AZyKiEAE/review",
    readCta: "Read Google reviews",
    readHref: "https://www.google.com/maps/search/?api=1&query=Seacoast%20Building%20%26%20Design&query_place_id=ChIJbTNznaVx24gRT3n030BnIqI",
  },
  {
    name: "Better Business Bureau",
    blurb: "View Seacoast's BBB profile and any customer feedback shown there, or start a review of your experience.",
    cta: "View the BBB profile",
    href: "https://www.bbb.org/us/fl/arcadia/profile/general-contractor/seacoast-building-design-llc-0653-90431392",
  },
];

export default function CustomerReviewsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Customer Reviews" }]} />
          <p className="eyebrow">Customer feedback</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Read or share a Seacoast review</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Considering Seacoast? Read feedback in its original source. Just finished a project with us? Share your experience publicly or send comments straight to our team.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Leave a review</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Two places to read or share feedback</h2>
          <div className="mt-6 max-w-3xl">
            <h3 className="font-heading text-xl font-bold text-navy">Where can I read or leave a Seacoast review?</h3>
            <p className="mt-3 leading-7 text-text-secondary">Read current feedback on Google or the Better Business Bureau, where each review appears in its original context. If you prefer to contact Seacoast directly, use the form below.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reviewChannels.map((channel) => (
              <div key={channel.name} className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-soft">
                <p className="mt-2 font-heading text-xl font-bold text-navy">{channel.name}</p>
                <p className="mt-3 flex-1 leading-7 text-text-secondary">{channel.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {channel.readHref && (
                    <a href={channel.readHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white transition hover:bg-copper">
                      {channel.readCta}
                    </a>
                  )}
                  <a href={channel.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-navy/20 px-6 py-3 text-center font-bold text-navy transition hover:bg-navy hover:text-white">
                    {channel.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-text-secondary">
            Prefer to send feedback directly? <a href="#review-form" className="font-semibold text-orange-deep underline">Use the form below</a>. We will only publish it if you give permission.
          </p>
        </div>
      </section>

      <section id="review-form" className="section dark-band bg-navy-deep scroll-mt-24">
        <div className="container max-w-2xl">
          <p className="eyebrow">Send us your review</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Share your experience with our team</h2>
          <p className="mt-4 text-text-secondary">
            We read every submission. If you give permission, we may feature your comments on the site after review.
          </p>
          <div className="mt-8">
            <ReviewForm />
          </div>
        </div>
      </section>

      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl text-center">
          <p className="eyebrow">See the work</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-navy">See the work behind the reviews</h2>
          <p className="mt-5 text-lg text-text-secondary">
            Browse project videos and photos from completed roofing, exterior, and community work across Southwest Florida.
          </p>
          <div className="mt-8">
            <Link href="/our-work" className="rounded-full bg-orange-deep px-8 py-4 text-center font-bold text-white hover:bg-copper">Browse Project Videos</Link>
          </div>
        </div>
      </section>

      <CTASection variant="navy" heading="Have a property project in mind?" subtext="Tell us what you are planning or what needs attention, and we will help you understand the next step." buttonLabel="Request a Quote" />
    </>
  );
}
