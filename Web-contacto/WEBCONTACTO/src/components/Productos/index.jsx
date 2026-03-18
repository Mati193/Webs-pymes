import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./productos.css";
import "../global.css";
import Boton from "../Boton";
import { useCart } from "../CartContext/CartContext";  // 👈 Importar useCart


function Productos({ eslogan, productos }) {
  const { agregarProducto } = useCart();

  return (
    <section className="fondo" id="productos">
      <div className="titulos">
        <h2>Nuestros productos</h2>
        <h5>{eslogan}</h5>
      </div>
      <div className="contenedor-productos">
        {productos.map((producto) => (
          <div className="card card-hover" key={producto.id}>
            <img
              src={producto.img}
              className="img-productos"
              alt={producto.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.desc}</p>
              <p className="card-price">${producto.precio}</p>
            </div>
            <div className="botonera">
              <Boton
                texto={"Agregar al carrito"}
                tipo={"claro"}
                onClick={() => agregarProducto(producto)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;