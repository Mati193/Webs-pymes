import React, { useState } from "react";
import "./Contact.css";

const Contact = ({ mail, tel, ubi }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
        phone: "",
        message: "",
      });
      setSending(false);
    }, 1500);
  };

  return (
    <section id="contactos" className="contact section">
      {/* HERO */}
      <div className="contact-hero">
        <span className="section-badge">♨️ Contacto</span>
        <h2>
          Escribinos para
          <br />
          <span>hacer tu pedido!</span>
        </h2>

        <p>
          Contanos qué te gustaría y lo preparamos especialmente para vos 🍞.
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
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Telefono de contacto"
            value={formData.phone}
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
            {sending ? "Enviando..." : "Enviar mensaje 👩🏻‍🍳"}
          </button>
        </form>
      </div>

      {/* CONTACT FOOTER INFO */}
      <div className="contact-footer">
        <div className="contact-mini">📧 {mail}</div>

        <div className="contact-mini">📱 +54 9 {tel}</div>

        <div className="contact-mini">📍 {ubi}</div>
      </div>
    </section>
  );
};

export default Contact;
