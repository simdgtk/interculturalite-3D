import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import PopupTest from "./PopupTest";
import Modal from "./Modal";
import Interculturality from "./Interculturality";

export default function Scene() {
  const cameraRef = useRef();
  const canvasRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation(); // pour stopper la propagation, que les éléments de derrière ne soient pas cliqués
    console.log("Vous avez cliqué sur le modèle !");
  };
  const [isSport, setIsSport] = useState(true);
  return (
    <>
      <div className="earth">
        <Interculturality />
        <button
          onClick={() => {
            setIsSport(!isSport);
          }}
        >
          Test
        </button>
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
          {/* <Environment
            preset="sunset"
            backgroundIntensity={2}
            backgroundBlurriness={1}
          ></Environment> */}
          <OrbitControls enableDamping maxDistance={10} minDistance={5} />
          {/* <axesHelper args={[5]} /> */}
          <directionalLight
            position={[2, 5, 2]}
            intensity={2}
            color={0xe7e7e7}
          />
          {/* appelle la fonction handleClick au clic */}
          {/* <Html
            as="div" // Wrapping element (default: 'div')
            wrapperClass // The className of the wrapping element (default: undefined)
            fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
            transform={false}
          >
            <Modal />
          </Html> */}
          <Model onClick={handleClick} sport={isSport ? true : false} />
        </Canvas>
        {/* <Modal /> */}
      </div>
    </>
  );
}
