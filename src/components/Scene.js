import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  const cameraRef = useRef();
  const canvasRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation(); // pour stopper la propagation, que les éléments de derrière ne soient pas cliqués
    console.log("Vous avez cliqué sur le modèle !");
  };

  return (
    <>
      <div className="earth">
        <Canvas
          camera={{
            fov: 70,
            near: 0.1,
            far: 1000,
            position: [2, 0, 6],
          }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
          style={{ height: "100vh", width: "100vw" }}
          ref={canvasRef}
        >
          <ambientLight intensity={4} />
          <Environment
            preset="sunset"
            backgroundIntensity={2}
            backgroundBlurriness={1}
          ></Environment>
          <OrbitControls enableDamping maxDistance={10} minDistance={5} />

          <directionalLight
            position={[2, 5, 2]}
            intensity={2}
            color={0xe7e7e7}
          />
          {/* appelle la fonction handleClick au clic */}
          <Model onClick={handleClick} />
        </Canvas>
      </div>
    </>
  );
}
