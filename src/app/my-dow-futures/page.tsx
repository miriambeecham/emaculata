import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dow Futures - Emaculata",
  description: "DJIA Futures links.",
};

export default function MyDowFuturesPage() {
  return (
    <>
      <section className="bg-dark-bg text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Dow Futures</h1>
          <p className="text-white/60 text-sm">DJIA Futures</p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <a
            href="https://www.tradingview.com/chart/NZHOjNKG/?symbol=DJ%3ADJI&utm_source=www.tradingview.com&utm_medium=widget&utm_campaign=chart&utm_term=DJ%3ADJI"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-lg p-6 hover:border-forest hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-forest mb-2">
              ONE CHART TO RULE THEM ALL
            </h2>
            <p className="text-sm text-forest-light">
              Open on TradingView &rarr;
            </p>
          </a>
          <a
            href="https://www.tradingview.com/symbols/DJIA1!/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-lg p-6 hover:border-forest hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-forest mb-2">
              DJIA FUTURES
            </h2>
            <p className="text-sm text-forest-light">
              Open on TradingView &rarr;
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
