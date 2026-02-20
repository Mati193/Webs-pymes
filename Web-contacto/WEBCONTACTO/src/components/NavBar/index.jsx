import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function NavBar({ logo, marca, t1, t2, t3 }) {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top rounded-circle img-fluid"
            />
            {marca}
          </a>
          <a className="navbar-brand d-inline-block align ms-auto" href="#">
            {t1}
          </a>
          <a className="navbar-brand d-inline-block align" href="#">
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
