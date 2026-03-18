// backend/server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Testear conexión
pool.connect((err) => {
  if (err) {
    console.error('❌ Error conectando a PostgreSQL:', err);
  } else {
    console.log('✅ Conectado a PostgreSQL');
  }
});

// Ruta para guardar un pedido
app.post('/api/pedidos', async (req, res) => {
  try {
    const { 
      cliente, 
      productos, 
      total, 
      tipoPedido, 
      observaciones 
    } = req.body;

    const query = `
      INSERT INTO pedidos (
        cliente_nombre, 
        cliente_telefono, 
        tipo_entrega, 
        domicilio, 
        email, 
        productos, 
        total, 
        observaciones
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `;

    const values = [
      cliente.nombre,
      cliente.telefono,
      cliente.tipoPedido,
      cliente.direccion || null,
      cliente.email || null,
      JSON.stringify(productos),
      total,
      observaciones || ''
    ];

    const result = await pool.query(query, values);
    
    res.json({ 
      success: true, 
      id: result.rows[0].id,
      message: '✅ Pedido guardado en PostgreSQL' 
    });

  } catch (error) {
    console.error('❌ Error guardando pedido:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Ruta para obtener todos los pedidos (para el admin)
app.get('/api/pedidos', async (req, res) => {
  try {
    const { filtro } = req.query;
    let query = 'SELECT * FROM pedidos ORDER BY fecha DESC';
    
    if (filtro === 'hoy') {
      query = "SELECT * FROM pedidos WHERE DATE(fecha) = CURRENT_DATE ORDER BY fecha DESC";
    } else if (filtro === 'semana') {
      query = "SELECT * FROM pedidos WHERE fecha >= NOW() - INTERVAL '7 days' ORDER BY fecha DESC";
    }
    
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Error obteniendo pedidos:', error);
    res.status(500).json({ error: error.message });
  }
});

// Ruta para buscar pedidos
app.get('/api/pedidos/buscar', async (req, res) => {
  try {
    const { q } = req.query;
    const query = `
      SELECT * FROM pedidos 
      WHERE 
        cliente_nombre ILIKE $1 OR 
        cliente_telefono ILIKE $1 OR 
        id::text ILIKE $1
      ORDER BY fecha DESC
    `;
    const result = await pool.query(query, [`%${q}%`]);
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Error buscando:', error);
    res.status(500).json({ error: error.message });
  }
});

// Puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});