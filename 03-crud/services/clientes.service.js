import pool from "../db/db.js";

export const getAllClientes = async () => {
    const result = await pool.query('SELECT * FROM clientes');
    return result.rows;
}

export const newClienteService = async (data) => {
    //Descomponer un json en variables
    const { nombre, telefono, ubicacion } = data;

    const result =  await pool.query(
        'INSERT INTO clientes (nombre, telefono, ubicacion) VALUES ($1, $2, $3) RETURNING *',
        [nombre, telefono, ubicacion]
    );
    return result.rows[0]; //devolvemos el primer elemento del array, si queremos devolver más, habría que quitar el array
}