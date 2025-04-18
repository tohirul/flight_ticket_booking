import { Airline } from '@prisma/client';
import repo from '@/repositories';

export const getAll = async () => {
  return await repo.AirlineRepository.findAll({});
};

export const getSingle = async (id: string) => {
  return await repo.AirlineRepository.findOne({ where: { id } });
};

export const create = async (data: Airline) => {
  return await repo.AirlineRepository.create({ data });
};

export const update = async (id: string, data: Partial<Airline>) => {
  return await repo.AirlineRepository.update({ where: { id }, data });
};

export const destroy = async (id: string) => {
  return await repo.AirlineRepository.destroy({ where: { id } });
};
