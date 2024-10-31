"use client";

import { useEffect, useState } from "react";

export default function usePageTransitionStatus(
  condition: boolean,
  delay: number,
) {
  const [isPageTransitioning, setIsPageTransitioning] = useState(true);

  useEffect(() => {
    if (condition) return;

    const timer = setTimeout(
      () => {
        setIsPageTransitioning(false);
      },

      delay,
    );

    return () => clearTimeout(timer);
  }, [condition, delay]);

  return isPageTransitioning;
}
