import {z} from 'Zod';

export const acceptMessages = z.object({
    content: z
    .string()
    .min(10, {message: "Content must be at least of 10 characters"})
    .max(300, {message: "Content must be no longer than 300 characters"})
})
