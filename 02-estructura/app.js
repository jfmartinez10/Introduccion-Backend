import express from "express";

const PORT = 80;

const app = express();

//Modo de uso de JSON
app.use(express.json()); 

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