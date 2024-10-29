"use client";

import { wait } from "@/lib/utils";
import { useEffect, useState } from "react";
import ShootingStar from "./shooting-star";
import { ShootingStarType } from "@/lib/types";

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

function createShootingStar() {
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;
  const starSize = 4 + Math.random() * 16;
  const tailHeight = Math.max(1, starSize / 10);
  const tailWidth = 15 * starSize;
  const angle = calculateRandomAngleTowardsCenter(left, top);
  // Get the maximum possible travel distance (hypotenuse). The intersection observer will remove the shooting star once it exits the viewport
  const maxTravelDistance = Math.sqrt(
    Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2),
  );
  // Animation duration increases as the viewport increases to prevent the shooting star from traveling too fast
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

export default function ShootingStars() {
  const [shootingStars, setShootingStars] = useState<ShootingStarType[]>([]);

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
    <>
      {shootingStars.map((shootingStar) => (
        <ShootingStar
          key={shootingStar.id}
          shootingStar={shootingStar}
          onLeaveViewport={handleAnimationEnd}
        />
      ))}
    </>
  );
}
