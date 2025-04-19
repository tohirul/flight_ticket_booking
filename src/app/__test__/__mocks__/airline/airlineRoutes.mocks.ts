import mockDb from '../database';

/**
 * Utility to create dynamic mocks for Prisma model operations (findMany, findUnique, create, update, delete).
 * This ensures flexibility and reusability in your tests.
 */
const createMockPrismaMethod = (method: string) => (result: any) =>
  (
    mockDb.client.airline[method as keyof typeof mockDb.client.airline] as jest.Mock
  ).mockResolvedValue(result);

export const mockFindMany = createMockPrismaMethod('findMany');
export const mockFindUnique = createMockPrismaMethod('findUnique');
export const mockCreate = createMockPrismaMethod('create');
export const mockUpdate = createMockPrismaMethod('update');
export const mockDelete = createMockPrismaMethod('delete');
