export default function FormsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-lav-pale to-sage-pale px-6 py-10 border-b border-lav-deep/15">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-text-dark font-medium">
            Patient Forms
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-lav-deep/15 p-8 max-w-2xl">
          <p className="text-sm text-text-mid leading-relaxed mb-6">
            Please read these forms prior to signing up for your first session.
            You will acknowledge that you have read and understand these forms
            when signing up.
          </p>
          <a
            href="https://prenatalconsulting.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6B5BA8] hover:bg-[#5a4a97] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </>
  );
}
