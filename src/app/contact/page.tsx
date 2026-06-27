import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { serviceArea } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free quote or get in touch with Seacoast Building & Design. Serving Southwest Florida: Hillsborough, Manatee, Sarasota, Charlotte, Lee, and Collier Counties.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-4 font-heading text-5xl font-bold">Request a Free Quote</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Tell us about your project. We&apos;ll follow up within one business day to schedule an on-site assessment.
          </p>
        </div>
      </section>

      <section className="section dark-band bg-navy">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Contact information</h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="eyebrow">Phone</p>
                <a href="tel:+19415005431" className="mt-2 block font-heading text-2xl font-bold text-navy hover:text-orange">(941) 500-5431</a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a href="mailto:sales@seacoastbd.com" className="mt-2 block font-heading text-2xl font-bold text-navy hover:text-orange">sales@seacoastbd.com</a>
              </div>
              <div>
                <p className="eyebrow">Hours</p>
                <p className="mt-2 text-text-secondary">Mon to Fri: 8am to 6pm</p>
                <p className="text-text-secondary">Saturday: 9am to 3pm</p>
              </div>
              <div>
                <p className="eyebrow">Service Area</p>
                <ul className="mt-2 space-y-1">
                  {serviceArea.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-text-secondary">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Social</p>
                <div className="mt-2 flex gap-4">
                  <a href="https://www.facebook.com/seacoastbuilding/" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-orange">Facebook</a>
                  <a href="https://www.instagram.com/seacoastband/" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-orange">Instagram</a>
                  <a href="https://www.youtube.com/@SeacoastBuildingDesign" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-orange">YouTube</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
