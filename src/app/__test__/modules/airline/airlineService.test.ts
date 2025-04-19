import { generateAirline, generateAirlines } from './../../helpers/factories/airlineFactory';
import AirlineRepository from '../../../../core/repositories/container/repository_airline';
import AirlineService from '../../../modules/airline/airlineService';
import {
  mockCreate,
  mockFindAll,
  mockFindOne,
  mockUpdate,
} from '../../__mocks__/airline/airlineService.mocks';
import { expectAirlineResult } from '../../helpers/assertions/airlineAssertions';
import { Airline } from '../../../../core/types/schema.types';
import ApiError from '../../../../core/errors/api.error';

jest.mock('../../../../core/repositories/container/repository_airline');

describe('AirlineService', () => {
  let airlineService: AirlineService;
  let airlineRepositoryMock: jest.Mocked<AirlineRepository>;

  beforeEach(() => {
    airlineRepositoryMock = new AirlineRepository() as jest.Mocked<AirlineRepository>;
    airlineService = new AirlineService(airlineRepositoryMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/v1/airlines', () => {
    it('should call findAll on airlineRepository', async () => {
      const mockData = generateAirlines(10);
      mockFindAll(airlineRepositoryMock, mockData);

      const result = await airlineService.getAll();
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(mockData?.length);
      expect(result).toEqual(mockData);
      for (let i = 0; i < result.length; i++) {
        expectAirlineResult(result[i], mockData[i] as Airline);
      }
      expect(airlineRepositoryMock.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('GET /api/v1/airlines/:id', () => {
    it('should call findOne on airlineRepository', async () => {
      const mockData: Airline = generateAirline() as Airline;
      mockFindOne(airlineRepositoryMock, mockData);
      const result: Airline = (await airlineService.getSingle(mockData.id)) as Airline;
      expectAirlineResult(result, mockData);
      expect(airlineRepositoryMock.findOne).toHaveBeenCalledTimes(1);
    });
    it('should throw an error if airline is not found', async () => {
      const mockData: Airline = generateAirline() as Airline;
      const message = 'Airline not found';
      airlineRepositoryMock.findOne.mockImplementation(() => {
        throw new Error(message);
      });
      await expect(airlineService.getSingle(mockData.id)).rejects.toThrow(message);
      expect(airlineRepositoryMock.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('POST /api/v1/airlines', () => {
    it('should call create on airlineRepository', async () => {
      const mockData: Airline = generateAirline() as Airline;
      mockCreate(airlineRepositoryMock, mockData);
      const result: Airline = await airlineService.create(mockData);
      expectAirlineResult(result, mockData);
      expect(airlineRepositoryMock.create).toHaveBeenCalledTimes(1);
    });
    it('should throw an error if airline is not found', async () => {
      const mockData: Airline = generateAirline() as Airline;
      const message = 'Airline not found';
      airlineRepositoryMock.create.mockImplementation(() => {
        throw new Error(message);
      });
      await expect(airlineService.create(mockData)).rejects.toThrow(message);
      expect(airlineRepositoryMock.create).toHaveBeenCalledTimes(1);
    });
    // write test for invalid input;
    it('should throw an error if repository throws Invalid Input error during creation', async () => {
      const mockData: Airline = generateAirline() as Airline;
      const message = 'Invalid Input';

      airlineRepositoryMock.create.mockRejectedValueOnce(new Error(message));

      await expect(airlineService.create(mockData)).rejects.toThrow(message);
      expect(airlineRepositoryMock.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('PUT /api/v1/airlines/:id', () => {
    it('should call update on airlineRepository', async () => {
      const mockData: Airline = generateAirline() as Airline;
      mockUpdate(airlineRepositoryMock, mockData);

      const result: Airline = await airlineService.update(mockData.id, mockData);
      expectAirlineResult(result, mockData);
      expect(airlineRepositoryMock.update).toHaveBeenCalledTimes(1);
    });
    it('should throw an error if airline is not found', async () => {
      const mockData: Airline = generateAirline() as Airline;
      const message = 'Airline not found';
      airlineRepositoryMock.update.mockImplementation(() => {
        throw new Error(message);
      });
      await expect(airlineService.update(mockData.id, mockData)).rejects.toThrow(message);
      expect(airlineRepositoryMock.update).toHaveBeenCalledTimes(1);
    });

    it('should immediately throw "Invalid Input" if id or data is invalid, without calling repository', async () => {
      const invalidInputs = [
        { id: '', data: generateAirline() },
        { id: 'valid-id', data: {} as Airline },
        { id: '', data: {} as Airline },
      ];

      for (const { id, data } of invalidInputs) {
        await expect(airlineService.update(id, data)).rejects.toThrow('Invalid Input for Update');
      }

      expect(airlineRepositoryMock.update).not.toHaveBeenCalled();
    });
  });
  describe('DELETE /api/v1/airlines/:id', () => {
    it('should call destroy on airlineRepository', async () => {
      const mockData: Airline = generateAirline() as Airline;

      airlineRepositoryMock.findOne.mockResolvedValue(mockData);
      airlineRepositoryMock.destroy.mockResolvedValue(undefined);

      const result = await airlineService.destroy(mockData.id);

      expect(result).toEqual(mockData);
      expect(airlineRepositoryMock.destroy).toHaveBeenCalledTimes(1);
    });

    it('should throw an ApiError if airline is not found', async () => {
      const mockData: Airline = generateAirline() as Airline;
      const message = 'Airline not found';
      const statusCode = 404;

      airlineRepositoryMock.findOne.mockResolvedValue(null);

      await expect(airlineService.destroy(mockData.id)).rejects.toThrowError(
        new ApiError(statusCode, message)
      );

      expect(airlineRepositoryMock.destroy).toHaveBeenCalledTimes(0);
    });
  });
});
