import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarProducto = (productoId) => {
    setCarrito((prevCarrito) => 
      prevCarrito.filter(item => item.id !== productoId)
    );
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarProducto(productoId);
      return;
    }

    setCarrito((prevCarrito) =>
      prevCarrito.map(item =>
        item.id === productoId
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <CartContext.Provider value={{
      carrito,
      agregarProducto,
      eliminarProducto,
      actualizarCantidad,
      vaciarCarrito,
      totalItems,
      isCartOpen,
      toggleCart,
      closeCart,
      openCart
    }}>
      {children}
    </CartContext.Provider>
  );
};