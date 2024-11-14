import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/NewsPage.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Consulta GraphQL para pegar posts com paginação
const GET_POSTS = gql`
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
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
  // Correção do uso de useState para o cursor
  const [currentCursor, setCurrentCursor] = useState(null); // Para armazenar o cursor atual
  const [nextCursor, setNextCursor] = useState(null); // Para armazenar o cursor da próxima página
  const [previousCursor, setPreviousCursor] = useState(null); // Para armazenar o cursor da página anterior
  const navigate = useNavigate();

  // Função para limpar HTML indesejado
  const cleanHTMLContent = (content) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    let text = doc.body.textContent || "";
    text = text.replace(/&hellip;/g, "…");
    return text;
  };

  // Usando a consulta GraphQL para pegar os posts
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { first: 9, after: currentCursor }, // Passa o cursor atual como variável
  });

  // Função para navegar para a página de detalhes da notícia
  const handlePostClick = (slug) => {
    navigate(`/noticia/${slug}`);
  };

  // Adicione esta função para renderizar o skeleton loader
  const renderSkeletonLoader = () => {
    return (
      <div className="news-page">
        <h1>Portal de Notícias</h1>

        <div className="news-list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="post-item">
              <Skeleton
                className="post-image"
                variant="rectangular"
                width="100%"
                height={400}
              />
              <h2>
                <Skeleton variant="text" width="80%" />
              </h2>
              <p>
                <Skeleton variant="text" width="100%" count={3} />
                <Skeleton variant="text" width="100%" count={3} />
                <Skeleton variant="text" width="100%" count={3} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Modifique a condição de loading
  if (loading) return renderSkeletonLoader();

  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts.nodes;
  const pageInfo = data.posts.pageInfo;

  // Função para obter a imagem correta para o post
  const getPostImage = (post) => {
    if (post.featuredImage && post.featuredImage.node.sourceUrl) {
      return post.featuredImage.node.sourceUrl;
    }

    const content = post.content;
    const firstImageMatch = content.match(/<img [^>]*src="([^"]*)"/); // Regex para buscar o src da primeira imagem no conteúdo
    if (firstImageMatch) {
      return firstImageMatch[1]; // Retorna o primeiro src de imagem encontrado
    }

    return "/assets/img/missao.jpg"; // Imagem padrão caso não tenha nenhuma imagem
  };

  // Atualiza os cursores de navegação
  const handlePageChange = (direction) => {
    if (direction === "next" && pageInfo.hasNextPage) {
      setCurrentCursor(pageInfo.endCursor); // Atualiza o cursor para a próxima página
      setPreviousCursor(pageInfo.startCursor); // Atualiza o cursor anterior para voltar
    }
    if (direction === "previous" && pageInfo.hasPreviousPage) {
      setCurrentCursor(pageInfo.startCursor); // Atualiza o cursor para a página anterior
      setNextCursor(pageInfo.endCursor); // Atualiza o cursor da próxima página
    }
  };

  return (
    <div className="news-page">
      <h1>Portal de Notícias</h1>

      {/* Lista de Posts */}
      <div className="news-list">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="post-item"
            onClick={() => handlePostClick(post.slug)}
          >
            {/* Exibe a imagem do post */}
            <img
              src={getPostImage(post)}
              alt={post.title}
              className="post-image"
            />
            <h2>{post.title}</h2>
            {/* Limpa e exibe o excerpt sem tags indesejadas */}
            <p>{cleanHTMLContent(post.excerpt)}</p>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="pagination">
        {pageInfo.hasPreviousPage && (
          <button
            onClick={() => {
              handlePageChange("previous");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Anterior
          </button>
        )}
        {pageInfo.hasNextPage && (
          <button
            onClick={() => {
              handlePageChange("next");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Próxima
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
