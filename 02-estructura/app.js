import express from "express";
import logger from "./middlewares/loggers.js";
import mainRouter from "./routes/index.js";
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
app.use("/api", mainRouter);

//Endpoint raiz
app.get("/", (req, res) => { //request y response
    //Enviamos desde tipo json
    res.send({
        mensaje: "Hola mundo"
    })
})

//Escuchar en el puerto 3000
app.listen(PORT, () => {
    console.log("Servidor escuchando el puerto " + PORT);
})