import { z } from 'zod';

export const ContactFormSchema = z.object({
  full_name: z.string().min(2, 'Le nom est obligatoire'),
  phone: z.string().min(8, 'Le numéro de téléphone est obligatoire'),
  email: z.string().email('Format email invalide').optional().or(z.literal('')),
  city: z.string().default('Tanger'),
  project_type: z.string().min(2, 'Veuillez préciser votre projet'),
  message: z.string().min(5, 'Votre message doit contenir au moins 5 caractères').max(2000),
  tags: z.array(z.string()).optional(),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
