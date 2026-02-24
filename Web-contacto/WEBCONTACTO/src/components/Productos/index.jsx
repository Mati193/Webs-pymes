import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./productos.css";
import "../global.css";

function Productos() {

  const productos = [
    {
      nombre: "Pan artesanal",
      descripcion: "Pan casero elaborado con fermentación natural.",
      precio: "$1500"
    },
    {
      nombre: "Medialunas",
      descripcion: "Medialunas de manteca recién horneadas.",
      precio: "$800"
    },
    {
      nombre: "Facturas surtidas",
      descripcion: "Variedad de facturas dulces tradicionales.",
      precio: "$900"
    },
    {
      nombre: "Chipá",
      descripcion: "Clásico chipá artesanal, crocante por fuera y suave por dentro.",
      precio: "$700"
    },
    {
      nombre: "Budines caseros",
      descripcion: "Budines de limón, naranja y chocolate.",
      precio: "$2000"
    }
  ];

  return (
    <section className="productos" id="productos">
      <h2>Nuestros Productos</h2>

      <div className="productos-grid">
        {productos.map((producto, index) => (
          <div className="producto-card" key={index}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <span className="precio">{producto.precio}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;