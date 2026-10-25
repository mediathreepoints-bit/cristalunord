'use client';

import React, { useState } from 'react';
import { ShieldCheck, ThermometerSnowflake, VolumeX, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ThermalPerformanceExplorer() {
  const [selectedTech, setSelectedTech] = useState<'rpt' | 'pvc' | 'froid'>('rpt');

  const techData = {
    rpt: {
      title: 'Aluminium à Rupture de Pont Thermique (RPT)',
      subtitle: 'La référence architecturale pour villas et baies vitrées panoramiques',
      uw: '1.4 W/m²K',
      sound: '-38 à -42 dB',
      condensation: 'Nul (Barrette isolante polyamide)',
      uv: 'Qualicoat Classe 2 (Inaltérable)',
      desc: 'Une barrette isolante en polyamide haute densité sépare le profilé extérieur du profilé intérieur. Associé à un double vitrage Planitherm 4S à gaz argon, ce système supprime les pertes de chaleur et garde votre intérieur frais en été.',
      bestFor: 'Grandes baies vitrées, villas contemporaines, façades exposées au soleil et appartements haut de gamme.',
      score: 95,
    },
    pvc: {
      title: 'PVC 5 Chambres Haute Isolation',
      subtitle: 'La meilleure barrière acoustique et thermique au meilleur coût',
      uw: '1.2 W/m²K',
      sound: '-40 à -44 dB',
      condensation: 'Nul (Matière naturellement isolante)',
      uv: 'Traitement anti-jaunissement spécial Maroc',
      desc: 'Le PVC multichambres est naturellement non-conducteur de chaleur. Il offre la meilleure isolation thermique et phonique, résiste parfaitement à l’humidité marine côtière et ne nécessite aucun entretien.',
      bestFor: 'Chambres à coucher, zones urbaines bruyantes, résidences et rénovations énergétiques.',
      score: 98,
    },
    froid: {
      title: 'Aluminium Traditionnel (Profilé Simple / Froid)',
      subtitle: 'Solution économique pour séparations intérieures et vérandas non chauffées',
      uw: '3.8 W/m²K',
      sound: '-28 dB',
      condensation: 'Risque de buée en hiver',
      uv: 'Anodisé standard',
      desc: 'Sans barrette isolante interne, le métal conduit la température extérieure. Recommandé principalement pour les cloisons intérieures de bureaux, verrières décoratives ou devantures sans exigence thermique.',
      bestFor: 'Cloisons de bureaux intérieures, verrières décoratives, chantiers à budget très serré.',
      score: 60,
    },
  };

  const current = techData[selectedTech];

  return (
    <section className="py-20 bg-brand-paperAlt border-b border-brand-line" id="studio-technique">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-brand-red text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INGÉNIERIE &amp; ISOLATION THERMIQUE (RTCM MAROC)</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink mb-4">
            Comprendre la technologie de vos <em className="font-serif italic font-normal text-brand-red">profilés.</em>
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Comparez en temps réel le comportement thermique, l’atténuation phonique et la résistance aux UV selon le matériau choisi pour votre bâtiment.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedTech('rpt')}
            className={`px-5 py-3 rounded-xl font-heading text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
              selectedTech === 'rpt'
                ? 'bg-brand-ink text-white ring-2 ring-brand-red'
                : 'bg-brand-paperCard text-brand-muted hover:text-brand-ink border border-brand-line'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <span>Aluminium RPT (Haut de Gamme)</span>
          </button>

          <button
            onClick={() => setSelectedTech('pvc')}
            className={`px-5 py-3 rounded-xl font-heading text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
              selectedTech === 'pvc'
                ? 'bg-brand-ink text-white ring-2 ring-brand-red'
                : 'bg-brand-paperCard text-brand-muted hover:text-brand-ink border border-brand-line'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>PVC Multichambres Isolant</span>
          </button>

          <button
            onClick={() => setSelectedTech('froid')}
            className={`px-5 py-3 rounded-xl font-heading text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
              selectedTech === 'froid'
                ? 'bg-brand-ink text-white ring-2 ring-gray-400'
                : 'bg-brand-paperCard text-brand-muted hover:text-brand-ink border border-brand-line'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span>Aluminium Standard (Sans RPT)</span>
          </button>
        </div>

        {/* Technical Data Card Grid */}
        <div className="bg-brand-paperCard border border-brand-line rounded-2xl p-8 sm:p-12 shadow-apple-lg max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 border-b border-brand-line pb-8">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red">
                ANALYSE DU PROFILÉ
              </span>
              <h3 className="font-heading text-2xl font-bold text-brand-ink mt-1">
                {current.title}
              </h3>
              <p className="text-xs text-brand-muted mt-1">{current.subtitle}</p>
              <p className="text-xs sm:text-sm text-brand-ink leading-relaxed mt-4">
                {current.desc}
              </p>
            </div>

            <div className="lg:col-span-4 bg-brand-paper p-6 rounded-xl border border-brand-line text-center">
              <span className="text-xs font-bold text-brand-muted block uppercase">Indice de Performance</span>
              <div className="font-heading text-4xl font-extrabold text-brand-red my-1">
                {current.score} / 100
              </div>
              <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {selectedTech === 'froid' ? 'Usage intérieur uniquement' : 'Recommandé RTCM Maroc'}
              </span>
            </div>
          </div>

          {/* 4 Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-brand-paper rounded-lg border border-brand-line">
              <div className="flex items-center gap-2 text-brand-red mb-1">
                <ThermometerSnowflake className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Coefficient Uw</span>
              </div>
              <strong className="text-lg font-heading text-brand-ink block">{current.uw}</strong>
              <small className="text-[10px] text-brand-muted">Plus il est bas, plus il isole</small>
            </div>

            <div className="p-4 bg-brand-paper rounded-lg border border-brand-line">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <VolumeX className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Atténuation Bruit</span>
              </div>
              <strong className="text-lg font-heading text-brand-ink block">{current.sound}</strong>
              <small className="text-[10px] text-brand-muted">Silence &amp; tranquillité</small>
            </div>

            <div className="p-4 bg-brand-paper rounded-lg border border-brand-line">
              <div className="flex items-center gap-2 text-cyan-600 mb-1">
                <Droplets className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Condensation</span>
              </div>
              <strong className="text-xs font-bold text-brand-ink block truncate">{current.condensation}</strong>
              <small className="text-[10px] text-brand-muted">Pas d'humidité sur le vitrage</small>
            </div>

            <div className="p-4 bg-brand-paper rounded-lg border border-brand-line">
              <div className="flex items-center gap-2 text-amber-600 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase">Résistance UV</span>
              </div>
              <strong className="text-xs font-bold text-brand-ink block truncate">{current.uv}</strong>
              <small className="text-[10px] text-brand-muted">Climat côtier &amp; ensoleillé</small>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-brand-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-brand-muted">
              <strong>Usage idéal :</strong> {current.bestFor}
            </p>

            <Link
              href={`/devis?materiau=${selectedTech === 'pvc' ? 'pvc' : 'aluminium'}`}
              className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-red text-white px-5 py-2.5 rounded-sm text-xs font-bold transition-all shadow-sm"
            >
              <span>Configurer un devis avec ce profilé</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
