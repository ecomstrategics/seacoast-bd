"use client";

import { useCallback, useRef, useState } from "react";

type SlideSource =
  | { type: "placeholder"; label: string; tone?: "navy" | "steel" | "warm" }
  | { type: "image"; src: string; alt: string };

function SlideLayer({ source, clip }: { source: SlideSource; clip?: string }) {
  const style = clip ? { clipPath: clip } : undefined;
  if (source.type === "placeholder") {
    const toneGradients: Record<string, string> = {
      navy: "from-navy/80 to-navy/95 text-white/60",
      steel: "from-container-steel/70 to-container-steel/90 text-white/60",
      warm: "from-copper/20 to-warm-white text-charcoal/60",
    };
    const toneClass = toneGradients[source.tone ?? "navy"];
    return (
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${toneClass}`} style={style} aria-label={source.label}>
        <svg className="h-10 w-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 12V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V12z" />
        </svg>
        <p className="mt-2 px-4 text-center text-sm font-semibold opacity-60">{source.label}</p>
        <p className="mt-1 text-xs opacity-40">Image pending</p>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={source.src} alt={source.alt} className="absolute inset-0 h-full w-full object-cover" style={style} />
  );
}

export function BeforeAfterSlider({
  before,
  after,
  className,
}: {
  before: SlideSource;
  after: SlideSource;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video w-full select-none overflow-hidden rounded-2xl ${className ?? ""}`}
      role="group"
      aria-label="Before and after image comparison"
    >
      {/* Before (full width, underneath) */}
      <SlideLayer source={before} />
      {/* After (clipped to left portion) */}
      <SlideLayer source={after} clip={`inset(0 ${100 - position}% 0 0)`} />

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white">Before</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white">After</span>

      {/* Divider */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]"
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-soft">
          <svg className="h-4 w-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>

      {/* Range input for pointer/touch interaction */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        aria-label="Slide to compare before and after"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        onChange={(e) => setPosition(Number(e.target.value))}
        onMouseMove={(e) => { if (e.buttons === 1) updatePosition(e.clientX); }}
      />
    </div>
  );
}
