import { container } from 'tsyringe';

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
  }
];

export async function registerRepositories() {
  for (const { name, repository } of repositories) {
    const { default: Repository } = await repository();
    container.registerSingleton(name, Repository as any);
  }
}

export default container;
