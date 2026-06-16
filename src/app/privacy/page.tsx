import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Seacoast Building & Design collects, uses, and protects the information you share through this website and our quote process.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "June 16, 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <p className="eyebrow">Your privacy</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            This policy explains what information Seacoast Building &amp; Design collects, how we use it, and the choices you have.
          </p>
          <p className="mt-4 text-sm text-white/60">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container max-w-3xl">
          <article className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <p className="text-text-secondary">
              Seacoast Building &amp; Design (&ldquo;Seacoast,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy describes how we handle information when you visit seacoastbd.com, request a quote, or contact us. By using this website, you agree to the practices described here.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Information we collect</h2>
            <p className="mt-3 text-text-secondary">We collect information in the following ways:</p>
            <ul className="mt-4 space-y-3 text-text-secondary">
              <li>
                <span className="font-bold text-charcoal">Information you give us.</span> When you submit a quote request or contact form, we collect details such as your name, email address, phone number, property address or service area, and any project details you choose to share.
              </li>
              <li>
                <span className="font-bold text-charcoal">Information collected automatically.</span> Like most websites, we may automatically collect technical information such as your IP address, browser type, device type, pages viewed, and referring website. This is collected through cookies and similar technologies.
              </li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">How we use your information</h2>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li>To respond to your inquiries and schedule on-site assessments.</li>
              <li>To prepare and provide project estimates and quotes.</li>
              <li>To communicate with you about your project, our services, and financing options you request.</li>
              <li>To operate, maintain, and improve our website.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">How we share information</h2>
            <p className="mt-3 text-text-secondary">
              We do not sell your personal information. We may share information in these limited situations:
            </p>
            <ul className="mt-4 space-y-3 text-text-secondary">
              <li>
                <span className="font-bold text-charcoal">Service providers.</span> With vendors who help us operate our website and business (for example, hosting and analytics providers), under obligations to protect your information.
              </li>
              <li>
                <span className="font-bold text-charcoal">Financing partner.</span> If you ask about financing, we may direct you to Hearth, our third-party financing marketplace. Hearth and its lending partners handle applications under their own privacy policies. Seacoast is not the lender and does not make credit decisions.
              </li>
              <li>
                <span className="font-bold text-charcoal">Legal and safety.</span> When required by law, subpoena, or to protect the rights, property, or safety of Seacoast, our customers, or others.
              </li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Cookies and analytics</h2>
            <p className="mt-3 text-text-secondary">
              We use cookies and similar technologies to remember preferences and understand how visitors use our site so we can improve it. You can set your browser to refuse cookies or alert you when cookies are sent; some parts of the site may not function properly without them.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Third-party links</h2>
            <p className="mt-3 text-text-secondary">
              Our website may link to third-party sites and services, including social media and our financing partner. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Data retention and security</h2>
            <p className="mt-3 text-text-secondary">
              We keep personal information only as long as needed for the purposes described above or as required by law. We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Your choices and rights</h2>
            <p className="mt-3 text-text-secondary">
              You may ask us to access, correct, or delete the personal information you have provided, or to stop contacting you, by reaching out using the details below. Florida residents and residents of other states may have additional rights under applicable law; we will honor those rights as required. Because we do not sell personal information, no opt-out of sale is necessary.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Do Not Track</h2>
            <p className="mt-3 text-text-secondary">
              Some browsers offer a &ldquo;Do Not Track&rdquo; signal. There is no common industry standard for responding to these signals, so our site does not currently respond to them.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Children&rsquo;s privacy</h2>
            <p className="mt-3 text-text-secondary">
              Our website is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Changes to this policy</h2>
            <p className="mt-3 text-text-secondary">
              We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above. Material changes will be posted on this page.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-bold text-navy">Contact us</h2>
            <p className="mt-3 text-text-secondary">
              If you have questions about this Privacy Policy or your information, contact Seacoast Building &amp; Design, Fort Myers, Florida, at <a href="mailto:sales@seacoastbd.com" className="font-bold text-navy hover:text-orange">sales@seacoastbd.com</a>, <a href="tel:+19415005431" className="font-bold text-navy hover:text-orange">(941) 500-5431</a>, or through our <Link href="/contact" className="font-bold text-navy hover:text-orange">contact page</Link>. License #FRO14426.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
