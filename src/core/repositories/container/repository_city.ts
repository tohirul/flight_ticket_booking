import PrismaService from "@/database";
import { injectable } from "tsyringe";
import Repository from "@core/repositories/repository";
import { City, PrismaClient } from "@prisma/client";

const Prisma = PrismaService.client;

@injectable()
class CityRepository extends Repository<City, PrismaClient['city']> {
  constructor() {
    super(Prisma.city);
  }

}

export default CityRepository;