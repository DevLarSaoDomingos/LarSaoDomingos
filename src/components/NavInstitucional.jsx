import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavInstitucional.css';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  return (
    <li className={location.pathname === to ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const NavInstitucional = () => {
  return (
    <nav className="navbar-institucional">
      <ul>
        <NavLink to="/institucional/">Institucional</NavLink>
        <NavLink to="/institucional/historia">História</NavLink>
        <NavLink to="/institucional/sobre">Sobre</NavLink>
        <NavLink to="/institucional/estrutura">Estrutura</NavLink>
        <NavLink to="/institucional/missao">Missão</NavLink>
        <NavLink to="/institucional/equipe">Equipe</NavLink>
      </ul>
    </nav>
  );
};

export default NavInstitucional;
