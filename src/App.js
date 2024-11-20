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

// import { ApolloProvider } from "@apollo/client"; // Ensure this wrapper handles routing

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar navbar={"navbar"} menu={"navbar-menu"} logo={"navbar-logo"} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/noticia/:slug" element={<PostPage />} />{" "}
          {/* Rota para o post */}
          <Route path="/atividades" element={<ActivitiesPage />} />{" "}
          {/* Rota para a página de atividades */}
          <Route path="/noticias" element={<NewsPage />} />{" "}
          {/* Rota para a página de notícias */}
          <Route path="/abrace-este-lar" element={<HugPage />} />{" "}
          {/* Rota para a página de abraço */}
          <Route path="/institucional/*" element={<InstitucionalPage />} />{" "}
          {/* Rota para a página institucional */}
          <Route path="/doacoes" element={<DonationPage />} />{" "}
          {/* Rota para a página de doação */}
          <Route path="/auditorios" element={<AuditoriumList />} />{" "}
        </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
