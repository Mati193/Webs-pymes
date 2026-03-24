import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    // Simular envío (después conectás con tu backend)
    setTimeout(() => {
      alert('¡Gracias por contactarnos! Te responderemos en menos de 24hs.')
      setFormData({
        name: '',
        business: '',
        email: '',
        message: ''
      })
      setSending(false)
    }, 1500)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="section-badge">📞 Hablemos</span>
            <h2>¿Listo para llevar tu negocio al próximo nivel?</h2>
            <p className="contact-description">
              **Contanos qué necesitas y te enviaremos una propuesta simple y sin compromiso en menos de 24hs.**
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-emoji">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hola@pycx.com">webpymes.pycx@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-emoji">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/5493512139324">+54 9 351 213-9324</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-emoji">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Córdoba, Argentina</p>
                </div>
              </div>
            </div>

            <div className="social-proof">
              <p>✨ Respondemos en menos de 24hs hábiles</p>

            </div>
          </div>


          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre y apellido *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ej: Mateo Benjamín Italiano"
              />
            </div>

            <div className="form-group">
              <label htmlFor="business">Nombre de tu negocio *</label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                placeholder="Ej: Panadería PHANTEOM"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tunegocio@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">¿Qué necesitas? *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Contanos brevemente tu idea o proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={sending}
            >
              {sending ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact