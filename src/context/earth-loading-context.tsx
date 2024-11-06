"use client";

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

  return (
    <EarthLoadingContext.Provider value={{ isEarthLoading, loadingProgress }}>
      {children}
    </EarthLoadingContext.Provider>
  );
}

export function useEarthLoading() {
  return useContext(EarthLoadingContext);
}
