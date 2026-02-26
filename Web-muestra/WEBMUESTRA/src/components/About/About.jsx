import React from 'react'
import './About.css'

const About = () => {
  const team = [
    {
      name: 'Mateo Benjamin Italiano',
      img: "",
      role: 'Desarrollador Full Stack',
      description: 'Especialista en React y Node.js. Apasionado por crear soluciones eficientes y escalables.',
      emoji: '👨‍💻'
    },
    {
      name: 'Matias Sposseti',
      img: "",
      role: 'Diseñador UX/UI & Frontend',
      description: 'Experto en diseñar experiencias digitales que convierten visitantes en clientes.',
      emoji: '🎨'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🌟 Quiénes somos</span>
          <h2>Dos apasionados por ayudar a PYMES a crecer</h2>
          <p className="section-description">
            En PYCX combinamos tecnología y diseño para crear webs que realmente funcionan.
            Nos encanta trabajar codo a codo con nuestros clientes para entender sus necesidades.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src="img/foto trabajo.jpg" alt="" />
              <div className="member-emoji">{member.emoji}</div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="about-features">
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <h4>Enfocados en resultados</h4>
            <p>No hacemos páginas "lindas nomás". Creamos herramientas que ayudan a vender.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤝</span>
            <h4>Entendemos tu negocio</h4>
            <p>Somos PYMES también, sabemos lo que necesitás porque lo vivimos.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <h4>Soporte constante</h4>
            <p>Estamos siempre disponibles para ayudarte con lo que necesites.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About