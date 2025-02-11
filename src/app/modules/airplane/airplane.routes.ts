import express from 'express';
import * as airplaneController from './airplane.controller';
import requestValidator from 'app/middlewares/requestValidator.middleware';
import { createAirplaneSchema } from './airplane.zod';

const router = express.Router();

router.get('/', airplaneController.getAllAirplanes);
router.get('/:airplaneId', airplaneController.getPlaneDetails);
router.post('/', requestValidator(createAirplaneSchema), airplaneController.createNewAirplaneInfo);
router.put('/:airplaneId', airplaneController.updateAirplaneInfo);
router.delete('/:airplaneId', airplaneController.deleteAirplaneInfo);

export default router;
