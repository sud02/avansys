import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

function viewport() {
  var e = window,
    a = "inner";
  if (!("innerWidth" in window)) {
    a = "client";
    e = document.documentElement || document.body;
  }
  return { width: e[a + "Width"], height: e[a + "Height"] };
}

const FloatingRobot = () => {
  const meshRef = useRef();
  const texture = useTexture("/assets/robots.png");
  const [viewportWidth, setViewportWidth] = useState(viewport().width);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(viewport().width);
      console.log("Updated viewport width:", viewport().width);
    };

    // Listen for window resize to update viewport width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(performance.now() / 500) * 0.8;
    }
  });

  // Log the initial viewport width
  useEffect(() => {
    console.log("Initial viewport width:", viewportWidth);
  }, []);

  let adjustedScaleFactor;

  if (viewportWidth >= 1200) {
    // Large screens
    adjustedScaleFactor = 1;
  } else if (viewportWidth >= 768) {
    // Medium screens
    adjustedScaleFactor = 0.8;
  } else {
    // Small screens
    adjustedScaleFactor = 0.5;
  }

  // Log the calculated scale factor
  console.log("Viewport width:", viewportWidth);
  console.log("Adjusted scale factor:", adjustedScaleFactor);

  const scaledScale = [
    3.2 * adjustedScaleFactor,
    2 * adjustedScaleFactor,
    4 * adjustedScaleFactor,
  ];

  return (
    <mesh ref={meshRef} scale={scaledScale}>
      <planeGeometry args={[2, 3]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const FloatingRobotCanvas = () => {
  return (
    <Canvas style={{ height: "400px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <FloatingRobot />
    </Canvas>
  );
};

export default FloatingRobotCanvas;
