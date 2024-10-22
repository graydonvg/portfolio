"use client";

import { wait } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type Star = {
  id: number;
  top: string;
  left: string;
  size: string;
  rotation: string;
  tailHeight: string;
  tailWidth: string;
  travelDistance: string;
};

function getRandomRotation() {
  let rotation;

  function isInExcludedRange(angle: number) {
    return (
      (angle >= 60 && angle <= 120) ||
      (angle >= 150 && angle <= 210) ||
      (angle >= 240 && angle <= 300) ||
      angle >= 330 ||
      angle < 30
    );
  }

  do {
    rotation = Math.floor(Math.random() * 360);
  } while (rotation % 90 === 0 || isInExcludedRange(rotation));

  return `${rotation}deg`;
}

function createStar(): Star {
  const starSize = 4 + Math.random() * 16;
  const tailHeight = Math.max(1, starSize / 10);
  const tailWidth = 15 * starSize;
  const travelDistance = Math.max(window.innerWidth, window.innerHeight);

  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${starSize}px`,
    rotation: getRandomRotation(),
    tailHeight: `${tailHeight}px`,
    tailWidth: `${tailWidth}px`,
    travelDistance: `-${travelDistance}px`,
  };
}

export default function ShootingStar() {
  const starRef = useRef<HTMLSpanElement | null>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars([createStar()]);
  }, []);

  async function handleAnimationEnd() {
    setStars([]);
    await wait(4000);
    setStars([createStar()]);
  }

  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
      {stars.map((star) => {
        return (
          <span
            key={star.id}
            ref={starRef}
            style={
              {
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                "--shooting-star-rotation": star.rotation,
                "--shooting-star-tail-height": star.tailHeight,
                "--shooting-star-tail-width": star.tailWidth,
                "--shooting-star-travel-distance": star.travelDistance,
              } as React.CSSProperties
            }
            className="shooting-star"
            onAnimationEnd={handleAnimationEnd}
          />
        );
      })}
    </div>
  );
}
