import { injectable } from 'tsyringe';
import { Country, PrismaClient } from '@generated/@prisma/client';
import Repository from '@core/repositories/repository';
import PrismaService from '@/database';

const prisma = PrismaService.client;

@injectable()
class CountryRepository extends Repository<Country, PrismaClient['country']> {
  constructor() {
    super(prisma.country);
  }
}

export default CountryRepository;
