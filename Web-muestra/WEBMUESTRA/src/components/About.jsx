import React from 'react';

const About = () => {
  const stats = [
    { number: '3+', label: 'Años experiencia' },
    { number: '20+', label: 'Proyectos completados' },
    { number: '15+', label: 'Clientes satisfechos' }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title fade-in">Sobre mí</h2>
        <div className="about-content">
          <div className="about-text fade-in">
            <p className="about-description">
              Soy desarrollador full stack con pasión por crear soluciones digitales 
              que combinan diseño minimalista con funcionalidad robusta. 
              Mi enfoque se centra en la experiencia del usuario y el rendimiento.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;