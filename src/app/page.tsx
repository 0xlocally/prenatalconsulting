import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-sage-deep font-medium font-sub mb-3">
              Expert Prenatal Guidance — Atlanta, Georgia
            </p>
            <h1 className="font-serif text-4xl md:text-[42px] font-medium text-text-dark leading-tight mb-4 max-w-lg">
              Your journey to <em className="text-lav-deep italic">confident</em>{" "}
              parenthood starts here
            </h1>
            <p className="text-[15px] text-text-soft leading-relaxed max-w-md mb-8">
              Personalized prenatal consulting with a board-certified physician,
              designed to give you clarity, comfort, and a plan you can trust.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="bg-lav-deep text-white rounded-md px-6 py-3 text-sm font-medium hover:bg-lav-mid transition-colors cursor-pointer">
                Book a Consultation
              </button>
              <Link
                href="/services"
                className="bg-transparent text-lav-deep border-[1.5px] border-lav-deep rounded-md px-6 py-3 text-sm font-medium hover:bg-lav-deep hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="Prenatal Consulting of Georgia"
              width={300}
              height={300}
              className="w-[280px] h-auto drop-shadow-[0_8px_24px_rgba(107,91,168,0.15)]"
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

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
        <div className="bg-lav-pale rounded-xl p-8 border border-lav-light/50">
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
      </section>
    </>
  );
}
