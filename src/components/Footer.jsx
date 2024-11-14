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
          <a href="tel:+558221211300">
            {" "}
            <img src="/assets/icons/phone.png" alt="Telefone" />
            (82) 2121-1300
          </a>
          <a href="mailto:lar@larsaodomingos.com.br">
            {" "}
            <img src="/assets/icons/mail.png" alt="Email" />
            lar@larsaodomingos.com.br
          </a>
          <a
            href="https://www.google.com/maps?q=Avenida+Gustavo+Paiva,+4291+-+Mangabeiras"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/assets/icons/gps.png" alt="Localização" />
            Avenida Gustavo Paiva, 4291 - Mangabeiras
          </a>
        </div>
        <div className="footer-section">
          <Link to="/atividades">Atividades</Link>
          <Link to="/auditorios">Auditórios</Link>
          <Link to="/doacoes">Doações</Link>
          <Link to="/institucional">Institucional</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/abrace-este-lar">Abrace este Lar</Link>
        </div>
        <div className="footer-section">
          <h3>Parceiros</h3>
          <div className="footer-images">
            <img src="/assets/img/IFAL.png" alt="IFAL Logo" />
            <img src="/assets/img/CINFO.png" alt="CINFO Logo" />
          </div>
        </div>
        <img src="/assets/img/LSD_logo.png" alt="LSD Logo" id="brasao-lsd" />
      </div>
      <div className="copyright">
        Lar São Domingos 2024 © Todos os Direitos Reservados
      </div>
    </footer>
  );
};

export default Footer;
