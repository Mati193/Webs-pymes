import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./about.css";
import "../global.css";
import Card from "../Card/index.jsx";
<script
  src="https://kit.fontawesome.com/7345c2bc7b.js"
  crossorigin="anonymous"
></script>;
function About({ titulo, presentacion, frase }) {
  const skills = [
    {
      titulo: "Panificación artesanal",
      description:
        "Cada producto se elabora siguiendo procesos tradicionales, respetando tiempos de fermentación y técnicas que garantizan sabor y textura auténticos.",
      emoji: <i class="fa-solid fa-bread-slice"></i>,
    },
    {
      titulo: "Ingredientes de calidad",
      description:
        "Seleccionamos cuidadosamente nuestras materias primas para asegurar productos frescos, naturales y de excelente calidad.",
      emoji: <i class="fa-regular fa-star"></i>,
    },
    {
      titulo: "Horneado diario",
      description:
        "Nuestros panes y especialidades se hornean todos los días para ofrecer siempre productos recién hechos.",
      emoji: <i class="fa-solid fa-calendar-check"></i>,
    },
  ];
  return (
    <section id="about" className="contenedor">
      <div className="personal"></div>
      <div className="skills">
        <Card contenido={skills} />
      </div>
      <p></p>
    </section>
  );
}

export default About;
