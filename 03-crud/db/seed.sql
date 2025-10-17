
CREATE DATABASE granja_abejas IF NOT EXISTS;

\c granja-abejas;

DROP TABLE IF EXISTS clientes;
CREATE TABLE clientes (
	id_cliente SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	telefono VARCHAR(20),
	UBICACION TEXT
);

DROP TABLE IF EXISTS pedidos;
CREATE TABLE pedidos (
	id_pedidos SERIAL PRIMARY KEY,
	id_cliente INT NOT NULL REFERENCES clientes(id_cliente) ON DELETE CASCADE,
	fecha_pedido DATE NOT NULL DEFAULT CURRENT_DATE,
	descripcion TEXT,
	cantidad INT CHECK (cantidad > 0)
);