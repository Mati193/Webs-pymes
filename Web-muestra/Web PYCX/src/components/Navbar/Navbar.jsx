import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import logo from "/public/pycx.png";  // Si usás logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container container">
        <div className="logo" onClick={() => scrollToSection("hero")}>
          <img src="pycx.png" alt="PYCX | Desarrollo Web para Empresas PYMES" />
        </div>

        {/* MENU ICON - Font Awesome */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fas fa-times"></i>  /* Icono X cuando está abierto */
          ) : (
            <i className="fas fa-bars"></i>   /* Icono hamburguesa cuando está cerrado */
          )}
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <button onClick={() => scrollToSection("about")}>Nosotros</button>
          </li>

          <li>
            <button onClick={() => scrollToSection("work")}>¿Como Trabajamos?</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>
              Proyectos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("skills")}>
              Tecnologías
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contacto</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;