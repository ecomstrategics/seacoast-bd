"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileBottomBar() {
  const pathname = usePathname();
  const onContactPage = pathname === "/contact";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/20 bg-navy px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <a href="tel:+19415005431" className="rounded-l-full bg-orange-deep px-4 py-3 text-center text-sm font-bold text-white">
        Call Now
      </a>
      <Link
        href={onContactPage ? "#quote-form" : "/contact"}
        className="rounded-r-full bg-copper px-4 py-3 text-center text-sm font-bold text-white"
      >
        {onContactPage ? "Go to Form" : "Request a Quote"}
      </Link>
    </div>
  );
}
