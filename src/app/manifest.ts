import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CRISTALU NORD — Menuiserie Aluminium & PVC',
    short_name: 'CRISTALU NORD',
    description: 'Menuiserie aluminium, PVC, façades vitrées et habillages au Maroc.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf6',
    theme_color: '#121414',
    icons: [
      {
        src: '/assets/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
