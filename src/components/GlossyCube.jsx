'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const CubeBlock = () => {
  const cubeSize = 0.95;
  const gap = 0.05;
  const offset = cubeSize + gap;
  const blocks = [];


  const blackMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
    metalness: 0.5,
    roughness: 0.2,
  });

  const whiteMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.1,
  });


  const getFaceMaterials = (x, y, z) => {
 
    const materials = Array(6).fill(blackMaterial);


    if (x === -1) {
      materials[0] = whiteMaterial; 
    }
    if (y === -1) {
      materials[2] = whiteMaterial; 
    }
    if (z === -1) {
      materials[4] = whiteMaterial;
    }

    return materials;
  };

  
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        blocks.push(
          <mesh
            key={`${x}-${y}-${z}`}
            position={[x * offset, y * offset, z * offset]}
            geometry={new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)}
            material={getFaceMaterials(x, y, z)}
          />
        );
      }
    }
  }

  return <group rotation={[Math.PI * 0.2, -Math.PI * 0.25, 0]}>{blocks}</group>;
};

const GlossyCube = () => {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 45 }}
    >
      {/* Ambient light for general lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional lights at each corner */}
      <directionalLight position={[1, 1, 1]} intensity={1.2} />
      <directionalLight position={[-1, 1, 1]} intensity={1.2} />
      <directionalLight position={[1, -1, 1]} intensity={1.2} />
      <directionalLight position={[-1, -1, 1]} intensity={1.2} />

      {/* Spot light for more dramatic effect */}
      <spotLight 
        position={[-10, 10, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        castShadow 
      />

      <CubeBlock />
      
      {/* OrbitControls with auto-rotation enabled */}
      <OrbitControls 
        enableZoom={false} 
        autoRotate={true} 
        enablePan={false}
      />
      <Environment preset="studio" />
    </Canvas>
  );
};

export default GlossyCube;
