import { Request, Response } from 'express';
import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import { create, destroy, getAll, getSingle, update } from './airlineService';

export const getAllAirlines = catchAsync(async (_req: Request, res: Response) => {
  const result = await getAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airlines retrieved successfully',
    data: result,
  });
});

export const getPlaneDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await getSingle(req.params.airlineId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airline retrieved successfully',
    data: result,
  });
});

export const createNewAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await create({ ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airline created successfully',
    data: result,
  });
});

export const updateAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await update(req.params.airlineId, { ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airline updated successfully',
    data: result,
  });
});

export const deleteAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.params.airlineId);
  const result = await destroy(req.params.airlineId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airline deleted successfully',
    data: result,
  });
});
