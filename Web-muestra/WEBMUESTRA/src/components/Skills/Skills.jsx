import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, emoji: '⚛️' },
    { name: 'Node.js', level: 85, emoji: '🚀' },
    { name: 'JavaScript', level: 90, emoji: '💛' },
    { name: 'TypeScript', level: 80, emoji: '🔷' },
    { name: 'Python', level: 75, emoji: '🐍' },
    { name: 'MongoDB', level: 80, emoji: '🍃' },
    { name: 'PostgreSQL', level: 75, emoji: '🐘' },
    { name: 'Figma', level: 70, emoji: '🎨' }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🛠️ Tecnologías</span>
          <h2>Las herramientas que usamos para construir tu web</h2>
          <p className="section-description">
            Elegimos las mejores tecnologías para que tu sitio sea rápido, seguro y fácil de mantener.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">
                  <span className="skill-emoji">{skill.emoji}</span>
                  {skill.name}
                </span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <p>
            💡 No solo sabemos de código. Entendemos tu negocio y trabajamos para que 
            tengas una web que realmente te ayude a crecer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills