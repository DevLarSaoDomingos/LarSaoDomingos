// AuditoriumList.jsx
import React from "react";
import "../styles/AuditoriumList.css";
import ContactSection from "../components/ContactSection"; // Adjust the path as necessary

/**
 * Componente que renderiza uma lista de auditórios com suas respectivas informações.
 *
 * @component
 * @example
 * return (
 *   <AuditoriumList />
 * )
 *
 * @returns {JSX.Element} Retorna um elemento JSX que contém a lista de auditórios.
 */
const AuditoriumList = () => {
  // Lista de auditórios com suas informações
  const auditoriums = [
    {
      name: "Auditório A",
      capacity: "200 pessoas",
      soundEquipment: "1",
      bathrooms: "1",
      projector: "1",
      airConditioning: "1",
      computer: "1",
      imageUrl: "assets/img/auditorio01.JPG",
      description: "Amplo e moderno auditório com capacidade para até 200 pessoas que conta com equipamentos de som e vídeo de alta qualidade para você realizar seu evento. O auditório conta com sala de apoio, banheiro, estacionamento além de também oferecer serviço de coffee break. ",
    },
    {
      name: "Auditório B",
      capacity: "200 pessoas",
      soundEquipment: "1",
      bathrooms: "1",
      projector: "1",
      airConditioning: "1",
      computer: "1",
      imageUrl: "assets/img/auditorio02.JPG",
      description: "Amplo e moderno auditório com capacidade para até 200 pessoas que conta com equipamentos de som e vídeo de alta qualidade para você realizar seu evento. O auditório conta com sala de apoio, banheiro, estacionamento além de também oferecer serviço de coffee break. ",
    },
  ];

  return (
    <div className="auditorium-list">
      <div className="presentation-video">
        <video width="60%" controls>
          <source src="assets/videos/presentation.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <div className="auditorium-cards">
        {auditoriums.map((auditorium, index) => (
            // Renderiza cada auditório
            <div className="auditorium-section" key={index}>
            <div
              className="auditorium-image"
              style={{ backgroundImage: `url(${auditorium.imageUrl})` }}
            ></div>
            <div className="auditorium-info">
              <h2>{auditorium.name}</h2>
              <p>{auditorium.description}</p>
              <ul>
              <li>Capacidade: {auditorium.capacity}</li>
              <li>Banheiros: {auditorium.bathrooms}</li>
              <li>Equipamento de som: {auditorium.soundEquipment}</li>
              <li>Ar condicionado: {auditorium.airConditioning}</li>
              <li>Datashow: {auditorium.projector}</li>
              <li>Computador: {auditorium.computer}</li>
              </ul>
            </div>
            </div>
          ))}
          </div>
          <ContactSection /> {/* Add the ContactSection component here */}
    </div>
  );
};

export default AuditoriumList;
