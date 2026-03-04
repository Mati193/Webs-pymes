import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../global.css";
import "./boton.css";

function Boton({ texto }) {
  return (
    <div>
      <button class="btn btn-warning boton boton">{texto}</button>
    </div>
  );
}

export default Boton;
