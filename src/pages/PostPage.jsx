import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obter o 'slug' da URL
import { useQuery, gql } from "@apollo/client"; // Para realizar a consulta GraphQL
import NavBar from "../components/NavBar";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";

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
  // Pegando o 'slug' da URL
  const { slug } = useParams();

  // Realizando a consulta GraphQL para buscar o post
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  // Verificando o estado de carregamento e erro
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Função para extrair a URL da imagem do content
  const extractImageFromContent = (content) => {
    if (!content) return null;

    // Tenta encontrar tanto src quanto data-src (comum em lazy loading)
    const imgRegex = /<img[^>]+(?:src|data-src)="([^">]+)"/;
    const match = content.match(imgRegex);

    if (match) {
      const imageUrl = match[1];
      console.log("Extracted image URL:", imageUrl);
      return imageUrl;
    }

    // Se não encontrar imagem no content, tenta usar a featuredImage
    if (post?.featuredImage?.node?.sourceUrl) {
      return post.featuredImage.node.sourceUrl;
    }

    return null;
  };

  // Funções para extrair elementos do content
  const extractTitleFromContent = (content) => {
    // Procura por <h1> ou <h2> primeiro
    const headerRegex = /<h[12][^>]*>(.*?)<\/h[12]>/;
    const headerMatch = content.match(headerRegex);
    if (headerMatch) {
      return headerMatch[1].trim();
    }

    // Se não encontrar header, procura no primeiro parágrafo
    const paragraphRegex = /<p[^>]*>(.*?)<\/p>/;
    const paragraphMatch = content.match(paragraphRegex);
    if (paragraphMatch) {
      // Remove tags de imagem e outros elementos HTML
      return paragraphMatch[1]
        .replace(/<img[^>]*>/g, "") // Remove tags de imagem
        .replace(/<[^>]*>/g, "") // Remove outras tags HTML
        .replace(/&nbsp;/g, " ") // Substitui &nbsp; por espaço
        .replace(/\s+/g, " ") // Remove múltiplos espaços
        .trim();
    }

    return null;
  };

  const extractParagraphsFromContent = (content) => {
    const paragraphs = content.split("</p>");
    // Remove o primeiro parágrafo que contém a imagem e título
    paragraphs.shift();

    return paragraphs
      .map((paragraph) => {
        return paragraph
          .replace(/<[^>]*>/g, "") // Remove todas as tags HTML
          .replace(/&nbsp;/g, " ") // Substitui &nbsp; por espaço
          .replace(/\s+/g, " ") // Remove múltiplos espaços
          .trim();
      })
      .filter((p) => p.length > 0); // Remove parágrafos vazios
  };

  const post = data?.postBy;

  const imageUrl = extractImageFromContent(post.content);
  const contentTitle = extractTitleFromContent(post.content);
  const paragraphs = extractParagraphsFromContent(post.content);

  const slidesData = imageUrl
    ? [
        {
          image: imageUrl,
          title: contentTitle || post.title,
          subtitle: paragraphs[0] || "",
        },
      ]
    : [];

  console.log("Slides Data:", slidesData);

  return (
    <>
      <NavBar navbar={"navbar"} menu={"navbar-menu"} logo={"navbar-logo"} />
      <div className="post-page">
        {slidesData && (
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
        <h1>{contentTitle}</h1>
        {paragraphs.map((paragraph, index) => (
          <p style={{ marginBottom: "1rem" }} key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default PostPage;
