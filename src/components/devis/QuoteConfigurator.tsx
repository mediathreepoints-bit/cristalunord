'use client';

import React, { useState } from 'react';
import { 
  Check, ArrowRight, ArrowLeft, MessageSquare, Download, CheckCircle2, 
  Sparkles, Layers, ShieldCheck, Ruler, Palette, User, FileText, AlertCircle 
} from 'lucide-react';
import { MaterialType } from '@/types';
import { generateQuotePDF } from '@/lib/pdf/quote-generator';
import ArchitecturalWindowBlueprint from './ArchitecturalWindowBlueprint';

interface ConfiguratorState {
  step: number;
  product_name: string;
  material: MaterialType;
  width_cm: number;
  height_cm: number;
  quantity: number;
  glazing: string;
  color: string;
  opening_type: string;
  include_installation: boolean;
  tags: string[];
  full_name: string;
  phone: string;
  email: string;
  city: string;
  site_address: string;
  comment: string;
}

const INITIAL_STATE: ConfiguratorState = {
  step: 1,
  product_name: 'Baie vitrée coulissante',
  material: 'aluminium',
  width_cm: 240,
  height_cm: 220,
  quantity: 1,
  glazing: 'Double Vitrage 4/16/4 Argon',
  color: 'Gris Anthracite 7016',
  opening_type: 'Coulissant 2 vantaux',
  include_installation: true,
  tags: ['Projet neuf'],
  full_name: '',
  phone: '',
  email: '',
  city: 'Tanger',
  site_address: '',
  comment: '',
};

export default function QuoteConfigurator() {
  const [data, setData] = useState<ConfiguratorState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const productOptions = [
    { id: 'baie-vitree', name: 'Baie vitrée coulissante', desc: 'Idéale pour salons, terrasses et villas' },
    { id: 'fenetre', name: 'Fenêtre battante / oscillo-battante', desc: 'Haute étanchéité et aération sécurisée' },
    { id: 'porte-entree', name: 'Porte d’entrée contemporaine', desc: 'Sécurité multipoints et design soigné' },
    { id: 'facade-vitree', name: 'Façade vitrée & Mur rideau', desc: 'Pour façades continues et showrooms' },
    { id: 'habillage-alucobond', name: 'Habillage Alucobond composite', desc: 'Rénovation et habillage moderne' },
    { id: 'garde-corps', name: 'Garde-corps en verre sécurit', desc: 'Transparence et sécurité pour balcons et escaliers' },
    { id: 'verriere', name: 'Verrière intérieure style atelier', desc: 'Séparation d’espaces élégante' },
    { id: 'autre', name: 'Autre projet sur mesure', desc: 'Ouvrage architectural spécifique' },
  ];

  const materialOptions = [
    {
      id: 'aluminium' as MaterialType,
      name: 'Aluminium Haut de Gamme (RPT)',
      desc: 'Profilés à rupture de pont thermique, finesse des lignes, robustesse et longévité.',
      badge: 'Le plus populaire au Maroc',
    },
    {
      id: 'pvc' as MaterialType,
      name: 'PVC Haute Isolation Thermo-Acoustique',
      desc: 'Profilés multichambres anti-UV, isolation phonique maximale, idéal climat marin.',
      badge: 'Meilleur rapport isolation/prix',
    },
    {
      id: 'verre' as MaterialType,
      name: 'Verre Architectural & Sécurité (Trempé / Feuilleté)',
      desc: 'Pour garde-corps, cloisons intérieures, pare-douches et murs rideaux.',
      badge: 'Design & Lumière',
    },
  ];

  const colorOptions = [
    { label: 'Gris Anthracite RAL 7016', hex: '#373f43' },
    { label: 'Noir Mat RAL 9005', hex: '#111111' },
    { label: 'Blanc Pur RAL 9010', hex: '#f4f4f4' },
    { label: 'Bronze / Champagne Anodisé', hex: '#8c7853' },
    { label: 'Chêne Doré (Plaxage PVC)', hex: '#8a5d3b' },
  ];

  const glazingOptions = [
    'Double Vitrage 4/16/4 Gaz Argon (Standard Recommandé)',
    'Double Vitrage Contrôle Solaire Planitherm 4S (Anti-chaleur)',
    'Verre Feuilleté de Sécurité Stadip Silence 44.2 (Anti-effraction & Phonique)',
    'Verre Trempé Sécurit 8mm / 10mm (Garde-corps & Douches)',
    'Simple Vitrage Clair (Ouvrages intérieurs)',
  ];

  const openingOptions = [
    'Coulissant 2 vantaux',
    'Coulissant 3 ou 4 vantaux',
    'Coulissant à galandage (dans le mur)',
    'Battant ouverture à la française',
    'Oscillo-battant 2 vantaux',
    'Châssis fixe panoramique',
    'Porte pivotante contemporaine',
  ];

  const cities = ['Tanger', 'Tétouan / Martil', 'Kénitra', 'Rabat / Salé', 'Casablanca', 'Autre ville au Maroc'];

  const tagList = ['Projet neuf', 'Rénovation', 'Devis urgent', 'Fourniture & Pose', 'Architecte / Bureau d’études'];

  const handleNext = () => {
    setErrorMsg(null);
    if (data.step === 5) {
      if (!data.full_name.trim()) {
        setErrorMsg('Veuillez renseigner votre nom complet.');
        return;
      }
      if (!data.phone.trim()) {
        setErrorMsg('Veuillez renseigner votre numéro de téléphone.');
        return;
      }
      handleSubmit();
      return;
    }
    setData((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const handlePrev = () => {
    setData((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Erreur lors de la soumission');
      }

      setSubmittedRef(json.quote_number || `DEV-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setData((prev) => ({ ...prev, step: 6 }));
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Une erreur est survenue';
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
`Bonjour CRISTALU NORD,
Je viens de configurer une demande de devis sur votre site web (Réf : ${submittedRef || 'Web'}) :

• Client : ${data.full_name}
• Téléphone : ${data.phone}
• Ville : ${data.city}
• Produit : ${data.product_name}
• Matériau : ${data.material.toUpperCase()}
• Dimensions : ${data.width_cm} × ${data.height_cm} cm (Qté : ${data.quantity})
• Vitrage : ${data.glazing}
• Teinte : ${data.color}
• Ouverture : ${data.opening_type}
• Pose : ${data.include_installation ? 'Oui (Fourniture & Pose)' : 'Fourniture seule'}
${data.comment ? `• Commentaire : ${data.comment}` : ''}

Merci pour votre retour rapide.`
    );
  };

  const handleDownloadPDF = () => {
    const mockQuote = {
      id: 'quote-client',
      quote_number: submittedRef || 'DEV-2026-WEB',
      client_name: data.full_name || 'Client Cristalu Nord',
      client_phone: data.phone || '+212 777 077 468',
      client_email: data.email,
      city: data.city,
      site_address: data.site_address || `${data.city}, Maroc`,
      status: 'en_attente' as const,
      title: `Estimation préliminaire : ${data.product_name} (${data.material.toUpperCase()})`,
      subtotal_ht: 0,
      discount_percentage: 0,
      discount_amount: 0,
      tva_rate: 20,
      tva_amount: 0,
      total_ttc: 0,
      validity_days: 30,
      payment_terms: '50% à la commande, 40% au démarrage de la pose, 10% à la réception.',
      notes: 'Devis préliminaire en attente de validation définitive des cotes sur chantier par le technicien Cristalu Nord.',
      items: [
        {
          id: 'item-1',
          quote_id: 'quote-client',
          item_order: 1,
          description: `${data.product_name} — Système ${data.opening_type}`,
          material: data.material,
          width_cm: data.width_cm,
          height_cm: data.height_cm,
          quantity: data.quantity,
          unit_price_ht: 0,
          total_price_ht: 0,
          glazing_option: data.glazing,
          color_finish: data.color,
        },
      ],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const doc = generateQuotePDF(mockQuote);
    doc.save(`Devis-Cristalu-Nord-${submittedRef || '2026'}.pdf`);
  };

  return (
    <div className="bg-brand-paperCard border border-brand-line rounded-xl shadow-apple-lg overflow-hidden">
      {/* Step Progress Header */}
      <div className="bg-brand-ink text-white p-6 border-b border-brand-lineDark">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-redLight bg-brand-red px-2 py-0.5 rounded">
              CONFIGURATEUR ÉTAPE {data.step} / 6
            </span>
            <h2 className="font-heading text-lg sm:text-xl font-bold mt-1 text-white">
              {data.step === 1 && '1. Sélection du Produit'}
              {data.step === 2 && '2. Choix du Matériau'}
              {data.step === 3 && '3. Dimensions & Quantité'}
              {data.step === 4 && '4. Options & Finitions'}
              {data.step === 5 && '5. Coordonnées & Chantier'}
              {data.step === 6 && '6. Demande Transmise avec Succès'}
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-300">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  data.step === i
                    ? 'bg-brand-red text-white scale-110 shadow-sm'
                    : data.step > i
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                {data.step > i ? '✓' : i}
              </span>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-brand-red h-full transition-all duration-300"
            style={{ width: `${(data.step / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content Body */}
      <div className="p-6 sm:p-8">
        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* STEP 1 : PRODUCT */}
        {data.step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-xs text-brand-muted mb-4">
              Sélectionnez l’ouvrage que vous souhaitez concevoir :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {productOptions.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setData({ ...data, product_name: p.name })}
                  className={`p-4 text-left rounded-lg border transition-all flex flex-col justify-between ${
                    data.product_name === p.name
                      ? 'border-brand-red bg-brand-redLight/30 ring-2 ring-brand-red/20'
                      : 'border-brand-line hover:border-gray-400 bg-brand-paper'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-xs sm:text-sm font-bold text-brand-ink">{p.name}</strong>
                    {data.product_name === p.name && <Check className="w-4 h-4 text-brand-red" />}
                  </div>
                  <span className="text-[11px] text-brand-muted">{p.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 : MATERIAL */}
        {data.step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-xs text-brand-muted mb-4">
              Choisissez la matière adaptée aux exigences thermiques et architecturales de votre bâtiment :
            </p>
            <div className="space-y-3">
              {materialOptions.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setData({ ...data, material: m.id })}
                  className={`w-full p-5 text-left rounded-lg border transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-2 ${
                    data.material === m.id
                      ? 'border-brand-red bg-brand-redLight/30 ring-2 ring-brand-red/20'
                      : 'border-brand-line hover:border-gray-400 bg-brand-paper'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <strong className="text-sm font-bold text-brand-ink">{m.name}</strong>
                      <span className="text-[10px] font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded">
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-xs text-brand-muted">{m.desc}</p>
                  </div>
                  {data.material === m.id && <Check className="w-5 h-5 text-brand-red flex-shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 : DIMENSIONS & QUANTITY */}
        {data.step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-xs text-brand-muted">
              Indiquez les dimensions approximatives en centimètres (notre technicien viendra valider les cotes exactes sur site) :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-ink mb-2">
                  Largeur (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="20"
                    max="1200"
                    value={data.width_cm}
                    onChange={(e) => setData({ ...data, width_cm: Number(e.target.value) })}
                    className="w-full bg-brand-paper border border-brand-line rounded p-3 text-sm font-bold text-brand-ink focus:outline-none focus:border-brand-red"
                  />
                  <span className="absolute right-3 top-3 text-xs text-brand-muted font-semibold">cm</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-ink mb-2">
                  Hauteur (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="20"
                    max="600"
                    value={data.height_cm}
                    onChange={(e) => setData({ ...data, height_cm: Number(e.target.value) })}
                    className="w-full bg-brand-paper border border-brand-line rounded p-3 text-sm font-bold text-brand-ink focus:outline-none focus:border-brand-red"
                  />
                  <span className="absolute right-3 top-3 text-xs text-brand-muted font-semibold">cm</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-ink mb-2">
                  Quantité d’ouvrages
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={data.quantity}
                  onChange={(e) => setData({ ...data, quantity: Number(e.target.value) })}
                  className="w-full bg-brand-paper border border-brand-line rounded p-3 text-sm font-bold text-brand-ink focus:outline-none focus:border-brand-red"
                />
              </div>
            </div>

            {/* Live 2D Architectural Schematic Preview */}
            <div className="pt-2">
              <ArchitecturalWindowBlueprint
                widthMm={data.width_cm * 10}
                heightMm={data.height_cm * 10}
                material={data.material}
                windowType={
                  data.opening_type.toLowerCase().includes('coulissant') || data.opening_type.toLowerCase().includes('galandage')
                    ? 'coulissant'
                    : data.opening_type.toLowerCase().includes('battant') || data.opening_type.toLowerCase().includes('oscillo')
                    ? 'battant'
                    : data.opening_type.toLowerCase().includes('porte')
                    ? 'porte'
                    : 'fixe'
                }
                colorHex={colorOptions.find((c) => c.label === data.color)?.hex || '#373f43'}
                colorName={data.color}
                glassType={data.glazing}
              />
            </div>

            {/* Proportion Visual Preview Box */}
            <div className="p-4 bg-brand-paperAlt border border-brand-line rounded-lg flex items-center justify-between text-xs text-brand-muted">
              <div className="flex items-center gap-3">
                <Ruler className="w-5 h-5 text-brand-red" />
                <span>
                  Surface estimée : <strong>{((data.width_cm * data.height_cm) / 10000).toFixed(2)} m²</strong> par unité ({(((data.width_cm * data.height_cm) / 10000) * data.quantity).toFixed(2)} m² au total)
                </span>
              </div>
              <span className="font-bold text-brand-ink">{data.quantity} pièce(s)</span>
            </div>
          </div>
        )}

        {/* STEP 4 : OPTIONS & FINISHES */}
        {data.step === 4 && (
          <div className="space-y-6 animate-fade-in">
            {/* Color / Finish */}
            <div>
              <label className="block text-xs font-bold text-brand-ink mb-3 flex items-center gap-2">
                <Palette className="w-4 h-4 text-brand-red" />
                <span>Couleur &amp; Finition souhaitée</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {colorOptions.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setData({ ...data, color: c.label })}
                    className={`p-3 rounded-lg border text-left flex items-center gap-3 transition-all ${
                      data.color === c.label
                        ? 'border-brand-red bg-brand-redLight/30 ring-2 ring-brand-red/20'
                        : 'border-brand-line hover:border-gray-400 bg-brand-paper'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-gray-400 flex-shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs font-semibold text-brand-ink">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Glazing */}
            <div>
              <label className="block text-xs font-bold text-brand-ink mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                <span>Type de Vitrage</span>
              </label>
              <select
                value={data.glazing}
                onChange={(e) => setData({ ...data, glazing: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-3 text-xs font-medium text-brand-ink focus:outline-none focus:border-brand-red"
              >
                {glazingOptions.map((g, i) => (
                  <option key={i} value={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Opening type */}
            <div>
              <label className="block text-xs font-bold text-brand-ink mb-2">
                Type d’ouverture
              </label>
              <select
                value={data.opening_type}
                onChange={(e) => setData({ ...data, opening_type: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-3 text-xs font-medium text-brand-ink focus:outline-none focus:border-brand-red"
              >
                {openingOptions.map((op, i) => (
                  <option key={i} value={op}>{op}</option>
                ))}
              </select>
            </div>

            {/* Include installation */}
            <div className="p-4 bg-brand-paper border border-brand-line rounded-lg flex items-center justify-between">
              <div>
                <strong className="block text-xs font-bold text-brand-ink">Pose sur chantier par Cristalu Nord</strong>
                <span className="text-[11px] text-brand-muted">Installation au niveau laser, calage et étanchéité certifiée</span>
              </div>
              <input
                type="checkbox"
                checked={data.include_installation}
                onChange={(e) => setData({ ...data, include_installation: e.target.checked })}
                className="w-5 h-5 accent-brand-red rounded"
              />
            </div>

            {/* Live 2D Architectural Schematic Preview for Step 4 */}
            <div className="pt-2">
              <ArchitecturalWindowBlueprint
                widthMm={data.width_cm * 10}
                heightMm={data.height_cm * 10}
                material={data.material}
                windowType={
                  data.opening_type.toLowerCase().includes('coulissant') || data.opening_type.toLowerCase().includes('galandage')
                    ? 'coulissant'
                    : data.opening_type.toLowerCase().includes('battant') || data.opening_type.toLowerCase().includes('oscillo')
                    ? 'battant'
                    : data.opening_type.toLowerCase().includes('porte')
                    ? 'porte'
                    : 'fixe'
                }
                colorHex={colorOptions.find((c) => c.label === data.color)?.hex || '#373f43'}
                colorName={data.color}
                glassType={data.glazing}
              />
            </div>
          </div>
        )}

        {/* STEP 5 : CUSTOMER INFO */}
        {data.step === 5 && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-xs text-brand-muted mb-4">
              Indiquez vos coordonnées pour recevoir votre devis chiffré et organiser la prise de cotes :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-ink mb-1.5">
                  Nom &amp; Prénom <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Karim Benali"
                  value={data.full_name}
                  onChange={(e) => setData({ ...data, full_name: e.target.value })}
                  className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-ink mb-1.5">
                  Téléphone / WhatsApp <span className="text-brand-red">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex : +212 661 234 567"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-ink mb-1.5">
                  Email (optionnel)
                </label>
                <input
                  type="email"
                  placeholder="Ex : karim@exemple.ma"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-ink mb-1.5">
                  Ville du chantier
                </label>
                <select
                  value={data.city}
                  onChange={(e) => setData({ ...data, city: e.target.value })}
                  className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                >
                  {cities.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-ink mb-1.5">
                Précisions supplémentaires sur votre projet
              </label>
              <textarea
                rows={3}
                placeholder="Mentionnez toute particularité : villa en construction, remplacement de fenêtres existantes, accès chantier..."
                value={data.comment}
                onChange={(e) => setData({ ...data, comment: e.target.value })}
                className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red resize-y"
              />
            </div>

            {/* Quick tags */}
            <div>
              <label className="block text-[11px] font-bold text-brand-muted mb-2">
                Contexte du projet :
              </label>
              <div className="flex flex-wrap gap-2">
                {tagList.map((tag, idx) => {
                  const isSelected = data.tags.includes(tag);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (isSelected) {
                          setData({ ...data, tags: data.tags.filter((t) => t !== tag) });
                        } else {
                          setData({ ...data, tags: [...data.tags, tag] });
                        }
                      }}
                      className={`text-[11px] px-3 py-1 rounded-full border transition-all ${
                        isSelected
                          ? 'bg-brand-red text-white border-brand-red'
                          : 'bg-brand-paper text-brand-muted border-brand-line hover:border-gray-400'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 6 : CONFIRMATION SUCCESS */}
        {data.step === 6 && (
          <div className="text-center py-6 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-[11px] font-extrabold tracking-widest text-brand-red uppercase">
                RÉFÉRENCE : {submittedRef}
              </span>
              <h3 className="font-heading text-2xl font-bold text-brand-ink mt-1">
                Merci {data.full_name}, votre demande est enregistrée !
              </h3>
              <p className="text-xs text-brand-muted max-w-md mx-auto mt-2 leading-relaxed">
                Notre équipe technique à Tanger prépare votre étude chiffrée. Vous pouvez maintenant poursuivre directement sur WhatsApp ou télécharger le récapitulatif PDF.
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-4 bg-brand-paper border border-brand-line rounded-lg text-left text-xs max-w-lg mx-auto space-y-2">
              <div className="flex justify-between border-b border-brand-line pb-2">
                <span className="text-brand-muted">Ouvrage configuré :</span>
                <strong className="text-brand-ink">{data.product_name}</strong>
              </div>
              <div className="flex justify-between border-b border-brand-line pb-2">
                <span className="text-brand-muted">Matériau &amp; Teinte :</span>
                <strong className="text-brand-ink">{data.material.toUpperCase()} · {data.color}</strong>
              </div>
              <div className="flex justify-between border-b border-brand-line pb-2">
                <span className="text-brand-muted">Dimensions :</span>
                <strong className="text-brand-ink">{data.width_cm} × {data.height_cm} cm ({data.quantity} pièce)</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-muted">Chantier :</span>
                <strong className="text-brand-ink">{data.city}</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/212777077468?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-sm text-xs font-bold transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ouvrir dans WhatsApp avec ce récapitulatif ↗</span>
              </a>

              <button
                type="button"
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-red text-white px-6 py-3.5 rounded-sm text-xs font-bold transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger Devis PDF</span>
              </button>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        {data.step < 6 && (
          <div className="mt-8 pt-6 border-t border-brand-line flex items-center justify-between">
            {data.step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-ink hover:text-brand-red px-4 py-2.5 rounded border border-brand-line transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-red text-white px-6 py-3 rounded-sm text-xs font-bold shadow-md transition-all disabled:opacity-50"
            >
              <span>{data.step === 5 ? (isSubmitting ? 'Transmission en cours...' : 'Valider & Générer mon Devis') : 'Étape suivante'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
