export const saveOrderToJSON = (orderData) => {
  // Crear objeto con toda la información del pedido
  const order = {
    id: Date.now(), // ID único basado en timestamp
    fecha: new Date().toISOString(),
    cliente: {
      nombre: orderData.nombre,
      telefono: orderData.telefono,
      direccion: orderData.direccion || "Retiro en local",
      tipoPedido: orderData.tipoPedido
    },
    productos: orderData.productos.map(p => ({
      id: p.id,
      nombre: p.nombre,
      cantidad: p.cantidad,
      precioUnitario: p.precio,
      subtotal: p.precio * p.cantidad
    })),
    total: orderData.total,
    observaciones: orderData.observaciones || ""
  };

  // Obtener pedidos existentes o inicializar array vacío
  const existingOrders = JSON.parse(localStorage.getItem('pedidos') || '[]');
  
  // Agregar nuevo pedido
  existingOrders.push(order);
  
  // Guardar en localStorage
  localStorage.setItem('pedidos', JSON.stringify(existingOrders, null, 2));
  
  // También guardar este pedido individual como archivo descargable
//   const blob = new Blob([JSON.stringify(order, null, 2)], { type: 'application/json' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = `pedido_${order.id}.json`;
//   a.click();
  
  return order;
};