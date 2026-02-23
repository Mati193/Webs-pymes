import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import logo from "./assets/Logo_panteon.jpg";
import About from "./components/About";

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
    </div>
  );
}

export default App;
