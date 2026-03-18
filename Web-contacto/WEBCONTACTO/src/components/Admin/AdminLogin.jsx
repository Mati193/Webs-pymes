// components/Admin/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cambiá esta contraseña por la que quieras
    if (password === 'panteon2026') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin');
    } else {
      setError('🔐 Contraseña incorrecta');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="admin-login-icon">👨‍🍳</div>
        <h1>Panel de Administración</h1>
        <p>Pan-teon - Gestión de Pedidos</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="password"
              placeholder="Ingresá la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="login-btn">
            Ingresar al Panel
          </button>
        </form>

        <div className="admin-login-footer">
          <a href="/">← Volver al sitio</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;