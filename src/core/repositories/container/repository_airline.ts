import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';
import { Airline, PrismaClient } from '@generated/@prisma/client';

const prisma = PrismaService.client;

@injectable()
class AirlineRepository extends Repository<Airline, PrismaClient['airline']> {
  constructor() {
    super(prisma.airline);
  }
}

export default AirlineRepository;
