import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-lav-deep/15 p-8 max-w-2xl">
          <p className="text-sm text-text-mid leading-relaxed">
            Our full privacy policy will be available here shortly.
          </p>
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
