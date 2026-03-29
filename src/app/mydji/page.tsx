"use client";

import TradingViewChart from "@/components/TradingViewChart";

export default function MyDJIPage() {
  return (
    <>
      <section className="bg-dark-bg text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">DJ:DJI</h1>
          <p className="text-white/60 text-sm">Dow Jones Industrial Average</p>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto" style={{ height: 700 }}>
          <TradingViewChart
            containerId="tradingview_dji"
            config={{
              width: 1280,
              height: 700,
              symbol: "DJ:DJI",
              interval: "D",
              timezone: "Australia/Perth",
              theme: "light",
              style: "1",
              locale: "en",
              toolbar_bg: "#f1f3f6",
              enable_publishing: false,
              withdateranges: true,
              hide_side_toolbar: false,
              allow_symbol_change: true,
              show_popup_button: true,
              popup_width: "1080",
              popup_height: "640",
            }}
          />
        </div>
      </section>
    </>
  );
}
