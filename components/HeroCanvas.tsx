'use client';

import { Canvas } from '@react-three/fiber';

function FloatingIslands() {
  return (
    <group>
      <mesh position={[-1.5, 0.1, -1]}>
        <boxGeometry args={[1.4, 0.16, 1.2]} />
        <meshStandardMaterial color="#4f65c6" emissive="#173078" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[1.2, 0.3, -1.4]}>
        <boxGeometry args={[1.2, 0.12, 1.2]} />
        <meshStandardMaterial color="#5d7cef" emissive="#113580" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.2, -0.25, 0]}>
        <torusGeometry args={[0.32, 0.06, 16, 80]} />
        <meshStandardMaterial color="#5af3ff" emissive="#5af3ff" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="h-60 w-full rounded-2xl border border-white/10 bg-black/30">
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 4, 4]} intensity={1.2} />
        <FloatingIslands />
      </Canvas>
    </div>
  );
}
