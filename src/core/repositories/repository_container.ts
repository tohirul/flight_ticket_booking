import { container } from 'tsyringe';
import AirlineRepository from './repository_airline';
import AirplaneRepository from './repository_airplane';
import CountryRepository from './repository_country';

// Register Repositories
container.registerSingleton<AirlineRepository>('AirlineRepository', AirlineRepository);
container.registerSingleton<AirplaneRepository>('AirplaneRepository', AirplaneRepository);
container.registerSingleton<CountryRepository>('CountryRepository', CountryRepository);

// Export container for use in other files
export default container;
