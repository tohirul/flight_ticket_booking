import express from 'express';
import * as airlineController from './airlineController';
import requestValidator from '@middlewares/requestValidator';
import { createAirlineSchema, updateAirlineSchema } from './airlineZod';

const airlineRouter = express.Router();

airlineRouter.get('/', airlineController.getAllAirlines);
airlineRouter.get('/:airlineId', airlineController.getPlaneDetails);
airlineRouter.post(
  '/',
  requestValidator(createAirlineSchema),
  airlineController.createNewAirlineInfo
);
airlineRouter.put(
  '/:airlineId',
  requestValidator(updateAirlineSchema),
  airlineController.updateAirlineInfo
);
airlineRouter.delete('/:airlineId', airlineController.deleteAirlineInfo);

export default airlineRouter;
