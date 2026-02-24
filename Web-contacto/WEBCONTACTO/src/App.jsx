import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import logo from "./assets/Logo_panteon.jpg";
import About from "./components/About";
import Productos from "./components/Productos";

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
        desc={"Pan artesanal recién horneado todos los días.\nTake Away y envíos a domicilio en Río Ceballos."}
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
      
      />
    </div>
  );
}

export default App;
