"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) {
      setSubmitted(true);
      return;
    }

    const res = await fetch("https://formspree.io/f/xrerevdr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
    setSubmitting(false);
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
                  {/* Honeypot - hidden from real users, bots will fill it */}
                  <div className="absolute opacity-0 -z-10" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
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
                      name="name"
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
                      name="email"
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
                      name="message"
                      rows={10}
                      placeholder="How can we help?"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent resize-y"
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-forest-light text-dark-bg py-3 px-6 rounded-lg font-semibold hover:bg-forest hover:text-white transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Book Appointment"}
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
