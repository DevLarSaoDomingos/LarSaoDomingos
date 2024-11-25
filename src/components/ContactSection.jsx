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
      <div className="contact-content">
        {/* Texto explicativo sobre como entrar em contato */}
        <div className="contact-text">
          <h2>Fale Conosco</h2>
          <p>
            Se você tiver dúvidas, sugestões, críticas ou desejar informações
            sobre orçamentos para o auditório, ginásio ou outros serviços, entre
            em contato conosco pelo e-mail.
          </p>

          <p>
            Teremos o prazer em atender suas solicitações e fornecer os detalhes
            necessários.
          </p>
        </div>
        {/* Botões para enviar e-mail ou mensagem via WhatsApp */}
        <div className="contact-buttons">
          <button
            id="email-button"
            onClick={() =>
              window.open(
                "mailto:administracao@larsaodomingos.com.br",
                "_blank"
              )
            }
          >
            {/* Ícone de e-mail */}
            <img src="/assets/icons/mail.png" alt="Email Icon" />
            Mande um E-mail
          </button>
          <p>administracao@larsaodomingos.com.br</p>
          {/* <button
          id="whatsapp-button"
          onClick={() => window.open("https://wa.me/+558221211300", "_blank")}
          >
          <img src="/assets/icons/whatsapp.png" alt="WhatsApp Icon" />
          WhatsApp
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
