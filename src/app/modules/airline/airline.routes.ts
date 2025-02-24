import express from 'express';
import * as airlineController from './airline.controller';
import requestValidator from 'app/middlewares/requestValidator';
import { createAirlineSchema, updateAirlineSchema } from './airline.zod';

const router = express.Router();

router.get('/', airlineController.getAllAirlines);
router.get('/:airlineId', airlineController.getPlaneDetails);
router.post('/', requestValidator(createAirlineSchema), airlineController.createNewAirlineInfo);
router.put(
  '/:airlineId',
  requestValidator(updateAirlineSchema),
  airlineController.updateAirlineInfo
);
router.delete('/:airlineId', airlineController.deleteAirlineInfo);

export default router;
