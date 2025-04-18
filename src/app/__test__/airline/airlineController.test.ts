import * as AirlineController from '../../modules/airline/airlineController';
import AirlineService from '../../modules/airline/airlineService';
import sendResponse from '../../../core/utilities/sendResponse';
import { NextFunction, Request, Response } from 'express';

jest.mock('../../../core/utilities/sendResponse');
jest.mock('../../modules/airline/airlineService');

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

  describe('getAllAirlines', () => {
    it('should fetch all airlines data and call sendResponse with the correct arguments', async () => {
      const result = [
        {
          id: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89',
          name: 'Fly Emirates',
          countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
          logo: 'https://example.com/logos/cloudfly.png',
          createdAt: new Date('2025-04-18T18:43:44.687Z'),
          updatedAt: new Date('2025-04-18T18:43:44.687Z'),
        },
        {
          id: '273b5486-41e0-4078-ab49-69c5364010bc',
          name: 'Qatar Airways',
          countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
          logo: 'https://example.com/logos/cloudfly.png',
          createdAt: new Date('2025-04-18T08:44:09.022Z'),
          updatedAt: new Date('2025-04-18T18:44:28.995Z'),
        },
      ];
      (AirlineService.prototype.getAll as jest.Mock).mockResolvedValue(result);
      await AirlineController.getAllAirlines(req as Request, res as Response, next as NextFunction);
      expect(AirlineService.prototype.getAll).toHaveBeenCalled();
      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airlines retrieved successfully',
        data: result,
      });
    });
  });
  describe('getPlaneDetails', () => {
    it('should fetch single airline data and call sendResponse with the correct arguments', async () => {
      const result = {
        id: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89',
        name: 'Fly Emirates',
        countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
        logo: 'https://example.com/logos/cloudfly.png',
        createdAt: new Date('2025-04-18T18:43:44.687Z'),
        updatedAt: new Date('2025-04-18T18:43:44.687Z'),
      };
      (AirlineService.prototype.getSingle as jest.Mock).mockResolvedValue(result);
      req.params = { airlineId: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89' };
      await AirlineController.getPlaneDetails(
        req as Request,
        res as Response,
        next as NextFunction
      );
      expect(AirlineService.prototype.getSingle).toHaveBeenCalledWith(
        '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89'
      );
      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline retrieved successfully',
        data: result,
      });
    });
  });
  describe('createNewAirlineInfo', () => {
    it('should create new airline data and call sendResponse with the correct arguments', async () => {
      const result = {
        id: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89',
        name: 'Fly Emirates',
        countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
        logo: 'https://example.com/logos/cloudfly.png',
        createdAt: new Date('2025-04-18T18:43:44.687Z'),
        updatedAt: new Date('2025-04-18T18:43:44.687Z'),
      };
      (AirlineService.prototype.create as jest.Mock).mockResolvedValue(result);
      req.body = {
        name: 'Fly Emirates',
        countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
        logo: 'https://example.com/logos/cloudfly.png',
        createdAt: new Date('2025-04-18T18:43:44.687Z'),
        updatedAt: new Date('2025-04-18T18:43:44.687Z'),
      };
      await AirlineController.createNewAirlineInfo(
        req as Request,
        res as Response,
        next as NextFunction
      );
      expect(AirlineService.prototype.create).toHaveBeenCalledWith({
        name: 'Fly Emirates',
        countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
        logo: 'https://example.com/logos/cloudfly.png',
        createdAt: new Date('2025-04-18T18:43:44.687Z'),
        updatedAt: new Date('2025-04-18T18:43:44.687Z'),
      });
      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline created successfully',
        data: result,
      });
    });
  });
  describe('updateAirlineInfo', () => {
    it('should update airline data and call sendResponse with the correct arguments', async () => {
      const result = {
        id: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89',
        name: 'Fly Away',
        countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
        logo: 'https://example.com/logos/cloudfly.png',
        createdAt: new Date('2025-04-18T18:43:44.687Z'),
        updatedAt: new Date('2025-04-18T18:43:44.687Z'),
      };
      (AirlineService.prototype.update as jest.Mock).mockResolvedValue(result);
      req.params = { airlineId: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89' };
      req.body = {
        name: 'Fly Away',
        countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
        logo: 'https://example.com/logos/cloudfly.png',
        createdAt: new Date('2025-04-18T18:43:44.687Z'),
        updatedAt: new Date('2025-04-18T18:43:44.687Z'),
      };
      await AirlineController.updateAirlineInfo(
        req as Request,
        res as Response,
        next as NextFunction
      );
      expect(AirlineService.prototype.update).toHaveBeenCalledWith(
        '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89',
        {
          name: 'Fly Away',
          countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
          logo: 'https://example.com/logos/cloudfly.png',
          createdAt: new Date('2025-04-18T18:43:44.687Z'),
          updatedAt: new Date('2025-04-18T18:43:44.687Z'),
        }
      );
      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline updated successfully',
        data: result,
      });
    });
  });
  describe('deleteAirlineInfo', () => {
    it('should delete airline data and call sendResponse with the correct arguments', async () => {
      (AirlineService.prototype.destroy as jest.Mock).mockResolvedValue(undefined);
      req.params = { airlineId: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89' };
      await AirlineController.deleteAirlineInfo(
        req as Request,
        res as Response,
        next as NextFunction
      );
      expect(AirlineService.prototype.destroy).toHaveBeenCalledWith(
        '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89'
      );
      expect(sendResponse).toHaveBeenCalledWith(res, {
        statusCode: 200,
        success: true,
        message: 'Airline deleted successfully',
        data: undefined,
      });
    });
  });
});
