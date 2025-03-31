import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const logo = `${process.env.PUBLIC_URL}/assets/gastraker.png`;
const smallLogo = `${process.env.PUBLIC_URL}/assets/logo-horizontal.png`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="navbar">
        <div className="smallLogoContainer">
          <Link to="/">
            <img src={smallLogo} alt="Icon" className="smallLogo" />
          </Link>
        </div>

        <button className="mobileMenuButton" onClick={toggleMobileMenu}>
          ☰
        </button>

        <nav className={`navLinks ${isMobileMenuOpen ? "show" : ""}`}>
          <Link to="/nosotros" className="navLink" onClick={toggleMobileMenu}>
            Nosotros
          </Link>
          <Link to="/productos" className="navLink" onClick={toggleMobileMenu}>
            Productos
          </Link>
          <Link to="/instalacion" className="navLink" onClick={toggleMobileMenu}>
            Instalación
          </Link>
          <Link to="/contacto" className="navLink" onClick={toggleMobileMenu}>
            Contacto
          </Link>
        </nav>

        <div className="logoContainer">
          <img src={logo} alt="GasTraker" className="logo" />
        </div>
      </header>

      <div className="header-separator"></div> {/* ✅ Keep this outside header */}
    </>
  );
};

export default Navbar;
