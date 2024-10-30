import React from "react";
import "../styles/NewsSection.css";

export default function NewsSection() {
  return (
    <section className="news-section">
      <h2 className="news-title">Portal de Notícias</h2>
      <div className="news-grid">
        <div className="news-item large"></div>
        <div className="news-item"></div>
        <div className="news-item"></div>
      </div>
      <button className="see-more-button">Veja Mais</button>
    </section>
  );
}
