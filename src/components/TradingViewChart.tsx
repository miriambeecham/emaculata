"use client";

import { useEffect, useRef } from "react";

interface TradingViewChartProps {
  containerId: string;
  config: Record<string, unknown>;
}

export default function TradingViewChart({
  containerId,
  config,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as unknown as Record<string, unknown>).TradingView !== "undefined") {
        new (window as unknown as Record<string, { widget: new (config: Record<string, unknown>) => void }>).TradingView.widget({
          ...config,
          container_id: containerId,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [containerId, config]);

  return (
    <div className="tradingview-widget-container">
      <div id={containerId} />
      <div className="tradingview-widget-copyright text-sm text-gray-500 mt-2">
        Chart by{" "}
        <a
          href="https://www.tradingview.com/"
          rel="noopener"
          target="_blank"
          className="text-blue-500"
        >
          TradingView
        </a>
      </div>
    </div>
  );
}
