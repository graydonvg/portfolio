"use client";

import { useEffect, useState } from "react";

export default function useLoadingScreenStatus(
  condition: boolean,
  delay: number,
) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (condition) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [condition, delay]);

  return isVisible;
}
