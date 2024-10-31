"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import useEarthLoadingProgress from "@/hooks/use-earth-loading-progress";
import {
  FIRST_TYPEWRITER_DURATION,
  PAGE_TRANSITION_DELAY,
  PAGE_TRANSITION_DURATION,
  TOTAL_TYPEWRITER_DURATION,
} from "@/lib/constants";
import usePageTransitionStatus from "@/hooks/use-page-transition-status";

export default function PageTransition() {
  const { isEarthLoading, loadingProgress } = useEarthLoadingProgress();
  const transitionDelay =
    TOTAL_TYPEWRITER_DURATION +
    PAGE_TRANSITION_DELAY +
    PAGE_TRANSITION_DURATION;
  const isPageTransitioning = usePageTransitionStatus(
    isEarthLoading,
    transitionDelay,
  );
  const [maskTransparency, setMaskTransparency] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (isEarthLoading) return;

    if (isPageTransitioning) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    }

    if (!isPageTransitioning) {
      lenis?.start();
      document.body.style.overflow = "visible";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "visible";
    };
  }, [isPageTransitioning, lenis, isEarthLoading]);

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
      adjustMaskTransparency(PAGE_TRANSITION_DURATION);
    }, TOTAL_TYPEWRITER_DURATION + PAGE_TRANSITION_DELAY);

    return () => clearTimeout(timer);
  }, [isEarthLoading]);

  if (!isPageTransitioning) return null;

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
      <Typewriter textArray={text} incrementTextArrayIndex={isEarthLoading} />
    </div>
  );
}

function Typewriter({
  textArray,
  incrementTextArrayIndex,
}: {
  textArray: string[];
  incrementTextArrayIndex: boolean;
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [typewriterAnimationCompleted, setTypewriterAnimationCompleted] =
    useState(false);

  useEffect(() => {
    if (!typewriterAnimationCompleted || textIndex === textArray.length - 1)
      return;

    setTextIndex((prevIndex) => prevIndex + 1);
  }, [
    incrementTextArrayIndex,
    typewriterAnimationCompleted,
    textIndex,
    textArray.length,
  ]);

  useEffect(() => {
    if (textIndex === textArray.length - 1) return;

    const timeoutId = setTimeout(() => {
      setTypewriterAnimationCompleted(true);
    }, FIRST_TYPEWRITER_DURATION);

    return () => clearTimeout(timeoutId);
  }, [textIndex, textArray.length]);

  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-lg text-muted sm:text-3xl">
      {/* Setting the key to textIndex forces React to treat the p element as a new element on each text change, which effectively resets the CSS animation. */}
      <p key={textIndex} className="typewriter">
        {textArray[textIndex]}
      </p>
    </div>
  );
}
