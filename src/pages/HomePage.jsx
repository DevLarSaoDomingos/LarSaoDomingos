// HomePage.jsx
import React from "react";
import NavBar from "../components/NavBar";
import MainSlider from "../components/MainSlider";
import InfoSection from "../components/InfoSection";
import AboutSection from "../components/AboutSection";
import DoacaoPopUp from "../components/DoacaoPopUp";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";

const slidesData = [
  {
    img: "/assets/img/cabodeguerra.jpg",
    title: "Lar são Domingos",
    subtitle:
      "Uma sociedade sem fins lucrativos que trabalha a mais de 100 anos em prol das crianças e adolescentes",
  },
  {
    img: "/assets/img/futebol.jpg",
    title: "Crianças Felizes",
    subtitle: "Criando um futuro melhor por meio de amor, educação e diversão",
  },
  {
    img: "/assets/img/crianca-sorrindo.png",
    title: "Momentos Inesquecíveis",
    subtitle: "Assegurando sorrisos e momentos marcantes para todos",
  },
];

const HomePage = () => {
  return (
    <div>
      <DoacaoPopUp
        overlay={"popup-overlay"}
        gridPosition={"popup-grid-position"}
        imageProps={"popup-image"}
        image={"/assets/img/criancas-abracando.png"}
        text={"popup-text"}
        doeButton={"doe-button"}
      />
      <NavBar navbar={"navbar"} menu={"navbar-menu"} logo={"navbar-logo"} />
      <MainSlider
        container={"slider-container"}
        sliderItem={"slider-item"}
        sliderImage={"slider-image"}
        text={"slider-text"}
        arrowSize={60}
        imagesAbove={false}
        slidesData={slidesData}
      />
      <InfoSection
        container={"info-section"}
        item={"info-box"}
        colorOne={"red"}
        colorTwo={"blue"}
        colorThree={"orange"}
        colorFour={"green"}
      />
      <AboutSection
        container={"about-container"}
        mainText={"about-text"}
        subText={"about-sub-text"}
      />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
