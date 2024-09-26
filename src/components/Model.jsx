import React, { useState } from "react";
import { useGLTF, Float, Html } from "@react-three/drei";
import Modal from "./Modal";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/earthCompressed.glb");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    paragraph: "",
  });

  const handleClick = (pinNumber, event) => {
    event.stopPropagation(); // Arrête la propagation de l'événement

    const data = [
      {
        pin1: {
          id: 1,
          title: "Introduction à React",
          image_url: "https://example.com/images/react-intro.png",
          paragraph:
            "React est une bibliothèque JavaScript populaire pour construire des interfaces utilisateurs interactives et réactives.",
        },
      },
      {
        pin2: {
          id: 2,
          title: "Découverte de Three.js",
          image_url: "https://example.com/images/threejs-intro.png",
          paragraph:
            "Three.js permet de créer des graphiques 3D interactifs sur le web en utilisant WebGL.",
        },
      },
      {
        pin3: {
          id: 3,
          title: "Optimiser une page web avec Next.js",
          image_url: "https://example.com/images/nextjs-optimization.png",
          paragraph:
            "Next.js est un framework React permettant de rendre vos applications plus performantes grâce à la génération statique et au rendu côté serveur.",
        },
      },
    ];

    const pinKey = `pin${pinNumber}`;
    const pinData = data.find((item) => item[pinKey]);

    if (pinData) {
      setModalContent({
        title: pinData[pinKey].title,
        paragraph: pinData[pinKey].paragraph,
      });
      setIsModalOpen(true); // Ouvre la modal
    } else {
      console.log("Pin not found");
    }
  };
  return (
    <>
      {isModalOpen && (
        <Html fullscreen>
          <Modal
            title={modalContent.title}
            paragraph={modalContent.paragraph}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)} // Fermer la modal
          />
        </Html>
      )}

      <group {...props} dispose={null} rotation={[0, -4.2, 0.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.earth.geometry}
          material={materials.terre}
          scale={0.005}
        />
        <Float speed={1} rotationIntensity={2} floatIntensity={1}>
          <group
            position={[1.664, 2.266, -1.337]}
            rotation={[-0.72, -0.175, 2.702]}
            scale={[0.039, 0.071, 0.039]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_1.geometry}
              material={materials["Material.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_2.geometry}
              material={materials["Material.013"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_3.geometry}
              material={materials["Material.014"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_4.geometry}
              material={materials["Material.015"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_5.geometry}
              material={materials["Material.016"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_6.geometry}
              material={materials["Material.017"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_7.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_8.geometry}
              material={materials["Material.019"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_9.geometry}
              material={materials["Material.020"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_10.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_11.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_12.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_13.geometry}
              material={materials["Material.024"]}
            />
          </group>
        </Float>
        <group scale={0.005} onClick={(event) => handleClick(2, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials.rouge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(3, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.rouge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(1, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.rouge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(5, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.vert}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(3, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.vert}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(1, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.vert}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(2, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.vert}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(3, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.rouge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(1, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.rouge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(2, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials.rouge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials.metal}
          />
        </group>
        <group scale={0.005} onClick={(event) => handleClick(3, event)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials.rouge}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials.metal}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/earthCompressed.glb");
