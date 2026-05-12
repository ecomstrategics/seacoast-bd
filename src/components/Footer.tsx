import Link from "next/link";
import { navigation, serviceArea } from "@/data/navigation";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-navy pb-20 text-white md:pb-0">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-heading text-2xl font-bold">Seacoast Building & Design</p>
          <p className="mt-4 text-sm text-white/75">Full-service contractor for roofing, exterior renovation, storm repair, enclosures, and commercial work across Southwest Florida.</p>
          <p className="mt-4 text-sm text-white/70">License #: CBC0000000</p>
        </div>
        <div><h3 className="font-heading font-bold">Services</h3><ul className="mt-4 space-y-2 text-sm text-white/75">{services.slice(0, 6).map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`} className="hover:text-white">{service.name}</Link></li>)}</ul></div>
        <div><h3 className="font-heading font-bold">Quick Links</h3><ul className="mt-4 space-y-2 text-sm text-white/75">{navigation.map((item) => <li key={item.href}><Link href={item.href} className="hover:text-white">{item.label}</Link></li>)}</ul></div>
        <div><h3 className="font-heading font-bold">Service Area</h3><ul className="mt-4 space-y-2 text-sm text-white/75">{serviceArea.map((area) => <li key={area}>{area}</li>)}</ul><div className="mt-5 flex gap-3 text-sm"><a href="https://www.facebook.com/seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a><a href="https://www.instagram.com/seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a><a href="https://www.youtube.com/@seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a></div></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/65">© {new Date().getFullYear()} Seacoast Building & Design. All rights reserved.</div>
    </footer>
  );
}
