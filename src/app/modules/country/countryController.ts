import { Request, Response } from 'express';
import catchAsync from '@utilities/catchAsync';
import sendResponse from '@utilities/sendResponse';
import { create, destroy, getAll, getSingle, update } from './countryService';

export const getAllCountries = catchAsync(async (_req: Request, res: Response) => {
  const result = await getAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Countries retrieved successfully',
    data: result,
  });
});

export const getCountryDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await getSingle(req.params.countryId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country retrieved successfully',
    data: result,
  });
});

export const createNewCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await create({ ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country created successfully',
    data: result,
  });
});

export const updateCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await update(req.params.countryId, { ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country updated successfully',
    data: result,
  });
});

export const deleteCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await destroy(req.params.countryId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Country deleted successfully',
    data: result,
  });
});
