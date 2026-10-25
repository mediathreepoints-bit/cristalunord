import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { INITIAL_SERVICES } from '@/lib/data/initial-data';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Nos Services & Expertises Menuiserie | CRISTALU NORD',
  description: 'Découvrez l’ensemble de nos prestations : menuiserie aluminium RPT, fenêtres et portes PVC isolantes, façades vitrées continues et habillages Alucobond au Maroc.',
  canonical: '/services',
});

export default function ServicesPage() {
  return (
    <main className="py-16 bg-brand-paper">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            NOS DOMAINES D’INTERVENTION
          </span>
          <span className="w-8 h-[1px] bg-brand-red"></span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6">
          Savoir-faire artisanal &amp; <em className="font-serif italic font-normal text-brand-red">haute technologie.</em>
        </h1>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
          Nous concevons des ouvrages durables qui valorisent vos architectures et assurent un confort thermique et phonique absolu.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {INITIAL_SERVICES.map((srv, idx) => (
          <article
            key={srv.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-brand-paperCard border border-brand-line p-8 sm:p-12 rounded-xl shadow-sm ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={`lg:col-span-5 relative h-80 sm:h-96 rounded-lg overflow-hidden border border-brand-line ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <Image
                src={srv.cover_image}
                alt={srv.title_fr}
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-brand-ink/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded">
                0{idx + 1} · {srv.slug.replace('menuiserie-', '').toUpperCase()}
              </span>
            </div>

            {/* Text & Specs */}
            <div className={`lg:col-span-7 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink mb-4">
                  {srv.title_fr}
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                  {srv.full_content_fr}
                </p>

                {/* Advantages */}
                <div className="space-y-2 mb-6">
                  <strong className="block text-xs uppercase font-extrabold text-brand-ink mb-2">
                    Points forts &amp; garanties :
                  </strong>
                  {srv.advantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-brand-ink">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-brand-line flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${srv.slug}`}
                  className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-red text-white px-5 py-3 rounded-sm text-xs font-bold transition-all shadow-sm"
                >
                  <span>Consulter la page détaillée</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/devis?service=${srv.slug}`}
                  className="inline-flex items-center gap-2 bg-brand-paper hover:bg-brand-paperAlt border border-brand-line text-brand-ink px-5 py-3 rounded-sm text-xs font-bold transition-all"
                >
                  <span>Configurer un devis pour ce service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
