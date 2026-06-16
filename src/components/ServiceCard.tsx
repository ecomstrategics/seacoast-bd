import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return <Link href={`/services/${service.slug}`} className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"><div className="text-4xl" aria-hidden>{service.icon}</div><h3 className="mt-5 font-heading text-xl font-bold text-navy group-hover:text-orange">{service.name}</h3><p className="mt-3 text-sm leading-6 text-text-secondary">{service.shortDescription}</p><span className="mt-5 inline-flex font-semibold text-orange">Learn more →</span></Link>;
}
