import { Router } from "express";

import usersRoutes from "./users/index.js";

const router = Router();

router.use("/users", usersRoutes);

export default router;
