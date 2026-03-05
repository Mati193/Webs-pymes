import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'EIMA EDUCACION',
      category: 'Academias',
      description: 'Automatizamos la venta de cursos online. Ahora venden sin estar pendientes 24/7.',
      result: '+200% en inscripciones online',
      emoji: '📚'
    },
    {
      id: 2,
      title: 'Panadería PHANTEOM',
      category: 'Gastronomias',
      description: 'Panel simple desde el celular para controlar stock y ventas del día. Adiós a las pérdidas.',
      result: 'Ahorro de 10hs semanales',
      emoji: '🥖'
    },
    {
      id: 3,
      title: 'Beauty Salon',
      category: 'landing',
      description: 'Landing page que convierte. Aumentamos las reservas online un 150%.',
      result: '+150% reservas online',
      emoji: '💇'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">💼 Casos de éxito</span>
          <h2>Resultados reales para negocios reales</h2>
          <p className="section-description">
            Cada proyecto lo encaramos como si fuera nuestro propio negocio. 
            Estos son algunos de los resultados que logramos.
          </p>
        </div>

        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${filter === 'Academias' ? 'active' : ''}`}
            onClick={() => setFilter('Academias')}
          >
            Academias
          </button>
          <button 
            className={`filter-btn ${filter === 'Gastronomias' ? 'active' : ''}`}
            onClick={() => setFilter('Gastronomias')}
          >
            Gastronomias
          </button>
          <button 
            className={`filter-btn ${filter === 'landing' ? 'active' : ''}`}
            onClick={() => setFilter('landing')}
          >
            Landing Pages
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-emoji">{project.emoji}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-result">
                <span className="result-badge">{project.result}</span> <br />
                <a href="https://eima-educacion.netlify.app/" className='result-badge info'>+ Info</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects