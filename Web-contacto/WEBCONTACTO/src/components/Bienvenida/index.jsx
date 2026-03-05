import React from "react";
import Boton from "../Boton/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./bienvenida.css";
import "../global.css";

function Bienvenida({ logo, marca, eslogan, t1, desc }) {
  return (
    <div className="parent" id="bienvenida">
      <span className="section-badge">{t1}</span>

      <h2 className="resaltado">{marca}</h2>
      <img src={logo} alt="logo" className="logo rounded-circle img-fluid" />

      <h4>{eslogan}</h4>

      <h5>{desc}</h5>
      <div className="botonera">
        <a href="#productos">
          <Boton texto={"Nuestros productos"} tipo={"claro"} />
        </a>
        <a href="#contacto">
          <Boton texto={"Pedir ahora!"} tipo={"oscuro"} />
        </a>
      </div>
    </div>
  );
}

export default Bienvenida;
