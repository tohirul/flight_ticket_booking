import * as z from 'zod';

export const createStateSchema = z.object({
  name: z
    .string({ required_error: 'State name is required.' })
    .min(3, 'State name must be at least 3 characters long.')
    .max(50, 'State name cannot exceed 50 characters.'),
  stateCode: z
    .string({ required_error: 'State code is required.' })
    .length(
      2,
      'State code must be a valid ISO 3166-1 alpha-2 or IATA code (e.g., "NY" or "New York").'
    )
    .regex(
      /^[A-Z]{2}$/,
      'State code must consist of 2 uppercase letters (e.g., "NY" for New York).'
    ),

  countryId: z.string().uuid('Invalid country ID format. Please provide a valid UUID.'),
});

export const updateStateSchema = z
  .object({
    name: z
      .string()
      .min(3, 'State name must be at least 3 characters long.')
      .max(50, 'State name cannot exceed 50 characters.')
      .optional(),
    stateCode: z
      .string({ required_error: 'State code is required.' })
      .length(
        2,
        'State code must be a valid ISO 3166-1 alpha-2 or IATA code (e.g., "NY" or "New York").'
      )
      .regex(
        /^[A-Z]{2}$/,
        'State code must consist of 2 uppercase letters (e.g., "NY" for New York).'
      )
      .optional(),

    countryId: z
      .string()
      .uuid('Invalid country ID format. Please provide a valid UUID.')
      .optional(),
  })
  .partial();
