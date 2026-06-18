import Link from "next/link";

export function CTASection({ variant = "orange", heading = "Ready to talk through your project?", subtext = "Request a no-pressure quote from a team that understands Southwest Florida properties.", buttonLabel = "Get a Free Quote" }: { variant?: "orange" | "navy"; heading?: string; subtext?: string; buttonLabel?: string }) {
  const bg = variant === "navy" ? "bg-navy" : "bg-orange-deep";
  return <section className={`${bg} py-14 text-white`}><div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="font-heading text-3xl font-bold md:text-4xl">{heading}</h2><p className="mt-3 max-w-2xl text-white/90">{subtext}</p></div><Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-center font-bold text-navy transition hover:bg-copper hover:text-white">{buttonLabel}</Link></div></section>;
}
