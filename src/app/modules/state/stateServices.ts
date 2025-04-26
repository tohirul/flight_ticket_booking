import { inject, injectable } from 'tsyringe';

import StateRepository from '@/core/repositories/container/repository_state';
import { State } from '@generated/@prisma/client';

@injectable()
export default class StateService {
  constructor(
    @inject('StateRepository')
    private stateRepository: StateRepository
  ) {}
  async getAll() {
    return this.stateRepository.findAll({});
  }
  async getSingle(id: string) {
    return this.stateRepository.findOne({ where: { id } });
  }

  async create(data: State) {
    return this.stateRepository.create({
      data,
    });
  }
  async update(id: string, data: State) {
    return this.stateRepository.update({
      where: { id },
      data,
    });
  }

  async destroy(id: string) {
    return this.stateRepository.destroy({ where: { id } });
  }
}
