import React from "react";
import WaveSVG from "./svg/WaveSvg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <h3>Entre em contato</h3>
          <p>
            <img src="/assets/icons/phone.png" alt="Telefone" />
            (82) 2121-1300
          </p>
          <p>
            <img src="/assets/icons/mail.png" alt="Email" />
            lar@larsaodomingos.com.br
          </p>
          <p>
            <img src="/assets/icons/gps.png" alt="Localização" />
            Avenida Gustavo Paiva, 4291 - Mangabeiras
          </p>
        </div>
        <div>
          <h3>Atividades</h3>
          <a href="/atividades">Atividades</a>
          <a href="/auditorios">Auditórios</a>
          <a href="/doacoes">Doações</a>
          <a href="/institucional">Institucional</a>
          <a href="/noticias">Notícias</a>
        </div>
        <div>
          <h3>Abrace Este Lar</h3>
          <a href="/ginasio">Ginásio</a>
          <a href="/livraria">Livraria</a>
          <a href="/bazar">Bazar</a>
          <a href="/voluntariado">Voluntarie-se</a>
        </div>
        <div>
          <h3>Parceiros</h3>
          <div className="partners-logos">
            <img
              src="/assets/img/IFAL.png"
              alt="IFAL Logo"
              className="ifal-logo"
            />
            <img
              src="/assets/img/CINFO.png"
              alt="CINFO Logo"
              className="cinfo-logo"
            />
          </div>
        </div>
        <div className="lsd-logo-container">
          <img src="/assets/img/LSD_logo.png" alt="Lar São Domingos Logo" />
        </div>
      </div>
      <div className="copyright-container">
        <p className="copyright-text">
          Lar São Domingos 2024 © Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
