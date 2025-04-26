import { Request, Response } from 'express';

import container from '@/core/repositories/container';
import catchAsync from '@/core/utilities/catchAsync';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';
import sendResponse from '@/core/utilities/sendResponse';

import CityService from './cityServices';

const cityService = container.resolve(CityService);

export const getAllCities = catchAsync(async (_req: Request, res: Response) => {
  const result = await cityService.getAll();
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