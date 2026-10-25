-- ==============================================================================
-- CRISTALU NORD — SCHÉMA SUPABASE POSTGRESQL & ROW LEVEL SECURITY (RLS)
-- Version : 1.0.0
-- Date : 2026-10-25
-- Description : Tables complètes pour CRM, Devis, Produits, Réalisations,
--               Conversations WhatsApp, Paramètres et Journalisation d'audit.
-- ==============================================================================

-- 1. EXTENSIONS REQUISES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. ENUMS
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('super_admin', 'admin', 'commercial', 'technicien', 'collaborateur');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE lead_status AS ENUM ('nouveau', 'contacte', 'qualifie', 'devis_envoye', 'negociation', 'accepte', 'refuse', 'archive');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE quote_status AS ENUM ('brouillon', 'en_attente', 'envoye', 'accepte', 'refuse', 'expire', 'annule');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE project_status AS ENUM ('etude', 'devis_valide', 'cotes_prises', 'en_fabrication', 'en_pose', 'livre', 'garantie_decennale');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE material_type AS ENUM ('aluminium', 'pvc', 'verre', 'inox', 'mixte');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE message_direction AS ENUM ('inbound', 'outbound', 'system');
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 3. PROFILES & USER ROLES
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.users_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    role user_role NOT NULL DEFAULT 'collaborateur',
    assigned_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, role)
);

-- 4. CUSTOMERS & LEADS (CRM)
CREATE TABLE IF NOT EXISTS public.customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    company_name TEXT,
    phone TEXT NOT NULL,
    email TEXT,
    city TEXT DEFAULT 'Tanger',
    address TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES public.customers(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    city TEXT DEFAULT 'Tanger',
    project_type TEXT NOT NULL,
    material material_type DEFAULT 'aluminium',
    estimated_budget NUMERIC(12, 2),
    source TEXT DEFAULT 'site_web',
    status lead_status DEFAULT 'nouveau',
    notes TEXT,
    assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. QUOTES & ITEMS (GESTION DEVIS)
CREATE TABLE IF NOT EXISTS public.quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote_number TEXT UNIQUE NOT NULL, -- Ex: DEV-2026-0001
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    customer_id UUID REFERENCES public.customers(id) ON DELETE SET NULL,
    status quote_status DEFAULT 'en_attente',
    title TEXT NOT NULL,
    city TEXT DEFAULT 'Tanger',
    site_address TEXT,
    subtotal_ht NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    discount_percentage NUMERIC(5, 2) DEFAULT 0.00,
    discount_amount NUMERIC(12, 2) DEFAULT 0.00,
    tva_rate NUMERIC(5, 2) DEFAULT 20.00,
    tva_amount NUMERIC(12, 2) DEFAULT 0.00,
    total_ttc NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    validity_days INT DEFAULT 30,
    payment_terms TEXT DEFAULT 'Acompte 50% à la commande, 40% à la pose, 10% à la réception.',
    notes TEXT,
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.quote_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote_id UUID REFERENCES public.quotes(id) ON DELETE CASCADE,
    item_order INT DEFAULT 1,
    description TEXT NOT NULL,
    material material_type DEFAULT 'aluminium',
    width_cm NUMERIC(8, 2),
    height_cm NUMERIC(8, 2),
    quantity INT NOT NULL DEFAULT 1,
    unit_price_ht NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    total_price_ht NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    glazing_option TEXT,
    color_finish TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. SERVICES & CATEGORIES
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title_fr TEXT NOT NULL,
    title_ar TEXT,
    short_desc_fr TEXT,
    short_desc_ar TEXT,
    full_content_fr TEXT,
    full_content_ar TEXT,
    icon_name TEXT,
    cover_image TEXT,
    advantages JSONB DEFAULT '[]'::jsonb,
    technical_specs JSONB DEFAULT '[]'::jsonb,
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.product_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name_fr TEXT NOT NULL,
    name_ar TEXT,
    description_fr TEXT,
    display_order INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES public.product_categories(id) ON DELETE SET NULL,
    slug TEXT UNIQUE NOT NULL,
    name_fr TEXT NOT NULL,
    name_ar TEXT,
    description_fr TEXT,
    description_ar TEXT,
    material material_type NOT NULL DEFAULT 'aluminium',
    available_colors JSONB DEFAULT '["Gris Anthracite 7016", "Blanc Pur 9010", "Noir Mat 9005", "Chêne Doré (PVC)"]'::jsonb,
    glazing_options JSONB DEFAULT '["Double Vitrage 4/16/4 Argon", "Verre Feuilleté Stadip 44.2", "Contrôle Solaire Planitherm"]'::jsonb,
    cover_image TEXT,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    features JSONB DEFAULT '[]'::jsonb,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. PROJECTS & REALISATIONS (PORTFOLIO)
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title_fr TEXT NOT NULL,
    title_ar TEXT,
    category TEXT NOT NULL DEFAULT 'Façades', -- 'Villas', 'Appartements', 'Commerces', 'Façades', 'Menuiseries', 'Intérieurs'
    city TEXT DEFAULT 'Tanger',
    completion_year INT DEFAULT 2026,
    description_fr TEXT,
    description_ar TEXT,
    cover_image TEXT NOT NULL,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    before_image TEXT,
    after_image TEXT,
    customer_name TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. CONTACT REQUESTS & APPOINTMENTS
CREATE TABLE IF NOT EXISTS public.contact_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    city TEXT DEFAULT 'Tanger',
    project_type TEXT,
    message TEXT NOT NULL,
    tags JSONB DEFAULT '[]'::jsonb,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
    client_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    site_address TEXT NOT NULL,
    appointment_date TIMESTAMPTZ NOT NULL,
    purpose TEXT DEFAULT 'Prise de cotes sur chantier',
    status TEXT DEFAULT 'confirme',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. WHATSAPP CONVERSATIONS & MESSAGES
CREATE TABLE IF NOT EXISTS public.whatsapp_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    phone_number TEXT UNIQUE NOT NULL, -- Ex: 212777077468
    client_name TEXT,
    city TEXT,
    detected_language TEXT DEFAULT 'fr', -- 'fr' ou 'ar'
    qualification_data JSONB DEFAULT '{}'::jsonb,
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    requires_human_intervention BOOLEAN DEFAULT FALSE,
    last_message_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.whatsapp_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES public.whatsapp_conversations(id) ON DELETE CASCADE,
    direction message_direction NOT NULL,
    message_text TEXT NOT NULL,
    wam_id TEXT, -- WhatsApp Message ID from Meta
    status TEXT DEFAULT 'sent',
    payload JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. WEBSITE SETTINGS, SEO & AUDIT LOGS
CREATE TABLE IF NOT EXISTS public.website_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    description TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.seo_metadata (
    route_path TEXT PRIMARY KEY,
    meta_title_fr TEXT NOT NULL,
    meta_title_ar TEXT,
    meta_description_fr TEXT NOT NULL,
    meta_description_ar TEXT,
    keywords TEXT,
    og_image TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. INDEXES POUR LA PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_quote_number ON public.quotes(quote_number);
CREATE INDEX IF NOT EXISTS idx_quotes_status ON public.quotes(status);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category);
CREATE INDEX IF NOT EXISTS idx_whatsapp_conversations_phone ON public.whatsapp_conversations(phone_number);
CREATE INDEX IF NOT EXISTS idx_whatsapp_messages_convo ON public.whatsapp_messages(conversation_id);

-- 12. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.whatsapp_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.whatsapp_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Politiques Publiques en Lecture pour le Site Vitrine
CREATE POLICY "Public read services" ON public.services FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public read categories" ON public.product_categories FOR SELECT USING (TRUE);
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public read projects" ON public.projects FOR SELECT USING (TRUE);
CREATE POLICY "Public read seo" ON public.seo_metadata FOR SELECT USING (TRUE);
CREATE POLICY "Public read settings" ON public.website_settings FOR SELECT USING (TRUE);

-- Politiques Publiques en Écriture pour les Formulaires
CREATE POLICY "Public insert leads" ON public.leads FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public insert contact" ON public.contact_requests FOR INSERT WITH CHECK (TRUE);

-- Politiques Administrateur (Toutes opérations pour le rôle authentifié ou service role)
CREATE POLICY "Admin full access profiles" ON public.profiles FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access customers" ON public.customers FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access leads" ON public.leads FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access quotes" ON public.quotes FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access quote_items" ON public.quote_items FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access services" ON public.services FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access products" ON public.products FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access projects" ON public.projects FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access whatsapp_conv" ON public.whatsapp_conversations FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access whatsapp_msg" ON public.whatsapp_messages FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access settings" ON public.website_settings FOR ALL TO authenticated USING (TRUE);
CREATE POLICY "Admin full access audit" ON public.audit_logs FOR ALL TO authenticated USING (TRUE);

-- 13. TRIGGERS POUR AUTO-UPDATE TIMESTAMP & NUMÉROTATION DEVIS
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON public.leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_quotes_updated_at BEFORE UPDATE ON public.quotes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON public.customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Séquence pour numéros de devis
CREATE SEQUENCE IF NOT EXISTS quote_number_seq START WITH 1001;

CREATE OR REPLACE FUNCTION generate_quote_number()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.quote_number IS NULL OR NEW.quote_number = '' THEN
        NEW.quote_number := 'DEV-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(NEXTVAL('quote_number_seq')::TEXT, 4, '0');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_generate_quote_number BEFORE INSERT ON public.quotes FOR EACH ROW EXECUTE FUNCTION generate_quote_number();

-- 14. SEED DATA : DONNÉES INITIALES VÉRIFIÉES
INSERT INTO public.website_settings (key, value, description)
VALUES 
('company_info', '{
    "name": "CRISTALU NORD",
    "activity": "Menuiserie Aluminium & PVC · Façades & Vitrages",
    "phone": "+212777077468",
    "phone_display": "+212 777 077 468",
    "whatsapp": "212777077468",
    "email": "contact@cristalunord.ma",
    "address": "Tanger, Région Tanger-Tétouan-Al Hoceïma, Maroc",
    "hours": "Lundi au Samedi : 08h30 - 18h30",
    "area_served": ["Tanger", "Tétouan", "Martil", "Fnideq", "Kénitra", "Rabat", "Casablanca", "Maroc"]
}'::jsonb, 'Coordonnées officielles de l’entreprise')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Insertion des 3 services clés
INSERT INTO public.services (slug, title_fr, title_ar, short_desc_fr, icon_name, cover_image, display_order)
VALUES
('menuiserie-aluminium', 'Menuiserie Aluminium Haute Performance', 'نجارة الألمنيوم عالية الجودة', 'Baies coulissantes panoramiques, fenêtres à rupture de pont thermique (RPT), portes contemporaines et cloisons de bureau.', 'Layers', '/assets/atelier.webp', 1),
('menuiserie-pvc', 'Menuiserie PVC Isolante', 'نجارة البي في سي العازلة', 'Performance thermique et acoustique exceptionnelle, profilés multichambres anti-UV adaptés au climat côtier marocain.', 'ShieldCheck', '/assets/pvc.webp', 2),
('vitrage-facades', 'Façades Vitrées & Verre Architectural', 'واجهات زجاجية وزجاج معماري', 'Murs rideaux vitrés, habillage Alucobond, garde-corps en verre sécurit et verrières intérieures style atelier.', 'Maximize', '/assets/verre.webp', 3)
ON CONFLICT (slug) DO NOTHING;

-- Insertion des projets du portfolio
INSERT INTO public.projects (slug, title_fr, category, city, completion_year, description_fr, cover_image, is_featured, display_order)
VALUES
('habillage-facade-commerciale', 'Habillage de façade commerciale & baies vitrées', 'Façades', 'Tanger', 2026, 'Habillage complet en panneaux composites Alucobond avec intégration de vitrages à contrôle solaire et menuiseries aluminium sur mesure.', '/assets/projet1.webp', TRUE, 1),
('tour-structure-vitree', 'Tour & mur rideau architectural', 'Façades', 'Tétouan', 2026, 'Structure verticale avec ouvertures aluminium coordonnées et ossature métallique pour bâtiment tertiaire.', '/assets/projet2.webp', TRUE, 2),
('paroi-douche-inox', 'Cabine de douche vitrée sur mesure & inox', 'Intérieurs', 'Tanger', 2026, 'Paroi et porte en verre trempé sécurit avec ferronnerie inox haut de gamme et coulissement fluide.', '/assets/projet3.webp', FALSE, 3),
('garde-corps-escalier', 'Garde-corps d’escalier en verre feuilleté', 'Intérieurs', 'Kénitra', 2026, 'Garde-corps tout verre sécurit avec fixations discrètes en acier inoxydable, alliant transparence et sécurité.', '/assets/projet4.webp', TRUE, 4),
('menuiseries-immeuble-residentiel', 'Menuiseries aluminium pour ensemble résidentiel', 'Menuiseries', 'Tanger', 2026, 'Équipement complet d’un immeuble : fenêtres coulissantes, portes-fenêtres avec volets roulants motorisés.', '/assets/projet5.webp', TRUE, 5),
('facade-composite-noir', 'Habillage extérieur composite noir mat', 'Façades', 'Tanger', 2026, 'Habillage composite finition noir mat avec intégration de baies aluminium affleurantes.', '/assets/projet6.webp', TRUE, 6)
ON CONFLICT (slug) DO NOTHING;
