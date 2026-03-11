import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "EIMA EDUCACION",
      category: "Academias",
      description:
        "Plataforma web educativa desarrollada por PYCX para EIMA Educación. Sitio optimizado para presencia digital, información de cursos y captación de alumnos.",
      result: "+300 alumnos",
      emoji: "📚",
      link: "https://eima-educacion.netlify.app/",
    },
    {
      id: 2,
      title: "Panificadora Pan-teon",
      category: "Gastronomias",
      description:
        "Sistema web simple desarrollado para una panificadora que permite controlar stock y ventas desde el celular, optimizando la gestión diaria del negocio.",
      result: "Ahorro de 10hs semanales",
      emoji: "🥖",
      link: "#",
    },
    {
      id: 3,
      title: "Beauty Salon",
      category: "landing",
      description:
        "Landing page moderna optimizada para conversión. Diseño web enfocado en reservas online y captación de nuevos clientes para el salón.",
      result: "+150% reservas online",
      emoji: "💇",
      link: "#",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">

        <div className="section-header">
          <span className="section-badge">💼 Casos de éxito</span>

          <h2>
            Resultados <span className="highlight">reales </span>  para negocios 
            <span className="highlight"> reales </span>
          </h2>

          <p className="section-description">
            En PYCX desarrollamos páginas web y plataformas digitales pensadas
            para ayudar a negocios y PYMES a crecer online. Estos son algunos
            de los proyectos que realizamos.
          </p>
        </div>

        <div className="projects-filter">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Todos
          </button>

          <button
            className={`filter-btn ${filter === "Academias" ? "active" : ""}`}
            onClick={() => setFilter("Academias")}
          >
            Academias
          </button>

          <button
            className={`filter-btn ${filter === "Gastronomias" ? "active" : ""}`}
            onClick={() => setFilter("Gastronomias")}
          >
            Gastronomías
          </button>

          <button
            className={`filter-btn ${filter === "landing" ? "active" : ""}`}
            onClick={() => setFilter("landing")}
          >
            Landing Pages
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">

              <div className="project-emoji">{project.emoji}</div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-result">
                <span className="result-badge">{project.result}</span>
                <br />

                <a
                  href={project.link}
                  className="result-badge info"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ver proyecto ${project.title} desarrollado por PYCX`}
                >
                  + Info
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;