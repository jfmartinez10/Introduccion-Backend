
import { alumnos } from "../db/memory.js";
import { users } from "../db/memory.js";

//En un servicio real, 
// aquí irían las llamadas a la base de datos
//Las consultas a la base de datos son operaciones asíncronas
//por lo que devolverían una promesa
//y habría que usar async/await

export const getAlumnosFromDb = () => {

    //SELECT * FROM users;


    return alumnos;
}

export const getUsersFromDb = () => {

    //SELECT * FROM Alumnos;

    
    return users;
}