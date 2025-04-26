import { inject, injectable } from 'tsyringe';

import CityRepository from '@/core/repositories/container/repository_city';
import { City } from '@generated/@prisma/client';

@injectable()
export default class CityService {
    constructor(
    @inject('CityRepository')
    private cityRepository: CityRepository
    ){}
    async getAll() {
        return this.cityRepository.findAll({});
    }
    async create(data: City) {
        return this.cityRepository.create({
            data,
        });
    }
    async update(id: string, data: City) {
        return this.cityRepository.update({
            where: { id },
            data,
        });
    }
}