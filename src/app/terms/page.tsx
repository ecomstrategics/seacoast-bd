import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Seacoast Building & Design website and the information presented on it.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "June 16, 2026";

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">Terms</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Terms of Service</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Please read these terms carefully. They govern your use of the Seacoast Building &amp; Design website.
          </p>
          <p className="mt-4 text-sm text-white/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <article className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <p className="text-text-secondary">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of seacoastbd.com (the &ldquo;Site&rdquo;), operated by Seacoast Building &amp; Design (&ldquo;Seacoast,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Site, you agree to these Terms. If you do not agree, please do not use the Site.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Use of the site</h2>
            <p className="mt-3 text-text-secondary">
              You may use the Site for lawful purposes only. You agree not to misuse the Site, interfere with its operation, attempt to gain unauthorized access, or use it in any way that could damage or impair it or another party&rsquo;s use of it.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Information, quotes, and estimates</h2>
            <p className="mt-3 text-text-secondary">
              Content on the Site is for general informational purposes. Service descriptions, pricing references, and project examples are illustrative and do not constitute an offer or a binding contract. Any quote or estimate is subject to an on-site assessment and a written agreement signed by both parties. The terms of any actual work are governed solely by that signed contract, not by the Site.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Financing</h2>
            <p className="mt-3 text-text-secondary">
              Financing options referenced on the Site are offered through Hearth, a third-party financing marketplace, and its lending partners. Seacoast is not a lender, does not make credit decisions, and does not guarantee approval, rates, or terms. All loans are subject to credit approval by the lending partner.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Intellectual property</h2>
            <p className="mt-3 text-text-secondary">
              The Site and its content, including text, graphics, logos, images, and design, are owned by or licensed to Seacoast and are protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of the Site without our prior written permission.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Third-party links</h2>
            <p className="mt-3 text-text-secondary">
              The Site may contain links to third-party websites and services, including social media and our financing partner. We do not control and are not responsible for the content, policies, or practices of those third parties.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Disclaimer of warranties</h2>
            <p className="mt-3 text-text-secondary">
              The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components, or that the information on it is complete or current.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Limitation of liability</h2>
            <p className="mt-3 text-text-secondary">
              To the fullest extent permitted by law, Seacoast and its owners, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site, even if advised of the possibility of such damages. This limitation does not affect any rights or obligations under a signed services contract.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Indemnification</h2>
            <p className="mt-3 text-text-secondary">
              You agree to indemnify and hold harmless Seacoast from any claims, damages, or expenses arising from your misuse of the Site or violation of these Terms.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Governing law</h2>
            <p className="mt-3 text-text-secondary">
              These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-law rules. Any dispute relating to the Site will be subject to the exclusive jurisdiction of the state and federal courts located in Florida.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Changes to these terms</h2>
            <p className="mt-3 text-text-secondary">
              We may update these Terms from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above. Your continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Contact us</h2>
            <p className="mt-3 text-text-secondary">
              Questions about these Terms can be directed to Seacoast Building &amp; Design, Fort Myers, Florida, at <a href="mailto:sales@seacoastbd.com" className="font-bold text-navy hover:text-orange">sales@seacoastbd.com</a>, <a href="tel:+19415005431" className="font-bold text-navy hover:text-orange">(941) 500-5431</a>, or through our <Link href="/contact" className="font-bold text-navy hover:text-orange">contact page</Link>. License #FRO14426.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
