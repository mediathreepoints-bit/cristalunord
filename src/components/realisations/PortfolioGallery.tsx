'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, MapPin, Eye, MessageSquare } from 'lucide-react';
import { INITIAL_PROJECTS } from '@/lib/data/initial-data';
import LightboxModal from '@/components/realisations/LightboxModal';
import { ProjectItem } from '@/types';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['Tous', 'Façades', 'Menuiseries', 'Intérieurs'];

  const filteredProjects = activeCategory === 'Tous'
    ? INITIAL_PROJECTS
    : INITIAL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-line pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-5 py-2.5 rounded-full font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-ink text-white shadow-sm'
                  : 'bg-brand-paperCard text-brand-muted hover:text-brand-ink border border-brand-line hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-brand-muted font-medium">
          {filteredProjects.length} réalisation{filteredProjects.length > 1 ? 's' : ''} affichée{filteredProjects.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <article
            key={proj.id}
            className="bg-brand-paperCard border border-brand-line rounded-lg overflow-hidden group hover:border-brand-red hover:shadow-apple transition-all duration-300 flex flex-col"
          >
            {/* Image Box */}
            <div
              onClick={() => setSelectedProject(proj)}
              className="relative h-64 w-full cursor-pointer overflow-hidden bg-gray-100"
            >
              <Image
                src={proj.cover_image}
                alt={proj.title_fr}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-brand-paperCard text-brand-ink p-3 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <ZoomIn className="w-5 h-5 text-brand-red" />
                </span>
              </div>

              <span className="absolute top-3 left-3 bg-brand-ink/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded">
                {proj.category}
              </span>

              <span className="absolute top-3 right-3 bg-brand-paper/90 backdrop-blur-md text-brand-ink text-[10px] font-semibold px-2 py-0.5 rounded border border-brand-line flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-red" />
                {proj.city}
              </span>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3
                  onClick={() => setSelectedProject(proj)}
                  className="font-heading text-sm font-bold text-brand-ink mb-2 hover:text-brand-red cursor-pointer transition-colors"
                >
                  {proj.title_fr}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                  {proj.description_fr}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-brand-line flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className="font-bold text-brand-ink hover:text-brand-red inline-flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Agrandir</span>
                </button>

                <a
                  href={`https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20un%20devis%20pour%20ce%20type%20de%20projet%20%3A%20${encodeURIComponent(proj.title_fr)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Devis ↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <LightboxModal
          project={selectedProject}
          allProjects={filteredProjects}
          onClose={() => setSelectedProject(null)}
          onSelect={(p) => setSelectedProject(p)}
        />
      )}
    </div>
  );
}
