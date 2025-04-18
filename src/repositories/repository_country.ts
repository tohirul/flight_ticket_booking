import { Country, PrismaClient } from '@prisma/client';
import Repository from './repository';

const prisma = new PrismaClient();

class CountryRepository extends Repository<Country, PrismaClient['country']> {
  constructor() {
    super(prisma.country);
  }
}

export default CountryRepository;
