import { ServiceItem, ProductItem, ProjectItem, Lead, Quote, ProjectTracking, WhatsAppConversation } from '@/types';

export const INITIAL_COMPANY_INFO = {
  name: "CRISTALU NORD",
  activity: "Menuiserie Aluminium & PVC · Façades & Vitrages Architecturaux",
  phone: "+212777077468",
  phone_display: "+212 777 077 468",
  whatsapp: "212777077468",
  email: "contact@cristalunord.ma",
  address: "Tanger, Région Tanger-Tétouan-Al Hoceïma, Maroc",
  hours: "Lundi au Samedi : 08h30 - 18h30",
  area_served: [
    "Tanger",
    "Tétouan",
    "Martil",
    "Fnideq",
    "M'diq",
    "Asilah",
    "Larache",
    "Kénitra",
    "Rabat",
    "Casablanca",
    "Tout le Maroc",
  ],
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "srv-alu",
    slug: "menuiserie-aluminium",
    title_fr: "Menuiserie Aluminium Haute Performance",
    title_ar: "نجارة الألمنيوم عالية الجودة",
    short_desc_fr: "Baies vitrées panoramiques, fenêtres à rupture de pont thermique (RPT), portes contemporaines et cloisons pour espaces résidentiels et professionnels.",
    short_desc_ar: "نوافذ وأبواب وواجهات ألمنيوم متطورة عازلة للحرارة والصوت بتشطيبات راقية.",
    full_content_fr: "L'aluminium est le matériau de prédilection de l'architecture contemporaine. Cristalu Nord conçoit, usine et pose des profilés aluminium de haute précision avec rupture de pont thermique (RPT) répondant aux normes thermiques et anticycloniques les plus exigeantes. Nos baies vitrées de grandes dimensions maximisent l'apport en lumière naturelle tout en garantissant une étanchéité parfaite à l'air et à l'eau.",
    full_content_ar: "يعد الألمنيوم الخيار الأول للعمارة الحديثة. نقوم بتصنيع وتركيب بروفايلات الألمنيوم العازلة بمواصفات عالمية.",
    icon_name: "Layers",
    cover_image: "/assets/atelier.webp",
    advantages: [
      "Profilés aluminium à rupture de pont thermique (RPT)",
      "Baies vitrées panoramiques et systèmes à galandage",
      "Thermolaquage certifié Qualicoat résistant aux UV et embruns marins",
      "Quincailleries et serrures multipoints sécurisées",
      "Fabrication 100% sur mesure en atelier",
    ],
    technical_specs: [
      { label: "Types d'ouvertures", value: "Coulissant, Battant, Oscillo-battant, Pivot, Galandage" },
      { label: "Isolation thermique", value: "Profilés RPT avec barrette polyamide haute densité" },
      { label: "Finitions disponibles", value: "Anodisé naturel, Noir mat 9005, Gris anthracite 7016, Blanc 9010" },
      { label: "Vitrage compatible", value: "Simple, Double vitrage 4/16/4, Verre feuilleté acoustique" },
      { label: "Garantie", value: "Garantie décennale sur profilés et pose soignée" },
    ],
    is_active: true,
    display_order: 1,
  },
  {
    id: "srv-pvc",
    slug: "menuiserie-pvc",
    title_fr: "Menuiserie PVC Haute Isolation",
    title_ar: "نجارة البي في سي العازلة",
    short_desc_fr: "Fenêtres et portes PVC multichambres anti-UV offrant une isolation thermique et acoustique maximale, idéales pour le climat côtier marocain.",
    short_desc_ar: "حلول نوافذ وأبواب بي في سي توفر أعلى مستويات العزل الحراري والصوتي وسهولة الصيانة.",
    full_content_fr: "Pour une isolation thermo-acoustique sans compromis et un excellent rapport qualité/prix, notre gamme de menuiseries PVC répond aux exigences du confort moderne. Les profilés multichambres associés au double vitrage isolant au gaz argon réduisent drastiquement les déperditions d'énergie et suppriment les nuisances sonores urbaines.",
    full_content_ar: "نوافذ وأبواب PVC متعددة الحجرات توفر عزلاً حرارياً وصوتياً متكاملاً يدوم لسنوات دون حاجة للصيانة.",
    icon_name: "ShieldCheck",
    cover_image: "/assets/pvc.webp",
    advantages: [
      "Isolation thermique et acoustique de premier ordre",
      "Profilés PVC traités anti-jaunissement et anti-UV intenses",
      "Étanchéité renforcée par double joint d'étanchéité EPDM",
      "Entretien quasi nul, nettoyage facile à l'eau claire",
      "Écologique et 100% recyclable",
    ],
    technical_specs: [
      { label: "Structure", value: "Profilés multichambres à renforts en acier galvanisé" },
      { label: "Performance thermique", value: "Coefficient Uw jusqu'à 1.2 W/m²K" },
      { label: "Affaiblissement acoustique", value: "Jusqu'à 42 dB avec vitrage acoustique" },
      { label: "Teintes", value: "Blanc pur, Ivoire, Plaxage imitation Chêne doré, Anthracite" },
      { label: "Normes", value: "Conforme aux normes de construction RTCM Maroc" },
    ],
    is_active: true,
    display_order: 2,
  },
  {
    id: "srv-verre",
    slug: "vitrage-facades",
    title_fr: "Façades Vitrées, Murs Rideaux & Verre Architectural",
    title_ar: "واجهات زجاجية وزجاج معماري",
    short_desc_fr: "Habillage composite Alucobond, façades vitrées continues, garde-corps en verre trempé sécurit et verrières intérieures style atelier.",
    short_desc_ar: "واجهات زجاجية عصرية، تكسية الألوكوبوند، ودرابزين زجاجي آمن وديكورات داخلية.",
    full_content_fr: "Sublimez l'esthétique de vos façades et intérieurs avec nos solutions de vitrage architectural. Cristalu Nord prend en charge la conception et la pose de murs rideaux vitrés pour immeubles et showrooms, l'habillage en panneaux composites (Alucobond / Stacbond), ainsi que les verrières d'intérieur et garde-corps en verre trempé feuilleté.",
    full_content_ar: "تصميم وتنفيذ الواجهات الزجاجية المتصلة والألواح المركبة وتجهيزات الزجاج المقسى.",
    icon_name: "Maximize",
    cover_image: "/assets/verre.webp",
    advantages: [
      "Apport maximal de lumière naturelle et perspectives architecturales",
      "Vitrages sécurisés : Verre trempé Sécurit et Verre Feuilleté Stadip",
      "Traitement à contrôle solaire pour réduire la chaleur estivale",
      "Habillage de façade en panneaux aluminium composite résistant aux intempéries",
      "Garde-corps épurés tout verre avec fixations discrètes en inox",
    ],
    technical_specs: [
      { label: "Types de vitrage", value: "Trempé (Securit), Feuilleté 44.2/66.2, Double vitrage contrôle solaire" },
      { label: "Systèmes de façade", value: "Mur rideau VEC (Verre Extérieur Collé), VEP (Parclosé), Grille" },
      { label: "Habillage composite", value: "Panneaux sandwich aluminium 4mm ignifuges" },
      { label: "Garde-corps", value: "Profilé sabot continu au sol ou pinces inox 316L" },
    ],
    is_active: true,
    display_order: 3,
  },
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    category_slug: "menuiserie-aluminium",
    slug: "baie-vitree-coulissante-aluminium",
    name_fr: "Baie Vitrée Coulissante Aluminium RPT",
    name_ar: "نافذة ألمنيوم منزلقة كبيرة",
    description_fr: "Baie vitrée coulissante à 2, 3 ou 4 vantaux sur rails inox. Profilés fins à rupture de pont thermique pour une vue panoramique et une manœuvre fluide.",
    description_ar: "أبواب ونوافذ ألمنيوم منزلقة بمواصفات عالية وزجاج مزدوج.",
    material: "aluminium",
    available_colors: ["Gris Anthracite 7016", "Noir Mat 9005", "Blanc 9010", "Bronze Anodisé"],
    glazing_options: ["Double Vitrage 4/16/4 Argon", "Contrôle Solaire Planitherm", "Feuilleté Silence 44.2"],
    cover_image: "/assets/projet1.webp",
    features: [
      "Rupture de pont thermique haute performance",
      "Roulements inox à aiguilles ultra-silencieux",
      "Fermeture multipoints sécurisée",
      "Seuil affleurant pour accès PMR possible",
    ],
    is_featured: true,
    is_active: true,
  },
  {
    id: "prod-2",
    category_slug: "menuiserie-aluminium",
    slug: "fenetre-battante-oscillo-battante-alu",
    name_fr: "Fenêtre Battante & Oscillo-Battante Alu",
    name_ar: "نافذة ألمنيوم مفصلية قابلة للإمالة",
    description_fr: "Fenêtre à ouvrant caché ou visible, combinant ouverture à la française et aération sécurisée en imposte oscillo-battante.",
    description_ar: "نافذة ألمنيوم متعددة وضعيات الفتح بتصميم عصري.",
    material: "aluminium",
    available_colors: ["Gris Anthracite 7016", "Blanc 9010", "Noir Mat 9005"],
    glazing_options: ["Double Vitrage 4/16/4", "Double Vitrage Acoustique"],
    cover_image: "/assets/projet5.webp",
    features: [
      "Quincaillerie invisible ou visible haut de gamme",
      "Triple joint d'étanchéité périphérique",
      "Micro-ventilation intégrée",
    ],
    is_featured: true,
    is_active: true,
  },
  {
    id: "prod-3",
    category_slug: "menuiserie-pvc",
    slug: "fenetre-pvc-haute-isolation",
    name_fr: "Fenêtre PVC 5 Chambres Haute Isolation",
    name_ar: "نافذة بي في سي عازلة خماسية الحجرات",
    description_fr: "Fenêtre PVC haute performance assurant une barrière thermique et phonique exceptionnelle contre le bruit extérieur et les écarts de température.",
    description_ar: "نوافذ بي في سي عالية العزل لمقاومة الحرارة والصوت والرطوبة.",
    material: "pvc",
    available_colors: ["Blanc Pur 9010", "Chêne Doré", "Anthracite structuré"],
    glazing_options: ["Double Vitrage 4/16/4 Gaz Argon", "Triple Vitrage sur demande"],
    cover_image: "/assets/pvc.webp",
    features: [
      "Profilé 5 chambres avec renforts métalliques",
      "Haute étanchéité à l'air et à l'eau A*4 E*9A V*A3",
      "Traitement spécial climat méditerranéen",
    ],
    is_featured: true,
    is_active: true,
  },
  {
    id: "prod-4",
    category_slug: "vitrage-facades",
    slug: "garde-corps-tout-verre-securit",
    name_fr: "Garde-corps Tout Verre Trempé Feuilleté",
    name_ar: "درابزين زجاجي أمان مقسى",
    description_fr: "Garde-corps en verre de sécurité feuilleté trempé 88.2 / 1010.2 fixé par profilé sabot encastré au sol ou pinces inox brossé 316L.",
    description_ar: "درابزين زجاجي عصري بدون حواف لشرفة أو درج أنيق.",
    material: "verre",
    available_colors: ["Verre Extra-clair", "Verre Teinté Gris", "Verre Dépoli Intimité"],
    glazing_options: ["Verre Trempé Feuilleté 88.2", "Verre Trempé Feuilleté 1010.2"],
    cover_image: "/assets/projet4.webp",
    features: [
      "Conforme aux normes de sécurité garde-corps",
      "Fixation sur dalle ou en applique",
      "Main courante inox ou profil aluminium optionnel",
    ],
    is_featured: true,
    is_active: true,
  },
  {
    id: "prod-5",
    category_slug: "vitrage-facades",
    slug: "facade-composite-alucobond-murs-rideaux",
    name_fr: "Façade Mur Rideau & Habillage Alucobond",
    name_ar: "واجهات زجاجية وتكسية ألوكوبوند",
    description_fr: "Habillage extérieur moderne de bâtiments commerciaux, sièges sociaux et villas. Allie isolation thermique extérieure et modernité architecturale.",
    description_ar: "واجهات ألومنيوم وزجاج متكاملة للمباني والشركات.",
    material: "mixte",
    available_colors: ["Noir Mat", "Gris Métallisé", "Effet Bois", "Doré / Bronze"],
    glazing_options: ["Vitrages Réfléchissants & Contrôle Solaire", "Verre Trempé Emaillé"],
    cover_image: "/assets/projet6.webp",
    features: [
      "Sous-structure aluminium ventilée",
      "Panneaux composites classe anti-feu B-s1,d0",
      "Finition esthétique irréprochable et durable",
    ],
    is_featured: true,
    is_active: true,
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "habillage-facade-commerciale-tanger",
    title_fr: "Habillage de façade commerciale & bandeaux vitrés",
    title_ar: "تكسية واجهة تجارية ونوافذ زجاجية بطنجة",
    category: "Façades",
    city: "Tanger",
    completion_year: 2026,
    description_fr: "Conception et réalisation d'un habillage de façade en panneaux composites avec intégration de vitrages dorés à contrôle solaire et menuiseries aluminium sur mesure.",
    description_ar: "تنفيذ تكسية واجهة تجارية بأحدث تقنيات الألمنيوم والزجاج العاكس للشمس.",
    cover_image: "/assets/projet1.webp",
    gallery_images: ["/assets/projet1.webp", "/assets/facade.webp"],
    is_featured: true,
    display_order: 1,
  },
  {
    id: "proj-2",
    slug: "tour-structure-vitree-tetouan",
    title_fr: "Tour & mur rideau architectural",
    title_ar: "برج وهيكل زجاجي معماري بتطوان",
    category: "Façades",
    city: "Tétouan",
    completion_year: 2026,
    description_fr: "Structure verticale intégrant des ouvertures en aluminium coordonnées et une ossature métallique robuste pour un bâtiment moderne.",
    description_ar: "هيكل زجاجي مع فتحات ألمنيوم منسقة لمبنى متعدد الطوابق.",
    cover_image: "/assets/projet2.webp",
    gallery_images: ["/assets/projet2.webp"],
    is_featured: true,
    display_order: 2,
  },
  {
    id: "proj-3",
    slug: "paroi-douche-inox-sur-mesure",
    title_fr: "Paroi de douche vitrée sur mesure & ferronnerie inox",
    title_ar: "كابينة استحمام زجاجية مخصصة وإينوكس",
    category: "Intérieurs",
    city: "Tanger",
    completion_year: 2026,
    description_fr: "Paroi et porte en verre trempé sécurit avec ferronnerie inox haut de gamme, jointoiement étanche invisible et coulissement fluide.",
    description_ar: "تركيب زجاج مقسى عالي الجودة مع إكسسوارات ستانلس ستيل مضادة للصدأ.",
    cover_image: "/assets/projet3.webp",
    gallery_images: ["/assets/projet3.webp"],
    is_featured: false,
    display_order: 3,
  },
  {
    id: "proj-4",
    slug: "garde-corps-escalier-kenitra",
    title_fr: "Garde-corps d’escalier en verre feuilleté",
    title_ar: "درابزين درج زجاجي أمان بالقنيطرة",
    category: "Intérieurs",
    city: "Kénitra",
    completion_year: 2026,
    description_fr: "Garde-corps d'escalier tout verre sécurit avec fixations discrètes en acier inoxydable, alliant transparence totale et sécurité absolue.",
    description_ar: "درابزين زجاجي أمان للدرج الداخلي بدون إطارات بارزة.",
    cover_image: "/assets/projet4.webp",
    gallery_images: ["/assets/projet4.webp"],
    is_featured: true,
    display_order: 4,
  },
  {
    id: "proj-5",
    slug: "menuiseries-immeuble-residentiel-tanger",
    title_fr: "Menuiseries aluminium pour ensemble résidentiel",
    title_ar: "نجارة ألمنيوم لمجمع سكني بطنجة",
    category: "Menuiseries",
    city: "Tanger",
    completion_year: 2026,
    description_fr: "Équipement complet d'un immeuble neuf : fenêtres coulissantes, portes-fenêtres avec volets intégrés et balcons coordonnés.",
    description_ar: "تجهيز كامل لبناية سكنية بنوافذ وأبواب ألمنيوم عالية الجودة.",
    cover_image: "/assets/projet5.webp",
    gallery_images: ["/assets/projet5.webp"],
    is_featured: true,
    display_order: 5,
  },
  {
    id: "proj-6",
    slug: "habillage-composite-noir-mat",
    title_fr: "Habillage de façade composite noir contemporain",
    title_ar: "تكسية واجهة بالأسود المات العصري",
    category: "Façades",
    city: "Tanger",
    completion_year: 2026,
    description_fr: "Habillage composite haute résistance finition noir mat avec intégration de baies aluminium affleurantes pour un rendu architectural épuré.",
    description_ar: "تكسية بألواح ألمنيوم مركبة سوداء غير لامعة مع فتحات متناسقة.",
    cover_image: "/assets/projet6.webp",
    gallery_images: ["/assets/projet6.webp"],
    is_featured: true,
    display_order: 6,
  },
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-101",
    full_name: "Youssef El Amrani",
    phone: "+212 661 234 567",
    email: "youssef.amrani@gmail.com",
    city: "Tanger",
    project_type: "Baies vitrées villa",
    material: "aluminium",
    estimated_budget: 85000,
    source: "Configurateur Devis Web",
    status: "qualifie",
    notes: "Villa en construction à Malabata. Souhaite des profilés RPT noir mat avec vitrage contrôle solaire.",
    created_at: "2026-10-24T14:30:00Z",
    updated_at: "2026-10-24T15:10:00Z",
  },
  {
    id: "lead-102",
    full_name: "Cabinet Architectes & Design",
    phone: "+212 539 940 120",
    email: "projets@archidesign.ma",
    city: "Tétouan",
    project_type: "Mur rideau showroom",
    material: "verre",
    estimated_budget: 140000,
    source: "WhatsApp Assistant",
    status: "devis_envoye",
    notes: "Showroom automobile. Mur rideau 12m x 4.5m avec vitrage trempé 10mm.",
    created_at: "2026-10-23T10:15:00Z",
    updated_at: "2026-10-24T09:00:00Z",
  },
  {
    id: "lead-103",
    full_name: "Mehdi Bennani",
    phone: "+212 662 889 900",
    email: "m.bennani@outlook.com",
    city: "Kénitra",
    project_type: "Fenêtres PVC rénovation",
    material: "pvc",
    estimated_budget: 32000,
    source: "Formulaire Contact",
    status: "contacte",
    notes: "Remplacement de 6 fenêtres appartement. Recherche isolation acoustique maximale.",
    created_at: "2026-10-25T08:45:00Z",
    updated_at: "2026-10-25T09:12:00Z",
  },
];

export const INITIAL_QUOTES: Quote[] = [
  {
    id: "quote-1001",
    quote_number: "DEV-2026-1001",
    client_name: "Youssef El Amrani",
    client_phone: "+212 661 234 567",
    client_email: "youssef.amrani@gmail.com",
    city: "Tanger",
    site_address: "Lotissement Malabata Hills, Villa 14, Tanger",
    status: "envoye",
    title: "Fourniture & Pose Baies Vitrées Coulissantes RPT et Fenêtres",
    subtotal_ht: 72500.00,
    discount_percentage: 5.00,
    discount_amount: 3625.00,
    tva_rate: 20.00,
    tva_amount: 13775.00,
    total_ttc: 82650.00,
    validity_days: 30,
    payment_terms: "50% à la commande, 40% au démarrage de la pose, 10% à la réception.",
    notes: "Profilés série RPT haut de gamme, vitrage double 4/16/4 Planitherm 4S.",
    items: [
      {
        id: "item-1",
        quote_id: "quote-1001",
        item_order: 1,
        description: "Baie vitrée coulissante 2 vantaux aluminium RPT (Série Prestige 70mm)",
        material: "aluminium",
        width_cm: 280,
        height_cm: 240,
        quantity: 2,
        unit_price_ht: 18500.00,
        total_price_ht: 37000.00,
        glazing_option: "Double Vitrage 4/16/4 Argon Contrôle Solaire",
        color_finish: "Gris Anthracite RAL 7016 Structuré",
      },
      {
        id: "item-2",
        quote_id: "quote-1001",
        item_order: 2,
        description: "Fenêtre battante oscillo-battante 2 vantaux avec ouvrant masqué",
        material: "aluminium",
        width_cm: 140,
        height_cm: 130,
        quantity: 5,
        unit_price_ht: 4500.00,
        total_price_ht: 22500.00,
        glazing_option: "Double Vitrage 4/16/4 Thermique",
        color_finish: "Gris Anthracite RAL 7016 Structuré",
      },
      {
        id: "item-3",
        quote_id: "quote-1001",
        item_order: 3,
        description: "Porte d'entrée aluminium contemporaine avec serrure 5 points et panneau décoratif",
        material: "aluminium",
        width_cm: 110,
        height_cm: 225,
        quantity: 1,
        unit_price_ht: 13000.00,
        total_price_ht: 13000.00,
        glazing_option: "Verre feuilleté décoratif Stadip",
        color_finish: "Noir Mat RAL 9005",
      },
    ],
    created_at: "2026-10-24T16:00:00Z",
    updated_at: "2026-10-24T16:45:00Z",
  },
];

export const INITIAL_PROJECT_TRACKINGS: ProjectTracking[] = [
  {
    id: "proj-track-1",
    client_name: "Youssef El Amrani",
    site_address: "Malabata Hills Villa 14, Tanger",
    menuiserie_type: "Baies vitrées RPT & Fenêtres",
    responsible: "M. Khalid (Chef d'atelier)",
    start_date: "2026-10-28",
    delivery_date: "2026-11-18",
    progress_percentage: 35,
    status: "en_fabrication",
    notes: "Découpe des profilés terminée, assemblage des cadres en cours à l'atelier.",
  },
  {
    id: "proj-track-2",
    client_name: "Immeuble Marina Bay",
    site_address: "Avenue Mohammed VI, Tanger",
    menuiserie_type: "Habillage Alucobond & Murs Rideaux",
    responsible: "M. Ahmed (Superviseur chantier)",
    start_date: "2026-10-15",
    delivery_date: "2026-11-05",
    progress_percentage: 80,
    status: "en_pose",
    notes: "Pose de l'ossature terminée, fixation des panneaux composites à 80%.",
  },
];

export const INITIAL_WHATSAPP_CONVERSATIONS: WhatsAppConversation[] = [
  {
    id: "wa-conv-1",
    phone_number: "212661234567",
    client_name: "Youssef El Amrani",
    city: "Tanger",
    detected_language: "fr",
    qualification_data: {
      project_type: "Baie vitrée coulissante",
      material: "Aluminium RPT",
      dimensions: "280 x 240 cm",
      city: "Tanger",
    },
    requires_human_intervention: false,
    last_message_at: "2026-10-25T10:14:00Z",
    messages: [
      {
        id: "msg-1",
        conversation_id: "wa-conv-1",
        direction: "inbound",
        message_text: "Bonjour, je cherche une grande baie vitrée coulissante en aluminium pour ma villa à Tanger.",
        status: "read",
        created_at: "2026-10-25T10:10:00Z",
      },
      {
        id: "msg-2",
        conversation_id: "wa-conv-1",
        direction: "outbound",
        message_text: "Bonjour et bienvenue chez CRISTALU NORD ! Nous concevons des baies vitrées aluminium sur mesure avec rupture de pont thermique. Pourriez-vous nous indiquer les dimensions approximatives ?",
        status: "delivered",
        created_at: "2026-10-25T10:11:00Z",
      },
      {
        id: "msg-3",
        conversation_id: "wa-conv-1",
        direction: "inbound",
        message_text: "Environ 2.80m de large sur 2.40m de hauteur.",
        status: "read",
        created_at: "2026-10-25T10:13:00Z",
      },
      {
        id: "msg-4",
        conversation_id: "wa-conv-1",
        direction: "outbound",
        message_text: "Parfait ! Souhaitez-vous un double vitrage à contrôle solaire pour réduire la chaleur ? Nous préparons votre estimation technique.",
        status: "sent",
        created_at: "2026-10-25T10:14:00Z",
      },
    ],
  },
  {
    id: "wa-conv-2",
    phone_number: "212677889900",
    client_name: "Hassan (Kénitra)",
    city: "Kénitra",
    detected_language: "ar",
    qualification_data: {
      project_type: "نوافذ بي في سي",
      material: "PVC",
      city: "القنيطرة",
    },
    requires_human_intervention: true,
    last_message_at: "2026-10-25T11:05:00Z",
    messages: [
      {
        id: "msg-201",
        conversation_id: "wa-conv-2",
        direction: "inbound",
        message_text: "السلام عليكم، واش كديرو التركيب في القنيطرة؟ بغيت نسول على نوافذ بي في سي عازلة للصوت.",
        status: "read",
        created_at: "2026-10-25T11:00:00Z",
      },
      {
        id: "msg-202",
        conversation_id: "wa-conv-2",
        direction: "outbound",
        message_text: "وعليكم السلام ورحمة الله وبركاتة. مرحباً بك في كريستالو نورد (CRISTALU NORD). نعم نقوم بتصنيع وتركيب نوافذ PVC العازلة للصوت والحرارة في القنيطرة وكافة مدن المغرب. كم نافذة ترغب في تركيبها؟",
        status: "delivered",
        created_at: "2026-10-25T11:02:00Z",
      },
      {
        id: "msg-203",
        conversation_id: "wa-conv-2",
        direction: "inbound",
        message_text: "عندي 4 نوافذ في شقة، وبغيت التقني يجي ياخد العبار في الورش.",
        status: "read",
        created_at: "2026-10-25T11:05:00Z",
      },
    ],
  },
];

// Persistent in-memory state for runtime operations
class MockDataStore {
  leads: Lead[] = [...INITIAL_LEADS];
  quotes: Quote[] = [...INITIAL_QUOTES];
  projectTrackings: ProjectTracking[] = [...INITIAL_PROJECT_TRACKINGS];
  conversations: WhatsAppConversation[] = [...INITIAL_WHATSAPP_CONVERSATIONS];
  settings: Record<string, unknown> = { ...INITIAL_COMPANY_INFO };

  addLead(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at'>): Lead {
    const newLead: Lead = {
      ...lead,
      id: `lead-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.leads.unshift(newLead);
    return newLead;
  }

  addQuote(quoteData: Omit<Quote, 'id' | 'quote_number' | 'created_at' | 'updated_at'>): Quote {
    const year = new Date().getFullYear();
    const count = this.quotes.length + 1001;
    const newQuote: Quote = {
      ...quoteData,
      id: `quote-${Date.now()}`,
      quote_number: `DEV-${year}-${count}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.quotes.unshift(newQuote);
    return newQuote;
  }

  updateLeadStatus(id: string, status: Lead['status']): Lead | null {
    const lead = this.leads.find((l) => l.id === id);
    if (lead) {
      lead.status = status;
      lead.updated_at = new Date().toISOString();
      return lead;
    }
    return null;
  }

  updateQuoteStatus(id: string, status: Quote['status']): Quote | null {
    const quote = this.quotes.find((q) => q.id === id);
    if (quote) {
      quote.status = status;
      quote.updated_at = new Date().toISOString();
      return quote;
    }
    return null;
  }
}

// Global singleton instance for runtime state persistence
const globalStore = global as unknown as { __cristaluDataStore?: MockDataStore };
export const dataStore = globalStore.__cristaluDataStore || new MockDataStore();
if (process.env.NODE_ENV !== 'production') {
  globalStore.__cristaluDataStore = dataStore;
}
