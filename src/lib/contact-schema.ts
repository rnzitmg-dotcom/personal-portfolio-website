import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(6, "Please enter a phone number."),
  company: z.string().trim().optional(),
  service: z.string().trim().min(2, "Please select a service."),
  budget: z.string().trim().min(2, "Please select a project budget."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more about your project."),
  consent: z
    .boolean()
    .refine((value) => value, "Please agree to be contacted."),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
