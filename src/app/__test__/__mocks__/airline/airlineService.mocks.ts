import AirlineRepository from '../../../../core/repositories/container/repository_airline';

/**
 * Utility to create dynamic mocks for AirlineService operations.
 */
const createMockServiceMethod = (
  repository: jest.Mocked<AirlineRepository>,
  method: keyof AirlineRepository
) => {
  return (result: any) => {
    (repository[method] as jest.Mock).mockResolvedValue(result);
  };
};

export const mockFindAll = (repository: jest.Mocked<AirlineRepository>, result: any) =>
  createMockServiceMethod(repository, 'findAll')(result);

export const mockFindOne = (repository: jest.Mocked<AirlineRepository>, result: any) =>
  createMockServiceMethod(repository, 'findOne')(result);

export const mockCreate = (repository: jest.Mocked<AirlineRepository>, result: any) =>
  createMockServiceMethod(repository, 'create')(result);

export const mockUpdate = (repository: jest.Mocked<AirlineRepository>, result: any) =>
  createMockServiceMethod(repository, 'update')(result);

export const mockDestroy = (repository: jest.Mocked<AirlineRepository>, result: any) =>
  createMockServiceMethod(repository, 'destroy')(result);
