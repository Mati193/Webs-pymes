import React, { useRef, useState } from 'react';
import './Work.css';

const ComoTrabajamos = () => {
  const sliderRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

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
    },
    {
      numero: "6",
      titulo: "Crecimiento",
      descripcion: "Medimos resultados, analizamos el comportamiento de tus clientes y optimizamos tu web para que cada mes venda más.",
      icono: "📈",
      color: "linear-gradient(135deg, #6A11CB, #2575FC)"
    }
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const cardWidth = 336;
      const currentScroll = container.scrollLeft;
      const newScrollLeft = direction === 'left' 
        ? currentScroll - cardWidth * 2 
        : currentScroll + cardWidth * 2;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (index) => {
    setExpandedCard(index);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setExpandedCard(null);
  };

  return (
    <section className="como-trabajamos" id="work">
      <div className="container">
        <div className="section-header">
          <span className="section-badge proceso">⚙️ Nuestro proceso</span>
          <h2>Así trabajamos para que vendas más</h2>
          <p className="section-description">
            No hacemos magia, hacemos un proceso claro. Las PYMES como la tuya necesitan saber
            qué va a pasar con su negocio. Te lo contamos paso a paso.
          </p>
        </div>

        <div className="slider-wrapper">
          <button
            className="slider-btn slider-btn-left"
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="cursos-slider-container" ref={sliderRef}>
            <div className="cursos-slider">
              {pasos.map((paso, index) => (
                <div 
                  key={index} 
                  className={`curso-card ${expandedCard === index ? 'expandido' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="curso-header" style={{ background: paso.color }}>
                    <span className="curso-categoria">Paso {paso.numero}</span>
                    <h3 className="curso-titulo">{paso.titulo}</h3>
                    {paso.numero === "5" && <span className="curso-badge trending">Siempre</span>}
                  </div>

                  <div className="curso-contenido">
                    <p className="curso-descripcion">{paso.descripcion}</p>

                    <div className="curso-info">
                      <span><i className="fas fa-check-circle"></i> {paso.icono} {paso.titulo}</span>
                      <span><i className="fas fa-users"></i> Personalizado</span>
                      {paso.numero === "1" && <span className="gratis-badge">✨ Sin cargo</span>}
                    </div>
                  </div>

                  {expandedCard === index && (
                    <div 
                      className="close-btn-expandido" 
                      onClick={handleCloseClick}
                    >
                      ✕
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-btn slider-btn-right"
            onClick={() => scroll('right')}
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoTrabajamos;