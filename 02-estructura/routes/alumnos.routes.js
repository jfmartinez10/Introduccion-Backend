import { Router } from "express";

import { getAlumnos } from "../controllers/alumnos.controller.js";
import { getUsersFromDb } from "../controllers/alumnos.controller.js";


const router = Router();

router.get("/alumnos", (req, res) => {
    const alumnos = getAlumnos();
    res.send(alumnos);
});

router.get("/users", (req, res) => {
    const users = getUsersFromDb();
    res.send(users);
});

export default router;