import fs from 'fs';
import path from 'path';

// Directorio donde se guardarán los logs
const dir_logs = path.join(process.cwd(), "logs");

// Middleware para loggear peticiones
const logger = (req, res, next) => { // Removido 'export' de aquí
    const fecha_actual = new Date().toISOString().slice(0, 10);
    const nombre_archivo = path.join(dir_logs, fecha_actual + ".log");
    const cadena_log = "[" + new Date().toISOString() + "] " + req.method + " - " + req.url + " - " + req.ip + "\n";

    // Asegura que el directorio exista (solo si no existe)
    if (!fs.existsSync(dir_logs)) {
        fs.mkdirSync(dir_logs, { recursive: true });
    }

    // Escribe la cadena de log de forma asíncrona
    fs.appendFile(nombre_archivo, cadena_log, (error) => {
        if (error) {
            console.error("Error al escribir en el log:", error);
            next(); 
        } else {
            next();
        }
    });
}

export default logger;