"use client";

import emitter from "@/lib/eventEmitter";
import AnimatedButton from "../AnimatedButton";
import { CONSTANTS } from "@/constants";
import { useRouter } from "next/navigation";

export default function HeroButtons() {
  const router = useRouter();

  function scrollToContactFormSection() {
    emitter.emit(CONSTANTS.SCROLL_TO.CONTACT_SECTION);
  }

  function navigateToResume() {
    router.push("/resume.pdf");
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <AnimatedButton
        label="Contact me"
        animationDelay={0.7}
        className="hero-button-radial-gradient-1"
        onClick={scrollToContactFormSection}
      />
      <AnimatedButton
        label="Resume"
        animationDelay={1.3}
        className="hero-button-radial-gradient-2"
        onClick={navigateToResume}
      />
    </div>
  );
}
