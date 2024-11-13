import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obter o 'slug' da URL
import { useQuery, gql } from "@apollo/client"; // Para realizar a consulta GraphQL
import NavBar from "../components/NavBar";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";
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
  // Pegando o 'slug' da URL
  const { slug } = useParams();

  // Realizando a consulta GraphQL para buscar o post
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  // Verificando o estado de carregamento e erro
  if (loading) return <p></p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data?.postBy;

  const parsePostData = () => {
    const groupedContent = {};

    const processNode = (node) => {
      if (node.type === "tag") {
        // Verifica se a tag já existe no objeto agrupado
        if (!groupedContent[node.name]) {
          groupedContent[node.name] = [];
        }

        // Para imagens, apenas salvamos os atributos (como src)
        if (node.name === "img") {
          groupedContent[node.name].push(node.attribs);
        }
        // Para outras tags, salvamos o conteúdo textual
        else if (node.children && node.children.length) {
          groupedContent[node.name].push(domToReact(node.children));
        }
      }
    };

    // Percorre todos os nós HTML
    parse(post.content, {
      replace: (node) => {
        processNode(node);
      },
    });

    return groupedContent;
  };

  const parsedData = parsePostData();

  return (
    <>
      <NavBar navbar={"navbar"} menu={"navbar-menu"} logo={"navbar-logo"} />
      <div className="post-page-container">
        {post && parsedData && (
          <>
            <MainSlider
              container={"slider-container"}
              sliderItem={"slider-item"}
              sliderImage={"slider-image"}
              text={"slider-text"}
              arrowSize={60}
              imagesAbove={true}
              slidesData={parsedData.img.map((img) => ({
                img: img.src,
                title: "",
                subtitle: "",
              }))}
            />
            <div className="post-page-content">
              <h1>{post.title}</h1>
              {parsedData.p.slice(1).map((paragraph, index) => {
                console.log("Paragraph", index + 1, ":", paragraph);
                return (
                  <p style={{ marginBottom: "1rem" }} key={index}>
                    {typeof paragraph === "string" ? paragraph : paragraph}
                  </p>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PostPage;
