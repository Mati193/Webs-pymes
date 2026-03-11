import React, { useState } from "react";
import "./About.css";
import fotoBenja from "./foto_benja.jpg";
import fotoMati from "./foto_mati.png";

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null); // Estado para la card seleccionada

  const team = [
    {
      name: "Mateo Benjamin Italiano",
      img: fotoBenja,
      role: "Desarrollador Full Stack | Cofundador de PYCX",
      description:
        "Especialista en React y Node.js. Apasionado por crear soluciones eficientes y escalables.",
      emoji: "🌐",
      bio: "¡Buenas! Soy Mateo Benjamín Italiano, desarrollador web y profesor de programación. Me especializo en desarrollo Full Stack utilizando JavaScript, React y Node.js. También soy analista de sistemas y técnico en armado y reparación de computadoras. En mis clases enseño Python, JavaScript y lógica de programación desde un enfoque práctico: aprender programando desde el primer día. Soy cofundador de PYCX, una iniciativa dedicada al desarrollo de plataformas web y soluciones digitales modernas.",
      fullRole: "Profesor de Programación y Desarrollador Web",
      skills: ["Python", "JavaScript", "React", "Node.js", "HTML/CSS"],
    },
    {
      name: "Matías Sposetti",
      img: fotoMati,
      role: "Desarrollador Full Stack | Cofundador de PYCX",
      description:
        "Experto en diseñar experiencias digitales que convierten visitantes en clientes.",
      emoji: "💻",
      bio: "Soy Matías! El encargado de la UI. Soy un analista en sistemas egresado de la FaMAF, cuento con excepcionales habilidades para encontrar tu producto ideal, diseñarlo y darle vida. La seguridad, fiabilidad y flexibilidad de tu producto serán siempre mi prioridad!",
      fullRole: "Diseñador UX/UI",
      skills: ["Typescript", "JavaScript", "React", "CSS", "UX Research", "C"],
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🌟 Quiénes somos</span>
          <h2>Dos apasionados por ayudar a PYMES a crecer</h2>
          <p className="section-description margen">
            En PYCX creamos páginas web modernas que ayudan a negocios a crecer online.
            Combinamos tecnología, diseño y estrategia para que tu web no solo se vea bien, sino que consiga clientes.
            <br />
            <span className="stat-label largo">
              Especialistas en páginas web para PYMES de Argentina.
            </span>
          </p>


        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card"
              onClick={() => setSelectedMember(member)} // Al clickear, abre la card
            >
              <img
                src={member.img}
                alt={`${member.name} miembro del equipo PYCX desarrollador web`}
              />
              <div className="member-emoji">{member.emoji}</div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
              <p className="member-info">+ Info</p>
            </div>
          ))}
        </div>

        {/* MODAL / CARD FLOTANTE */}
        {selectedMember && (
          <div className="member-modal" onClick={() => setSelectedMember(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setSelectedMember(null)}
              >
                ✕
              </button>

              <div className="modal-header">
                <img src={selectedMember.img} alt={selectedMember.name} />
                <div>
                  <h3>{selectedMember.name}</h3>
                  <p className="modal-role">{selectedMember.fullRole}</p>
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-bio">{selectedMember.bio}</p>

                <div className="modal-skills">
                  <h4>Skills</h4>
                  <div className="skills-tags">
                    {selectedMember.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="class">
                    <a href="https://italiano-dev.netlify.app/" className="colorcito" alt="Portfolio de Mateo Benjamin Italiano Fundador de PYCX y Profesor de Informatica">Portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="about-features">
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <h4>Enfocados en resultados</h4>
            <p>
              No hacemos páginas "lindas nomás". Creamos herramientas que ayudan
              a vender.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤝</span>
            <h4>Entendemos tu negocio</h4>
            <p>
              Somos PYMES también, sabemos lo que necesitás porque lo vivimos.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <h4>Soporte constante</h4>
            <p>
              Estamos siempre disponibles para ayudarte con lo que necesites.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
