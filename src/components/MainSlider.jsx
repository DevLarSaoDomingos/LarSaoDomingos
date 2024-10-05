// MainSlider.jsx
import React from "react";
import Slider from "react-slick";
import "../styles/MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

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
      subtitle:
        "Criando um futuro melhor por meio de amor, educação e diversão",
    },
    {
      img: "/assets/img/crianca-sorrindo.png",
      title: "Momentos Inesquecíveis",
      subtitle: "Assegurando sorrisos e momentos marcantes para todos",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slider-item">
            <img src={slide.img} alt={slide.title} className="slider-image" />
            <div className="slider-text">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
