'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/admin/AdminHeader';
import { 
  Users, FileText, FolderKanban, MessageSquare, TrendingUp, 
  ArrowUpRight, Clock, CheckCircle2, AlertTriangle, ShieldCheck 
} from 'lucide-react';
import { dataStore } from '@/lib/data/initial-data';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function AdminOverviewPage() {
  const leads = dataStore.leads;
  const quotes = dataStore.quotes;
  const projects = dataStore.projectTrackings;
  const conversations = dataStore.conversations;

  const totalRevenue = quotes
    .filter((q) => q.status === 'accepte' || q.status === 'envoye')
    .reduce((sum, q) => sum + q.total_ttc, 0);

  const pendingQuotesCount = quotes.filter((q) => q.status === 'en_attente' || q.status === 'envoye').length;
  const activeProjectsCount = projects.filter((p) => p.status !== 'livre').length;

  const stats = [
    {
      label: 'Demandes de Devis & Leads',
      value: leads.length,
      change: '+14% ce mois',
      icon: Users,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      label: 'Devis en Attente / Négociation',
      value: pendingQuotesCount,
      change: 'À relancer sous 48h',
      icon: FileText,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      label: 'Chantiers en Cours (Tanger & Nord)',
      value: activeProjectsCount,
      change: 'Pose & Fabrication',
      icon: FolderKanban,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      label: 'Conversations WhatsApp',
      value: conversations.length,
      change: 'Assistant IA actif',
      icon: MessageSquare,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Tableau de Bord & Vue Générale" />

      <main className="p-8 space-y-8 flex-1">
        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-brand-paperCard border border-brand-line p-5 rounded-lg shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-muted uppercase">{st.label}</span>
                  <div className={`w-8 h-8 rounded border flex items-center justify-center ${st.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <strong className="text-2xl font-extrabold text-brand-ink font-heading block">
                    {st.value}
                  </strong>
                  <span className="text-[11px] text-brand-muted font-medium">{st.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Banner */}
        <div className="bg-brand-ink text-white p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-brand-lineDark">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-redLight bg-brand-red px-2 py-0.5 rounded">
              VOLUME D’AFFAIRES EN COURS
            </span>
            <div className="text-3xl font-extrabold font-heading mt-2">
              {formatCurrency(totalRevenue)}
            </div>
            <p className="text-xs text-gray-300 mt-1">
              Devis transmis et acceptés pour menuiseries aluminium, PVC et façades vitrées.
            </p>
          </div>

          <Link
            href="/admin/devis"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white px-5 py-2.5 rounded text-xs font-bold transition-all shadow-sm"
          >
            <span>Accéder aux devis</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Two Columns : Recent Leads & Recent Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Leads */}
          <div className="bg-brand-paperCard border border-brand-line rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 border-b border-brand-line pb-3">
              <h2 className="font-heading text-sm font-bold text-brand-ink flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-red" />
                <span>Derniers Prospects &amp; Demandes de Devis</span>
              </h2>
              <Link href="/admin/crm" className="text-xs font-bold text-brand-red hover:underline">
                Voir tout ({leads.length})
              </Link>
            </div>

            <div className="space-y-3">
              {leads.slice(0, 4).map((ld) => (
                <div
                  key={ld.id}
                  className="p-3.5 bg-brand-paper border border-brand-line rounded flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <strong className="block text-brand-ink font-bold">{ld.full_name}</strong>
                    <span className="text-[11px] text-brand-muted">
                      {ld.project_type} · {ld.city} ({ld.phone})
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize ${
                      ld.status === 'nouveau'
                        ? 'bg-blue-100 text-blue-800'
                        : ld.status === 'qualifie'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {ld.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Projects Tracker */}
          <div className="bg-brand-paperCard border border-brand-line rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 border-b border-brand-line pb-3">
              <h2 className="font-heading text-sm font-bold text-brand-ink flex items-center gap-2">
                <FolderKanban className="w-4 h-4 text-brand-red" />
                <span>Chantiers &amp; Fabrication en Cours</span>
              </h2>
              <Link href="/admin/projets" className="text-xs font-bold text-brand-red hover:underline">
                Voir tout
              </Link>
            </div>

            <div className="space-y-4">
              {projects.map((pr) => (
                <div key={pr.id} className="p-3.5 bg-brand-paper border border-brand-line rounded text-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="block text-brand-ink font-bold">{pr.client_name}</strong>
                      <span className="text-[11px] text-brand-muted">{pr.menuiserie_type} · {pr.site_address}</span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-red">{pr.progress_percentage}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-brand-red h-full transition-all"
                      style={{ width: `${pr.progress_percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
