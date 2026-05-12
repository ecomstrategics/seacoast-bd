import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() { return <section className="section"><div className="container"><p className="eyebrow">Services</p><h1 className="mt-2 font-heading text-5xl font-bold text-navy">Contracting services for coastal properties</h1><p className="mt-5 max-w-3xl text-lg text-text-secondary">Explore the core services Seacoast Building & Design provides for residential, commercial, and multi-family properties.</p><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>; }
