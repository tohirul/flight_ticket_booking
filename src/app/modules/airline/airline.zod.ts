import { z } from 'zod';

// Create Airline Schema
export const createAirlineSchema = z.object({
  name: z.string().min(8, 'Airline name is required'),
  countryId: z.string().uuid('Invalid country ID format'),
  logo: z.string().url('Invalid logo URL format'),
});

// Update Airline Schema (Partial for flexibility)
export const updateAirlineSchema = z.object({
  name: z.string().min(8).optional(),
  countryId: z.string().uuid('Invalid country ID format').optional(),
  logo: z.string().url('Invalid logo URL format').optional(),
});
