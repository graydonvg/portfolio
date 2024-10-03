"use client";

import { useEffect, useRef } from "react";
import ContactForm from "./contact-form";
import emitter from "@/lib/event-emitter";
import { TypographyP } from "../ui/typography/p";

export default function ContactMe() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    emitter.on("contactForm", handleScroll);

    return () => {
      emitter.off("contactForm", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="grid grid-cols-2 gap-20 px-24 pt-20">
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
          <TypographyP>graydon@gmail.com - Github - LinkedIn</TypographyP>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
