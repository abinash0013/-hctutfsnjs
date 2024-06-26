import {z} from 'Zod';

export const verifySchema = z.object({
    code: z.string().length(6, "Verification code is must be in 6 digits")
})
