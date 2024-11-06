"use client";

import { useEarthLoading } from "@/context/earth-loading-context";
import { TYPEWRITER_DURATION_IN_SEC } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function usePreloaderStatus() {
  const { isEarthLoading } = useEarthLoading();
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsTypewriterComplete(true);
    }, TYPEWRITER_DURATION_IN_SEC * 1000);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (isTypewriterComplete && !isEarthLoading) {
      setIsLoading(false);
    }
  }, [isTypewriterComplete, isEarthLoading]);

  return isLoading;
}
