import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import { PrismaClient, State } from '@generated/@prisma/client';

import Repository from '../repository';

const Prisma = PrismaService.client;

@injectable()
class StateRepository extends Repository<State, PrismaClient['state']> {
  constructor() {
    super(Prisma.state);
  }
}
export default StateRepository;
