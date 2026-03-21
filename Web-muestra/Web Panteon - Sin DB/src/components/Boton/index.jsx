import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../global.css";
import "./boton.css";

function Boton({ texto, tipo, onClick }) {
  return (
    <div>
      <button className={`btn ${tipo} ${tipo + "-brand"}`} onClick={onClick}>
        {texto}
      </button>
    </div>
  );
}

export default Boton;
