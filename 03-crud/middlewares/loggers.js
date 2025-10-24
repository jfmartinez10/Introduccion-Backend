import fs from 'fs';
import path from 'path';
import { newLogService } from '../services/logs.service.js'; 


export const logger = (req, res, next) => {
    const fecha_actual = new Date(); 
    

    const metodo = req.method;
    const url = req.url;
    const ip = req.socket.remoteAddress;

    const string = `[${fecha_actual.toISOString()}] ${metodo} - ${url} - ${ip} `;
    console.log(string);
    
    const date = fecha_actual.toISOString().slice(0, 10);
    let logPath = path.resolve("./logs/");

    // Guarda el log en la base de datos
    newLogService(fecha_actual.toISOString(), metodo, ip, url)
        .catch(error => console.error("Error al guardar log en DB:", error.message));
    
    // Asegura que el directorio exista (solo si no existe)
    if (!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath);
    }

    logPath = path.join(logPath, date + '.log');

    // Se guarda el log en el archivo
    fs.appendFile(logPath, 
        string + '\n',
        (error) => {
            if (error) {
                console.error("Error al guardar log en archivo:", error);
            }
        }
    );
    next();
};