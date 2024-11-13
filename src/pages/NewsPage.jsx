// NewsPage.jsx
import React from "react";
import "../styles/NewsSection.css";
import NewsSection from "../components/NewsSection";

const NewsPage = () => {
  return (
    <div className="news-page">
      <h1>Notícias</h1>
      <div className="news-section">
        {/* Passando isNewsPage como true */}
        <NewsSection isNewsPage={true} />
      </div>
    </div>
  );
};

export default NewsPage;
