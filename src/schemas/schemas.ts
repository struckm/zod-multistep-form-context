import { z } from 'zod';

export const ProfileSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().min(1)
});

export type TProfile = z.infer<typeof ProfileSchema>;