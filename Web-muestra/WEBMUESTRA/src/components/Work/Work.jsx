import React from 'react';
import './Work.css';

const ComoTrabajamos = () => {
  const pasos = [
    {
      numero: "1",
      titulo: "Diagnóstico gratuito",
      descripcion: "Analizamos tu negocio, tu competencia y tus objetivos. Sin costo ni compromiso. Entendemos qué necesitás para vender más.",
      icono: "🔍",
      color: "linear-gradient(135deg, #306998, #FFD43B)"
    },
    {
      numero: "2",
      titulo: "Propuesta clara",
      descripcion: "Te enviamos una propuesta simple con timeline, entregables e inversión. Sin letra chica, tal cual lo hacemos con nuestros amigos.",
      icono: "📝",
      color: "linear-gradient(135deg, #1DA1F2, #0B7BB5)"
    },
    {
      numero: "3",
      titulo: "Diseño estratégico",
      descripcion: "Diseñamos pensando en convertir visitas en clientes. Te mostramos el modelo y lo ajustamos hasta que sientas que es tu negocio.",
      icono: "🎨",
      color: "linear-gradient(135deg, #E44D26, #F16529)"
    },
    {
      numero: "4",
      titulo: "Desarrollo y lanzamiento",
      descripcion: "Programamos y optimizamos tu sitio. Lo probamos, lo lanzamos y te asegurás de que todo funcione perfecto desde el día 1.",
      icono: "⚙️",
      color: "linear-gradient(135deg, #0F9D58, #0B7B3B)"
    },
    {
      numero: "5",
      titulo: "Acompañamiento",
      descripcion: "Soporte directo con nosotros. Te ayudamos a usar tu web y la ajustamos según los resultados. Sos parte del equipo.",
      icono: "🤝",
      color: "linear-gradient(135deg, #217346, #185C37)"
    }
  ];

  return (
    <section className="como-trabajamos" id="como-trabajamos">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-badge">⚙️ Nuestro proceso</span>
          <h2>Así trabajamos para que vendas más</h2>
          <p className="section-description">
            No hacemos magia, hacemos un proceso claro. Las PYMES como la tuya necesitan saber 
            qué va a pasar con su negocio. Te lo contamos paso a paso.
          </p>
        </div>

        {/* SLIDER CONTAINER - Adaptado del código que me pasaste */}
        <div className="cursos-slider-container">
          <div className="cursos-slider" id="cursosSlider">
            {pasos.map((paso, index) => (
              <div key={index} className="curso-card">
                {/* HEADER con el colorcito */}
                <div className="curso-header" style={{ background: paso.color }}>
                  <span className="curso-categoria">Paso {paso.numero}</span>
                  <h3 className="curso-titulo">{paso.titulo}</h3>
                  {paso.numero === "1"}
                  {paso.numero === "5" && <span className="curso-badge trending">Siempre</span>}
                </div>

                {/* CONTENIDO */}
                <div className="curso-contenido">
                  <p className="curso-descripcion">{paso.descripcion}</p>
                  
                  <div className="curso-info">
                    <span><i className="far fa-clock"></i> {paso.icono} {paso.titulo}</span>
                    <span><i className="fas fa-users"></i> Personalizado</span>
                    <span><i className="fas fa-signal"></i> Sin cargo extra</span>
                  </div>

                  <div className="curso-footer">
                    <a href={`#paso-${paso.numero}`} className="btn-ver-curso">
                      Ver paso <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="proceso-cta">
          <p>Agendá tu <strong><span className='highlight'>TURNO</span></strong> para el diagnóstico gratuito</p>
          <a href="#contact" className="cta-button">Quiero mi diagnóstico</a>
        </div>
      </div>
    </section>
  );
};

export default ComoTrabajamos;