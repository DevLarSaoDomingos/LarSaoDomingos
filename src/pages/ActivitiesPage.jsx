// ActivitiesPage.js
import React from "react";
import "../styles/ActivitiesPage.css";
import AboutSection from "../components/AboutSection";
import ActivitiesList from "../components/ActivitiesList";

const ActivitiesPage = () => {
  const activitiesContent = {
    title: "Nossas Atividades",
    text: "No Lar São Domingos, oferecemos uma variedade de atividades educativas, culturais, esportivas e de inclusão digital, todas voltadas ao desenvolvimento integral de crianças e adolescentes de 6 a 17 anos. Nosso objetivo é proporcionar um ambiente estimulante e acolhedor, onde os jovens possam aprender, crescer e se preparar para um futuro melhor.",
    imageSrc: "assets/img/atividades-esportivas.jpg",
  };

  const activities = [
    {
      title: "Atividades Esportivas",
      description:
        "As atividades esportivas desempenham um papel fundamental no desenvolvimento físico e social dos jovens atendidos. Oferecemos práticas regulares de esportes como futebol, vôlei, basquete e ginástica, que promovem a saúde, a disciplina e o trabalho em equipe. Além disso, o ginásio poliesportivo do Lar proporciona um ambiente adequado para que as crianças e adolescentes possam se exercitar e aprender os valores do esporte, como respeito e cooperação.",
      imageSrc: "assets/img/atividades-esportivas.jpg",
    },
    {
      title: "Inclusão Digital",
      description:
        "Com foco no preparo para o futuro, o Lar São Domingos oferece cursos de informática no nosso laboratório de tecnologia. Nossos programas de inclusão digital capacitam os jovens para lidar com ferramentas digitais essenciais no mercado de trabalho, além de promover o acesso ao conhecimento digital, garantindo que todos tenham a oportunidade de aprender e crescer em um mundo cada vez mais tecnológico.",
      imageSrc: "assets/img/inclusao-digital.jpg",
    },
    {
      title: "Atividades Artísticas",
      description:
        "A arte é uma poderosa ferramenta de expressão e criatividade, e no Lar São Domingos os jovens participam de diversas oficinas artísticas. Oferecemos atividades de teatro, música, dança e artes visuais, que permitem às crianças e adolescentes desenvolverem suas habilidades criativas, autoconfiança e senso estético. Essas atividades também contribuem para o fortalecimento da identidade cultural e o enriquecimento do convívio social.",
      imageSrc: "assets/img/atividades-artisticas.jpg",
    },
    {
      title: "Grupos de Convivência",
      description:
        "Promovemos espaços de convivência onde os jovens podem compartilhar experiências e aprender em grupo. Os grupos de convivência são fundamentais para fortalecer os laços sociais, criar empatia e desenvolver habilidades de comunicação. Durante esses encontros, trabalhamos temas como cidadania, ética, valores e respeito ao próximo, ajudando a formar cidadãos conscientes e participativos.",
      imageSrc: "assets/img/grupo-convivencia.jpg",
    },
  ];

  return (
    <div>
      <AboutSection
        title={activitiesContent.title}
        text={activitiesContent.text}
        imageSrc={activitiesContent.imageSrc}
        backgroundColor="#007CEE"  // Cor personalizada para a ActivitiesPage
      />
      <ActivitiesList activities={activities} />

    </div>
  );
};

export default ActivitiesPage;
