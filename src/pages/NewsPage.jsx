//NewsPage.jsx
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "../styles/NewsPage.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Definição da query GraphQL para buscar posts
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

/**
 * Componente NewsPage
 * 
 * Este componente representa uma página de notícias que permite aos usuários buscar e visualizar posts.
 * 
 * @component
 * 
 * @returns {JSX.Element} Retorna o componente da página de notícias.
 * 
 * @example
 * <NewsPage />
 * 
 * @description
 * O componente NewsPage utiliza o hook `useQuery` para buscar posts com base nos parâmetros fornecidos,
 * incluindo paginação e termos de busca. Ele exibe uma lista de posts, permite a navegação para detalhes
 * de um post específico e inclui funcionalidades de busca e paginação.
 * 
 * @function cleanHTMLContent
 * @description Função para limpar o conteúdo HTML e remover tags.
 * @param {string} content - O conteúdo HTML a ser limpo.
 * @returns {string} O conteúdo limpo sem tags HTML.
 * 
 * @function handlePostClick
 * @description Função para navegar para a página de detalhes de um post específico.
 * @param {string} slug - O slug do post para navegação.
 * 
 * @function getPostImage
 * @description Função para obter a URL da imagem do post.
 * @param {Object} post - O objeto do post.
 * @returns {string} A URL da imagem do post.
 * 
 * @function handleSearchSubmit
 * @description Função para submeter a busca.
 * 
 * @function handlePagination
 * @description Função para lidar com a paginação dos resultados de busca.
 * @param {string} direction - A direção da paginação ("next" ou "previous").
 * 
 * @function handleKeyDown
 * @description Função para lidar com o evento de pressionar a tecla Enter no campo de busca.
 * @param {Object} e - O evento de teclado.
 */
const NewsPage = () => {
  // Estado para armazenar o cursor atual para paginação
  const [currentCursor, setCurrentCursor] = useState(null);
  // Estado para armazenar o termo de busca digitado pelo usuário
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para armazenar o termo de busca confirmado pelo usuário
  const [submittedSearch, setSubmittedSearch] = useState("");
  const navigate = useNavigate();

  // Função para limpar o conteúdo HTML e remover tags
  const cleanHTMLContent = (content) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    let text = doc.body.textContent || "";
    text = text.replace(/&hellip;/g, "…");
    return text;
  };

  // Hook useQuery para buscar posts com base nos parâmetros fornecidos
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 9, after: currentCursor, search: submittedSearch },
  });

  if (error) return <p>Error: {error.message}</p>;

  // Extrai os posts e informações de paginação da resposta da query
  const posts = data?.posts?.nodes || [];
  const pageInfo = data?.posts?.pageInfo || {};

  // Função para navegar para a página de detalhes de um post específico
  const handlePostClick = (slug) => {
    navigate(`/noticia/${slug}`);
  };

  // Função para obter a URL da imagem do post
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

  // Função para submeter a busca
  const handleSearchSubmit = () => {
    setSubmittedSearch(searchTerm); // Define o termo confirmado
    setCurrentCursor(null); // Reseta para a primeira página
  };

  // Função para lidar com a paginação dos resultados de busca
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

  // Função para lidar com o evento de pressionar a tecla Enter no campo de busca
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
          // Exibe skeletons enquanto os dados estão sendo carregados
          Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="post-item">
              <Skeleton height={200} />
              <h2><Skeleton /></h2>
              <p><Skeleton count={3} /></p>
            </div>
          ))
        ) : (
          // Exibe os posts carregados
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
