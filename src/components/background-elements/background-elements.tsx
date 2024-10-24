"use client";

import { useEffect, useState } from "react";
import LightBeams from "./light-beams";
import ShootingStars from "./shooting-stars/shooting-stars";
import StarsBackground from "./stars-background";

export default function BackgroundElements() {
  const techSection =
    typeof window !== "undefined"
      ? document.querySelector("#techSection")
      : null;
  const [distanceFromBottom, setDistanceFromBottom] = useState("100%");
  const [isInView, setIsInView] = useState(false);

  console.log(isInView);
  console.log(distanceFromBottom);

  useEffect(() => {
    // Use IntersectionObserver to remove shooting star once it exits the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0 }, // Trigger when the element is no longer visible at all.
    );

    if (techSection) {
      observer.observe(techSection);
    }

    return () => {
      if (techSection) {
        observer.unobserve(techSection);
      }
    };
  }, [techSection]);

  useEffect(() => {
    if (!isInView) return;

    const calculateDistanceFromBottom = () => {
      if (!techSection) return;

      const rect = techSection.getBoundingClientRect();
      // const viewportHeight = window.innerHeight;

      // Distance between the bottom of the element and the top of the viewport
      const distance = 0 + rect.bottom;
      setDistanceFromBottom(`${distance}px`);
    };

    // Calculate on scroll and resize
    window.addEventListener("scroll", calculateDistanceFromBottom);
    window.addEventListener("resize", calculateDistanceFromBottom);

    calculateDistanceFromBottom(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", calculateDistanceFromBottom);
      window.removeEventListener("resize", calculateDistanceFromBottom);
    };
  }, [techSection, isInView]);

  return (
    <>
      <LightBeams />
      <div
        style={{
          clipPath: `inset(0 0 calc(100% - ${distanceFromBottom}) 0`,
        }}
        className="pointer-events-none fixed left-0 top-0 -z-50 h-full w-full overflow-hidden"
      >
        <StarsBackground />
        <ShootingStars />
      </div>
    </>
  );
}
