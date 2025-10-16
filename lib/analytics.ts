export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

export function isGaEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

export function pageview(url: string) {
  if (!isGaEnabled()) return;
  // @ts-expect-error gtag on window when GA is enabled
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export type AnalyticsEvent =
  | "view_hero"
  | "click_primary_cta"
  | "submit_lead"
  | "view_pricing"
  | "view_faq"
  | "scroll_depth_50";

export function trackEvent(action: AnalyticsEvent, params?: Record<string, unknown>) {
  if (!isGaEnabled()) return;
  // @ts-expect-error gtag on window when GA is enabled
  window.gtag("event", action, params || {});
}


