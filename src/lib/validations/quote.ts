import { z } from 'zod';

export const QuoteRequestSchema = z.object({
  product_name: z.string().min(2, 'Veuillez sélectionner un type de produit'),
  material: z.enum(['aluminium', 'pvc', 'verre', 'inox', 'mixte'], {
    errorMap: () => ({ message: 'Veuillez choisir un matériau valide' }),
  }),
  width_cm: z.number().min(20, 'Largeur minimale 20 cm').max(1200, 'Largeur maximale 1200 cm').optional(),
  height_cm: z.number().min(20, 'Hauteur minimale 20 cm').max(600, 'Hauteur maximale 600 cm').optional(),
  quantity: z.number().int().min(1, 'Quantité minimale : 1').default(1),
  glazing: z.string().optional(),
  color: z.string().optional(),
  opening_type: z.string().optional(),
  include_installation: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  full_name: z.string().min(2, 'Le nom complet est obligatoire (au moins 2 caractères)'),
  phone: z.string().min(8, 'Le numéro de téléphone est obligatoire'),
  email: z.string().email('Format email invalide').optional().or(z.literal('')),
  city: z.string().min(2, 'Veuillez indiquer la ville du chantier'),
  site_address: z.string().optional(),
  comment: z.string().max(2000, 'Commentaire trop long (max 2000 caractères)').optional(),
});

export type QuoteRequestInput = z.infer<typeof QuoteRequestSchema>;
