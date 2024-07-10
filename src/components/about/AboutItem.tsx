"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function AboutItem({ children, className }: Props) {
  return (
    <div
      className={cn(
        "card hero-elements-fade-in flex items-center justify-center space-y-4 rounded-xl p-4 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
