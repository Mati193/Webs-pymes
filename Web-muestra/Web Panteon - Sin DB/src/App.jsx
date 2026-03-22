import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import logo from "./assets/Logo_panteon.jpg";
import About from "./components/About";
import Productos from "./components/Productos";
import Contact from "./components/Contact/Contact";
import WSP from "./components/WSP/wsp";

// Cambiar la estructura de productos a objetos con las propiedades correctas
const productos = [
  { nombre: "Pan casero", desc: "Pan de harina integral casero", img: logo },
  { nombre: "Bizcochuelo de chocolate", desc: "Rico bizcochuelo de chocolate relleno de dulce de leche", img: logo },
  { nombre: "Medialunas", desc: "Medialunas de grasa o manteca", img: logo },
  { nombre: "Medialunas", desc: "Medialunas de grasa o manteca", img: logo },
  { nombre: "Medialunas", desc: "Medialunas de grasa o manteca", img: logo },
  { nombre: "Medialunas", desc: "Medialunas de grasa o manteca", img: logo },
  { nombre: "Medialunas", desc: "Medialunas de grasa o manteca", img: logo },
  { nombre: "Medialunas", desc: "Medialunas de grasa o manteca", img: logo },



  // Eliminé los repetidos para que sea más limpio
];

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

function App() {
  return (
    <>
      <WSP numero={"3512139324"} />
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
      // Eliminé agregarProducto
      />
      <Contact
        mail={"panteon_panificadora@gmail.com"}
        tel={"1234567890"}
        ubi={"Río ceballos, Argentina"}
        redes={redes}
        laboral={laboral}
      />
    </>
  );
}

export default App;