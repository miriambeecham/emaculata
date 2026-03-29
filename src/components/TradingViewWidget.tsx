"use client";

import { useEffect, useRef } from "react";

interface TradingViewWidgetProps {
  config: Record<string, unknown>;
  scriptSrc: string;
  copyrightHref: string;
  copyrightLabel: string;
}

export default function TradingViewWidget({
  config,
  scriptSrc,
  copyrightHref,
  copyrightLabel,
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = "calc(100% - 32px)";
    widgetDiv.style.width = "100%";
    containerRef.current.appendChild(widgetDiv);

    const copyright = document.createElement("div");
    copyright.className = "tradingview-widget-copyright";
    copyright.innerHTML = `<a href="${copyrightHref}" rel="noopener" target="_blank"><span class="blue-text">${copyrightLabel}</span></a> by TradingView`;
    containerRef.current.appendChild(copyright);

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.textContent = JSON.stringify(config);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [config, scriptSrc, copyrightHref, copyrightLabel]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ height: "100%", width: "100%" }}
    />
  );
}
