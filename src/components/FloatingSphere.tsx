
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]}>
      <MeshWobbleMaterial
        color="#3b82f6"
        attach="material"
        factor={0.5}
        speed={1}
      />
    </Sphere>
  );
};

const FloatingSphere = () => {
  return (
    <div className="w-48 h-48">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default FloatingSphere;
