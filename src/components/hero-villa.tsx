"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Villa() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = -0.32 + Math.sin(state.clock.elapsedTime * 0.22) * 0.08 + state.pointer.x * 0.12;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.06;
  });

  const stone = "#d6d0c1";
  const dark = "#26382e";
  return (
    <group ref={group} rotation={[0.02, -0.3, 0]} position={[0, -0.7, 0]}>
      <mesh position={[0, -0.1, 0]} receiveShadow><cylinderGeometry args={[4.4, 4.7, 0.22, 6]} /><meshStandardMaterial color="#64715e" roughness={0.9} /></mesh>
      <mesh position={[0, 0.92, 0]} castShadow receiveShadow><boxGeometry args={[4.7, 2, 3.5]} /><meshStandardMaterial color={stone} roughness={0.78} /></mesh>
      <mesh position={[0, 2.05, 0]} castShadow><boxGeometry args={[4.95, 0.14, 3.75]} /><meshStandardMaterial color={dark} roughness={0.65} /></mesh>
      <mesh position={[-0.55, 2.9, -0.25]} castShadow><boxGeometry args={[3.25, 1.55, 3.05]} /><meshStandardMaterial color="#c1b9a7" roughness={0.76} /></mesh>
      <mesh position={[-0.55, 3.75, -0.25]} castShadow><boxGeometry args={[3.45, 0.14, 3.25]} /><meshStandardMaterial color={dark} roughness={0.6} /></mesh>
      {[-1.55, -0.52, 0.52, 1.55].map((x) => <mesh key={x} position={[x, 0.95, 1.77]}><boxGeometry args={[0.72, 1.45, 0.045]} /><meshPhysicalMaterial color="#8ca9a3" roughness={0.14} metalness={0.2} transmission={0.25} /></mesh>)}
      {[-1.65, -0.55, 0.55, 1.65].map((x) => <mesh key={x} position={[x, 2.92, 1.31]}><boxGeometry args={[0.72, 1.12, 0.045]} /><meshPhysicalMaterial color="#8ca9a3" roughness={0.14} metalness={0.2} transmission={0.25} /></mesh>)}
      <mesh position={[0, 2.05, 2.12]}><boxGeometry args={[4.9, 0.1, 0.9]} /><meshStandardMaterial color="#26382e" /></mesh>
      {[-2.2, -1.1, 0, 1.1, 2.2].map((x) => <mesh key={x} position={[x, 2.42, 2.52]}><boxGeometry args={[0.035, 0.68, 0.035]} /><meshStandardMaterial color="#b99b70" metalness={0.5} roughness={0.3} /></mesh>)}
      <mesh position={[0, 2.78, 2.52]}><boxGeometry args={[4.5, 0.045, 0.045]} /><meshStandardMaterial color="#b99b70" metalness={0.5} roughness={0.3} /></mesh>
      <mesh position={[-0.3, 0.55, 1.78]}><boxGeometry args={[0.82, 1.65, 0.08]} /><meshStandardMaterial color="#293c30" roughness={0.5} /></mesh>
      <mesh position={[2.48, 1, -0.3]}><boxGeometry args={[0.08, 1.9, 3]} /><meshStandardMaterial color="#b99b70" metalness={0.55} roughness={0.3} /></mesh>
      {[[ -3.1, 1.8, 0.7 ], [3.1, -1.7, 0.8], [-3.0, -1.8, 0.62]] .map(([x,z,s]) => <group key={`${x}-${z}`} position={[x,0,z]}><mesh position={[0,.45,0]}><cylinderGeometry args={[.055,.08,.8,8]} /><meshStandardMaterial color="#8b6b4c" /></mesh><mesh position={[0,1.1,0]} scale={[s,s*1.25,s]}><icosahedronGeometry args={[0.65,1]} /><meshStandardMaterial color="#506c52" roughness={1} /></mesh></group>)}
    </group>
  );
}

export function HeroVilla() {
  return (
    <Canvas camera={{ position: [8, 6, 10], fov: 34 }} dpr={[1, 1.7]} shadows gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.2} />
      <hemisphereLight args={["#e7e4d6", "#25372b", 1.8]} />
      <directionalLight position={[5, 9, 7]} intensity={3.1} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-6, 4, -5]} intensity={1.4} color="#a9c7c0" />
      <Float speed={1.1} rotationIntensity={0.02} floatIntensity={0.18}><Villa /></Float>
      <Environment preset="city" />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 3.3} maxPolarAngle={Math.PI / 2.05} />
    </Canvas>
  );
}
