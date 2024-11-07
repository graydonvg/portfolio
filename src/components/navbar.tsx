"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { NAV_OPTIONS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 hidden w-full items-center justify-between px-20 py-8 lg:flex">
      <span className="text-xl/[1.875rem] text-muted">Graydon von Gossler</span>
      <div className="flex gap-4">
        {NAV_OPTIONS.map((option) =>
          option.link ? (
            <Link
              key={option.label}
              tabIndex={-1}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">{option.label}</Button>
            </Link>
          ) : (
            <Button key={option.label} onClick={option.scrollTo}>
              {option.label}
            </Button>
          ),
        )}
      </div>
    </nav>
  );
}
