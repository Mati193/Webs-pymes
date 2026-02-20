import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

function Bienvenida({ logo, marca, eslogan, t1, desc }) {
  return (
    <div className="parent">
      <div className="div1">{t1}</div>
      <div className="div2">
        <img src={logo} alt="logo" className="rounded-circle img-fluid" />
        <p>{eslogan}</p>
      </div>
      <div className="div3">
        <h2>{marca}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Bienvenida;
