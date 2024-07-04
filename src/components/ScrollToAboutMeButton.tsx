"use client";

import { CONSTANTS } from "@/constants";
import emitter from "@/lib/eventEmitter";
import { ChevronDown } from "lucide-react";

export default function ScrollToAboutMeButton() {
  function handleScroll() {
    emitter.emit(CONSTANTS.SCROLL_TO.ABOUT_SECTION);
  }

  return (
    <button
      aria-label="Scroll to about me section"
      className="hero-elements-grow-unblur absolute bottom-0"
    >
      <ChevronDown
        onClick={handleScroll}
        size={64}
        className="animate-bounce cursor-pointer text-slate-400"
      />
    </button>
  );
}
