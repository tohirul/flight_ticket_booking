import { Airline, PrismaClient } from '@prisma/client';
import Repository from './repository';
import PrismaService from '@/database';

const prisma = PrismaService.client;

class AirlineRepository extends Repository<Airline, PrismaClient['airline']> {
  constructor() {
    super(prisma.airline);
  }
}

export default AirlineRepository;
