"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll, useTransform, motion as motion2d } from "framer-motion";
import { TextureLoader } from "three";
import { motion as motion3d } from "framer-motion-3d";

const INITIAL_ROTATION_X = 0;
const INITIAL_ROTATION_Y = 4;

export default function Earth() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const rotationX = useTransform(
    scrollYProgress,
    [0, 1],
    [INITIAL_ROTATION_X, -1],
  );
  const rotationY = useTransform(
    scrollYProgress,
    [0, 1],
    [INITIAL_ROTATION_Y, 5],
  );
  const [map, normalMap, aoMap] = useLoader(TextureLoader, [
    "/earth/map.jpg",
    "/earth/normalMap.png",
    "/earth/aoMap.jpg",
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
      ref={container}
      className="pointer-events-none absolute inset-0 -z-30 h-full w-full"
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={10}
          position={[0, 1, 0.25]}
          color={directionalLightColor}
          castShadow
        />
        <motion3d.mesh
          initial={{
            scale: 0,
            rotateX: INITIAL_ROTATION_X + 1,
            rotateY: INITIAL_ROTATION_Y - 3,
          }}
          animate={{
            scale: 2.5,
            rotateX: INITIAL_ROTATION_X,
            rotateY: INITIAL_ROTATION_Y,
          }}
          transition={{
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
