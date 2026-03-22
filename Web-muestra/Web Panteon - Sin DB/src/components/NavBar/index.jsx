import React, { useState, useEffect } from "react";
import "./navbar.css";

function NavBar({ logo, marca, t1, t2, t3 }) {
  //Variable de estado, nos dice si la pagina esta scrolleada o no, arranca en falso
  const [desplazado, setDesplazado] = useState(false);
  //Variable de estado para el menú móvil
  const [menuAbierto, setMenuAbierto] = useState(false);

  //useEffect nos permite ejecutar funciones despues de que se renderiza toda la pagina
  useEffect(() => {
    //Verificamos si scrolleo o no
    const handleScroll = () => {
      if (window.scrollY > 50) {
        //Si scrolleo entonce seteamos la variable de desplazado en true
        setDesplazado(true);
      } else {
        //Si no, la ponemos falsa
        setDesplazado(false);
      }
    };
    //Se agrega el evento scroll a toda la pagina
    window.addEventListener("scroll", handleScroll);
    //Despues se elimina al terminar de escuchar los eventos
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer click en un link
  const handleLinkClick = () => {
    setMenuAbierto(false);
  };

  return (
    <section>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${desplazado ? "desplazado" : ""}`}
      >
        <div className="container-fluid">
          {/* Logo y marca */}
          <div className="navbar-brand-container">
            <img
              src={logo}
              alt="Logo"
              className={`d-inline-block align-text-top img-fluid navbar-brand img-navbar ${desplazado ? "desplazado-img" : ""}`}
            />
            <a className="navbar-brand a-navbar" href="#bienvenida">
              {marca}
            </a>
          </div>

          {/* Botón menú hamburguesa */}
          <button
            className={`hamburger-menu ${menuAbierto ? "active" : ""}`}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú de navegación"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Links de navegación */}
          <div className={`nav-links ${menuAbierto ? "active" : ""}`}>
            <a className="nav-link" href="#about" onClick={handleLinkClick}>
              {t1}
            </a>
            <a className="nav-link" href="#productos" onClick={handleLinkClick}>
              {t2}
            </a>
            <a className="nav-link" href="#contacto" onClick={handleLinkClick}>
              {t3}
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;