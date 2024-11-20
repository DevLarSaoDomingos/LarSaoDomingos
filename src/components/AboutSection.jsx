//AboutSection.jsx

import React from "react";
import "../styles/AboutSection.css";

/**
 * Componente AboutSection
 *
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título da seção
 * @param {string|string[]} props.text - Texto ou lista de textos a serem exibidos na seção
 * @param {string} props.imageSrc - URL da imagem a ser exibida na seção
 * @param {string} [props.backgroundColor="#007cee"] - Cor de fundo da seção (opcional, valor padrão: "#007cee")
 * @param {string} [props.fontColor="#FFF"] - Cor da fonte do texto (opcional, valor padrão: "#FFF")
 *
 * @returns {JSX.Element} - Elemento JSX que representa a seção "Sobre"
 */
const AboutSection = ({ title, text, imageSrc, backgroundColor, fontColor }) => {
  // Define o estilo da seção com base nas propriedades recebidas
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
        {/* Renderiza a imagem com a URL e o título fornecidos */}
        <img src={imageSrc} alt={title} />
      </div>
      <div className="about-text">
        {/* Renderiza o título da seção */}
        <h2>{title}</h2>
        {/* Verifica se o texto é um array e renderiza o conteúdo apropriadamente */}
        {Array.isArray(text) ? renderContent(text) : <p>{text}</p>}
      </div>
    </section>
  );
};

export default AboutSection;
