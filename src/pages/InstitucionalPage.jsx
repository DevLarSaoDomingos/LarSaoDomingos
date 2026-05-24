//InstitucionalPage.jsx
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useLocation } from "react-router-dom";
import NavInstitucional from "../components/NavInstitucional";
import AboutSection from "../components/AboutSection";
import LocationSection from "../components/LocationSection";
import "../styles/InstitucionalPage.css";

const GET_PAGES = gql`
  query GetPages {
    pages(where: { parent: "cG9zdDo5Mjc0" }) {
    edges {
      node {
        id
        title
        content
        featuredImage {
          node {
            id
            altText
            sourceUrl
          }
        }
      }
    }
  }
    }
`;

const routeTitleMap = {
    "": "Institucional",
    institucional: "Institucional",
    historia: "História",
    sobre: "Sobre",
    estrutura: "Estrutura",
    missao: "Missão",
    equipe: "Equipe",
};

const routeContentTitleMap = {
    "": ["Sobre o Lar"],
    institucional: ["Sobre o Lar"],
    historia: ["História"],
    sobre: ["Sobre", "Sobre o Lar"],
    estrutura: ["Estrutura"],
    missao: ["Missão"],
    equipe: ["Equipe"],
};

const normalizeValue = (value) =>
    value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

const getRouteSlug = (pathname) => {
    const parts = pathname.split("/").filter(Boolean);
    return parts.length > 1 ? parts[1] : parts[0] || "";
};

const getNodeTextWithLineBreaks = (element) =>
    Array.from(element.childNodes)
        .map((child) => (child.nodeName === "BR" ? "\n" : child.textContent || ""))
        .join("");

const parseContentBlocks = (htmlContent) => {
    if (!htmlContent) {
        return [];
    }

    const documentFragment = new DOMParser().parseFromString(htmlContent, "text/html");

    return Array.from(documentFragment.body.children).flatMap((element) => {
        const tagName = element.tagName.toLowerCase();
        const plainText = element.textContent.replace(/\s+/g, " ").trim();

        if (!plainText) {
            return [];
        }

        if (/^h[1-6]$/.test(tagName)) {
            return [plainText];
        }

        if (tagName === "p") {
            const lines = getNodeTextWithLineBreaks(element)
                .split(/\n+/)
                .map((line) => line.replace(/\s+/g, " ").trim())
                .filter(Boolean);

            if (lines.length > 1) {
                return [lines];
            }

            return [lines[0] || plainText];
        }

        return [plainText];
    });
};

const selectPageNode = (pages, slug) => {
    const normalizedSlug = normalizeValue(slug);
    const desiredTitles = routeContentTitleMap[normalizedSlug] || [];

    for (const desiredTitle of desiredTitles) {
        const matchedPage = pages.find(
            (page) => normalizeValue(page.title) === normalizeValue(desiredTitle)
        );

        if (matchedPage) {
            return matchedPage;
        }
    }

    if (normalizedSlug === "" || normalizedSlug === "institucional") {
        return (
            pages.find((page) => normalizeValue(page.title) === normalizeValue("Sobre o Lar")) ||
            pages[0] ||
            null
        );
    }

    return pages[0] || null;
};

const InstitucionalPage = () => {
    const location = useLocation();
    const { loading, error, data } = useQuery(GET_PAGES);

    if (error) {
        return <p>Erro: {error.message}</p>;
    }

    const pages = data?.pages?.edges?.map(({ node }) => node) || [];
    const currentSlug = getRouteSlug(location.pathname);
    const selectedPage = selectPageNode(pages, currentSlug);
    const pageTitle =
        routeTitleMap[normalizeValue(currentSlug)] || selectedPage?.title || "Institucional";
    const pageText = parseContentBlocks(selectedPage?.content);
    const pageImage = selectedPage?.featuredImage?.node?.sourceUrl || "/assets/img/institucional1.jpg";

    return (
        <div className="institucional">
            <NavInstitucional />
            <AboutSection
                imageSrc={pageImage}
                title={pageTitle}
                text={loading && !selectedPage ? ["Carregando conteúdo..."] : pageText}
                backgroundColor="#F2994A"
                fontColor="#000"
            />
            <LocationSection />
        </div>
    );
};

export default InstitucionalPage;
