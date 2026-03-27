import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EDE8F8] to-[#EAF2EB] py-20 px-10">
        {/* Content — two column: text left, logo right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: hero copy */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#5A7A63] font-sub mb-3">
              Expert Prenatal Guidance — Atlanta, Georgia
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#2D2340] leading-[1.15] mb-5">
              Your journey to{" "}
              <em className="text-[#6B5BA8] italic">confident</em>{" "}
              parenthood starts here
            </h1>
            <p className="text-base text-[#7A6E9A] leading-relaxed mb-8 max-w-md">
              Personalized prenatal consulting with a board-certified physician,
              designed to give you clarity, comfort, and a plan you can trust.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="bg-[#6B5BA8] hover:bg-[#5a4a97] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#6B5BA8] text-[#6B5BA8] hover:bg-[#EDE8F8] px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right: logo — frameless, blend mode kills white bg */}
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Prenatal Consulting of Georgia"
              style={{
                width: "380px",
                height: "auto",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-lav-deep/15 divide-x divide-lav-deep/15">
        <Link
          href="/providers"
          className="bg-white p-7 hover:bg-lav-pale transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-lav-pale flex items-center justify-center mb-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="3.5" stroke="#6B5BA8" strokeWidth="1.4" />
              <path
                d="M2.5 15.5c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5"
                stroke="#6B5BA8"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="font-serif text-[17px] font-medium text-text-dark mb-1.5">
            Meet Your Provider
          </h3>
          <p className="text-[13px] text-text-soft leading-relaxed">
            Dr. Terri Traub Mann, MD brings decades of obstetric expertise to
            every consultation.
          </p>
          <span className="inline-block mt-3 text-xs text-lav-deep font-medium group-hover:underline">
            View bio →
          </span>
        </Link>

        <Link
          href="/services"
          className="bg-white p-7 hover:bg-lav-pale transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-lav-pale flex items-center justify-center mb-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect
                x="2.5"
                y="2.5"
                width="13"
                height="13"
                rx="2"
                stroke="#6B5BA8"
                strokeWidth="1.4"
              />
              <path
                d="M6 9h6M9 6v6"
                stroke="#6B5BA8"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="font-serif text-[17px] font-medium text-text-dark mb-1.5">
            Our Services
          </h3>
          <p className="text-[13px] text-text-soft leading-relaxed">
            Three consultation tiers tailored to your risk level, from
            first-time parents to high-risk pregnancies.
          </p>
          <span className="inline-block mt-3 text-xs text-lav-deep font-medium group-hover:underline">
            See pricing →
          </span>
        </Link>

        <Link
          href="/resources"
          className="bg-white p-7 hover:bg-lav-pale transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-lav-pale flex items-center justify-center mb-3">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect
                x="3.5"
                y="1.5"
                width="11"
                height="15"
                rx="1.5"
                stroke="#6B5BA8"
                strokeWidth="1.4"
              />
              <path
                d="M6.5 6h5M6.5 9h5M6.5 12h3"
                stroke="#6B5BA8"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="font-serif text-[17px] font-medium text-text-dark mb-1.5">
            Patient Resources
          </h3>
          <p className="text-[13px] text-text-soft leading-relaxed">
            Download patient forms, review our privacy policy, and access
            preparation materials.
          </p>
          <span className="inline-block mt-3 text-xs text-lav-deep font-medium group-hover:underline">
            Access forms →
          </span>
        </Link>
      </section>

      {/* About Section — subtle sage tint background */}
      <section className="bg-[#F4F8F5] py-16 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-[26px] text-text-dark font-medium mb-3">
              Why Prenatal Consulting of Georgia?
            </h2>
            <p className="text-sm text-text-soft leading-relaxed mb-2">
              Pregnancy brings countless questions, and navigating them alone can
              feel overwhelming. Our concierge-style consulting service pairs you
              with a board-certified OB/GYN to create a personalized roadmap for
              your pregnancy and newborn journey.
            </p>
            <p className="text-sm text-text-soft leading-relaxed">
              Whether you&apos;re a first-time parent seeking reassurance or navigating
              a high-risk pregnancy, we meet you where you are with evidence-based
              guidance and genuine compassion.
            </p>
          </div>
          {/* Stats box — sage instead of lavender */}
          <div className="bg-[#EAF2EB] border border-[#B8D4BC] rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "20+", label: "Years Experience" },
                { num: "3", label: "Service Tiers" },
                { num: "1:1", label: "Consultations" },
                { num: "ATL", label: "Based in Georgia" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl text-lav-deep font-semibold leading-none">
                    {stat.num}
                  </div>
                  <div className="text-[11px] text-text-soft mt-1 uppercase tracking-wider font-sub">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
