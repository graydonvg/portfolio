"use client";

import { wait } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type ShootingStar = {
  id: number;
  top: string;
  left: string;
  size: string;
  rotation: string;
  tailHeight: string;
  tailWidth: string;
  travelDistance: string;
  animationDuration: string;
};

function calculateRandomAngleTowardsCenter(x: number, y: number) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Center point of the viewport
  const centerX = viewportWidth / 2;
  const centerY = viewportHeight / 2;

  // Calculate the angle in radians towards the center
  const angleRadians = Math.atan2(y - centerY, x - centerX);

  // Convert to degrees and normalize to 0-360 degrees
  let angleDegrees = (angleRadians * 180) / Math.PI;

  // Add a random offset within ±80 degrees for natural variation
  const randomOffset = Math.random() * 160 - 80;
  // Ensure the angle is positive
  const nonNegativeAngle = angleDegrees + randomOffset + 360;
  // Ensure the angle stays withing 0 - 359 (at 360 the angle is 0 again)
  angleDegrees = nonNegativeAngle % 360;

  return angleDegrees;
}

function createShootingStar(): ShootingStar {
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;
  const starSize = 4 + Math.random() * 16;
  const tailHeight = Math.max(1, starSize / 10);
  const tailWidth = 15 * starSize;
  const angle = calculateRandomAngleTowardsCenter(left, top);
  // Get the maximum possible travel distance. The intersection observer will remove the shooting star once it exits the viewport
  const maxTravelDistance = Math.sqrt(
    Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2),
  );
  // Duration increases as the viewport increases increases to prevent the shooting star from traveling too fast
  const animationDuration = 2.5 + maxTravelDistance * 0.0007;

  return {
    id: Math.random(),
    top: `${top}px`,
    left: `${left}px`,
    size: `${starSize}px`,
    rotation: `${angle}deg`,
    tailHeight: `${tailHeight}px`,
    tailWidth: `${tailWidth}px`,
    travelDistance: `-${maxTravelDistance}px`,
    animationDuration: `${animationDuration}s`,
  };
}

export default function ShootingStar() {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    async function addShootingStar() {
      await wait(2000);
      setShootingStars([createShootingStar()]);
    }

    addShootingStar();
  }, []);

  async function handleAnimationEnd() {
    await wait(4000);
    setShootingStars([createShootingStar()]);
  }

  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
      {shootingStars.map((shootingStar) => (
        <ShootingStarItem
          key={shootingStar.id}
          shootingStar={shootingStar}
          onLeaveViewport={handleAnimationEnd}
        />
      ))}
    </div>
  );
}

type ShootingStarItemProps = {
  shootingStar: ShootingStar;
  onLeaveViewport: () => void;
};

function ShootingStarItem({
  shootingStar,
  onLeaveViewport,
}: ShootingStarItemProps) {
  const shootingStarRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const currentStar = shootingStarRef.current;

    // Use IntersectionObserver to remove shooting star once it exits the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          onLeaveViewport();
        }
      },
      { threshold: 0 }, // Trigger when the element is no longer visible at all.
    );

    if (currentStar) {
      observer.observe(currentStar);
    }

    return () => {
      if (currentStar) {
        observer.unobserve(currentStar);
      }
    };
  }, [onLeaveViewport, shootingStar.animationDuration]);

  return (
    <span
      ref={shootingStarRef}
      style={
        {
          top: shootingStar.top,
          left: shootingStar.left,
          width: shootingStar.size,
          height: shootingStar.size,
          "--shooting-star-rotation": shootingStar.rotation,
          "--shooting-star-tail-height": shootingStar.tailHeight,
          "--shooting-star-tail-width": shootingStar.tailWidth,
          "--shooting-star-travel-distance": shootingStar.travelDistance,
          "--shooting-star-animation-duration": shootingStar.animationDuration,
        } as React.CSSProperties
      }
      className="shooting-star"
    />
  );
}
