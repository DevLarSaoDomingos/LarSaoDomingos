import React, { useState, useEffect } from "react";
import "../styles/DoacaoPopUp.css"; // Importar o arquivo CSS para as estilizações

const DoacaoPopUp = ({
  overlay,
  gridPosition,
  imageProps,
  image,
  text,
  doeButton,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  // useEffect para exibir o popup após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timeout caso o componente seja desmontado
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
