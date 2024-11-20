import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

/**
 * Componente Footer
 * 
 * Este componente representa o rodapé do site, contendo informações de contato,
 * links para outras seções do site e logos de parceiros.
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 * 
 * @returns {JSX.Element} O componente Footer.
 */
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Entre em contato</h3>
          {/* Link para contato telefônico */}
          <a href="tel:+558221211300">
            {" "}
            <img src="/assets/icons/phone.png" alt="Telefone" />
            (82) 2121-1300
          </a>
          {/* Link para contato via email */}
          <a href="mailto:lar@larsaodomingos.com.br">
            {" "}
            <img src="/assets/icons/mail.png" alt="Email" />
            lar@larsaodomingos.com.br
          </a>
          {/* Link para localização no Google Maps */}
          <a
            href="https://www.google.com/maps?q=Avenida+Gustavo+Paiva,+4291+-+Mangabeiras"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/assets/icons/gps.png" alt="Localização" />
            Avenida Gustavo Paiva, 4291 - Mangabeiras
          </a>
          {/* Link para Instagram */}
          <a
            href="https://www.instagram.com/larsaodomingos"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/assets/icons/instagram.png" alt="Instagram" />
            Instagram
          </a>
          {/* Link para Facebook */}
          <a
            href="https://www.facebook.com/larsaodomingosmaceio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/assets/icons/facebook.png" alt="Facebook" />
            Facebook
          </a>
        </div>
        <div className="footer-section">
          {/* Links para outras seções do site */}
          <Link to="/atividades">Atividades</Link>
          <Link to="/auditorios">Auditórios</Link>
          <Link to="/doacoes">Doações</Link>
          <Link to="/institucional">Institucional</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/abrace-este-lar">Abrace este Lar</Link>
        </div>
        <div className="footer-section">
          <div className="footer-parceiros">
            <div className="footer-images">
              <h3>Parceiros</h3>
              {/* Logos dos parceiros */}
              <img src="/assets/img/IFAL.png" alt="IFAL Logo" />
              <img src="/assets/img/CINFO.png" alt="CINFO Logo" />
            </div>
            {/* Logo do Lar São Domingos */}
            <img
              src="/assets/img/LSD_logo.png"
              alt="LSD Logo"
              id="brasao-lsd"
            />
          </div>
        </div>
      </div>
      {/* Informações de copyright */}
      <div className="copyright">
        Lar São Domingos 2024 © Todos os Direitos Reservados
      </div>
    </footer>
  );
};

export default Footer;
