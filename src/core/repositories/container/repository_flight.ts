import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';

import type { Flight, PrismaClient } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class FlightRepository extends Repository<Flight, PrismaClient['flight']> {
  constructor() {
    super(Prisma.flight);
  }
}

export default FlightRepository;
