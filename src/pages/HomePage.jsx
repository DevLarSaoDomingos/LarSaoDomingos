// HomePage.jsx
import React from "react";
import MainSlider from "../components/MainSlider";
import InfoSection from "../components/InfoSection";
import StatementSection from "../components/StatementSection";
import DoacaoPopUp from "../components/DoacaoPopUp";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";

const slidesData = [
  {
    img: "/assets/img/banner1.jpg",
    title: "Lar são Domingos",
    subtitle:
      "Uma sociedade sem fins lucrativos que trabalha a mais de 100 anos em prol das crianças e adolescentes",
  },
  {
    img: "/assets/img/banner2.jpg",
    title: "Crianças Felizes",
    subtitle: "Criando um futuro melhor por meio de amor, educação e diversão",
  },
  {
    img: "/assets/img/banner3.jpg",
    title: "Momentos Inesquecíveis",
    subtitle: "Assegurando sorrisos e momentos marcantes para todos",
  },
];

/**
 * Componente funcional HomePage.
 * 
 * Este componente representa a página inicial e inclui vários componentes filhos:
 * - DoacaoPopUp: Um pop-up para doações.
 * - MainSlider: Um slider principal com imagens e textos.
 * - InfoSection: Uma seção de informações com várias cores.
 * - StatementSection: Uma seção de declarações com texto principal e secundário.
 * - NewsSection: Uma seção de notícias.
 * 
 * @returns {JSX.Element} O componente HomePage.
 */
const HomePage = () => {
  return (
    <div className="HomePage">
      {/* Componente de pop-up para doações */}
      <DoacaoPopUp
        overlay={"popup-overlay"}
        gridPosition={"popup-grid-position"}
        imageProps={"popup-image"}
        image={"/assets/img/criancas-abracando.png"}
        text={"popup-text"}
        doeButton={"doe-button"}
      />
      {/* Componente de slider principal */}
      <MainSlider
        container={"slider-container"}
        sliderItem={"slider-item"}
        sliderImage={"slider-image"}
        text={"slider-text"}
        arrowSize={60}
        imagesAbove={false}
        slidesData={slidesData}
      />
      {/* Componente de seção de informações */}
      <InfoSection
        container={"info-section"}
        item={"info-box"}
        colorOne={"red"}
        colorTwo={"blue"}
        colorThree={"orange"}
        colorFour={"green"}
      />
      {/* Componente de seção de declarações */}
      <StatementSection
        container={"statement-container"}
        mainText={"statement-text"}
        subText={"statement-sub-text"}
      />
      {/* Componente de seção de notícias */}
      <NewsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
