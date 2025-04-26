import { injectable } from 'tsyringe';
import { Airline, PrismaClient } from '@prisma/client';
import Repository from '@core/repositories/repository'; 
import PrismaService from '@/database';

const prisma = PrismaService.client;

@injectable()
class AirlineRepository extends Repository<Airline, PrismaClient['airline']> {
  constructor() {
    super(prisma.airline);
  }
}

export default AirlineRepository;
