import { PrismaPromise } from '@prisma/client';

export interface IRepository<T> {
  findAll(query?: object): Promise<T[]>;
  findOne(query: { where: object }): Promise<T | null>;
  create(query: { data: T }): Promise<T>;
  update(query: { where: object; data: Partial<T> }): Promise<T>;
  destroy(query: { where: object }): Promise<void>;
}

class Repository<
  T,
  ModelDelegate extends {
    findMany: (args?: Parameters<ModelDelegate['findMany']>[0]) => PrismaPromise<T[]>;
    findUnique: (args: Parameters<ModelDelegate['findUnique']>[0]) => PrismaPromise<T | null>;
    create: (args: Parameters<ModelDelegate['create']>[0]) => PrismaPromise<T>;
    update: (args: Parameters<ModelDelegate['update']>[0]) => PrismaPromise<T>;
    delete: (args: Parameters<ModelDelegate['delete']>[0]) => PrismaPromise<T>;
  },
> implements IRepository<T>
{
  private model: ModelDelegate;

  constructor(model: ModelDelegate) {
    this.model = model;
  }

  async findAll(query?: Parameters<ModelDelegate['findMany']>[0]): Promise<T[]> {
    return this.model.findMany(query);
  }

  async findOne(query: Parameters<ModelDelegate['findUnique']>[0]): Promise<T | null> {
    return this.model.findUnique(query);
  }

  async create(query: Parameters<ModelDelegate['create']>[0]): Promise<T> {
    return this.model.create(query);
  }

  async update(query: Parameters<ModelDelegate['update']>[0]): Promise<T> {
    return this.model.update(query);
  }

  async destroy(query: Parameters<ModelDelegate['delete']>[0]): Promise<void> {
    await this.model.delete(query);
  }
}

export default Repository;
