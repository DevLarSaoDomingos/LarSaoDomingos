import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/NewsSection.css";

// Consulta GraphQL para obter os posts, incluindo a imagem principal
const GET_POSTS = gql`
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export default function NewsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const navigate = useNavigate();

  // Usando a query para buscar os posts
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: postsPerPage, after: null },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filtrar os posts com base no título
  const filteredPosts = data.posts.nodes.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para carregar mais posts
  const handleLoadMore = () => {
    if (data.posts.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          first: postsPerPage,
          after: data.posts.pageInfo.endCursor,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          setCurrentPage(currentPage + 1);
          return fetchMoreResult;
        },
      });
    }
  };

  // Função para extrair a primeira imagem do conteúdo HTML
  const extractFirstImageFromContent = (content) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const images = tempDiv.getElementsByTagName("img");
    return images.length > 0 ? images[0].src : null;
  };

  // Função para remover todas as imagens do conteúdo
  const removeImagesFromContent = (content) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const images = tempDiv.getElementsByTagName("img");
    while (images.length > 0) {
      images[0].parentElement.removeChild(images[0]);
    }
    return tempDiv.innerHTML;
  };

  // Função para limitar o conteúdo a 180 caracteres
  const truncateContent = (content) => {
    return content.length > 180 ? content.slice(0, 180) + "..." : content;
  };

  return (
    <section className="news-section">
      <div className="separator-container">
        <div />
        <h2>Portal de Notícias</h2>
        <div />
      </div>

      {/* Campo de busca */}
      {/* <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por título"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}

      <div className="news-grid">
        {/* Exibe os posts filtrados */}
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            const imageUrl = post.featuredImage?.node?.sourceUrl;
            const imageToDisplay =
              imageUrl || extractFirstImageFromContent(post.content);
            const absoluteUrl =
              imageToDisplay && !imageToDisplay.startsWith("http")
                ? `http://larsd.local${imageToDisplay}`
                : imageToDisplay;

            const updatedContent = removeImagesFromContent(post.content);
            const truncatedContent = truncateContent(updatedContent);

            return (
              <div
                onClick={() => navigate(`/noticia/${post.slug}`)}
                key={post.id}
                className={`news-item ${index === 0 ? "large" : ""}`}
                style={{
                  background: `url(${absoluteUrl}) no-repeat top center`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: index === 0 ? "1.5rem" : "1rem",
                    fontWeight: "bold",
                  }}
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: truncatedContent }}
                />
              </div>
            );
          })
        ) : (
          <p>Nenhum post encontrado</p>
        )}
      </div>

      {/* Botão para carregar mais posts */}
      {data.posts.pageInfo.hasNextPage && (
        <div className="separator-container">
          <div />
          <button className="see-more-button" onClick={handleLoadMore}>
            Veja Mais
          </button>
          <div />
        </div>
      )}
    </section>
  );
}
