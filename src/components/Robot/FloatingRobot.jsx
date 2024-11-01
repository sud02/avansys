// src/components/FloatingRobot.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const FloatingRobot = () => {
  const meshRef = useRef();

  // Load the robot image as a texture
  const texture = useTexture("/assets/robots.png"); // Update path if necessary

  // Floating animation (only vertical floating, no rotation)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(performance.now() / 500) * 0.8; // Enhanced floating effect
    }
  });

  return (
    <mesh ref={meshRef} scale={[3.2, 2, 4]}> {/* Increase scale to make the robot larger */}
      <planeGeometry args={[2, 3]} /> {/* Adjust width and height as needed */}
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
};

const FloatingRobotCanvas = () => {
  return (
    <Canvas style={{ height: "400px" }}> {/* Increase Canvas height if needed */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <FloatingRobot />
    </Canvas>
  );
};

export default FloatingRobotCanvas;
