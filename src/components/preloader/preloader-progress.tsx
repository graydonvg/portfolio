"use client";

import { useEarthLoading } from "@/context/earth-loading-context";

export default function PreloaderProgress() {
  const { loadingProgress } = useEarthLoading();

  return (
    <span className="absolute bottom-6 right-6 text-muted-foreground sm:bottom-8 sm:right-8">
      {loadingProgress.toFixed(0)}%
    </span>
  );
}
