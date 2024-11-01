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
  const [maskTransparency, setMaskTransparency] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (isLoadingScreenVisible) {
      window.scrollTo(0, 0);
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

    function adjustMaskTransparency(duration: number) {
      const interval = 50; // Update every 50 milliseconds
      const totalSteps = duration / interval; // Total steps based on the duration
      const increment = Math.ceil(100 / totalSteps); // Calculate how much to increment
      let currentTransparency = 0;

      const counterInterval = setInterval(() => {
        currentTransparency += increment;

        if (currentTransparency >= 100) {
          currentTransparency = 100; // Ensure it doesn't go above 100
          clearInterval(counterInterval); // Stop the interval when reaching 100
        }

        setMaskTransparency(currentTransparency);
      }, interval);
    }

    const timer = setTimeout(() => {
      adjustMaskTransparency(LOADING_SCREEN_TRANSITION_DURATION_IN_MS);
    }, LOADING_SCREEN_TRANSITION_DELAY_IN_MS);

    return () => clearTimeout(timer);
  }, [isEarthLoading]);

  if (!isLoadingScreenVisible) return null;

  const text = [
    `Loading Earth... ${loadingProgress.toFixed(0)}%`,
    "Hello, World!",
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black"
      style={{
        mask: `radial-gradient(circle, transparent ${maskTransparency}%, black 0%)`,
      }}
    >
      <Typewriter textArray={text} isEarthLoading={isEarthLoading} />
    </div>
  );
}
