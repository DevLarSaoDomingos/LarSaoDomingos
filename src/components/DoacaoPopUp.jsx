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
    // Tempo de expiração do popup em milissegundos (3 horas)
    const popupExpiryTime = 3 * 60 * 60 * 1000;

    const popupData = localStorage.getItem("popupShown");
    const now = new Date().getTime();

    // Se o popup nunca foi mostrado ou se o tempo de expiração foi atingido
    if (!popupData || now - JSON.parse(popupData).timestamp > popupExpiryTime) {
      const timer = setTimeout(() => {
        setShowPopup(true);

        // Armazena no localStorage a data e hora do último popup exibido
        localStorage.setItem(
          "popupShown",
          JSON.stringify({ shown: true, timestamp: now })
        );
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
