import { z } from 'zod';

export const createAirportSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  IATAcode: z.string().min(2, 'IATAcode must be at least 2 characters'),
  cityId: z
    .string({
      required_error: 'City ID is required',
    })
    .uuid('City ID must be a valid UUID'),
  stateId: z
    .string({
      required_error: 'State ID is required',
    })
    .uuid('State ID must be a valid UUID'),
  lat: z.number().refine((val) => val >= -90 && val <= 90, {
    message: 'Latitude must be between -90 and 90',
  }),
  lng: z.number().refine((val) => val >= -180 && val <= 180, {
    message: 'Longitude must be between -180 and 180',
  }),
  address: z.string().min(5, 'Address is required'),
  timezone: z.string().min(1, 'Timezone is required'),
  website: z.string().url('Invalid website URL').optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
  countryId: z
    .string({
      required_error: 'Country ID is required',
    })
    .uuid('Country ID must be a valid UUID'),
});

export const updateAirportSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  IATAcode: z.string().min(2, 'IATAcode must be at least 2 characters').optional(),
  cityId: z.string().uuid('City ID must be a valid UUID').optional(),
  stateId: z.string().uuid('State ID must be a valid UUID').optional(),
  lat: z
    .number()
    .refine((val) => val >= -90 && val <= 90, {
      message: 'Latitude must be between -90 and 90',
    })
    .optional(),
  lng: z
    .number()
    .refine((val) => val >= -180 && val <= 180, {
      message: 'Longitude must be between -180 and 180',
    })
    .optional(),
  address: z.string().min(5, 'Address is required').optional(),
  timezone: z.string().min(1, 'Timezone is required').optional(),
  website: z.string().url('Invalid website URL').optional().nullable(),
  phoneNumber: z.string().optional().nullable(),
});
