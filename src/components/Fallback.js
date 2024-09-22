import React, { useState, useEffect } from "react";
import './Fallback.scss'; 

export default function Fallback() {
  const [progress, setProgress] = useState(1);

  //met à jour le pourcentage de chargement
  useEffect(() => {
    const interval = setInterval(() => {
      // Incrémente le pourcentage jusqu'à 100%
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 100); 

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fallback">
      <div className="loader">
        <h1>Chargement</h1>
        {/* Affiche la progression */}
        <span>{progress} %</span> 
        
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
