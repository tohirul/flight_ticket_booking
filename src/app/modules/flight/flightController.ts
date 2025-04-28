
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import catchAsync from '@/core/utilities/catchAsync';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';
import sendResponse from '@/core/utilities/sendResponse';

import FlightService from './flightServices';

const flightService = container.resolve(FlightService);

export const getAllFlights = catchAsync(async (_req: Request, res: Response) => {
    const flights = await flightService.getAll();
    return sendResponse(res, createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: flights,
    }))
})

export const getFlightById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const flight = await flightService.getSingle(id);
    return sendResponse(res, createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: flight,
    }))
})

export const createFlight = catchAsync(async (req: Request, res: Response) => {
    const flightData = req.body;
    const flight = await flightService.create(flightData);
    return sendResponse(res, createResponse({
        statusCode: HttpStatus.CREATED,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.CREATED),
        data: flight,
    }))
})

export const updateFlight = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const flightData = req.body;
    const flight = await flightService.update(id, flightData);
    return sendResponse(res, createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: flight,
    }))
})

export const deleteFlight = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    await flightService.destroy(id);
    return sendResponse(res, createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: null,
    }))
})          