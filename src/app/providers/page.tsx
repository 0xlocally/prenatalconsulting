export default function ProvidersPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            Our Provider
          </h1>
          <p className="text-sm text-text-soft mt-1.5 leading-relaxed">
            Meet the physician behind Prenatal Consulting of Georgia
          </p>
        </div>
      </section>

      {/* Provider Card */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-lav-deep/15 overflow-hidden grid grid-cols-1 md:grid-cols-[200px_1fr]">
          {/* Photo Placeholder */}
          <div className="bg-gradient-to-b from-lav-pale to-lav-light flex flex-col items-center justify-center py-8 px-4 gap-2">
            <div className="w-20 h-20 rounded-full bg-lav-mid flex items-center justify-center font-serif text-2xl text-white font-semibold">
              TTM
            </div>
            <div className="text-xs text-lav-deep text-center font-medium">
              Dr. Terri Traub Mann
            </div>
          </div>

          {/* Info */}
          <div className="p-8">
            <h2 className="font-serif text-[22px] text-text-dark font-medium mb-1">
              Terri Traub Mann, MD
            </h2>
            <p className="text-[11px] text-sage-deep uppercase tracking-[0.14em] font-medium font-sub mb-4">
              Founder &amp; Prenatal Consultant
            </p>
            <p className="text-[13.5px] text-text-soft leading-relaxed mb-4">
              Dr. Terri Traub Mann is a board-certified OB/GYN with a passion
              for empowering expectant families through education and
              personalized guidance. Drawing on her extensive experience in
              obstetrics, Dr. Mann founded Prenatal Consulting of Georgia to fill
              a critical gap in maternity care — giving families the one-on-one
              time and expert attention they deserve outside of a traditional
              clinical setting.
            </p>
            <p className="text-[13.5px] text-text-soft leading-relaxed mb-5">
              Her consultations cover everything from birth plan development and
              delivery room preparation to newborn care, feeding, and high-risk
              pregnancy support, all tailored to each family&apos;s unique
              situation and goals.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                "Board Certified OB/GYN",
                "Prenatal Specialist",
                "Newborn Care",
                "High-Risk Pregnancy",
                "Atlanta, GA",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-sage-pale text-sage-deep rounded-full px-3 py-1 text-[11.5px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
