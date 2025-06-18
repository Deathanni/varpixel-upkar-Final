
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, MeshGradientMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <Torus ref={meshRef} position={position} args={[1, 0.3, 16, 32]}>
      <meshStandardMaterial color="#6366f1" metalness={0.5} roughness={0.2} />
    </Torus>
  );
};

const GeometricPattern = () => {
  return (
    <div className="w-80 h-80">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedTorus position={[0, 0, 0]} />
        <AnimatedTorus position={[3, 1, -2]} />
        <AnimatedTorus position={[-3, -1, -1]} />
      </Canvas>
    </div>
  );
};

export default GeometricPattern;
