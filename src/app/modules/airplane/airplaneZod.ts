import { AirplaneEngineType, AirplaneEngineConfiguration, AirplaneFuelType } from '@/core/enums';
import { z } from 'zod';

export const createAirplaneSchema = z.object({
  model: z
    .string({ required_error: 'Airplane model is required.' })
    .min(1, 'Model name cannot be empty.')
    .max(25, 'Model name cannot exceed 25 characters.'),

  year: z
    .number({ required_error: 'Manufacturing year is required.' })
    .int('Year must be an integer.')
    .gte(1900, 'Year must be a valid number greater than or equal to 1900.'),

  seats: z
    .number({ required_error: 'Number of seats is required.' })
    .int('Seats must be an integer.')
    .gte(10, 'Seats must be at least 10.'),

  capacity: z
    .number({ required_error: 'Capacity is required.' })
    .int('Capacity must be an integer.')
    .gte(10, 'Capacity must be at least 10.'),

  manufacturer: z
    .string({ required_error: 'Manufacturer name is required.' })
    .min(1, 'Manufacturer name cannot be empty.'),

  engines: z
    .number({ required_error: 'Number of engines is required.' })
    .int('Engines must be an integer.')
    .gte(1, 'Airplane must have at least 1 engine.')
    .lte(8, 'Number of engines cannot exceed 8.'),

  engineType: z.nativeEnum(AirplaneEngineType, {
    errorMap: () => ({ message: 'Invalid engine type. Please select a valid option.' }),
  }),

  engineConfiguration: z.nativeEnum(AirplaneEngineConfiguration, {
    errorMap: () => ({ message: 'Invalid engine configuration. Please select a valid option.' }),
  }),

  speed: z
    .number({ required_error: 'Speed is required.' })
    .int('Speed must be an integer.')
    .gte(1, 'Speed must be at least 1.'),

  fuelType: z.nativeEnum(AirplaneFuelType, {
    errorMap: () => ({ message: 'Invalid fuel type. Please select a valid option.' }),
  }),

  airlineId: z
    .string({ required_error: 'Airline ID is required.' })
    .uuid('Invalid airline ID format. Please provide a valid UUID.'),
});

export const updateAirplaneSchema = z.object({
  model: z.string().min(1, 'Model name cannot be empty.').optional(),

  year: z
    .number()
    .int('Year must be an integer.')
    .gte(1900, 'Year must be a valid number greater than or equal to 1900.')
    .optional(),

  seats: z.number().int('Seats must be an integer.').gte(1, 'Seats must be at least 1.').optional(),

  capacity: z
    .number()
    .int('Capacity must be an integer.')
    .gte(1, 'Capacity must be at least 1.')
    .optional(),

  manufacturer: z.string().min(1, 'Manufacturer name cannot be empty.').optional(),

  engines: z
    .number()
    .int('Engines must be an integer.')
    .gte(1, 'Airplane must have at least 1 engine.')
    .lte(8, 'Number of engines cannot exceed 8.')
    .optional(),

  engineType: z
    .nativeEnum(AirplaneEngineType, {
      errorMap: () => ({ message: 'Invalid engine type. Please select a valid option.' }),
    })
    .optional(),

  engineConfiguration: z
    .nativeEnum(AirplaneEngineConfiguration, {
      errorMap: () => ({ message: 'Invalid engine configuration. Please select a valid option.' }),
    })
    .optional(),

  speed: z.number().int('Speed must be an integer.').gte(1, 'Speed must be at least 1.').optional(),

  fuelType: z
    .nativeEnum(AirplaneFuelType, {
      errorMap: () => ({ message: 'Invalid fuel type. Please select a valid option.' }),
    })
    .optional(),

  airlineId: z.string().uuid('Invalid airline ID format. Please provide a valid UUID.').optional(),
});
