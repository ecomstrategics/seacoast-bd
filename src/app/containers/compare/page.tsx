import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaScript, productSchema, faqSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Container vs. Everything: Storage, Shed, RV, and Traditional Addition",
  description:
    "Not sure if a container is right for you? We compare shipping containers head-to-head against self-storage units, garden sheds, RVs, and traditional additions. Including when NOT to buy a container.",
};

const compareFaqs = [
  {
    question: "Is a storage container cheaper than self-storage long-term?",
    answer:
      "In most cases, yes. Self-storage is a monthly rental cost you never recoup. A storage container is a one-time purchase you own outright. For most people who need storage for more than 2 to 3 years, the container math wins by a wide margin.",
  },
  {
    question: "When does a traditional addition make more sense than a container?",
    answer:
      "When you need the new space fully integrated with your main home, when you need more than about 640 square feet in a single connected structure, or when your HOA or local code prohibits accessory structures. Traditional additions also make more sense when the aesthetics of a visible separate structure would harm property value in your specific neighborhood.",
  },
  {
    question: "When does an RV make more sense than a container guest house?",
    answer:
      "If you need to travel with the living space, if you only need it seasonally and want to store it offsite, or if you need it up and running in days rather than weeks. RVs depreciate and have a shorter useful life, but for highly mobile or temporary use cases they can be the right tool.",
  },
  {
    question: "Do containers hold their value better than sheds?",
    answer:
      "Yes. Corten steel containers generally hold their value significantly better than pre-fabricated wood or vinyl sheds, which degrade in Florida's climate over 10 to 20 years. A properly maintained container can last 50 or more years.",
  },
  {
    question: "Is permitting really simpler for containers than traditional construction?",
    answer:
      "For storage-only containers: often no permit required in SW Florida counties. For habitable containers (guest houses): permits are required but the scope is narrower than a full addition. For traditional room additions: full permits, inspections, and coordination across all trades are always required.",
  },
];

export default function ContainerComparePage() {
  const schemas = [
    productSchema({
      name: "Shipping Container Builds by Seacoast Building & Design",
      description:
        "Custom container guest houses, offices, workshops, storage, and storm shelters built and finished by Seacoast Building and Design in Southwest Florida.",
      url: "/containers/compare",
    }),
    faqSchema(compareFaqs.map((f) => ({ question: f.question, answer: f.answer }))),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Containers", href: "/containers" },
              { label: "Compare" },
            ]}
          />
          <p className="eyebrow mt-4">Container vs. everything</p>
          <h1 className="mt-2 font-heading text-5xl font-bold">Is a container right for you?</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">We put containers head-to-head against the four most common alternatives. We also tell you honestly when a container is not the right answer, because trust closes more deals than hype.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#comparison-table" className="rounded-full bg-orange-deep px-6 py-3 text-center font-bold text-white hover:bg-copper">See the Comparison</Link>
            <Link href="/containers" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white hover:text-navy">Browse Container Builds</Link>
          </div>
        </div>
      </section>

      {/* Main comparison table */}
      <section id="comparison-table" className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Side by side</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Storage Container vs. the alternatives</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">Every column represents a real option homeowners consider when they need storage, additional living space, a workspace, or a storm shelter. The comparison covers durability, cost, hurricane performance, and practical factors most buyers don&apos;t think about until after the fact.</p>
          <div className="mt-8">
            <ComparisonTable
              columns={[
                "Storage Container",
                "Self-Storage Unit",
                "Garden Shed",
                "RV / Park Model",
                "Traditional Addition",
              ]}
              rows={[
                {
                  label: "You own it",
                  values: [true, false, true, true, true],
                },
                {
                  label: "Hurricane rating",
                  values: ["Cat 5 (anchored)", "None", "Low", "None", "Varies by build"],
                },
                {
                  label: "10-year cost (rough)",
                  values: [
                    "One-time purchase",
                    "Ongoing monthly rent",
                    "Purchase + replace",
                    "Purchase + depreciation",
                    "High upfront, adds value",
                  ],
                },
                {
                  label: "Resale value",
                  values: ["Holds value well", "None (rental)", "Depreciates fast", "Depreciates", "Adds home value"],
                },
                {
                  label: "Can be moved",
                  values: [true, false, false, true, false],
                },
                {
                  label: "Permit required (storage use)",
                  values: ["Usually no", "None", "Sometimes", "RV park rules apply", "Always required"],
                },
                {
                  label: "Build or setup time",
                  values: ["Days to weeks", "Same day", "1 to 3 days", "Same day", "6 to 12 months"],
                },
                {
                  label: "Customizable",
                  values: ["Highly", "No", "Limited", "Limited", "Highly"],
                },
                {
                  label: "Insulation and HVAC option",
                  values: [true, false, "Limited", "Built-in", true],
                },
                {
                  label: "Long-term durability",
                  values: ["50+ years", "N/A (rented)", "10 to 20 years", "15 to 25 years", "50+ years"],
                },
                {
                  label: "Can look like a building",
                  values: [true, false, true, false, true],
                },
                {
                  label: "Habitable configuration available",
                  values: [true, false, false, true, true],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Guest house specific comparison */}
      <section className="section dark-band bg-navy-deep">
        <div className="container">
          <p className="eyebrow">For guest houses specifically</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Container Guest House vs. Traditional Addition</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">This is the comparison that matters most for homeowners considering adding living space. Both deliver a finished, habitable structure. The differences are in timeline, budget, and process.</p>
          <div className="mt-8">
            <ComparisonTable
              columns={["Container Guest House", "Traditional Room Addition"]}
              rows={[
                { label: "Typical cost per sq ft", values: ["Lower to comparable", "Higher ($250-$400/sq ft)"] },
                { label: "Timeline to move-in", values: ["12 to 20 weeks", "6 to 12 months"] },
                { label: "Hurricane rating", values: ["Cat 5 steel shell", "Depends on build spec"] },
                { label: "Permitting process", values: ["Narrower scope", "Full permit, all trades"] },
                { label: "Mobile (can relocate)", values: [true, false] },
                { label: "Adds to property value", values: [true, true] },
                { label: "Financing available", values: [true, true] },
                { label: "Can match home exterior", values: [true, true] },
                { label: "Attached to main home", values: [false, true] },
                { label: "Foundation required", values: ["Pad or footings", "Full foundation"] },
              ]}
            />
          </div>
        </div>
      </section>

      {/* When containers ARE right */}
      <section className="section dark-band bg-navy">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <div className="inline-block rounded-full bg-success/10 px-4 py-1.5 text-sm font-bold text-success">When a container is the right answer</div>
            <ul className="mt-6 space-y-4">
              {[
                { label: "You need storm-rated storage", body: "Self-storage floods. Sheds blow over. Steel containers stay put." },
                { label: "You want a guest house without a 12-month build", body: "Container builds are typically 12 to 20 weeks from contract to move-in." },
                { label: "Your use case might change later", body: "Storage today, office tomorrow, guest house eventually. The shell adapts." },
                { label: "You value mobility", body: "If there is any chance you move or expand to a different property, the container moves with you." },
                { label: "You want a detached workspace", body: "A separate container office or workshop creates real separation from the main house without a full permit scope." },
                { label: "You live in a high-wind zone", body: "SW Florida is among the most hurricane-exposed regions in the US. Cat-5 steel wins." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-success font-bold text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-charcoal">{item.label}</p>
                    <p className="mt-0.5 text-sm text-text-secondary">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* When NOT to buy a container — the honest section */}
          <div>
            <div className="inline-block rounded-full bg-copper/10 px-4 py-1.5 text-sm font-bold text-copper">When a container is probably not the answer</div>
            <ul className="mt-6 space-y-4">
              {[
                { label: "You need the space connected to your main home", body: "Containers are freestanding structures. If you need an attached master suite or a connected family room, a traditional addition is the right call." },
                { label: "Your HOA prohibits accessory structures", body: "Check your HOA rules before you start. Some communities restrict shipping containers by appearance or classification, even finished ones." },
                { label: "You need more than about 640 sq ft in one connected unit", body: "Multi-container builds can scale larger, but for a 1,000+ sq ft addition fully integrated with the home, traditional construction is more practical." },
                { label: "Your lot has no access for delivery equipment", body: "Container delivery requires a truck with crane or tilt-bed access. If your property has no viable access route, that changes the equation." },
                { label: "You need it for only a few months", body: "Containers are a long-term investment. For truly short-term needs, rental options from portable storage companies may be more cost-effective." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-copper font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-charcoal">{item.label}</p>
                    <p className="mt-0.5 text-sm text-text-secondary">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-text-secondary">We would rather tell you the truth up front than sell you the wrong product. If a traditional addition is right for your situation, we build those too.</p>
            <Link href="/services/room-additions" className="mt-4 inline-block font-semibold text-orange hover:underline">See Room Additions →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section dark-band bg-navy-deep">
        <div className="container max-w-3xl">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy mb-8">Container comparison FAQ</h2>
          <div className="space-y-3">
            {compareFaqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-navy/10 bg-white group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-heading font-bold text-navy list-none">
                  <span>{faq.question}</span>
                  <span aria-hidden className="shrink-0 text-text-secondary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-text-secondary">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-link to products */}
      <section className="section dark-band bg-navy">
        <div className="container">
          <p className="eyebrow">Ready to dig deeper?</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-navy">Explore each product line</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "storage", label: "Storage Containers", icon: "📦", sub: "10, 20, 40 ft units" },
              { slug: "guest-houses", label: "Container Guest Houses", icon: "🏡", sub: "Studio to two-bedroom" },
              { slug: "offices-workshops", label: "Offices and Workshops", icon: "🏗️", sub: "Climate-controlled workspaces" },
              { slug: "storm-shelters", label: "Storm Shelters", icon: "🛡️", sub: "Cat-5-rated anchored shelters" },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/containers/${item.slug}`}
                className="group rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="text-3xl" aria-hidden>{item.icon}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy group-hover:text-orange">{item.label}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.sub}</p>
                <span className="mt-3 inline-flex font-semibold text-orange">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="orange"
        heading="Not sure which product fits your situation?"
        subtext="Tell us what you are trying to solve. We will give you an honest recommendation, not just a pitch."
        buttonLabel="Talk to a Specialist"
      />
    </>
  );
}
