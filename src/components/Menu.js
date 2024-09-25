import "../styles/_menu.scss";
import React from "react";

export default function Menu() {
    return (
        <div className="menu">
            <div className="container">
                <div className="title-menu">
                    <h1>Interculturalité</h1>
                </div>
                <div className="img-menu">
                    <img src="./human1.png" alt="human 1"></img>
                </div>
                <div className="container-description-menu">
                    <div>
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
                                Un membre du genre Homo, en particulier un membre de l’espèce Homo
                                sapiens, qui se distingue par un cerveau développé et la capacité
                                de langage. Est pleinement humain celui qui, conscient de sa
                                fragilité et des conséquences de ses entreprises, prend à cœur
                                d’en assumer la responsabilité en tentant de se hisser à la
                                hauteur d’un quadruple respect : respect de lui-même, de l’autre,
                                et de l’environnement naturel et culturel auquel il doit
                                d’exister.
                            </p>
                        </div>
                    </div>
                    <div>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
