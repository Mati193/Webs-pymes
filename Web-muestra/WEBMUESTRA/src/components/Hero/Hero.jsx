import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* <h1 className="seo-title">
            PYCX - Desarrollo web para PYMES en Argentina
          </h1> */}
          <span className="hero-badge principal">
            🚀 PYCX - Soluciones Web para PYMES
          </span>
          <h1>
            Hacemos que tu PYME <span className="highlight">venda más</span> con
            una web profesional
          </h1>
          <p className="hero-description">
            Creamos páginas web para PYMES que necesitan conseguir clientes, no
            solo estar online. Lanzamos tu sitio profesional en 14 días,
            optimizado para atraer consultas y convertir visitas en ventas.
            Trabajás directo con nosotros. Sin intermediarios.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Agendá tu diagnóstico gratuito
            </button>
            <button
              className="btn btn-outline"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver trabajos
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+10</span>
              <span className="stat-label">Negocios que ya venden online</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">
                Proyectos entregados en el plazo acordado
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">
                Soporte directo con los fundadores
              </span>
            </div>


            <div className="stat-item">
              <span className="stat-label comment">Más de 10 negocios ya trabajan con PYCX para crecer online.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
