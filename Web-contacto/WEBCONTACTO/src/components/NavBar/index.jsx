import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navbar.css";
function NavBar({ logo, marca, t1, t2, t3 }) {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <img
            src={logo}
            alt=""
            className="d-inline-block align-text-top rounded-circle img-fluid navbar-brand img-navbar"
          />
          <a className="navbar-brand a-navbar" href="#bienvenida">
            {marca}
          </a>
          <a
            className="navbar-brand d-inline-block align ms-auto"
            href="#about"
          >
            {t1}
          </a>
          <a className="navbar-brand d-inline-block align" href="#productos">
            {t2}
          </a>
          <a className="navbar-brand d-inline-block align " href="#">
            {t3}
          </a>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
