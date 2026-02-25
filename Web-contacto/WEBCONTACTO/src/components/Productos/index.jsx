import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./productos.css";
import "../global.css";

function Productos({ productos }) {
  return (
    <section className="fondo">
      <div className="titulos" id="productos">
        <h2>Nuestros productos</h2>
        <h5>Una seleccion de nuestras más deliciosas especialidades</h5>
      </div>
      <div className="contenedor-productos">
        {productos.map((producto, index) => (
          <div className="card card-hover" id={index}>
            <img
              src={producto[2]}
              className="img-productos"
              alt="Foto de algo rico"
            />
            <div className="card-body">
              <h5 className="card-title">{producto[0]}</h5>
              <p className="card-text">{producto[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
