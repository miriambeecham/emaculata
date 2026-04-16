import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Emaculata",
  description: "Get in touch with Emaculata to discuss your climate risk needs.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg text-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch to discuss how Emaculata can help your business.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-forest mb-4">
            Ready to talk climate risk?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Send us an email and we&apos;ll set up a time to discuss how we can
            help mitigate the risks you face.
          </p>
          <a
            href="mailto:emaculataconsulting@gmail.com?subject=Booking%20Request"
            className="inline-block bg-forest-light text-dark-bg px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest hover:text-white transition-colors mb-6"
          >
            Book Appointment
          </a>
          <p className="text-gray-500 text-sm">
            Or email us directly at{" "}
            <a
              href="mailto:emaculataconsulting@gmail.com"
              className="text-forest underline hover:text-forest-light"
            >
              emaculataconsulting@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
