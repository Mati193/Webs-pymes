import React from "react";
import { motion } from "motion/react";
import Boton from "../Boton/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./bienvenida.css";
import "../global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Bienvenida({ logo, marca, eslogan, t1, desc }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de animación
      once: true, // solo se anima una vez
    });
  }, []);

  return (
    <div className="parent" id="bienvenida">
      <span className="section-badge" data-aos="fade-down">
        {t1}
      </span>

      <h2 className="resaltado" data-aos="fade-right">
        {marca}
      </h2>
      <img
        src={logo}
        alt="logo"
        className="logo rounded-circle img-fluid"
        data-aos="fade-up-right"
      />

      <h4 data-aos="fade-right">{eslogan}</h4>

      <h5 data-aos="fade-down">{desc}</h5>
      <div className="botonera">
        <a href="#productos" data-aos="fade-right">
          <Boton texto={"Nuestros productos"} tipo={"claro"} />
        </a>
        <a href="#contacto" data-aos="fade-left">
          <Boton texto={"Pedir ahora!"} tipo={"oscuro"} />
        </a>
      </div>
    </div>
  );
}

export default Bienvenida;
