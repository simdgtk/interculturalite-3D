import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import Interculturality from "./Interculturality";

export default function Scene() {
  const cameraRef = useRef();
  const canvasRef = useRef();

  // catégorie peuple
  const [isSport, setIsSport] = useState(true);
  const [isRitual, setIsRitual] = useState(true);

  // autre catégories, à compléter dans le futur

  const [isClosed, setIsClosed] = useState(true);

  // mots qui changent
  const nourritureWords = [
    "food", // Anglais
    "طعام", // Arabe
    "Nourriture", // Français
    "食物", // Chinois (Simplifié)
    "Comida", // Espagnol
    "Comida", // Portugais
    "Еда", // Russe
    "Essen", // Allemand
    "भोजन", // Hindi
    "Cibo", // Italien
    "음식", // Coréen
    "食べ物", // Japonais
    "Eten", // Néerlandais
    "Comida", // Galicien
    "Jedlo", // Slovaque
    "Τροφή", // Grec
    "Makanan", // Indonésien
    "Yemek", // Turc
    "अन्न", // Marathi
    "Азык", // Tatar
    "खाना", // Népalais
    "อาหาร", // Thaï
    "អាហារ", // Khmer
    "ອາຫານ", // Laotien
    "Ēdiens", // Letton
    "Hrana", // Croate
    "食物", // Taïwanais
    "Abinci", // Haoussa
    "Khabar", // Bengali
    "Ounjẹ", // Yoruba
    "Ēdiens", // Letton
    "Jídlo", // Tchèque
    "Їжа", // Ukrainien
    "Ruoka", // Finnois
    "Yemək", // Azéri
    "Тамак", // Kirghiz
    "Храна", // Serbe
    "ອາຫານ", // Lao
    "ਖਾਣ", // Pendjabi
    "Овқат", // Ouzbek
    "Chakula", // Swahili
    "خۆراک", // Kurde (Sorani)
    "Mat", // Norvégien (Nynorsk)
    "Nfufu", // Lingala
    "Ежа", // Biélorusse
    "מזון", // Hébreu
    "ආහාර", // Cinghalais
    "Mat", // Suédois
    "Iýmit", // Turkmène
    "Ikel", // Maltais
    "Jedlo", // Slovaque
    "உணவு", // Tamoul
    "ખોરાક", // Gujarati
    "ਭੋਜਨ", // Pendjabi (Gurmukhi)
    "Cuntada", // Somali
    "ᐊᖑᓂᖅ", // Inuktitut
    "Pagkain", // Tagalog
    "Jevonn", // Konkani
    "आहारः", // Sanskrit
    "Meaai", // Samoan
    "Тамақ", // Kazakh
    "Hrana", // Bosnien
    "Храна", // Bulgare
    "Ғизо", // Tadjik
    "Nuku", // Éwé (Togo)
    "Sakafo", // Malgache
    "អាហារ", // Khmer (Cambodge)
    "भोजन", // Konkani (Goa)
    "Manĝaĵo", // Espéranto
  ];
  const cultureWords = [
    "culture", // Anglais
    "ثقافة", // Arabe
    "Culture", // Français
    "文化", // Chinois (Simplifié)
    "Cultura", // Espagnol
    "Cultura", // Portugais
    "Культура", // Russe
    "Kultur", // Allemand
    "संस्कृति", // Hindi
    "Cultura", // Italien
    "문화", // Coréen
    "文化", // Japonais
    "Cultuur", // Néerlandais
    "Cultura", // Galicien
    "Kultúra", // Slovaque
    "Πολιτισμός", // Grec
    "Budaya", // Indonésien
    "Kültür", // Turc
    "संस्कृती", // Marathi
    "Мәдәният", // Tatar
    "संस्कृति", // Népalais
    "วัฒนธรรม", // Thaï
    "វប្បធម៌", // Khmer
    "ວັດທະນະທຳ", // Laotien
    "Kultūra", // Letton
    "Kultura", // Croate
    "文化", // Taïwanais
    "Al'adu", // Haoussa
    "Sanskriti", // Bengali
    "Aṣa", // Yoruba
    "Kultūra", // Letton
    "Kultura", // Tchèque
    "Культура", // Ukrainien
    "Kulttuuri", // Finnois
    "Mədəniyyət", // Azéri
    "Маданият", // Kirghiz
    "Култура", // Serbe
    "ວັດທະນະທຳ", // Lao
    "ਸਭਿਆਚਾਰ", // Pendjabi
    "Маданият", // Ouzbek
    "Utamaduni", // Swahili
    "کلتور", // Kurde (Sorani)
    "Kultur", // Norvégien (Nynorsk)
    "Litteru", // Lingala
    "Культура", // Biélorusse
    "תרבות", // Hébreu
    "සංස්කෘතිය", // Cinghalais
    "Kultur", // Suédois
    "Medeniýet", // Turkmène
    "Kultura", // Maltais
    "Kultúra", // Slovaque
    "கலாசாரம்", // Tamoul
    "સંસ્કૃતિ", // Gujarati
    "ਸੰਸਕ੍ਰਿਤੀ", // Pendjabi (Gurmukhi)
    "Dhaqanka", // Somali
    "ᐃᓄᖅᑲᓇᐃᑦᑐᑦ", // Inuktitut
    "Kultura", // Tagalog
    "Sanskruti", // Konkani
    "संस्कृतिः", // Sanskrit
    "Aganuu", // Samoan
    "Мәдениет", // Kazakh
    "Kultura", // Bosnien
    "Култура", // Bulgare
    "Фарҳанг", // Tadjik
    "Eʋegbe", // Éwé (Togo)
    "Kolontsaina", // Malgache
    "វប្បធម៌", // Khmer (Cambodge)
    "संस्कृति", // Konkani (Goa)
    "Kulturo", // Espéranto
  ];
  const peupleWords = [
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
  ];
  const internationalWords = [
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
  const [words, setWords] = useState(internationalWords);

  //gsap
  gsap.registerPlugin(useGSAP);

  const list = useRef(null);
  const animate = () => {
    gsap.fromTo(
      list.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );
  };
  useEffect(() => {
    if (!isClosed) {
      animate();
    }
  }, [isClosed]);

  return (
    <>
      <div className="earth">
        <Interculturality internationalWords={words} />
        <div className="filters">
          <button onClick={() => setIsClosed(!isClosed)}>
            {isClosed ? (
              <img src="./burger.svg" alt="burger menu" />
            ) : (
              <img src="./burger-close.svg" alt="burger menu" />
            )}
          </button>
          <div className="cache">
            <ul ref={list} className={isClosed ? "closed" : ""}>
              <li>
                <button
                  onClick={() => {
                    setWords(peupleWords);
                  }}
                >
                  Peuple
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setWords(nourritureWords);
                    console.log(words);
                  }}
                >
                  Nourriture
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setWords(cultureWords);
                    console.log(words);
                  }}
                >
                  Culture
                </button>
              </li>
            </ul>
          </div>
        </div>
        {JSON.stringify(words) === JSON.stringify(peupleWords) && (
          <>
            <button
              onClick={() => {
                setIsSport(!isSport);
              }}
            >
              Sports
            </button>
            <button
              onClick={() => {
                setIsRitual(!isRitual);
              }}
            >
              Rituels
            </button>
          </>
        )}
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
          <OrbitControls
            enablePan={false}
            enableDamping
            maxDistance={10}
            minDistance={5}
          />
          {/* <axesHelper args={[5]} /> */}
          <directionalLight
            position={[2, 5, 2]}
            intensity={2}
            color={0xe7e7e7}
          />
          <Model
            sport={
              isSport && JSON.stringify(words) === JSON.stringify(peupleWords)
                ? true
                : false
            }
            rituel={
              isRitual && JSON.stringify(words) === JSON.stringify(peupleWords)
                ? true
                : false
            }
          />
        </Canvas>
      </div>
    </>
  );
}
