"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-warm-white/95 backdrop-blur">
      <div className="bg-navy text-sm text-white">
        <div className="container flex flex-wrap items-center justify-between gap-2 py-2">
          <span>Call: <a className="font-semibold text-white underline-offset-4 hover:underline" href="tel:+19415005431">(941) 500-5431</a></span>
          <span>Mon–Fri 8am–6pm • Sat 9am–3pm • Serving Southwest Florida</span>
          <span className="hidden gap-3 sm:flex" aria-label="Social links"><a href="#">Facebook</a><a href="#">Instagram</a><a href="#">YouTube</a></span>
        </div>
      </div>
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-navy">Seacoast<span className="text-teal"> B&D</span></Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-charcoal lg:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="hover:text-teal">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+19415005431" className="font-semibold text-navy">(941) 500-5431</a>
          <Link href="/contact" className="rounded-full bg-teal px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-copper">Get a Free Quote</Link>
        </div>
        <button className="rounded-lg border border-navy/20 px-3 py-2 text-navy lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle menu</span>☰
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-navy/10 bg-warm-white px-4 pb-5 lg:hidden" aria-label="Mobile navigation">
          <div className="container grid gap-3 py-3">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 font-medium hover:bg-cool-gray" onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href="/contact" className="rounded-full bg-teal px-5 py-3 text-center font-bold text-white" onClick={() => setOpen(false)}>Get a Free Quote</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
