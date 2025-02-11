import express from 'express';
import airplaneRoutes from 'app/modules/airplane/airplane.routes';
import airlineRoutes from 'app/modules/airline/airline.routes';
const router = express.Router();

interface Route {
  path: string;
  route: express.Router;
}

const moduleRoutes: Route[] = [
  { path: '/airplanes', route: airplaneRoutes },
  { path: '/airlines', route: airlineRoutes },
];

for (const { path, route } of moduleRoutes) {
  router.use(path, route);
}

export default router;
