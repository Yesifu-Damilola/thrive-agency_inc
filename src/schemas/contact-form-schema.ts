import { z } from "zod";

// Define the form schema using Zod
export const contactFormSchema = z.object({
  name: z.string().min(8, { message: "Name must be at least 8 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(10, { message: "Subject must be at least 10 characters" }),
  message: z
    .string()
    .min(30, { message: "Message must be at least 30 characters" }),
});

// Infer the type from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Type for form errors
export type ContactFormErrors = {
  [K in keyof ContactFormData]?: string;
};
