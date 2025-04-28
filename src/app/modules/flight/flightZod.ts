
import * as z from 'zod';

  // Create Zod schema for Flight model
  export const CreateFlightSchema = z.object({
    airlineId: z.string().uuid(),
    airplaneId: z.string().uuid(),
    departureTime: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: 'Invalid departure time format',
    }),
    arrivalTime: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: 'Invalid arrival time format',
    }),
    flightDuration: z.number().int().positive(),
    flightDistance: z.number().int().positive(),
    fromAirportId: z.string().uuid(),
    toAirportId: z.string().uuid(),
    flightNumber: z.string().min(1),
    flightStatus: z.enum(['Scheduled', 'Departed', 'Cancelled', 'Delayed']),
  });
  
  // Update schema to allow partial updates for Flight model
  export const UpdateFlightSchema = CreateFlightSchema.partial();