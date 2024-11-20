import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavInstitucional.css';

/**
 * Componente de navegação institucional.
 * 
 * Este componente renderiza uma barra de navegação com links para diferentes
 * seções institucionais do site.
 * 
 * @component
 * @example
 * return (
 *   <NavInstitucional />
 * )
 */

// Componente NavLink para criar links de navegação com estilo ativo
const NavLink = ({ to, children }) => {
  const location = useLocation(); // Hook para obter a localização atual
  return (
    <li className={location.pathname === to ? 'active' : ''}> {/* Adiciona classe 'active' se o caminho atual corresponder ao link */}
      <Link to={to}>{children}</Link> {/* Renderiza o link */}
    </li>
  );
};

const NavInstitucional = () => {
  return (
    <nav className="navbar-institucional"> {/* Classe CSS para estilizar a barra de navegação */}
      <ul>
        <NavLink to="/institucional/">Institucional</NavLink> {/* Link para a seção Institucional */}
        <NavLink to="/institucional/historia">História</NavLink> {/* Link para a seção História */}
        <NavLink to="/institucional/sobre">Sobre</NavLink> {/* Link para a seção Sobre */}
        <NavLink to="/institucional/estrutura">Estrutura</NavLink> {/* Link para a seção Estrutura */}
        <NavLink to="/institucional/missao">Missão</NavLink> {/* Link para a seção Missão */}
        <NavLink to="/institucional/equipe">Equipe</NavLink> {/* Link para a seção Equipe */}
      </ul>
    </nav>
  );
};

export default NavInstitucional;
