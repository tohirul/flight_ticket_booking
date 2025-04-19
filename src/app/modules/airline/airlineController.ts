import { Request, Response } from 'express';

import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import AirlineService from './airlineService';
import container from '@/core/repositories/repository_container';

const airlineService = container.resolve(AirlineService);

export const getAllAirlines = catchAsync(async (_req: Request, res: Response) => {
  const result = await airlineService.getAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airlines retrieved successfully',
    data: result,
  });
});

export const getPlaneDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await airlineService.getSingle(req.params.airlineId);
  if (!result)
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: 'Airline not found',
    });
  else
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Airline retrieved successfully',
      data: result,
    });
});

export const createNewAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airlineService.create({ ...req.body });

  if (!result)
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: 'Airline not created',
    });
  else
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Airline created successfully',
      data: result,
    });
});

export const updateAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airlineService.update(req.params.airlineId, { ...req.body });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airline updated successfully',
    data: result,
  });
});

export const deleteAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  
  const result = await airlineService.destroy(req.params.airlineId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Airline deleted successfully',
    data: result,
  });
});
