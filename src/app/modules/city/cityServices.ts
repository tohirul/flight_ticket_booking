import CityRepository from "@/core/repositories/container/repository_city";
import { inject, injectable } from "tsyringe";


@injectable()
export default class CityService {
    constructor(
    @inject('CityRepository')
    private cityRepository: CityRepository
    ){}
    async getAll() {
        return this.cityRepository.findAll({});
    }
}