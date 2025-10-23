import fs from 'fs';
import path from 'path';

// Middleware para loggear peticiones
export const logger = (req, res, next) => {
    const fecha_actual = new Date();
    // NOTA: Tienes una variable 'today' que no está definida. La he reemplazado por 'fecha_actual'.
    const string = `[${fecha_actual.toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} ` 
    console.log(string);

    const date = fecha_actual.toISOString().slice(0, 10);
    let logPath = path.resolve("./logs/");

    // Asegura que el directorio exista (solo si no existe)
    if (!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath);
    }

    logPath = path.join(logPath, date + '.log');

    fs.appendFile(logPath, 
        string + '\n',
        (error) => {
            if (error) {
                console.log(error);
            }
        }
    );
    next();
}

export default logger;