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
    mesh.current.scale.x = .05;
    mesh.current.scale.y = .05;
    mesh.current.scale.z = .05;
    mesh.current.position.y = -2.3; 
  });

  return (
    <mesh ref={mesh} castShadow receiveShadow>
       <primitive object={gltf.scene} position-y={[-1.2]}  >
        {/* <Html wrapperClass="iphone" position={[0,2.5,-1.5]} transform rotation-x={-0.25} distanceFactor={1.16}> */}
        <Html wrapperClass="iphone" position={[0,47,-2.5]} scale={4.35} transform distanceFactor={10}>
          {/* <iframe src="https://internetarchitect.online https://megan-site.vercel.app/" https://www.alwaproduction.co.uk/ https://henhouselondon.co.uk/> */}
          <iframe src="https://iframeia.vercel.app/" />

        </Html>
        </primitive>
    </mesh>
  );
}

export function Shiba() {
  return (
   <div className="flex justify-center fixed top-0 left-0 w-screen z-[-1] items-center h-screen">
      <Canvas className="h-2xl w-2xl mix-blend-soft-light" >
        <Environment preset="apartment" background  />
      {/* <PresentationControls> */}
        <PresentationControls global polar={[-0.4,0.2]} azimuth={[-0.4,0.2]}>
        {/* <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={5}
          enableZoom={false} 
        /> */}
       
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent  />
        <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise
    premultiply // enables or disables noise premultiplication
    blendFunction={BlendFunction.ADD} // blend mode
  />
        {/* <Glitch
    delay={[1.5, 3.5]} // min and max glitch delay
    duration={[0.6, 1.0]} // min and max glitch duration
    strength={[0.3, 1.0]} // min and max glitch strength
    mode={GlitchMode.SPORADIC} // glitch mode
    active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
    ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
  /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
