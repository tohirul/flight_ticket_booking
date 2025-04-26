import { container } from 'tsyringe';

import AirlineRepository from './container/repository_airline';
import AirplaneRepository from './container/repository_airplane';
import CityRepository from './container/repository_city';
import CountryRepository from './container/repository_country';

// Register Repositories
container.registerSingleton<AirlineRepository>('AirlineRepository', AirlineRepository);
container.registerSingleton<AirplaneRepository>('AirplaneRepository', AirplaneRepository);
container.registerSingleton<CountryRepository>('CountryRepository', CountryRepository);
container.registerSingleton<CityRepository>('CityRepository', CityRepository);

export default container;
