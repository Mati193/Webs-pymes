import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import logo from "./assets/Logo_panteon.jpg";
import About from "./components/About";
import Productos from "./components/Productos";

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

function App() {
  return (
    <div>
      <NavBar
        marca={"Pan-teon"}
        logo={logo}
        t1={"¿Qué hacemos?"}
        t2={"Productos"}
        t3={"Contacto"}
      />
      <Bienvenida
        desc={"Servicio Take Away \n Envíos a domicilio en Río Ceballos "}
        marca={"Pan-teon"}
        t1={"Estudiante de gastronomia en la FTA"}
        eslogan={"Pyme de panificaciones"}
        logo={logo}
      />
      <About
        titulo={"Sobre nosotros"}
        presentacion={"bla bla bla bla bla bla bla bla bla bla"}
      />
      <Productos productos={productos} />
    </div>
  );
}

export default App;
