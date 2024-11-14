import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/NewsSection.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Consulta GraphQL para obter os posts com paginação e contagem total de posts
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

const GET_TOTAL_POST_COUNT = gql`
  query GetTotalPostCount {
    posts {
      pageInfo {
        hasNextPage
      }
      totalCount
    }
  }
`;

export default function NewsSection({ isNewsPage = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 3;
  const navigate = useNavigate();

  // Query para buscar posts
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: postsPerPage, after: null },
    notifyOnNetworkStatusChange: true,
  });

  // Query para obter o total de posts
  const { data: totalPostsData } = useQuery(GET_TOTAL_POST_COUNT);

  // Atualizar posts quando a consulta retornar dados
  useEffect(() => {
    if (data && data.posts.nodes) {
      const newPosts = data.posts.nodes;
      setAllPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setHasMore(data.posts.pageInfo.hasNextPage);
    }
  }, [data]);

  // Atualizar posts exibidos com base na página atual e no termo de busca
  useEffect(() => {
    const filtered = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setDisplayedPosts(filtered.slice(startIndex, endIndex));
  }, [searchTerm, currentPage, allPosts]);

  // Obter o número total de posts e calcular páginas
  const totalPosts = totalPostsData?.posts?.totalCount || 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Função para carregar mais posts
  const handleLoadMore = () => {
    if (hasMore) {
      fetchMore({
        variables: {
          first: postsPerPage,
          after: data.posts.pageInfo.endCursor,
        },
      });
    }
  };

  // Funções auxiliares para manipulação de conteúdo de posts
  const extractFirstImageFromContent = (content) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const images = tempDiv.getElementsByTagName("img");
    return images.length > 0 ? images[0].src : null;
  };

  const removeImagesFromContent = (content) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const images = tempDiv.getElementsByTagName("img");
    while (images.length > 0) {
      images[0].parentElement.removeChild(images[0]);
    }
    return tempDiv.innerHTML;
  };

  const truncateContent = (content) => {
    return content.length > 180 ? content.slice(0, 180) + "..." : content;
  };

  if (loading && !data)
    return (
      <section className="news-section">
        <div className="news-grid">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`news-item ${index === 0 ? "large" : ""}`}
              style={{ width: "100%", height: "100%" }}
            >
              <Skeleton
                height="100%"
                width="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              />
              <div
                className="post-content news-item-title"
                style={{ width: "100%" }}
              >
                <Skeleton count={3} width="100%" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="news-section">
      {!isNewsPage && (
        <div className="separator-container">
          <div />
          <h2>Portal de Notícias</h2>
          <div />
        </div>
      )}

      {isNewsPage && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por título"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <div className="news-grid">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post, index) => {
            const imageUrl = post.featuredImage?.node?.sourceUrl;
            const imageToDisplay =
              imageUrl || extractFirstImageFromContent(post.content);
            const absoluteUrl =
              imageToDisplay && !imageToDisplay.startsWith("http")
                ? `http://157.173.205.94:8081/${imageToDisplay}`
                : imageToDisplay;

            const updatedContent = removeImagesFromContent(post.content);
            const truncatedContent = truncateContent(updatedContent);

            return (
              <div
                onClick={() => navigate(`/noticia/${post.slug}`)}
                key={post.id}
                className={`news-item ${index === 0 ? "large" : ""}`}
              >
                <div
                  className="background-zoom"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), url(${absoluteUrl}) no-repeat top center`,
                    backgroundSize: "cover",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
                <div
                  className="post-content news-item-title"
                  dangerouslySetInnerHTML={{ __html: truncatedContent }}
                />
              </div>
            );
          })
        ) : (
          <p>Nenhum post encontrado</p>
        )}
      </div>

      {isNewsPage && totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages} (Total: {totalPosts} posts)
          </span>
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
              handleLoadMore();
            }}
            disabled={currentPage === totalPages || !hasMore}
          >
            Próxima
          </button>
        </div>
      )}

      {!isNewsPage && hasMore && (
        <div className="separator-container">
          <div />
          <button
            className="see-more-button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/noticias");
            }}
          >
            Veja Mais
          </button>
          <div />
        </div>
      )}
    </section>
  );
}
