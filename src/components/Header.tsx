"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { primaryNav, solutionsMega } from "@/data/navigation";

const pillarLabels = { protect: "Protect", improve: "Improve", expand: "Expand" } as const;
const pillarAccents = { protect: "text-teal", improve: "text-navy", expand: "text-copper" } as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu(key: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-warm-white/95 backdrop-blur">
      {/* Top bar */}
      <div className="bg-navy text-sm text-white">
        <div className="container flex flex-wrap items-center justify-between gap-2 py-2">
          <span>Call: <a className="font-semibold text-white underline-offset-4 hover:underline" href="tel:+19415005431">(941) 500-5431</a></span>
          <span>Mon&ndash;Fri 8am&ndash;6pm &bull; Sat 9am&ndash;3pm &bull; Serving Southwest Florida</span>
          <span className="hidden gap-3 sm:flex" aria-label="Social links">
            <a href="https://www.facebook.com/seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href="https://www.instagram.com/seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href="https://www.youtube.com/@seacoastbd" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
          </span>
        </div>
      </div>

      {/* Main nav row */}
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-navy" onClick={() => setMobileOpen(false)}>
          Seacoast<span className="text-teal"> B&amp;D</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-charcoal lg:flex" aria-label="Main navigation">
          {primaryNav.map((item) => {
            if (item.mega === "solutions") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => openMenu("solutions")}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className="flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-cool-gray focus-ring"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "solutions"}
                    onFocus={() => openMenu("solutions")}
                    onBlur={scheduleClose}
                  >
                    {item.label}
                    <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>

                  {openDropdown === "solutions" && (
                    <div
                      className="absolute left-0 top-full z-50 mt-2 w-[640px] rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      role="region"
                      aria-label="Solutions menu"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {(Object.keys(solutionsMega) as Array<keyof typeof solutionsMega>).map((pillar) => (
                          <div key={pillar}>
                            <p className={`mb-3 text-xs font-bold uppercase tracking-widest ${pillarAccents[pillar]}`}>{pillarLabels[pillar]}</p>
                            <ul className="space-y-1.5">
                              {solutionsMega[pillar].map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="block rounded-lg px-2.5 py-1.5 text-sm text-charcoal hover:bg-cool-gray hover:text-teal focus-ring"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={`/solutions/${pillar}`}
                              className={`mt-3 inline-flex text-xs font-bold ${pillarAccents[pillar]} hover:underline`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              See all {pillarLabels[pillar]} services &rarr;
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (item.dropdown) {
              const key = item.label;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => openMenu(key)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className="flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-cool-gray focus-ring"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === key}
                    onFocus={() => openMenu(key)}
                    onBlur={scheduleClose}
                  >
                    {item.label}
                    <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>

                  {openDropdown === key && (
                    <div
                      className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-2xl border border-navy/10 bg-white py-2 shadow-soft"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      role="region"
                      aria-label={`${item.label} menu`}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-5 py-2.5 text-sm text-charcoal hover:bg-cool-gray hover:text-teal focus-ring"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                      <div className="mx-5 my-2 border-t border-navy/10" />
                      <Link href={item.href} className="block px-5 py-2.5 text-sm font-bold text-teal hover:bg-cool-gray focus-ring" onClick={() => setOpenDropdown(null)}>
                        All {item.label} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 hover:bg-cool-gray hover:text-teal focus-ring">
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+19415005431" className="font-semibold text-navy">(941) 500-5431</a>
          <Link href="/contact" className="rounded-full bg-teal px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-copper">Get a Free Quote</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg border border-navy/20 px-3 py-2 text-navy lg:hidden focus-ring"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav id="mobile-menu" className="border-t border-navy/10 bg-warm-white px-4 pb-6 lg:hidden" aria-label="Mobile navigation">
          <div className="container space-y-1 py-3">
            <p className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-copper">Protect</p>
            {solutionsMega.protect.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
            <p className="mt-3 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-navy/60">Improve</p>
            {solutionsMega.improve.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
            <p className="mt-3 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-copper">Expand</p>
            {solutionsMega.expand.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
            <div className="my-3 border-t border-navy/10" />
            <Link href="/containers" className="block rounded-lg px-3 py-2.5 font-semibold text-container-steel hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>Containers</Link>
            <Link href="/our-work" className="block rounded-lg px-3 py-2.5 font-medium hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>Our Work</Link>
            <Link href="/testimonials" className="block rounded-lg px-3 py-2.5 font-medium hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>Testimonials</Link>
            <Link href="/about" className="block rounded-lg px-3 py-2.5 font-medium hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/resources" className="block rounded-lg px-3 py-2.5 font-medium hover:bg-cool-gray" onClick={() => setMobileOpen(false)}>Resources</Link>
            <div className="my-3 border-t border-navy/10" />
            <Link href="/contact" className="block rounded-full bg-teal px-5 py-3 text-center font-bold text-white" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
            <a href="tel:+19415005431" className="block rounded-full border border-navy/20 px-5 py-3 text-center font-semibold text-navy" onClick={() => setMobileOpen(false)}>(941) 500-5431</a>
          </div>
        </nav>
      )}
    </header>
  );
}
