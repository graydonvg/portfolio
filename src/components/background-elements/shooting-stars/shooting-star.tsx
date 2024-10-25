import { ShootingStarType } from "@/lib/types";
import { useEffect, useRef } from "react";

type Props = {
  shootingStar: ShootingStarType;
  onLeaveViewport: () => void;
};

export default function ShootingStar({ shootingStar, onLeaveViewport }: Props) {
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
      className="shooting-star absolute bg-star-radial"
    />
  );
}
