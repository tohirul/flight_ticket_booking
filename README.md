# Ticket Booking API

- A simple, modular, and scalable ticket booking system built with Node.js, Express, TypeScript, and Prisma ORM. This API allows users to manage airlines, airplanes, countries, and other related services.

### Project Structure

- The project is organized into various modules and services to follow a clean architecture pattern, ensuring maintainability and scalability.

```
└── 📁Ticket Booking
    └── 📁.git                        # Git version control
    └── 📁dist                        # Compiled JavaScript files
    └── 📁logs                        # Logs generated during runtime
        └── error.log                 # Error logs
        └── info.log                  # Informational logs
        └── success.log               # Success logs
    └── 📁prisma                      # Prisma-related files
        └── 📁migrations              # Prisma migration files
        └── schema.prisma             # Prisma schema file
    └── 📁src                         # Source code
        └── 📁app
            └── app.ts                # Main Express app configuration
            └── 📁__test__            # Unit tests
            └── 📁middlewares         # Middlewares used in the app
                └── global.error.ts  # Global error handler
                └── index.ts         # Index for all middlewares
                └── requestValidator.ts # Request body validation middleware
            └── 📁modules            # Business logic modules
                └── 📁airline        # Airline-related services
                    └── airlineController.ts  # Controller for airline-related requests
                    └── airlineRoutes.ts     # API routes for airline
                    └── airlineService.ts    # Business logic for airline
                    └── airlineZod.ts       # Validation for airline
                └── 📁airplane       # Airplane-related services
                    └── airplaneController.ts  # Controller for airplane-related requests
                    └── airplaneRoutes.ts     # API routes for airplane
                    └── airplaneService.ts    # Business logic for airplane
                    └── airplaneZod.ts       # Validation for airplane
                └── 📁country        # Country-related services
                    └── countryController.ts  # Controller for country-related requests
                    └── countryRoutes.ts     # API routes for country
                    └── countryService.ts    # Business logic for country
                    └── countryZod.ts       # Validation for country
            └── 📁routes             # API version routes
                └── index.ts         # Main router
                └── 📁v1             # Version 1 API
                    └── index.ts     # Routes for v1
                └── 📁v2             # Version 2 API
                    └── index.ts     # Routes for v2
        └── 📁config                 # Environment and configuration files
            └── dev.ts               # Development environment configuration
            └── env.ts               # Environment variable loader
            └── index.ts             # Main config file
            └── local.ts             # Local environment configuration
            └── prod.ts              # Production environment configuration
        └── 📁core                    # Core utilities and helpers
            └── 📁constants           # App constants
                └── enums.ts         # Enums for various values (e.g., status codes)
            └── 📁errors             # Custom error classes
                └── api.error.ts     # API-specific error handling
                └── base.error.ts    # Base error class for inheritance
                └── mysql.error.ts   # MySQL-specific errors
                └── prisma.error.ts  # Prisma-specific errors
                └── zodSchema.error.ts # Zod schema validation errors
            └── 📁logs               # Log utilities for logging errors
            └── 📁repositories        # Data access layer for repositories
                └── repository_airline.ts # Repository for airline data
                └── repository_airplane.ts # Repository for airplane data
                └── repository_country.ts  # Repository for country data
                └── repository.ts     # General repository for common operations
            └── 📁types               # TypeScript types for the app
                └── common.types.ts  # Common types for the app
                └── error.types.ts   # Types for errors
                └── schema.types.ts  # Types for schema validation
            └── 📁utilities          # Utility functions
                └── catchAsync.ts    # Utility to handle async errors
                └── sendResponse.ts  # Utility to send responses
        └── database.ts               # Prisma database client setup
        └── router.ts                 # Main router file for setting up routes
        └── server.ts                 # Server configuration and startup
    └── .env                         # Environment variables
    └── .gitignore                   # Git ignore file
    └── .prettierignore              # Prettier ignore file
    └── .prettierrc                  # Prettier configuration file
    └── jest.config.ts               # Jest configuration for testing
    └── nodemon.json                 # Nodemon configuration for auto-reloading
    └── package-lock.json            # Package lock file for dependencies
    └── package.json                 # NPM dependencies and scripts
    └── README.md                    # This file
    └── tsconfig.json                # TypeScript configuration
    └── tsconfig.tsbuildinfo         # TypeScript build info

```

## src/ Directory

- The src/ directory is the heart of the application's source code, housing all the core logic, configurations, services, and utilities needed to run the Ticket Booking API. It is organized into several subdirectories that reflect a modular approach to structure, making it easier to maintain and scale the application with clear separation of concerns into modules, configurations, and core utilities, allowing for scalability, easy maintenance, and flexibility in handling various aspects of the application. Each subdirectory follows a well-defined structure that mirrors typical industry best practices for API development.

## src/app Directory   
- The src/app/ directory contains the central parts of the application, such as the modules, route handlers, middlewares, and application-level tests. It serves as the primary entry point where everything is tied together to create the functional API.

## src/app/config/ Directory
- The config/ directory is responsible for managing the environment configurations, such as database connection details, port numbers, and other application-specific settings that might change depending on the environment (development, production, etc.).

## src/app/core/ Directory
- The core/ directory contains the foundational utilities, constants, and reusable components that are used throughout the application. These components help manage common tasks like error handling, data access, logging, and other essential features that are shared across multiple modules and layers of the application.

