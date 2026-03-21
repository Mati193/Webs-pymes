import React, { useState, useEffect } from 'react';
import './AdminPedidos.css';

const AdminPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    cargarPedidos();
  }, []);

  const cargarPedidos = () => {
    const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos') || '[]');
    // Ordenar por fecha (más recientes primero)
    const pedidosOrdenados = pedidosGuardados.sort((a, b) => 
      new Date(b.fecha) - new Date(a.fecha)
    );
    setPedidos(pedidosOrdenados);
  };

  const filtrarPedidos = () => {
    return pedidos.filter(pedido => {
      // Filtro por texto
      const textoBusqueda = busqueda.toLowerCase();
      const cumpleBusqueda = 
        pedido.cliente.nombre.toLowerCase().includes(textoBusqueda) ||
        pedido.cliente.telefono.includes(busqueda) ||
        pedido.id.toString().includes(busqueda);

      // Filtro por fecha
      const hoy = new Date().toDateString();
      const fechaPedido = new Date(pedido.fecha).toDateString();
      
      if (filtro === 'hoy') {
        return cumpleBusqueda && fechaPedido === hoy;
      } else if (filtro === 'semana') {
        const semanaPasada = new Date();
        semanaPasada.setDate(semanaPasada.getDate() - 7);
        return cumpleBusqueda && new Date(pedido.fecha) >= semanaPasada;
      }
      
      return cumpleBusqueda;
    });
  };

  const exportarPedidos = () => {
    const dataStr = JSON.stringify(pedidos, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `pedidos_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/admin/login';
  };

  const calcularTotales = (pedidosFiltrados) => {
    return {
      cantidad: pedidosFiltrados.length,
      totalVentas: pedidosFiltrados.reduce((sum, p) => sum + p.total, 0),
      productosVendidos: pedidosFiltrados.reduce((sum, p) => 
        sum + p.productos.reduce((sub, prod) => sub + prod.cantidad, 0), 0
      )
    };
  };

  const pedidosFiltrados = filtrarPedidos();
  const totales = calcularTotales(pedidosFiltrados);

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>
          <span className="admin-icon">👨‍🍳</span> 
          Panel de Administración - Pan-teon
        </h1>
        <div className="admin-header-buttons">
          <button onClick={exportarPedidos} className="btn-exportar">
            📥 Exportar JSON
          </button>
          <button onClick={handleLogout} className="btn-logout">
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Tarjetas de resumen */}
      <div className="resumen-cards">
        <div className="resumen-card">
          <div className="resumen-icon">📦</div>
          <div className="resumen-info">
            <h3>Pedidos</h3>
            <p className="resumen-numero">{totales.cantidad}</p>
          </div>
        </div>
        <div className="resumen-card">
          <div className="resumen-icon">💰</div>
          <div className="resumen-info">
            <h3>Ventas</h3>
            <p className="resumen-numero">${totales.totalVentas.toLocaleString()}</p>
          </div>
        </div>
        <div className="resumen-card">
          <div className="resumen-icon">🥐</div>
          <div className="resumen-info">
            <h3>Productos</h3>
            <p className="resumen-numero">{totales.productosVendidos}</p>
          </div>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="filtros-section">
        <div className="filtros-botones">
          <button 
            className={`filtro-btn ${filtro === 'todos' ? 'active' : ''}`}
            onClick={() => setFiltro('todos')}
          >
            📋 Todos
          </button>
          <button 
            className={`filtro-btn ${filtro === 'hoy' ? 'active' : ''}`}
            onClick={() => setFiltro('hoy')}
          >
            📅 Hoy
          </button>
          <button 
            className={`filtro-btn ${filtro === 'semana' ? 'active' : ''}`}
            onClick={() => setFiltro('semana')}
          >
            📆 Última semana
          </button>
        </div>
        
        <div className="busqueda-input">
          <span className="busqueda-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar por nombre, teléfono o ID..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {/* Tabla de pedidos */}
      <div className="tabla-container">
        <table className="pedidos-tabla">
          <thead>
            <tr>
              <th>ID Pedido</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Teléfono</th>
              <th>Tipo</th>
              <th>Productos</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidosFiltrados.map(pedido => (
              <tr key={pedido.id}>
                <td className="id-col">#{pedido.id.toString().slice(-6)}</td>
                <td className="fecha-col">{formatearFecha(pedido.fecha)}</td>
                <td className="cliente-col">{pedido.cliente.nombre}</td>
                <td className="tel-col">{pedido.cliente.telefono}</td>
                <td className="tipo-col">
                  <span className={`tipo-badge ${pedido.cliente.tipoPedido}`}>
                    {pedido.cliente.tipoPedido === 'delivery' ? '🚚 Delivery' : '🏪 Retiro'}
                  </span>
                </td>
                <td className="productos-col">
                  <details>
                    <summary>Ver productos ({pedido.productos.length})</summary>
                    <ul className="productos-lista">
                      {pedido.productos.map((prod, i) => (
                        <li key={i}>
                          <span className="prod-nombre">{prod.nombre}</span>
                          <span className="prod-cantidad">x{prod.cantidad}</span>
                          <span className="prod-precio">${prod.subtotal}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </td>
                <td className="total-col">${pedido.total.toLocaleString()}</td>
                <td className="acciones-col">
                  <button className="btn-accion ver" title="Ver detalle">
                    👁️
                  </button>
                  <button className="btn-accion whatsapp" title="Contactar por WhatsApp">
                    📱
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pedidosFiltrados.length === 0 && (
          <div className="sin-resultados">
            <p>😕 No se encontraron pedidos</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPedidos;