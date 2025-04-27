import { injectable } from 'tsyringe';

import PrismaService from '@/database';

import Repository from '../repository';

import type { Airport, PrismaClient } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class AirportRepository extends Repository<Airport, PrismaClient['airport']> {
  constructor() {
    super(Prisma.airport);
  }
}

export default AirportRepository;
