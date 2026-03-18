import React from "react";
import { useCart } from "../CartContext/CartContext";  // 👈 Ruta corregida
import "./carrito.css";

function Carrito() {
  const { totalItems, toggleCart } = useCart();

  return (
    <button
      className="carrito-float"
      onClick={toggleCart}
      aria-label="Carrito de compras"
    >
      <i className="fas fa-shopping-cart"></i>
      {totalItems > 0 && <span className="carrito-badge">{totalItems}</span>}
    </button>
  );
}

export default Carrito;