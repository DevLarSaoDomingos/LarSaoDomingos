import React from "react";
import { useParams } from "react-router-dom"; // Para obter o 'slug' da URL
import { useQuery, gql } from "@apollo/client";  // Para realizar a consulta GraphQL
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

  // Extraindo o post retornado pela consulta
  const post = data?.postBy;

  if (!post) {
    return <p>Post not found</p>; // Caso o post não seja encontrado
  }

  return (
    <div className="post-page">
      <div className="post-header">
        <h1>{post.title}</h1>
        {post.featuredImage?.node?.sourceUrl && (
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || "Imagem destacada"}
            className="post-image"
          />
        )}
      </div>
      {/* Exibe o conteúdo completo do post */}
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default PostPage;
