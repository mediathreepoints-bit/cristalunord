export interface AgentResponse {
  replyText: string;
  detectedLanguage: 'fr' | 'ar';
  qualification: {
    project_type?: string;
    material?: string;
    dimensions?: string;
    city?: string;
    budget?: string;
  };
  requiresHuman: boolean;
  step: 'welcome' | 'need' | 'dimensions' | 'city' | 'ready' | 'handoff';
}

export function detectLanguage(text: string): 'fr' | 'ar' {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
  if (arabicRegex.test(text)) return 'ar';

  const darijaKeywords = ['salam', 'khti', 'khoya', 'chhal', 'fin', 'wach', 'dyal', 'bghit', '3afak', 'kayn'];
  const lower = text.toLowerCase();
  if (darijaKeywords.some((w) => lower.includes(w))) return 'ar';

  return 'fr';
}

export function processAgentMessage(
  userMessage: string,
  history: { role: 'user' | 'assistant'; text: string }[] = []
): AgentResponse {
  const lang = detectLanguage(userMessage);
  const lower = userMessage.toLowerCase();

  // Qualification state extraction
  const qual: AgentResponse['qualification'] = {};

  // Extract material
  if (lower.includes('alu') || lower.includes('aluminium') || userMessage.includes('ألمنيوم')) {
    qual.material = 'Aluminium';
  } else if (lower.includes('pvc') || userMessage.includes('بي في سي')) {
    qual.material = 'PVC';
  } else if (lower.includes('verre') || lower.includes('vitre') || userMessage.includes('زجاج')) {
    qual.material = 'Verre / Façade';
  }

  // Extract dimensions pattern (e.g., 120x140, 120*140, 2m, etc.)
  const dimMatch = userMessage.match(/(\d+(?:[.,]\d+)?\s*(?:cm|m)?\s*[xX*×by/]\s*\d+(?:[.,]\d+)?\s*(?:cm|m)?)/i);
  if (dimMatch) {
    qual.dimensions = dimMatch[1];
  }

  // Extract cities
  const cities = ['tanger', 'tétouan', 'tetouan', 'martil', 'fnideq', 'kénitra', 'kenitra', 'rabat', 'casablanca', 'fes', 'fès', 'larache', 'asilah'];
  for (const c of cities) {
    if (lower.includes(c)) {
      qual.city = c.charAt(0).toUpperCase() + c.slice(1);
      break;
    }
  }

  // Human handoff keywords
  if (
    lower.includes('humain') ||
    lower.includes('conseiller') ||
    lower.includes('responsable') ||
    lower.includes('directeur') ||
    userMessage.includes('مسؤول') ||
    userMessage.includes('تقني')
  ) {
    if (lang === 'ar') {
      return {
        replyText: "تم تحويل محادثتكم إلى أحد المستشارين التقنيين في CRISTALU NORD. سيقوم بالرد عليكم مباشرة في أقرب وقت. كما يمكنكم الاتصال مباشرة على: +212 777 077 468.",
        detectedLanguage: 'ar',
        qualification: qual,
        requiresHuman: true,
        step: 'handoff',
      };
    }
    return {
      replyText: "J'ai bien noté votre demande. Je transmets immédiatement votre conversation à l'un de nos conseillers techniques Cristalu Nord qui va prendre le relais. Vous pouvez également nous joindre directement au +212 777 077 468.",
      detectedLanguage: 'fr',
      qualification: qual,
      requiresHuman: true,
      step: 'handoff',
    };
  }

  // Conversational tree
  if (history.length === 0 || lower.includes('bonjour') || lower.includes('salut') || lower.includes('salam') || userMessage.includes('السلام')) {
    if (lang === 'ar') {
      return {
        replyText: "مرحباً بكم في كريستالو نورد (CRISTALU NORD) — المتخصصون في نجارة الألمنيوم، PVC والواجهات الزجاجية بالمغرب.\n\nيسعدنا مساعدتكم في إعداد دراسة أو عرض سعر لمشروعكم. هل تبحثون عن نوافذ، أبواب، واجهات زجاجية، أم تكسية ألوكوبوند؟ وفي أي مدينة يقع المشروع؟",
        detectedLanguage: 'ar',
        qualification: qual,
        requiresHuman: false,
        step: 'need',
      };
    }
    return {
      replyText: "Bonjour et bienvenue chez CRISTALU NORD !\n\nNous sommes spécialisés dans la menuiserie aluminium haut de gamme, le PVC isolant et les façades vitrées sur mesure au Maroc.\n\nPour vous orienter au mieux, pourriez-vous préciser la nature de votre projet (fenêtres, baies vitrées, façade, garde-corps) et la ville où se situe votre chantier ?",
      detectedLanguage: 'fr',
      qualification: qual,
      requiresHuman: false,
      step: 'need',
    };
  }

  if (qual.dimensions && !qual.city) {
    if (lang === 'ar') {
      return {
        replyText: `شكراً على تحديد الأبعاد (${qual.dimensions}). هل تفضلون نظام الفتح المنزلق (Coulissant) أم المفصلي (Battant)؟ وفي أي مدينة يقع الورش لأخذ القياسات الدقيقة؟`,
        detectedLanguage: 'ar',
        qualification: qual,
        requiresHuman: false,
        step: 'city',
      };
    }
    return {
      replyText: `Merci pour ces dimensions (${qual.dimensions}). Souhaitez-vous un système coulissant ou à ouverture battante ? Dans quelle ville se situe votre chantier pour organiser la prise de cotes ?`,
      detectedLanguage: 'fr',
      qualification: qual,
      requiresHuman: false,
      step: 'city',
    };
  }

  // General helpful response
  if (lang === 'ar') {
    return {
      replyText: "ممتاز ! لقد تم تسجيل كافة تفاصيل طلبكم. يقوم فريقنا التقني في CRISTALU NORD بدراسة المعطيات للتواصل معكم وتحديد موعد لزيارة الورش مجاناً.\n\nللتواصل المباشر والسريع مع الورش: +212 777 077 468.",
      detectedLanguage: 'ar',
      qualification: qual,
      requiresHuman: false,
      step: 'ready',
    };
  }

  return {
    replyText: "Parfait ! Vos informations ont bien été prises en compte. Notre équipe technique Cristalu Nord prépare votre estimation et peut se déplacer gratuitement pour la prise de cotes sur votre chantier.\n\nUn conseiller vous recontacte très rapidement. Téléphone direct : +212 777 077 468.",
    detectedLanguage: 'fr',
    qualification: qual,
    requiresHuman: false,
    step: 'ready',
  };
}
