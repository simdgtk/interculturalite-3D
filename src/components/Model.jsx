import React, { useState } from "react";
import { useGLTF, Float, Html } from "@react-three/drei";
import Modal from "./Modal";

export default function Model({ props, sport = false, rituel = false }) {
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
          title: "Rite de passage des Satere-Mawe",
          image_url: "./images/satere.webp",
          paragraph:
            "Les rites de passage sont de plus en plus rares dans le monde moderne. Cependant, certains peuples perpétuent ces traditions. L’un d’entre eux est celui des Sateré-Mawé. Ce peuple est un groupe indigène vivant dans la région amazonienne, dans l'État brésilien d'Amazonas et une partie du Pará. Ils sont connus pour leur rite de passage extrêmement douloureux. Ce rite est destiné aux jeunes hommes pour leur passage à la majorité. Souvent, ces jeunes garçons sont âgés de 12 ans. Ils nomment ce rite : la cérémonie du gant de fourmis. Durant cette cérémonie, les jeunes garçons doivent mettre leur main dans ces gants remplis de fourmis et se font piquer par celles-ci. Les fourmis qu’ils utilisent portent le nom de fourmis balles de fusil, car leur piqûre fait tellement mal qu’on dirait qu’on nous tire dessus. Durant cette cérémonie, il n'est pas rare que certains jeunes hommes s’évanouissent ou hallucinent. Ce rite permet de tester la force et le courage de ces jeunes hommes dans le but qu’ils passent à l’âge adulte. Toutefois, il faut savoir que ce rite dure 10 minutes, mais qu’ils doivent le surmonter une vingtaine de fois dans l’année de leur passage à l’âge adulte.",
        },
      },
      {
        pin2: {
          id: 2,
          title: "Manene",
          image_url: "./images/Manene.webp",
          paragraph:
            "Au cœur des montagnes de Sulawesi, en Indonésie, un rituel fascinant se déroule tous les trois ans, le Manene. ci, la mort ne marque pas la fin, mais une continuité avec les vivants. Les familles déterrent leurs défunts, les habillent de vêtements neufs et les exposent au regard de tous, comme s’ils faisaient à nouveau partie de la communauté. Les visages des morts, parfois étonnamment bien conservés, défilent à travers le village dans une procession calme et respectueuse. Une vieille femme, serrant la main de son mari décédé, murmure, 'Il veille toujours sur nous'. Pour les habitants, la mort n'est qu'un passage, un état différent mais jamais vraiment absent. Le mystère du Manene réside dans cette étrange proximité avec la mort. Ici, elle est célébrée comme une étape de la vie, laissant à ceux qui assistent à cette cérémonie l’impression troublante que les frontières entre les mondes ne sont peut-être pas aussi nettes qu’elles paraissent.",
        },
      },
      {
        pin3: {
          id: 3,
          title: "Ganga Aarti à Varanasi",
          image_url: "./images/GangaAarti.webp",
          paragraph:
            "Au crépuscule, sur les rives sacrées du Gange à Varanasi, une magie se déploie chaque soir : le Ganga Aarti. Les lumières vacillantes des lampes en laiton se reflètent sur les eaux sombres du fleuve, tandis que les prêtres, en habits traditionnels, exécutent des mouvements gracieux au rythme des chants dévotionnels. Ce rituel, destiné à honorer Mère Ganga, semble suspendre le temps, capturant l'attention des milliers de fidèles et de curieux rassemblés sur les ghats.Une légende raconte que les flammes des lampes représentent l'âme des défunts qui, à travers ce rituel, trouvent la paix dans les eaux sacrées. D’autres disent que ce sont les prières des vivants qui flottent sur les vagues, guidées par le souffle du vent. Quoi qu'il en soit, il est difficile de ne pas se sentir transporté dans une dimension spirituelle, où chaque son de cloche et chaque volute d'encens semble murmurer un secret ancien. Certains initiés prétendent que si l’on ferme les yeux à cet instant précis et écoute attentivement, on pourrait entendre les voix des ancêtres se mêler au chant des prêtres, emportées par les eaux du Gange, jusqu’à disparaître dans les brumes mystiques de l’horizon.",
        },
      },
      {
        pin4: {
          id: 4,
          title: "Thaipusam",
          image_url: "./images/thaipusam.webp",
          paragraph:
            "Imaginez-vous au cœur de la nuit, entouré d'une foule compacte, les visages illuminés par les flammes des lampes à huile. Les chants résonnent dans l'air chaud et moite, rythmés par les tambours, tandis que des hommes et des femmes, pieds nus, avancent lentement, presque en transe. Leurs corps sont parés de chaînes, d’aiguilles, et de crochets qui percent leur peau, mais leur visage est serein, comme s'ils n’étaient plus là, portés par une foi qui transcende la douleur. C'est ici, dans cette atmosphère presque irréelle, que se déroule le Thaipusam, une fête hindoue à la fois fascinante et intimidante. Ce rituel, célébré principalement par la communauté tamoule, est dédié au dieu Murugan, fils de Shiva, le guerrier divin. Les participants entreprennent un pèlerinage, portant des 'kavadi', des structures souvent très lourdes et décorées, pour honorer leurs vœux ou demander protection. Un homme, la quarantaine, raconte qu'il a fait cette marche pour la première fois à l'âge de 12 ans, pour prier pour la guérison de son père malade. 'J'ai senti que ce n’était pas mon corps qui avançait', se souvient-il, 'comme si Murugan m’avait pris par la main'. D'autres, les yeux brillants de dévotion, murmurent des récits similaires, où douleur et foi se mêlent, formant un lien presque magique entre le ciel et la terre. Ce festival est une véritable rencontre entre le sacré et l'humain, où les croyances sont vécues intensément, et où l’on se demande, jusqu’à la fin, comment cette foi peut rendre le corps aussi insensible à la souffrance, et l'âme si légère.",
        },
      },
      {
        pin5: {
          id: 5,
          title: "Tête réduite",
          image_url: "./images/tete.webp",
          paragraph:
            "Les tsantsas, ou têtes réduites, sont des objets rituels réalisés en particulier par les Shuars, un des peuples autochtones d’Amérique du Sud des forêts de la haute Amazonie. Ces têtes réduites sont souvent liées aux Jivaros, une appellation péjorative car créée par les colons espagnols voulant dire “sauvage”, qui regroupe plusieurs peuples indigènes dont les Shuars. Les Shuars étant des chasseurs de têtes, ils conservent les têtes de leurs ennemis et les utilisent ensuite comme fétiches. Pour eux, la part immortelle de l’âme du mort y reste et c’est pour empêcher l’ennemi de se venger et s’emparer de sa force qu’ils enferment son esprit avant qu’il ne s’échappe du corps. Pour réduire une tête de manière traditionnelle, il suffit de dépouiller la tête de sa peau, ses os, dents et yeux puis de la mettre la peau à bouillir dans des plantes pour la rendre plus résistante. Pour la rétrécir, on y introduit des galets et du sable brûlants. Finalement, la tête est suspendue “dans la fumée du foyer de la cuisine” où elle rétrécira progressivement et en 3 à 4 mois. C’est Robert de Wavrinson, un cinéaste belge qui a pu filmer dans son documentaire Au pays du scalp ce rite et le rapporter aussi précisément, en 1931. Quand la tête fait la taille d’une orange, les paupières, les narines et la bouches sont cousues, le crane est rempli de feuillage et la peau est teinte en noir. Une fois la tête réduite, elle était utilisée lors de cérémonies. Ces rites incluaient des chants et des danses pour renforcer la cohésion et le pouvoir de la communauté. À partir de 1860, il se développe en Europe un engouement fort pour les tsantsas. Le contexte colonial amène à la fascination d’un peuple non civilisé pour les occidentaux de l’époque car ayant résisté à la colonisation et à l'évangélisation. Ces têtes réduites deviennent alors des objets de collection, poussant les Shuars à chasser des têtes uniquement pour les vendre.",
        },
      },
      {
        pin6: {
          id: 6,
          title: "Cempasúchil",
          image_url: "./images/Cempasuchil.webp",
          paragraph:
            "Le Cempasúchil ou Rose d'Inde Dans l'ancienne civilisation aztèque, la nature et le cycle de la vie étaient au centre des croyances spirituelles. Les Aztèques, fascinés par les forces naturelles, vénéraient une fleur en particulier, qu'ils appelaient Cempasúchil, un mot dérivé du nahuatl, signifiant 'fleur aux vingt pétales' (cempohualli pour 'vingt' et xochitl pour 'fleur'). Ce nombre, sacré dans la culture aztèque, représentait la complétude et l'abondance, renforçant ainsi l'idée de cycle de la vie et de la mort. Le Cempasúchil était perçu comme une incarnation de la lumière solaire et était associé à deux divinités majeures : Tonatiuh, le dieu du soleil, et Mictlantecuhtli, le dieu des morts. La fleur jouait un rôle crucial lors des rites funéraires, où elle guidait les âmes des défunts vers Mictlan, le royaume des morts. Le Cempasúchil, aussi très connu sous le nom d'œillet d'Inde, est originaire du Mexique, son nom de 'Rose d'Inde' découle de la grande confusion historique liée aux premières explorations européennes, car cette fleur ne possède en réalité aucun lien avec l’Inde. Aujourd'hui, bien que des siècles se soient écoulés, cette fleur continue d'incarner des symboles puissants. Durant le Día de los Muertos, le Cempasúchil occupe une place centrale. Ses pétales éclatants, souvent orange ou jaune, symbolisent la vie et le soleil. Mais c’est dans son association avec la mort et le souvenir des défunts que réside sa véritable importance. Utilisée pour orner les autels (ofrendas) et les tombes, la fleur forme un pont symbolique entre le monde des vivants et celui des morts. Ses pétales, dispersés tout au long du chemin vers les autels, sont censés guider les âmes des morts vers leurs proches qui les honorent. De nos jours, cette fleur porteuse d’une grande histoire, la raconte aussi à travers le monde, perpétuant ses symboles d'union et de continuité.",
        },
      },
      {
        pin7: {
          id: 7,
          title: "Masque de Côte d'Ivoire",
          image_url: "./images/mask.webp",
          paragraph:
            "Le guerrier protège la tribu et participe aux batailles.",
        },
      },
      {
        pin8: {
          id: 8,
          title: "l’origine du Jujitsu",
          image_url: "./images/JUJITSU.webp",
          paragraph:
            "Le jujitsu, cet art martial ancestral, trouve ses racines dans le Japon féodal, à une époque où les samouraïs dominaient le champ de bataille. Contrairement à ce que l'on pourrait penser, il n'a pas été conçu comme une simple technique de combat, mais plutôt comme un art subtil destiné à maîtriser un adversaire sans armes, souvent lourdement équipé en armure. Les samouraïs, parfois privés de leur sabre, devaient apprendre à se défendre avec leur corps seul. C'est ainsi que le jujitsu est né, mêlant intelligence tactique et force brute. Une des légendes raconte qu'un médecin japonais du nom de Shirobei Akiyama, fasciné par les techniques de combat, se serait inspiré des arbres durant une tempête d’hiver. Il observa que les branches rigides des plus grands arbres se brisaient sous le poids de la neige, tandis que les branches flexibles des saules ployaient sans se rompre. Cette observation aurait inspiré l'essence même du jujitsu : plier sans céder, utiliser la force de l'autre contre lui-même. Certains disent que le secret du jujitsu se trouve encore aujourd'hui caché dans les montagnes brumeuses du Japon, transmis de maître en élève, de génération en génération, à ceux qui savent écouter le silence entre les mouvements… Le jujitsu, en tant qu'art martial fondateur, a donné naissance à de nombreuses disciplines modernes.",
        },
      },
      {
        pin9: {
          id: 9,
          title: "Kin-Ball",
          image_url: "./images/Kin-ball.webp",
          paragraph:
            "Le kin-ball, peu connu du grand public, est pourtant un sport qui intrigue et fascine. Originaire du Canada, il est souvent décrit comme un jeu collectif hors du commun. Imaginez trois équipes sur un même terrain, chacune composée de quatre joueurs, devant manœuvrer une gigantesque balle de 1,22 mètre de diamètre. Mais ici, pas de compétition directe, car la clé du kin-ball repose sur la coopération et la stratégie collective. Les joueurs doivent se coordonner à la perfection pour envoyer la balle dans les airs tout en cherchant à piéger les deux autres équipes. Le mystère réside dans cette quête subtile d'équilibre entre agilité, intelligence et respect des autres. Chaque équipe, sans jamais se confronter de manière violente, tente de maintenir la balle en mouvement tout en gardant un œil sur les adversaires. Il y a une forme d’élégance dans ce ballet sportif où la confrontation n'est jamais frontale, mais réside plutôt dans l'esprit de jeu. Une partie de kin-ball, c'est un peu comme observer un puzzle humain en action, où chaque mouvement a un impact crucial sur le dénouement. À la fin, il n’y a qu’un seul gagnant, mais le secret du jeu se cache dans la manière dont tout le monde a dû collaborer pour y arriver.",
        },
      },
      {
        pin10: {
          id: 10,
          title: "Pok-ta-Pok",
          image_url: "./images/Poktapok.webp",
          paragraph:
            "Dans les jungles luxuriantes de la péninsule du Yucatán, un sport ancien, chargé de symboles et de mystères, se joue depuis des siècles : le Pok-ta-Pok. Les rituels autour de ce jeu, pratiqué par les Mayas, sont bien plus qu'une simple compétition, ils incarnent des croyances spirituelles profondes et des rites sacrés. Sur un terrain de jeu en pierre, les athlètes s'affrontent avec agilité et précision, propulsant une balle en caoutchouc lourd à l'aide de leurs hanches, de leurs coudes et de leurs genoux. Ce n’est pas seulement un défi physique, mais un acte de dévotion. La victoire est célébrée, mais la défaite peut être tout aussi significative. Certains croient que le destin des joueurs est lié aux dieux, et que le résultat du match peut influencer les récoltes ou même la paix entre les cités. Les spectateurs, souvent en transe, scandent et acclament, leur excitation alimentant l'énergie qui émane du terrain. Alors que les feuilles bruissent dans la chaleur tropicale, les participants se battent avec honneur, sachant que leurs mouvements portent l'écho d'une culture riche et spirituelle.  Au-delà de la compétition, c’est un hommage à la vie elle-même, un rituel vibrant, connu sous le nom de Pok-ta-Pok.",
        },
      },
      {
        pin11: {
          id: 11,
          title: "Njom, la lutte sénégalaise",
          image_url: "./images/Lutte.webp",
          paragraph:
            "Le guerrier protège la tribu et participe aux batailles.",
        },
      },
      {
        pin12: {
          id: 12,
          title: "L'ISS, carrefour d'interculturalité",
          image_url: "./images/iss.webp",
          paragraph:
            "La station spatiale internationale incarne un espace unique d’interculturalité et de collaboration. Depuis sa mise en orbite en 1998, elle a accueilli seulement 230 astronautes issus d’agences spatiales de nations différentes (NASA(USA), Roscosmos(Russie), 'ESA (Europe), la JAXA (Japon) et la CSA (Canada)). Occupée en permanence par un peu moins d’une dizaine d’astronautes aux nationalités et cultures différentes, la station permet d’élargir la recherche scientifique. De par ces 400m3 habitables, on retrouve des hommes et des femmes aux cultures qui divergent mais travaillent ensemble, apportant chacun une opinion et une expertise unique et cela, grâce à cette diversité. Dans les facteurs culturels majeurs du quotidien, la barrière linguistique s’apparente à une problématique majeure. C’est ainsi qu’il a été établi que la langue d’usage à bord de l’ISS est l’anglais. Finalement, après ces 30 années de fonctionnement, la NASA a annoncé, le 26 juin 2024, la retraite de l’ISS. Dans son communiqué, elle annonce le démantèlement et la désorbitation du laboratoire pour 2031, grâce à l’aide de SpaceX. Toutefois, plusieurs entreprises privées seraient susceptibles de construire un nouveau complexe orbital afin de remplacer l’ISS.",
        },
      }
    ];

    const pinKey = `pin${pinNumber}`;
    const pinData = data.find((item) => item[pinKey]);

    if (pinData) {
      setModalContent({
        title: pinData[pinKey].title,
        paragraph: pinData[pinKey].paragraph,
        image_url: pinData[pinKey].image_url,
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
            image_url={modalContent.image_url}
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
            <group onClick={(event) => handleClick(12, event)}
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
        {rituel && (
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
        )}
        {rituel && (
          <group scale={0.005} onClick={(event) => handleClick(2, event)}>
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
        )}
        {rituel && (
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
        )}
        {rituel && (
        <group scale={0.005} onClick={(event) => handleClick(4, event)}>
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
        )}
        {rituel && (
        <group scale={0.005} onClick={(event) => handleClick(5, event)}>
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
        )}
        {rituel && (
        <group scale={0.005} onClick={(event) => handleClick(6, event)}>
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
        )}
        {rituel && (
        <group scale={0.005} onClick={(event) => handleClick(7, event)}>
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
        )}
        {sport && (
        <group scale={0.005} onClick={(event) => handleClick(8, event)}>
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
        )}
        {sport && (
        <group scale={0.005} onClick={(event) => handleClick(9, event)}>
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
        )}
        {sport && (
        <group scale={0.005} onClick={(event) => handleClick(10, event)}>
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
        )}
        {sport && (
        <group scale={0.005} onClick={(event) => handleClick(11, event)}>
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
        )}
      </group>
    </>
  );
}

useGLTF.preload("/earthCompressed.glb");
