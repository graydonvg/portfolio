"use client";

import { TOTAL_TYPEWRITER_DURATION_IN_MS } from "@/lib/constants";
import { wait } from "@/lib/utils";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { DefaultLoadingManager } from "three";

const EarthLoadingContext = createContext({
  isEarthLoading: true,
  loadingProgress: 0,
});

export function EarthLoadingProvider({ children }: { children: ReactNode }) {
  const [isEarthLoading, setIsEarthLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    DefaultLoadingManager.onLoad = async () => {
      // Wait for the first typewriter animation to complete else the second typewriter animation will start before the first completes

      await wait(TOTAL_TYPEWRITER_DURATION_IN_MS);
      setIsEarthLoading(false);
    };

    DefaultLoadingManager.onProgress = async (
      _url,
      itemsLoaded,
      itemsTotal,
    ) => {
      setLoadingProgress((itemsLoaded / itemsTotal) * 100);

      if (itemsLoaded === itemsTotal) {
        // Wait for the first typewriter animation to complete else the second typewriter animation will start before the first completes
        await wait(TOTAL_TYPEWRITER_DURATION_IN_MS);
        setIsEarthLoading(false);
      }
    };

    return () => {
      DefaultLoadingManager.onLoad = () => {};
      DefaultLoadingManager.onProgress = () => {};
    };
  }, []);

  return (
    <EarthLoadingContext.Provider value={{ isEarthLoading, loadingProgress }}>
      {children}
    </EarthLoadingContext.Provider>
  );
}

export function useEarthLoading() {
  return useContext(EarthLoadingContext);
}
