import { faker } from '@faker-js/faker';
import { Airline } from '../../../../core/types/schema.types';

export const generateAirline = (overrides: Partial<Airline> = {}): Airline => {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    logo: faker.image.url(),
    countryId: faker.string.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    ...overrides,
  };
};
export const generateAirlines = (count = 5): Airline[] => {
  return Array.from({ length: count }, () => generateAirline());
};
