import Link from "next/link";

export function MobileBottomBar() {
  return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/20 bg-navy p-2 md:hidden"><a href="tel:+19415005431" className="rounded-l-full bg-teal px-4 py-3 text-center text-sm font-bold text-white">Call Now</a><Link href="/contact" className="rounded-r-full bg-copper px-4 py-3 text-center text-sm font-bold text-white">Get Free Quote</Link></div>;
}
