import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/header.scss"; // Asegúrate de importar el archivo SCSS donde defines los estilos

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink exact to="/">
            <img src="/assets/images/logobidaii.png" alt="Logo" />
          </NavLink>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/questions">Cuestionario</NavLink>
            </li>
            <li>
              <NavLink to="/inspiration">Inspírate</NavLink>
            </li>
            <li>
              <NavLink to="/about">Quiénes Somos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
