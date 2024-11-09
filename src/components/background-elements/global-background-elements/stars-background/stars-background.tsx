"use client";

import useWindowDimensions from "@/hooks/use-window-dimensions";
import { Canvas } from "@react-three/fiber";
import Stars from "./stars";

export default function StarsBackground() {
  const windowDimension = useWindowDimensions();

  return (
    windowDimension && (
      <Canvas
        camera={{
          fov: 35,
          aspect: windowDimension.width / windowDimension.height,
          near: 0.1,
          far: 100,
          position: [0, 0, 10],
        }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
        gl={{ alpha: true }}
        className="absolute inset-0 h-full w-full"
      >
        <Stars />
      </Canvas>
    )
  );
}
