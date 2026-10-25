import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cristalunord.ma';

  const routes = [
    '',
    '/services',
    '/services/menuiserie-aluminium',
    '/services/menuiserie-pvc',
    '/services/vitrage-facades',
    '/realisations',
    '/produits',
    '/devis',
    '/a-propos',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-10-25'),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/services') || route === '/devis' ? 0.9 : 0.8,
  }));
}
