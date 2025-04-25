# Ticket Booking API

- A simple, modular, and scalable ticket booking system built with Node.js, Express, TypeScript, and Prisma ORM. This API allows users to manage airlines, airplanes, countries, and other related services.

### Project Structure

- The project is organized into various modules and services to follow a clean architecture pattern, ensuring maintainability and scalability.

```
└── 📁Ticket Booking
    └── 📁logs
        └── error.log
        └── info.log
        └── success.log
    └── 📁prisma
        └── 📁migrations
            └── migration_lock.toml
        └── schema.prisma
    └── 📁src
        └── 📁app
        └── app.ts
            └── 📁__test__
                └── 📁__mocks__
                    └── 📁airline
                        └── airlineController.mocks.ts
                        └── airlineRoutes.mocks.ts
                        └── airlineService.mocks.ts
                    └── 📁database
                        └── index.ts
                └── 📁helpers
                    └── 📁assertions
                        └── airlineAssertions.ts
                    └── 📁factories
                        └── airlineFactory.ts
                        └── countryFactory.ts
                    └── 📁requests
                        └── airlineRequests.ts
                └── 📁modules
                    └── 📁airline
                        └── airlineController.test.ts
                        └── airlineRoutes.test.ts
                        └── airlineService.test.ts
            └── 📁middlewares
                └── global.error.ts
                └── index.ts
                └── requestValidator.ts
            └── 📁modules
                └── 📁airline
                    └── airlineController.ts
                    └── airlineRoutes.ts
                    └── airlineService.ts
                    └── airlineZod.ts
                └── 📁airplane
                    └── airplaneController.ts
                    └── airplaneRoutes.ts
                    └── airplaneService.ts
                    └── airplaneZod.ts
                └── 📁country
                    └── countryController.ts
                    └── countryRoutes.ts
                    └── countryService.ts
                    └── countryZod.ts
            └── 📁routes
                └── index.ts
                └── 📁v1
                    └── index.ts
                └── 📁v2
                    └── index.ts
        └── 📁config
            └── dev.ts
            └── env.ts
            └── index.ts
            └── local.ts
            └── prod.ts
            └── testing.ts
        └── 📁core
            └── 📁constants
                └── enums.ts
            └── 📁enums
                └── index.ts
            └── 📁errors
                └── api.error.ts
                └── base.error.ts
                └── index.ts
                └── mysql.error.ts
                └── prisma.error.ts
                └── zodSchema.error.ts
            └── 📁logs
                └── index.ts
            └── 📁repositories
                └── 📁container
                    └── repository_airline.ts
                    └── repository_airplane.ts
                    └── repository_country.ts
                └── repository_container.ts
                └── repository.ts
            └── 📁types
                └── common.types.ts
                └── error.types.ts
                └── schema.types.ts
            └── 📁utilities
                └── catchAsync.ts
                └── createResponse.ts
                └── httpStatus.ts
                └── sendResponse.ts
        └── database.ts
        └── module-alias.ts
        └── router.ts
        └── server.ts
    └── .env
    └── .gitignore
    └── .prettierignore
    └── .prettierrc
    └── jest.config.ts
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.json
    └── tsconfig.tsbuildinfo
```

## src/ Directory

- The src/ directory is the heart of the application's source code, housing all the core logic, configurations, services, and utilities needed to run the Ticket Booking API. It is organized into several subdirectories that reflect a modular approach to structure, making it easier to maintain and scale the application with clear separation of concerns into modules, configurations, and core utilities, allowing for scalability, easy maintenance, and flexibility in handling various aspects of the application. Each subdirectory follows a well-defined structure that mirrors typical industry best practices for API development.

## src/app Directory

- The src/app/ directory contains the central parts of the application, such as the modules, route handlers, middlewares, and application-level tests. It serves as the primary entry point where everything is tied together to create the functional API.

## src/app/config/ Directory

- The config/ directory is responsible for managing the environment configurations, such as database connection details, port numbers, and other application-specific settings that might change depending on the environment (development, production, etc.).

## src/app/core/ Directory

- The core/ directory contains the foundational utilities, constants, and reusable components that are used throughout the application. These components help manage common tasks like error handling, data access, logging, and other essential features that are shared across multiple modules and layers of the application.
