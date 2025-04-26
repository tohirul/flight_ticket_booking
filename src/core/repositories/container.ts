import { container } from 'tsyringe';
import AirlineRepository from './container/repository_airline';
import AirplaneRepository from './container/repository_airplane';
import CountryRepository from './container/repository_country';

// Register Repositories
container.registerSingleton<AirlineRepository>('AirlineRepository', AirlineRepository);
container.registerSingleton<AirplaneRepository>('AirplaneRepository', AirplaneRepository);
container.registerSingleton<CountryRepository>('CountryRepository', CountryRepository);

// Export container for use in other files
export default container;
