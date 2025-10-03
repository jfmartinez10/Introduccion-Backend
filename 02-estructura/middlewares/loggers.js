//Middleware para loggear peticiones
//Export permite importarlo en otros ficheros

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.socket.remoteAddress}`); //Se escribe en este formato para contatenar más rápido
    next();
};

export default logger;