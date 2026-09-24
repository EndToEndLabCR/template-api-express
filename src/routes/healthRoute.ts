import { Router } from "express";

export const createHealthRoute = () => {
    const healthRouter = Router();

    healthRouter.get("/health", (_req, res) => {
        res.status(200).json({ status: "OK" });
    });

    return healthRouter;

}