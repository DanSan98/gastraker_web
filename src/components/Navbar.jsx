import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // ✅ Import CSS file

const logo = `${process.env.PUBLIC_URL}/assets/gastraker.png`;
const smallLogo = `${process.env.PUBLIC_URL}/assets/logo-horizontal.png`;

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="smallLogoContainer">
        <Link to="/">
          <img src={smallLogo} alt="Icon" className="smallLogo" />
        </Link>
      </div>

      <nav className="navLinks">
        <Link to="/nosotros" className="navLink">Nosotros</Link>
        <Link to="/productos" className="navLink">Productos</Link>
        <Link to="/instalacion" className="navLink">Instalación</Link>
        <Link to="/contacto" className="navLink">Contacto</Link>
      </nav>

      <div className="logoContainer">
        <img src={logo} alt="GasTraker" className="logo" />
      </div>

      {/* ✅ The separator for the header */}
      <div className="header-separator"></div>
    </header>
  );
};

export default Navbar;