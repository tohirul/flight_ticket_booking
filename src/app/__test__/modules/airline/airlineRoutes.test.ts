import {
  mockCreate,
  mockDelete,
  mockFindMany,
  mockFindUnique,
  mockUpdate,
} from '../../__mocks__/airline/airlineRoutes.mocks';
import {
  expectResponseToMatch,
  expectAirlineFields,
  expectFieldsToMatch,
} from '../../helpers/assertions/airlineAssertions';
import { Airline } from '../../../../core/types/schema.types';
import {
  deleteAirlineById,
  getAirlineById,
  getAirlines,
  postAirline,
  putAirlineById,
} from '../../helpers/requests/airlineRequests';

describe('Airline Routes (Mocked Prisma)', () => {
  let createdAirlineId: string;
  let now: Date;

  const newAirlineData = {
    name: 'Cloud One',
    logo: 'https://example.com/logos/cloudfly.png',
    countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
  };

  const updatedData = {
    name: 'Qatar Airways',
    logo: 'https://example.com/logos/qatar.png',
    countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
  };

  beforeAll(() => {
    createdAirlineId = '';
  });

  beforeEach(() => {
    jest.clearAllMocks();
    now = new Date();
  });

  afterAll(() => {
    createdAirlineId = '';
  });

  describe('GET /api/airlines', () => {
    it('should return a list of airlines', async () => {
      const sampleAirline: Airline = {
        id: 'test-airline-id',
        name: 'Sample Airline',
        logo: 'https://example.com/logo.png',
        countryId: 'sample-country-id',
        createdAt: now,
        updatedAt: now,
      };

      mockFindMany([sampleAirline]);

      const response = await getAirlines();

      expectResponseToMatch<Airline[]>(response.body, {
        statusCode: 200,
        success: true,
        message: 'Airlines retrieved successfully',
      });
      expect(Array.isArray(response.body.data)).toBe(true);
      expectAirlineFields(response.body.data[0]);
    });
  });

  describe('POST /api/airlines', () => {
    it('should return 400 when required fields are missing', async () => {
      const response = await postAirline({ name: 'Missing Logo and CountryId' });

      expectResponseToMatch(response.body, {
        statusCode: 400,
        success: false,
        message: 'Validation Error',
      });
    });

    it('should create a new airline', async () => {
      const createdAirline = {
        ...newAirlineData,
        id: 'created-airline-id',
        createdAt: now,
        updatedAt: now,
      };

      mockCreate(createdAirline);

      const response = await postAirline(newAirlineData);

      createdAirlineId = response.body.data.id;

      expectResponseToMatch<Airline>(response.body, {
        statusCode: 200,
        success: true,
        message: 'Airline created successfully',
      });
      expectAirlineFields(response.body.data);
      expectFieldsToMatch(response.body.data, newAirlineData);
    });
  });

  describe('GET /api/airlines/:airlineId', () => {
    it('should return the matching airline', async () => {
      mockFindUnique({
        id: createdAirlineId,
        ...newAirlineData,
        createdAt: now,
        updatedAt: now,
      });

      const response = await getAirlineById(createdAirlineId);

      expectResponseToMatch<Airline>(response.body, {
        statusCode: 200,
        success: true,
        message: 'Airline retrieved successfully',
      });
      expectAirlineFields(response.body.data);
      expectFieldsToMatch(response.body.data, { id: createdAirlineId });
    });
  });

  describe('PUT /api/airlines/:airlineId', () => {
    it('should update the matching airline', async () => {
      mockUpdate({
        ...updatedData,
        id: createdAirlineId,
        createdAt: now,
        updatedAt: now,
      });

      const response = await putAirlineById(createdAirlineId, updatedData);

      expectResponseToMatch<Airline>(response.body, {
        statusCode: 200,
        success: true,
        message: 'Airline updated successfully',
      });
      expectAirlineFields(response.body.data);
      expectFieldsToMatch(response.body.data, { id: createdAirlineId, ...updatedData });
    });

    it('should return the updated airline', async () => {
      mockFindUnique({
        id: createdAirlineId,
        ...updatedData,
        createdAt: now,
        updatedAt: now,
      });

      const response = await getAirlineById(createdAirlineId);

      expectResponseToMatch<Airline>(response.body, {
        statusCode: 200,
        success: true,
        message: 'Airline retrieved successfully',
      });
      expectAirlineFields(response.body.data);
      expectFieldsToMatch(response.body.data, { id: createdAirlineId, ...updatedData });
    });
  });

  describe('DELETE /api/airlines/:airlineId', () => {
    it('should delete the airline', async () => {
      mockDelete({
        id: createdAirlineId,
        ...updatedData,
        createdAt: now,
        updatedAt: now,
      });

      const response = await deleteAirlineById(createdAirlineId);

      expectResponseToMatch(response.body, {
        statusCode: 200,
        success: true,
        message: 'Airline deleted successfully',
      });
      expect(response.body.data).toBeNull();
    });

    it('should return not found after deletion', async () => {
      mockFindUnique(null);

      const response = await getAirlineById(createdAirlineId);

      expectResponseToMatch(response.body, {
        statusCode: 404,
        success: false,
        message: 'Airline not found',
      });
    });
  });
});
