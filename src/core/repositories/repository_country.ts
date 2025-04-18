import { Country, PrismaClient } from '@prisma/client';
import Repository from './repository';
import PrismaService from '@/database';

const prisma = PrismaService.client;

class CountryRepository extends Repository<Country, PrismaClient['country']> {
  constructor() {
    super(prisma.country);
  }
}

export default CountryRepository;
