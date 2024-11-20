import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Para pegar a URL atual
import "../styles/NavBar.css";

/**
 * Componente Navbar que renderiza uma barra de navegação com links.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.navbar - Classe CSS para o elemento <nav>.
 * @param {string} props.menu - Classe CSS para o elemento <ul> que contém os links de navegação.
 * @param {string} props.logo - Classe CSS para o elemento que contém o logo.
 *
 * @returns {JSX.Element} O componente Navbar.
 */
const Navbar = ({ navbar, menu, logo }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado
  const location = useLocation(); // Pega a localização atual

  // Função para alternar o estado do menu aberto/fechado
  const toggleMenu = (event) => {
    event.stopPropagation(); // Evita redirecionamento indesejado
    setIsOpen(!isOpen); // Alterna o estado do menu
  };

  // Função para verificar se o link é o atual
  const isActive = (path) => {
    // Para a página inicial, verificamos exatamente se o pathname é "/"
    if (path === "/") {
      return location.pathname === path;
    }
    // Para os outros links, verificamos se o pathname começa com o caminho fornecido
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={navbar}>
      {/* Logo que redireciona para a página inicial ao ser clicado */}
      <div className={logo} onClick={() => (window.location.href = "/")}>
        <img src={"/assets/img/LarSaoDomingos.png"} alt="Lar São Domingos" />
      </div>
      {/* Botão burger para abrir o menu no mobile */}
      <button
        className="burger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {/* Lista de links de navegação */}
      <ul className={`${menu} ${isOpen ? "open" : ""}`}>
        <li>
          <a
            href="/"
            className={`nav-inicio ${isActive("/") ? "active" : ""}`}
          >
            Início
          </a>
        </li>
        <li>
          <a
            href="/institucional"
            className={`nav-institucional ${isActive("/institucional") ? "active" : ""}`}
          >
            Institucional
          </a>
        </li>
        <li>
          <a
            href="/atividades"
            className={`nav-atividades ${isActive("/atividades") ? "active" : ""}`}
          >
            Atividades
          </a>
        </li>
        <li>
          <a
            href="/abrace-este-lar"
            className={`nav-abrace ${isActive("/abrace-este-lar") ? "active" : ""}`}
          >
            Abrace este Lar
          </a>
        </li>
        <li>
          <a
            href="/doacoes"
            className={`nav-doacoes ${isActive("/doacoes") ? "active" : ""}`}
          >
            Doações
          </a>
        </li>
        <li>
          <a
            href="/auditorios"
            className={`nav-auditorios ${isActive("/auditorios") ? "active" : ""}`}
          >
            Auditórios
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
