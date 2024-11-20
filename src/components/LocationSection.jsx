import React from "react";
import "../styles/LocationSection.css";

/**
 * Componente LocationSection
 *
 * Este componente exibe uma seção de localização com um mapa embutido do Google Maps,
 * informações sobre o Lar São Domingos, incluindo horário de funcionamento, telefone e endereço.
 *
 * @component
 * @example
 * return (
 *   <LocationSection />
 * )
 *
 * @returns {JSX.Element} A seção de localização com mapa e informações de visita.
 */
const LocationSection = () => {
  return (
    <section className="location">
      <h2>Localização</h2>
      <div className="location-container">
        <div className="map-container">
          {/* Mapa embutido do Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.4778613424896!2d-35.70943212424395!3d-9.640146790447686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145cf4b84ca4f%3A0x4d65ba6148b1ec61!2sLar%20S%C3%A3o%20Domingos!5e0!3m2!1spt-BR!2sbr!4v1731508096611!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Lar São Domingos"
          ></iframe>
        </div>
        <div className="visit-info">
          <h3>Visite o Lar São Domingos</h3>
          <p>
            A Instituição está localizada na Mangabeiras, em Maceió/AL e recebe
            visitantes, doações e voluntários. Estamos sempre abertos para
            receber a comunidade e aqueles que desejam conhecer nosso trabalho e
            contribuir com nossa missão de transformar a vida de crianças e
            adolescentes.
          </p>
          <div className="relevant-infos">
            <div className="hours">
              {/* Informações sobre o horário de funcionamento */}
              <h4>Horário de Funcionamento</h4>
              <p>Segunda a Sexta, das 7h às 17h</p>
            </div>
            <div className="contact">
              {/* Informações de contato */}
              <h4>Telefone</h4>
              <p>(82) 2121-1300</p>
            </div>
            <div className="address">
              {/* Endereço da instituição */}
              <h4>Endereço</h4>
              <p>Avenida Gustavo Paiva, 4291 – Mangabeiras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
