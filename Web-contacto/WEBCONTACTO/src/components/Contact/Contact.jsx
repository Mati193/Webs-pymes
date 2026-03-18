import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext";
import { saveOrderToJSON } from "../../utils/saveOrder";
import "./Contact.css";

const Contact = ({ mail, tel, ubi, redes, laboral }) => {
  const { carrito, vaciarCarrito, closeCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    address: ""
  });

  const [sending, setSending] = useState(false);
  const [tipoPedido, setTipoPedido] = useState("delivery");

  // Efecto para pre-cargar el mensaje con los productos del carrito
  useEffect(() => {
    if (carrito.length > 0) {
      const mensajeProductos = carrito.map(p => 
        `${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}`
      ).join('\n');
      
      setFormData(prev => ({
        ...prev,
        message: mensajeProductos
      }));
    }
  }, [carrito]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generarMensajeWhatsApp = () => {
    let mensaje = `🍞 *NUEVO PEDIDO - PAN-TEON* 🍞\n\n`;
    mensaje += `👤 *Cliente:* ${formData.name}\n`;
    mensaje += `📞 *Teléfono:* ${formData.phone}\n`;
    mensaje += `🚚 *Tipo:* ${tipoPedido === "delivery" ? "Delivery" : "Retiro en local"}\n`;
    
    if (tipoPedido === "delivery" && formData.address) {
      mensaje += `📍 *Dirección:* ${formData.address}\n`;
    }
    
    mensaje += `\n📋 *PRODUCTOS:*\n`;
    
    let total = 0;
    carrito.forEach((producto) => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;
      mensaje += `• ${producto.nombre} x${producto.cantidad} - $${subtotal}\n`;
    });
    
    mensaje += `\n💰 *TOTAL: $${total}*\n`;
    
    if (formData.message && formData.message !== carrito.map(p => `${p.nombre} x${p.cantidad}`).join('\n')) {
      mensaje += `\n📝 *Observaciones:* ${formData.message}`;
    }
    
    return mensaje;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Calcular total
    const total = carrito.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);

    // Preparar datos para guardar (esto es invisible para el cliente)
    const orderData = {
      id: Date.now(),
      fecha: new Date().toISOString(),
      cliente: {
        nombre: formData.name,
        telefono: formData.phone,
        direccion: tipoPedido === "delivery" ? formData.address : "Retiro en local",
        tipoPedido: tipoPedido
      },
      productos: carrito.map(p => ({
        id: p.id,
        nombre: p.nombre,
        cantidad: p.cantidad,
        precioUnitario: p.precio,
        subtotal: p.precio * p.cantidad
      })),
      total: total,
      observaciones: formData.message
    };

    // Guardar en localStorage (solo para nosotros, el cliente no se entera)
    try {
      const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos') || '[]');
      pedidosGuardados.push(orderData);
      localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));
      console.log('✅ Pedido guardado internamente');
    } catch (error) {
      console.error('Error guardando pedido:', error);
    }

    // Generar mensaje de WhatsApp
    const mensaje = generarMensajeWhatsApp();
    const numeroWhatsApp = "549" + tel.replace(/\D/g, '');
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp después de un pequeño delay
    setTimeout(() => {
      window.open(urlWhatsApp, '_blank');
      
      // Limpiar todo (sin mostrar alertas técnicas al cliente)
      vaciarCarrito();
      closeCart();
      setFormData({
        name: "",
        phone: "",
        message: "",
        address: ""
      });
      setSending(false);
      
      // Opcional: mensaje sutil de éxito (puedes eliminarlo si prefieres)
      // alert("✅ ¡Pedido enviado! Te contactaremos a la brevedad");
    }, 800);
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
                      <a key={index} href="#" className="social-item">
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
                  <div key={index} className="email-item">
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
              {carrito.length > 0 && (
                <div className="cart-summary">
                  <span>🛒 {carrito.reduce((total, item) => total + item.cantidad, 0)} productos en tu carrito</span>
                </div>
              )}
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
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Contanos qué necesitás... (ej: 12 medialunas, 1 bizcochuelo)"
                onChange={handleChange}
                value={formData.message}
              />

              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? "Procesando..." : "CONFIRMAR PEDIDO POR WHATSAPP 👩🏻‍🍳"}
              </button>
            </form>
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