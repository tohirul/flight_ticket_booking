import {
  getAllAirplanes,
  getPlaneDetails,
  createNewAirplaneInfo,
  updateAirplaneInfo,
  deleteAirplaneInfo,
} from './airplaneController';
import requestValidator from '@middlewares/requestValidator';
import { createAirplaneSchema } from './airplaneZod';
import { Router } from 'express';

const airPlaneRouter = Router();

airPlaneRouter.get('/', getAllAirplanes);
airPlaneRouter.get('/:airplaneId', getPlaneDetails);
airPlaneRouter.post('/', requestValidator(createAirplaneSchema), createNewAirplaneInfo);
airPlaneRouter.put('/:airplaneId', updateAirplaneInfo);
airPlaneRouter.delete('/:airplaneId', deleteAirplaneInfo);

export default airPlaneRouter;
