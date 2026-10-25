'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MessageSquare, MapPin } from 'lucide-react';
import { ProjectItem } from '@/types';

interface LightboxProps {
  project: ProjectItem;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelect: (project: ProjectItem) => void;
}

export default function LightboxModal({ project, allProjects, onClose, onSelect }: LightboxProps) {
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;
    onSelect(allProjects[nextIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % allProjects.length;
    onSelect(allProjects[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allProjects]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-w-4xl w-full bg-brand-paperCard rounded-lg overflow-hidden shadow-apple-lg border border-brand-line flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 bg-brand-ink text-white border-b border-brand-lineDark">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider bg-brand-red text-white px-2 py-0.5 rounded">
              {project.category}
            </span>
            <span className="text-xs text-gray-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-red" />
              {project.city} ({project.completion_year})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Fermer la vue agrandie"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative flex-1 min-h-[320px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[460px]">
            <Image
              src={project.cover_image}
              alt={project.title_fr}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Controls */}
          {allProjects.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-brand-red text-white rounded-full transition-all"
                aria-label="Projet précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-brand-red text-white rounded-full transition-all"
                aria-label="Projet suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Details */}
        <div className="p-5 bg-brand-paperCard border-t border-brand-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-heading text-base font-bold text-brand-ink mb-1">
              {project.title_fr}
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              {project.description_fr}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-bold text-brand-muted">
              {currentIndex + 1} / {allProjects.length}
            </span>

            <a
              href={`https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20un%20devis%20pour%20ce%20type%20de%20projet%20%3A%20${encodeURIComponent(project.title_fr)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-sm text-xs font-bold transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Devis WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
