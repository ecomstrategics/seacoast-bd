type Tone = "navy" | "steel" | "warm";
type Ratio = "16/9" | "4/3" | "1/1" | "3/2";

const gradients: Record<Tone, string> = {
  navy: "from-navy/80 to-navy/95",
  steel: "from-container-steel/70 to-container-steel/90",
  warm: "from-copper/20 to-warm-white",
};

const ratioClasses: Record<Ratio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
};

export function ImagePlaceholder({
  label,
  ratio = "16/9",
  tone = "navy",
}: {
  label: string;
  ratio?: Ratio;
  tone?: Tone;
}) {
  return (
    <div
      className={`${ratioClasses[ratio]} w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[tone]} flex flex-col items-center justify-center gap-3 border border-navy/10`}
      role="img"
      aria-label={label}
    >
      <svg className="h-10 w-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 12V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V12z" />
      </svg>
      <p className={`px-4 text-center text-sm font-semibold ${tone === "warm" ? "text-charcoal/60" : "text-white/60"}`}>{label}</p>
      <p className={`text-xs ${tone === "warm" ? "text-charcoal/40" : "text-white/35"}`}>Image pending</p>
    </div>
  );
}
