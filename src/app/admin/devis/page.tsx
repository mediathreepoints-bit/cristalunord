'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { FileText, Plus, Download, Eye, Send, CheckCircle2, Trash2 } from 'lucide-react';
import { dataStore } from '@/lib/data/initial-data';
import { Quote, QuoteItem, QuoteStatus, MaterialType } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { generateQuotePDF } from '@/lib/pdf/quote-generator';

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>(dataStore.quotes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New quote modal form state
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [city, setCity] = useState('Tanger');
  const [siteAddress, setSiteAddress] = useState('');
  const [quoteTitle, setQuoteTitle] = useState('Menuiseries Aluminium RPT sur mesure');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [items, setItems] = useState<Omit<QuoteItem, 'id' | 'quote_id'>[]>([
    {
      item_order: 1,
      description: 'Baie vitrée coulissante 2 vantaux série Prestige RPT',
      material: 'aluminium',
      width_cm: 240,
      height_cm: 220,
      quantity: 1,
      unit_price_ht: 14500,
      total_price_ht: 14500,
      glazing_option: 'Double Vitrage 4/16/4 Argon',
      color_finish: 'Gris Anthracite 7016',
    },
  ]);

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        item_order: prev.length + 1,
        description: 'Fenêtre battante oscillo-battante RPT',
        material: 'aluminium',
        width_cm: 120,
        height_cm: 140,
        quantity: 1,
        unit_price_ht: 3800,
        total_price_ht: 3800,
        glazing_option: 'Double Vitrage 4/16/4',
        color_finish: 'Gris Anthracite 7016',
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateItem = (index: number, field: keyof Omit<QuoteItem, 'id' | 'quote_id'>, value: unknown) => {
    setItems((prev) => {
      const copy = [...prev];
      const item = { ...copy[index], [field]: value };
      if (field === 'quantity' || field === 'unit_price_ht') {
        item.total_price_ht = (item.quantity || 1) * (item.unit_price_ht || 0);
      }
      copy[index] = item;
      return copy;
    });
  };

  const subtotalHT = items.reduce((sum, item) => sum + (item.total_price_ht || 0), 0);
  const discountAmount = (subtotalHT * discountPercent) / 100;
  const netHT = subtotalHT - discountAmount;
  const tvaAmount = (netHT * 20) / 100;
  const totalTTC = netHT + tvaAmount;

  const handleCreateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim() || items.length === 0) return;

    const newQuote = dataStore.addQuote({
      client_name: clientName,
      client_phone: clientPhone,
      client_email: clientEmail,
      city,
      site_address: siteAddress,
      status: 'envoye',
      title: quoteTitle,
      subtotal_ht: subtotalHT,
      discount_percentage: discountPercent,
      discount_amount: discountAmount,
      tva_rate: 20,
      tva_amount: tvaAmount,
      total_ttc: totalTTC,
      validity_days: 30,
      payment_terms: '50% à la commande, 40% au démarrage de la pose, 10% à la réception.',
      notes: 'Devis officiel Cristalu Nord conforme aux normes Qualicoat & RTCM.',
      items: items.map((it, idx) => ({
        ...it,
        id: `item-${Date.now()}-${idx}`,
        quote_id: 'pending',
      })),
    });

    setQuotes([...dataStore.quotes]);
    setIsModalOpen(false);

    // Reset form
    setClientName('');
    setClientPhone('');
    setClientEmail('');
    setSiteAddress('');
  };

  const handleDownloadPDF = (quote: Quote) => {
    const doc = generateQuotePDF(quote);
    doc.save(`${quote.quote_number}-Cristalu-Nord.pdf`);
  };

  const handleStatusChange = (id: string, status: QuoteStatus) => {
    dataStore.updateQuoteStatus(id, status);
    setQuotes([...dataStore.quotes]);
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Gestion des Devis &amp; Facturation Préliminaire" />

      <main className="p-8 space-y-6 flex-1">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-brand-paperCard p-4 rounded-lg border border-brand-line">
          <div>
            <h2 className="font-heading text-sm font-bold text-brand-ink">
              Liste des Devis Émis ({quotes.length})
            </h2>
            <p className="text-xs text-brand-muted">Génération automatique des références et export PDF aux normes</p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-4 py-2 rounded text-xs font-bold transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Créer un Nouveau Devis</span>
          </button>
        </div>

        {/* Quotes Table */}
        <div className="bg-brand-paperCard border border-brand-line rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-brand-paperAlt border-b border-brand-line text-brand-muted uppercase text-[10px] font-bold tracking-wider">
                  <th className="p-3.5">N° Devis</th>
                  <th className="p-3.5">Client &amp; Contact</th>
                  <th className="p-3.5">Objet du Devis</th>
                  <th className="p-3.5">Total TTC</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Statut</th>
                  <th className="p-3.5 text-right">PDF &amp; Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {quotes.map((q) => (
                  <tr key={q.id} className="hover:bg-brand-paper transition-colors">
                    <td className="p-3.5">
                      <strong className="text-brand-red font-extrabold text-xs">{q.quote_number}</strong>
                    </td>

                    <td className="p-3.5">
                      <strong className="block text-brand-ink font-bold">{q.client_name}</strong>
                      <span className="text-[11px] text-brand-muted">{q.city} · {q.client_phone}</span>
                    </td>

                    <td className="p-3.5 text-brand-ink max-w-xs truncate font-medium">
                      {q.title}
                    </td>

                    <td className="p-3.5">
                      <strong className="text-brand-ink font-extrabold">{formatCurrency(q.total_ttc)}</strong>
                    </td>

                    <td className="p-3.5 text-brand-muted">{formatDate(q.created_at)}</td>

                    <td className="p-3.5">
                      <select
                        value={q.status}
                        onChange={(e) => handleStatusChange(q.id, e.target.value as QuoteStatus)}
                        className={`text-[10px] font-bold px-2 py-1 rounded border capitalize focus:outline-none ${
                          q.status === 'accepte'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : q.status === 'envoye'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        <option value="brouillon">Brouillon</option>
                        <option value="en_attente">En attente</option>
                        <option value="envoye">Envoyé</option>
                        <option value="accepte">Accepté</option>
                        <option value="refuse">Refusé</option>
                      </select>
                    </td>

                    <td className="p-3.5 text-right space-x-2">
                      <button
                        onClick={() => handleDownloadPDF(q)}
                        className="inline-flex items-center gap-1 bg-brand-ink hover:bg-brand-red text-white px-2.5 py-1 rounded text-[11px] font-bold transition-colors"
                        title="Télécharger le PDF"
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Quote Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-brand-paperCard w-full max-w-4xl max-h-[90vh] rounded-xl shadow-apple-lg border border-brand-line flex flex-col overflow-hidden">
              <div className="bg-brand-ink text-white p-5 flex items-center justify-between border-b border-brand-lineDark">
                <div>
                  <h3 className="font-heading text-base font-bold text-white">Nouveau Devis Commercial</h3>
                  <p className="text-xs text-gray-300">Remplissez les informations pour générer le devis officiel</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white text-lg">✕</button>
              </div>

              <form onSubmit={handleCreateQuote} className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
                {/* Client info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold mb-1 text-brand-ink">Nom du Client *</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ex: Villa Malabata / M. Amrani"
                      className="w-full bg-brand-paper border border-brand-line rounded p-2 text-xs focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1 text-brand-ink">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+212 661 ..."
                      className="w-full bg-brand-paper border border-brand-line rounded p-2 text-xs focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1 text-brand-ink">Ville</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Tanger"
                      className="w-full bg-brand-paper border border-brand-line rounded p-2 text-xs focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1 text-brand-ink">Objet / Titre du Devis *</label>
                  <input
                    type="text"
                    required
                    value={quoteTitle}
                    onChange={(e) => setQuoteTitle(e.target.value)}
                    className="w-full bg-brand-paper border border-brand-line rounded p-2 text-xs focus:outline-none focus:border-brand-red"
                  />
                </div>

                {/* Items Section */}
                <div className="space-y-3 border-t border-brand-line pt-4">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs uppercase font-extrabold text-brand-ink">Lignes d'ouvrages</strong>
                    <button
                      type="button"
                      onClick={handleAddItem}
                      className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Ajouter une ligne</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {items.map((it, idx) => (
                      <div key={idx} className="p-3 bg-brand-paper rounded border border-brand-line space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                          <div className="sm:col-span-6">
                            <input
                              type="text"
                              value={it.description}
                              onChange={(e) => handleUpdateItem(idx, 'description', e.target.value)}
                              placeholder="Désignation"
                              className="w-full bg-white border border-brand-line rounded p-1.5 text-xs"
                            />
                          </div>

                          <div className="sm:col-span-2 flex gap-1">
                            <input
                              type="number"
                              value={it.width_cm}
                              onChange={(e) => handleUpdateItem(idx, 'width_cm', Number(e.target.value))}
                              placeholder="L"
                              className="w-1/2 bg-white border border-brand-line rounded p-1.5 text-xs"
                            />
                            <input
                              type="number"
                              value={it.height_cm}
                              onChange={(e) => handleUpdateItem(idx, 'height_cm', Number(e.target.value))}
                              placeholder="H"
                              className="w-1/2 bg-white border border-brand-line rounded p-1.5 text-xs"
                            />
                          </div>

                          <div className="sm:col-span-1">
                            <input
                              type="number"
                              min="1"
                              value={it.quantity}
                              onChange={(e) => handleUpdateItem(idx, 'quantity', Number(e.target.value))}
                              placeholder="Qté"
                              className="w-full bg-white border border-brand-line rounded p-1.5 text-xs"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <input
                              type="number"
                              value={it.unit_price_ht}
                              onChange={(e) => handleUpdateItem(idx, 'unit_price_ht', Number(e.target.value))}
                              placeholder="P.U HT"
                              className="w-full bg-white border border-brand-line rounded p-1.5 text-xs font-bold"
                            />
                          </div>

                          <div className="sm:col-span-1 text-right">
                            {items.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveItem(idx)}
                                className="text-red-600 hover:text-red-800 p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals Summary in Modal */}
                <div className="bg-brand-paper p-4 rounded border border-brand-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="font-bold">Remise (%) :</label>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={discountPercent}
                      onChange={(e) => setDiscountPercent(Number(e.target.value))}
                      className="w-16 bg-white border border-brand-line rounded p-1 text-xs"
                    />
                  </div>

                  <div className="text-right space-y-0.5">
                    <span className="text-[11px] text-brand-muted block">Sous-total HT : {formatCurrency(subtotalHT)}</span>
                    <span className="text-[11px] text-brand-muted block">TVA (20%) : {formatCurrency(tvaAmount)}</span>
                    <strong className="text-sm font-extrabold text-brand-red block">
                      TOTAL TTC : {formatCurrency(totalTTC)}
                    </strong>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-brand-line rounded font-bold text-brand-muted hover:text-brand-ink"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-brand-red hover:bg-brand-redHover text-white font-bold rounded shadow-sm"
                  >
                    Créer &amp; Enregistrer le Devis
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
