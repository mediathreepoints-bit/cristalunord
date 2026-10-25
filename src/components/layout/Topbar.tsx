'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Topbar() {
  return (
    <aside className="bg-brand-ink text-gray-300 text-[11px] border-b border-white/10 relative z-30" aria-label="Informations rapides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
          <span className="font-semibold tracking-wider text-gray-200 uppercase text-[10px] sm:text-[11px]">
            ALUMINIUM RPT · PVC ISOLANT · FAÇADES EN VERRE · INOX
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-xs">
          <span className="hidden md:inline-flex items-center gap-1.5 text-gray-400">
            <MapPin className="w-3 h-3 text-brand-red" />
            Tanger, Tétouan &amp; tout le Maroc
          </span>

          <a
            href="tel:+212777077468"
            className="inline-flex items-center gap-1.5 text-white font-bold hover:text-red-400 transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-red" />
            <span>+212 777 077 468</span>
          </a>

          <a
            href="https://wa.me/212777077468"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp direct</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
