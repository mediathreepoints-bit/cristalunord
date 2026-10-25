import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { INITIAL_SERVICES } from '@/lib/data/initial-data';

export default function Expertises() {
  return (
    <section className="py-20 bg-brand-paperAlt border-y border-brand-line" id="expertises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                02 / NOS EXPERTISES
              </span>
              <span className="w-8 h-[1px] bg-brand-red"></span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink">
              Des matières au service de votre <em className="font-serif italic font-normal text-brand-red">espace.</em>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-brand-muted max-w-md">
            Trois savoir-faire complémentaires pour équiper vos villas, résidences, commerces et bâtiments professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INITIAL_SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="bg-brand-paperCard border border-brand-line rounded-lg overflow-hidden flex flex-col hover:border-brand-red hover:shadow-apple transition-all duration-300 group"
            >
              {/* Cover Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <Image
                  src={service.cover_image}
                  alt={service.title_fr}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute bottom-3 left-3 bg-brand-ink/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded">
                  0{index + 1} · {service.slug.replace('menuiserie-', '').toUpperCase()}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-ink mb-3 group-hover:text-brand-red transition-colors flex items-center justify-between">
                    <span>{service.title_fr}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs text-brand-muted leading-relaxed mb-6">
                    {service.short_desc_fr}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-brand-line pt-4">
                    {service.advantages.slice(0, 3).map((adv, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-brand-ink">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-line flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-brand-ink hover:text-brand-red transition-colors flex items-center gap-1"
                  >
                    <span>Fiche technique &amp; FAQ</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/devis?service=${service.slug}`}
                    className="text-[11px] font-bold text-brand-red hover:underline"
                  >
                    Devis direct
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
