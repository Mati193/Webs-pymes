import React from "react";

function menuARRIBA({ nombre, dueño }) {
  return (
    <section>
      <div className="btn-group dropstart">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropstart
        </button>
        <ul className="dropdown-menu"></ul>
      </div>

      <div className="btn-group dropstart">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropstart</span>
        </button>
        <ul className="dropdown-menu"></ul>
        <button type="button" className="btn btn-secondary">
          hOla
        </button>
      </div>
    </section>
  );
}

export default menuARRIBA;
