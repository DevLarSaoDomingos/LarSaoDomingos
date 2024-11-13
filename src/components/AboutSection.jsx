import React from "react";
import "../styles/AboutSection.css";

const AboutSection = ({ title, text, imageSrc, backgroundColor, fontColor }) => {
  const sectionStyle = {
    backgroundColor: backgroundColor || "#007cee", // Valor default se não for passado
    color: fontColor || "#FFF", // Valor default se não for passado
  };

  // Função para verificar se o texto contém uma lista
  const renderContent = (text) => {
    return text.map((item, index) => {
      if (Array.isArray(item)) {
        // Se o item for um array (uma lista), renderiza como uma <ul>
        return (
          <ul key={index}>
            {item.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        );
      }
      // Caso contrário, renderiza como um parágrafo
      return <p key={index}>{item}</p>;
    });
  };

  return (
    <section className="about-section" style={sectionStyle}>
      <div className="about-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="about-text">
        <h2>{title}</h2>
        {Array.isArray(text) ? renderContent(text) : <p>{text}</p>}
      </div>
    </section>
  );
};

export default AboutSection;
