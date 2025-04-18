import { injectable } from 'tsyringe';
import { Airplane, PrismaClient } from '@prisma/client';
import Repository from './repository';
import PrismaService from '@/database';

const prisma = PrismaService.client;

@injectable()
class AirplaneRepository extends Repository<Airplane, PrismaClient['airplane']> {
  constructor() {
    super(prisma.airplane);
  }

  async findByManufacturer(manufacturer: string): Promise<Airplane[]> {
    return this.findAll({ where: { manufacturer } });
  }
}

export default AirplaneRepository;
