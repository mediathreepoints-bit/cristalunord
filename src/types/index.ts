export type LeadStatus = 'nouveau' | 'contacte' | 'qualifie' | 'devis_envoye' | 'negociation' | 'accepte' | 'refuse' | 'archive';
export type QuoteStatus = 'brouillon' | 'en_attente' | 'envoye' | 'accepte' | 'refuse' | 'expire' | 'annule';
export type ProjectStatus = 'etude' | 'devis_valide' | 'cotes_prises' | 'en_fabrication' | 'en_pose' | 'livre' | 'garantie_decennale';
export type MaterialType = 'aluminium' | 'pvc' | 'verre' | 'inox' | 'mixte';

export interface CompanyInfo {
  name: string;
  activity: string;
  phone: string;
  phone_display: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  area_served: string[];
}

export interface Lead {
  id: string;
  customer_id?: string;
  full_name: string;
  phone: string;
  email?: string;
  city: string;
  project_type: string;
  material: MaterialType;
  dimensions?: string;
  quantity?: number;
  options?: {
    glazing?: string;
    color?: string;
    opening?: string;
    installation?: boolean;
    tags?: string[];
  };
  estimated_budget?: number;
  source: string;
  status: LeadStatus;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface QuoteItem {
  id: string;
  quote_id: string;
  item_order: number;
  description: string;
  material: MaterialType;
  width_cm?: number;
  height_cm?: number;
  quantity: number;
  unit_price_ht: number;
  total_price_ht: number;
  glazing_option?: string;
  color_finish?: string;
}

export interface Quote {
  id: string;
  quote_number: string;
  lead_id?: string;
  customer_id?: string;
  client_name: string;
  client_phone: string;
  client_email?: string;
  city: string;
  site_address?: string;
  status: QuoteStatus;
  title: string;
  subtotal_ht: number;
  discount_percentage: number;
  discount_amount: number;
  tva_rate: number;
  tva_amount: number;
  total_ttc: number;
  validity_days: number;
  payment_terms: string;
  notes?: string;
  items: QuoteItem[];
  created_at: string;
  updated_at: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title_fr: string;
  title_ar: string;
  short_desc_fr: string;
  short_desc_ar: string;
  full_content_fr: string;
  full_content_ar: string;
  icon_name: string;
  cover_image: string;
  advantages: string[];
  technical_specs: { label: string; value: string }[];
  is_active: boolean;
  display_order: number;
}

export interface ProductItem {
  id: string;
  category_slug: string;
  slug: string;
  name_fr: string;
  name_ar: string;
  description_fr: string;
  description_ar: string;
  material: MaterialType;
  available_colors: string[];
  glazing_options: string[];
  cover_image: string;
  features: string[];
  is_featured: boolean;
  is_active: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title_fr: string;
  title_ar: string;
  category: 'Façades' | 'Menuiseries' | 'Intérieurs' | 'Villas' | 'Commerces' | 'Bureaux';
  city: string;
  completion_year: number;
  description_fr: string;
  description_ar: string;
  cover_image: string;
  gallery_images: string[];
  before_image?: string;
  after_image?: string;
  is_featured: boolean;
  display_order: number;
}

export interface WhatsAppConversation {
  id: string;
  phone_number: string;
  client_name: string;
  city: string;
  detected_language: 'fr' | 'ar';
  qualification_data: {
    project_type?: string;
    material?: string;
    dimensions?: string;
    opening_type?: string;
    city?: string;
    budget?: string;
  };
  requires_human_intervention: boolean;
  last_message_at: string;
  messages: WhatsAppMessage[];
}

export interface WhatsAppMessage {
  id: string;
  conversation_id: string;
  direction: 'inbound' | 'outbound' | 'system';
  message_text: string;
  status: 'sent' | 'delivered' | 'read' | 'failed';
  created_at: string;
}

export interface ProjectTracking {
  id: string;
  client_name: string;
  site_address: string;
  menuiserie_type: string;
  responsible: string;
  start_date: string;
  delivery_date: string;
  progress_percentage: number;
  status: ProjectStatus;
  notes: string;
}
