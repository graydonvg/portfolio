"use client";

import emitter from "@/lib/event-emitter";
import { Button } from "./ui/button";

export default function Navbar() {
  function scrollTo() {
    emitter.emit("contactForm");
  }

  return (
    <nav className="absolute left-0 top-0 flex w-full items-center justify-between px-20 py-8">
      <span className="text-xl/[1.875rem]">Graydon von Gossler</span>
      <div className="flex gap-4">
        <Button variant="outline">GitHub</Button>
        <Button variant="outline">LinkedIn</Button>
        <Button onClick={scrollTo}>Contact me</Button>
      </div>
    </nav>
  );
}
