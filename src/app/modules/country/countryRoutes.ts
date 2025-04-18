import express from 'express';
import * as countryController from './countryController';
import requestValidator from '@middlewares/requestValidator';
import { createCountrySchema, updateCountrySchema } from './countryZod';

const countryRouter = express.Router();
countryRouter.get('/', countryController.getAllCountries);
countryRouter.get('/:countryId', countryController.getCountryDetails);
countryRouter.post(
  '/',
  requestValidator(createCountrySchema),
  countryController.createNewCountryInfo
);
countryRouter.put(
  '/:countryId',
  requestValidator(updateCountrySchema),
  countryController.updateCountryInfo
);
countryRouter.delete('/:countryId', countryController.deleteCountryInfo);

export default countryRouter;
