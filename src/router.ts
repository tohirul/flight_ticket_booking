import express, { Request, Response } from "express";
import apiRoutes from "./app/routes";
import config from "./config";

const Router = express.Router();
// Health check route
Router.get("/", (_req: Request, res: Response) => {
  res.json({
    message: `Server is running in ${config.node_env} mode`,
    environment: config.node_env,
    version: config.version || "1.0.0",
  });
});

Router.use("/api", apiRoutes);

export default Router;
