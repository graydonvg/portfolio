"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Props = {
  children: ReactNode;
};

export default function FixedFooter({ children }: Props) {
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    // we never want it to overlap more than the height of the screen
    function getOverlap() {
      if (!footerRef.current) return 0;
      return Math.min(window.innerHeight, footerRef.current.offsetHeight);
    }

    // adjusts the margin-top of the footer to overlap the proper amount
    function adjustFooterOverlap() {
      if (!footerRef.current) return;
      footerRef.current.style.marginTop = `-${getOverlap()}px`;
    }

    adjustFooterOverlap(); // Set initial footer margin

    // to make it responsive, re-calculate the margin-top on the footer when the ScrollTriggers revert
    // @ts-expect-error supported event 'revert' but not included in types
    ScrollTrigger.addEventListener("revert", adjustFooterOverlap);

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: () => `top ${window.innerHeight - getOverlap()}`,
      end: () => `+=${getOverlap()}`,
      pin: true,
    });

    return () => {
      // @ts-expect-error supported event 'revert' but not included in types
      ScrollTrigger.removeEventListener("revert", adjustFooterOverlap);
      ScrollTrigger.killAll(); // Remove all ScrollTriggers
    };
  });
  return (
    <footer ref={footerRef} className="!w-full !max-w-full bg-zinc-950">
      {children}
    </footer>
  );
}
