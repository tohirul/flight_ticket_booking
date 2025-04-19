// helpers/factories/airlineFactory.ts
import { faker } from '@faker-js/faker';
import { Airline } from '../../../../core/types/schema.types';

export const generateAirline = (): Partial<Airline> => {
  return {
    name: faker.company.name(),
    logo: faker.image.url(),
    countryId: faker.string.uuid(),
  };
};
