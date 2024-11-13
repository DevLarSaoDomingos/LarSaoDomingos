import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import MainSlider from "../components/MainSlider";
import "../styles/PostPage.css";

// Consulta GraphQL para obter o post por slug
const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

function PostPage() {
  // Obtém o slug dos parâmetros da URL
  const { slug } = useParams();
  // Executa a consulta GraphQL com o slug como variável
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  // Tratamento de erros e carregamento
  if (loading) return <div className="loading-spinner">Carregando...</div>;
  if (error) return <p className="error-message">Erro: {error.message}</p>;

  // Dados do post
  const post = data?.postBy;

  return (
    <div className="post-page-container">
      {post && (
        <>
          {/* Verificar se a imagem de destaque existe antes de exibir */}
          {post.featuredImage && post.featuredImage.node && (
            <div className="featured-image">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || "Imagem de Destaque"}
                className="featured-image-img"
              />
            </div>
          )}

          {/* Componente de slider principal */}
          <MainSlider
            container="slider-container"
            sliderItem="slider-item"
            sliderImage="slider-image"
            text="slider-text"
            arrowSize={60}
            imagesAbove={true}
            slidesData={
              post.content.includes('<img')
                ? Array.from(post.content.matchAll(/<img [^>]*src="([^"]*)"[^\>]*>/g), (match) => ({
                    img: match[1],
                    alt: match[0].match(/alt="([^"]*)"/)?.[1] || "Imagem do post",
                    title: "",
                    subtitle: "",
                  }))
                : []
            }
          />

          <div className="post-page-content">
            <h1>{post.title}</h1>
            {/* Renderiza o conteúdo HTML diretamente */}
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PostPage;
