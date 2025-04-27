import { Request, Response } from 'express';
import { container } from 'tsyringe';

import catchAsync from '@/core/utilities/catchAsync';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';
import sendResponse from '@/core/utilities/sendResponse';

import AirportService from './airportServices';

const airportService = container.resolve(AirportService);

export const getAll = catchAsync(async (_req: Request, res: Response) => {
  const airports = await airportService.getAll();

  if (!airports) {
    return sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.NOT_FOUND,
        success: false,

        message: HttpStatus.getMessage(HttpStatus.NOT_FOUND),
      })
    );
  } else
    return sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        response: airports.length > 0 ? 'Airports found' : 'No airports found',
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: airports,
      })
    );
});

export const getAirportDetails = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const airport = await airportService.getSingle(id);

  if (!airport) {
    return sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.NOT_FOUND,
        success: false,
        response: 'Airport not found',
        message: HttpStatus.getMessage(HttpStatus.NOT_FOUND),
      })
    );
  } else
    return sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: airport,
      })
    );
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await airportService.create(data);

  return sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.CREATED,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.CREATED),
      data: result,
    })
  );
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await airportService.update(id, req.body);

  return sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.OK),
      data: result,
    })
  );
}); 

export const destroy = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await airportService.destroy(id);

  return sendResponse(
    res,
    createResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: HttpStatus.getMessage(HttpStatus.OK),
      data: result,
    })
  );
});