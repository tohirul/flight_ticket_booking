import { ApiResponse } from '@/core/types/common.types';
import { Airline } from '@/core/types/schema.types';

export function expectAirlineFields(airline: Airline) {
  const fields = ['id', 'name', 'logo', 'countryId', 'createdAt', 'updatedAt'];
  fields.forEach((field) => {
    expect(airline).toHaveProperty(field);
  });
}

export function expectFieldsToMatch(actual: Partial<Airline>, expected: Record<string, any>) {
  Object.entries(expected).forEach(([key, value]) => {
    expect(actual).toHaveProperty(key, value);
  });
}

export function expectResponseToMatch<T>(
  response: ApiResponse<T>,
  expected: { success: boolean; statusCode: number; message: string }
) {
  expect(response.statusCode).toBe(expected.statusCode);
  expect(response.success).toBe(expected.success);
  expect(response.message).toBe(expected.message);
}
