import * as z from 'zod';

export const createCitySchema = z.object({
  name: z
    .string({ required_error: 'City name is required.' })
    .min(3, 'City name must be at least 3 characters long.')
    .max(50, 'City name cannot exceed 50 characters.'),

  stateId: z.string().uuid('Invalid state ID format. Please provide a valid UUID.').optional(),
  countryId: z
    .string({ required_error: 'Country ID is required.' })
    .uuid('Invalid country ID format. Please provide a valid UUID.'),
});

export const updateCitySchema = z
  .object({
    name: z
      .string({ required_error: 'City name is required.' })
      .min(3, 'City name must be at least 3 characters long.')
      .max(50, 'City name cannot exceed 50 characters.'),

    stateId: z.string().uuid('Invalid state ID format. Please provide a valid UUID.').optional(),
    countryId: z
      .string({ required_error: 'Country ID is required.' })
      .uuid('Invalid country ID format. Please provide a valid UUID.'),
  })
  .partial();
