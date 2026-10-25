import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, PhoneCall } from 'lucide-react';

export default function QuoteCTA() {
  return (
    <section className="py-20 bg-brand-ink text-white relative overflow-hidden" id="devis-rapide">
      {/* Decorative architectural grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2422_1px,transparent_1px),linear-gradient(to_bottom,#1f2422_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-gray-200">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <span>ESTIMATION IMMÉDIATE</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          Prêt à concrétiser votre projet de <em className="font-serif italic font-normal text-red-400">menuiserie ?</em>
        </h2>

        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Utilisez notre configurateur interactif de devis en 6 étapes pour définir vos dimensions, vos profilés aluminium ou PVC et recevoir une proposition technique personnalisée.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/devis"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-redHover text-white px-8 py-4 rounded-sm text-sm font-bold shadow-apple-lg hover:shadow-glow-red transition-all"
          >
            <span>Lancer le configurateur de devis</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:+212777077468"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-sm text-sm font-semibold transition-all"
          >
            <PhoneCall className="w-4 h-4 text-brand-red" />
            <span>+212 777 077 468</span>
          </a>

          <a
            href="https://wa.me/212777077468"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-sm text-sm font-bold transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </section>
  );
}
