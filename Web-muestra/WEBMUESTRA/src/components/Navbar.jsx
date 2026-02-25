import React, { useState, useEffect } from "react";

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre Nosotros" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <span className="logo-text">PYCX</span>
          <span className="logo-dot">
            <img src="" alt="" />
          </span>
        </div>

        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
