'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { FolderKanban, CheckCircle2, Clock, MapPin, User, Plus } from 'lucide-react';
import { dataStore } from '@/lib/data/initial-data';
import { ProjectTracking, ProjectStatus } from '@/types';
import { formatDate } from '@/lib/utils';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectTracking[]>(dataStore.projectTrackings);

  const statusLabels: Record<ProjectStatus, { label: string; color: string }> = {
    etude: { label: 'Étude technique', color: 'bg-blue-100 text-blue-800' },
    devis_valide: { label: 'Devis validé', color: 'bg-purple-100 text-purple-800' },
    cotes_prises: { label: 'Cotes prises', color: 'bg-indigo-100 text-indigo-800' },
    en_fabrication: { label: 'En fabrication atelier', color: 'bg-amber-100 text-amber-800' },
    en_pose: { label: 'En pose sur chantier', color: 'bg-orange-100 text-orange-800' },
    livre: { label: 'Ouvrage livré', color: 'bg-emerald-100 text-emerald-800' },
    garantie_decennale: { label: 'Garantie décennale active', color: 'bg-emerald-200 text-emerald-900' },
  };

  const handleUpdateProgress = (id: string, newProgress: number) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, progress_percentage: newProgress } : p))
    );
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Suivi des Chantiers &amp; Fabrication" />

      <main className="p-8 space-y-6 flex-1">
        <div className="bg-brand-paperCard p-4 rounded-lg border border-brand-line flex justify-between items-center">
          <div>
            <h2 className="font-heading text-sm font-bold text-brand-ink">
              Tableau de Bord des Opérations
            </h2>
            <p className="text-xs text-brand-muted">Suivi de l'avancement de la fabrication en atelier et de la pose sur chantier</p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-brand-paperCard border border-brand-line rounded-lg p-6 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${statusLabels[proj.status].color}`}>
                    {statusLabels[proj.status].label}
                  </span>
                  <span className="text-xs font-bold text-brand-red">{proj.progress_percentage}% achevé</span>
                </div>

                <h3 className="font-heading text-base font-bold text-brand-ink">{proj.client_name}</h3>
                <p className="text-xs text-brand-muted mt-0.5">{proj.menuiserie_type}</p>

                <div className="mt-3 space-y-1.5 text-xs text-brand-muted border-t border-brand-line pt-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>{proj.site_address}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-red" />
                    <span>Responsable : {proj.responsible}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-red" />
                    <span>Livraison prévue : {formatDate(proj.delivery_date)}</span>
                  </div>
                </div>

                {proj.notes && (
                  <p className="mt-3 p-2.5 bg-brand-paper rounded text-xs text-brand-ink italic">
                    « {proj.notes} »
                  </p>
                )}
              </div>

              {/* Progress Slider */}
              <div className="pt-2 border-t border-brand-line space-y-2">
                <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-red h-full transition-all duration-300"
                    style={{ width: `${proj.progress_percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-muted">Mettre à jour :</span>
                  <div className="flex gap-1.5">
                    {[25, 50, 75, 100].map((val) => (
                      <button
                        key={val}
                        onClick={() => handleUpdateProgress(proj.id, val)}
                        className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                          proj.progress_percentage === val
                            ? 'bg-brand-ink text-white border-brand-ink'
                            : 'bg-brand-paper text-brand-muted hover:text-brand-ink border-brand-line'
                        }`}
                      >
                        {val}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
