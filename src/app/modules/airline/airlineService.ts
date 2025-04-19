import { Airline } from '@prisma/client';
import AirlineRepository from '@/core/repositories/container/repository_airline';
import { inject, injectable } from 'tsyringe';
import ApiError from '@/core/errors/api.error';

@injectable()
export default class AirlineService {
  constructor(
    @inject('AirlineRepository')
    private airlineRepository: AirlineRepository
  ) {}

  async getAll(): Promise<Airline[]> {
    return this.airlineRepository.findAll({});
  }

  async getSingle(id: string): Promise<Airline> {
    const airline = await this.airlineRepository.findOne({ where: { id } });
    if (!airline) {
      throw new ApiError(404, 'Airline not found');
    }
    return airline;
  }

  async create(data: Airline): Promise<Airline> {
    return this.airlineRepository.create({ data });
  }

  async update(id: string, data: Partial<Airline>): Promise<Airline> {
    if (!id || !data || Object.keys(data).length === 0) {
      throw new ApiError(400, 'Invalid Input for Update');
    }
    const updatedAirline = await this.airlineRepository.update({ where: { id }, data });
    if (!updatedAirline) {
      throw new ApiError(404, 'Airline not found');
    }
    return updatedAirline;
  }

  async destroy(id: string): Promise<Airline> {
    const airline = await this.airlineRepository.findOne({ where: { id } });
    if (!airline) {
      throw new ApiError(404, 'Airline not found');
    }
    await this.airlineRepository.destroy({ where: { id } });
    return airline;
  }
}
