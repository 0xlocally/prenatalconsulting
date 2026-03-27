const tiers = [
  {
    tier: "Tier 1",
    name: "Prenatal Newborn Planning Consult",
    tagline: "Best for low-risk pregnancies wanting clarity and reassurance",
    price: "$300",
    priceNote: "Single session",
    features: [
      "One 1:1 consultation (60 min)",
      "Review of your pregnancy & concerns",
      "What to expect in the delivery room",
      "Newborn care guidance (feedings, wake/sleep, general care)",
      "Clear next-step recommendations pre/post delivery",
    ],
    featured: false,
    cancelNote: null,
  },
  {
    tier: "Tier 2",
    name: "Comprehensive Prenatal & Newborn Planning Program",
    tagline: "For parents who want a structured, step-by-step plan",
    price: "$800",
    priceNote: "Pay in full \u00B7 or 3 payments of $266.67",
    features: [
      "Everything in Tier 1",
      "2 additional 1:1 consultations (60 min each)",
      "Personalized newborn care plan",
      "Guidance tailored to your pregnancy",
      "Direct messaging support (2 emails per session)",
    ],
    featured: true,
    cancelNote: "Cancellation fee: $266.67 \u00B7 early delivery excluded",
  },
  {
    tier: "Tier 3",
    name: "High-Risk Pregnancy + NICU Readiness Program",
    tagline: "Expert-level guidance and ongoing support",
    price: "$1,500",
    priceNote: "Pay in full \u00B7 or 5 payments of $300",
    features: [
      "Everything in Tier 1",
      "4 additional 1:1 consultations (60 min each)",
      "Personalized newborn care plan",
      "Priority messaging (unlimited during pregnancy)",
      "Detailed contingency planning",
      "NICU readiness preparation",
    ],
    featured: false,
    cancelNote: "Cancellation fee: $300 \u00B7 early delivery excluded",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            Services &amp; Pricing
          </h1>
          <p className="text-sm text-text-soft mt-1.5 leading-relaxed">
            Choose the consultation package that best fits your needs and stage
            of pregnancy.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-6">
        <p className="text-sm text-text-soft leading-relaxed max-w-xl">
          All packages include one-on-one consultations with Dr. Traub Mann.
          Book before your due date to secure your spot.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.tier}
              className={`bg-white rounded-xl overflow-hidden ${
                t.featured
                  ? "border-2 border-lav-mid"
                  : "border border-lav-deep/15"
              }`}
            >
              {t.featured && (
                <div className="bg-lav-deep text-white text-center text-[10.5px] tracking-wider uppercase py-1 font-medium font-sub">
                  Most Popular
                </div>
              )}
              <div className="bg-lav-pale px-5 pt-5 pb-4 border-b border-lav-deep/10">
                <div className="text-[10px] uppercase tracking-[0.15em] text-lav-mid font-medium font-sub mb-1">
                  {t.tier}
                </div>
                <h3 className="font-serif text-base font-medium text-text-dark leading-snug mb-2">
                  {t.name}
                </h3>
                <p className="text-xs text-text-soft italic leading-relaxed">
                  {t.tagline}
                </p>
              </div>
              <div className="px-5 pt-4 pb-3 border-b border-lav-deep/10">
                <div className="font-serif text-3xl text-lav-deep font-semibold">
                  {t.price}
                </div>
                <div className="text-[11px] text-text-soft mt-0.5">
                  {t.priceNote}
                </div>
              </div>
              <ul className="px-5 py-4">
                {t.features.map((f, i) => (
                  <li
                    key={i}
                    className="text-[12.5px] text-text-mid py-1.5 pl-5 relative leading-relaxed border-b border-lav-deep/[0.06] last:border-0"
                  >
                    <span className="absolute left-1 top-[11px] w-1.5 h-1.5 rounded-full bg-sage-mid" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="px-5 pb-5">
                <button className="w-full bg-lav-deep text-white rounded-md py-2.5 text-[12.5px] font-medium hover:bg-lav-mid transition-colors cursor-pointer">
                  Book This Package
                </button>
                {t.cancelNote && (
                  <p className="text-[10.5px] text-text-soft text-center mt-1.5 italic leading-relaxed">
                    {t.cancelNote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[13px] text-text-soft italic mt-6">
          Book your consultation now to secure a spot before your due date.
        </p>
      </section>
    </>
  );
}
