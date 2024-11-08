"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Color, NormalBlending, ShaderMaterial } from "three";

export default function ThreeScene() {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function getWindowDimensions() {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    getWindowDimensions();

    window.addEventListener("resize", getWindowDimensions);

    return () => window.removeEventListener("resize", getWindowDimensions);
  }, []);

  return (
    <Canvas
      camera={{
        fov: 35,
        aspect: windowDimension.width / windowDimension.height,
        near: 0.1,
        far: 100,
        position: [0, 0, 6],
      }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }}
      gl={{ alpha: true }}
      className="absolute inset-0 h-full w-full"
    >
      <SceneContent windowDimension={windowDimension} />
    </Canvas>
  );
}

function SceneContent({
  windowDimension,
}: {
  windowDimension: { width: number; height: number };
}) {
  const { scrollY } = useScroll();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrollYPosition(value);
  });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setCursorPosition({
        x: event.clientX / windowDimension.width - 0.5,
        y: event.clientY / windowDimension.height - 0.5,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [windowDimension.width, windowDimension.height]);

  const [lastElapsedTime, setLastElapsedTime] = useState(0);

  useFrame(({ clock, camera }) => {
    const currentElapsedTime = clock.getElapsedTime();
    const deltaTime = currentElapsedTime - lastElapsedTime;

    setLastElapsedTime(currentElapsedTime);

    const parallaxXOffset = cursorPosition.x * 0.5;
    const parallaxYOffset = -cursorPosition.y * 0.5;

    const scale = 5;
    const cameraMovementX = (parallaxXOffset - camera.position.x) * scale;
    const cameraMovementY =
      (parallaxYOffset -
        scrollYPosition / (windowDimension.height / 1.2) -
        camera.position.y) *
      scale;

    camera.position.x += cameraMovementX * deltaTime;
    camera.position.y += cameraMovementY * deltaTime;
  });

  return <Stars />;
}

function Stars() {
  const particlesCount = 500;

  const positions = useMemo(() => {
    const posArray = new Float32Array(particlesCount * 3);
    const seedArray = new Float32Array(particlesCount);
    for (let i = 0; i < particlesCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 10; // Random number between -5 and 5
      posArray[i * 3 + 1] = (0.2 - Math.random()) * 10; // Random number between -8 and 2
      posArray[i * 3 + 2] = 4 - Math.random() * 9; // Random number between -5 and 4
      seedArray[i] = Math.random(); // Random seed for opacity animation
    }
    return { posArray, seedArray };
  }, [particlesCount]);

  const starLightColor = useMemo(() => {
    return `hsl(${getComputedStyle(document.documentElement)
      .getPropertyValue("--star-lightt")
      .trim()
      .split(" ")
      .join(", ")})`;
  }, []);

  const material = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          uColor: { value: new Color(starLightColor) },
          uTime: { value: 0 },
        },
        vertexShader: `
          attribute float seed;
          varying vec2 vUv;
          varying float vSeed;

          void main() {
            vUv = uv;
            vSeed = seed; // Pass the random seed to the fragment shader
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            // Ensure consistent particle size, without the 'box' effect
            gl_PointSize = 0.1 * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uTime;
          varying vec2 vUv;
          varying float vSeed;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            // Make sure the radial gradient creates a smooth fade without the box effect
            float alpha = 1.0 - smoothstep(0.0, 0.5, dist); // Apply smoothstep for soft fade
            alpha *= 1.0; // Apply additional soft fade for gentle alpha
            // Oscillate alpha over time based on seed
            float pulse = 0.75 + 0.25 * sin(uTime * 5.0 + vSeed * 10.0); // Pulse between 0.5 and 1.0
            alpha *= pulse; // Adjust alpha by pulse for animation
            gl_FragColor = vec4(uColor, alpha); // Apply color with animated alpha
          }
        `,
        transparent: true,
        blending: NormalBlending,
      }),
    [starLightColor],
  );

  // Update the `uTime` uniform each frame to animate
  useFrame((state) => {
    if (material) {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions.posArray}
          count={particlesCount}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-seed"
          array={positions.seedArray}
          count={particlesCount}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={material} attach="material" />
    </points>
  );
}
