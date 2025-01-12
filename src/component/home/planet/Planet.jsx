/* eslint-disable react/prop-types */
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import Ring from "./Ring";
import planets from "../../../consts/planets";

const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);

const PlanetBase = ({ name }) => {
  const planetData = planets[name];
  const planetRef = useRef();

  const planetTexture = useTexture(
    planetData.texture || planetData.textures?.day
  );
  planetTexture.encoding = THREE.sRGBEncoding;

  const ringTexture = planetData.ringTexture;

  useFrame((state, delta) => {
    if (planetRef.current) {
      // Rotate the planet
      planetRef.current.rotation.y += 0.5 * delta;
    }
  });

  const scale = name === "saturn" ? [68, 68, 68] : [100, 100, 100];

  return (
    
    <group ref={planetRef}>
      {/* Planet mesh */}
      <mesh geometry={sphereGeometry} scale={scale}>
        <meshStandardMaterial
          map={planetTexture}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>

      {/* Render ring for Saturn */}
      {name === "saturn" && planetData.hasRings && ringTexture && (
        <Ring radius={68} texture={ringTexture} />
      )}
    </group>
  );
};

const Planet = ({ name }) => {
  return (
    <Canvas camera={{ position: [0, 0, 400], fov: 45 }}>
      <Suspense fallback={null}>
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.4} />

        {/* Main directional light (sun) */}
        <directionalLight position={[5, 0, 3]} intensity={2} color="#fff" />

        {/* Subtle fill light from the opposite side */}
        <directionalLight position={[-5, 0, 3]} intensity={0.1} color="#fff" />
        {/* <pointLight position={[-5, 0, 0]} intensity={1} color="#CCF" /> */}

        {/* Render the planet */}
        <PlanetBase name={name} />
      </Suspense>
    </Canvas>
 
  );
};

export default Planet;
