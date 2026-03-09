import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./productos.css";
import "../global.css";

/*Esta funcion la hizo Mati*/
function Productos({ eslogan, productos }) {
  return (
    <section className="fondo" id="productos">
      <div className="titulos">
        <h2>Nuestros productos</h2>
        <h5>{eslogan}</h5>
      </div>
      <div className="contenedor-productos">
        {productos.map((producto, index) => (
          <div className="card card-hover" key={index}>
            <img
              src={producto[2]}
              className="img-productos"
              alt={producto[0]}
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
