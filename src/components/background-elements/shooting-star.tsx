"use client";

import { wait } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type Star = {
  id: number;
  top: string;
  left: string;
  size: string;
  rotation: string;
};

function getRandomRotation() {
  let rotation;
  do {
    rotation = Math.floor(Math.random() * 360);
  } while (rotation % 90 === 0);
  return `${rotation}deg`;
}

function createStar(): Star {
  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${4 + Math.random() * 16}px`,
    rotation: getRandomRotation(),
  };
}

export default function ShootingStar() {
  const starRef = useRef<HTMLSpanElement | null>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars([createStar()]);
  }, []);

  function addStar() {
    setStars([createStar()]);
  }

  function removeStar(id: number) {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  }

  async function handleAnimationEnd(id: number) {
    removeStar(id);
    await wait(4000);
    addStar();
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
                "--rotation": star.rotation,
              } as React.CSSProperties
            }
            className="shooting-star"
            onAnimationEnd={() => handleAnimationEnd(star.id)}
          />
        );
      })}
    </div>
  );
}
