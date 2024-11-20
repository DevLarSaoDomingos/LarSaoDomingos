//InstitucionalPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavInstitucional from "../components/NavInstitucional";
import AboutSection from "../components/AboutSection";
import LocationSection from "../components/LocationSection";
import "../styles/InstitucionalPage.css";

// Mapeamento de conteúdo para cada rota
/**
 * Mapeamento de conteúdo para a página institucional.
 * Cada chave representa uma seção específica da página, contendo informações como imagem, título e texto.
 * 
 * @constant {Object} contentMap
 * @property {Object} historia - Seção sobre a história da instituição.
 * @property {string} historia.imageSrc - Caminho da imagem para a seção de história.
 * @property {string} historia.title - Título da seção de história.
 * @property {string[]} historia.text - Texto descritivo da seção de história.
 * 
 * @property {Object} sobre - Seção sobre informações gerais da instituição.
 * @property {string} sobre.imageSrc - Caminho da imagem para a seção sobre.
 * @property {string} sobre.title - Título da seção sobre.
 * @property {string[]} sobre.text - Texto descritivo da seção sobre.
 * 
 * @property {Object} estrutura - Seção sobre a estrutura da instituição.
 * @property {string} estrutura.imageSrc - Caminho da imagem para a seção de estrutura.
 * @property {string} estrutura.title - Título da seção de estrutura.
 * @property {Array.<string|string[]>} estrutura.text - Texto descritivo da seção de estrutura, incluindo uma lista de instalações.
 * 
 * @property {Object} missao - Seção sobre a missão da instituição.
 * @property {string} missao.imageSrc - Caminho da imagem para a seção de missão.
 * @property {string} missao.title - Título da seção de missão.
 * @property {string[]} missao.text - Texto descritivo da seção de missão.
 * 
 * @property {Object} equipe - Seção sobre a equipe da instituição.
 * @property {string} equipe.imageSrc - Caminho da imagem para a seção de equipe.
 * @property {string} equipe.title - Título da seção de equipe.
 * @property {Array.<string|string[]>} equipe.text - Texto descritivo da seção de equipe, incluindo uma lista de membros da diretoria e conselho fiscal.
 * 
 * @property {Object} default - Seção padrão com informações institucionais gerais.
 * @property {string} default.imageSrc - Caminho da imagem para a seção padrão.
 * @property {string} default.title - Título da seção padrão.
 * @property {string[]} default.text - Texto descritivo da seção padrão.
 */
const contentMap = {
    historia: {
        imageSrc: "/assets/img/historia.jpg",
        title: "História",
        text: [
            "Fundado a 3 de agosto de 1919, como uma sociedade filantrópica voltada ao acolhimento de menores carentes em regime de internato, o então “Orphanato” São Domingos passou por um reordenamento institucional em 1995, com a implantação do Projeto Ninho de Pássaro, passando a se chamar “Lar” São Domingos.",
            "Ancorado nos fundamentos filosóficos do Lar Fabiano de Cristo (RJ), o reordenamento institucional teve como princípio “nenhuma criança pode ser afastada de sua família por causa da pobreza”, sendo, portanto, extinto o regime de internato e implantado o atendimento em meio aberto a crianças de ambos os sexos."
        ],
    },
    sobre: {
        imageSrc: "/assets/img/sobre.jpg",
        title: "Sobre",
        text: [
            "Atualmente, cerca de 500 crianças e adolescentes com idade entre 6 e 17 anos, além de 250 famílias cadastradas, são assistidas por nós, de segunda a sexta-feira, das 7h às 17h. Aqui, esses jovens recebem reforço escolar no contra turno da escola formal e duas refeições básicas. Com a ajuda de uma equipe multidisciplinar de educadores sociais e diversas parcerias estabelecidas com instituições de ensino superior e a SEMAS, eles são amplamente estimulados com atividades culturais, artísticas, esportivas e inclusão digital."
        ],
    },
    estrutura: {
        imageSrc: "/assets/img/estrutura.jpg",
        title: "Estrutura",
        text: [
            "O Lar São Domingos oferece uma infraestrutura ampla e diversificada, projetada para atender às necessidades de desenvolvimento educacional, cultural e esportivo de crianças e adolescentes. Nosso espaço é totalmente adaptado para garantir conforto, segurança e qualidade nas atividades diárias.",
            "Essa estrutura foi planejada para oferecer um ambiente propício ao aprendizado, à convivência e ao desenvolvimento integral dos jovens assistidos, permitindo que eles participem de uma ampla gama de atividades educacionais, culturais e recreativas.",
            [
                "27 salas de atividades, cada uma com capacidade para 30 alunos.",
                "1 laboratório de informática, totalmente equipado, com capacidade para 40 alunos por aula.",
                "2 auditórios, cada um com capacidade para 240 pessoas, utilizados para eventos, palestras e apresentações.",
                "1 salão multiuso, com cadeiras removíveis, que se adapta a diferentes dinâmicas e atividades.",
                "4 salas para treinamento e dinâmicas de grupo.",
                "1 biblioteca, um espaço dedicado à leitura e pesquisa.",
                "2 salas de vídeo, equipadas com TV e equipamentos audiovisuais.",
                "1 cozinha industrial, usada para a preparação de refeições diárias.",
                "5 baterias de banheiros, distribuídas pelo espaço para melhor atender as necessidades dos alunos e visitantes.",
                "1 refeitório, com capacidade para 150 pessoas, onde são servidas duas refeições diárias.",
                "Amplo terreno, destinado a atividades de jardinagem e projetos como a farmácia viva.",
                "Ginásio poliesportivo, onde são realizadas atividades físicas e esportivas, promovendo a saúde e a integração social."
            ]
        ],
    },
    missao: {
        imageSrc: "/assets/img/missao.jpg",
        title: "Missão",
        text: [
            "Adotamos a causa do “serviço constante e construtivo pela fraternidade universal”, ensinada por Fabiano de Cristo. Nossos trabalhos visam promover o ser humano em situação de miséria social, atendendo às suas necessidades básicas como estratégia de sobrevivência.",
            "Nossa meta, no entanto, é prover o indivíduo de meios pelos quais ele possa se inserir dignamente na sociedade, num contínuo processo de educação do Ser, fundamentada no exercício do amor, da alteridade e da justiça.",
            "Nossa missão é a promoção sociofamiliar, através de crianças e adolescentes de 6 a 17 anos, amparando-os nos aspectos material, social, moral e espiritual com vistas à formação do ser integral."
        ],
    },
    equipe: {
        imageSrc: "/assets/img/equipe.jpg",
        title: "Equipe",
        text: [
            "Em Assembleia Geral ordinária dos sócios efetivos do Lar São Domingos, realizada no dia 13/02/2023, foi eleita e empossada a diretoria e o conselho fiscal para o triênio 2023/2026",
            "Diretoria:",
            ["Presidente: Haroldo Domingues Sanches",
            "Vice-Presidente: Ricardo José dos Santos",
            "1ª Secretária: Olindina Maria Moura",
            "2ª Secretária: Jaci Gomes Vieira Duprat",
            "1º Tesoureiro: José Duílio da Rocha Pereira",
            "2º Tesoureira: Rozeilda Lopes Soares",
            "Diretor de Patrimônio: João Batista Tomaz Neto",
            "Suplentes - Conselho Fiscal"],
            "Titulares:",
            [
                "Jadylena Cabral Xavier",
                "José Edler Pereira Pitta",
                "Robson Marabá Santos"
            ],
            "Suplentes:",
            [
                "João Antônio Lyra",
                "Ligia Maria de Melo",
                "Numeriano José de Araújo Falcão"
            ]
        ]
    },
    default: {
        imageSrc: "/assets/img/institucional.jpg",
        title: "Institucional",
        text: [
            "A instituição atende atualmente cerca de 250 famílias e 500 jovens, com idade de 6 a 17 anos, que recebem reforço escolar – no contra turno da escola formal – e duas refeições básicas.",
            "De segunda a sexta, das 7h às 17h, eles são amplamente estimulados com atividades culturais, artísticas, esportivas e de psicomotricidade."
        ],
    },
};

const InstitucionalPage = () => {
    const location = useLocation(); // Hook para obter a localização atual da rota
    const [content, setContent] = useState(contentMap.default); // Estado para armazenar o conteúdo da página

    useEffect(() => {
        const path = location.pathname.split("/").filter(Boolean).pop(); // Obtém a última parte do caminho da URL
        setContent(contentMap[path] || contentMap.default); // Atualiza o conteúdo com base na rota atual
    }, [location]); // Executa o efeito sempre que a localização mudar

    return (
        <div className="institucional">
            <NavInstitucional /> {/* Componente de navegação institucional */}
            <AboutSection
                imageSrc={content.imageSrc} // Fonte da imagem da seção
                title={content.title} // Título da seção
                text={content.text}  // Passando o conteúdo como array de parágrafos
                backgroundColor="#F2994A" // Cor de fundo da seção
                fontColor="#000" // Cor da fonte da seção
            />
            <LocationSection /> {/* Componente de seção de localização */}
        </div>
    );
};

export default InstitucionalPage;
