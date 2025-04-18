import { Request, Response } from 'express';
import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import { create, destroy, getAll, getSingle, update } from './airplaneService';

export const getAllAirplanes = catchAsync(async (_req: Request, res: Response) => {
  const result = await getAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplanes retrieved successfully',
    data: result,
  });
});

export const getPlaneDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await getSingle(req.params.airplaneId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane retrieved successfully',
    data: result,
  });
});

export const createNewAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await create({ ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane created successfully',
    data: result,
  });
});

export const updateAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await update(req.params.airplaneId, { ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane updated successfully',
    data: result,
  });
});

export const deleteAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await destroy(req.params.airplaneId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane deleted successfully',
    data: result,
  });
});
