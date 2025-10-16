"use client";

import { useEffect } from "react";
import { pageview, trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";

export function Metrics() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (scrolled >= 0.5) {
        trackEvent("scroll_depth_50");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}


