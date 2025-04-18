import * as z from 'zod';

export const createCountrySchema = z.object({
  name: z
    .string({ required_error: 'Country name is required.' })
    .min(3, 'Country name must be at least 3 characters long.')
    .max(50, 'Country name cannot exceed 50 characters.'),

  countryCode: z
    .string({ required_error: 'Country code is required.' })
    .min(2, 'Country code must be a valid ISO 3166-1 alpha-2 or IATA code (e.g., "FR" or "FRA").')
    .max(3, 'Country code must be a maximum of 3 characters (e.g., "FRA" for France).')
    .regex(
      /^[A-Z]{2,3}$/,
      'Country code must consist of 2 or 3 uppercase letters (e.g., "US", "FRA").'
    ),
});

export const updateCountrySchema = z.object({
  name: z
    .string()
    .min(3, 'Country name must be at least 3 characters long.')
    .max(50, 'Country name cannot exceed 50 characters.')
    .optional(),

  countryCode: z
    .string()
    .min(2, 'Country code must be a valid ISO 3166-1 alpha-2 or IATA code (e.g., "FR" or "FRA").')
    .max(3, 'Country code must be a maximum of 3 characters (e.g., "FRA" for France).')
    .regex(
      /^[A-Z]{2,3}$/,
      'Country code must consist of 2 or 3 uppercase letters (e.g., "US", "FRA").'
    )
    .optional(),
});
