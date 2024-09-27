import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import PopupTest from "./PopupTest";
import Modal from "./Modal";
import Interculturality from "./Interculturality";
import "../styles/_filters.scss";

export default function Scene() {
  const cameraRef = useRef();
  const canvasRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation(); // pour stopper la propagation, que les éléments de derrière ne soient pas cliqués
    console.log("Vous avez cliqué sur le modèle !");
  };
  const [isSport, setIsSport] = useState(true);
  const [isRitual, setIsRitual] = useState(true);
  return (
    <>
      <div className="earth">
        <Interculturality
          internationalWords={[
            "people", // Anglais
            "شعب", // Arabe
            "Peuple", // Français
            "人民", // Chinois (Simplifié)
            "Pueblo", // Espagnol
            "Povo", // Portugais
            "Народ", // Russe
            "Volk", // Allemand
            "जनता", // Hindi
            "Popolo", // Italien
            "사람들", // Coréen
            "人々", // Japonais
            "Volk", // Néerlandais
            "Pobo", // Galicien
            "Ľud", // Slovaque
            "Λαός", // Grec
            "Orang", // Indonésien
            "Halk", // Turc
            "लोक", // Marathi
            "Халык", // Tatar
            "जनता", // Népalais
            "ประชาชน", // Thaï
            "ប្រជាជន", // Khmer
            "ປະຊາຊົນ", // Laotien
            "Tauta", // Letton
            "Narod", // Croate
            "人民", // Taïwanais
            "Mutane", // Haoussa
            "Manush", // Bengali
            "Eniyan", // Yoruba
            "Cilvēki", // Letton
            "Lidé", // Tchèque
            "Народ", // Ukrainien
            "Kansa", // Finnois
            "Xalqlar", // Azéri
            "Эл", // Kirghiz
            "Народ", // Serbe
            "ประชากร", // Lao
            "ਲੋਕ", // Pendjabi
            "Одамлар", // Ouzbek
            "Watu", // Swahili
            "خەڵک", // Kurde (Sorani)
            "Folk", // Norvégien (Nynorsk)
            "Bato", // Lingala
            "Народ", // Biélorusse
            "עם", // Hébreu
            "ජනතාව", // Cinghalais
            "Människor", // Suédois
            "Adamlar", // Turkmène
            "Nies", // Maltais
            "Ľudia", // Slovaque
            "மக்கள்", // Tamoul
            "લોકો", // Gujarati
            "ਲੋਕ", // Pendjabi (Gurmukhi)
            "Dadweynaha", // Somali
            "Inuit", // Inuktitut
            "Tao", // Tagalog
            "Lok", // Konkani
            "जनाः", // Sanskrit
            "Tagata", // Samoan
            "Халық", // Kazakh
            "Narod", // Bosnien
            "Народ", // Bulgare
            "Мардум", // Tadjik
            "Eʋe", // Éwé (Togo)
            "Vahoaka", // Malgache
            "ប្រជាជន", // Khmer (Cambodge)
            "जनता", // Konkani (Goa)
            "Homoj", // Espéranto
          ]}
        />
        <div className="container-filters">
          <div className="filters">
            <button
              onClick={() => {
                setIsSport(!isSport);
              }}
            >
              Test
            </button>
            <button
              onClick={() => {
                setIsRitual(!isRitual);
              }}
            >
              Test
            </button>
          </div>
          <div className="text-filter">
            <h2>Filtres</h2>
          </div>
        </div>
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
          <Model
            onClick={handleClick}
            sport={isSport ? true : false}
            rituel={isRitual ? true : false}
          />
        </Canvas>
        {/* <Modal /> */}
      </div>
    </>
  );
}
