import express from 'express';
import * as airplaneController from './airplaneController';
import requestValidator from '@middlewares/requestValidator';
import { createAirplaneSchema } from './airplaneZod';

const airPlaneRouter = express.Router();

airPlaneRouter.get('/', airplaneController.getAllAirplanes);
airPlaneRouter.get('/:airplaneId', airplaneController.getPlaneDetails);
airPlaneRouter.post(
  '/',
  requestValidator(createAirplaneSchema),
  airplaneController.createNewAirplaneInfo
);
airPlaneRouter.put('/:airplaneId', airplaneController.updateAirplaneInfo);
airPlaneRouter.delete('/:airplaneId', airplaneController.deleteAirplaneInfo);

export default airPlaneRouter;
