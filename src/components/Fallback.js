import React, { useState, useEffect } from "react";
import './Fallback.scss'; // Assure-toi de bien inclure ce fichier SCSS

export default function Fallback() {
  // Déclare une variable d'état pour stocker le pourcentage
  const [progress, setProgress] = useState(1);

  // Utilise useEffect pour mettre à jour le pourcentage de chargement
  useEffect(() => {
    const interval = setInterval(() => {
      // Incrémente le pourcentage jusqu'à 100%
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 100); // Change toutes les 100ms (0.1s)

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fallback">
      <div className="loader">
        <h1>Chargement</h1>
        <span>{progress} %</span> {/* Affiche la progression */}
        
        {/* Barre de progression */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="info">
        <p>découvrez le monde</p>
      </div>
    </div>
  );
}
