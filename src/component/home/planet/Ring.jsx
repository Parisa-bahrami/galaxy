import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

// Helper to load textures with common settings
const useLoadTexture = (texturePath) => {
  const texture = useTexture(texturePath);

  if (texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 5;
  }

  return texture;
};

const Ring = ({ radius, texture }) => {
  const ringTexture = useLoadTexture(texture);

  // Create ring geometry
  const geometry = useMemo(() => {
    const ringGeometry = new THREE.RingGeometry(radius * 1.5, radius * 2.3, 64);
    const pos = ringGeometry.attributes.position;
    const v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      ringGeometry.attributes.uv.setXY(
        i,
        v3.length() < radius * 1.8 ? 0 : 1,
        1
      );
    }
    return ringGeometry;
  }, [radius]);

  return (
    <mesh rotation={[Math.PI / 2 - 0.3, 0.2, 0]}>
      <primitive object={geometry} />
      <meshBasicMaterial
        map={ringTexture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Ring;
