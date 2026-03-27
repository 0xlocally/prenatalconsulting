const resources = [
  {
    title: "Patient Forms",
    description:
      "Complete your intake forms before your appointment to make the most of your consultation time. Forms can be downloaded and returned via email or brought to your session.",
    link: "Download patient forms →",
  },
  {
    title: "Privacy Policy",
    description:
      "Your health information is private and protected. Review our full HIPAA-compliant privacy policy to understand how we handle and safeguard your personal data.",
    link: "Read privacy policy →",
    id: "privacy",
  },
  {
    title: "What to Expect",
    description:
      "Not sure what to bring or how to prepare? Our prep guide walks you through everything to make your session as productive as possible.",
    link: "View preparation guide →",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Have questions about our services or process? Browse our FAQ for quick answers to the most common questions we receive.",
    link: "View FAQs →",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            Patient Resources
          </h1>
          <p className="text-sm text-text-soft mt-1.5 leading-relaxed">
            Everything you need to prepare for your consultation and your
            journey ahead
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((r) => (
            <div
              key={r.title}
              id={r.id}
              className="bg-white rounded-xl border border-lav-deep/15 p-6"
            >
              <h3 className="font-serif text-[17px] text-text-dark font-medium mb-2">
                {r.title}
              </h3>
              <p className="text-[13px] text-text-soft leading-relaxed mb-3">
                {r.description}
              </p>
              <span className="text-[12.5px] text-lav-deep font-medium cursor-pointer underline decoration-lav-light hover:decoration-lav-deep transition-colors">
                {r.link}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
