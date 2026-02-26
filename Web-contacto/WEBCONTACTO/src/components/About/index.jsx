import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./about.css";
import "../global.css";
function About({ titulo, presentacion, frase }) {
  return (
    <section id="about">
      <div className="contenedor_frase">{frase}</div>
      <div className="contenedor">
        <h2>{titulo}</h2>
        <p>{presentacion}</p>
      </div>
    </section>
  );
}

export default About;
