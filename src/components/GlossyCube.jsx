'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedCube = () => {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.rotation.y = t * 0.2;
        meshRef.current.rotation.z = t * 0.1;
    }
    if (innerRef.current) {
        innerRef.current.rotation.y = -t * 0.4;
        innerRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Outer Glass/Metallic Cube */}
        <mesh ref={meshRef}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.1}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#e11d48"
          />
        </mesh>

        {/* Inner Core */}
        <mesh ref={innerRef}>
           <boxGeometry args={[1.2, 1.2, 1.2]} />
           <meshStandardMaterial 
             color="#7c3aed" 
             emissive="#7c3aed" 
             emissiveIntensity={2} 
             metalness={1} 
             roughness={0} 
           />
        </mesh>
      </Float>
    </group>
  );
};

const GlossyCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={150} color="#e11d48" />
        <pointLight position={[-10, -10, -10]} intensity={100} color="#7c3aed" />
        <spotLight
          position={[0, 5, 10]}
          angle={0.15}
          penumbra={1}
          intensity={200}
          castShadow
          color="#ffffff"
        />

        <AnimatedCube />

        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={15}
          blur={2.5}
          far={4}
          color="#000000"
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default GlossyCube;