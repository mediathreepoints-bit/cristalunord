import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Layers, MessageSquare } from 'lucide-react';
import InteractiveProfileCutaway from '@/components/architectural/InteractiveProfileCutaway';

export const metadata: Metadata = constructMetadata({
  title: 'Menuiserie Aluminium Tanger & Maroc — Fenêtres & Baies RPT | CRISTALU NORD',
  description: 'Fabrication et installation sur mesure de menuiseries aluminium haut de gamme au Maroc : baies coulissantes panoramiques, fenêtres à rupture de pont thermique, portes et cloisons.',
  canonical: '/services/menuiserie-aluminium',
});

export default function MenuiserieAluminiumPage() {
  const faqs = [
    {
      question: "Qu'est-ce que la Rupture de Pont Thermique (RPT) dans les profilés aluminium ?",
      answer: "La rupture de pont thermique consiste à insérer une barrette isolante en polyamide entre les profilés intérieur et extérieur en aluminium. Cela bloque les transferts de chaleur et de froid, évite la condensation sur les vitrages et réduit les coûts de climatisation.",
    },
    {
      question: "Quelles sont les dimensions maximales pour une baie coulissante en aluminium ?",
      answer: "Grâce à la rigidité structurelle de l'aluminium, nous pouvons concevoir des baies vitrées de 2 à 4 vantaux allant jusqu'à 6 mètres de largeur et 3 mètres de hauteur, avec des profilés très fins assurant une vue panoramique.",
    },
    {
      question: "Comment l'aluminium résiste-t-il au climat côtier de Tanger et du Nord ?",
      answer: "Nos profilés subissent un thermolaquage certifié Qualicoat ou une anodisation de classe marine, garantissant une protection totale contre l'oxydation saline, les vents côtiers et les rayons UV intenses.",
    },
  ];

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Menuiserie Aluminium', url: '/services/menuiserie-aluminium' },
  ];

  return (
    <main className="py-16 bg-brand-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-muted mb-8" aria-label="Fil d'ariane">
          <ol className="flex items-center gap-2 list-none p-0 m-0">
            <li><Link href="/" className="hover:text-brand-red">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-brand-red">Services</Link></li>
            <li>/</li>
            <li className="font-bold text-brand-ink">Menuiserie Aluminium</li>
          </ol>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">
              EXPERTISÉ N°1 · ALUMINIUM HAUTE PERFORMANCE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6 leading-tight">
              Menuiseries Aluminium<br />
              <em className="font-serif italic font-normal text-brand-red">&amp; Baies Coulissantes RPT.</em>
            </h1>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              Conception sur mesure en atelier et pose sur chantier de baies vitrées coulissantes panoramiques, fenêtres battantes, oscillo-battantes et portes en aluminium pour villas contemporaines, résidences et bâtiments professionnels à Tanger, Tétouan et tout le Maroc.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/devis?produit=Baie+vitrée+coulissante&materiau=aluminium"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-6 py-3.5 rounded-sm text-xs font-bold transition-all shadow-sm"
              >
                <span>Demander un devis Aluminium</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20des%20renseignements%20sur%20les%20menuiseries%20aluminium."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3.5 rounded-sm text-xs font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-lg overflow-hidden border border-brand-line shadow-apple">
            <Image
              src="/assets/atelier.webp"
              alt="Profilé aluminium usiné dans l'atelier Cristalu Nord"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Interactive Architectural Profile Cutaway */}
        <div className="mb-16">
          <InteractiveProfileCutaway />
        </div>

        {/* Technical Features */}
        <div className="bg-brand-paperCard border border-brand-line rounded-xl p-8 sm:p-12 mb-16 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-brand-ink mb-6">
            Caractéristiques &amp; Avantages Techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 bg-brand-paper rounded border border-brand-line">
              <ShieldCheck className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-brand-ink">Rupture de Pont Thermique (RPT)</strong>
                <p className="text-xs text-brand-muted mt-1">Élimination des ponts thermiques, réduction de la facture de climatisation et confort thermique en toutes saisons.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-brand-paper rounded border border-brand-line">
              <Layers className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-brand-ink">Vaste Choix de Teintes Qualicoat</strong>
                <p className="text-xs text-brand-muted mt-1">Noir mat RAL 9005, Gris anthracite RAL 7016, Blanc pur, Bronze anodisé ou teintes sur mesure.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-brand-paper rounded border border-brand-line">
              <Sparkles className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-brand-ink">Quincailleries &amp; Sécurité Renforcée</strong>
                <p className="text-xs text-brand-muted mt-1">Serrures multipoints, roulements inox à aiguilles pour un coulissement sans effort, poignées design ergonomiques.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-brand-paper rounded border border-brand-line">
              <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-brand-ink">Garantie &amp; Pose Certifiée</strong>
                <p className="text-xs text-brand-muted mt-1">Installation au laser, étanchéité périphérique aux silicones neutres professionnels et garantie décennale.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-heading text-2xl font-bold text-brand-ink mb-6 text-center">
            Questions Fréquentes sur l'Aluminium
          </h2>

          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-brand-paperCard border border-brand-line rounded-lg p-5 group" open={idx === 0}>
              <summary className="font-heading text-sm font-bold text-brand-ink cursor-pointer list-none flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-brand-red font-bold text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs text-brand-muted mt-3 pt-3 border-t border-brand-line leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
