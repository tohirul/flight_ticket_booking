import express from 'express';
import airPlaneRouter from '@modules/airplane/airplaneRoutes';
import airlineRouter from '@modules/airline/airlineRoutes';
import countryRouter from '@modules/country/countryRoutes';
import cityRouter from '@modules/city/cityRoutes';
const router = express.Router();

interface Route {
  path: string;
  route: express.Router;
}

const moduleRoutes: Route[] = [
  { path: '/airplanes', route: airPlaneRouter },
  { path: '/airlines', route: airlineRouter },
  { path: '/countries', route: countryRouter },
  { path: '/cities', route: cityRouter },

];

for (const { path, route } of moduleRoutes) {
  router.use(path, route);
}

export default router;
