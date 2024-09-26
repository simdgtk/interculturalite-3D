import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import PopupTest from "./PopupTest";
import Modal from "./Modal";

export default function Scene() {
  const cameraRef = useRef();
  const canvasRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation(); // pour stopper la propagation, que les éléments de derrière ne soient pas cliqués
    console.log("Vous avez cliqué sur le modèle !");
  };
  const interculturalityWords = [
    "interculturality", // Anglais
    "تعدد الثقافات", // Arabe
    "Interculturalité", // Français
    "多文化主义", // Chinois (Simplifié)
    "Interculturalidad", // Espagnol
    "Interculturalidade", // Portugais
    "Межкультурность", // Russe
    "Interkulturalität", // Allemand
    "अंतरसांस्कृतिकता", // Hindi
    "Interculturalità", // Italien
    "인터컬처럴리즘", // Coréen
    "相互文化性", // Japonais
    "Interculturaliteit", // Néerlandais
    "Entreculturalidade", // Galicien
    "Medzkultúrnosť", // Slovaque
    "Μεσοπολιτισμικότητα", // Grec
    "Antarkultura", // Indonésien
    "Çokkültürlülük", // Turc
    "अंतरसंस्कृतिवाद", // Marathi
    "Байкультурность", // Tatar
    "संस्कृतिबाहुल्य", // Népalais
    "วัฒนธรรมพหุวัฒนธรรม", // Thaï
    "ពហុវប្បធម៌", // Khmer
    "ຫຼາຍວັດທະນະທຳ", // Laotien
    "Mara kultūra", // Letton
    "Međukulturalnost", // Croate
    "多文化性", // Taïwanais
    "Hira Amakulture", // Haoussa
    "Kulthodvividhata", // Bengali
    "Ba koro ógbáṇla", // Yoruba
    "Multikulturalitāte", // Letton
    "Interkultuře", // Tchèque
    "Багатокультурність", // Ukrainien
    "Väestökulttuuri", // Finnois
    "Mərkəziyyətlər", // Azéri
    "Маданиятбайлык", // Kirghiz
    "Мултикултурализам", // Serbe
    "หลายวัฒนธรรม", // Lao
    "ਕਲਚਰਲ", // Pendjabi
    "Субкультуралар", // Ouzbek
    "Mikäinen kulttuuri", // Swahili
    "بەهەنگە فرهنگی", // Kurde (Sorani)
    "Ålbumakultur", // Norvégien (Nynorsk)
    "Iako wa kulturality", // Lingala
    "Взаємокультурність", // Biélorusse
    "רב-תרבותיות", // Hébreu
    "සංස්කෘතික", // Cinghalais
    "Kulttuurienvälinen", // Suédois
    "Kültüreller arası", // Turkmène
    "L-kultura interkulturali", // Maltais
    "Medzikultúrnosť", // Slovaque
    "අන්තර්සංස්කෘතිය", // Tamoul
    "બહુ સંસ્કૃતિકતા", // Gujarati
    "ਬਹੁ-ਸੰਸਕ੍ਰਿਤੀਵਾਦ", // Pendjabi (Gurmukhi)
    "Baqaaburashada dhaqameed", // Somali
    "Daorunn maikular", // Inuktitut
    "Sya kultura", // Tagalog
    "Sanskrutikata", // Konkani
    "बहुसांस्कृतिक", // Sanskrit
    "Faʻaalia masani o aganuʻu", // Samoan
    "Көп маданияттуулук", // Kazakh
    "Medjunarodna kultura", // Bosnien
    "Velykulturnost", // Bulgare
    "Көп маданият", // Tadjik
    "Danho dubar", // Éwé (Togo)
    "Paar kulturen", // Malgache
    "Angkultur", // Khmer (Cambodge)
    "कला आंतरक्रियेत", // Konkani (Goa)
    "Transkulturaj", // Espéranto
  ];
  const words = useRef(null);
  setInterval(()=>{
  })
  return (
    <>
      <div className="earth">
        <div className="interculturality">
          <span id="span" ref={words}>Interculturality</span>
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
          <axesHelper args={[5]} />
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
          <Model onClick={handleClick} showFrance />
        </Canvas>
        {/* <Modal /> */}
      </div>
    </>
  );
}
