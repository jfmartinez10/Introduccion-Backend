import express from "express";

import { logger } from "./middlewares/loggers.js";
import index from "./routes/index.js";
import pool from "./db/db.js";

const PORT = process.env.PORT || 3000;

const app = express();

//Middleware para entender JSON
app.use(express.json());

//Middleware de loggeo
app.use(logger);

//Endpoint raiz
app.get("/", (req, res) => { //request y response
    //Enviamos desde tipo json
    res.send({
        mensaje: "Hola mundo"
    })
})

//cargar rutas
app.use("/api", index);

//Conectarse a la db
//Lo denominamos como promesa, la cual siempre tiene un then y un catch
pool.connect().then((client) => {
    console.log("✅ Conectado a la base de datos");
    //client.release(); deja el cliente si no se va a usar
}).catch((error) => {
    console.error("❌ Error al conectar a la base de datos", error);
})

//Escuchar en el puerto 80
app.listen(PORT, () => {
    console.log("Servidor escuchando el puerto " + PORT);
})