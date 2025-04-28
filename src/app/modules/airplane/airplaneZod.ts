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
  airlineId: z.string().uuid('Invalid airline ID format. Please provide a valid UUID.').optional(),
});
