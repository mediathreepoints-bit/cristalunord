import React from 'react';
import { ShieldCheck, Ruler, Clock, Sparkles, Award, Users2 } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: Ruler,
      title: 'Précision Millimétrique',
      desc: 'Prise de cotes rigoureuse au laser sur votre chantier et usinage sur machines dédiées pour un ajustement parfait.',
    },
    {
      icon: ShieldCheck,
      title: 'Profilés Certifiés & RPT',
      desc: 'Aluminium à rupture de pont thermique et PVC multichambres garantissant une isolation thermique et acoustique maximale.',
    },
    {
      icon: Users2,
      title: 'Équipe de Pose Qualifiée',
      desc: 'Nos propres poseurs expérimentés assurent une installation soignée, propre et conforme aux normes marocaines RTCM.',
    },
    {
      icon: Clock,
      title: 'Respect des Délais',
      desc: 'Engagement ferme sur le calendrier de fabrication et de livraison, avec suivi en temps réel de votre commande.',
    },
    {
      icon: Award,
      title: 'Garantie & Sérénité',
      desc: 'Garantie décennale et service après-vente réactif pour l’entretien et les réglages de vos menuiseries.',
    },
    {
      icon: Sparkles,
      title: 'Finitions Haut de Gamme',
      desc: 'Vaste choix de teintes thermolaquées Qualicoat, quincailleries multipoints discrètes et joints EPDM durables.',
    },
  ];

  return (
    <section className="py-20 bg-brand-paperAlt border-b border-brand-line" id="pourquoi-nous">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
              04 / POURQUOI NOUS CHOISIR
            </span>
            <span className="w-8 h-[1px] bg-brand-red"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink mb-4">
            L’engagement d’un travail <em className="font-serif italic font-normal text-brand-red">durable.</em>
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Nous combinons la rigueur de l’ingénierie moderne à l’expérience terrain pour concrétiser vos visions architecturales les plus exigeantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-brand-paperCard border border-brand-line p-6 rounded-lg hover:border-brand-red hover:shadow-apple transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-brand-ink mb-2">
                  {r.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
