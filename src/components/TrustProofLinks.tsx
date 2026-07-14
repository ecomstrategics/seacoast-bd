const trustLinks = [
  {
    label: "Read Google feedback",
    detail: "See current customer feedback in its original Google Maps context.",
    href: "https://www.google.com/maps/search/?api=1&query=Seacoast%20Building%20%26%20Design&query_place_id=ChIJbTNznaVx24gRT3n030BnIqI",
  },
  {
    label: "View the BBB profile",
    detail: "Review Seacoast's public Better Business Bureau business profile.",
    href: "https://www.bbb.org/us/fl/arcadia/profile/general-contractor/seacoast-building-design-llc-0653-90431392",
  },
  {
    label: "Verify general-contractor license",
    detail: "Check CGC1509237 directly with Florida DBPR.",
    href: "https://www.myfloridalicense.com/portalsearches/VerifyLicensee/LicenseDetail?ID=9F07B1C529550789F66A7035331BA130",
  },
  {
    label: "Verify roofing license",
    detail: "Check CCC1332648 directly with Florida DBPR.",
    href: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=DE0037BC6D66FB5A7FD663DFDCA7E919",
  },
] as const;

export function TrustProofLinks({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "rounded-2xl border border-white/15 bg-white/5 p-6" : "bg-navy-deep py-8"}>
      <div className={compact ? "" : "container"}>
        <div className={compact ? "" : "grid gap-6 lg:grid-cols-[0.8fr_2.2fr] lg:items-center"}>
          <div>
            <p className="eyebrow">Check us out</p>
            <h2 className={`${compact ? "text-2xl" : "text-3xl"} mt-2 font-heading font-bold text-white`}>
              Verify Seacoast before you decide
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Reviews and licenses open on the independent source, so you can see the current information for yourself.
            </p>
          </div>
          <div className={`${compact ? "mt-6 grid gap-3" : "grid gap-3 sm:grid-cols-2 lg:grid-cols-4"}`}>
            {trustLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:border-white/35 hover:bg-white/15"
              >
                <span className="font-heading font-bold text-white group-hover:text-orange">{link.label} ↗</span>
                <span className="mt-2 block text-sm leading-6 text-white/75">{link.detail}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
