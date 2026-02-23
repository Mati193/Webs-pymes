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
        <h4>{eslogan}</h4>
      </div>
      <div className="div3">
        <h2>{marca}</h2>
        <p>{desc}</p>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </div>
  );
}

export default Bienvenida;
