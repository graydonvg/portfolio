"use client";

import { CSSProperties, useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import {
  LOADING_SCREEN_TRANSITION_DELAY_IN_MS,
  LOADING_SCREEN_TRANSITION_DURATION_IN_MS,
  TOTAL_LOADING_SCREEN_TRANSITION_DURATION_IN_MS,
  TYPEWRITER_DURATION_IN_MS,
} from "@/lib/constants";
import useLoadingScreenStatus from "@/hooks/use-loading-screen-status";
import { useEarthLoading } from "@/context/earth-loading-context";

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
    `Loading Earth... ${loadingProgress.toFixed(2)}%`,
    "Hello, World!",
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-black"
      style={{
        mask: `radial-gradient(circle, transparent ${maskTransparency}%, black 0%)`,
      }}
    >
      <Typewriter textArray={text} isEarthLoading={isEarthLoading} />
    </div>
  );
}

function Typewriter({
  textArray,
  isEarthLoading,
}: {
  textArray: string[];
  isEarthLoading: boolean;
}) {
  const typewriterDuration = TYPEWRITER_DURATION_IN_MS / 1000;
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (isEarthLoading || textIndex === textArray.length - 1) return;

    setTextIndex((prevIndex) => prevIndex + 1);
  }, [textIndex, textArray.length, isEarthLoading]);

  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-lg text-muted sm:text-3xl">
      {/* Setting the key to textIndex forces React to treat the p element as a new element on each text change, which effectively resets the CSS animation. */}
      <p
        key={textIndex}
        className="typewriter"
        style={
          {
            "--typewriter-duration": `${typewriterDuration}s`,
          } as CSSProperties
        }
      >
        {textArray[textIndex]}
      </p>
    </div>
  );
}
