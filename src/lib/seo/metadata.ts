import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cristalunord.ma';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export function constructMetadata({
  title = "CRISTALU NORD — Menuiserie Aluminium, PVC & Façades en Verre au Maroc",
  description = "Spécialiste de la menuiserie aluminium haut de gamme, PVC isolant, baies vitrées coulissantes, façades en verre et habillages Alucobond sur mesure au Maroc.",
  keywords = [
    "Cristalu Nord",
    "menuiserie aluminium Tanger",
    "menuiserie aluminium Maroc",
    "menuiserie PVC Maroc",
    "baie vitrée coulissante sur mesure",
    "façades vitrées",
    "habillage Alucobond",
    "garde-corps verre",
    "double vitrage Maroc",
    "Tanger",
    "Tétouan",
    "Kénitra",
    "Rabat",
    "Casablanca",
  ],
  canonical = '/',
  ogImage = '/assets/og-image.jpg',
}: SEOProps = {}): Metadata {
  const fullUrl = `${siteUrl.replace(/\/$/, '')}${canonical}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl.replace(/\/$/, '')}${ogImage}`;

  return {
    title: {
      default: title,
      template: '%s | CRISTALU NORD',
    },
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'CRISTALU NORD' }],
    creator: 'CRISTALU NORD',
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'CRISTALU NORD',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_MA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/assets/favicon-32.png',
      shortcut: '/favicon.ico',
      apple: '/assets/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}
