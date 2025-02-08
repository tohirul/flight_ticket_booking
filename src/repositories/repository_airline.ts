import { Airline, PrismaClient } from '@prisma/client';
import Repository from './repository';

const prisma = new PrismaClient();

class AirlineRepository extends Repository<Airline, PrismaClient['airline']> {
  constructor() {
    super(prisma.airline);
  }
}

export default AirlineRepository;
