import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Method() {
  const steps = [
    {
      num: '01',
      title: 'Étude & Devis Gratuit',
      desc: 'Analyse de vos plans, photos et dimensions souhaitées. Recommandation technique des profilés et vitrages adaptés.',
    },
    {
      num: '02',
      title: 'Prise de Cotes sur Site',
      desc: 'Déplacement d’un technicien sur votre chantier pour un relevé méticuleux au laser et validation des détails d’exécution.',
    },
    {
      num: '03',
      title: 'Fabrication en Atelier',
      desc: 'Découpe, usinage, assemblage des cadres aluminium/PVC, pose des joints d’étanchéité et intégration du vitrage.',
    },
    {
      num: '04',
      title: 'Livraison & Pose Experte',
      desc: 'Installation soignée, calage au niveau, étanchéité périphérique, réglage fin des fermetures et contrôle qualité final.',
    },
  ];

  return (
    <section className="py-20 bg-brand-paper" id="methode">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                05 / NOTRE MÉTHODE
              </span>
              <span className="w-8 h-[1px] bg-brand-red"></span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink">
              Un processus transparent,<br />
              <em className="font-serif italic font-normal text-brand-red">sans mauvaise surprise.</em>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-brand-muted max-w-md">
            De la première estimation jusqu’à la livraison finale, vous bénéficiez d’un interlocuteur technique unique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="border-t-2 border-brand-ink pt-6 flex flex-col justify-between group hover:border-brand-red transition-colors"
            >
              <div>
                <span className="font-heading text-xs font-extrabold text-brand-red tracking-wider block mb-3">
                  ÉTAPE {st.num}
                </span>
                <h3 className="font-heading text-lg font-bold text-brand-ink mb-3 group-hover:text-brand-red transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-line/60 text-[11px] font-semibold text-brand-muted">
                Validation continue
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
