import { z } from 'zod';

enum AirplaneEngineType {
  JetEngine = 'JetEngine',
  Turboprop = 'Turboprop',
  PistonEngine = 'PistonEngine',
  RocketEngine = 'RocketEngine',
}

enum AirplaneEngineConfiguration {
  SingleEngine = 'Single Engine',
  TwinEngine = 'Twin Engine',
  TriEngine = 'Tri Engine',
  QuadEngine = 'Quad Engine',
}

enum AirplaneFuelType {
  JetFuel = 'JetFuel',
  Avgas = 'Avgas',
  Diesel = 'Diesel',
}

const createAirplaneSchema = z.object({
  model: z.string().min(1, 'Model is required'),
  year: z.number().int().gte(1900, 'Year must be a valid number greater than or equal to 1900'),
  seats: z.number().int().gte(10, 'Seats must be at least 10'),
  capacity: z.number().int().gte(10, 'Capacity must be at least 10'),
  manufacturer: z.string({ required_error: 'Manufacturer is required' }),
  engines: z
    .number()
    .int()
    .gte(1, 'Engines must be at least 1')
    .lte(8, 'Number of engines can’t exceed 8'), // Engines validation
  engineType: z
    .nativeEnum(AirplaneEngineType)
    .refine((val) => Object.values(AirplaneEngineType).includes(val), {
      message: 'Invalid engine type',
    }),
  engineConfiguration: z
    .nativeEnum(AirplaneEngineConfiguration)
    .refine((val) => Object.values(AirplaneEngineConfiguration).includes(val), {
      message: 'Invalid engine configuration',
    }),
  speed: z.number().int().gte(1, 'Speed must be at least 1'),
  fuelType: z
    .nativeEnum(AirplaneFuelType)
    .refine((val) => Object.values(AirplaneFuelType).includes(val), {
      message: 'Invalid fuel type',
    }),
  airlineId: z.string().uuid('Invalid airline ID'),
});

const updateAirplaneSchema = z.object({
  model: z.string().min(1, 'Model is required').optional(),
  year: z
    .number()
    .int()
    .gte(1900, 'Year must be a valid number greater than or equal to 1900')
    .optional(),
  seats: z.number().int().gte(1, 'Seats must be at least 1').optional(),
  capacity: z.number().int().gte(1, 'Capacity must be at least 1').optional(),
  manufacturer: z.string().min(1, 'Manufacturer is required').optional(),
  engines: z
    .number()
    .int()
    .gte(1, 'Engines must be at least 1')
    .lte(8, 'Number of engines can’t exceed 8')
    .optional(),
  engineType: z
    .nativeEnum(AirplaneEngineType)
    .refine((val) => Object.values(AirplaneEngineType).includes(val), {
      message: 'Invalid engine type',
    })
    .optional(),
  engineConfiguration: z.nativeEnum(AirplaneEngineConfiguration),
  speed: z.number().int().gte(1, 'Speed must be at least 1').optional(),
  fuelType: z.nativeEnum(AirplaneFuelType),
  airlineId: z.string().uuid('Invalid airline ID').optional(),
});

export {
  createAirplaneSchema,
  updateAirplaneSchema,
  AirplaneEngineType,
  AirplaneEngineConfiguration,
  AirplaneFuelType,
};
