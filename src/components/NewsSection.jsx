import React from "react";
import "../styles/NewsSection.css";

export default function NewsSection() {
  return (
    <section className="news-section">
      <div className="separator-container">
        <div />
        <h2>Portal de Notícias</h2>
        <div />
      </div>
      <div className="news-grid">
        <div className="news-item large"></div>
        <div className="news-item"></div>
        <div className="news-item"></div>
      </div>
      <div className="separator-container">
        <div />
        <button className="see-more-button">Veja Mais</button>
        <div />
      </div>
    </section>
  );
}
