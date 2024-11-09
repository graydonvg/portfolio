import { useEffect, useState } from "react";

export function useElementDimensions(element: HTMLElement | null) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    function measure() {
      if (element) {
        setDimensions({
          width: element.offsetWidth,
          height: element.offsetHeight,
        });
      }
    }

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [element]);

  return dimensions;
}
