import express, { Application } from "express";
import morgan from "morgan";
import Router from "./router";
const app: Application = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan("dev"));

app.use(Router);

export default app;
