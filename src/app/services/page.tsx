import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Contractor Services in Southwest Florida",
  description: "Roofing, siding, gutters, windows, doors, storm repair, cleaning, enclosures, and exterior work for Southwest Florida properties.",
};

export default function ServicesPage() {
  return (
    <section className="section dark-band bg-navy">
      <div className="container">
        <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <p className="eyebrow">Services</p>
        <h1 className="mt-2 font-heading text-5xl font-bold text-navy">
          Roofing, storm repair, and exterior services in Southwest Florida
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-text-secondary">
          Tell us what needs to be repaired, replaced, cleaned, or built. Seacoast works with homes,
          commercial properties, condominiums, and HOAs across its service area.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
          <h2 className="font-heading text-2xl font-bold text-navy">Not sure which service fits?</h2>
          <p className="mt-3 leading-7 text-text-secondary">
            Start with the property address and the problem you are seeing. We will tell you whether the
            next step is a phone call, inspection, or site visit.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
