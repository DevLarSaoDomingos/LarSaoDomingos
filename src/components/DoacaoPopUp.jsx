import React, { useState, useEffect } from "react";
import "../styles/DoacaoPopUp.css";

const DoacaoPopUp = ({
  overlay,
  gridPosition,
  imageProps,
  image,
  text,
  doeButton,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Verifica se o popup já foi exibido
    const popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        // Armazena no localStorage que o popup já foi exibido
        localStorage.setItem("popupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div onClick={(e) => setShowPopup(false)} className={overlay}>
          <div className={gridPosition}>
            <div
              style={{
                position: "absolute",
                right: "30px",
                top: "15px",
                color: "#00b2ee",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={(e) => setShowPopup(false)}
            >
              X
            </div>
            <div
              className={imageProps}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
            <div className={text}>
              <h1>Nossas crianças precisam da sua ajuda</h1>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://exemplo.com/doacao"
                alt="QR Code para doação"
              />
              <button onClick={closePopup} className={doeButton}>
                Doe Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoacaoPopUp;
