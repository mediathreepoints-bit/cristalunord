import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { ShieldCheck, Award, Wrench, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import QuoteCTA from '@/components/home/QuoteCTA';

export const metadata: Metadata = constructMetadata({
  title: 'À Propos de CRISTALU NORD — Atelier & Équipe au Maroc',
  description: 'Découvrez l’histoire, l’atelier de fabrication et les engagements de Cristalu Nord, entreprise de menuiserie aluminium, PVC et façades vitrées au Maroc.',
  canonical: '/a-propos',
});

export default function AProposPage() {
  return (
    <main className="py-16 bg-brand-paper">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            NOTRE IDENTITÉ &amp; ENGAGEMENTS
          </span>
          <span className="w-8 h-[1px] bg-brand-red"></span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6">
          L’art de façonner la matière,<br />
          la rigueur de la <em className="font-serif italic font-normal text-brand-red">poser.</em>
        </h1>
        <p className="text-sm sm:text-base text-brand-muted max-w-3xl leading-relaxed">
          CRISTALU NORD s’est construite autour d’une conviction : la qualité d’une menuiserie ne dépend pas seulement du choix des profilés, mais de la précision de chaque coupe en atelier et de l’exactitude de la pose sur le chantier.
        </p>
      </div>

      {/* Two Photos Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 sm:h-[480px] rounded-xl overflow-hidden border border-brand-line shadow-apple">
            <Image
              src="/assets/equipe.webp"
              alt="Équipe technique Cristalu Nord sur chantier"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <strong className="text-base font-bold font-heading">L’Équipe sur le Terrain</strong>
              <p className="text-xs text-gray-300">Manutention délicate et fixation au niveau laser de vitrages lourds de sécurité.</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-brand-muted leading-relaxed">
            <h2 className="font-heading text-2xl font-bold text-brand-ink">
              Des artisans et techniciens qualifiés
            </h2>
            <p>
              Nos équipes d'usinage et de pose cumulent des années d'expérience sur le marché marocain du bâtiment. Face aux spécificités climatiques de la côte nord (vents marins, humidité saline, ensoleillement estival), nous appliquons des méthodes strictes de calfeutrement et de fixation.
            </p>
            <p>
              Chaque cadre aluminium ou PVC fait l'objet d'un contrôle rigoureux de ses équerrages, de la fluidité de ses roulements et de la continuité de ses joints d'étanchéité avant d'être expédié sur votre chantier.
            </p>

            <div className="space-y-3 pt-4 border-t border-brand-line">
              <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Machines de découpe et d'usinage adaptées aux profilés RPT</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Contrôle qualité systématique avant livraison</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Interlocuteur unique pour l’architecte et le maître d'ouvrage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteCTA />
    </main>
  );
}
