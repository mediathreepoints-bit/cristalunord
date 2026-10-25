import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Menuiserie PVC Tanger & Maroc — Fenêtres & Portes Isolantes | CRISTALU NORD',
  description: 'Fenêtres et portes PVC haute performance au Maroc : isolation phonique et thermique maximale, profilés multichambres anti-UV adaptés au climat côtier.',
  canonical: '/services/menuiserie-pvc',
});

export default function MenuiseriePVCPage() {
  const faqs = [
    {
      question: "Pourquoi choisir le PVC pour mes fenêtres au Maroc ?",
      answer: "Le PVC offre naturellement la meilleure isolation thermique et acoustique du marché tout en restant plus économique que l'aluminium. Il est insensible à la corrosion marine et ne nécessite aucune peinture d'entretien.",
    },
    {
      question: "Le PVC résiste-t-il au fort ensoleillement sans jaunir ?",
      answer: "Nos profilés PVC sont enrichis en dioxyde de titane et stabilisants anti-UV haute résistance spécialement formulés pour les climats à fort rayonnement solaire comme celui du Maroc, garantissant une couleur stable dans le temps.",
    },
    {
      question: "Quel vitrage associer à des fenêtres PVC pour couper le bruit extérieur ?",
      answer: "Nous installons des doubles vitrages asymétriques (type 4/16/6 ou vitrage acoustique feuilleté Silence 44.2) qui procurent un affaiblissement acoustique pouvant atteindre 40 à 42 dB.",
    },
  ];

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Menuiserie PVC', url: '/services/menuiserie-pvc' },
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
            <li className="font-bold text-brand-ink">Menuiserie PVC</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">
              EXPERTISÉ N°2 · ISOLATION THERMIQUE &amp; ACOUSTIQUE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6 leading-tight">
              Menuiserie PVC<br />
              <em className="font-serif italic font-normal text-brand-red">Haute Performance &amp; Silence.</em>
            </h1>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              Pour une isolation thermique et acoustique sans égale, nos fenêtres et portes PVC 5 chambres associées au double vitrage isolant au gaz argon suppriment les déperditions d'énergie et créent un cocon de sérénité dans votre habitation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/devis?produit=Fenêtre+PVC&materiau=pvc"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-6 py-3.5 rounded-sm text-xs font-bold transition-all shadow-sm"
              >
                <span>Demander un devis PVC</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20des%20renseignements%20sur%20les%20fen%C3%AAtres%20PVC."
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
              src="/assets/pvc.webp"
              alt="Fenêtres PVC installées par Cristalu Nord"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Technical Grid */}
        <div className="bg-brand-paperCard border border-brand-line rounded-xl p-8 sm:p-12 mb-16 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-brand-ink mb-6">
            Les Avantages du PVC Cristalu Nord
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Isolation Thermo-Acoustique Incomparable</strong>
              <p className="text-xs text-brand-muted">Profilés 5 chambres avec joints EPDM et double vitrage thermique gaz argon pour une protection absolue contre le bruit et le froid/chaud.</p>
            </div>

            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Résistance Air Marin &amp; Zéro Corrosion</strong>
              <p className="text-xs text-brand-muted">Matériau imputrescible ne craignant ni l’humidité côtière de Tanger ni les embruns salins, avec quincailleries traitées anticorrosion.</p>
            </div>

            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Finitions &amp; Plaxage Décoratif</strong>
              <p className="text-xs text-brand-muted">Blanc brillant immaculé ou plaxage effet bois chêne doré pour un style chaleureux sans contrainte d’entretien.</p>
            </div>

            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Facilité d’Entretien &amp; Durabilité</strong>
              <p className="text-xs text-brand-muted">Nettoyage rapide à l’eau savonneuse, sans jamais nécessiter de ponçage ni de repeinte périodique.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-heading text-2xl font-bold text-brand-ink mb-6 text-center">
            Questions Fréquentes sur le PVC
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
