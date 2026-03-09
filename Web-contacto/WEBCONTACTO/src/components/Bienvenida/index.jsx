import React, { useEffect } from "react";
import { motion } from "motion/react"; // Asegúrate de que motion/react esté instalado si lo usas
import Boton from "../Boton/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./bienvenida.css";
import "../global.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Bienvenida({ logo, marca, eslogan, t1, desc }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="parent" id="bienvenida">
      {/* Capas de Texto de Fondo (NUEVO) */}
      <div className="background-text background-text-1">LAS MEDIALUNAS MAS RICAS</div>
      <div className="background-text background-text-2">100% MANTECA</div>
      <div className="background-text background-text-3">LAS MEDIALUNAS MAS RICAS</div>
      <div className="background-text background-text-4">100% MANTECA</div>
      
      {/* Segunda capa para más profundidad (opcional) */}
       <div className="background-text-secondary bs-1">realmente</div>
       <div className="background-text-secondary bs-2">las MAS RICAS</div>
       <div className="background-text-secondary bs-3">panadería</div>


      {/* Contenido Principal */}
      <div className="content-wrapper"> {/* NUEVO: Un wrapper para centrar el contenido sobre las capas */}
        <span className="section-badge" data-aos="fade-down">
          {t1}
        </span>

        {/* Título Principal (ahora es el 100% manteca) */}
        <h1 className="titulo-principal" data-aos="fade-right">
          {marca} {/* Asumo que 'marca' es "100% MANTECA" */}
        </h1>

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="logo rounded-circle img-fluid"
          data-aos="fade-up-right"
        />

        {/* Eslogan y Descripción */}
        <h2 className="eslogan" data-aos="fade-right">{eslogan}</h2> {/* Ej: "Realmente las MAS RICAS" */}
        <h3 className="descripcion" data-aos="fade-down">{desc}</h3> {/* Ej: "Somos Panadería" */}

        {/* Botonera */}
        <div className="botonera" data-aos="fade-up">
          <a href="#productos">
            <Boton texto={"Nuestros productos"} tipo={"claro"} />
          </a>
          <a href="#contacto">
            <Boton texto={"Pedir ahora!"} tipo={"oscuro"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bienvenida;