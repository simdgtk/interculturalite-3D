import "../styles/_fallback.scss";
import "../styles/_variables.scss"; 
import { useProgress } from "@react-three/drei";

export default function Fallback() {
  const { progress } = useProgress();

  return (
    <div className="fallback">
      <div className="loader">
        <h1>Chargement</h1>
        {/* Affiche la progression */}
        <span>{progress < 98 ? progress.toPrecision(2) : 98} %</span>

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
