import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", router);

export default app;
