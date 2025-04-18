import { Airline } from '@prisma/client';
import AirlineRepository from '@/core/repositories/container/repository_airline';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class AirlineService {
  constructor(
    @inject('AirlineRepository')
    private airlineRepository: AirlineRepository
  ) {}

  async getAll() {
    return this.airlineRepository.findAll({});
  }
  async getSingle(id: string) {
    return this.airlineRepository.findOne({ where: { id } });
  }
  async create(data: Airline) {
    return this.airlineRepository.create({ data });
  }
  async update(id: string, data: Partial<Airline>) {
    return this.airlineRepository.update({ where: { id }, data });
  }
  async destroy(id: string) {
    return this.airlineRepository.destroy({ where: { id } });
  }
}
