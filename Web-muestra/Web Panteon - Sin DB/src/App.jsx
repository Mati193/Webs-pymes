import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import logo from "./assets/Logo_panteon.jpg";
import About from "./components/About";
import Productos from "./components/Productos";
import Contact from "./components/Contact/Contact";
import WSP from "./components/WSP/wsp";
import React, { useState } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";

// Constante para función productos Mati
// const productos = [
//   ["Pan casero", "Pan de harina integral casero", logo],
//   [
//     "Bizcochuelo de chocolate",
//     "Rico bizcochuelo de chocolate relleno de dulce de leche",
//     logo,
//   ],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
//   ["Medialunas", "Medialunas de grasa o manteca", logo],
// ];

const redes = [
  {
    nombre: "pan-teon",
    habilitado: true,
    icon: "📷",
  },
  {
    nombre: "panficadora.pan-teon",
    habilitado: true,
    icon: "📘",
  },
  {
    nombre: "difusion pan-teon",
    habilitado: true,
    icon: "📢",
  },
  {
    nombre: "linktree/panteon",
    habilitado: true,
    icon: "🔗",
  },
];

const laboral = [
  {
    dato: "panificadora.panteon@gmail.com",
  },
];
// Constante para funcion productos Tito
const productos = [
  {
    nombre: "Pan artesanal",
    desc: "Pan casero elaborado con fermentación natural.",
    img: logo,
  },
  {
    nombre: "Medialunas",
    desc: "Medialunas de manteca recién horneadas.",
    img: logo,
  },
  {
    nombre: "Facturas surtidas",
    desc: "Variedad de facturas dulces tradicionales.",
    img: logo,
  },
  {
    nombre: "Chipá",
    desc: "Clásico chipá artesanal, crocante por fuera y suave por dentro.",
    img: logo,
  },
  {
    nombre: "Budines caseros",
    desc: "Budines de limón, naranja y chocolate.",
    img: logo,
  },
];

function App() {

  return (
    <>
      <>
        <WSP numero={"3512139324"}></WSP>
        <Carrito carrito={carrito} />
      </>
      <NavBar
        marca={"Pan-teon"}
        logo={logo}
        t1={"¿Qué hacemos?"}
        t2={"Productos"}
        t3={"Contacto"}
      />
      <Bienvenida
        desc={
          "Pan artesanal recién horneado todos los días. \n Take Away y envíos a domicilio en Río Ceballos."
        }
        marca={"Pan-teon"}
        t1={"🥧 Panadería artesanal & pastelería casera"}
        eslogan={"Sabor casero que se siente en cada bocado"}
        logo={logo}
      />
      <About
        titulo={"Sobre nosotros"}
        presentacion={"bla bla bla bla bla bla bla bla bla bla"}
      />
      <Productos
        eslogan={"Una seleccion de nuestras más deliciosas especialidades"}
        productos={productos}
        agregarProducto={agregarProducto}
      />

      <Contact
        mail={"panteon_panificadora@gmail.com"}
        tel={" 1234567890"}
        ubi={"Río ceballos, Argentina"}
        redes={redes}
        laboral={laboral}
        carrito={carrito}
      />
    </>
  );
}

export default App;