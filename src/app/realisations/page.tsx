import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import PortfolioGallery from '@/components/realisations/PortfolioGallery';
import QuoteCTA from '@/components/home/QuoteCTA';

export const metadata: Metadata = constructMetadata({
  title: 'Nos Réalisations & Chantiers au Maroc | CRISTALU NORD',
  description: 'Découvrez notre galerie de réalisations réelles : façades vitrées, habillages Alucobond, menuiseries aluminium et garde-corps posés à Tanger, Tétouan et au Maroc.',
  canonical: '/realisations',
});

export default function RealisationsPage() {
  return (
    <main className="py-16 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            PORTFOLIO CHANTIERS
          </span>
          <span className="w-8 h-[1px] bg-brand-red"></span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6">
          Nos Réalisations en <em className="font-serif italic font-normal text-brand-red">images.</em>
        </h1>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
          Toutes les photographies présentées ci-dessous proviennent de chantiers réels conçus, usinés et installés par les équipes techniques de CRISTALU NORD.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <PortfolioGallery />
      </div>

      <QuoteCTA />
    </main>
  );
}
