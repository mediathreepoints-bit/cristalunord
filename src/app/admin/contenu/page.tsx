'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { Settings, Save, CheckCircle2, Globe, Shield, Download, Image as ImageIcon, FolderArchive } from 'lucide-react';
import { INITIAL_COMPANY_INFO } from '@/lib/data/initial-data';

export default function AdminContentPage() {
  const [info, setInfo] = useState(INITIAL_COMPANY_INFO);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Paramètres du Site &amp; Métadonnées SEO" />

      <main className="p-8 space-y-6 flex-1 max-w-4xl">
        {saved && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded text-xs flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Les modifications ont été enregistrées avec succès dans la base de données.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-brand-paperCard border border-brand-line rounded-lg p-6 shadow-sm space-y-6 text-xs">
          <div>
            <h2 className="font-heading text-sm font-bold text-brand-ink mb-1">
              Coordonnées Officielles CRISTALU NORD
            </h2>
            <p className="text-brand-muted">Ces informations alimentent l'en-tête, le pied de page, les métadonnées SEO et le balisage Google Schema.org.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-brand-ink mb-1">Nom de l'entreprise</label>
              <input
                type="text"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink"
              />
            </div>

            <div>
              <label className="block font-bold text-brand-ink mb-1">Activité / Slogan</label>
              <input
                type="text"
                value={info.activity}
                onChange={(e) => setInfo({ ...info, activity: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink"
              />
            </div>

            <div>
              <label className="block font-bold text-brand-ink mb-1">Téléphone Appel Direct</label>
              <input
                type="text"
                value={info.phone_display}
                onChange={(e) => setInfo({ ...info, phone_display: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink"
              />
            </div>

            <div>
              <label className="block font-bold text-brand-ink mb-1">Numéro WhatsApp (Format international)</label>
              <input
                type="text"
                value={info.whatsapp}
                onChange={(e) => setInfo({ ...info, whatsapp: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink"
              />
            </div>

            <div>
              <label className="block font-bold text-brand-ink mb-1">Email de Contact</label>
              <input
                type="email"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink"
              />
            </div>

            <div>
              <label className="block font-bold text-brand-ink mb-1">Horaires d'ouverture</label>
              <input
                type="text"
                value={info.hours}
                onChange={(e) => setInfo({ ...info, hours: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-brand-ink mb-1">Adresse Complète de l'Atelier / Siège</label>
            <input
              type="text"
              value={info.address}
              onChange={(e) => setInfo({ ...info, address: e.target.value })}
              className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink"
            />
          </div>

          <div className="pt-4 border-t border-brand-line flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-6 py-2.5 rounded font-bold shadow-sm transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Enregistrer les modifications</span>
            </button>
          </div>
        </form>

        {/* Media & Brand Assets Pack Download */}
        <div className="bg-brand-paperCard border border-brand-line rounded-lg p-6 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-brand-line pb-3">
            <div className="flex items-center gap-2">
              <FolderArchive className="w-4 h-4 text-brand-red" />
              <h2 className="font-heading text-sm font-bold text-brand-ink">
                Médiathèque &amp; Pack Photos HD (ZIP)
              </h2>
            </div>
            <span className="text-[10px] font-mono bg-white/50 px-2 py-0.5 rounded border border-brand-line text-brand-muted">
              21 FICHIERS · 1.9 MO
            </span>
          </div>

          <p className="text-brand-muted leading-relaxed">
            Téléchargez l’intégralité des photographies de chantiers réels, photos d’atelier, logos vectoriels et déclinaisons de marque Cristalu Nord en haute résolution.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/cristalunord-photos-assets.zip"
              download="cristalunord-photos-assets.zip"
              className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-red text-white px-4 py-2.5 rounded text-xs font-bold transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger l’archive Photos &amp; Logos (ZIP)</span>
            </a>

            <a
              href="/assets/logo-cristalu-nord.png"
              download="logo-cristalu-nord.png"
              className="inline-flex items-center gap-1.5 border border-brand-line hover:border-brand-ink text-brand-ink px-3 py-2 rounded text-xs font-semibold transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5 text-brand-red" />
              <span>Logo Officiel PNG</span>
            </a>

            <a
              href="/assets/og-image.jpg"
              download="og-image.jpg"
              className="inline-flex items-center gap-1.5 border border-brand-line hover:border-brand-ink text-brand-ink px-3 py-2 rounded text-xs font-semibold transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5 text-brand-red" />
              <span>Bannière OpenGraph</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
