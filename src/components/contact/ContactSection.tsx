"use client";

import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import emitter from "@/lib/eventEmitter";
import { CONSTANTS } from "@/constants";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on(CONSTANTS.SCROLL_TO.CONTACT_SECTION, handleScroll);

    return () => {
      emitter.off(CONSTANTS.SCROLL_TO.CONTACT_SECTION, handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-8"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-4 sm:w-3/4">
        <h2 className="w-full text-center text-2xl font-bold capitalize md:text-4xl">
          contact me
        </h2>
        <p className="w-full text-center text-sm font-light sm:text-base">
          Whether you&apos;d like to collaborate on a project, have a job offer,
          or just want to chat about code, send me a message, and I&apos;ll get
          back to you as soon as I can.
        </p>
        <p className="w-full text-center text-sm font-light sm:text-base">
          I look forward to hearing from you!
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
