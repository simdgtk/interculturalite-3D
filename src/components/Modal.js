import React, { useEffect, useRef } from "react";
import "../styles/_modal.scss";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

const Modal = ({ title, paragraph, image_url, isOpen, onClose }) => {
  gsap.registerPlugin(useGSAP);
  const divRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(divRef.current, { y: 250, opacity: 0, ease: "power2.out" });
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      delay: 0.3,
    });
  });
  return (
    <div
      className={`modal ${isOpen ? "open" : "closed"}`}
      id="modal"
      ref={divRef}
    >
      <div className="bloc">
        <div className="header-modal">
          <div className="title-cache">
            {title && (<h2 ref={titleRef}>{title}</h2>)}
          </div>
          <button onClick={onClose}>
            <img src="./close.svg" alt="image close"></img>
          </button>
        </div>
        <div className="body-modal">
          <div className="container-img-modal">
            <div className="img-modal">
              {image_url && (<img src={image_url} alt="image"></img>)}
            </div>
          </div>
          <div className="text-modal">
            {paragraph && (<p>{paragraph}</p>)}
          </div>
        </div>
        <div className="footer-modal">
          <div>
            <h3>VOYAGER VERS</h3>
          </div>
          <div className="link-footer-modal">
            <div className="hyperlink-modal">
              <div className="img-footer-modal"></div>
              <a href="#">Titre article 1</a>
            </div>
            <div className="hyperlink-modal">
              <div className="img-footer-modal"></div>
              <a href="#">Titre article 2</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
