import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">KEMIK</div>
      <input type="text" className="search-bar" placeholder="Buscar en Kemik" />
      <nav className="nav-links">
        <a href="#">Ofertas</a>
        <a href="#">Envíos</a>
        <a href="#">Lo + nuevo</a>
        <a href="#">Gift card</a>
        <a href="#">Vende en Kemik</a>
        <a href="#">Ayuda</a>
      </nav>
      <div className="icons">
        <span>❤️</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;