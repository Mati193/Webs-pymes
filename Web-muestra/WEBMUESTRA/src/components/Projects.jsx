import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EIMA EDUCACION",
      description: "Plataforma de Academia",
      image: "https://eima-educacion.netlify.app/",
      tags: ["React", "Node.js", "JavaScript"],
    },
    {
      id: 2,
      title: "Panaderia PHANTEOM",
      description: "Panel de control interactivo con gráficos en tiempo real",
      image: "https://via.placeholder.com/400x300/6289D9/FFFFFF?text=Dashboard",
      tags: ["React", "D3.js", "Express"],
    },
    {
      id: 3,
      title: "App Mobile",
      description: "Aplicación móvil para gestión de tareas",
      image:
        "https://via.placeholder.com/400x300/66E4F2/FFFFFF?text=Mobile+App",
      tags: ["React Native", "Firebase", "Redux"],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title fade-in">Proyectos destacados</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card fade-in">
              <div className="card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <button className="card-btn">
                  <a href="https://eima-educacion.netlify.app/" target="_blank">
                    Ver proyecto →
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
