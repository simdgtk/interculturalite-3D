import { useEffect, useState, useRef } from "react";

export default function Interculturality() {
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
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(interculturalityWords[0]);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === interculturalityWords.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(intervalRef.current);
  }, [interculturalityWords.length]);

  useEffect(() => {
    setWord(interculturalityWords[index]);
  }, [index, interculturalityWords]);
  return (
    <div className="interculturality">
      <span id="span">
        {word}
      </span>
    </div>
  );
}
