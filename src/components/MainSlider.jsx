// MainSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = ({
  container,
  sliderItem,
  sliderImage,
  text,
  arrowSize,
  imagesAbove,
  slidesData,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow arrowSize={arrowSize} />,
    prevArrow: <PrevArrow arrowSize={arrowSize} />,
    customPaging: imagesAbove
      ? (i) => (
          <a>
            <img
              src={slidesData[i].img}
              alt={`Thumbnail ${i + 1}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </a>
        )
      : (i) => <button>{i + 1}</button>,
    dotsClass: imagesAbove ? "slick-dots slick-thumb" : "slick-dots",
  };

  return (
    <main className={container}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className={sliderItem}>
            <img src={slide.img} alt={slide.title} className={sliderImage} />
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
      <FaChevronRight style={{ height: arrowSize, width: arrowSize }} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick, arrowSize } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaChevronLeft style={{ height: arrowSize, width: arrowSize }} />
    </div>
  );
};

export default MainSlider;
