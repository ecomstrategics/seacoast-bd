import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Seacoast Building & Design is committed to making seacoastbd.com accessible to everyone, in line with WCAG 2.1 Level AA.",
  alternates: { canonical: "/accessibility" },
};

const LAST_UPDATED = "June 16, 2026";

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">Accessibility</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Accessibility Statement</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            We are committed to making our website usable for everyone, including people with disabilities.
          </p>
          <p className="mt-4 text-sm text-white/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <article className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <h2 className="font-heading text-2xl font-bold text-navy">Our commitment</h2>
            <p className="mt-3 text-text-secondary">
              Seacoast Building &amp; Design is committed to ensuring that seacoastbd.com is accessible to people of all abilities. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, the standard widely referenced under the Americans with Disabilities Act (ADA).
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Measures we take</h2>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li>Color contrast designed to meet WCAG 2.1 AA ratios for text and interactive elements.</li>
              <li>Semantic HTML structure with descriptive headings and landmarks.</li>
              <li>Text alternatives for meaningful images and decorative elements marked accordingly.</li>
              <li>Keyboard-accessible navigation and visible focus indicators.</li>
              <li>Responsive layouts that adapt to zoom and different screen sizes.</li>
              <li>Clear, descriptive link and button labels.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Ongoing effort</h2>
            <p className="mt-3 text-text-secondary">
              Accessibility is an ongoing effort. We regularly review the site and work to improve the experience for all users. Some third-party content or features may not yet fully meet our standards, and we are working to address those areas.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Feedback and assistance</h2>
            <p className="mt-3 text-text-secondary">
              If you experience any difficulty accessing part of this website, or if you have suggestions for improvement, please let us know. We welcome your feedback and will make reasonable efforts to provide the information or service you need through an alternative method.
            </p>
            <p className="mt-3 text-text-secondary">
              Contact Seacoast Building &amp; Design at <a href="mailto:sales@seacoastbd.com" className="font-bold text-navy hover:text-orange">sales@seacoastbd.com</a>, <a href="tel:+19415005431" className="font-bold text-navy hover:text-orange">(941) 500-5431</a>, or through our <Link href="/contact" className="font-bold text-navy hover:text-orange">contact page</Link>. Please include the web address of the page and a description of the issue so we can assist you promptly.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
