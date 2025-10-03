import { Router } from "express";
import authRoutes from "./routes/auth.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/alumnos", alumnosRoutes);

export default router;