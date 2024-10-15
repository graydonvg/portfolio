"use client";

import { useRef } from "react";
import ContactForm from "./contact-form";
import TypographyP from "../ui/typography/p";
import Link from "next/link";
import { EMAIL_ADDRESS, LINKS } from "@/lib/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactMe() {
  const container = useRef<HTMLDivElement | null>(null);
  const footer =
    typeof window !== "undefined" ? document.querySelector("footer") : null;

  useGSAP(() => {
    // we never want it to overlap more than the height of the screen
    function getOverlap() {
      if (!footer) return 0;
      return Math.min(window.innerHeight, footer.offsetHeight);
    }

    // adjusts the margin-top of the footer to overlap the proper amount
    function adjustFooterOverlap() {
      if (!footer) return;
      footer.style.marginTop = `-${getOverlap()}px`;
    }

    adjustFooterOverlap(); // Set initial footer margin

    // to make it responsive, re-calculate the margin-top on the footer when the ScrollTriggers revert
    // @ts-expect-error supported event 'revert' but not included in types
    ScrollTrigger.addEventListener("revert", adjustFooterOverlap);

    ScrollTrigger.create({
      trigger: footer,
      start: () => `top ${window.innerHeight - getOverlap()}`,
      end: () => `+=${getOverlap()}`,
      pin: true,
    });

    // Cleanup listeners on unmount
    return () => {
      // @ts-expect-error supported event 'revert' but not included in types
      ScrollTrigger.removeEventListener("revert", adjustFooterOverlap);
      ScrollTrigger.killAll(); // Remove all ScrollTriggers
    };
  });

  return (
    <div
      ref={container}
      className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-4 pt-24 text-secondary md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 xl:px-[13.5rem]"
    >
      <div>
        <h2 className="text-pretty text-[2.5rem] font-semibold leading-[2.75rem] tracking-tight">
          I&apos;m seeking a full-time front-end developer role.
        </h2>
        <div className="mt-8">
          <TypographyP>
            Whether you&apos;d like to collaborate on a project, have a job
            offer, or just want to chat about code, send me a message, and
            I&apos;ll get back to you as soon as I can.
          </TypographyP>
          <TypographyP>
            <Link
              href={`mailto:${EMAIL_ADDRESS}`}
              className="text-blue-400 hover:text-blue-500 hover:underline"
            >
              {EMAIL_ADDRESS}
            </Link>{" "}
            -{" "}
            <Link
              href={LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 visited:text-purple-400 hover:text-blue-500 hover:underline visited:hover:text-purple-500"
            >
              Github
            </Link>{" "}
            -{" "}
            <Link
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 visited:text-purple-400 hover:text-blue-500 hover:underline visited:hover:text-purple-500"
            >
              LinkedIn
            </Link>
          </TypographyP>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
