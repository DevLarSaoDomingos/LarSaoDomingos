// Navbar.jsx
import React from "react";
import "../styles/NavBar.css";

const Navbar = ({ navbar, menu, logo }) => {
  return (
    <nav className={navbar}>
      <div className={logo}>
        <img src={"/assets/img/LarSaoDomingos.png"} alt="Lar São Domingos" />
      </div>
      <ul className={menu}>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/institucional">Institucional</a>
        </li>
        <li>
          <a href="/atividades">Atividades</a>
        </li>
        <li>
          <a href="/abrace-este-lar">Abrace este Lar</a>
        </li>
        <li>
          <a href="/doacoes">Doações</a>
        </li>
        <li>
          <a href="/auditorios">Auditórios</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
