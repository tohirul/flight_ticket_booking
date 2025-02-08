import express from 'express';
import * as airplaneController from './airplane.controller';

const router = express.Router();

router.get('/', airplaneController.getAllAirplanes);
router.get('/:airplaneId', airplaneController.getPlaneDetails);
router.post('/', airplaneController.createNewAirplaneInfo);
router.put('/:airplaneId', airplaneController.updateAirplaneInfo);
router.delete('/:airplaneId', airplaneController.deleteAirplaneInfo);

export default router;
