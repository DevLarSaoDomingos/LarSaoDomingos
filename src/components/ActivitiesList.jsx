// ActivitiesList.js
import React from "react";
import "../styles/ActivitiesList.css";

/**
 * Componente que exibe uma lista de atividades.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Array} props.activities - Lista de atividades a serem exibidas.
 * @param {string} props.activities[].imageSrc - URL da imagem da atividade.
 * @param {string} props.activities[].title - Título da atividade.
 * @param {string} props.activities[].description - Descrição da atividade.
 * @returns {JSX.Element} - Retorna um elemento JSX que representa a lista de atividades.
 */
const ActivitiesList = ({ activities }) => { // Recebe as atividades como propriedade e exibe na lista
  return (
    <div className="ActivitiesList">
      <div className="list-activities">
        {activities.map((activity, index) => ( // Mapeia as atividades para exibição na lista
          <div className="activities" key={index}>
            {/* Imagem da atividade */}
            <img src={activity.imageSrc} alt={activity.title} />
            {/* Título da atividade */}
            <h3>{activity.title}</h3>
            {/* Descrição da atividade */}
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;
