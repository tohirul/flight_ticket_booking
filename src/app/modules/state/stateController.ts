import { Request, Response } from 'express';
import { container } from 'tsyringe';

import catchAsync from '@/core/utilities/catchAsync';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';
import sendResponse from '@/core/utilities/sendResponse';

import StateService from './stateServices';

const stateService = container.resolve(StateService);

export const getAllStates = catchAsync(async (_req: Request, res: Response) => {
  const result = await stateService.getAll();
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

export const getStateById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await stateService.getSingle(id);
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

export const createState = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await stateService.create(data);
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


export const updateState = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await stateService.update(id, data);
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

export const deleteState = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await stateService.destroy(id);
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