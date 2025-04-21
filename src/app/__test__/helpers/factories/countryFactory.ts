import { faker } from '@faker-js/faker';
import { Country } from '../../../../core/types/schema.types';

export const generateCountry = (overrides: Partial<Country> = {}): Country => {
  return {
    id: faker.string.uuid(),
    name: faker.location.country(),
    countryCode: faker.location.countryCode(),
    ...overrides,
  };
};

export const generateCountries = (count = 5): Country[] => {
  return Array.from({ length: count }, () => generateCountry());
};
