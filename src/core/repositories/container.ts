
import { container, InjectionToken } from 'tsyringe';

import logger from '@core/logs';

const repositories = [
  {
    name: 'AirlineRepository',
    repository: () => import('./container/repository_airline'),
  },
  {
    name: 'AirplaneRepository',
    repository: () => import('./container/repository_airplane'),
  },
  {
    name: 'CityRepository',
    repository: () => import('./container/repository_city'),
  },
  {
    name: 'CountryRepository',
    repository: () => import('./container/repository_country'),
  },
  {
    name: 'StateRepository',
    repository: () => import('./container/repository_state'),
  },
  {
    name: 'AirportRepository',
    repository: () => import('./container/repository_airport'),
  },
  {
    name: 'FlightRepository',
    repository: () => import('./container/repository_flight'),
  }
];
export async function registerRepositories() {
  const registrationPromises = repositories.map(({ name, repository }) =>
    repository().then((module) => {
      container.registerSingleton(name as InjectionToken<any>, module.default);
      logger.info(`✅ ${name} registered successfully.`);
    }).catch((error) => {
      logger.error(`❌ Failed to register ${name}:`, error);
      throw error;    
    })
  );
  
  await Promise.all(registrationPromises);
}


export default container;
