import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text">✨ Full Stack Developer</span>
        </div>
        <h1 className="hero-title">
          Creando experiencias <span className="gradient-text">digitales</span> que inspiran
        </h1>
        <p className="hero-subtitle">
          Diseño y desarrollo para PYMES que quieren destacar en el mundo digital
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            Ver proyectos
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Contactar
          </button>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;