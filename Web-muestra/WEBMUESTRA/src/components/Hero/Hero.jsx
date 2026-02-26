import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">🚀 PYCX - Soluciones Web para PYMES</span>
          <h1>
            Hacemos que tu PYME <span className="highlight">venda más</span> con una web profesional
          </h1>
          <p className="hero-description">
            Diseñamos y desarrollamos páginas web que atraen clientes y generan resultados. 
            Olvidate de la tecnología, nosotros nos encargamos de todo.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}>
              Contanos tu proyecto
            </button>
            <button className="btn btn-outline" onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            }}>
              Ver trabajos
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">PYMES satisfechas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Proyectos entregados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero