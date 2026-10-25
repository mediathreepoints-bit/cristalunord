'use client';

import React from 'react';
import Link from 'next/link';
import { Bell, Search, Plus, MessageSquare, Phone } from 'lucide-react';

export default function AdminHeader({ title }: { title: string }) {
  return (
    <header className="bg-brand-paperCard border-b border-brand-line px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="font-heading text-xl font-bold text-brand-ink">{title}</h1>
        <p className="text-xs text-brand-muted">Espace commercial et gestion des opérations CRISTALU NORD</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Quick WhatsApp Link */}
        <a
          href="https://wa.me/212777077468"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp : +212 777 077 468</span>
        </a>

        {/* Quick Add Quote Link */}
        <Link
          href="/admin/devis"
          className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-redHover text-white px-3.5 py-1.5 rounded text-xs font-bold transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Nouveau Devis</span>
        </Link>
      </div>
    </header>
  );
}
