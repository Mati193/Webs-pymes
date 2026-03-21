import React from "react";
import { useCart } from "../CartContext/CartContext";
import "./CartModal.css";

const CartModal = () => {
  const { 
    carrito, 
    isCartOpen, 
    closeCart, 
    eliminarProducto, 
    actualizarCantidad,
    vaciarCarrito
  } = useCart();

  if (!isCartOpen) return null;

  const totalPrecio = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad, 
    0
  );

  const handleConfirmarPedido = () => {
    closeCart(); // Cierra el modal del carrito
    
    // Smooth scroll a la sección de contacto
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
      
      // Opcional: enfocar el primer campo del formulario
      setTimeout(() => {
        const nombreInput = document.querySelector('input[name="name"]');
        if (nombreInput) nombreInput.focus();
      }, 500);
    }
  };

  return (
    <div className="cart-modal-overlay" onClick={closeCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h3>Carrito de Compras</h3>
          <button className="cart-modal-close" onClick={closeCart}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="cart-modal-body">
          {carrito.length === 0 ? (
            <p className="cart-empty">El carrito está vacío</p>
          ) : (
            <>
              {carrito.map((producto) => (
                <div key={producto.id} className="cart-item">
                  <img 
                    src={producto.img} 
                    alt={producto.nombre} 
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <h4>{producto.nombre}</h4>
                    <p className="cart-item-price">
                      ${producto.precio} c/u
                    </p>
                    <div className="cart-item-controls">
                      <button 
                        onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                        className="cart-item-btn"
                      >
                        -
                      </button>
                      <span className="cart-item-quantity">{producto.cantidad}</span>
                      <button 
                        onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                        className="cart-item-btn"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => eliminarProducto(producto.id)}
                        className="cart-item-remove"
                        title="Eliminar producto"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {carrito.length > 0 && (
          <div className="cart-modal-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${totalPrecio.toFixed(2)}</span>
            </div>
            <div className="cart-buttons">
              <button className="cart-btn cart-btn-clear" onClick={vaciarCarrito}>
                Vaciar Carrito
              </button>
              <button 
                className="cart-btn cart-btn-confirm"
                onClick={handleConfirmarPedido}
              >
                Confirmar Pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;