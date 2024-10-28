"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll, useTransform, motion as motion2d } from "framer-motion";
import { TextureLoader } from "three";
import { motion as motion3d } from "framer-motion-3d";

export default function Earth() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const initialRotationX = 0;
  const initialRotationY = 4;
  const rotationX = useTransform(
    scrollYProgress,
    [0, 1],
    [initialRotationX, -1],
  );
  const rotationY = useTransform(
    scrollYProgress,
    [0, 1],
    [initialRotationY, 5],
  );

  const [map, normalMap, aoMap] = useLoader(TextureLoader, [
    "/earth/color.jpg",
    "/earth/normal.png",
    "/earth/occlusion.jpg",
  ]);

  return (
    <motion2d.div
      ref={container}
      className="pointer-events-none absolute -z-20 h-full w-full"
    >
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight intensity={10} position={[0, 1, 0.25]} />
        <motion3d.mesh
          initial={{
            scale: 0,
            rotateX: initialRotationX + 1,
            rotateY: initialRotationY - 3,
          }}
          animate={{
            scale: 2.5,
            rotateX: initialRotationX,
            rotateY: initialRotationY,
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
