import { z } from 'zod';

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone is required')
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'),
});
