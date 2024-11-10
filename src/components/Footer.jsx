import React from "react";
import WaveSVG from "./svg/WaveSvg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0099FF",
        color: "#fff",
        paddingTop: "20px",
        position: "relative",
      }}
    >
      {/* <WaveSVG color="#0099FF" /> */}
      <div className="footer-container">
        <div>
          <h3>Entre em contato</h3>
          <p>📞 (82) 2121-1300</p>
          <p>✉️ lar@larsaodomingos.com.br</p>
          <p>📍 Avenida Gustavo Paiva, 4291 - Mangabeiras</p>
        </div>
        <div>
          <h3>Atividades</h3>
          <p>Atividades</p>
          <p>Auditórios</p>
          <p>Doações</p>
          <p>Institucional</p>
          <p>Notícias</p>
        </div>
        <div>
          <h3>Abrace Este Lar</h3>
          <p>Ginásio</p>
          <p>Livraria</p>
          <p>Bazar</p>
          <p>Voluntarie-se</p>
        </div>
        <div>
          <h3>Parceiros</h3>
        </div>
      </div>
      <div
        style={{
          textAlign: "left",
          borderTop: "1px solid #fff",
          padding: "10px 40px",
          fontSize: "1.2rem",
        }}
      >
        Lar São Domingos 2024 © Todos os Direitos Reservados
      </div>
    </footer>
  );
};

export default Footer;
