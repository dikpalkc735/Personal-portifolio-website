"use client";

import { useEffect } from "react";

declare global { interface Window { dataLayer?: Record<string, unknown>[] } }

export function trackEvent(event: string, details: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...details });
  window.dispatchEvent(new CustomEvent("marketing-analytics", { detail: { event, ...details } }));
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>("[data-event]");
      if (element?.dataset.event) trackEvent(element.dataset.event, { label: element.dataset.eventLabel ?? element.textContent?.trim() });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

export function PageViewTracker({ event, value }: { event: string; value: string }) {
  useEffect(() => { trackEvent(event, { value }); }, [event, value]);
  return null;
}
