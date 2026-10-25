export function getLocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cristalunord.ma';

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'CRISTALU NORD',
    image: `${siteUrl}/assets/og-image.jpg`,
    logo: `${siteUrl}/assets/logo-cristalu-nord.png`,
    description: 'Menuiserie aluminium haute performance, PVC isolant, façades vitrées, murs rideaux et garde-corps sur mesure au Maroc.',
    telephone: '+212777077468',
    email: 'contact@cristalunord.ma',
    url: siteUrl,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tanger',
      addressRegion: 'Tanger-Tétouan-Al Hoceïma',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.7595',
      longitude: '-5.8340',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '18:30',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Tanger' },
      { '@type': 'City', name: 'Tétouan' },
      { '@type': 'City', name: 'Kénitra' },
      { '@type': 'City', name: 'Rabat' },
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'Country', name: 'Maroc' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Menuiserie et Façades',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Menuiserie Aluminium RPT',
            description: 'Fabrication et pose de baies coulissantes et fenêtres aluminium à rupture de pont thermique.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Menuiserie PVC Isolante',
            description: 'Fenêtres et portes PVC multichambres haute isolation thermo-acoustique.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Façades Vitrées & Murs Rideaux',
            description: 'Habillage Alucobond composite et façades vitrées pour projets architecturaux.',
          },
        },
      ],
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cristalunord.ma';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
