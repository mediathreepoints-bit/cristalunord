'use client';

import React, { useState } from 'react';
import { Palette, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ColorStudio() {
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    {
      id: 'ral-7016',
      name: 'Gris Anthracite RAL 7016',
      finish: 'Thermolaquage Sablé Texturé Qualicoat',
      hex: '#373f43',
      texture: 'Grain fin mat anti-rayures',
      warranty: 'Garantie 10 ans tenue UV',
      desc: 'La teinte de référence de l’architecture contemporaine au Maroc. Masque la poussière, met en valeur les lignes des baies vitrées et s’accorde avec les façades blanches ou en pierre.',
    },
    {
      id: 'ral-9005',
      name: 'Noir Profond Mat RAL 9005',
      finish: 'Thermolaquage Fine Texture Mat',
      hex: '#111315',
      texture: 'Rendu velouté ultra-moderne',
      warranty: 'Garantie 10 ans tenue UV',
      desc: 'Idéal pour créer des contrastes saisissants sur les villas modernes, les verrières intérieures style atelier et les habillages Alucobond.',
    },
    {
      id: 'ral-9010',
      name: 'Blanc Pur RAL 9010',
      finish: 'Satiné / Brillant Inaltérable',
      hex: '#f5f5f2',
      texture: 'Lisse facile à nettoyer',
      warranty: 'Garantie 10 ans anti-jaunissement',
      desc: 'Luminosité maximale et pureté des lignes. Recommandé pour les menuiseries PVC et les intérieurs épurés baignés de lumière.',
    },
    {
      id: 'bronze-anodise',
      name: 'Bronze / Champagne Anodisé',
      finish: 'Anodisation Chimique Classe 20',
      hex: '#827156',
      texture: 'Reflets métalliques satinés',
      warranty: 'Garantie 20 ans environnement marin',
      desc: 'Traitement de surface haut de gamme préservant l’aspect métallique brut de l’aluminium. Résistance extrême aux embruns salins de la côte Atlantique et Méditerranéenne.',
    },
    {
      id: 'chene-dore',
      name: 'Chêne Doré Structuré (PVC)',
      finish: 'Film Plaxé Renolit Haute Résistance',
      hex: '#8d5e38',
      texture: 'Veinage bois naturel au toucher',
      warranty: 'Garantie 10 ans climat chaud',
      desc: 'Apporte toute la noblesse et la chaleur du bois naturel avec la performance thermique et la facilité d’entretien du PVC.',
    },
  ];

  const current = colors[selectedColor];

  return (
    <section className="py-20 bg-brand-paper border-b border-brand-line overflow-hidden" id="nuancier">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                NUANCIER &amp; FINITIONS D’EXCEPTION
              </span>
              <span className="w-8 h-[1px] bg-brand-red"></span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink">
              Teintes certifiées <em className="font-serif italic font-normal text-brand-red">Qualicoat &amp; Anodisées.</em>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-brand-muted max-w-md">
            Des thermolaquages cuits au four à haute température garantissant une tenue de couleur éclatante face aux UV intenses du climat marocain.
          </p>
        </div>

        {/* Color Palette Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Swatches List */}
          <div className="lg:col-span-5 space-y-3">
            {colors.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setSelectedColor(idx)}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                  selectedColor === idx
                    ? 'border-brand-red bg-brand-paperCard shadow-apple ring-2 ring-brand-red/20'
                    : 'border-brand-line bg-brand-paper hover:bg-brand-paperCard hover:border-gray-400'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className="w-8 h-8 rounded-full border border-gray-300 shadow-inner flex-shrink-0"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <strong className="block text-xs font-bold text-brand-ink">{c.name}</strong>
                    <span className="text-[11px] text-brand-muted">{c.finish}</span>
                  </div>
                </div>

                {selectedColor === idx && (
                  <span className="text-xs font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded">
                    Actif
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Color Inspection Preview Pane */}
          <div className="lg:col-span-7 bg-brand-paperCard border border-brand-line rounded-2xl p-8 sm:p-10 shadow-apple-lg relative overflow-hidden">
            {/* Ambient swatch background glow */}
            <div
              className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none transition-all duration-700"
              style={{ backgroundColor: current.hex }}
            />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-brand-line pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red">
                    ÉCHANTILLON SÉLECTIONNÉ
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-brand-ink mt-0.5">
                    {current.name}
                  </h3>
                </div>

                <div
                  className="w-12 h-12 rounded-xl border border-brand-line shadow-md"
                  style={{ backgroundColor: current.hex }}
                />
              </div>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {current.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-brand-paper rounded-lg border border-brand-line text-xs">
                  <span className="text-brand-muted block font-semibold mb-1">Texture de surface :</span>
                  <strong className="text-brand-ink font-bold">{current.texture}</strong>
                </div>

                <div className="p-3.5 bg-brand-paper rounded-lg border border-brand-line text-xs">
                  <span className="text-brand-muted block font-semibold mb-1">Garantie &amp; Label :</span>
                  <strong className="text-emerald-700 font-bold">{current.warranty}</strong>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-line flex items-center justify-between">
                <span className="text-xs text-brand-muted">
                  Échantillons physiques visibles à l’atelier de Tanger.
                </span>

                <Link
                  href={`/devis?couleur=${encodeURIComponent(current.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
                >
                  <span>Appliquer cette teinte à mon devis</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
