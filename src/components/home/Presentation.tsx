import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Wrench, Shield, Award } from 'lucide-react';

export default function Presentation() {
  return (
    <section className="py-20 bg-brand-paper" id="presentation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] rounded-lg overflow-hidden shadow-apple border border-brand-line bg-gray-100">
              <Image
                src="/assets/atelier.webp"
                alt="Atelier d'usinage et fabrication Cristalu Nord"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-red-300">
                  Savoir-Faire Artisanal &amp; Industriel
                </span>
                <p className="font-heading text-base font-bold">Usinage de précision en atelier</p>
                <p className="text-xs text-gray-300">Profilés aluminium et PVC aux normes de résistance marocaines</p>
              </div>
            </div>

            {/* Overlapping small badge */}
            <div className="absolute -bottom-6 -right-4 bg-brand-ink text-white p-4 rounded-lg shadow-apple-lg border border-brand-lineDark max-w-[200px]">
              <span className="text-2xl font-extrabold text-brand-red font-heading block">Maroc</span>
              <p className="text-[11px] text-gray-300 leading-tight mt-0.5">
                Chantiers résidentiels, villas et tertiaires
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                01 / PRÉSENTATION
              </span>
              <span className="w-8 h-[1px] bg-brand-red"></span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink mb-6 leading-tight">
              Une exigence technique pour chaque <em className="font-serif italic font-normal text-brand-red">ouverture.</em>
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
              Basée dans le Nord du Maroc et intervenant sur l’ensemble du territoire, <strong>CRISTALU NORD</strong> est spécialisée dans l’étude, la fabrication et l’installation de menuiseries en aluminium, PVC, façades vitrées et verres de sécurité.
            </p>

            <p className="text-sm text-brand-muted leading-relaxed mb-8">
              Chaque projet commence par une écoute attentive de vos contraintes architecturales. De la sélection des profilés à rupture thermique jusqu’au calage laser sur chantier, nous assurons un rendu irréprochable et durable face aux intempéries et à l’air marin.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-brand-paperCard border border-brand-line rounded-sm">
                <Wrench className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-brand-ink">Atelier Moderne</strong>
                  <span className="text-[11px] text-brand-muted">Découpe numérique et assemblage sur mesure</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-brand-paperCard border border-brand-line rounded-sm">
                <Shield className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-brand-ink">Étanchéité &amp; Isolation</strong>
                  <span className="text-[11px] text-brand-muted">Double vitrage isolant et profilés RPT</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-ink hover:text-brand-red transition-colors pb-1 border-b-2 border-brand-ink hover:border-brand-red"
              >
                <span>En savoir plus sur notre histoire &amp; nos équipements</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
