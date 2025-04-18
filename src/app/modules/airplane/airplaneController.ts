import { Request, Response } from 'express';
import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import AirplaneService from './airplaneService';
import container from '@/core/repositories/repository_container';

const airplaneService = container.resolve(AirplaneService);

export const getAllAirplanes = catchAsync(async (_req: Request, res: Response) => {
  const result = await airplaneService.getAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplanes retrieved successfully',
    data: result,
  });
});

export const getPlaneDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.getSingle(req.params.airplaneId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane retrieved successfully',
    data: result,
  });
});

export const createNewAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.create({ ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane created successfully',
    data: result,
  });
});

export const updateAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.update(req.params.airplaneId, { ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane updated successfully',
    data: result,
  });
});

export const deleteAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.destroy(req.params.airplaneId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airplane deleted successfully',
    data: result,
  });
});
