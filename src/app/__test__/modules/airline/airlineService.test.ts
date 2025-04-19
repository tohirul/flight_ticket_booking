import AirlineService from '../../../modules/airline/airlineService';
import AirlineRepository from '../../../../core/repositories/container/repository_airline';

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
  it('should call findAll on airlineRepository', async () => {
    const mockData = [
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
    airlineRepositoryMock.findAll.mockResolvedValue(mockData);

    const result = await airlineService.getAll();
    expect(result).toEqual(mockData);
    expect(airlineRepositoryMock.findAll).toHaveBeenCalledTimes(1);
  });
  it('should call findOne on airlineRepository', async () => {
    const mockData = {
      id: '225c4a3d-afd4-43f8-a1c5-9b39ee1edb89',
      name: 'Fly Emirates',
      countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
      logo: 'https://example.com/logos/cloudfly.png',
      createdAt: new Date('2025-04-18T18:43:44.687Z'),
      updatedAt: new Date('2025-04-18T18:43:44.687Z'),
    };
    airlineRepositoryMock.findOne.mockResolvedValue(mockData);

    const result = await airlineService.getSingle('225c4a3d-afd4-43f8-a1c5-9b39ee1edb89');
    expect(result).toEqual(mockData);
    expect(airlineRepositoryMock.findOne).toHaveBeenCalledTimes(1);
  });

  it('should call create on airlineRepository', async () => {
    const mockData = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Fly Emirates',
      countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
      logo: 'https://example.com/logos/cloudfly.png',
      createdAt: new Date('2025-04-18T18:43:44.687Z'),
      updatedAt: new Date('2025-04-18T18:43:44.687Z'),
    };
    airlineRepositoryMock.create.mockResolvedValue(mockData);
    const result = await airlineService.create(mockData);
    expect(result).toEqual(mockData);
  });
  it('should call update on airlineRepository', async () => {
    const mockData = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Fly Emirates',
      countryId: '27bf855f-8236-4d88-b0a9-85299e12085e',
      logo: 'https://example.com/logos/cloudfly.png',
      createdAt: new Date('2025-04-18T18:43:44.687Z'),
      updatedAt: new Date('2025-04-18T18:43:44.687Z'),
    };
    airlineRepositoryMock.update.mockResolvedValue(mockData);
    const result = await airlineService.update('123e4567-e89b-12d3-a456-426614174000', mockData);
    expect(result).toEqual(mockData);
  });

  it('should call destroy on airlineRepository', async () => {
    airlineRepositoryMock.destroy.mockResolvedValue(undefined);
    const result = await airlineService.destroy('123e4567-e89b-12d3-a456-426614174000');
    expect(result).toEqual(undefined);
  });
});
