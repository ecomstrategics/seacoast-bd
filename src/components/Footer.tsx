import Link from "next/link";
import { serviceArea } from "@/data/navigation";
import { serviceAreaCities } from "@/data/serviceAreas";
import { containers } from "@/data/containers";

const pillarLinks = {
  protect: [
    { label: "Roof Certification Inspection", href: "/services/roof-certification-inspection" },
    { label: "Storm Preparedness", href: "/services/storm-preparedness" },
    { label: "Emergency Response", href: "/services/emergency-response" },
    { label: "Storm Damage Repair", href: "/services/storm-damage-repair" },
    { label: "Impact Windows & Doors", href: "/services/windows-and-doors" },
  ],
  improve: [
    { label: "Roofing", href: "/services/roofing" },
    { label: "Siding", href: "/services/siding" },
    { label: "Gutters, Fascia & Soffits", href: "/services/gutters-fascia-soffits" },
    { label: "Windows & Doors", href: "/services/windows-and-doors" },
    { label: "Exterior Renovations", href: "/services/exterior-renovations" },
    { label: "Exterior Cleaning Services", href: "/services/exterior-cleaning-services" },
    { label: "Solar Services", href: "/services/solar-services" },
  ],
  expand: [
    { label: "Pool Enclosures & Lanais", href: "/services/pool-enclosures-lanais" },
    { label: "Room Additions", href: "/services/room-additions" },
    { label: "Container Guest Houses", href: "/containers/guest-houses" },
    { label: "Container Offices", href: "/containers/offices-workshops" },
  ],
};

const quickLinks = [
  { label: "Our Work", href: "/our-work" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Financing", href: "/financing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy pb-20 text-white md:pb-0">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Company */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-heading text-xl font-bold">Seacoast Building &amp; Design</p>
          <p className="mt-3 text-sm text-white/75 leading-6">Southwest Florida&rsquo;s full-service property solutions company. Protect it. Improve it. Expand it.</p>
          <p className="mt-3 text-sm text-white/70">License #: FRO14426</p>
          <p className="mt-1 text-sm text-white/70">
            <a href="tel:+19415005431" className="hover:text-white">(941) 500-5431</a>
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="https://www.facebook.com/seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href="https://www.instagram.com/seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            <a href="https://www.youtube.com/@seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
          </div>
        </div>

        {/* Protect */}
        <div>
          <h3 className="font-heading font-bold text-teal">Protect</h3>
          <p className="mt-0.5 text-xs text-white/50 uppercase tracking-widest">Storm &amp; Resilience</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {pillarLinks.protect.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Improve */}
        <div>
          <h3 className="font-heading font-bold text-white/90">Improve</h3>
          <p className="mt-0.5 text-xs text-white/50 uppercase tracking-widest">Exteriors &amp; Renovations</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {pillarLinks.improve.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Expand + Containers */}
        <div>
          <h3 className="font-heading font-bold text-white/90">Expand</h3>
          <p className="mt-0.5 text-xs text-white/50 uppercase tracking-widest">Property Solutions</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {pillarLinks.expand.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
            ))}
          </ul>
          <h3 className="mt-6 font-heading font-bold text-white/90">Containers</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {containers.map((c) => (
              <li key={c.slug}><Link href={`/containers/${c.slug}`} className="hover:text-white">{c.name}</Link></li>
            ))}
            <li><Link href="/containers/compare" className="hover:text-white">Compare Options</Link></li>
          </ul>
        </div>

        {/* Service Area + Quick Links */}
        <div>
          <h3 className="font-heading font-bold">Service Area</h3>
          <p className="mt-0.5 text-xs text-white/50 uppercase tracking-widest">6 Counties</p>
          <ul className="mt-4 space-y-1.5 text-sm text-white/75">
            {serviceAreaCities.map((city) => (
              <li key={city.slug}><Link href={`/service-area/${city.slug}`} className="hover:text-white">{city.name}</Link></li>
            ))}
          </ul>
          <h3 className="mt-6 font-heading font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {quickLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:text-white">{link.label}</Link></li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/40">Serving: {serviceArea.join(", ")}</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/65">
        &copy; {new Date().getFullYear()} Seacoast Building &amp; Design. All rights reserved.
      </div>
    </footer>
  );
}
