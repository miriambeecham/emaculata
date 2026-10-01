"use client";

import TradingViewWidget from "@/components/TradingViewWidget";

export default function MyVixPage() {
  return (
    <>
      <section className="bg-dark-bg text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">VIX 200</h1>
          <p className="text-white/60 text-sm">
            ASX 200 VIX, AUD/USD, Dow Futures
          </p>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <TradingViewWidget
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
            copyrightHref="https://www.tradingview.com/markets/indices/"
            copyrightLabel="Indices"
            config={{
              width: "100%",
              height: "",
              symbolsGroups: [
                {
                  name: "Indices",
                  originalName: "Indices",
                  symbols: [
                    {
                      name: "CBOT_MINI:YMM2020",
                      displayName: "Futures",
                    },
                    {
                      name: "ASX:XVI",
                      displayName: "Volatility",
                    },
                    {
                      name: "FX:AUDUSD",
                      displayName: "Aus $$ to US $$",
                    },
                  ],
                },
              ],
              colorTheme: "light",
              isTransparent: false,
              locale: "en",
            }}
          />
        </div>
      </section>
    </>
  );
}
