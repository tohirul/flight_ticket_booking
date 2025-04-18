import { z } from 'zod';

// Create Airline Schema
export const createAirlineSchema = z.object({
  name: z
    .string({ required_error: 'Airline name is required.' })
    .min(8, 'Airline name must be at least 8 characters long.'),

  countryId: z
    .string({ required_error: 'Country ID is required.' })
    .uuid('Invalid country ID format. It must be a valid UUID.'),

  logo: z
    .string({ required_error: 'Logo URL is required.' })
    .url(
      'Invalid logo URL format. Please provide a valid URL (e.g., https://example.com/logo.png).'
    ),
});

// Update Airline Schema (Partial for flexibility)
export const updateAirlineSchema = z.object({
  name: z.string().min(8, 'Airline name must be at least 8 characters long.').optional(),

  countryId: z.string().uuid('Invalid country ID format. It must be a valid UUID.').optional(),

  logo: z
    .string()
    .url(
      'Invalid logo URL format. Please provide a valid URL (e.g., https://example.com/logo.png).'
    )
    .optional(),
});
