import "./carrito.css";
import logo from "../../../public/fondo-contacto2.jpg";

function Carrito({ carrito, onClick }) {
  return (
    <button
      href=""
      className="carrito-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      onClick={() => onClick}
    >
      <img src={logo} alt="WhatsApp" />
    </button>
  );
}

export default Carrito;
