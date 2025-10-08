import { Router } from "express";

import { getUsersFromDb } from "../controllers/users.controller.js";

const router = Router();

router.get("/users", (req, res) => {
    res.send({
        "users": []
    })
});

const users = getUsers();
res.send(users);

export default router;