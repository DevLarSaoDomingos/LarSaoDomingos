// HomePage.jsx
import React from "react";
import NavBar from "../components/NavBar";
import MainSlider from "../components/MainSlider";
import InfoSection from "../components/InfoSection";
import AboutSection from "../components/AboutSection";
import DoacaoPopUp from "../components/DoacaoPopUp";

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
    </div>
  );
};

export default HomePage;
