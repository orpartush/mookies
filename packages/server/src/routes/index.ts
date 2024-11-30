import { Router } from "express";
import userRoutes from "./user/userRouter";

const router = Router();

// Add route groups
router.use("/users", userRoutes);

export default router;
