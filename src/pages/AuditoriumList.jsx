import React from "react";
import "../styles/AuditoriumList.css";

const AuditoriumList = () => {
  const auditoriums = [
    {
      name: "Auditório A",
      capacity: "200 pessoas",
      soundEquipment: "1",
      bathrooms: "1",
      projector: "1",
      airConditioning: "1",
      computer: "1",
      imageUrl: "assets/img/auditorio01.jpg", // substitua pelo caminho da imagem
    },
    {
      name: "Auditório B",
      capacity: "200 pessoas",
      soundEquipment: "1",
      bathrooms: "1",
      projector: "1",
      airConditioning: "1",
      computer: "1",
      imageUrl: "assets/img/auditorio02.jpg", // substitua pelo caminho da imagem
    },
  ];

  return (
    <div className="auditorium-list">
      {auditoriums.map((auditorium, index) => (
        <div className="auditorium-section" key={index}>
          <div
            className="auditorium-image"
            style={{ backgroundImage: `url(${auditorium.imageUrl})` }}
          ></div>
          <div className="auditorium-info">
            <h2>{auditorium.name}</h2>
            <p>Capacidade: {auditorium.capacity}</p>
            <p>Banheiros: {auditorium.bathrooms}</p>
            <p>Equipamento de som: {auditorium.soundEquipment}</p>
            <p>Ar condicionado: {auditorium.airConditioning}</p>
            <p>Datashow: {auditorium.projector}</p>
            <p>Computador: {auditorium.computer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuditoriumList;
