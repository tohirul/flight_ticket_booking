import { Airplane } from '@prisma/client';
import repo from '@/repositories';

export const getAll = async () => {
  return await repo.AirplaneRepository.findAll({});
};

export const getSingle = async (id: string) => {
  return await repo.AirplaneRepository.findOne({ where: { id } });
};

export const create = async (data: Airplane) => {
  return await repo.AirplaneRepository.create({ data });
};

export const update = async (id: string, data: Partial<Airplane>) => {
  return await repo.AirplaneRepository.update({ where: { id }, data });
};

export const destroy = async (id: string) => {
  return await repo.AirplaneRepository.destroy({ where: { id } });
};
