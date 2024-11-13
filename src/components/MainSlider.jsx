// MainSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = ({ container, sliderItem, sliderImage, text, arrowSize, imagesAbove, slidesData }) => {
  const settings = {
    dots: slidesData.length > 1,
    infinite: slidesData.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: slidesData.length > 1,
    autoplaySpeed: 3000,
    arrows: slidesData.length > 1,
    draggable: slidesData.length > 1,
    nextArrow: <NextArrow arrowSize={arrowSize} />,
    prevArrow: <PrevArrow arrowSize={arrowSize} />,
    customPaging: imagesAbove
      ? (i) => (
          <button className="thumbnail-button">
            <img
              src={slidesData[i].img}
              alt={`Thumbnail ${i + 1}`}
              style={{
                width: "100px", // Considerar usar um tamanho responsivo
                height: "100px",
                objectFit: "cover",
              }}
            />
          </button>
        )
      : (i) => <button>{i + 1}</button>,
    dotsClass: imagesAbove ? "slick-dots slick-thumb" : "slick-dots",
  };

  return (
    <main className={container}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className={sliderItem}>
            <img
              style={{ objectFit: imagesAbove ? "contain" : "cover" }}
              src={slide.img}
              alt={slide.title}
              className={sliderImage}
            />
            <div className={text}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};


const NextArrow = (props) => {
  const { onClick, arrowSize } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaChevronRight
        style={{
          height: arrowSize,
          width: arrowSize,
          filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))", // Adiciona sombra ao ícone
        }}
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick, arrowSize } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaChevronLeft
        style={{
          height: arrowSize,
          width: arrowSize,
          filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))", // Adiciona sombra ao ícone
        }}
      />
    </div>
  );
};

export default MainSlider;