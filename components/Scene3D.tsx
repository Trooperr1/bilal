'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#FFFFFF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function GeometricShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3, 2, 0]}>
          <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
          <meshStandardMaterial color="#FFFFFF" wireframe />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.7} floatIntensity={1.5}>
        <mesh position={[3, -1, -2]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#FFFFFF" wireframe />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[2, 3, -1]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#FFFFFF" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <AnimatedSphere />
        <GeometricShapes />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
