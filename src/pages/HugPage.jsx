import React from "react";
import AboutSection from "../components/AboutSection";
import ActivitiesList from "../components/ActivitiesList";

const HugPage = () => {
  const activitiesContent = {
    title: "Ajude o Nosso Lar",
    text: "O Lar São Domingos é uma instituição que se mantém graças ao apoio de pessoas como você, que acreditam no poder da solidariedade. Existem várias maneiras de ajudar a transformar a vida de crianças e adolescentes acolhidos por nós. Junte-se a essa causa e faça parte dessa história!",
    imageSrc: "assets/img/abrace-lar.jpg",
  };

  const activities = [
    {
      title: "Ginásio poliesportivo",
      description:
        "O Lar possui um ginásio amplo e moderno, excelente para práticas esportivas e artísticas, com disponibilidade para agendamento. Além de mensalistas, ele também pode ser alugado para eventos pontuais, inclusive no período noturno e nos finais de semana.",
      imageSrc: "assets/img/ginasio.jpg",
    },
    {
      title: "Livraria",
      description:
        "A livraria do Lar São Domingos oferece uma seleção de livros e materiais educativos, acessível para toda a comunidade. Além de compras, o espaço pode ser visitado para consultas e leituras no local, contribuindo para a educação e cultura dos jovens atendidos.",
      imageSrc: "assets/img/biblioteca.jpg",
    },
    {
      title: "Bazar Lar Fraterno",
      description:
        "Aberto à comunidade, o Bazar Lar Fraterno  funciona toda terça-feira (das 14h às 20h), nas quartas e quintas (das 14h às 17h) e no terceiro sábado de cada mês (das 14h às 17h).  Você pode contribuir doando os seus seminovos à instituição. Toda a renda do Bazar Lar Fraterno é destinada à manutenção das ações do Lar São Domingos.",
      imageSrc: "assets/img/bazar.jpg",
    },
    {
      title: "Voluntarie-se",
      description:
        "Estamos de portas abertas para visitas e novos voluntários! Se você deseja fazer a diferença na vida de crianças e adolescentes, entre em contato conosco pelo telefone (82) 2121-1300 e agende uma entrevista com nossa equipe. Junte-se a nós e faça parte dessa transformação!",
      imageSrc: "assets/img/voluntariase.jpg",
    },
  ];

  return (
    <div>
      <AboutSection
        title={activitiesContent.title}
        text={activitiesContent.text}
        imageSrc={activitiesContent.imageSrc}
        backgroundColor="#E95757" // Cor personalizada para a ActivitiesPage
      />
      <ActivitiesList activities={activities} />
    </div>
  );
};

export default HugPage;
