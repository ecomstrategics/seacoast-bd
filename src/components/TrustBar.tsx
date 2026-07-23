const signals = [
  { label: "Florida-Certified Contractor" },
  { label: "Licensed & Insured" },
  { label: "Project Photos & Videos" },
  {
    label: "GAF GoldElite™ Commercial Contractor",
    href: "https://www.gaf.com/en-us/roofing-contractors/commercial/seacoast-building-and-design-lehigh-acres-fl-1154417",
  },
] as const;

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-navy-deep py-5" aria-label="Seacoast credentials">
      <div className="container grid gap-3 text-center font-heading font-bold text-white sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((signal) => {
          const className = "rounded-xl bg-white/5 px-4 py-3";

          return "href" in signal ? (
            <a
              key={signal.label}
              href={signal.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${className} transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange`}
            >
              {signal.label} <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <div key={signal.label} className={className}>
              {signal.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
