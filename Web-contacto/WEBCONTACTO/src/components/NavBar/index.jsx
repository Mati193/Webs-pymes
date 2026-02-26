import React, { useState, useEffect } from "react";

import "./navbar.css";
function NavBar({ logo, marca, t1, t2, t3 }) {
  //A ver si me sale hacer que se achique

  //Proceso para que la navbar se achique cuando desplazamos hacia abajo
  const [desplazado, setDesplazado] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setDesplazado(true);
        console.log("Me bajaron");
      } else {
        setDesplazado(false);
        console.log("Me subieron");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${desplazado ? "desplazado" : ""}  `}
      >
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
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
          <a className="navbar-brand d-inline-block align " href="#">
            {t3}
          </a>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
