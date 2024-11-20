import React, { useState, useEffect } from "react";
import "../styles/DoacaoPopUp.css";

/**
 * Componente DoacaoPopUp
 *
 * Este componente exibe um popup de doação após um determinado tempo, 
 * caso o popup não tenha sido exibido nas últimas 3 horas.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.overlay - Classe CSS para o overlay do popup.
 * @param {string} props.gridPosition - Classe CSS para a posição do grid do popup.
 * @param {string} props.imageProps - Classe CSS para a imagem do popup.
 * @param {string} props.image - URL da imagem de fundo do popup.
 * @param {string} props.text - Classe CSS para o texto do popup.
 * @param {string} props.doeButton - Classe CSS para o botão de doação.
 *
 * @returns {JSX.Element} O componente DoacaoPopUp.
 */
const DoacaoPopUp = ({
  overlay,
  gridPosition,
  imageProps,
  image,
  text,
  doeButton,
}) => {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do popup

  useEffect(() => {
    // Tempo de expiração do popup em milissegundos (3 horas)
    const popupExpiryTime = 3 * 60 * 60 * 1000;

    // Recupera a data e hora do último popup exibido do localStorage
    const popupData = localStorage.getItem("popupShown");
    const now = new Date().getTime();

    // Se o popup nunca foi mostrado ou se o tempo de expiração foi atingido
    if (!popupData || now - JSON.parse(popupData).timestamp > popupExpiryTime) {
      // Define um timer para exibir o popup após 5 segundos
      const timer = setTimeout(() => {
        setShowPopup(true);

        // Armazena no localStorage a data e hora do último popup exibido
        localStorage.setItem(
          "popupShown",
          JSON.stringify({ shown: true, timestamp: now })
        );
      }, 5000);

      // Limpa o timer quando o componente é desmontado
      return () => clearTimeout(timer);
    }
  }, []);

  // Função para redirecionar para a página de doações
  const redirectToDonationPage = () => {
    setShowPopup(false);
    window.location.href = "/doacoes";
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
              onClick={(e) => setShowPopup(false)} // Fecha o popup ao clicar no "X"
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
              <button onClick={redirectToDonationPage} className={doeButton}>
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
