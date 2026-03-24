import React from 'react'
import './Footer.css'
import logo from "/public/logoPYCX.png";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logoPYCX.png" alt="" />
            <p>Soluciones web para PYMES que quieren crecer</p>

          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navegación</h4>
              <ul>
                <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Nosotros</button></li>
                <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Proyectos</button></li>
                <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Tecnologías</button></li>
                <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contacto</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:webpymes.pycx@gmail.com">webpymes.pycx@gmail.com</a></li>
                <li><a href="https://wa.me/5493512139324">WhatsApp</a></li>
                <li>Córdoba, Argentina</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Seguinos</h4>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/company/pycx/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>

            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ opacity: 0.6, fontSize: "0.8rem" }}>
            © 2026 PYCX — Desarrollo web y soluciones digitales.
          </p>
          <p style={{ opacity: 0.5, fontSize: "0.8rem" }}>
            Desarrollado por el equipo de PYCX
          </p>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
            PYCX es una agencia de desarrollo web especializada en crear páginas web
            para PYMES en Argentina.
          </p>

          <p style={{ opacity: 0.6, fontSize: "0.8rem" }}>
            Fundado por Mateo Benjamín Italiano y Matias Sposetti.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer