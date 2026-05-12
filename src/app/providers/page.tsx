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
        <div className="bg-white rounded-xl border border-lav-deep/15 overflow-hidden grid grid-cols-1 md:grid-cols-[220px_1fr]">
          {/* Photo */}
          <div className="bg-gradient-to-b from-lav-pale to-lav-light flex flex-col items-center justify-center py-8 px-4 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/terri-headshot.jpg"
              alt="Dr. Terri Traub Mann"
              className="w-36 h-36 rounded-full object-cover object-[center_25%] border-3 border-white shadow-md"
            />
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
              Founder · Neonatologist &amp; Pediatrician
            </p>
            <p className="text-[13.5px] text-text-soft leading-relaxed mb-3">
              Originally from South Africa, my family and I moved to Atlanta
              when I was 9 years old. I went on to earn my Bachelor of Science
              in Biology and Psychology from the University of Georgia. I then
              completed medical school at the Mercer University School of
              Medicine in Savannah, Georgia.
            </p>
            <p className="text-[13.5px] text-text-soft leading-relaxed mb-3">
              Upon graduating, I relocated to Washington, DC, where I completed
              both my pediatric residency and neonatology fellowship at
              Children&apos;s National Hospital and The George Washington
              University Hospital. I began my medical career as an attending
              physician at Johns Hopkins Children&apos;s Center in Baltimore, MD
              in their level IV NICU.
            </p>
            <p className="text-[13.5px] text-text-soft leading-relaxed mb-3">
              In 2021, my husband and I returned to Atlanta, where we have built
              our life and family. Outside of work, I enjoy spending time
              outdoors, cooking and baking — especially if it involves
              chocolate — and spending time with my husband, 2 sons, and our
              dog, Molly.
            </p>
            <p className="text-[13.5px] text-text-soft leading-relaxed mb-5">
              As a mother, pediatrician, and specialist, caring for both
              premature and full-term infants, as well as supporting their
              families during critical moments, is a profound privilege and one
              that I approach with deep commitment, empathy, and compassion.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                "Board Certified Neonatologist",
                "Pediatrician",
                "NICU Specialist",
                "High-Risk Pregnancy",
                "Johns Hopkins Trained",
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
