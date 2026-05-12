"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "When should I start booking appointments?",
    a: "You can book appointments at any point during your pregnancy, but it would be best to book your first appointment after your anatomy scan around 20 weeks. You can either schedule appointments when questions arise or schedule them out every couple of weeks.",
  },
  {
    q: "Will I have access to email you with questions after our consultation?",
    a: "Tier 1 — no email access. Tier 2 — limited email access (2 emails per appointment). Tier 3 — unlimited email access.",
  },
  {
    q: "What payment options do I have for consultations?",
    a: "Self-pay by credit card (HSA/FSA accepted if your insurance allows). We do not accept insurance. Credit card fees apply.",
  },
  {
    q: "When will I pay for each consultation?",
    a: "Your credit card information will be added to the EMR system and you will be billed at the time of each consultation.",
  },
  {
    q: "Will I get a superbill to submit to insurance for reimbursement?",
    a: "Superbills will be emailed to you after each visit. Please check with your insurance company if they will reimburse you.",
  },
  {
    q: "What if I choose Tier 2 or 3 and do not want to attend all sessions?",
    a: "You will be billed for one additional full session. For example, if you sign up for Tier 2 and attend one session and decide you do not wish to continue for the additional two sessions, you will be billed $266.67 for the equivalent of one session.",
  },
  {
    q: "If I have my baby prior to completing my sessions, will I be billed?",
    a: "You will not be billed for additional sessions due to early birth, but will need to provide documentation confirming delivery.",
  },
  {
    q: "What percentage of babies go to the NICU after birth?",
    a: "3.8–6% of full-term babies (39+ weeks) are admitted to the NICU in the United States. In Georgia, 9.8% of all births go to the NICU.",
  },
  {
    q: "What are the reasons my baby could go to the NICU?",
    a: "Some examples include prematurity, low birth weight, feeding issues, blood sugar issues, breathing issues, temperature instability, infection, congenital malformations (known and unknown), jaundice, and other birth complications.",
  },
  {
    q: "What percentage of births are delivered via cesarean section in the United States?",
    a: "32.3%",
  },
  {
    q: "What percentage of planned vaginal deliveries end up with an emergency or urgent cesarean section?",
    a: "15–25%",
  },
  {
    q: "What are the reasons my planned vaginal delivery might turn into a cesarean section?",
    a: "Failed induction of labor, fetal distress, malposition (baby not head down), or first-time mothers who are 35 or older with increased risk factors.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="max-w-3xl space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-lav-deep/15 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm text-text-dark font-medium leading-relaxed">
                    {faq.q}
                  </span>
                  <span
                    className="text-[#6B5BA8] text-xl leading-none mt-0.5 shrink-0 transition-transform duration-200"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-sm text-text-mid leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-text-soft mt-6 italic">
          Sources: March of Dimes and Centers for Disease Control
        </p>

        <div className="mt-6 pt-4 border-t border-lav-deep/10 max-w-3xl">
          <Link
            href="/resources"
            className="text-[12.5px] text-lav-deep font-medium hover:underline"
          >
            &larr; Back to Patient Resources
          </Link>
        </div>
      </section>
    </>
  );
}
