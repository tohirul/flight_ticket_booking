import express from 'express';

import requestValidator from '@middlewares/requestValidator';

import * as cityController from './cityController';
import { createCitySchema, updateCitySchema } from './cityZod';

const cityRouter = express.Router();
cityRouter.get('/', cityController.getAllCities);
cityRouter.get('/:id', cityController.getCityDetails);
cityRouter.post(
  '/',
  requestValidator(createCitySchema),
  cityController.createCity
);
cityRouter.put('/:id', requestValidator(updateCitySchema), cityController.updateCity);

export default cityRouter;