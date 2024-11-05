"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactMe from "./contact/contact-me";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FixedFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const hero =
    typeof window !== "undefined" ? document.getElementById("hero") : null;

  useGSAP(() => {
    // We never want it to overlap more than the height of the screen
    // Mobile devices calculate the browser viewport as (top bar + document + bottom bar) = 100vh
    // Using hero height because it is 100vh
    // This ensures that the footer is set to fixed
    function getOverlap() {
      if (!footerRef.current) return 0;
      return Math.min(hero!.offsetHeight, footerRef.current.offsetHeight);
    }

    // Adjusts the margin-top of the footer to overlap the proper amount
    function adjustFooterOverlap() {
      if (!footerRef.current) return;
      footerRef.current.style.marginTop = `-${getOverlap()}px`;
    }

    adjustFooterOverlap(); // Set initial footer margin

    // To make it responsive, re-calculate the margin-top on the footer when the ScrollTriggers revert
    // @ts-expect-error supported event 'revert' but not included in types
    ScrollTrigger.addEventListener("revert", adjustFooterOverlap);

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: () => `top ${hero!.offsetHeight - getOverlap()}`,
      end: () => `+=${getOverlap()}`,
      pin: true,
    });

    return () => {
      // @ts-expect-error supported event 'revert' but not included in types
      ScrollTrigger.removeEventListener("revert", adjustFooterOverlap);
      ScrollTrigger.killAll();
    };
  });
  return (
    <footer ref={footerRef} className="!w-full !max-w-full">
      <ContactMe />
    </footer>
  );
}
