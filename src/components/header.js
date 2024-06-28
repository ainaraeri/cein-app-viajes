import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/header.scss'; // Asegúrate de importar el archivo SCSS donde defines los estilos
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Questions from './pages/questions';
import about from './pages/about';
import inspiration from './pages/inspiration';

const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/assets/images/logobidaii.png" alt="Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <NavLink to="/questions">Cuestionario</NavLink>
              </li>
              <li>
                <Link to="/inspiration">Inspírate</Link>
              </li>
              <li>
                <Link to="/about">Quiénes Somos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;