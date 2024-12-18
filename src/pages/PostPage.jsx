//PostPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import MainSlider from "../components/MainSlider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "../styles/PostPage.css";

// Consulta GraphQL para obter o post por slug
const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

/**
 * Componente de página de post que exibe o conteúdo de um post específico.
 * Obtém o slug dos parâmetros da URL e executa uma consulta GraphQL para buscar o post correspondente.
 * Exibe um esqueleto de carregamento enquanto os dados estão sendo carregados e uma mensagem de erro se a consulta falhar.
 * Extrai imagens e vídeos do conteúdo HTML do post e os remove do corpo do conteúdo.
 * Normaliza URLs de imagens para remover parâmetros de query.
 * Combina a imagem destacada com as imagens extraídas do conteúdo e as exibe em um slider.
 * Exibe o título, data de publicação e conteúdo do post, além dos vídeos extraídos.
 *
 * @returns {JSX.Element} O componente da página de post.
 */
function PostPage() {
  // Obtém o slug dos parâmetros da URL
  const { slug } = useParams();

  // Executa a consulta GraphQL para obter o post pelo slug
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  // Exibe um esqueleto de carregamento enquanto os dados estão sendo carregados
  if (loading)
    return (
      <div
        style={{
          marginInline: "auto",
          width: "80%",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Skeleton height="90vh" width="100%" />
        <h1>
          <Skeleton width={300} />
        </h1>
        <div style={{ maxWidth: "80%", margin: "0 auto" }}>
          <Skeleton count={10} />
        </div>
      </div>
    );

  // Exibe uma mensagem de erro se a consulta falhar
  if (error) return <p>Erro: {error.message}</p>;

  // Obtém o post dos dados retornados pela consulta
  const post = data?.postBy;

  // Função para extrair todas as imagens e vídeos do conteúdo HTML
  const extractMediaFromContent = (htmlContent) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;

    // Pegar todas as tags <img> e <video> do conteúdo
    const images = div.querySelectorAll("img");
    const videos = div.querySelectorAll("video");
    const imageUrls = [];
    const videoUrls = [];

    // Extrai URLs das imagens e remove as imagens do conteúdo
    images.forEach((img) => {
      if (img.src) {
        // Substituir imagens pequenas por maiores
        const normalizedUrl = normalizeImageUrl(img.src);
        imageUrls.push(normalizedUrl); // Armazenar as URLs das imagens
        img.remove(); // Remover as imagens do conteúdo (não vai aparecer no corpo)
      }
    });

    // Extrai URLs dos vídeos e remove os vídeos do conteúdo
    videos.forEach((video) => {
      if (video.src) {
        videoUrls.push(video.src); // Armazenar os URLs dos vídeos
        video.remove(); // Remover os vídeos do conteúdo (não vai aparecer no corpo)
      }
    });

    // Retornar o HTML sem as imagens e vídeos
    return {
      contentWithoutMedia: div.innerHTML,
      imageUrls,
      videoUrls,
    };
  };

  // Função para normalizar URLs (remoção de parâmetros ou tamanhos diferentes)
  const normalizeImageUrl = (url) => {
    // Aqui, removemos os parâmetros de query (como largura) da URL da imagem
    return url.replace(/-\d+x\d+\./, '.'); // Remove o sufixo de tamanho (ex: -150x150)
  };

  // Filtrando as imagens e vídeos do conteúdo
  const { contentWithoutMedia, imageUrls, videoUrls } = post
    ? extractMediaFromContent(post.content)
    : { contentWithoutMedia: "", imageUrls: [], videoUrls: [] };

  // Combina as imagens da featuredImage com as imagens extraídas do conteúdo
  const slidesData = [];

  // Verificar se há imagens no conteúdo
  const hasSingleImageInContent = imageUrls.length === 1;

  // Adiciona a imagem destacada apenas se ela não estiver nas imagens extraídas ou se não houver uma única imagem no conteúdo
  if (post.featuredImage) {
    const featuredImageUrl = normalizeImageUrl(
      post.featuredImage.node.sourceUrl
    );

    // Verificar se a imagem destacada já foi adicionada ou se é a mesma da única imagem no conteúdo
    if (
      !hasSingleImageInContent ||
      !imageUrls.some((url) => normalizeImageUrl(url) === featuredImageUrl)
    ) {
      slidesData.push({ img: featuredImageUrl });
    }
  }

  // Adiciona as imagens extraídas do conteúdo
  slidesData.push(...imageUrls.map((url) => ({ img: url })));

  return (
    <div className="post-page-container">
      {post && (
        <>
          <div className="slider">
            {/* Container da Imagem Destacada */}
            <div className="featured-image-container">
              {slidesData.length > 0 && (
                <MainSlider
                  container={"slider-container"}
                  sliderItem={"slider-item"}
                  sliderImage={"slider-image"}
                  text={"slider-text"}
                  arrowSize={60}
                  imagesAbove={true}
                  slidesData={slidesData}
                />
              )}
            </div>
          </div>
          <div className="post">
            {/* Container do Post */}
            <div className="post-body-container">
              <div className="post-content-container">
                {/* Título do Post */}
                <div className="post-title-container">
                  <h1 className="post-title">{post.title}</h1>
                </div>

                {/* Data de publicação */}
                <div className="post-date-container">
                  <p className="post-date">
                    Postado em: {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>

                {/* Conteúdo do Post */}
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: contentWithoutMedia }}
                />
              </div>

              {/* Vídeos do Post */}
              {videoUrls.length > 0 && (
                <div className="post-videos-container">
                  {videoUrls.map((url, index) => (
                    <div key={index} className="post-video">
                      <video controls src={url} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PostPage;
