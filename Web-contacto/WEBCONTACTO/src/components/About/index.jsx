import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./about.css";
import "../global.css";
import logo from "../../assets/Logo_panteon.jpg";
import Card from "../Card/index.jsx";
import PerfilCard from "../Perfil-Card/index.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function About({ titulo, presentacion, frase }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de animación
      once: true, // solo se anima una vez
    });
  }, []);
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
      emoji: <i class="fa-solid fa-star"></i>,
    },
    {
      titulo: "Horneado diario",
      description:
        "Nuestros panes y especialidades se hornean todos los días para ofrecer siempre productos recién hechos.",
      emoji: <i class="fa-solid fa-calendar-check"></i>,
    },
    {
      titulo: "Creatividad en recetas",
      description:
        "Combinamos tradición con innovación para ofrecer nuevas variedades de panes y productos que sorprendan a nuestros clientes.",
      emoji: <i class="fa-solid fa-paintbrush"></i>,
    },
    {
      titulo: "Compromiso con el sabor",
      description:
        "Cada receta está pensada para resaltar el sabor auténtico del pan artesanal, manteniendo siempre nuestro estándar de calidad.",
      emoji: <i class="fa-solid fa-handshake"></i>,
    },
  ];
  const team = [
    {
      name: "Mateo",
      img: logo,
      role: "Maestro Panadero",
      description:
        "Alma detrás de los hornos de Panteón. se encarga de seleccionar cuidadosamente cada ingrediente, respetando tiempos de fermentación y procesos que garantizan sabor, textura y calidad en cada pieza de pan.",
      emoji: "👨‍🍳",
      bio: "Hacer pan no es solo un oficio: es una forma de conectar con las personas a través de algo simple y esencial. Mi objetivo es que cada cliente que pruebe los productos de Panteón sienta el sabor auténtico del pan hecho con dedicación.",
      fullRole: "Maestro Panadero",
      skills: ["Sabor", "Textura", "Calidad"],
    },
    {
      name: "Sofía",
      img: logo,
      role: "Encargada de Experiencia y Atención",
      description:
        "Encargada de la atención al cliente. A cargo de la atención al cliente, la organización del local y la coordinación del día a día para que todo funcione de manera armoniosa.",
      emoji: "👩‍💼",
      bio: "Me apasiona crear una experiencia cálida y cercana, donde cada cliente pueda descubrir los productos artesanales de la panadería y encontrar algo que le guste. Gracias a mi atención al detalle y trato amable, convierto cada visita a Panteón en un momento agradable, donde el aroma del pan recién horneado y la buena atención van de la mano.",
      fullRole: "Encargada de Experiencia y Atención",
      skills: ["Organización", "Gestion", "Atención", "Orden"],
    },
  ];
  return (
    <section id="about" className="contenedor">
      <div className="personal" data-aos="fade-right">
        <PerfilCard team={team} />
      </div>

      <div className="skills" data-aos="fade-up">
        <Card contenido={skills} />
      </div>
    </section>
  );
}

export default About;
