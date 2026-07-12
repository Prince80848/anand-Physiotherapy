import { z } from "zod";

// Appointment booking form schema
export const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number")
    .regex(/^[+0-9\s-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().max(500, "Message must be under 500 characters").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

// General contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[+0-9\s-]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Newsletter signup schema
export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
