import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import logo from "./assets/Logo_panteon.jpg";
import About from "./components/About";
import Productos from "./components/Productos";

// Constante para función productos Mati
const productos = [
  ["Pan casero", "Pan de harina integral casero", logo],
  [
    "Bizcochuelo de chocolate",
    "Rico bizcochuelo de chocolate relleno de dulce de leche",
    logo,
  ],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
  ["Medialunas", "Medialunas de grasa o manteca", logo],
];

// Constante para funcion productos Tito
// const productos = [
//   {
//     nombre: "Pan artesanal",
//     descripcion: "Pan casero elaborado con fermentación natural.",
//     precio: "$1500",
//   },
//   {
//     nombre: "Medialunas",
//     descripcion: "Medialunas de manteca recién horneadas.",
//     precio: "$800",
//   },
//   {
//     nombre: "Facturas surtidas",
//     descripcion: "Variedad de facturas dulces tradicionales.",
//     precio: "$900",
//   },
//   {
//     nombre: "Chipá",
//     descripcion:
//       "Clásico chipá artesanal, crocante por fuera y suave por dentro.",
//     precio: "$700",
//   },
//   {
//     nombre: "Budines caseros",
//     descripcion: "Budines de limón, naranja y chocolate.",
//     precio: "$2000",
//   },
// ];

function App() {
  return (
    <>
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
        t1={"Panadería artesanal & pastelería casera"}
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
      />
    </>
  );
}

export default App;
