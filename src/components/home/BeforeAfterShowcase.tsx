'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, MoveHorizontal, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function BeforeAfterShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-brand-paper border-b border-brand-line overflow-hidden" id="avant-apres">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                TRANSFORMATION ARCHITECTURALE
              </span>
              <span className="w-8 h-[1px] bg-brand-red"></span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink">
              L’impact visuel &amp; thermique : <em className="font-serif italic font-normal text-brand-red">Avant / Après.</em>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-brand-muted max-w-md">
            Glissez le curseur pour visualiser la métamorphose d’une façade commerciale grâce aux panneaux composites et vitrages à contrôle solaire.
          </p>
        </div>

        {/* Interactive Slider Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Frame */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-apple-lg border border-brand-line select-none cursor-ew-resize bg-gray-900"
            >
              {/* After Image (Full background) */}
              <div className="absolute inset-0">
                <Image
                  src="/assets/projet1.webp"
                  alt="Façade après rénovation Cristalu Nord"
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-4 right-4 bg-brand-ink/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-sm border border-white/10 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  APRÈS : RÉALISATION CRISTALU NORD
                </span>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative h-full w-[1000px] max-w-none">
                  <Image
                    src="/assets/projet6.webp"
                    alt="Façade avant rénovation"
                    fill
                    className="object-cover grayscale contrast-125 brightness-90"
                    priority
                  />
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-gray-200 text-[10px] font-bold px-3 py-1.5 rounded-sm border border-white/10 shadow-sm">
                    ÉTAT INITIAL DU BÂTIMENT
                  </span>
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-apple-lg border-2 border-white">
                  <MoveHorizontal className="w-5 h-5 animate-pulse" />
                </div>
              </div>

              {/* Hint Bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-semibold text-white/90 border border-white/10 pointer-events-none flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-brand-red" />
                <span>Faites glisser pour comparer</span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Technical Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-brand-paperCard border border-brand-line p-6 rounded-xl shadow-sm space-y-4">
              <h3 className="font-heading text-lg font-bold text-brand-ink flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-red" />
                <span>Gains de la Rénovation</span>
              </h3>

              <div className="space-y-3 text-xs text-brand-muted">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-ink block">Modernisation de l’Image de Marque</strong>
                    <span>Habillage Alucobond noir mat et panneaux composites haut de gamme.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-ink block">Isolation Thermique Améliorée (-45%)</strong>
                    <span>Double vitrage à contrôle solaire réduisant les surchauffes estivales.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-ink block">Insonorisation Urbaine (-38 dB)</strong>
                    <span>Atténuation acoustique des bruits de circulation et de rue.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-line">
                <Link
                  href="/devis?service=vitrage-facades"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-ink hover:bg-brand-red text-white py-3 rounded-sm text-xs font-bold transition-all shadow-sm"
                >
                  <span>Étudier mon projet de façade</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
