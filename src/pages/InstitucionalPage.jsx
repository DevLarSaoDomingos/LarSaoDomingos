import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavInstitucional from "../components/NavInstitucional";
import AboutSection from "../components/AboutSection";
import LocationSection from "../components/LocationSection";
import "../styles/InstitucionalPage.css";

// Mapeamento de conteúdo para cada rota
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
    const location = useLocation();
    const [content, setContent] = useState(contentMap.default);

    useEffect(() => {
        const path = location.pathname.split("/").filter(Boolean).pop();
        setContent(contentMap[path] || contentMap.default);
    }, [location]);

    return (
        <div className="institucional">
            <NavInstitucional />
            <AboutSection
                imageSrc={content.imageSrc}
                title={content.title}
                text={content.text}  // Passando o conteúdo como array de parágrafos
                backgroundColor="#F2994A"
                fontColor="#000"
            />
            <LocationSection />
        </div>
    );
};

export default InstitucionalPage;
