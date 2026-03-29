import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internal - Emaculata",
  description: "Internal financial dashboard.",
};

const pages = [
  { href: "/myxjo", title: "XJO", description: "S&P/ASX 200 Index" },
  { href: "/myvix", title: "VIX 200", description: "ASX 200 VIX, AUD/USD, Dow Futures" },
  { href: "/my-dow-futures", title: "Dow Futures", description: "DJIA Futures" },
  { href: "/mydji", title: "DJI", description: "Dow Jones Industrial Average" },
  { href: "/mydjivix", title: "DJI VIX", description: "VIX (Pepperstone)" },
];

export default function InternalPage() {
  return (
    <>
      <section className="bg-dark-bg text-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Internal</h1>
          <p className="text-xl text-white/80">Financial Dashboard</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block border border-gray-200 rounded-lg p-6 hover:border-forest hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-forest mb-2">
                  {page.title}
                </h2>
                <p className="text-gray-600">{page.description}</p>
                <p className="text-sm text-forest-light mt-3">
                  View chart &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
