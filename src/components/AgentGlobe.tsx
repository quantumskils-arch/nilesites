"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Precomputed at module scope so component render stays pure.
function buildSpherePositions(count: number, radius: number): Float32Array {
  const pts: number[] = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    pts.push(
      radius * Math.sin(p) * Math.cos(t),
      radius * Math.sin(p) * Math.sin(t),
      radius * Math.cos(p)
    );
  }
  return new Float32Array(pts);
}

const GLOBE_POSITIONS = buildSpherePositions(850, 2.1);

function GlobePoints() {
  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[GLOBE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#60a5fa" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function CoreWire() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.25;
      ref.current.rotation.x += delta * 0.08;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.15;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0.2, 0]}>
      <torusGeometry args={[2.8, 0.012, 8, 128]} />
      <meshBasicMaterial color="#38bdf8" transparent opacity={0.45} />
    </mesh>
  );
}

function Rig() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  useFrame(({ camera }) => {
    camera.position.x += (mouse.current.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.current.y * 0.4 + 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function AgentGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 6.4], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <GlobePoints />
      <CoreWire />
      <OrbitRing />
      <Rig />
    </Canvas>
  );
}
