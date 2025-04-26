import express from 'express';

import requestValidator from '@middlewares/requestValidator';

import * as cityController from './cityController';
import { createCitySchema } from './cityZod';

const cityRouter = express.Router();
cityRouter.get('/', cityController.getAllCities);
cityRouter.post(
  '/',
  requestValidator(createCitySchema),
  cityController.createCity
);

export default cityRouter;