import "../styles/_menu.scss";
import React from "react";
import Interculturality from "./Interculturality";

export default function Menu({ openModal }) {
  return (
    <div className="menu">
      <div className="container">
        <div className="title-menu">
          <Interculturality small />
          {/* <h1>Interculturalité</h1> */}
        </div>
        <div className="img-menu">
          <img src="./human1.png" alt="human 1"></img>
        </div>
        <div className="container-description-menu">
          <div className="description-menu">
            <div className="container-human-menu">
              <div>
                <h2>humain</h2>
              </div>
              <div className="text-menu">
                <p>INDÉFINITION</p>
              </div>
            </div>
            <div>
              <p>
                Un membre du genre Homo, en particulier un membre de l’espèce
                Homo sapiens, qui se distingue par un cerveau développé et la
                capacité de langage...
              </p>
            </div>
          </div>
          {/* Exemple de pin déclenchant la modal */}
          <div className="link-menu">
            <button
              onClick={() =>
                openModal(
                  "Titre du pin 1",
                  "Description spécifique au pin 1..."
                )
              }
            >
              <img src="./Arrow1.svg" alt="arrow"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
