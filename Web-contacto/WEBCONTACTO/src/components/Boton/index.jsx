import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../global.css";
import "./boton.css";

function Boton({ texto, tipo }) {
  return (
    <div>
      <button className={`btn ${tipo} ${tipo + "-brand"}`}>{texto}</button>
    </div>
  );
}

export default Boton;
