import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import QuoteConfigurator from '@/components/devis/QuoteConfigurator';
import { ShieldCheck, Clock, FileCheck, Phone } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Demande de Devis en Ligne Gratuit | CRISTALU NORD',
  description: 'Configurez votre devis de menuiserie aluminium ou PVC en 6 étapes simples. Estimation rapide, conseils techniques et transmission directe sur WhatsApp.',
  canonical: '/devis',
});

export default function DevisPage() {
  return (
    <main className="py-16 bg-brand-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-3 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-brand-red text-xs font-bold">
          <span>ÉTUDE TECHNIQUE GRATUITE &amp; SANS ENGAGEMENT</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-brand-ink mb-4">
          Configurateur de <em className="font-serif italic font-normal text-brand-red">Devis en Ligne.</em>
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto leading-relaxed">
          Renseignez vos dimensions et préférences en quelques clics pour recevoir une proposition adaptée et préparer la prise de cotes sur votre chantier.
        </p>

        {/* Guarantees bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold p-2.5 bg-brand-paperCard border border-brand-line rounded">
            <Clock className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold p-2.5 bg-brand-paperCard border border-brand-line rounded">
            <FileCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Devis détaillé &amp; clair</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold p-2.5 bg-brand-paperCard border border-brand-line rounded">
            <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Garantie décennale</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold p-2.5 bg-brand-paperCard border border-brand-line rounded">
            <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Conseiller dédié</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteConfigurator />
      </div>
    </main>
  );
}
