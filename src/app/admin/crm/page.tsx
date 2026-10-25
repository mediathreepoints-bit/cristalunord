'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { Users, Phone, Mail, MapPin, MessageSquare, Plus, Search, Filter, CheckCircle2 } from 'lucide-react';
import { dataStore } from '@/lib/data/initial-data';
import { Lead, LeadStatus } from '@/types';
import { formatDate } from '@/lib/utils';

export default function AdminCRMPage() {
  const [leads, setLeads] = useState<Lead[]>(dataStore.leads);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const statuses: { id: string; label: string }[] = [
    { id: 'all', label: 'Tous' },
    { id: 'nouveau', label: 'Nouveau' },
    { id: 'contacte', label: 'Contacté' },
    { id: 'qualifie', label: 'Qualifié' },
    { id: 'devis_envoye', label: 'Devis envoyé' },
    { id: 'negociation', label: 'Négociation' },
    { id: 'accepte', label: 'Accepté' },
    { id: 'refuse', label: 'Refusé' },
  ];

  const handleStatusChange = (leadId: string, newStatus: LeadStatus) => {
    dataStore.updateLeadStatus(leadId, newStatus);
    setLeads([...dataStore.leads]);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = filterStatus === 'all' || l.status === filterStatus;
    const matchesSearch =
      l.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.phone.includes(searchTerm) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.project_type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="CRM — Gestion des Prospects &amp; Demandes" />

      <main className="p-8 space-y-6 flex-1">
        {/* Filters & Search Header */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-brand-paperCard p-4 rounded-lg border border-brand-line">
          {/* Status Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {statuses.map((s) => (
              <button
                key={s.id}
                onClick={() => setFilterStatus(s.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${
                  filterStatus === s.id
                    ? 'bg-brand-ink text-white'
                    : 'bg-brand-paper text-brand-muted hover:text-brand-ink border border-brand-line'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Rechercher nom, ville, tél..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-paper border border-brand-line rounded-full pl-9 pr-4 py-1.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
            />
          </div>
        </div>

        {/* Leads Table and Detail Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Leads Table */}
          <div className="lg:col-span-8 bg-brand-paperCard border border-brand-line rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-brand-paperAlt border-b border-brand-line text-brand-muted uppercase text-[10px] font-bold tracking-wider">
                    <th className="p-3.5">Client &amp; Contact</th>
                    <th className="p-3.5">Projet &amp; Matériau</th>
                    <th className="p-3.5">Ville</th>
                    <th className="p-3.5">Date</th>
                    <th className="p-3.5">Statut</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`hover:bg-brand-paper cursor-pointer transition-colors ${
                        selectedLead?.id === lead.id ? 'bg-brand-redLight/30' : ''
                      }`}
                    >
                      <td className="p-3.5">
                        <strong className="block text-brand-ink font-bold text-xs">{lead.full_name}</strong>
                        <span className="text-[11px] text-brand-muted">{lead.phone}</span>
                      </td>

                      <td className="p-3.5">
                        <span className="font-semibold text-brand-ink">{lead.project_type}</span>
                        <span className="block text-[10px] uppercase font-bold text-brand-red">
                          {lead.material}
                        </span>
                      </td>

                      <td className="p-3.5 text-brand-muted">{lead.city}</td>

                      <td className="p-3.5 text-brand-muted">{formatDate(lead.created_at)}</td>

                      <td className="p-3.5">
                        <select
                          value={lead.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className={`text-[10px] font-bold px-2 py-1 rounded border capitalize focus:outline-none ${
                            lead.status === 'nouveau'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : lead.status === 'qualifie'
                              ? 'bg-purple-50 text-purple-800 border-purple-200'
                              : lead.status === 'accepte'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : 'bg-gray-100 text-gray-800 border-gray-200'
                          }`}
                        >
                          <option value="nouveau">Nouveau</option>
                          <option value="contacte">Contacté</option>
                          <option value="qualifie">Qualifié</option>
                          <option value="devis_envoye">Devis envoyé</option>
                          <option value="negociation">Négociation</option>
                          <option value="accepte">Accepté</option>
                          <option value="refuse">Refusé</option>
                        </select>
                      </td>

                      <td className="p-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Bonjour%20${encodeURIComponent(lead.full_name)}%2C%20je%20fais%20suite%20%C3%A0%20votre%20demande%20chez%20Cristalu%20Nord.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-2.5 py-1 rounded text-[11px] font-bold"
                          title="Ouvrir WhatsApp"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-brand-muted text-xs">
                        Aucun prospect ne correspond aux critères.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selected Lead Details Drawer */}
          <div className="lg:col-span-4 bg-brand-paperCard border border-brand-line rounded-lg p-5 shadow-sm">
            {selectedLead ? (
              <div className="space-y-4">
                <div className="border-b border-brand-line pb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-red">
                    Fiche Prospect #{selectedLead.id}
                  </span>
                  <h3 className="font-heading text-base font-bold text-brand-ink mt-0.5">
                    {selectedLead.full_name}
                  </h3>
                  <span className="text-xs text-brand-muted">Source : {selectedLead.source}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-red" />
                    <a href={`tel:${selectedLead.phone}`} className="font-bold text-brand-ink hover:underline">
                      {selectedLead.phone}
                    </a>
                  </div>

                  {selectedLead.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-brand-red" />
                      <a href={`mailto:${selectedLead.email}`} className="text-brand-muted hover:underline">
                        {selectedLead.email}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    <span className="text-brand-ink font-semibold">{selectedLead.city}</span>
                  </div>
                </div>

                <div className="p-3 bg-brand-paper rounded border border-brand-line text-xs space-y-1.5">
                  <strong className="block text-brand-ink font-bold">Projet demandé :</strong>
                  <p className="text-brand-muted">{selectedLead.project_type} ({selectedLead.material.toUpperCase()})</p>
                  {selectedLead.notes && (
                    <p className="text-xs text-gray-700 italic border-t border-brand-line pt-1.5 mt-1.5">
                      « {selectedLead.notes} »
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=Bonjour%20${encodeURIComponent(selectedLead.full_name)}%2C%20l'%C3%A9quipe%20Cristalu%20Nord%20a%20bien%20re%C3%A7u%20votre%20projet%20%28${encodeURIComponent(selectedLead.project_type)}%29.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded text-xs font-bold shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contacter sur WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-brand-muted text-xs">
                Sélectionnez un prospect dans la liste pour afficher sa fiche complète.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
