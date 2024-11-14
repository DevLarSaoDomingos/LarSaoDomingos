import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente principal do Slider
const MainSlider = ({
  container,
  sliderItem,
  sliderImage,
  text,
  arrowSize,
  imagesAbove,
  slidesData,
}) => {
  const thumbnailContainerRef = useRef(null);
  const sliderRef = useRef(null);

  // Configurações do Slick Slider
  const settings = {
    infinite: slidesData.length > 1, // Habilita o loop se houver mais de uma imagem
    speed: 500, // Velocidade da transição
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: slidesData.length > 1, // Ativa autoplay se houver mais de uma imagem
    autoplaySpeed: 3000,
    arrows: slidesData.length > 1, // Exibe as setas se houver mais de uma imagem
    draggable: slidesData.length > 1, // Habilita o arraste se houver mais de uma imagem
    lazyLoad: "ondemand", // Carregamento preguiçoso
    nextArrow: <NextArrow arrowSize={arrowSize} />, // Próxima seta personalizada
    prevArrow: <PrevArrow arrowSize={arrowSize} />, // Anterior seta personalizada
  };

  // Função para rolar as miniaturas horizontalmente
  const scrollThumbnails = (direction) => {
    const container = thumbnailContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -150 : 150;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={`${container} slider-container`}>
      <main>
        <Slider ref={sliderRef} {...settings}>
          {/* Renderiza os slides */}
          {slidesData.map((slide, index) => (
            <div key={index} className={sliderItem}>
              <img
                style={{ objectFit: imagesAbove ? "contain" : "cover" }} // Ajuste da imagem dependendo da configuração
                src={slide.img}
                alt={slide.title}
                className={sliderImage}
              />
              <div className={`${text} slider-overlay`}>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Contêiner das miniaturas com botões de navegação */}
        {imagesAbove && (
          <div className="slick-thumb-container">
            <button
              className="thumbnail-nav-button thumbnail-nav-prev"
              onClick={() => scrollThumbnails("left")}
            >
              <FaChevronLeft />
            </button>
            <ul className="slick-thumb" ref={thumbnailContainerRef}>
              {slidesData.map((slide, i) => (
                <li key={i} onClick={() => sliderRef.current.slickGoTo(i)}>
                  <img src={slide.img} alt={`Thumbnail ${i + 1}`} />
                </li>
              ))}
            </ul>
            <button
              className="thumbnail-nav-button thumbnail-nav-next"
              onClick={() => scrollThumbnails("right")}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

// Componente para a seta "Next"
const NextArrow = ({ onClick, arrowSize }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <FaChevronRight
      style={{
        height: arrowSize,
        width: arrowSize,
        filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7))", // Sombra nas setas para melhorar visibilidade
      }}
    />
  </div>
);

// Componente para a seta "Prev"
const PrevArrow = ({ onClick, arrowSize }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <FaChevronLeft
      style={{
        height: arrowSize,
        width: arrowSize,
        filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7))", // Sombra nas setas para melhorar visibilidade
      }}
    />
  </div>
);

export default MainSlider;
