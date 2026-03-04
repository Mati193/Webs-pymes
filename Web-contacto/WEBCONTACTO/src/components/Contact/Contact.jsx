import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      alert("¡Mensaje enviado! Te respondemos dentro de 24hs.");
      setFormData({
        name: "",
        business: "",
        email: "",
        message: "",
      });
      setSending(false);
    }, 1500);
  };

  return (
    <section id="contactos" className="contact section">

      {/* HERO */}
      <div className="contact-hero">
        <span className="section-badge">🚀 Contacto</span>

        <h2>
          Contanos tu idea <br />
          <span>y la hacemos realidad</span>
        </h2>

        <p>
          Diseñamos webs que venden. Enviános tu proyecto y recibí
          una propuesta clara en menos de 24hs.
        </p>
      </div>

      {/* FORM CENTER */}
      <div className="contact-center">
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Nombre y apellido"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="business"
              placeholder="Nombre del negocio"
              value={formData.business}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email de contacto"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Contanos qué necesitás..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="submit-btn" disabled={sending}>
            {sending ? "Enviando..." : "Enviar mensaje 🚀"}
          </button>
        </form>
      </div>

      {/* CONTACT FOOTER INFO */}
      <div className="contact-footer">
        <div className="contact-mini">
          📧 webpymes.pycx@gmail.com
        </div>

        <div className="contact-mini">
          📱 +54 9 351 213-9324
        </div>

        <div className="contact-mini">
          📍 Córdoba, Argentina
        </div>
      </div>
    </section>
  );
};

export default Contact;