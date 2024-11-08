// Computers.jsx
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Basic ambient and directional lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[10, 10, 5]} />
      
      {/* Adjusted scale and position for mobile and desktop */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.42} // Smaller scale for both
        position={isMobile ? [0, -2, -0.5] : [0, -2.1, -1.1]} 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}>
      <Canvas
        frameloop="demand"
        camera={{ position: [10, 3, 5], fov: 25 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Limited OrbitControls */}
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          
          {/* Render Computers model */}
          <Computers isMobile={isMobile} />
        </Suspense>
        
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
