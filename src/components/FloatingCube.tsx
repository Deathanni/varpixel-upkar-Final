
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]}>
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
      />
    </Box>
  );
};

const FloatingCube = () => {
  return (
    <div className="w-64 h-64">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedCube />
      </Canvas>
    </div>
  );
};

export default FloatingCube;
