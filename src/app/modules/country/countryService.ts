import { Country } from '@prisma/client';
import CountryRepository from '@/core/repositories/container/repository_country';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class CountryService {
  constructor(
    @inject('CountryRepository')
    private countryRepository: CountryRepository
  ) {}

  async getAll() {
    return this.countryRepository.findAll({});
  }
  async getSingle(id: string) {
    return this.countryRepository.findOne({ where: { id } });
  }
  async create(data: Country) {
    return this.countryRepository.create({
      data,
    });
  }
  async update(id: string, data: Partial<Country>) {
    return this.countryRepository.update({ where: { id }, data });
  }
  async destroy(id: string) {
    return this.countryRepository.destroy({ where: { id } });
  }
}
