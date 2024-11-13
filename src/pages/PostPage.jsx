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
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  const post = data?.postBy;

  // Função para extrair todas as imagens do conteúdo HTML
  const extractImagesFromContent = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;

    // Pegar todas as tags <img> do conteúdo
    const images = div.querySelectorAll('img');
    const imageUrls = [];

    images.forEach((img) => {
      if (img.src) {
        imageUrls.push(img.src);  // Armazenar os URLs das imagens
        img.remove();  // Remover as imagens do conteúdo (não vai aparecer no corpo)
      }
    });

    // Retornar o HTML sem as imagens
    return {
      contentWithoutImages: div.innerHTML,
      imageUrls,
    };
  };

  // Filtrando as imagens do conteúdo
  const { contentWithoutImages, imageUrls } = post ? extractImagesFromContent(post.content) : { contentWithoutImages: '', imageUrls: [] };

  // Combina as imagens da featuredImage com as imagens extraídas do conteúdo
  const slidesData = [];

  // Adiciona a imagem destacada apenas se ela não estiver nas imagens extraídas
  if (post.featuredImage) {
    const featuredImageUrl = post.featuredImage.node.sourceUrl;
    if (!imageUrls.includes(featuredImageUrl)) {
      slidesData.push({ img: featuredImageUrl });
    }
  }

  // Adiciona as imagens extraídas do conteúdo
  slidesData.push(...imageUrls.map(url => ({ img: url })));

  return (
    <div className="post-page-container">
      {post && (
        <>
          {/* Exibição de imagem em destaque */}
          {slidesData.length > 0 && (
            <div className="featured-image-container">
              <MainSlider
                container={"slider-container"}
                sliderItem={"slider-item"}
                sliderImage={"slider-image"}
                text={"slider-text"}
                arrowSize={60}
                imagesAbove={true}
                slidesData={slidesData}
              />
            </div>
          )}

          {/* Conteúdo do post (sem as imagens) */}
          <div className="post-page-content">
            <h1 className="post-title">{post.title}</h1>
            
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: contentWithoutImages }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PostPage;
