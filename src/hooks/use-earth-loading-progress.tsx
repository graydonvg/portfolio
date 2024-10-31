"use client";

import { useEffect, useState } from "react";
import { DefaultLoadingManager } from "three";

export default function useEarthLoadingProgress() {
  const [isEarthLoading, setIsEarthLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if assets are cached by using onLoad and onProgress
    DefaultLoadingManager.onLoad = () => {
      setIsEarthLoading(false);
    };

    DefaultLoadingManager.onProgress = (_url, itemsLoaded, itemsTotal) => {
      setLoadingProgress((itemsLoaded / itemsTotal) * 100);
      if (itemsLoaded === itemsTotal) {
        setIsEarthLoading(false);
      }
    };

    return () => {
      DefaultLoadingManager.onLoad = () => {};
      DefaultLoadingManager.onProgress = () => {};
    };
  }, []);

  return { isEarthLoading, loadingProgress };
}
