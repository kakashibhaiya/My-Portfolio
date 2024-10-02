import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Computers = () => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
    {/* Hemisphere Light */}
    <hemisphereLight intensity={1.5}
     groundColor="black"
     skyColor="white"
     position={[0, 50, 0]} />
    
     <directionalLight
  intensity={1}
  position={[10, 10, 5]} // Adjust position as needed
  castShadow
/>
    {/* Ambient Light */}
    <ambientLight intensity={0.6} />

    <pointLight intensity={25} />

  
    {/* Model */}
    <primitive 
       object={computer.scene}
       scale={0.75}
       position={[0, -4.25, -1.5]}
       rotation = {[-0.01, -0.2, -0.1]}
    />
  </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [22   , 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
         <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
         />
          <Computers/>
       </Suspense>

       <Preload all />
    </Canvas> 
      
  )
}

export default ComputersCanvas