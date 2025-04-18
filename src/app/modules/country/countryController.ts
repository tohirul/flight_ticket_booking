import { Request, Response } from 'express';
import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import CountryService from './countryService';
import container from '@/core/repositories/repository_container';

const countryService = container.resolve(CountryService);

export const getAllCountries = catchAsync(async (_req: Request, res: Response) => {
  const result = await countryService.getAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Countries retrieved successfully',
    data: result,
  });
});

export const getCountryDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.getSingle(req.params.countryId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country retrieved successfully',
    data: result,
  });
});

export const createNewCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.create({ ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country created successfully',
    data: result,
  });
});

export const updateCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.update(req.params.countryId, { ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country updated successfully',
    data: result,
  });
});

export const deleteCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.destroy(req.params.countryId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country deleted successfully',
    data: result,
  });
});
