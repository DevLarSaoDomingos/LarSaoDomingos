import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import MainSlider from "../components/MainSlider";
import parse, { domToReact } from "html-react-parser";
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

  // Tratamento de erros e carregamento
  if (loading) return <div className="loading-spinner">Carregando...</div>;
  if (error) return <p className="error-message">Erro: {error.message}</p>;

  // Dados do post
  const post = data?.postBy;

  // Função para agrupar e processar o conteúdo do post
  const parsePostData = () => {
    const groupedContent = {};

    const processNode = (node) => {
      if (node.type === "tag") {
        if (!groupedContent[node.name]) {
          groupedContent[node.name] = [];
        }

        if (node.name === "img") {
          groupedContent[node.name].push(node.attribs);
        } else if (node.children && node.children.length) {
          groupedContent[node.name].push(domToReact(node.children));
        }
      }
    };

    parse(post.content, { replace: (node) => processNode(node) });

    return groupedContent;
  };

  const parsedData = parsePostData();

  return (
    <div className="post-page-container">
      {post && parsedData && (
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

          <MainSlider
            container="slider-container"
            sliderItem="slider-item"
            sliderImage="slider-image"
            text="slider-text"
            arrowSize={60}
            imagesAbove={true}
            slidesData={parsedData.img?.map((img) => ({
              img: img.src,
              alt: img.altText || "Imagem do post",
              title: "",
              subtitle: "",
            }))}
          />
          <div className="post-page-content">
            <h1>{post.title}</h1>
            {parsedData.p?.slice(1).map((paragraph, index) => (
              <p key={index} className="post-paragraph">
                {typeof paragraph === "string" ? paragraph : paragraph}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PostPage;
