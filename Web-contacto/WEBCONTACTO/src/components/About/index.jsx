import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./about.css";
import "../global.css";
function About({ titulo, presentacion, frase }) {
  return (
    <>
      <div className="contenedor_frase">{frase}</div>
      <div className="contenedor" id="about">
        <h2>{titulo}</h2>
        <p>{presentacion}</p>
      </div>
    </>
  );

}

export default About;
