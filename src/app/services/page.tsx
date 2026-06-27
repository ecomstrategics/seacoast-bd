import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Roofing, siding, gutters, windows, doors, storm repair, pool enclosures, and exterior renovations. Full contractor services for Southwest Florida.",
};

export default function ServicesPage() { return <section className="section dark-band bg-navy"><div className="container"><Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Services" }]} /><p className="eyebrow">Services</p><h1 className="mt-2 font-heading text-5xl font-bold text-navy">Contracting services for coastal properties</h1><p className="mt-5 max-w-3xl text-lg text-text-secondary">Explore the core services Seacoast Building & Design provides for residential, commercial, and multi-family properties.</p><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>; }
