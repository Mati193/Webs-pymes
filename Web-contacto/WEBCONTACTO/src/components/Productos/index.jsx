import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./productos.css";
import "../global.css";

/*Esta funcion la hizo Mati*/
function Productos({ productos }) {
  return (
    <section className="fondo">
      <div className="titulos" id="productos">
        <h2>Nuestros productos</h2>
        <h5>Una seleccion de nuestras más deliciosas especialidades</h5>
      </div>
      <div className="contenedor-productos">
        {productos.map((producto, index) => (
          <div className="card card-hover" key={index}>
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

/*Funcion de Tito
function Productos({ productos }) {
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

*/

export default Productos;
