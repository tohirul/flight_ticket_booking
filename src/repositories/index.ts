import AirlineRepository from './repository_airline';
import AirplaneRepository from './repository_airplane';
import CountryRepository from './repository_country';

export default {
  AirplaneRepository: new AirplaneRepository(),
  AirlineRepository: new AirlineRepository(),
  CountryRepository: new CountryRepository(),
};
