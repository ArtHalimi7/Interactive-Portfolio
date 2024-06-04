import React, { useRef } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/neptune.gltf');
  const { actions } = useAnimations(animations, group);

  // Load the textures from the public/textures folder
  const planetTexture = useTexture('/textures/Planeta_baseColor.jpeg');
  const atmosphereTexture = useTexture('/textures/Atmosfera_normal.png');

  // Apply the texture to the materials
  if (materials.Planeta) {
    materials.Planeta.map = planetTexture;
    materials.Planeta.opacity = 1; // Set opacity to 1.0 for full opacity
    materials.Planeta.needsUpdate = true;
  }

  if (materials.Atmosfera) {
    materials.Atmosfera.map = atmosphereTexture;
    materials.Atmosfera.opacity = 1; // Set opacity to 1.0 for full opacity
    materials.Atmosfera.needsUpdate = true;
  }

  // Rotate the object
  useFrame(() => {
    group.current.rotation.y += 0.002; 
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="943e82ae1e91464bb6057ce325b1063bfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Planeta" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Planeta_Planeta_0"
                    geometry={nodes.Planeta_Planeta_0.geometry}
                    material={materials.Planeta}
                  />
                </group>
                <group name="Atmosfera" rotation={[-Math.PI / 2, 0, 0]} scale={0.3}>
                  <mesh
                    name="Atmosfera_Atmosfera_0"
                    geometry={nodes.Atmosfera_Atmosfera_0.geometry}
                    material={materials.Atmosfera}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/neptune.gltf');