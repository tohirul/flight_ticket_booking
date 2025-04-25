import { Request, Response } from 'express';
import catchAsync from '@core/utilities/catchAsync';
import sendResponse from '@core/utilities/sendResponse';
import CountryService from './countryService';
import container from '@/core/repositories/repository_container';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';

const countryService = container.resolve(CountryService);

export const getAllCountries = catchAsync(async (_req: Request, res: Response) => {
  const result = await countryService.getAll();
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

export const getCountryDetails = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.getSingle(req.params.countryId);
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

export const createNewCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.create({ ...req.body });
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

export const updateCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.update(req.params.countryId, { ...req.body });
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

export const deleteCountryInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await countryService.destroy(req.params.countryId);
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
