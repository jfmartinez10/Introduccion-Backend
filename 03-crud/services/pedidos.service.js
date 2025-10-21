import pool from "../db/db.js";

export const getAllPedidos = async () => {
    const result = await pool.query('SELECT * FROM pedidos');
    return result.rows;
}

export const newPedidoService = async (data) => {
    //Descomponer un json en variables
    const { fecha_pedido, descripcion, cantidad } = data;

    const result =  await pool.query(
        'INSERT INTO pedidos (fecha_pedido, descripcion, cantidad) VALUES ($1, $2, $3) RETURNING *',
        [fecha_pedido, descripcion, cantidad]
    );
    return result.rows[0]; //devolvemos el primer elemento del array, si queremos devolver más, habría que quitar el array
}