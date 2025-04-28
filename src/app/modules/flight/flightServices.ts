import type FlightRepository from "@/core/repositories/container/repository_flight";
import type { Flight } from "@generated/@prisma/client";
import { inject, injectable } from 'tsyringe';

@injectable()   
export default class FlightService {
    constructor(
        @inject("FlightRepository") 
        private flightRepository: FlightRepository,

    ){}
    async getAll(){
        return this.flightRepository.findAll({});
    }                               
    async getSingle(id: string){
        return this.flightRepository.findOne({where: {id}});
    }
    async create(data: Flight){
        return this.flightRepository.create({data});
    }
    async update(id: string, data: Partial<Flight>){
        return this.flightRepository.update({where: {id}, data});
    }
    async destroy(id: string){
        return this.flightRepository.destroy({where: {id}});
    }
}