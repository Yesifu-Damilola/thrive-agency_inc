import * as z from "zod";

// TypeScript validation schema for the contact form
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  to: z.string().email("Receiver email is invalid"),
});

// TypeScript type inference from the Zod schema
export type ContactFormValues = z.infer<typeof contactFormSchema>;
