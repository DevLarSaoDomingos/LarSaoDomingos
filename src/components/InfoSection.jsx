// InfoSection.jsx
import React from "react";
import { FaDonate, FaHandsHelping, FaTools, FaComments } from "react-icons/fa";
import "../styles/InfoSection.css";
import { Link } from "react-router-dom";

const InfoSection = ({
  container,
  item,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
}) => {
  return (
    <section className={container}>
      <Link to="/doacao">
        <div className={`${item} + ${colorOne}`}>
          <FaDonate className="info-icon" />
          <h3>Faça uma Doação</h3>
          <p>
            Sua contribuição irá ajudar a manter o Lar São Domingos por mais 100
            anos!
          </p>
        </div>
      </Link>

      <Link to="/abrace-este-lar">
        <div className={`${item} ${colorTwo}`}>
          <FaHandsHelping className="info-icon" />
          <h3>Abrace Este Lar</h3>
          <p>Venha fazer parte da nossa história! Saiba como contribuir.</p>
        </div>
      </Link>

      <Link to="/atividades">
        <div className={`${item} ${colorThree}`}>
          <FaTools className="info-icon" />
          <h3>Descubra as Atividades</h3>
          <p>Veja o que acontece no dia a dia do lar.</p>
        </div>
      </Link>
      <a href="mailto:lar@larsaodomingos.com.br">
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
