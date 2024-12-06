import React, { useState } from "react";
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">TIENDA DE MESAS</div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">

          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/admin/mesas">Productos</Link></li>
          <li><Link to="/admin/mesas/form">Servicios</Link></li>
          <li><Link to="/admin/registro">Contactos</Link></li>
          <li><Link to="/admin/admin">Iniciar Sesion</Link></li>
        </ul>
      </nav>
      <button className="menu-toggle" aria-label="Abrir menú" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
