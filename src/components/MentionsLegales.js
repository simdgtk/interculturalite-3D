import "../styles/_fallback.scss";
import "../styles/_variables.scss"; 
import { useProgress } from "@react-three/drei";

export default function MentionsLegales() {
  

  return (
    <div className="legal">
      
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>

        <p> Nom de l'éditeur : Antoine Corberand, Simon Daguet–Kargl, Alexis Juhel, Emma Dimbour, Justine Gelis  </p>
        <p> Adresse : 1 Rue Jacques Ellul, 33800 Bordeaux  </p>
       
        <h2>Hébergeur</h2>

        <p> Nom de l'hébergeur : Versel </p>

        <h2> Propriété intellectuelle </h2>

        <p> L'ensemble des contenus (textes, images, vidéos, etc.) présentés sur ce site sont protégés par des droits d'auteur. Toute reproduction, distribution, modification ou diffusion, sans l'autorisation préalable de Antoine Corberand ou Simon Daguet–Kargl ou Alexis Juhel ou Emma Dimbour ou Justine Gelis est interdite.</p>

        <h2> Responsabilité </h2>

        <p>Antoine Corberand ou Simon Daguet–Kargl ou Alexis Juhel ou Emma Dimbour ou Justine Gelis ne peut être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site, ou des informations qui y sont publiées. Les liens hypertextes présents sur ce site peuvent rediriger vers d'autres sites sur lesquels Antoine Corberand ou Simon Daguet–Kargl ou Alexis Juhel ou Emma Dimbour ou Justine Gelis n'a aucun contrôle.</p>

        <h2>Conditions d’utilisation</h2>

        <p> En accédant et en utilisant ce site, vous acceptez les présentes conditions d’utilisation. Toute violation des droits d'auteur, des marques ou des conditions générales peut entraîner des sanctions prévues par la loi. </p>

    </div>
  );
}
