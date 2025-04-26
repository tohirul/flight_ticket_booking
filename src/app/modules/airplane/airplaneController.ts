import { Request, Response } from 'express';
import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import AirplaneService from './airplaneService';
import container from '@/core/repositories/container';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';

const airplaneService = container.resolve(AirplaneService);

export const getAllAirplanes = catchAsync(async (_req: Request, res: Response) => {
  const result = await airplaneService.getAll();
  sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.OK),
      data: result,
    })
  );
});

export const getPlaneDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.getSingle(req.params.airplaneId);
  sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.OK),
      data: result,
    })
  );
});

export const createNewAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.create({ ...req.body });
  sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.CREATED,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.CREATED),
      data: result,
    })
  );
});

export const updateAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.update(req.params.airplaneId, { ...req.body });
  sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.OK),
      data: result,
    })
  );
});

export const deleteAirplaneInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airplaneService.destroy(req.params.airplaneId);
  sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.OK),
      data: result,
    })
  );
});
