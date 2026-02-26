import React, { useState, useEffect } from "react";
import "./Navbar.css";

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
          PYCX
        </div>

        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <button onClick={() => scrollToSection("about")}>Nosotros</button>
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
