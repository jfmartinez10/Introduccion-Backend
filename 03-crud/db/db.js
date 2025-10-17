import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'process.env.DB_USER',
  host: 'process.env.DB_HOST',
  database: 'granja_abejas',
  password: 'process.env.DB_PASSWORD',
  port: process.env.DB_PORT,
});

export default pool;