const hours = [
  { day: "Monday", time: "9:00 am \u2013 5:00 pm" },
  { day: "Tuesday", time: "9:00 am \u2013 5:00 pm" },
  { day: "Wednesday", time: "9:00 am \u2013 5:00 pm" },
  { day: "Thursday", time: "9:00 am \u2013 5:00 pm" },
  { day: "Friday", time: "9:00 am \u2013 3:00 pm" },
  { day: "Saturday \u2013 Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            Contact Us
          </h1>
          <p className="text-sm text-text-soft mt-1.5 leading-relaxed">
            We&apos;d love to hear from you — reach out to schedule or ask any
            questions
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Get in Touch */}
          <div className="bg-white rounded-xl border border-lav-deep/15 p-6">
            <h3 className="font-serif text-lg text-text-dark font-medium mb-4">
              Get in Touch
            </h3>
            <div className="flex gap-3 mb-3 text-[13px] text-text-mid items-start">
              <span className="text-text-soft text-xs min-w-[60px]">Email</span>
              <a
                href="mailto:terri@prenatalconsultingga.com"
                className="text-lav-deep font-medium hover:underline"
              >
                terri@prenatalconsultingga.com
              </a>
            </div>
            <div className="flex gap-3 mb-3 text-[13px] text-text-mid items-start">
              <span className="text-text-soft text-xs min-w-[60px]">
                Location
              </span>
              <span>Atlanta, Georgia</span>
            </div>
            <div className="mt-4 bg-sage-pale rounded-lg p-3.5 text-[12.5px] text-sage-deep leading-relaxed border border-sage-light/50">
              Clicking the email above opens your email provider with Dr.
              Mann&apos;s address pre-filled. To request an appointment, use the
              button at the top of any page.
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-xl border border-lav-deep/15 p-6">
            <h3 className="font-serif text-lg text-text-dark font-medium mb-4">
              Hours of Operation
            </h3>
            <table className="w-full text-[13px]">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day}>
                    <td className="py-1.5 text-text-soft border-b border-lav-deep/10">
                      {h.day}
                    </td>
                    <td className="py-1.5 text-text-mid border-b border-lav-deep/10">
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11.5px] text-text-soft mt-3 italic">
              Hours subject to change. Consultations by appointment only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
