import fsp from 'fs/promises';
import ENV from '../utils/envLoader.js';

//Listar archivos con sus metadatos
export async function listFilesWithStats() {
    const files = await fsp.readdir(ENV.CLOUD_STORAGE_PATH);  
    const out = {};
    
    for (const file of files) {
        const stats = await fsp.stat(ENV.CLOUD_STORAGE_PATH + '/' + file);
        out[file] = {
            size: stats.size,
            modified: stats.mtime
        };
    }
    
    return out;
}