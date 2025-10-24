import pool from "../db/db.js";

export const newLogService = async (fecha_log, metodo, ip, url) => {

    const result = await pool.query(
        'INSERT INTO logs (fecha_log, metodo, ip, url) VALUES ($1, $2, $3, $4) RETURNING *',
        [fecha_log, metodo, ip, url]
    );

    return result.rows[0];
};