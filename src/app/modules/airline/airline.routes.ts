import express from 'express';
import * as airlineController from './airline.controller';

const router = express.Router();

router.get('/', airlineController.getAllAirlines);
router.get('/:airlineId', airlineController.getPlaneDetails);
router.post('/', airlineController.createNewAirlineInfo);
router.put('/:airlineId', airlineController.updateAirlineInfo);
router.delete('/:airlineId', airlineController.deleteAirlineInfo);

export default router;
