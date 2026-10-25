import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { 
  ShieldCheck, Award, Wrench, Users, ArrowUpRight, CheckCircle2, 
  Cpu, Compass, Gauge, Sparkles, Building2, MapPin, Layers
} from 'lucide-react';
import QuoteCTA from '@/components/home/QuoteCTA';

export const metadata: Metadata = constructMetadata({
  title: 'À Propos de CRISTALU NORD — Atelier Industriel & Savoir-Faire au Maroc',
  description: 'Découvrez l’histoire, l’atelier de fabrication numérique et les engagements de Cristalu Nord : menuiserie aluminium RPT, PVC et façades vitrées architecturales au Maroc.',
  canonical: '/a-propos',
});

export default function AProposPage() {
  const machinery = [
    {
      title: 'Centre d’Usinage Numérique 4 Axes',
      desc: 'Fraisage et perçage automatisés de tous les profilés aluminium avec une tolérance inférieure à 0.1 mm.',
      badge: 'Précision CAO',
    },
    {
      title: 'Scie Double-Tête Électronique',
      desc: 'Coupes d’onglets précises à 45° et 90° avec asservissement laser pour un assemblage parfaitement étanche.',
      badge: 'Finition Invisible',
    },
    {
      title: 'Ligne Automatisée Double Vitrage Gaz Argon',
      desc: 'Lavage déminéralisé, injection de 90% d’argon et scellement bi-composant sous contrôle continu.',
      badge: 'Norme CE EN 1279',
    },
    {
      title: 'Métrologie & Télémétrie Laser 3D',
      desc: 'Relevé de cotes sur chantier au millimètre près avant lancement en production pour zéro reprise sur site.',
      badge: 'Zéro Faille',
    },
  ];

  const milestones = [
    {
      year: '2012',
      title: 'Création de l’Atelier à Tanger',
      desc: 'Implantation initiale au cœur de la zone industrielle de Tanger pour répondre à la demande croissante de menuiseries modernes.',
    },
    {
      year: '2017',
      title: 'Modernisation & Usinage Numérique',
      desc: 'Acquisition des premiers centres d’usinage à commande numérique et spécialisation dans les profilés aluminium à rupture de pont thermique (RPT).',
    },
    {
      year: '2021',
      title: 'Ligne Vitrage Isolant & Sécurit',
      desc: 'Intégration d’une chaîne complète d’assemblage de double vitrage à contrôle solaire Planitherm et verres de sécurité Stadip Silence.',
    },
    {
      year: '2026',
      title: 'Bureau d’Études BIM & Envergure Nationale',
      desc: 'Accompagnement des architectes et promoteurs sur des chantiers de prestige à Tanger, Tétouan, Rabat, Casablanca et Marrakech.',
    },
  ];

  return (
    <main className="py-16 bg-brand-paper">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            NOTRE IDENTITÉ &amp; ENGAGEMENTS
          </span>
          <span className="w-8 h-[1px] bg-brand-red"></span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ink mb-6 leading-tight">
          L’art de façonner la matière,<br />
          la rigueur de la <em className="font-serif italic font-normal text-brand-red">poser.</em>
        </h1>
        <p className="text-sm sm:text-base text-brand-muted max-w-3xl leading-relaxed">
          CRISTALU NORD s’est construite autour d’une exigence absolue : la pérennité d’une menuiserie ne dépend pas seulement du choix des profilés, mais de la précision chirurgicale de chaque coupe en atelier et de l’exactitude de la pose sur le chantier.
        </p>
      </div>

      {/* Two Photos Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 sm:h-[480px] rounded-xl overflow-hidden border border-brand-line shadow-apple">
            <Image
              src="/assets/equipe.webp"
              alt="Équipe technique Cristalu Nord sur chantier"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-red-300">
                ÉQUIPES QUALIFIÉES
              </span>
              <strong className="text-base font-bold font-heading">Poseurs &amp; Métreurs Spécialisés</strong>
              <p className="text-xs text-gray-300">Manutention par ventouses certifiées et fixation au niveau laser de baies panoramiques.</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-brand-muted leading-relaxed">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink">
              Des artisans et techniciens d’expérience au Maroc
            </h2>
            <p>
              Nos équipes d’usinage et de pose cumulent plus de 15 années d’expérience sur le marché marocain du bâtiment. Face aux spécificités climatiques de la côte nord (vents marins, humidité saline, forts écarts de température estivale), nous appliquons des méthodes strictes de calfeutrement et de fixation conformes au Règlement Thermique de Construction au Maroc (RTCM).
            </p>
            <p>
              Chaque cadre aluminium ou PVC fait l’objet d’un contrôle qualité systématique avant expédition : vérification des équerrages au laser, fluidité des chariots à roulements inox et continuité étanche des joints EPDM.
            </p>

            <div className="space-y-3 pt-4 border-t border-brand-line">
              <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Usinage numérique de profilés aluminium à rupture thermique (RPT)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Double vitrage à contrôle solaire Planitherm et gaz argon certifié</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-ink font-semibold">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Interlocuteur technique dédié pour architectes, promoteurs et particuliers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Machinery & Technology Section */}
      <section className="bg-brand-paperAlt border-y border-brand-line py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>PARC MACHINES &amp; TECHNOLOGIE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink">
              L’outil de production au service de la <em className="font-serif italic font-normal text-brand-red">haute précision.</em>
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-3">
              Notre atelier intègre des équipements industriels de pointe garantissant une régularité parfaite sur les grandes séries comme sur les ouvrages d’exception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {machinery.map((m, idx) => (
              <div
                key={idx}
                className="bg-brand-paperCard border border-brand-line rounded-xl p-6 hover:border-brand-red hover:shadow-apple transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded mb-3">
                    {m.badge}
                  </span>
                  <h3 className="font-heading text-base font-bold text-brand-ink mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-line text-[10px] font-mono text-gray-500">
                  ATELIER CRISTALU NORD
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
              NOTRE PARCOURS
            </span>
            <span className="w-8 h-[1px] bg-brand-red"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink">
            Une croissance guidée par <em className="font-serif italic font-normal text-brand-red">l’exigence.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {milestones.map((ms, idx) => (
            <div key={idx} className="relative bg-brand-paperCard p-6 rounded-xl border border-brand-line flex flex-col justify-between">
              <div>
                <span className="font-heading text-3xl font-extrabold text-brand-red block mb-2">
                  {ms.year}
                </span>
                <h3 className="font-heading text-sm font-bold text-brand-ink mb-2">
                  {ms.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {ms.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-line text-[10px] font-mono text-gray-400">
                ÉTAPE 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </main>
  );
}
