"use client";

import TradingViewWidget from "@/components/TradingViewWidget";

export default function MyDJIVixPage() {
  return (
    <>
      <section className="bg-dark-bg text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">VIX</h1>
          <p className="text-white/60 text-sm">VIX (Pepperstone)</p>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto" style={{ height: 700 }}>
          <TradingViewWidget
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
            copyrightHref="https://www.tradingview.com/symbols/PEPPERSTONE-VIX/"
            copyrightLabel="VIX chart"
            config={{
              allow_symbol_change: true,
              calendar: false,
              details: false,
              hide_side_toolbar: true,
              hide_top_toolbar: false,
              hide_legend: false,
              hide_volume: false,
              hotlist: false,
              interval: "D",
              locale: "en",
              save_image: true,
              style: "1",
              symbol: "PEPPERSTONE:VIX",
              theme: "light",
              timezone: "Australia/Perth",
              backgroundColor: "#ffffff",
              gridColor: "rgba(46, 46, 46, 0.06)",
              watchlist: [],
              withdateranges: false,
              compareSymbols: [],
              studies: [],
              autosize: true,
            }}
          />
        </div>
      </section>
    </>
  );
}
