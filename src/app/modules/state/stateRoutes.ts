import express from 'express';

import requestValidator from '@/app/middlewares/requestValidator';

import * as stateController from './stateController';
import { createStateSchema, updateStateSchema } from './stateZod';

const stateRouter = express.Router();

stateRouter.get('/', stateController.getAllStates);
stateRouter.get('/:id', stateController.getStateById);
stateRouter.post('/', requestValidator(createStateSchema), stateController.createState);
stateRouter.put('/:id', requestValidator(updateStateSchema), stateController.updateState);
stateRouter.delete('/:id', stateController.deleteState);

export default stateRouter;
