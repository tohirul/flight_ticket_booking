import { Country } from '@prisma/client';
import repo from '@core/repositories';

export const getAll = async () => {
  return await repo.CountryRepository.findAll({});
};

export const getSingle = async (id: string) => {
  return await repo.CountryRepository.findOne({ where: { id } });
};

export const create = async (data: Country) => {
  return await repo.CountryRepository.create({ data });
};

export const update = async (id: string, data: Partial<Country>) => {
  return await repo.CountryRepository.update({ where: { id }, data });
};

export const destroy = async (id: string) => {
  return await repo.CountryRepository.destroy({ where: { id } });
};
