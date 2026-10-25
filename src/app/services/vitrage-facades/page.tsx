import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Façades Vitrées, Murs Rideaux & Habillage Alucobond Maroc | CRISTALU NORD',
  description: 'Conception et pose de façades vitrées continues, murs rideaux, habillages Alucobond composites et garde-corps en verre trempé au Maroc.',
  canonical: '/services/vitrage-facades',
});

export default function VitrageFacadesPage() {
  const faqs = [
    {
      question: "Qu'est-ce qu'un mur rideau et pour quels bâtiments est-il adapté ?",
      answer: "Un mur rideau est une façade légère auto-portante en profilés aluminium et vitrages de sécurité. Il habille l'extérieur des immeubles de bureaux, centres commerciaux, showrooms et villas contemporaines, offrant une luminosité spectaculaire et une isolation moderne.",
    },
    {
      question: "Quels sont les avantages de l'habillage en panneaux composites Alucobond ?",
      answer: "Les panneaux composites aluminium (Alucobond / Stacbond) permettent de moderniser radicalement les façades vieillissantes, offrent une protection durable contre les intempéries et intègrent une isolation thermique par l'extérieur ventilée.",
    },
    {
      question: "Vos garde-corps en verre sont-ils conformes aux normes de sécurité contre les chutes ?",
      answer: "Absolument. Nous utilisons exclusivement des verres feuilletés trempés de sécurité (Stadip 88.2 ou 1010.2) testés pour résister aux chocs violents et fixés par profilés sabots continus au sol ou pinces en acier inoxydable 316L.",
    },
  ];

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Façades & Verre', url: '/services/vitrage-facades' },
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
            <li className="font-bold text-brand-ink">Façades &amp; Verre</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-2">
              EXPERTISÉ N°3 · ARCHITECTURE DU VERRE &amp; COMPOSITE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6 leading-tight">
              Façades Vitrées, Murs Rideaux<br />
              <em className="font-serif italic font-normal text-brand-red">&amp; Habillages Alucobond.</em>
            </h1>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              Donnez une identité architecturale prestigieuse à vos bâtiments grâce à nos solutions de murs rideaux vitrés, panneaux composites ventilés, verrières d'intérieur atelier et garde-corps en verre trempé sécurit.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/devis?produit=Façade+vitrée&materiau=verre"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-6 py-3.5 rounded-sm text-xs font-bold transition-all shadow-sm"
              >
                <span>Demander une étude de Façade</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20une%20%C3%A9tude%20pour%20une%20fa%C3%A7ade%20vitr%C3%A9e%20ou%20habillage."
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
              src="/assets/verre.webp"
              alt="Façade vitrée réalisée par Cristalu Nord"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Technical Grid */}
        <div className="bg-brand-paperCard border border-brand-line rounded-xl p-8 sm:p-12 mb-16 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-brand-ink mb-6">
            Nos Solutions de Vitrage Architectural
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Murs Rideaux &amp; Façades VEC / VEP</strong>
              <p className="text-xs text-brand-muted">Structures légères haute résistance avec vitrages isolants à contrôle solaire réduisant jusqu'à 60% des apports thermiques du soleil.</p>
            </div>

            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Habillage Façade Alucobond / Stacbond</strong>
              <p className="text-xs text-brand-muted">Panneaux composites aluminium ignifuges disponibles en noir mat, gris anthracite, bronze, métallisé et finitions texturées.</p>
            </div>

            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Garde-Corps Tout Verre Trempé Sécurit</strong>
              <p className="text-xs text-brand-muted">Fixation sur dalle ou en applique par sabot continu en aluminium anodisé ou pinces inox 316L résistant aux embruns marins.</p>
            </div>

            <div className="p-4 bg-brand-paper rounded border border-brand-line">
              <strong className="block text-xs font-bold text-brand-ink mb-1">Verrières d'Intérieur &amp; Pare-Douches</strong>
              <p className="text-xs text-brand-muted">Cloisons verrières style atelier d’artiste avec profilés fins noir mat et parois de douche sur mesure avec quincaillerie inox brossé.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-heading text-2xl font-bold text-brand-ink mb-6 text-center">
            Questions Fréquentes sur les Façades &amp; le Verre
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
