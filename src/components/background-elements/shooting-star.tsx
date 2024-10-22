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
};

function calculateRandomAngleTowardsCenter(x: number, y: number): string {
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
  // Ensure the angle stays withing 0 - 359
  angleDegrees = nonNegativeAngle % 360;

  return `${angleDegrees}deg`;
}

function createShootingStar(): ShootingStar {
  const starSize = 4 + Math.random() * 16;
  const tailHeight = Math.max(1, starSize / 10);
  const tailWidth = 15 * starSize;
  const travelDistance = Math.max(window.innerWidth, window.innerHeight);

  // Random starting position near the edges of the viewport
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;

  return {
    id: Math.random(),
    top: `${top}px`,
    left: `${left}px`,
    size: `${starSize}px`,
    rotation: calculateRandomAngleTowardsCenter(left, top),
    tailHeight: `${tailHeight}px`,
    tailWidth: `${tailWidth}px`,
    travelDistance: `-${travelDistance}px`,
  };
}

export default function ShootingStar() {
  const starRef = useRef<HTMLSpanElement | null>(null);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    async function addShootingStar() {
      await wait(2000);
      setShootingStars([createShootingStar()]);
    }

    addShootingStar();
  }, []);

  async function handleAnimationEnd() {
    setShootingStars([]);
    await wait(4000);
    setShootingStars([createShootingStar()]);
  }

  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
      {shootingStars.map((shootingStar) => (
        <span
          key={shootingStar.id}
          ref={starRef}
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
            } as React.CSSProperties
          }
          className="shooting-star"
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </div>
  );
}
