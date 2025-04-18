// jest.config.ts
import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/app/middlewares/$1',
    '^@modules/(.*)$': '<rootDir>/src/app/modules/$1',
    '^@approutes/(.*)$': '<rootDir>/src/app/routes/$1',
  },
  modulePaths: ['<rootDir>'], // optional, helps resolving absolute imports
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // point to your tsconfig
    },
  },
  setupFiles: ['reflect-metadata'], // Because you're using tsyringe (DI)
};

export default config;
