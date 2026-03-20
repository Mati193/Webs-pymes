import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Bienvenida from "./components/Bienvenida";
import logo from "./assets/Logo_panteon.jpg";
import About from "./components/About";
import Productos from "./components/Productos";
import Contact from "./components/Contact/Contact";
import WSP from "./components/WSP/wsp";
import Carrito from "./components/Carrito/index";
import CartModal from "./components/CartModal/CartModal";
import AdminPedidos from "./components/Admin/AdminPedidos";
import AdminLogin from "./components/Admin/AdminLogin"; // 👈 Importamos el login
import { CartProvider } from "./components/CartContext/CartContext";
import React from "react";

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

const productos = [
  {
    id: 1,
    nombre: "Pan artesanal",
    desc: "Pan casero elaborado con fermentación natural.",
    precio: 800,
    img: logo,
  },
  {
    id: 2,
    nombre: "Medialunas",
    desc: "Medialunas de manteca recién horneadas.",
    precio: 300,
    img: logo,
  },
  {
    id: 3,
    nombre: "Facturas surtidas",
    desc: "Variedad de facturas dulces tradicionales.",
    precio: 400,
    img: logo,
  },
  {
    id: 4,
    nombre: "Chipá",
    desc: "Clásico chipá artesanal, crocante por fuera y suave por dentro.",
    precio: 500,
    img: logo,
  },
  {
    id: 5,
    nombre: "Budines caseros",
    desc: "Budines de limón, naranja y chocolate.",
    precio: 600,
    img: logo,
  },
];

// Componente para la página principal
function HomePage() {
  return (
    <>
      <WSP numero={"3512139324"} />
      <Carrito />
      <CartModal />
      
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
      />

      <Contact
        mail={"panteon_panificadora@gmail.com"}
        tel={"3512139324"}
        ubi={"Río ceballos, Argentina"}
        redes={redes}
        laboral={laboral}
      />
    </>
  );
}

// Componente para proteger rutas privadas
function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Ruta principal - tu sitio web */}
          <Route path="/" element={<HomePage />} />
          
          {/* Ruta del login */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* Ruta del panel de administración (protegida) */}
          <Route 
            path="/admin" 
            element={
              <PrivateRoute>
                <AdminPedidos />
              </PrivateRoute>
            } 
          />
          
          {/* Si alguien entra a /admin sin autenticación, redirige al login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;