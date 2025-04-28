import express from 'express';

import airlineRouter from '@modules/airline/airlineRoutes';
import airPlaneRouter from '@modules/airplane/airplaneRoutes';
import airportRouter from '@modules/airport/airportRoutes';
import cityRouter from '@modules/city/cityRoutes';
import countryRouter from '@modules/country/countryRoutes';
import flightRouter from '@modules/flight/flightRoutes';
import stateRouter from '@modules/state/stateRoutes';

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
  { path: '/states', route: stateRouter },
  { path: '/airports', route: airportRouter },
    { path: '/flights', route: flightRouter },                  
];

for (const { path, route } of moduleRoutes) {
  router.use(path, route);
}

export default router;
