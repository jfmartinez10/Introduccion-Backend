
import { getUsersFromDb } from "../services/users.service.js";

export const getUsersFromDb = () => {
    
    const users = getUsersFromDb();

    //Poner nombres en mminuscula
    for (let i=0; i < users.length; i++) {
        users[i].name = users[i].name.toLowerCase();
    }

    return users;
}