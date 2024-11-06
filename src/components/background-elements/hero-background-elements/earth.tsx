"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll, useTransform, motion as motion2d } from "framer-motion";
import { TextureLoader } from "three";
import { motion as motion3d } from "framer-motion-3d";
import { EARTH_DELAY_IN_SEC } from "@/lib/constants";
import usePreloaderStatus from "@/hooks/use-preloader-status";

const INITIAL_ROTATION_X = 0;
const INITIAL_ROTATION_Y = 4.3;

export default function Earth() {
  const isLoading = usePreloaderStatus();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20vh"]);
  const rotationX = useTransform(
    scrollYProgress,
    [0, 1],
    [INITIAL_ROTATION_X, -0.5],
  );
  const rotationY = useTransform(
    scrollYProgress,
    [0, 1],
    [INITIAL_ROTATION_Y, 5.3],
  );

  const [map, normalMap, aoMap] = useLoader(TextureLoader, [
    "/earth/map.webp",
    "/earth/normalMap.webp",
    "/earth/aoMap.webp",
  ]);
  const directionalLightColor = `hsl(${getCSSVariable("--directional-light")})`;

  function getCSSVariable(name: string) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim()
      .split(" ")
      .join(", ");
  }

  return (
    <motion2d.div
      ref={containerRef}
      style={{ y }}
      className="pointer-events-none absolute inset-0 -z-30 flex h-screen w-full flex-col items-center justify-center"
    >
      <div className="h-full max-h-[1270px] w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight
            intensity={10}
            position={[0, 1, 0.1]}
            color={directionalLightColor}
            castShadow
          />
          {!isLoading && (
            <motion3d.mesh
              initial={{
                scale: 0,
                rotateX: INITIAL_ROTATION_X + 1,
                rotateY: INITIAL_ROTATION_Y - 3,
              }}
              animate={{
                scale: 1.9,
                rotateX: INITIAL_ROTATION_X,
                rotateY: INITIAL_ROTATION_Y,
              }}
              transition={{
                delay: EARTH_DELAY_IN_SEC,
                duration: 2,
              }}
              rotation-x={rotationX}
              rotation-y={rotationY}
            >
              <sphereGeometry args={[1, 64, 64]} />
              <meshStandardMaterial
                map={map}
                normalMap={normalMap}
                aoMap={aoMap}
              />
            </motion3d.mesh>
          )}
        </Canvas>
      </div>
    </motion2d.div>
  );
}
