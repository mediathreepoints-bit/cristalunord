/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirections 301 pour la migration de l'ancien site WordPress
      {
        source: '/menuiserie-aluminium-tanger',
        destination: '/services/menuiserie-aluminium',
        permanent: true,
      },
      {
        source: '/fenetres-portes-pvc',
        destination: '/services/menuiserie-pvc',
        permanent: true,
      },
      {
        source: '/facades-vitrees-alucobond',
        destination: '/services/vitrage-facades',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/realisations',
        permanent: true,
      },
      {
        source: '/demande-devis',
        destination: '/devis',
        permanent: true,
      },
      {
        source: '/qui-sommes-nous',
        destination: '/a-propos',
        permanent: true,
      },
      {
        source: '/nous-contacter',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
