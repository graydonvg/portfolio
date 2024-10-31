"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { LINKS } from "@/lib/constants";
import { scrollToContactForm } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 hidden w-full items-center justify-between px-20 py-8 lg:flex">
      <span className="text-xl/[1.875rem] text-muted">Graydon von Gossler</span>
      <div className="flex gap-4">
        <Link
          tabIndex={-1}
          href={LINKS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary">GitHub</Button>
        </Link>
        <Link
          tabIndex={-1}
          href={LINKS.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary">LinkedIn</Button>
        </Link>
        <Button onClick={scrollToContactForm}>Contact me</Button>
      </div>
    </nav>
  );
}
