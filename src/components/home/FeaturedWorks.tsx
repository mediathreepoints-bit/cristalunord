'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ZoomIn, Eye } from 'lucide-react';
import { INITIAL_PROJECTS } from '@/lib/data/initial-data';
import LightboxModal from '@/components/realisations/LightboxModal';
import { ProjectItem } from '@/types';

export default function FeaturedWorks() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featured = INITIAL_PROJECTS.slice(0, 6);

  return (
    <section className="py-20 bg-brand-paper" id="realisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                03 / NOS RÉALISATIONS
              </span>
              <span className="w-8 h-[1px] bg-brand-red"></span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink">
              Du dessin au <em className="font-serif italic font-normal text-brand-red">chantier terminé.</em>
            </h2>
          </div>

          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-ink hover:text-brand-red transition-colors pb-1 border-b-2 border-brand-ink hover:border-brand-red"
          >
            <span>Voir toute la galerie de projets</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="bg-brand-paperCard border border-brand-line rounded-lg overflow-hidden group hover:border-brand-red hover:shadow-apple transition-all duration-300 flex flex-col"
            >
              {/* Image with zoom trigger */}
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

                <span className="absolute top-3 left-3 bg-brand-ink/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {proj.category}
                </span>

                <span className="absolute top-3 right-3 bg-brand-paper/90 backdrop-blur-md text-brand-ink text-[10px] font-semibold px-2 py-0.5 rounded border border-brand-line">
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
                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {proj.description_fr}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-line flex items-center justify-between text-[11px]">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="font-bold text-brand-ink hover:text-brand-red inline-flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Agrandir</span>
                  </button>

                  <a
                    href={`https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20un%20devis%20similaire%20au%20projet%20%3A%20${encodeURIComponent(proj.title_fr)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    Devis similaire ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <LightboxModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          allProjects={featured}
          onSelect={(p) => setSelectedProject(p)}
        />
      )}
    </section>
  );
}
