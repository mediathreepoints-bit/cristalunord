import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquare, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-paper border-b border-brand-line overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Column : Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="bg-brand-red text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                CRISTALU NORD
              </span>
              <span className="text-xs font-bold tracking-wider text-brand-muted uppercase">
                Menuiserie Aluminium &amp; PVC au Maroc
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ink leading-[1.08] tracking-tight mb-6"
            >
              L’excellence de la<br />
              menuiserie <em className="font-serif italic font-normal text-brand-red">aluminium &amp; PVC.</em>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8 max-w-xl">
              Des solutions sur mesure pour vos fenêtres, portes, baies vitrées coulissantes et façades architecturales. De l’usinage de précision en atelier à la pose sur chantier à Tanger, Tétouan et dans tout le Maroc.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/devis"
                className="inline-flex items-center justify-between gap-3 bg-brand-ink hover:bg-brand-red text-white px-6 py-4 rounded-sm text-xs sm:text-sm font-bold shadow-apple hover:shadow-glow-red transition-all duration-300"
              >
                <span>Demander un devis en ligne</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/realisations"
                className="inline-flex items-center justify-between gap-3 bg-white hover:bg-gray-50 text-brand-ink border border-brand-line hover:border-brand-ink px-6 py-4 rounded-sm text-xs sm:text-sm font-semibold transition-all duration-300"
              >
                <span>Découvrir nos réalisations</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-4 rounded-sm text-xs sm:text-sm font-bold transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-brand-line flex flex-wrap items-center justify-between gap-4 text-xs text-brand-muted">
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                <span>Profilés certifiés Rupture de Pont Thermique (RPT)</span>
              </div>
              <span className="text-gray-400">|</span>
              <div className="font-semibold text-brand-ink">
                Étude technique &amp; prise de cotes gratuite
              </div>
            </div>
          </div>

          {/* Right Column : Hero Architectural Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-lg overflow-hidden shadow-apple-lg border border-brand-line group bg-gray-200">
              <Image
                src="/assets/facade.webp"
                alt="Équipe Cristalu Nord réalisant l’habillage d’une façade vitrée contemporaine"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-redLight bg-brand-red/90 px-2 py-0.5 rounded w-max mb-1.5">
                  Chantier Réel · Tanger
                </span>
                <p className="font-heading text-sm font-bold">Façade vitrée &amp; Menuiseries aluminium</p>
                <p className="text-xs text-gray-300">Usinage sur mesure et installation par l’équipe Cristalu Nord</p>
              </div>

              {/* Architectural badge */}
              <div className="absolute top-4 right-4 bg-brand-paperCard/90 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-bold text-brand-ink border border-brand-line shadow-sm">
                Région Nord &amp; Maroc
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Band */}
      <div className="border-t border-brand-line bg-brand-paperCard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-extrabold text-brand-ink">100%</span>
              <span className="text-xs text-brand-muted">Sur-mesure en atelier</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-extrabold text-brand-red">RPT &amp; Double Vitrage</span>
              <span className="text-xs text-brand-muted">Haute isolation thermique &amp; phonique</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-extrabold text-brand-ink">10 à 20 j</span>
              <span className="text-xs text-brand-muted">Délai moyen de fabrication</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-extrabold text-brand-ink">Tanger &amp; Maroc</span>
              <span className="text-xs text-brand-muted">Équipe de pose dédiée</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
