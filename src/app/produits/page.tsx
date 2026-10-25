import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import ProductCatalog from '@/components/produits/ProductCatalog';
import QuoteCTA from '@/components/home/QuoteCTA';

export const metadata: Metadata = constructMetadata({
  title: 'Catalogue Produits Menuiserie & Vitrage | CRISTALU NORD',
  description: 'Catalogue des menuiseries aluminium et PVC Cristalu Nord : baies coulissantes, fenêtres battantes, portes d’entrée, cloisons et garde-corps sur mesure au Maroc.',
  canonical: '/produits',
});

export default function ProduitsPage() {
  return (
    <main className="py-16 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            CATALOGUE OFFICIEL
          </span>
          <span className="w-8 h-[1px] bg-brand-red"></span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6">
          Nos Modèles &amp; Ouvrages <em className="font-serif italic font-normal text-brand-red">sur mesure.</em>
        </h1>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
          Sélectionnez un modèle pour découvrir ses caractéristiques techniques, ses options de vitrage et configurer immédiatement votre estimation personnalisée.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ProductCatalog />
      </div>

      <QuoteCTA />
    </main>
  );
}
