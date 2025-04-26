import express from 'express';

import * as cityController from './cityController';

// import requestValidator from '@middlewares/requestValidator';
// import { createCitySchema, updateCitySchema } from './cityZod';

const cityRouter = express.Router();
cityRouter.get('/', cityController.getAllCities);

export default cityRouter;