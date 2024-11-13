import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* <WaveSVG color="#0099FF" /> */}
      <div className="footer-container">
        <div className="footer-section">
          <h3>Entre em contato</h3>
          <a href="tel:+558221211300">📞 (82) 2121-1300</a>
          <a href="mailto:lar@larsaodomingos.com.br">✉️ lar@larsaodomingos.com.br</a>
          <a href="https://www.google.com/maps?q=Avenida+Gustavo+Paiva,+4291+-+Mangabeiras" target="_blank" rel="noopener noreferrer">📍 Avenida Gustavo Paiva, 4291 - Mangabeiras</a>
        </div>
        <div className="footer-section">
          <h3>Atividades</h3>
          <Link to="#atividades">Atividades</Link>
          <Link to="#auditorios">Auditórios</Link>
          <Link to="#doacoes">Doações</Link>
          <Link to="#institucional">Institucional</Link>
          <Link to="#noticias">Notícias</Link>
        </div>
        <div className="footer-section">
          <h3>Abrace Este Lar</h3>
          <Link to="#ginasio">Ginásio</Link>
          <Link to="#livraria">Livraria</Link>
          <Link to="#bazar">Bazar</Link>
          <Link to="#voluntarie-se">Voluntarie-se</Link>
        </div>
        <div className="footer-section">
          <h3>Parceiros</h3>
          <div className="footer-images">
            <img src="/assets/img/IFAL.png" alt="IFAL Logo" />
            <img src="/assets/img/CINFO.png" alt="CINFO Logo" />
          </div>
        </div>
            <img src="/assets/img/LSD_logo.png" alt="LSD Logo" id="brasao-lsd"/>
      </div>
      <div className="copyright">
        Lar São Domingos 2024 © Todos os Direitos Reservados
      </div>
    </footer>
  );
};

export default Footer;
