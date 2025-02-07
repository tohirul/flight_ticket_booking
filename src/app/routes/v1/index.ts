import express from "express";
const router = express.Router();

interface Route {
  path: string;
  route: express.Router;
}

const moduleRoutes: Route[] = [];

for (const { path, route } of moduleRoutes) {
  router.use(path, route);
}

export default router;
