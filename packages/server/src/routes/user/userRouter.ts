import { Router } from "express";
import { getAllUsers } from "./userController";

const router = Router();

router.get("/", getAllUsers);

export default router;
