import { useFrame } from "@react-three/fiber";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Color, ShaderMaterial } from "three";

const STAR_COUNT = 500;

export default function Stars() {
  const { scrollY } = useScroll();
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const material = useRef<ShaderMaterial | null>(null);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrollYPosition(value);
  });

  const positionX = useMemo(() => {
    if (window.innerWidth < 1000) return { min: -3, max: 3 };
    if (window.innerWidth < 2000) return { min: -6, max: 6 };
    if (window.innerWidth < 4000) return { min: -9, max: 9 };
    return { min: -12, max: 12 };
  }, []);

  const positions = useMemo(() => {
    const posArray = new Float32Array(STAR_COUNT * 3);
    const rangeX = positionX.max - positionX.min;

    for (let i = 0; i < STAR_COUNT; i++) {
      posArray[i * 3] = Math.random() * rangeX + positionX.min;
      posArray[i * 3 + 1] = Math.random() * 12 - 8;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return posArray;
  }, [positionX.min, positionX.max]);

  const seeds = useMemo(() => {
    const seedArray = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      seedArray[i] = Math.random();
    }

    return seedArray;
  }, []);

  const starLightColor = useMemo(() => {
    return `hsl(${getComputedStyle(document.documentElement)
      .getPropertyValue("--star-lightt")
      .trim()
      .split(" ")
      .join(", ")})`;
  }, []);

  if (!material.current) {
    material.current = new ShaderMaterial({
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
          vSeed = seed;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 0.3 * (300.0 / -mvPosition.z);
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
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= 1.0;
          float pulse = 0.75 + 0.25 * sin(uTime * 5.0 + vSeed * 10.0);
          alpha *= pulse;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
    });
  }

  useFrame(({ clock, camera }) => {
    if (material.current) {
      material.current.uniforms.uTime.value = clock.getElapsedTime();
    }

    const cameraMovementY =
      -scrollYPosition / window.innerHeight - camera.position.y;

    camera.position.y += cameraMovementY;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={STAR_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-seed"
          array={seeds}
          count={STAR_COUNT}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={material.current} attach="material" />
    </points>
  );
}
