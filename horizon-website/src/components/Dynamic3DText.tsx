'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, a } from '@react-spring/three'; // Import useSpring and a

interface Dynamic3DTextProps {
  text: string;
  textColor?: string;
  hoverTextColor?: string;
  fontSize?: number;
}

const AnimatedText: React.FC<Dynamic3DTextProps> = ({
  text,
  textColor = '#2563eb', // Default blue
  hoverTextColor = '#1d4ed8', // Darker blue for hover
  fontSize = 1.5, // Adjusted default size
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // Spring animation for scale and color
  const { scale, color } = useSpring({
    scale: hovered ? 1.2 : 1,
    color: hovered ? hoverTextColor : textColor,
    config: { tension: 300, friction: 20 },
  });

  // Rotation animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15; // Slightly slower rotation
      // Gentle up and down movement
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <a.mesh // Use animated mesh from react-spring
      ref={meshRef}
      scale={scale} // Apply animated scale
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Text
        fontSize={fontSize}
        anchorX="center"
        anchorY="middle"
        // No explicit material type needed for Text with color prop
      >
        {text}
        <a.meshStandardMaterial // Use animated material for color change
          color={color}
          roughness={0.5}
          metalness={0.5}
        />
      </Text>
    </a.mesh>
  );
};

const Dynamic3DText: React.FC<Dynamic3DTextProps> = ({
  text,
  textColor,
  hoverTextColor,
  fontSize,
}) => {
  return (
    <Canvas camera={{ position: [0, 0.5, 7], fov: 45 }}> {/* Adjusted camera */}
      <ambientLight intensity={1.0} /> {/* Increased ambient light */}
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />

      <AnimatedText text={text} textColor={textColor} hoverTextColor={hoverTextColor} fontSize={fontSize} />
      
      <OrbitControls enableZoom={true} enablePan={false} minDistance={3} maxDistance={15} /> {/* Allow zoom, disable pan */}
    </Canvas>
  );
};

export default Dynamic3DText;
