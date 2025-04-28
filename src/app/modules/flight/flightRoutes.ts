import express from 'express';

import requestValidator from '@/app/middlewares/requestValidator';

import * as FlightController from './flightController';
import { CreateFlightSchema, UpdateFlightSchema } from './flightZod';

const flightRoutes =  express.Router();

flightRoutes.get('/', FlightController.getAllFlights);
flightRoutes.get('/:id', FlightController.getFlightById);
flightRoutes.post('/', requestValidator(CreateFlightSchema), FlightController.createFlight);
flightRoutes.put('/:id', requestValidator(UpdateFlightSchema), FlightController.updateFlight);
flightRoutes.delete('/:id', FlightController.deleteFlight);


export default flightRoutes;