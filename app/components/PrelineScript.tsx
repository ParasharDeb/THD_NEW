"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Only Preline, no jQuery/lodash/noUiSlider/etc.
async function loadPreline() {
  return import("preline/dist/index.js");
}

export default function PrelineScript() {
  const path = usePathname();

  // Load Preline once on mount
  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();
    };

    initPreline();
  }, []);

  // Re-run autoInit when the route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        (window as any).HSStaticMethods &&
        typeof (window as any).HSStaticMethods.autoInit === "function"
      ) {
        (window as any).HSStaticMethods.autoInit();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [path]);

  return null;
}
