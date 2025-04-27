import { inject, injectable } from 'tsyringe';

import AirportRepository from '@/core/repositories/container/repository_airport';

import type { Airport } from '@generated/@prisma/client';

@injectable()
export default class AirportService {
  constructor(
    @inject('AirportRepository')
    private airportRepository: AirportRepository
  ) {}
  async getAll(): Promise<any[]> {
    return this.airportRepository.findAll({});
  }
  async getSingle(id: string): Promise<any> {
    return await this.airportRepository.findOne({ where: { id } });
    
    
  }
  async create(data: Airport): Promise<Airport> {
    return this.airportRepository.create({ data });
  }
  async update(id: string, data: Partial<Airport>): Promise<Airport> {
    if (!id || !data || Object.keys(data).length === 0) {
      throw new Error('Invalid Input for Update');
    }
    const updatedAirport = await this.airportRepository.update({ where: { id }, data });
    if (!updatedAirport) {
      throw new Error('Airport not updated');
    }
    return updatedAirport;
  }
  async destroy(id: string): Promise<Airport> {
    const airport = await this.airportRepository.findOne({ where: { id } });
    if (!airport) {
      throw new Error('Airport not found');
    }
    await this.airportRepository.destroy({ where: { id } });
    return airport;
  }
}
