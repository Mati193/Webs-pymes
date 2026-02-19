import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title fade-in">Hablemos</h2>
        <div className="contact-content">
          <p className="contact-text fade-in">
            ¿Tienes un proyecto en mente? Estoy a un mensaje de distancia
          </p>
          <button className="btn btn-primary btn-large fade-in">
            Enviar mensaje
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;