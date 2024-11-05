"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import {
  LOADING_SCREEN_TRANSITION_DELAY_IN_MS,
  LOADING_SCREEN_TRANSITION_DURATION_IN_MS,
  TOTAL_LOADING_SCREEN_TRANSITION_DURATION_IN_MS,
} from "@/lib/constants";
import useLoadingScreenStatus from "@/hooks/use-loading-screen-status";
import { useEarthLoading } from "@/context/earth-loading-context";
import Typewriter from "./typewriter";

export default function LoadingScreen() {
  const { isEarthLoading, loadingProgress } = useEarthLoading();
  const isLoadingScreenVisible = useLoadingScreenStatus(
    isEarthLoading,
    TOTAL_LOADING_SCREEN_TRANSITION_DURATION_IN_MS,
  );
  const [maskHoleSize, setMaskHoleSize] = useState(0);
  const [displayText, setDisplayText] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    if (isLoadingScreenVisible) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    }

    if (!isLoadingScreenVisible) {
      lenis?.start();
      document.body.style.overflow = "visible";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "visible";
    };
  }, [isLoadingScreenVisible, lenis]);

  useEffect(() => {
    if (isEarthLoading) return;

    function adjustMaskHoleSize(duration: number) {
      const maxPercentage = 100;
      const interval = 16.67; // Update every 16.67 milliseconds for 60fps
      const totalSteps = duration / interval;
      const incrementPercentage = Math.ceil(maxPercentage / totalSteps);
      let currentPercentage = 0;

      const incrementInterval = setInterval(() => {
        currentPercentage += incrementPercentage;

        if (currentPercentage >= maxPercentage) {
          currentPercentage = maxPercentage; // Ensure it doesn't go above maxPercentage
          clearInterval(incrementInterval); // Stop the interval when reaching maxPercentage
        }

        setMaskHoleSize(currentPercentage);
      }, interval);
    }

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      adjustMaskHoleSize(LOADING_SCREEN_TRANSITION_DURATION_IN_MS);
      setDisplayText(false);
    }, LOADING_SCREEN_TRANSITION_DELAY_IN_MS);

    return () => clearTimeout(timeoutId);
  }, [isEarthLoading]);

  if (!isLoadingScreenVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-black"
      style={{
        mask: `radial-gradient(circle, transparent ${maskHoleSize}%, black 0%)`,
      }}
    >
      {displayText && (
        <Typewriter
          loadingProgress={loadingProgress}
          isEarthLoading={isEarthLoading}
        />
      )}
    </div>
  );
}
