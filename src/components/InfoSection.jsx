// InfoSection.jsx
import React from "react";
import { FaDonate, FaHandsHelping, FaTools, FaComments } from "react-icons/fa";
import "../styles/InfoSection.css";
import { Link } from "react-router-dom";

/**
 * Componente InfoSection
 * 
 * Este componente renderiza uma seção com links e informações sobre diferentes formas de interação com o Lar São Domingos.
 * 
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.container - Classe CSS para o container da seção.
 * @param {string} props.item - Classe CSS para os itens dentro da seção.
 * @param {string} props.colorOne - Classe CSS para a cor do primeiro item.
 * @param {string} props.colorTwo - Classe CSS para a cor do segundo item.
 * @param {string} props.colorThree - Classe CSS para a cor do terceiro item.
 * @param {string} props.colorFour - Classe CSS para a cor do quarto item.
 * 
 * @returns {JSX.Element} Um elemento JSX que representa a seção de informações.
 */
const InfoSection = ({
  container,
  item,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
}) => {
  return (
    // Container da seção
    <section className={container}>
      {/* Link para a página de doações */}
      <Link to="/doacoes">
        {/* Item de doação com ícone e texto */}
        <div className={`${item} ${colorOne}`}>
          <FaDonate className="info-icon" />
          <h3>Faça uma Doação</h3>
          <p>Ajude-nos a manter nosso Lar</p>
        </div>
      </Link>

      {/* Link para a página "Abrace Este Lar" */}
      <Link to="/abrace-este-lar">
        {/* Item "Abrace Este Lar" com ícone e texto */}
        <div className={`${item} ${colorTwo}`}>
          <FaHandsHelping className="info-icon" />
          <h3>Abrace Este Lar</h3>
          <p>Venha fazer parte da nossa história! Saiba como contribuir.</p>
        </div>
      </Link>

      {/* Link para a página de atividades */}
      <Link to="/atividades">
        {/* Item de atividades com ícone e texto */}
        <div className={`${item} ${colorThree}`}>
          <FaTools className="info-icon" />
          <h3>Descubra as Atividades</h3>
          <p>Veja o que acontece no dia a dia do lar.</p>
        </div>
      </Link>

      {/* Link para enviar email */}
      <a href="mailto:lar@larsaodomingos.com.br">
        {/* Item "Fale Conosco" com ícone e texto */}
        <div className={`${item} ${colorFour}`}>
          <FaComments className="info-icon" />
          <h3>Fale Conosco</h3>
          <p>Tire todas as suas dúvidas sobre o nosso trabalho.</p>
        </div>
      </a>
    </section>
  );
};

export default InfoSection;
