import Link from "next/link";

export default function WhatToExpectPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            What to Expect
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-lav-deep/15 p-8 max-w-3xl">
          <p className="text-sm text-text-mid leading-relaxed mb-4">
            Sessions will be based on patient reporting. If you have specific
            concerns about your pregnancy or baby, or if you need information
            from your OB/GYN or MFM, please have that ready prior to your
            consultation.
          </p>
          <p className="text-sm text-text-mid leading-relaxed mb-6">
            During each session, I will provide helpful information specific to
            your pregnancy, create targeted questions that you can ask your
            providers, and share general information that every parent should
            know going into delivery. I will also help prepare you for the days
            following the birth, either in the mother-baby unit or in the
            neonatal intensive care unit (NICU).
          </p>

          <h2 className="font-serif text-lg text-text-dark font-medium mb-3">
            Please have answers to these questions ready before your
            consultation:
          </h2>
          <ul className="space-y-2.5">
            {[
              "What is your due date?",
              "Are you pregnant with a single baby or twins, triplets, etc.?",
              "Are there any known complications or risks for you (the mother) during pregnancy and/or during the birthing process?",
              "Are there any known complications for your baby?",
              "What questions and concerns do you have?",
            ].map((q) => (
              <li
                key={q}
                className="text-sm text-text-mid pl-5 relative leading-relaxed"
              >
                <span className="absolute left-1 top-[9px] w-1.5 h-1.5 rounded-full bg-[#6B5BA8]" />
                {q}
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-lav-deep/10">
            <Link
              href="/resources"
              className="text-[12.5px] text-lav-deep font-medium hover:underline"
            >
              &larr; Back to Patient Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
