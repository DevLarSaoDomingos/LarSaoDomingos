//App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HugPage from "./pages/HugPage";
import InstitucionalPage from "./pages/InstitucionalPage";
import DonationPage from "./pages/DonationPage";
import AuditoriumList from "./pages/AuditoriumList";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton.jsx";

// import { ApolloProvider } from "@apollo/client"; // Ensure this wrapper handles routing

/**
 * Componente principal do aplicativo.
 * 
 * Este componente define a estrutura principal do aplicativo, incluindo o cabeçalho com a barra de navegação,
 * as rotas para diferentes páginas e o rodapé.
 * 
 * @component
 * @returns {JSX.Element} O componente App.
 * 
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente da barra de navegação */}
        <NavBar navbar={"navbar"} menu={"navbar-menu"} logo={"navbar-logo"} />

        {/* Definição das rotas do aplicativo */}
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<HomePage />} />
          {/* Rota para a página de post, com parâmetro slug */}
          <Route path="/noticia/:slug" element={<PostPage />} />{" "}
          {/* Rota para a página de atividades */}
          <Route path="/atividades" element={<ActivitiesPage />} />{" "}
          {/* Rota para a página de notícias */}
          <Route path="/noticias" element={<NewsPage />} />{" "}
          {/* Rota para a página de abraço */}
          <Route path="/abrace-este-lar" element={<HugPage />} />{" "}
          {/* Rota para a página institucional */}
          <Route path="/institucional/*" element={<InstitucionalPage />} />{" "}
          {/* Rota para a página de doação */}
          <Route path="/doacoes" element={<DonationPage />} />{" "}
          {/* Rota para a lista de auditórios */}
          <Route path="/auditorios" element={<AuditoriumList />} />{" "}
        </Routes>
      </header>
      {/* Componente do rodapé */}
      <WhatsAppFloatButton phoneNumber="5511998765432" />
      <Footer />
    </div>
  );
}

export default App;
