"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html, OrbitControls, PresentationControls, Environment } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'
import { BlendFunction } from 'postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import "./styles.css"; // Import the CSS file



function MeshComponent() {
  const fileUrl = "/shiba/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    // mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y = 650;
    // mesh.current.rotation.x = 550;
    mesh.current.scale.x = 1.7;
    mesh.current.scale.y = 1.7;
    mesh.current.scale.z = 1.7;
    mesh.current.position.y = -.2; 
  });

  

  return (
    <mesh ref={mesh} castShadow receiveShadow  >
    {/* <mesh receiveShadow position={[0, -1.5, 0]} rotation-x={-Math.PI / 2} scale={[10, 10, 10]}> */}
       {/* <shadowMaterial attach="material" opacity={0.3} /> */}
      <primitive object={gltf.scene} position-y={[-1.1]} style={{ zIndex: 1 }}>
        <Html wrapperClass="iphone" style={{ zIndex: 1 }} position={[.025, 1.009, -.1]} scale={2.4} rotation-y={0.05} transform distanceFactor={.145}>
          <iframe   style={{ transform: 'scaleX(-1)',  zIndex: 1 }} src="https://iframeia.vercel.app/" />
          {/* https://iframeia.vercel.app/ https://www.alwaproduction.co.uk/*/}
        </Html>
      </primitive>
    </mesh>
  );
}

function PopupText() {
  return (
    <Html position={[0, 1.2, -2]} style={{ zIndex: 2 }}>
      <div className="popup-container">
        <div className="popup-box">
          <p>Double tap the url to browse our selected sites ( avg loading time : 3-5sec )</p>
          <p>* Zoom in *</p>
        </div>
        <div className="arrow-down"></div>
      </div>
    </Html>
  );
}

export function Shiba() {
  return (
   <div className="flex justify-center fixed top-0 left-0 w-screen z-[-1] items-center h-screen" >
    {/* cam x, y , z  3?*/}
            <Canvas className="h-screen w-full md:h-2xl md:w-2xl h-2xl w-2xl mix-blend-soft-light" shadows dpr={[1, 2]} camera={{ position: [0, 0.5, 5], fov: 50 }}>
        <color attach="background" args={["ivory"]} />

        <Environment preset="studio" background  blur={0.5} />
      {/* <PresentationControls> */}
        <PresentationControls global polar={[-0.4,0.2]} azimuth={[-0.4,0.2]}>
        <OrbitControls
  enableZoom={true}
  enableRotate={false}
  enablePan={false}
  // minPolarAngle={Math.PI / 1.4}   
  // maxPolarAngle={Math.PI / 3.5}   
/>
       
        <ambientLight />
        
        <pointLight position={[10, 10, 10]} />
        <MeshComponent  />
        <PopupText />
        <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom luminanceThreshold={.6} luminanceSmoothing={0.9} height={600} />
        {/* <Bloom luminanceThreshold={1.5} luminanceSmoothing={1.2} height={600} /> */}

        {/* <Noise
    premultiply // enables or disables noise premultiplication
    blendFunction={BlendFunction.ADD} // blend mode
  /> */}
  {/* <Noise
  premultiply // enables or disables noise premultiplication
  blendFunction={BlendFunction.ADD} // blend mode
  opacity={0.3} // Set a lower opacity value
/> */}
        {/* <Glitch
    delay={[1.5, 3.5]} // min and max glitch delay
    duration={[0.6, 1.0]} // min and max glitch duration
    strength={[0.3, 1.0]} // min and max glitch strength
    mode={GlitchMode.SPORADIC} // glitch mode
    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
    ratio={015} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
  /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
        </PresentationControls>
      </Canvas>
    </div>
  );
}