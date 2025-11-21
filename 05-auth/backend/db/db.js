import pg from 'pg';
import ENV from '../utils/envLoader.js';

const { Pool } = pg;

const config = {
    user: ENV.DB_USER,
    host: ENV.DB_HOST,
    database: 'auth_db',
    password: ENV.DB_PASSWORD,
    port: ENV.DB_PORT,
}

const pool = new Pool(config);

export default pool;