"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to a form backend (e.g., Formspree, Netlify Forms, or custom API)
    setSubmitted(true);
  }

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
        <div className="max-w-5xl mx-auto">
          <div className="max-w-lg mx-auto">
            <div>
              {submitted ? (
                <div className="bg-forest-light/10 border border-forest-light rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-forest mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been received. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="your-name"
                      placeholder="Name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="your-email"
                      placeholder="Email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="your-message"
                      rows={10}
                      placeholder="How can we help?"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forest-light text-dark-bg py-3 px-6 rounded-lg font-semibold hover:bg-forest hover:text-white transition-colors"
                  >
                    Book Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
