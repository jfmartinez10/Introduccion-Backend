import { getAllClientes, newClienteService } from "../services/clientes.service.js";

export const getClientes = (req, res) => {
    getAllClientes().then((clientes) => {
        res.send(clientes);
    });
}

export const createCliente = (req, res) => { //utilizamos tanto req como res
    const data= req.body; //capturamos el cuerpo de la petición

    if (data.nombre) {
    newClienteService(data)
    .then((newCliente) => {
        res.status(201).send(newCliente); //201 es creado
    })
    .catch((error) => {
        res.status(400).send({ error: error.message });
    });
    } else {
    res.status(400).send({ error: "Faltan datos obligatorios" });
    }
}