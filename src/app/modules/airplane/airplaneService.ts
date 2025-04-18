import { Airplane } from '@prisma/client';
import AirplaneRepository from '@/core/repositories/container/repository_airplane';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class AirplaneService {
  constructor(
    @inject('AirplaneRepository')
    private airplaneRepository: AirplaneRepository
  ) {}

  async getAll() {
    return this.airplaneRepository.findAll({});
  }
  async getSingle(id: string) {
    return this.airplaneRepository.findOne({ where: { id } });
  }
  async create(data: Airplane) {
    return this.airplaneRepository.create({
      data,
    });
  }
  async update(id: string, data: Partial<Airplane>) {
    return this.airplaneRepository.update({ where: { id }, data });
  }
  async destroy(id: string) {
    return this.airplaneRepository.destroy({ where: { id } });
  }
}
