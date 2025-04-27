import express from 'express';

import requestValidator from '@/app/middlewares/requestValidator';

import * as airportController from './airportController';
import { createAirportSchema, updateAirportSchema } from './airportZod';

const airportRouter = express.Router();

airportRouter.get('/', airportController.getAll);
airportRouter.get('/:id', airportController.getAirportDetails);
airportRouter.post('/', requestValidator(createAirportSchema), airportController.create);
airportRouter.put('/:id', requestValidator(updateAirportSchema), airportController.update);
airportRouter.delete('/:id', airportController.destroy);



export default airportRouter;
