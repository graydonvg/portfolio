"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useTransform, motion as motion2d } from "framer-motion";
import { TextureLoader } from "three";
import { motion as motion3d } from "framer-motion-3d";
import { EARTH_DELAY_IN_SEC } from "@/lib/constants";
import usePreloaderStatus from "@/hooks/use-preloader-status";

const INITIAL_ROTATION_X = 0;
const INITIAL_ROTATION_Y = 4.3;

export default function Earth() {
  const isLoading = usePreloaderStatus();
  const [earthDelay, setEarthDelay] = useState(1000);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35vh"]);
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
  const directionalLightColor = useMemo(() => {
    return `hsl(${getComputedStyle(document.documentElement)
      .getPropertyValue("--directional-light")
      .trim()
      .split(" ")
      .join(", ")})`;
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setEarthDelay(EARTH_DELAY_IN_SEC);
    }
  }, [isLoading]);

  return (
    <motion2d.div
      ref={containerRef}
      style={{ y }}
      className="pointer-events-none absolute inset-0 -z-30 flex h-screen w-full flex-col items-center justify-center"
    >
      <Canvas
        camera={{ position: [0, 0, 2.8] }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
        gl={{ alpha: true }}
        className="h-full max-h-[79rem] w-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={10}
          position={[0, 1, 0.1]}
          color={directionalLightColor}
        />
        <motion3d.mesh
          // Using key to remount the model reduces lag on mobile compared to conditionally rendering the model
          key={earthDelay}
          initial={{
            scale: 0,
            rotateX: INITIAL_ROTATION_X + 1,
            rotateY: INITIAL_ROTATION_Y - 3,
          }}
          animate={{
            scale: 1,
            rotateX: INITIAL_ROTATION_X,
            rotateY: INITIAL_ROTATION_Y,
          }}
          transition={{
            delay: earthDelay,
            duration: 2,
          }}
          rotation-x={rotationX}
          rotation-y={rotationY}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={map} normalMap={normalMap} aoMap={aoMap} />
        </motion3d.mesh>
      </Canvas>
    </motion2d.div>
  );
}
