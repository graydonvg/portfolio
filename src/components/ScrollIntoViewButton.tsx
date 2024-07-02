"use client";

import emitter from "@/lib/eventEmitter";
import { ChevronDown } from "lucide-react";

export default function ScrollIntoViewButton() {
  function handleScroll() {
    emitter.emit("scrollToAboutMeSection");
  }

  return (
    <div className="hero-elements-grow-unblur absolute bottom-0">
      <ChevronDown
        onClick={handleScroll}
        size={64}
        className="animate-bounce cursor-pointer text-slate-400"
      />
    </div>
  );
}
