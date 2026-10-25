import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Ruler, Wrench, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function InstitutionalManifesto() {
  const pillars = [
    {
      num: '01',
      title: 'Bureau d’Études & Calepinage',
      desc: 'Analyse statique de chaque baie vitrée, calcul de la pression au vent côtier et intégration harmonieuse aux plans de votre architecte.',
      icon: Ruler,
    },
    {
      num: '02',
      title: 'Usinage Numérique en Atelier',
      desc: 'Découpe des profilés aluminium et PVC avec précision d’onglet au dixième de millimètre, ébavurage soigné et sertissage haute résistance.',
      icon: Wrench,
    },
    {
      num: '03',
      title: 'Vitrages Isolants & Sécurité CE',
      desc: 'Intégration de double vitrage à contrôle solaire Planitherm, vitrages feuilletés acoustiques Stadip et verres trempés Securit certifiés.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Pose Laser & Garantie Décennale',
      desc: 'Installation sur chantier par nos propres équipes, calage au niveau laser, étanchéité périphérique aux silicones neutres et suivi SAV.',
      icon: Award,
    },
  ];

  return (
    <section className="py-24 bg-[#0a0c0c] text-white border-b border-brand-lineDark relative overflow-hidden" id="manifeste">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-white/10 px-3 py-1 rounded-full text-gray-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span>MANIFESTE INSTITUTIONNEL</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            L’exigence de l’ingénierie au service de <em className="font-serif italic font-normal text-red-500">l’habitat marocain.</em>
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            Parce qu’une menuiserie de qualité doit résister aux décennies, aux embruns salins et aux fortes chaleurs, CRISTALU NORD maîtrise l’intégralité de la chaîne de valeur : de la conception technique jusqu’aux ultimes réglages sur votre chantier.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/10 hover:border-brand-red p-6 rounded-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xs font-extrabold text-brand-red tracking-widest">
                      PILIER {p.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10px] text-gray-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  <span>Normes RTCM Maroc</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <strong className="block text-sm font-bold text-white">
              Vous êtes architecte, promoteur ou maître d’ouvrage au Maroc ?
            </strong>
            <span className="text-xs text-gray-400">
              Notre bureau d’études vous accompagne dans la rédaction du CCTP et le calepinage de vos menuiseries.
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-5 py-2.5 rounded-sm text-xs font-bold transition-all flex-shrink-0 shadow-sm"
          >
            <span>Prendre contact avec l’Atelier</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
