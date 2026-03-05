import React, { useState, useEffect } from "react";

import "./navbar.css";
function NavBar({ logo, marca, t1, t2, t3 }) {
  //*Proceso para que la navbar se achique cuando desplazamos hacia abajo

  //Variable de estado, nos dice si la pagina esta scrolleada o no, arranca en falso
  const [desplazado, setDesplazado] = useState(false);

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

  return (
    <section>
      <nav //                                                        Si la ↓variable↓ es true clase↓, si no, sacamos la clase
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${desplazado ? "desplazado" : ""}  `}
      >
        <div className="container-fluid">
          <img
            src={logo}
            alt="" //                                                                                  Aca lo mismo que arriba
            className={`d-inline-block align-text-top rounded-circle img-fluid navbar-brand img-navbar ${desplazado ? "desplazado-img" : ""} `}
          />
          <a className="navbar-brand a-navbar" href="#bienvenida">
            {marca}
          </a>
          <a
            className="navbar-brand d-inline-block align ms-auto"
            href="#about"
          >
            {t1}
          </a>
          <a className="navbar-brand d-inline-block align" href="#productos">
            {t2}
          </a>
          <a className="navbar-brand d-inline-block align " href="#contacto">
            {t3}
          </a>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
