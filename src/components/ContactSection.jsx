import React from "react";
import "../styles/ContactSection.css";

/**
 * Componente ContactSection
 *
 * Este componente exibe uma seção de contato com texto explicativo e botões para
 * enviar e-mail ou mensagem via WhatsApp.
 *
 * @component
 *
 * @example
 * return (
 *   <ContactSection />
 * )
 */
const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* Texto explicativo sobre como entrar em contato */}
      <div className="contact-text">
        <h2>Fale Conosco</h2>
        <p>
          Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato
          conosco por e-mail ou WhatsApp.
        </p>
      </div>
      {/* Botões para enviar e-mail ou mensagem via WhatsApp */}
      <div className="contact-buttons">
        <button
          id="email-button"
          onClick={() =>
            window.open("mailto:lar@larsaodomingos.com.br", "_blank")
          }
        >
          {/* Ícone de e-mail */}
          <img src="/assets/icons/mail.png" alt="Email Icon" />
          Email
        </button>
        <button
          id="whatsapp-button"
          onClick={() => window.open("https://wa.me/+558221211300", "_blank")}
        >
          {/* Ícone do WhatsApp */}
          <img src="/assets/icons/whatsapp.png" alt="WhatsApp Icon" />
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
