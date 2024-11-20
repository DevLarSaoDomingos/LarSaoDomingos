//NewsPage.jsx
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/NewsPage.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GET_POSTS = gql`
  query GetPosts($first: Int!, $after: String, $search: String) {
    posts(first: $first, after: $after, where: { search: $search }) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        content
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

const NewsPage = () => {
  const [currentCursor, setCurrentCursor] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Termo de busca
  const [submittedSearch, setSubmittedSearch] = useState(""); // Termo confirmado
  const navigate = useNavigate();

  const cleanHTMLContent = (content) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    let text = doc.body.textContent || "";
    text = text.replace(/&hellip;/g, "…");
    return text;
  };

  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 9, after: currentCursor, search: submittedSearch },
  });

  if (error) return <p>Error: {error.message}</p>;

  const posts = data?.posts?.nodes || [];
  const pageInfo = data?.posts?.pageInfo || {};

  const handlePostClick = (slug) => {
    navigate(`/noticia/${slug}`);
  };

  const getPostImage = (post) => {
    if (post.featuredImage && post.featuredImage.node.sourceUrl) {
      return post.featuredImage.node.sourceUrl;
    }

    const content = post.content;
    const firstImageMatch = content.match(/<img [^>]*src="([^"]*)"/);
    if (firstImageMatch) {
      return firstImageMatch[1];
    }

    return "/assets/img/missao.jpg";
  };

  // Função de pesquisa do código 2 integrada
  const handleSearchSubmit = () => {
    setSubmittedSearch(searchTerm); // Define o termo confirmado
    setCurrentCursor(null); // Reseta para a primeira página
  };

  const handlePagination = (direction) => {
    if (direction === "next" && pageInfo.hasNextPage) {
      fetchMore({ variables: { after: pageInfo.endCursor } });
      setCurrentCursor(pageInfo.endCursor);
    }
    if (direction === "previous" && pageInfo.hasPreviousPage) {
      fetchMore({ variables: { after: pageInfo.startCursor } });
      setCurrentCursor(pageInfo.startCursor);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div className="news-page">
      <h1>Portal de Notícias</h1>

      {/* Barra de Pesquisa */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar notícia..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado local
          onKeyDown={handleKeyDown} // Adiciona o manipulador de eventos onKeyDown
          className="search-input"
        />
        <button onClick={handleSearchSubmit} className="search-button">
          Buscar
        </button>
      </div>

      {/* Lista de Posts */}
      <div className="news-list">
        {loading ? (
          Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="post-item">
              <Skeleton height={200} />
              <h2><Skeleton /></h2>
              <p><Skeleton count={3} /></p>
            </div>
          ))
        ) : (
          posts.map((post) => (
            <div
              key={post.slug}
              className="post-item"
              onClick={() => handlePostClick(post.slug)}
            >
              <img
                src={getPostImage(post)}
                alt={post.title}
                className="post-image"
              />
              <h2>{post.title}</h2>
              <p>{cleanHTMLContent(post.excerpt)}</p>
            </div>
          ))
        )}
      </div>

      {/* Paginação */}
      <div className="pagination">
        <button
          onClick={() => handlePagination("previous")}
          disabled={!pageInfo.hasPreviousPage}
        >
          Anterior
        </button>
        <button
          onClick={() => handlePagination("next")}
          disabled={!pageInfo.hasNextPage}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
