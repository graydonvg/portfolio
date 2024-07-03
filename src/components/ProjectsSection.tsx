"use client";

import { SCROLL_TO } from "@/constants";
import emitter from "@/lib/eventEmitter";
import { useEffect, useRef } from "react";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on(SCROLL_TO.projects, handleScroll);

    return () => {
      emitter.off(SCROLL_TO.projects, handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <h2 className="w-full text-center text-xl font-semibold md:text-2xl">
        Projects section
      </h2>
    </section>
  );
}
