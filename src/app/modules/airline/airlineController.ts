import { Request, Response } from 'express';

import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import AirlineService from './airlineService';
import container from '@/core/repositories/repository_container';
import HttpStatus from '@/core/utilities/httpStatus';
import { Airline } from '@/core/types/schema.types';
import { createResponse } from '@/core/utilities/createResponse';

const airlineService = container.resolve(AirlineService);

export const getAllAirlines = catchAsync(async (_req: Request, res: Response) => {
  const result = await airlineService.getAll();
  sendResponse<Airline[]>(
    res,
    createResponse({
      success: true,
      statusCode: HttpStatus.OK,
      message: HttpStatus.getMessage(HttpStatus.OK),
      data: result,
    })
  );
});

export const getPlaneDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await airlineService.getSingle(req.params.airlineId);
  if (!result)
    sendResponse<Airline>(
      res,
      createResponse({
        success: false,
        statusCode: HttpStatus.NOT_FOUND,
        message: HttpStatus.getMessage(HttpStatus.NOT_FOUND),
        response: 'Airline not found',
      })
    );
  else
    sendResponse(
      res,
      createResponse({
        success: true,
        data: result,
        statusCode: HttpStatus.OK,
        message: HttpStatus.getMessage(HttpStatus.OK),
      })
    );
});

export const createNewAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airlineService.create({ ...req.body });

  if (!result)
    return sendResponse(
      res,
      createResponse({
        success: false,
        statusCode: HttpStatus.BAD_REQUEST,
        message: HttpStatus.getMessage(HttpStatus.BAD_REQUEST),
        response: 'Something went wrong while creating the airline',
      })
    );
  else
    return sendResponse<Airline>(
      res,
      createResponse({
        success: true,
        data: result,
        statusCode: HttpStatus.CREATED,
        message: HttpStatus.getMessage(HttpStatus.CREATED),
      })
    );
});

export const updateAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airlineService.update(req.params.airlineId, { ...req.body });
  sendResponse<Airline>(
    res,
    createResponse({
      success: true,
      data: result,
      statusCode: HttpStatus.OK,
      message: HttpStatus.getMessage(HttpStatus.OK),
    })
  );
});

export const deleteAirlineInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await airlineService.destroy(req.params.airlineId);
  sendResponse<Airline>(
    res,
    createResponse({
      success: true,
      data: result,
      statusCode: HttpStatus.OK,
      message: HttpStatus.getMessage(HttpStatus.OK),
    })
  );
});
