import { createHealthRoute } from "./routes/healthRoute.js";
import express from "express";

const app = express();

app.disable("x-powered-by")
    .use(express.json())
    .use("/api/v1", createHealthRoute());

export default app;