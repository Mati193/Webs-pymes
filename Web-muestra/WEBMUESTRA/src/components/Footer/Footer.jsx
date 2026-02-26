import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>PYCX</h3>
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
                <li><a href="mailto:hola@pycx.com">hola@pycx.com</a></li>
                <li><a href="https://wa.me/5493512139324">WhatsApp</a></li>
                <li>Córdoba, Argentina</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Seguinos</h4>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} PYCX - Todos los derechos reservados</p>
          <p>Hecho con ❤️ en Córdoba, Argentina</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer