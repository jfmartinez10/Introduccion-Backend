import pool from "../db/db.js";

export const getAllPedidos = async () => {
    const result = await pool.query('SELECT * FROM pedidos');
    return result.rows;
}

export const newPedidoService = async (data) => {
    const { id_cliente, fecha_pedido, descripcion, cantidad } = data; 

    const result =  await pool.query(
        'INSERT INTO pedidos (id_cliente, fecha_pedido, descripcion, cantidad) VALUES ($1, $2, $3, $4) RETURNING *', 
        [id_cliente, fecha_pedido, descripcion, cantidad]
    );
    return result.rows[0]; //devolvemos el primer elemento del array, si queremos devolver más, habría que quitar el array
}

export const updatePedidoService = async (id, data) => {
    const { id_cliente, fecha_pedido, descripcion, cantidad } = data;
    const result = await pool.query(
        'UPDATE pedidos SET id_cliente = $1, fecha_pedido = $2, descripcion = $3, cantidad = $4 WHERE id_pedido = $5 RETURNING *',
        [id_cliente, fecha_pedido, descripcion, cantidad, id]
    );
    if (result.rows.length === 0) {
        //Lanza un error generico
        throw new Error("Pedido no encontrado");
    }
    return result.rows[0];
}