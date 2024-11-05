import { ReactNode } from "react";

export default function TypographyP({ children }: { children: ReactNode }) {
  return (
    <p className="text-pretty text-lg [&:not(:first-child)]:mt-4 sm:[&:not(:first-child)]:mt-6">
      {children}
    </p>
  );
}
