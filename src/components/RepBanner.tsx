"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type RepInfo = { name: string; phone?: string; email?: string };

const repDirectory: Record<string, RepInfo> = {
  james: { name: "James", phone: "(941) 500-5431", email: "james@seacoastbd.com" },
  sarah: { name: "Sarah", phone: "(941) 500-5431", email: "sarah@seacoastbd.com" },
};

function RepBannerInner() {
  const params = useSearchParams();
  const repKey = params.get("rep")?.toLowerCase();
  const rep = repKey ? repDirectory[repKey] : null;

  useEffect(() => {
    if (repKey) {
      document.cookie = `rep=${encodeURIComponent(repKey)};path=/;max-age=86400`;
    }
  }, [repKey]);

  if (!rep) return null;

  return (
    <aside
      className="bg-teal text-white"
      role="complementary"
      aria-label={`Assigned representative: ${rep.name}`}
    >
      <div className="container flex flex-wrap items-center justify-between gap-3 py-2.5 text-sm">
        <p className="font-semibold">
          Your Seacoast rep: <span className="font-bold">{rep.name}</span>
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {rep.phone && (
            <a href={`tel:${rep.phone.replace(/\D/g, "")}`} className="font-medium hover:underline">
              {rep.phone}
            </a>
          )}
          {rep.email && (
            <a href={`mailto:${rep.email}`} className="font-medium hover:underline">
              {rep.email}
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}

export function RepBanner() {
  return (
    <Suspense fallback={null}>
      <RepBannerInner />
    </Suspense>
  );
}
