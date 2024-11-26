import { z } from 'zod';

const registerValidationSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim().email('Please enter a valid email'),
  password: z
    .string()
    .trim()
        .min(6, 'Password needs to be at least 6 character'),
    mobileNumber: z.string(),
});

export default registerValidationSchema;
