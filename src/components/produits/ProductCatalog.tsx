'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Palette, Layers } from 'lucide-react';
import { INITIAL_PRODUCTS } from '@/lib/data/initial-data';
import { MaterialType } from '@/types';

export default function ProductCatalog() {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');

  const filteredProducts = selectedMaterial === 'all'
    ? INITIAL_PRODUCTS
    : INITIAL_PRODUCTS.filter((p) => p.material === selectedMaterial || (selectedMaterial === 'verre' && p.category_slug.includes('vitrage')));

  return (
    <div className="space-y-10">
      {/* Material Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-line pb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'Tous les produits' },
            { id: 'aluminium', label: 'Aluminium RPT' },
            { id: 'pvc', label: 'PVC Isolant' },
            { id: 'verre', label: 'Verre & Façades' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedMaterial(item.id)}
              className={`text-xs px-5 py-2.5 rounded-full font-bold transition-all ${
                selectedMaterial === item.id
                  ? 'bg-brand-ink text-white shadow-sm'
                  : 'bg-brand-paperCard text-brand-muted hover:text-brand-ink border border-brand-line hover:border-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <span className="text-xs text-brand-muted font-medium">
          {filteredProducts.length} référence{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((prod) => (
          <article
            key={prod.id}
            className="bg-brand-paperCard border border-brand-line rounded-lg overflow-hidden group hover:border-brand-red hover:shadow-apple transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Cover */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <Image
                  src={prod.cover_image}
                  alt={prod.name_fr}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 bg-brand-ink/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded">
                  {prod.material.toUpperCase()}
                </span>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="font-heading text-base font-bold text-brand-ink mb-2 group-hover:text-brand-red transition-colors">
                  {prod.name_fr}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  {prod.description_fr}
                </p>

                {/* Features */}
                <div className="space-y-1.5 border-t border-brand-line pt-3 mb-4">
                  {prod.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-brand-ink">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Colors */}
                <div className="flex items-center gap-1.5 text-[11px] text-brand-muted mb-4">
                  <Palette className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span>Teintes : {prod.available_colors.slice(0, 2).join(', ')}...</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 pt-0 border-t border-brand-line/60 mt-4 flex items-center justify-between">
              <Link
                href={`/devis?produit=${encodeURIComponent(prod.name_fr)}&materiau=${prod.material}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-ink hover:bg-brand-red text-white py-2.5 rounded-sm text-xs font-bold transition-all"
              >
                <span>Configurer un devis pour ce modèle</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
