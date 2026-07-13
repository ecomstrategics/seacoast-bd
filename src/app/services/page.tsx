import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Roofing, siding, gutters, windows, doors, storm repair, pool enclosures, and exterior renovations. Full contractor services for Southwest Florida.",
};

export default function ServicesPage() { return <section className="section dark-band bg-navy"><div className="container"><Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Services" }]} /><p className="eyebrow">Services</p><h1 className="mt-2 font-heading text-5xl font-bold text-navy">Contracting services for coastal properties</h1><p className="mt-5 max-w-3xl text-lg text-text-secondary">Explore the core services Seacoast Building & Design provides for residential, commercial, and multi-family properties.</p><div className="mt-8 max-w-3xl rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"><h2 className="font-heading text-2xl font-bold text-navy">Which contractor services does Seacoast provide?</h2><p className="mt-3 leading-7 text-text-secondary">Seacoast provides roofing, siding, gutters, windows and doors, storm-damage repair, pool enclosures, and exterior renovation services for residential, commercial, and multi-family properties throughout its Southwest Florida service area.</p></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>; }
