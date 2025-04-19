import { NextFunction, Request, Response } from 'express';

import sendResponse from '../../../../core/utilities/sendResponse';
import * as AirlineController from '../../../modules/airline/airlineController';
import {
  mockCreate,
  mockDestroy,
  mockFindAll,
  mockFindOne,
  mockUpdate,
} from '../../__mocks__/airline/airlineController.mocks';

jest.mock('../../../../core/utilities/sendResponse');
jest.mock('../../../modules/airline/airlineService');

describe('AirlineController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: Partial<NextFunction>;

  beforeEach(() => {
    req = {};
    res = {} as Response;
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/v1/airlines', () => {
    it('should fetch all airlines data and call sendResponse with the correct arguments', async () => {
      const mockData = mockFindAll();

      await AirlineController.getAllAirlines(req as Request, res as Response, next as NextFunction);

      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airlines retrieved successfully',
        data: mockData,
      });
    });
  });

  describe('GET /api/v1/airlines/:id', () => {
    it('should fetch a single airline data and call sendResponse with the correct arguments', async () => {
      const mockData = mockFindOne();
      req.params = { id: mockData.id };

      await AirlineController.getPlaneDetails(
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline retrieved successfully',
        data: mockData,
      });
    });
  });

  describe('POST /api/v1/airlines', () => {
    it('should create a new airline and call sendResponse with the correct arguments', async () => {
      const mockData = mockCreate();
      req.body = {
        id: mockData.id,
        name: mockData.name,
        countryId: mockData.countryId,
        logo: mockData.logo,
        createdAt: mockData.createdAt,
        updatedAt: mockData.updatedAt,
      };

      await AirlineController.createNewAirlineInfo(
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline created successfully',
        data: mockData,
      });
    });
  });

  describe('PUT /api/v1/airlines/:id', () => {
    it('should update an existing airline and call sendResponse with the correct arguments', async () => {
      const mockData = mockUpdate();
      req.params = { id: mockData.id };
      req.body = {
        name: mockData.name,
        countryId: mockData.countryId,
        logo: mockData.logo,
      };

      await AirlineController.updateAirlineInfo(
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline updated successfully',
        data: mockData,
      });
    });
  });

  describe('DELETE /api/v1/airlines/:id', () => {
    it('should delete an existing airline and call sendResponse with the correct arguments', async () => {
      const mockData = mockDestroy();
      req.params = { id: mockData.id };

      await AirlineController.deleteAirlineInfo(
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline deleted successfully',
        data: mockData,
      });
    });
  });
});
