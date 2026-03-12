import React, { useState } from "react";
import "./Contact.css";

const Contact = ({ mail, tel, ubi, redes, laboral }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [tipoPedido, setTipoPedido] = useState("delivery");

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
    <section id="contacto" className="contact section">
      <div className="contact-container">
        {/* HERO */}
        <div className="contact-hero">
          <span className="section-badge">♨️ HACE TUS PEDIDOS</span>
          <h2>
            NUESTROS <span>CONTACTOS</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* COLUMNA IZQUIERDA - REDES E INFO */}
          <div className="contact-info">
            {/* REDES SOCIALES */}
            <div className="info-card">
              <h3>REDES SOCIALES</h3>
              <div className="social-links">
                {redes.map(
                  (datos, index) =>
                    datos.habilitado && (
                      <a href="#" className="social-item">
                        <span className="social-icon">{datos.icon}</span>
                        <span>@{datos.nombre}</span>
                      </a>
                    ),
                )}
              </div>
            </div>

            {/* INFORMACIÓN LABORAL */}
            <div className="info-card">
              <h3>INFORMACIÓN LABORAL</h3>
              <div className="contact-emails">
                {laboral.map((datos, index) => (
                  <div className="email-item">
                    <span className="email-icon">📧</span>
                    <span>{datos.dato}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* INFO DE ENVÍOS */}
            <div className="info-card delivery-card">
              <h3>🚚 ENVÍOS A DOMICILIO</h3>
              <div className="delivery-info">
                <div className="delivery-option">
                  <span className="delivery-badge">📱 Pedidos YA</span>
                  <span>Disponible 24/7</span>
                </div>
                <div className="delivery-option">
                  <span className="delivery-badge">🛵 Rappi</span>
                  <span>Entrega en 30 min</span>
                </div>
                <div className="delivery-option">
                  <span className="delivery-badge">📍 Delivery propio</span>
                  <span>Consultanos cobertura</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA CENTRAL - FORMULARIO */}
          <div className="contact-center">
            <div className="form-header">
              <h3>HACÉ TU PEDIDO</h3>
              <p>Completá el formulario y te contactamos</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Selector de tipo de pedido */}
              <div className="pedido-tipo">
                <label
                  className={`tipo-option ${tipoPedido === "delivery" ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="tipoPedido"
                    value="delivery"
                    checked={tipoPedido === "delivery"}
                    onChange={(e) => setTipoPedido(e.target.value)}
                  />
                  <span>🚚 Delivery</span>
                </label>
                <label
                  className={`tipo-option ${tipoPedido === "retiro" ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="tipoPedido"
                    value="retiro"
                    checked={tipoPedido === "retiro"}
                    onChange={(e) => setTipoPedido(e.target.value)}
                  />
                  <span>🏪 Retiro en local</span>
                </label>
              </div>

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

              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono de contacto"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {tipoPedido === "delivery" && (
                <div className="form-row">
                  <input
                    type="text"
                    name="address"
                    placeholder="Dirección de entrega"
                    required
                  />
                </div>
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Contanos qué necesitás... (ej: 12 medialunas, 1 bizcochuelo)"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button className="submit-btn" disabled={sending}>
                {sending ? "Enviando..." : "CONTACTAR 👩🏻‍🍳"}
              </button>
            </form>

            {/* Logos de apps de delivery */}
            <div className="delivery-apps">
              <span>También pedí por:</span>
              <div className="app-logos">
                <img
                  src="/api/placeholder/80/30"
                  alt="Rappi"
                  className="app-logo"
                />
                <img
                  src="/api/placeholder/80/30"
                  alt="PedidosYa"
                  className="app-logo"
                />
                <img
                  src="/api/placeholder/80/30"
                  alt="Uber Eats"
                  className="app-logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER INFO */}
        <div className="contact-footer">
          <div className="contact-mini">📧 {mail}</div>
          <div className="contact-mini">📱 +54 9 {tel}</div>
          <div className="contact-mini">📍 {ubi}</div>
        </div>

        <div className="contact-copyright">
          © Todos los derechos reservados por{" "}
          <a href="https://pycx.netlify.app">PYCX</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
